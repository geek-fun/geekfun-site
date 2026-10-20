---
title: "生产级 AI Agent 工程实践：持久化与容错（第五篇）"
description: DocKit 如何通过每步 SQLite 写入、指数退避重试策略和跨提供商错误恢复，让 AI Agent 对 API 失败和意外崩溃保持弹性。
head:
  - - meta
    - name: keywords
      content: AI Agent 持久化, Agent 容错, LLM 重试策略, Agent 会话恢复, SQLite Agent 存储, 指数退避, Agent 错误处理, LLM API 弹性
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/blog/building-ai-agent-persistence
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/building-ai-agent-persistence
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/building-ai-agent-persistence
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/building-ai-agent-persistence
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "生产级 AI Agent 工程实践：持久化与容错（第五篇）",
        "description": "DocKit 如何通过每步 SQLite 写入、指数退避重试和跨提供商错误恢复，让 AI Agent 对 API 失败和意外崩溃保持弹性。",
        "image": "https://www.geekfun.club/og/master-zh.png",
        "author": { "@type": "Organization", "name": "GEEKFUN", "url": "https://www.geekfun.club" },
        "publisher": { "@type": "Organization", "name": "GEEKFUN", "logo": { "@type": "ImageObject", "url": "https://www.geekfun.club/geekfun.png" } },
        "datePublished": "2026-05-22",
        "dateModified": "2026-05-22",
        "inLanguage": "zh-CN",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.geekfun.club/zh/blog/building-ai-agent-persistence" },
        "keywords": ["AI Agent 持久化", "容错", "重试策略", "会话恢复", "SQLite", "指数退避"],
        "articleSection": "AI Agent 工程"
      }
---

# 生产级 AI Agent 工程实践：持久化与容错（第五篇）

*第五篇，共五篇 — [第一篇：架构设计](/zh/blog/building-ai-agent-architecture) · [第二篇：工具系统设计](/zh/blog/building-ai-agent-tools) · [第三篇：权限与确认](/zh/blog/building-ai-agent-permissions) · [第四篇：内存与上下文压缩](/zh/blog/building-ai-agent-memory)*

---

生产 Agent 遇到的失败类型与开发时遇到的不同。

在开发中，你的 LLM 调用成功，工具执行，用户看到结果。在生产环境中，API 在凌晨三点开始返回 503 错误，用户在工具执行中途关闭笔记本电脑，Anthropic 出现服务中断，用户的请求在 LLM 流式传输中途超时。

如果你的 Agent 将所有内容保存在内存中并在任何失败时完全崩溃，这些场景都会成为数据丢失和糟糕的用户体验。DocKit 用两个系统解决了这个问题：**每步持久化**和**多层错误恢复**。

## 每步 SQLite 写入

DocKit 的持久化策略不是在会话结束时保存——而是在每个有意义的状态变化时保存。

循环执行器在以下每一步之后写入：

1. 用户消息到达（立即持久化，在任何 LLM 调用之前）
2. LLM 流式响应完成（持久化完整的助手消息）
3. 工具调用决定（持久化工具调用记录和参数）
4. 工具执行完成（持久化工具结果和元数据）
5. 会话状态变化（空闲 → 运行中 → 错误）
6. 压缩事件（标记旧消息为已压缩，写入摘要）

这种细粒度的写入模式意味着步骤之间的崩溃不会丢失任何内容。用户消息始终被保存，即使 LLM 调用永远没有发生。工具结果始终被保存，即使助手的后续回复没有发生。一个会话可以在任何步骤中断，重新加载时，它从精确中断的地方恢复。

### 会话模式

会话在 SQLite 中以规范化的模式存储：

- `agent_sessions` — 会话元数据：ID、创建时间、状态、附加的连接引用、配置快照（第三篇描述的权限模式、确认规则）
- `agent_messages` — 对话历史：角色（user/assistant/tool_result/tool_call）、内容、时间戳、序号、压缩标志
- `agent_tool_calls` — 工具执行记录：工具名称、序列化参数、执行时间、结果摘要、成功/失败标志

规范化很重要，因为它使增量更新成为可能而不是完整重写。当工具调用完成时，系统只需更新 `agent_tool_calls` 中的那一行，而不是重新序列化整个会话。在高频写入路径上，这避免了大量不必要的工作。

### 从历史记录重建上下文

当用户从历史记录加载会话时，循环执行器不是从空状态开始，而是：

1. 从 SQLite 获取所有未压缩的消息
2. 如果存在，获取最新的压缩摘要
3. 构建 LLM 上下文：摘要（如果存在）+ 保留的消息
4. 将会话状态设置为 `idle`（而不是 `running`，因为没有活跃的 LLM 调用待处理）

这意味着历史记录中的会话不仅仅是查看用途的记录——它们可以继续，带有完整的上下文（或尽可能多的上下文）。

## 错误分类

生产中的 LLM API 失败并非都一样。某些失败是瞬态的并且值得重试；某些是永久性的需要立即失败；某些需要指数退避；某些需要特殊处理。

DocKit 的错误处理层按这些类别分类错误：

### 可重试错误（带退避）

这些是瞬态基础设施问题，往往会自行解决：

- **速率限制**（HTTP 429，错误代码 `rate_limit_exceeded`）— LLM 提供商在短时间内的请求过多时触发，通常在几秒到几分钟后解除
- **配额不足**（`insufficient_quota`）— 通常是暂时的，特别是在共享 API 密钥或包月计划上；有时值得重试，因为配额可能每分钟重置
- **服务不可用**（HTTP 503，`service_unavailable`）— 提供商端的瞬态故障
- **提供商过载**（`overloaded_error`）— Anthropic 特定的错误，在高负载时返回

### 不可重试错误（立即失败）

这些表明需要用户干预的根本问题：

- **认证失败**（HTTP 401，`invalid_api_key`）— API 密钥无效或已过期；重试不会修复它
- **权限不足**（HTTP 403）— 账户没有使用该模型的权限
- **模型不存在**（HTTP 404，`model_not_found`）— 请求的模型不可用；可能是配置错误或已弃用的模型
- **无效请求**（HTTP 400，`invalid_request_error`）— 发送的内容有问题（无效参数、内容被拒绝等）
- **上下文长度超出**（`context_length_exceeded`）— 消息超过了模型的最大上下文；压缩应该已经阻止了这种情况，但如果发生，立即失败并显示有用的错误信息

### 重试策略

对于可重试错误，DocKit 使用带抖动的指数退避：

- 首次重试：等待 1 秒 ± 250ms
- 第二次重试：等待 3 秒 ± 250ms
- 第三次重试：等待 8 秒 ± 250ms
- 三次失败后：放弃并以明确的错误消息失败

抖动（±250ms 随机偏移）防止了"惊群效应"——如果多个 Agent 会话同时遇到速率限制并在完全相同的时刻重试，它们可能会触发另一个速率限制。随机偏移使重试交错开来。

1/3/8 秒的梯度比均匀间隔更有效，因为大多数瞬态故障在第一次重试时就解决了，而真正的服务中断通常需要更长时间。在 1 秒后第一次重试是快速的——用户几乎不会注意到延迟。如果第一次重试失败了，3 秒和 8 秒的间隔给服务更多时间恢复，而不会永远等待。

### 跨提供商错误规范化

OpenAI、Anthropic 和 DeepSeek 以不同格式报告错误。OpenAI 在 JSON 响应体中返回结构化错误对象。Anthropic 使用其自己的错误类型系统。某些提供商在某些失败类型上只返回 HTTP 状态码，没有结构化的错误体。

DocKit 的提供商层（`harness.rs`）在错误到达重试逻辑之前对其进行规范化。规范化器将提供商特定的错误表示映射到一致的内部类型：可重试或不可重试，带有人类可读的消息，适合向用户展示。

这意味着重试逻辑不需要了解提供商差异——它对所有提供商的运作方式相同。

## 流式恢复

LLM 调用失败最烦人的地方之一是 LLM 在流式传输 80% 的响应后失败。用户已经看到了部分响应流入——然后一切停止，会话崩溃。

DocKit 通过在流结束之前不持久化助手消息来处理这个问题。在流式调用期间，Token 通过 `agent-loop-delta` 事件发送到 UI，但完整消息在后端仍然是流式缓冲区中的内存内容。

只有当流干净地完成（所有 Token 都已到达，LLM 发送了停止信号）时，消息才被写入 SQLite。

如果流中途失败——超时、网络断开、提供商错误——缓冲区被丢弃，不写入任何内容。循环执行器触发重试，重新启动整个 LLM 调用，从最后一个持久化消息开始。UI 清除部分流式输出并重新开始。

用户体验是：响应开始出现，然后重置并从头开始。这比显示截断的、损坏的响应或留下半完成的状态更好。

## 状态机与错误可见性

循环执行器维护一个明确的状态机，用于会话：`Idle`、`Running`、`Error`。这些状态通过 `agent-loop-error` 和 `agent-loop-done` 事件传播到前端。

明确的错误状态意味着 UI 永远不必猜测 Agent 是否正在工作、是否完成或是否出了问题。会话要么正在运行（流式指示器可见），要么空闲（等待输入），要么处于错误状态（显示带有重试选项的错误消息）。

错误消息是故意具体的。不是"发生了一些错误"，而是"速率限制超过了，将在 8 秒后重试"或"API 密钥无效——请检查你的设置"或"上下文窗口已满——开始新会话继续"。用户了解发生了什么，以及下一步需要做什么。

## 综合来看

这五篇文章描述的系统代表了一种生产 AI Agent 的特定方法：

- **Rust 后端承载危险代码**——数据库访问、网络调用、并发状态管理——而前端保持纯响应式
- **工具被定义为携带安全元数据的数据**，而不只是可调用的函数
- **权限是防御层**，在执行层强制执行，而不是仅在 UI 层
- **上下文管理是主动的**，带有廉价启发式和昂贵 LLM 压缩的分级方法
- **持久化在每一步发生**，使系统对部分失败有弹性
- **错误分类驱动恢复**，带有适当的重试策略和有意义的用户消息

这些决策都不是尖端的 AI 研究。它们是使系统在真实条件下对真实用户工作所需的工程工作。

如果你正在构建生产 Agent，这里最重要的一课是：**从技术上让 Agent 工作的工作量与让它在生产中可靠工作的工作量相比微不足道。** 上下文管理、错误恢复、持久化、权限——这些后来的系统往往占开发时间的大部分，却在演示视频中几乎看不到。

DocKit 是开源的。如果你在构建类似的东西，这个代码库是你比教程或论文获益更多的参考。

---

*持久化在 [`src-tauri/src/agent/loop_runner.rs`](https://github.com/geek-fun/dockit/blob/master/src-tauri/src/agent/loop_runner.rs) 中。提供商规范化在 [`src-tauri/src/agent/harness.rs`](https://github.com/geek-fun/dockit/blob/master/src-tauri/src/agent/harness.rs) 中。*
