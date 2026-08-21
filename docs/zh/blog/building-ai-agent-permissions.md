---
title: "生产级 AI Agent 工程实践：权限与确认（第三篇）"
description: DocKit 如何为 AI Agent 实现多层权限模型——会话级模式、每连接权限、基于风险的确认，以及减少摩擦而不牺牲安全的持久允许/拒绝规则。
head:
  - - meta
    - name: keywords
      content: AI Agent 权限, Agent 确认流程, 人机协同 AI, AI Agent 安全, LLM 工具确认, Agent 权限模型, AI Agent 用户体验, oneshot 通道确认
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/blog/building-ai-agent-permissions
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/building-ai-agent-permissions
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/building-ai-agent-permissions
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/building-ai-agent-permissions
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "生产级 AI Agent 工程实践：权限与确认（第三篇）",
        "description": "DocKit 如何为 AI Agent 实现多层权限模型——会话级模式、每连接权限、基于风险的确认，以及减少摩擦而不牺牲安全的持久允许/拒绝规则。",
        "image": "https://www.geekfun.club/og/master-zh.png",
        "author": { "@type": "Organization", "name": "GEEKFUN", "url": "https://www.geekfun.club" },
        "publisher": { "@type": "Organization", "name": "GEEKFUN", "logo": { "@type": "ImageObject", "url": "https://www.geekfun.club/geekfun.png" } },
        "datePublished": "2026-05-22",
        "dateModified": "2026-05-22",
        "inLanguage": "zh-CN",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.geekfun.club/zh/blog/building-ai-agent-permissions" },
        "keywords": ["AI Agent 权限", "人机协同", "确认流程", "Agent 安全", "权限模型"],
        "articleSection": "AI Agent 工程"
      }
---

# 生产级 AI Agent 工程实践：权限与确认（第三篇）

*第三篇，共五篇 — [第一篇：架构设计](/zh/blog/building-ai-agent-architecture) · [第二篇：工具系统设计](/zh/blog/building-ai-agent-tools) · [第四篇：内存与上下文压缩](/zh/blog/building-ai-agent-memory) · [第五篇：持久化与容错](/zh/blog/building-ai-agent-persistence)*

---

在操作真实系统的 Agent 中，最难的 UX 问题不是 AI 部分，而是信任部分。

如果每一个动作都需要手动批准，Agent 就毫无用处——你是在通过一个更差的界面亲自完成工作。如果每一个动作都是自动的，你就把一个 LLM 的访问权限交给了你的生产数据库。这两种极端对真实用户和真实系统都不适用。

DocKit 的权限模型是寻找这种平衡的尝试。它使用四个独立的策略层，在运行时组合起来决定特定工具调用是应该自动进行还是等待人工确认。这篇文章解释这些层如何工作以及为什么这样设计。

## 会话对其连接了解什么

当用户将数据库连接附加到 Agent 会话时，DocKit 获取一个快照——而不是实时引用。快照在附加时冻结了连接的别名、类型和权限。如果连接配置之后发生变化（密码轮换、权限更新），正在运行的会话不受影响，直到使用新配置明确重启。

这是一个刻意的安全选择。实时引用意味着会话的能力可能在对话进行中从其下方改变，这很难推理，而且可能有危险。冻结的快照意味着会话在整个生命周期内都在已知的、稳定的能力集内运行。

每个连接快照携带一个权限映射：`read`、`create`、`update` 和 `delete` 的布尔标志集合。这些标志定义了在该连接上哪些操作是可行的——不只是 Agent 被允许请求什么，而是实际上会执行什么。

## 四个策略层

### 第一层：会话允许列表

允许列表是最外层的环。当会话启动时，可以配置 Agent 被允许调用的特定工具名称集。不在列表上的任何工具在权限或确认逻辑甚至运行之前就被拒绝。

这一层是粗粒度且绝对的。它适合创建有意受限的会话——一个"只读分析"会话，即使连接技术上有写权限，也无法访问任何写工具。

### 第二层：每连接权限检查

对于通过允许列表的任何工具，系统查找该工具的 `required_permission`（来自第二篇描述的工具注册表），并检查附加的连接是否授予了该权限。

这个检查在 Rust 中运行，在循环执行器内部，在任何数据库调用之前。前端没有绕过它的机制。这很重要，因为它意味着权限强制不是可以被绕过的前端策略——它是后端不变量。

实际用途：将只读副本连接到会话并只授予 `read` 权限。任何需要 `create`、`update` 或 `delete` 的工具都将失败这个检查，无论其他一切如何——即使用户的自动模式已开启，即使该工具有"始终允许"规则。连接权限是一个硬性底线。

### 第三层：会话级权限模式

在每连接权限之上，会话有一个模式：`Ask`（询问）或 `Auto`（自动）。

在 `Ask` 模式（默认）下，即使连接授予了所需权限，高风险工具也需要明确的用户确认。在 `Auto` 模式下，高风险工具无需确认即可进行——只有破坏性风险的工具仍然需要确认。

这个模式可以在会话级别设置（应用于所有连接），也可以按连接设置。会话可能对只读副本使用 `Auto` 模式（最坏情况是一个慢查询），但对发生写操作的主连接保持 `Ask` 模式。

模式切换是一个刻意的摩擦控制。知道自己在做什么并已验证其连接的用户可以减少中断。想要保持在循环中的用户可以要求对任何超出读取的内容进行确认。

### 第四层：持久确认规则

最细粒度的层是确认规则——持久的、会话范围的记录，表示"对于这个会话，始终允许工具 X"或"对于这个会话，始终拒绝工具 Y"。

规则在会话重启后依然存在（它们持久化在前端 Store 中）。一旦用户决定在某个特定会话中对 `es__search` "始终允许"，他们在该会话中就不会再被询问了。拒绝同理："始终拒绝" `es__delete_by_query` 意味着无论模式或权限如何，该工具都被封锁。

规则在风险级别和模式逻辑之前被检查。匹配的规则使整个确认决策短路：始终允许意味着工具立即进行，始终拒绝意味着它立即失败，不显示任何 UI 提示。

## 确认握手

当工具调用确实需要确认时，这个决策如何从 UI 回到正在运行的后端，其机制值得理解。

在 Rust 中异步运行的循环执行器为工具调用创建一个 oneshot 通道。发送端放入一个全局 `ConfirmMap`，以工具调用 ID 为键。循环执行器然后等待接收端——它是挂起的，不是在轮询，等待时不消耗 CPU。

在 UI 中，用户看到工具调用及其参数和风险级别，做出决策。前端调用带有工具调用 ID 和决策（批准或拒绝）的 Tauri 命令。在 Rust 端，该命令在 `ConfirmMap` 中查找发送端，发送布尔值，并移除条目。

循环执行器的等待解析。如果批准，它继续执行工具。如果拒绝，它将失败消息插入对话并继续循环——LLM 了解到工具被拒绝，可以调整其计划。

几个值得注意的实现细节：

**条目在 drop 时被清理。** `ConfirmGuard` 包装 ConfirmMap 条目，并在被 drop 时移除它，无论循环执行器如何退出。这防止了在会话出错或在确认过程中被取消时 map 中积累陈旧条目。

**超时时间为五分钟。** 如果没有决策到来，确认超时，会话以清晰的错误消息失败。这防止了如果用户关闭窗口或忘记待定确认时会话无限期挂起。

**对自动允许工具立即确认。** 当工具不需要确认时（安全风险级别、自动模式或始终允许规则），前端立即调用带有 `approved = true` 的确认命令，不等待用户输入。从后端角度来看，所有工具调用都是一样的——它们等待确认信号。关于是否显示 UI 提示的决策完全在前端进行，后端不需要知道。

## 确认决策树

当 `onAgentLoopToolCall` 在前端到达时，Composable 按这个优先顺序处理：

1. 是否有会话规则说对这个工具**始终拒绝**？→ 立即拒绝，不显示 UI 提示
2. 是否有会话规则说对这个工具**始终允许**？→ 立即批准，不显示 UI 提示
3. 风险级别是否为 **Safe**？→ 立即批准，不显示 UI 提示
4. 风险级别是否为 **Destructive**？→ 始终显示确认，无论模式如何
5. 会话是否处于 **Auto** 模式？→ 立即批准，不显示 UI 提示
6. 否则（Elevated 风险，Ask 模式）→ 显示确认提示

这种有序评估意味着最具体的信号获胜。会话规则始终胜过模式设置，模式设置始终胜过默认风险行为。用户可以随着时间对特定工具建立信心（添加始终允许规则），而不会为新的、不熟悉的工具禁用安全检查。

## 为什么这个设计随时间保持良好

分层模型分离了随系统增长否则会变得纠缠的关注点：

添加新工具不需要更新权限逻辑——工具声明自己的风险级别和所需权限，现有规则自动适用。

支持新数据库类型不需要新的确认代码——权限检查针对通用权限键（`create`、`update` 等），而不是数据库特定概念。

想要更严格控制的用户可以收紧各个层（限制允许列表、保持 Ask 模式、添加拒绝规则），而不影响想要更宽松操作的用户。系统根据你需要的谨慎程度而谨慎，根据你可以信任的流畅程度而流畅。

这个模型目前没有很好解决的一件事是跨会话规则共享。规则限于会话，这是隔离的正确默认设置。但跨许多会话工作的有经验用户可能想要全局的"始终允许只读工具"规则。这是这个设计的自然演进方向。

第四篇转向了不同的方向——远离安全，转向破坏最多生产 Agent 的工程问题：上下文窗口。一旦你的 Agent 运行长对话，Token 预算就会填满，没有压缩策略，Agent 就会停止工作。DocKit 的解决方案涉及两层压缩、自定义 Token 计数层，以及了解每个主要 LLM 提供商上下文限制的模型注册表。

---

*确认逻辑在 [`src/composables/useChatAgent.ts`](https://github.com/geek-fun/dockit/blob/master/src/composables/useChatAgent.ts) 中。后端确认通道在 [`src-tauri/src/agent/loop_runner.rs`](https://github.com/geek-fun/dockit/blob/master/src-tauri/src/agent/loop_runner.rs) 中。*
