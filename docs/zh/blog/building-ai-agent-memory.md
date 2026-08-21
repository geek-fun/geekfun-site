---
title: "生产级 AI Agent 工程实践：内存与上下文压缩（第四篇）"
description: DocKit 如何通过两级压缩策略、精确的 Token 计数和模型注册表，让 AI Agent 在长对话中保持功能正常——不因上下文窗口耗尽而崩溃。
head:
  - - meta
    - name: keywords
      content: AI Agent 上下文管理, LLM 上下文窗口, Agent 内存压缩, Token 计数, tiktoken, 上下文摘要, LLM Agent 内存, 上下文压缩策略
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/blog/building-ai-agent-memory
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/building-ai-agent-memory
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/building-ai-agent-memory
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/building-ai-agent-memory
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "生产级 AI Agent 工程实践：内存与上下文压缩（第四篇）",
        "description": "DocKit 如何通过两级压缩策略、精确 Token 计数和模型注册表，让 AI Agent 在长对话中保持功能正常。",
        "image": "https://www.geekfun.club/og/master-zh.png",
        "author": { "@type": "Organization", "name": "GEEKFUN", "url": "https://www.geekfun.club" },
        "publisher": { "@type": "Organization", "name": "GEEKFUN", "logo": { "@type": "ImageObject", "url": "https://www.geekfun.club/geekfun.png" } },
        "datePublished": "2026-05-22",
        "dateModified": "2026-05-22",
        "inLanguage": "zh-CN",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.geekfun.club/zh/blog/building-ai-agent-memory" },
        "keywords": ["AI Agent 内存", "上下文压缩", "Token 计数", "LLM 上下文窗口", "tiktoken"],
        "articleSection": "AI Agent 工程"
      }
---

# 生产级 AI Agent 工程实践：内存与上下文压缩（第四篇）

*第四篇，共五篇 — [第一篇：架构设计](/zh/blog/building-ai-agent-architecture) · [第二篇：工具系统设计](/zh/blog/building-ai-agent-tools) · [第三篇：权限与确认](/zh/blog/building-ai-agent-permissions) · [第五篇：持久化与容错](/zh/blog/building-ai-agent-persistence)*

---

有一种特定的 Agent 失败模式，只有在你把东西交给真实用户之后才会出现：对话变长，然后某个时刻 Agent 停止工作。

不是因为崩溃。不是因为 Bug。而是因为你把它构建成了一个把所有消息都填入上下文窗口的东西，现在窗口满了。API 返回一个错误，Agent 不知道怎么办。会话对用户来说已经死了。

这是你在写教程的时候看不到的那类失败，因为教程会话很短。生产用户会保持对话运行更长时间，他们会调用工具返回大型数据集，他们会问后续问题，他们会期望 Agent 记住五分钟前讨论的内容。

DocKit 用分级上下文管理系统解决了这个问题。这篇文章解释它的工作原理。

## 了解你的上下文预算

在任何压缩逻辑之前，系统需要知道它有多少上下文可以使用，以及它使用了多少。

DocKit 维护一个**模型注册表**——每个支持的 LLM 提供商和模型的规格记录。注册表中的每条记录包含：

- 模型名称（以及同一模型的别名，因为 API 提供商对相同模型使用不同的标识符）
- 上下文窗口大小（以 Token 为单位）
- 最大输出 Token 数
- 提供商标识符（openai、anthropic、deepseek、generic）
- 模型类别（推理型 vs. 对话型，影响某些行为）

在操作开始之前，循环执行器通过模型名称在注册表中查找，以确定可用的总上下文预算。这个预算在整个会话中被保留——它不在每次迭代时重新查询。

### 按提供商计数 Token

了解你的预算是不够的；你还需要知道你在使用多少。Token 计数由于 LLM 提供商对其分词器使用不同方法而变得复杂。

DocKit 的 Token 计数层根据提供商进行分支：

**对于 OpenAI**，DocKit 使用 tiktoken-rs，OpenAI 自己的分词库的 Rust 移植。这给出了精确的 BPE Token 计数，与 OpenAI 在 API 层面计算的完全一致。你不会因为大型对话的估算误差而意外超出预算。

**对于 Anthropic**，没有公开的分词库，所以 DocKit 使用基于字符的启发式方法：每三到四个字符大约对应一个 Token（具体比率 3.5 字符/Token）。对于中等长度的对话，这种估算通常在真实 Token 数的 5-10% 以内。

**对于 DeepSeek**，由于其分词器与标准 BPE 的差异，比率略有调整（3.2 字符/Token）。

**对于其他提供商**，使用中间比率（3.3 字符/Token）作为合理的默认值。

计数发生在每个 Agent 循环迭代中，在系统消息、所有对话消息（用户消息、助手消息、工具调用和工具结果）以及将发送给 LLM 的工具定义上。结果通过 `agent-context-usage` 事件发送到前端，UI 将其显示为上下文占用指示器。

### 压缩触发器

每次迭代，系统计算一个利用率百分比：当前 Token 使用量除以上下文窗口大小。当这个百分比超过 60%，压缩就会开始。

60% 的阈值不是任意的。在 OpenAI 的 gpt-4o（128k Token 窗口）上，60% 利用率意味着大约 76,000 个 Token 已被使用，还剩约 51,000 个空余。这足以容纳当前对话的其余部分，加上工具调用结果，以及一些工作空间，而不会有立即耗尽预算的风险。

更早触发（比如 40%）会增加压缩频率并浪费推理能力。更晚触发（比如 80%）会减少边际情况的余量。60% 在常见的会话模式中平衡得比较好。

## 两级压缩

当触发压缩时，系统选择两个策略中的一个，具体取决于情况的紧迫程度。

### T1：微压缩

T1 是第一道防线，保守且快速。它不移除任何消息，不调用 LLM，不更改对话历史。它只做一件事：**省略工具结果体**。

对于对话历史中的每条 `tool_result` 消息，如果其内容体超过 800 个字符，T1 用占位符替换该体，并注明完整结果存储在历史记录中，如有需要可检索。工具调用记录本身——工具名称、参数、时间戳——保持完整。

效果通常是显著的。Elasticsearch 搜索查询可以返回数十个包含完整文档内容的命中结果。DynamoDB 查询可以返回大型 JSON 对象。这些结果在工具调用时对 LLM 很有用，但一旦对话继续，它们通常不再需要全保留在上下文中——LLM 已经处理过它们了。

T1 压缩在 Rust 中操作内存中的消息，完成速度是亚毫秒级的，用户几乎不会察觉延迟。

### T2：LLM 摘要压缩

当 T1 不够用时——要么是因为即使在省略工具结果体之后利用率仍然很高，要么是因为距离上次压缩只过了几次迭代——系统升级到 T2。

T2 向 LLM 本身发出第二次调用，用一组特定的指令：将对话历史总结为一个结构化的九节摘要。这些节包括：

1. **会话目标** — 用户最初想要实现什么
2. **已建立的上下文** — 数据库、索引和已确认的事实
3. **操作摘要** — 执行了哪些工具及其结果
4. **当前状态** — 事情目前处于什么状态
5. **待解决问题** — 仍然开放的问题或任务
6. **重要数据** — 对后续对话至关重要的特定值（索引名称、ID、配置）
7. **决策和发现** — 过程中做出的任何关键选择
8. **错误和警告** — 发生了什么故障
9. **下一步** — 对话应该继续的方向

摘要替换了完整的对话历史，在持久化层中将旧消息标记为已压缩。保留最后四对消息（用户 + 助手交换）以保持即时上下文，并附加摘要。这样既能保持刚刚发生的对话的连贯性，又能大幅减少 Token 预算中旧历史占用的空间。

T2 有成本——一次额外的 LLM 调用意味着延迟和 Token 消耗。只要有 T1 就够了，这个成本是值得的。T2 保留给 T1 不足以恢复足够预算空间的情况。

### 故障保险：三次失败断路器

如果两级压缩都不能让 Token 利用率降到 60% 以下，会发生什么？

DocKit 用断路器处理这个问题：连续三次压缩尝试都失败后，系统停止自动尝试压缩，并发出一个明确的 `agent-loop-error` 事件，说明上下文已满、会话需要重置。

这比无限重试要好，因为每次压缩失败都会本身消耗 Token，让情况变得更糟。断路器可以防止一旦处于无法恢复的状态就在一个失败循环中消耗资源。

## 前端上下文指示器

`agent-context-usage` 事件使所有这些对用户可见。UI 在每次迭代后更新，显示：

- Token 使用量（已使用 / 总计）
- 可视化进度条（在 60% 以上变黄，在 80% 以上变红）
- 一个指示器，说明是否刚刚发生了压缩

这种可见性对用户信任很重要。当 Agent 行为改变时——比如因为压缩了旧上下文——用户可以看到为什么，而不必去猜测 Agent "忘记"了一些早先讨论的内容。

## 为什么这设计按正确的抽象层工作

从 T1 到 T2 的分级方法反映了一个关键的设计原则：**先用廉价的启发式方法，仅在必要时才升级到昂贵的操作。**

省略工具结果体——T1——是纯文本操作，零推理成本。它解决了最常见的上下文膨胀来源（大型工具输出）而不触及更昂贵的 LLM 调用。

LLM 摘要——T2——是正确的工具，但使用起来有成本。预留给真正需要语义理解来压缩内容的情况：什么时候消息本身（而不仅仅是工具结果）占据了太多空间。

断路器防止了这两者都会失败的情况变成无限的资源消耗。

模型注册表和 Token 计数层做了对于这一切正常工作至关重要的基础工作：确保系统知道它有多少预算，并且知道它已经消耗了多少，精确到能够在临界问题发生之前触发压缩。

本系列的第五篇（也是最后一篇）涵盖持久化和容错——SQLite 会话存储、每步写入模型、跨提供商错误恢复，以及指数退避重试策略的细节，这些策略使 Agent 循环在瞬态 API 失败下也能保持可靠。

---

*Token 计数在 [`src-tauri/src/agent/token_counter.rs`](https://github.com/geek-fun/dockit/blob/master/src-tauri/src/agent/token_counter.rs) 中。压缩逻辑在 [`src-tauri/src/agent/compact.rs`](https://github.com/geek-fun/dockit/blob/master/src-tauri/src/agent/compact.rs) 中。模型注册表在 [`src-tauri/src/agent/model_registry.rs`](https://github.com/geek-fun/dockit/blob/master/src-tauri/src/agent/model_registry.rs) 中。*
