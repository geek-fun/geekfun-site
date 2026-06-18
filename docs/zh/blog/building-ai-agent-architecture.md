---
title: "生产级 AI Agent 工程实践：架构设计（第一篇）"
description: DocKit 如何在 Rust 后端与 Vue 3 前端之间构建生产级 AI Agent——通过 Tauri IPC 实现流式事件传输、可组合的编排层，以及 Agent 逻辑与 UI 状态的清晰分离。
head:
  - - meta
    - name: keywords
      content: AI Agent 架构, 生产级 AI Agent, Tauri AI Agent, Rust AI Agent, Vue 3 AI Agent, LLM Agent 设计, 流式 Agent, Agent 循环, IPC Agent 事件, 桌面 AI Agent
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/blog/building-ai-agent-architecture
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/building-ai-agent-architecture
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/building-ai-agent-architecture
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/building-ai-agent-architecture
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "生产级 AI Agent 工程实践：架构设计（第一篇）",
        "description": "DocKit 如何在 Rust 后端与 Vue 3 前端之间构建生产级 AI Agent，通过 Tauri IPC 实现流式事件、可组合编排层与清晰的状态分离。",
        "image": "https://www.geekfun.club/og/master-zh.png",
        "author": { "@type": "Organization", "name": "GEEKFUN", "url": "https://www.geekfun.club" },
        "publisher": { "@type": "Organization", "name": "GEEKFUN", "logo": { "@type": "ImageObject", "url": "https://www.geekfun.club/geekfun.png" } },
        "datePublished": "2026-05-22",
        "dateModified": "2026-05-22",
        "inLanguage": "zh-CN",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.geekfun.club/zh/blog/building-ai-agent-architecture" },
        "keywords": ["AI Agent", "Tauri", "Rust", "Vue 3", "流式 LLM", "Agent 架构"],
        "articleSection": "AI Agent 工程"
      }
---

# 生产级 AI Agent 工程实践：架构设计（第一篇）

*第一篇，共五篇 — [第二篇：工具系统设计](/zh/blog/building-ai-agent-tools) · [第三篇：权限与确认](/zh/blog/building-ai-agent-permissions) · [第四篇：内存与上下文压缩](/zh/blog/building-ai-agent-memory) · [第五篇：持久化与容错](/zh/blog/building-ai-agent-persistence)*

---

关于 AI Agent 的文章大多止步于 Demo 阶段——一段 Python 脚本、一次 OpenAI 调用、一条流式响应。生产环境则完全不同：你面对的是真实用户、连接着生产数据库的实时系统、可能造成数据丢失的破坏性操作，以及必须让用户感到即时且可信的界面。

这个系列直接基于开源项目 [DocKit](https://github.com/geek-fun/dockit)（一款 AI 原生的 NoSQL 桌面客户端）的源代码，讲述生产级 Agent 的真实工程实践。

第一篇解决的是在写任何 Agent 代码之前都必须回答的最难问题：**Agent 住在哪里，以及它如何与其他一切通信？**

## 栈的选择问题

DocKit 基于 [Tauri](https://tauri.app/) 运行在桌面端——这个框架将原生 Rust 后端与基于 Web 的前端配对。在引入 AI Agent 时，团队面临一个任何在非 Python 应用中构建 Agent 的人都会遇到的抉择：

- 把 Agent 逻辑放在前端（TypeScript，浏览器沙箱中）？
- 还是放在原生后端（Rust，拥有完整系统访问权限）？

这个选择比表面上看起来重要得多。

前端可以方便地访问 UI 状态和用户交互，但它运行在沙箱化的 WebView 中，无法干净地持有原生持久资源，而且需要将数据库凭证暴露给 JavaScript——这是一个显著的攻击面。更实际的是，带重试的 LLM 流式响应、在数百个 SSE 事件中拼装分块的工具调用、管理并发数据库连接——这类有状态的、CPU 密集型工作本就属于原生进程。

Rust 后端胜出。Agent 循环、LLM 客户端、工具执行器、会话持久化、Token 计数、上下文压缩——全部在 Rust 中。前端做它最擅长的事：状态管理、流式 UI、用户交互。

## IPC 边界

当两个进程需要实时通信时，接口设计决定成败。DocKit 使用 Tauri 的 IPC 桥接，提供两种通信原语：

**命令**（`invoke`）是 RPC 调用——前端调用 Rust，得到一个类型化的结果。这处理了离散操作：启动新的 Agent 会话、加载对话历史、确认一次工具调用、触发上下文压缩。

**事件**（`emit`/`listen`）是从 Rust 到前端的单向推送。这处理了流：LLM 响应的每一个 Token、Agent 决定发起的每一次工具调用、每一个返回的工具结果。前端注册监听器，随着数据到来做出响应。

这种不对称性是刻意的。命令对应状态转换（离散的、关心成功/失败的操作）。事件对应流（连续的、每个数据块都要更新 UI 的场景）。Agent 循环本质上是一个流，所以事件是其主要输出通道。

### 事件词汇表

Agent 循环发出的完整事件覆盖了一次交互的完整生命周期：

- `agent-loop-delta` — LLM 响应中的一个内容 Token，追加到当前助手消息
- `agent-loop-thinking-delta` — 推理 Token（当模型支持显式推理/思考输出时）
- `agent-loop-tool-call` — Agent 决定调用一个工具；携带工具名、参数和唯一调用 ID
- `agent-loop-tool-result` — 一个工具执行完毕；携带输出摘要和计时元数据
- `agent-loop-step-done` — 当前 LLM 流式调用已完成；一个步骤可能包含多次工具调用
- `agent-loop-done` — 整个 Agent 循环已完成；会话返回空闲状态
- `agent-loop-error` — 发生了错误；会话以明确的错误信息转换到错误状态
- `agent-context-usage` — 每次迭代发出，传达当前 Token 使用量及是否需要压缩

UI 中的每个状态转换都由这些事件之一驱动。没有轮询。前端是纯响应式的。

## 循环执行器

Agent 的核心是 DocKit 所称的*循环执行器*（loop runner）——一个在 Rust 中协调从用户消息到最终响应的完整 Agent 交互的函数。

与其说它是一个函数，不如说它是一个进程：它最多运行 20 次迭代，每次迭代都涉及发起一次 LLM 调用、解析响应，然后决定下一步做什么。如果 LLM 返回纯文本回复，循环结束。如果 LLM 返回工具调用——它想对数据库执行的函数——循环暂停、执行这些工具（如需则经用户确认）、将结果反馈给 LLM，然后继续。

每次迭代遵循一致的序列：

1. 通过 `agent-context-usage` 发送当前 Token 使用量
2. 如果 Token 使用量偏高，可选地执行上下文压缩
3. 从 SQLite 加载对话历史
4. 构建 LLM 请求（消息 + 工具定义）
5. 流式处理 LLM 响应，随着到来发出 `agent-loop-delta` 和 `agent-loop-thinking-delta` Token
6. 如果响应包含工具调用：持久化助手消息，处理每个工具调用（权限检查、确认、执行）
7. 持久化工具结果并进入下一次迭代
8. 如果响应是最终回复：持久化它并发出 `agent-loop-done`

值得注意的是每一步之后的持久化。与将所有内容保存在内存中的玩具 Agent 不同，DocKit 在每个有意义的状态变化时都写入 SQLite。这意味着步骤之间的崩溃不会丢失数据，可以从历史记录加载会话，并且工具结果可用于后续检查，即使完整输出对于 UI 来说太大。

## 前端 Composable

在 Vue 3 端，Agent 交互由一个 Composable 编排——`useChatAgent`——它连接所有事件监听器并向 UI 暴露一个简单的 `sendMessage` 接口。

Composable 模式在这里很合适，因为它将所有 Tauri IPC 复杂性与应用程序其余部分隔离开来。使用它的视图和 Store 对事件名称或 invoke 命令一无所知。它们得到一个 `sendMessage` 函数和随着事件到来而更新的响应式状态。

当用户发送消息时，Composable：

1. 创建或解析会话 ID
2. 立即将用户消息插入本地 Store（无需等待服务器往返——UI 感觉即时）
3. 从后端获取工具定义（如果会话附加了数据库连接）
4. 构建系统提示，整合附加的数据源、Schema 和任何会话特定规则
5. 用消息、设置和连接配置调用 Rust 后端的 `run_agent_loop`
6. 从那时起，Composable 是纯响应式的——传入的事件更新 Store，Store 更新 UI

这种分离很重要：Composable 是前端中唯一了解 Tauri 事件的地方。它之上的一切（视图、Store、其他 Composable）都使用普通的 Vue 响应式状态。

### 功能适配器

DocKit 有两个独立的 Agent UI：数据工作室中的全屏聊天，以及可从任何连接视图访问的侧边栏助手。它们有不同的上下文、不同的会话生命周期和不同的附加数据库连接方式。

与其构建两个独立的 Agent 集成，DocKit 使用了轻量的适配器模式。`useDataStudioChatAgent` 和 `useSidebarChatAgent` 各自用功能特定的逻辑包装 `useChatAgent`：创建哪些会话、注入什么上下文、如何暴露连接。核心编排逻辑存在于基础 Composable 中，只有一份。

## 会话状态的存放位置

DocKit 中的会话有两种状态，按设计存放在不同的地方：

**运行时状态**（不持久化）——在会话开始时获取的工具定义和元数据、从 Token 事件中组装的流式助手消息、等待用户输入的确认通道。这种状态是临时的，每次循环运行时重新构建。

**持久化状态**（SQLite）——对话消息、工具调用记录、工具结果、会话元数据。这是可以从历史记录加载、导出或用作下一次 LLM 调用基础的持久记录。

这种分离很重要，因为它防止了陈旧数据跨会话持久化，同时确保真正重要的内容不会丢失。

## 为什么这个架构有效

这个设计的任何单个部分都没有新颖的见解。IPC 桥接、事件驱动的 UI 和持久化会话存储都是标准模式。让这个架构保持一致性的是它们的组合：

- Agent 的不安全面（数据库访问、网络调用、文件处理）被隔离在它应在的原生进程中
- UI 是纯响应式的——它无法意外触发副作用；它只是响应事件
- 持久化层在每一步都在，而不只在最后——系统对部分失败有弹性
- Composable 抽象阻止了 Tauri 实现细节泄漏到应用程序代码中

本系列的第二篇将深入工具系统的设计——具体是工具如何被定义为带有风险级别和权限的一等数据结构，以及为什么这些元数据的重要性远不止调用正确的数据库函数。

---

*DocKit 是开源的。这里描述的架构存在于 [`src-tauri/src/agent/`](https://github.com/geek-fun/dockit/tree/master/src-tauri/src/agent)（Rust）和 [`src/composables/`](https://github.com/geek-fun/dockit/tree/master/src/composables)（Vue 3）中。如果你在构建类似的东西，代码是最好的文档。*
