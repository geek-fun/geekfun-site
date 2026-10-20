---
title: "生产级 AI Agent 工程实践：工具系统设计（第二篇）"
description: DocKit 如何将工具定义为带有风险级别和所需权限的一等数据结构，ToolExecutor trait 为何对可测试性至关重要，以及每次工具调用在执行前需经过的三道关卡。
head:
  - - meta
    - name: keywords
      content: AI Agent 工具, LLM 函数调用, 工具系统设计, Agent 工具权限, 风险级别分类, ToolExecutor 模式, Agent 安全, Rust LLM 工具
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/blog/building-ai-agent-tools
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/building-ai-agent-tools
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/building-ai-agent-tools
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/building-ai-agent-tools
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "生产级 AI Agent 工程实践：工具系统设计（第二篇）",
        "description": "DocKit 如何将工具定义为带有风险级别和所需权限的一等数据结构，ToolExecutor trait 的设计意图，以及工具调用的三道安全关卡。",
        "image": "https://www.geekfun.club/og/master-zh.png",
        "author": { "@type": "Organization", "name": "GEEKFUN", "url": "https://www.geekfun.club" },
        "publisher": { "@type": "Organization", "name": "GEEKFUN", "logo": { "@type": "ImageObject", "url": "https://www.geekfun.club/geekfun.png" } },
        "datePublished": "2026-05-22",
        "dateModified": "2026-05-22",
        "inLanguage": "zh-CN",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.geekfun.club/zh/blog/building-ai-agent-tools" },
        "keywords": ["AI Agent 工具", "函数调用", "工具权限", "风险级别", "ToolExecutor", "Agent 安全"],
        "articleSection": "AI Agent 工程"
      }
---

# 生产级 AI Agent 工程实践：工具系统设计（第二篇）

*第二篇，共五篇 — [第一篇：架构设计](/zh/blog/building-ai-agent-architecture) · [第三篇：权限与确认](/zh/blog/building-ai-agent-permissions) · [第四篇：内存与上下文压缩](/zh/blog/building-ai-agent-memory) · [第五篇：持久化与容错](/zh/blog/building-ai-agent-persistence)*

---

谈到 AI Agent 的"工具调用"，讨论通常停在 API 层面：你把 JSON Schema 传给 LLM，它返回一个函数名和参数，你调用那个函数。这部分很简单。难的地方——对生产环境真正重要的地方——在于调用前后发生了什么。

调用之前：这个 Agent 是否有权限调用这个工具？这是应该自动发生的操作，还是需要人来确认？

调用之后：输出是否被截断了？LLM 实际看到的是什么，存储的又是什么？如果失败，用户看到什么？

DocKit 的工具系统用一套一致的设计回答了所有这些问题。这篇文章就是关于这套设计的。

## 工具是数据，不只是函数

第一个值得理解的设计决策：在 DocKit 中，工具不只是一个可调用的函数。它是一个系统中各处都会推理的记录：

- **名称** — LLM 使用的函数标识符（例如 `es__search`、`dynamo__delete_many`）
- **参数** — 描述预期参数的 JSON Schema，用于生成 LLM 提示和验证传入调用
- **风险级别** — `Safe`（安全）、`Elevated`（较高）或 `Destructive`（破坏性）之一，反映操作的潜在影响
- **所需权限** — 一个字符串键（`read`、`create`、`update`、`delete`），工具执行前必须在连接的权限配置中存在

这些元数据存在于中央工具注册表中，并在 Agent 循环启动时序列化为 OpenAI 兼容的函数规范。UI 也获取这些元数据——它使用 `riskLevel` 决定是否显示确认提示，并可视化地展示让用户理解 Agent 即将执行什么。

### 工具目录

DocKit 内置 18 个工具，覆盖 Elasticsearch、DynamoDB 和 MongoDB：

| 工具 | 风险 | 权限 |
|------|------|------|
| `es__search` | Safe | read |
| `es__get_document` | Safe | read |
| `es__cat_indices` | Safe | read |
| `es__get_mapping` | Safe | read |
| `es__index_document` | Elevated | create |
| `es__update_document` | Elevated | update |
| `es__delete_document` | Destructive | delete |
| `es__delete_by_query` | Destructive | delete |
| `dynamo__execute_query` | Safe | read |
| `dynamo__describe_table` | Safe | read |
| `dynamo__execute_write` | Elevated | create |
| `dynamo__execute_delete` | Destructive | delete |
| `mongo__find` | Safe | read |
| `mongo__list_collections` | Safe | read |
| `mongo__aggregate` | Elevated | read |
| `mongo__insert_one` | Elevated | create |
| `mongo__update_many` | Elevated | update |
| `mongo__delete_many` | Destructive | delete |

命名约定是刻意的：`<引擎>__<操作>`。这种基于前缀的命名使得在运行时将工具调用路由到正确的执行器变得轻而易举，并且让会话的能力对操作人员一目了然。

## 执行前的三道关卡

LLM 请求的每次工具调用在任何代码对数据库运行之前必须通过三个顺序检查。

### 关卡一：会话允许列表

允许列表是最外层的环。当会话启动时，可以配置 Agent 被允许调用的特定工具名称集。不在列表上的任何工具会在权限或确认逻辑运行之前就被立即拒绝。

这一层是粗粒度且绝对的。它适合创建有意受限的会话——一个"只读分析"会话，可以访问所有读工具但不能访问任何写工具，无论连接技术上有什么权限。

### 关卡二：每连接权限检查

对于通过允许列表的任何工具，系统查找该工具的 `required_permission`（来自第二篇描述的工具注册表），并检查附加的连接是否授予了该权限。

这个检查在 Rust 中运行，在循环执行器内部，在任何数据库调用之前。前端没有绕过它的机制。

实际效果很重要：将只读副本连接附加到会话并只授予 `read` 权限，就可以保证不会有任何写操作到达它——无论 LLM 请求什么，无论用户在 UI 中配置了什么。连接权限是一个硬性底线，在执行层而非策略层强制执行。

### 关卡三：用户确认

第三道关卡是人工的。对于超过某个风险阈值的工具，循环执行器创建一个确认通道——用 Rust 术语叫做 oneshot 通道——并在继续之前等待用户决策。

LLM 知道工具调用待定。UI 显示该调用及其参数，并询问用户是批准还是拒绝。当用户决定后，前端调用一个 Tauri 命令来解析通道，循环执行器继续。

确认超时时间为五分钟。如果没有决策到来，工具调用以超时错误失败。这防止了在用户走开或忘记待定确认时会话无限期挂起。

## ToolExecutor 抽象

循环执行器不直接调用数据库函数。它委托给 `ToolExecutor` trait——一个接受工具名称和解析参数并返回 `ToolEnvelope` 的抽象。

这种间接性值得理解，因为它不只是关于整洁的代码：

**在没有真实数据库的情况下，Agent 逻辑是可测试的。** 你可以换入一个返回预设结果的 mock 执行器，并测试完整的循环执行器——流式解析、确认流程、重试逻辑——而无需任何网络调用。

**执行面是有界的。** trait 定义了执行器能做什么。Agent 循环无法意外调用执行器契约之外的任何东西。

**添加新数据库支持不会触及编排代码。** 添加 MongoDB 工具支持意味着向执行器添加实现，而不是修改确认如何工作或事件如何发出。

具体的执行器（`DocKitToolExecutor`）通过名称前缀将工具调用路由到每个引擎的执行函数。每个引擎都有自己的认证、连接建立、验证和结果格式化。

## 执行前的输入验证

每个工具都有自己的验证逻辑，在任何数据库调用之前运行：

对于 Elasticsearch，索引名称针对严格的字符白名单进行验证——没有路径遍历字符，没有超过 255 字节的名称，没有可能被解释为配置或元数据索引的名称。验证是显式的，拒绝模糊输入而不是尝试清理它们。

对于 DynamoDB，写入和删除工具验证它们接收到的 PartiQL 语句。读取工具拒绝包含突变动词的语句。写入工具拒绝看起来像批量删除的语句。删除工具只接受 DELETE 语句。这确保了风险级别分类在查询层面实际上被强制执行——LLM 无法通过在 PartiQL 中嵌入 INSERT 来绕过 `dynamo__execute_query` 权限。

对于 MongoDB，连接字符串构建验证认证配置并从连接配置而不是 LLM 提供的参数中强制执行 TLS 设置。

## 输出信封

当工具成功执行时，结果在进入任何地方之前被包装在 `ToolEnvelope` 中：

```
ToolEnvelope {
  summary:      结果的前约 1,000 个字符
  full_result:  截断到约 32,000 个字符的结果
  metadata: {
    tool_name,
    duration_ms,
    truncated: bool
  }
}
```

信封服务于有不同需求的两个受众。LLM 看到摘要——足够了解发生了什么并决定下一步做什么，但有大小限制以避免单个工具结果消耗整个上下文窗口。用户（通过 UI）可以请求 `full_result` 来检查完整输出。

`truncated` 标志在 UI 中呈现，让用户知道他们看到的是部分结果。如果他们需要完整数据，可以直接在编辑器中重新运行查询。

这种双层输出设计是系统中最实用的决策之一。没有它，返回大型数据集的工具可能在单个步骤中消耗大部分上下文窗口，为对话的其余部分留下不足的空间。有了它，即使在操作大型索引时，Agent 也能保持功能正常。

## 这对你自己的 Agent 意味着什么

这里的模式组合成一个连贯的安全模型：

工具被定义为数据而不是分散在代码库中的代码，意味着系统的安全属性是可审计的。你可以查看工具目录，立即了解 Agent 能做什么和不能做什么。

三道明确的关卡——允许列表、权限检查、用户确认——创造了纵深防御。任何单一关卡的失败（权限配置错误、UI 漏洞、策略疏忽）都不会绕过其他关卡。

执行器抽象将危险代码——实际的数据库调用——与触发它的编排逻辑隔离，并使其可独立测试。

本系列的第三篇将深入确认系统：前端确认 UI 如何与后端的 oneshot 通道交互，会话级权限模式如何工作，以及"始终允许"和"始终拒绝"规则如何让用户随时间建立对 Agent 的信任，而不完全禁用安全检查。

---

*工具注册表在 [`src-tauri/src/agent/tools.rs`](https://github.com/geek-fun/dockit/blob/master/src-tauri/src/agent/tools.rs) 中。执行器在 [`src-tauri/src/agent/executor.rs`](https://github.com/geek-fun/dockit/blob/master/src-tauri/src/agent/executor.rs) 中。*
