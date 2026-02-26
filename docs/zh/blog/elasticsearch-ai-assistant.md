---
title:  使用 DeepSeek 和 OpenAI 等大模型来生成 Elasticsearch 查询
description: 了解如何利用 AI 和大语言模型自动生成复杂的 Elasticsearch 查询。通过 Elasticsearch AI 助手提升工作效率。
head:
  - - meta
    - name: keywords
      content: Elasticsearch AI 助手, AI 自动生成 Elasticsearch 查询, AI 驱动的 Elasticsearch 查询, Elasticsearch 查询助手, AI 数据检索, Elasticsearch 自动化工具
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/blog/elasticsearch-ai-assistant
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/elasticsearch-ai-assistant
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/elasticsearch-ai-assistant
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/elasticsearch-ai-assistant
---

# 使用 DeepSeek 和 OpenAI 等大模型来生成 Elasticsearch 查询

Elasticsearch 在搜索引擎行业被广泛使用，并且性能优异。然而众所周知，即使是有经验的数据库工程师，编写 Elasticsearch 的查询也是一件令人头疼的事。与 SQL 不同，Elasticsearch Query DSL 中有太多术语和保留关键字需要记忆，其查询 的JSON语句通常冗长复杂，而且往往还依赖于你的业务上下文。

如今，随着 AI 大模型技术的普及，它是否能改善或增强我们编写 Elasticsearch DSL 查询的体验呢？

我们都知道，AI 在生成基于文本的内容方面非常擅长，而 Elasticsearch 查询本质上也是一种结构化文本，符合一定的规则。那么我们是否可以直接打开 ChatGPT 来生成这些查询？答案是：也可以，也不可以。

像 ChatGPT 这样的 LLM 产品确实可以帮你生成 Elasticsearch 查询，但这并不意味着它就能满足你的需求。大多数情况下，你无法直接使用 ChatGPT 生成的查询。除了像列出所有索引（ `GET _cat/indices`）这样的简单查询，ChatGPT 生成的查询语句在更多时候都无法直接使用。

为什么呢？因为 ChatGPT 缺少 Elasticsearch 服务的上下文信息。比如你想让 ChatGPT 为你最近使用的某个索引生成查询语句，它至少需要知道索引名称，如果你还要求具体的查询条件，那就还需要提供索引的 mapping。可能会有工程师说：“那没关系啊，我可以自己把 mapping 和索引名都粘贴给 ChatGPT，再加上我用自然语言描述的查询需求。”我也是这么想的，也确实这么尝试过，但很快我就厌倦了不断复制粘贴上下文的过程，最后还是放弃了。于是一切又回到了 ChatGPT 诞生之前的痛苦状态。

那有没有更好的解决方案呢？

答案是：有！今天介绍一款可以显著提升你编写 Elasticsearch 查询体验的工具——[DocKit](https://github.com/geek-fun/dockit)，一个 大模型 加持的 NoSQL 桌面 GUI 客户端。它是开源的，并且跨平台支持 Mac、Windows 和 Linux。

DocKit 支持集成 OpenAI 和 DeepSeek，只需配置你的 API Key。整体架构如下图所示：

![DocKit AI assistant 整体架构](/dockit-ai-flow.png)

以下是它的工作流程：

1. 当你建立一个连接并打开一个新的编辑器页面时，DocKit 会尝试自动获取目标 Elasticsearch/OpenSearch 的索引和相关 mapping 信息，并将这些 mapping 缓存在内存中供后续使用。
2. 当你向 AI 助手提出查询生成请求或其他与 Elasticsearch/OpenSearch 相关的问题时，DocKit 会自动将索引名和 mapping 信息注入到对话上下文中，让大语言模型了解查询要针对的索引结构，从而生成更精确的查询语句，比直接去问 LLM 要好得多。
3. 除非你在对话中明确提供，DocKit 不会发送索引中的实际数据，你的数据依旧安全私密。
4. 除非你启用了 AI 助手并主动与其交互，否则索引名和 mapping 信息也不会在网络中发送。

## 让我们试试看！

你可能对这个方案的效果持怀疑态度，那我们用一个示例快速看一下吧！可以使用这份示例数据，也可以直接使用你已有的索引：[sample-stocks](https://github.com/Blankll/elasticsearch-learn)。运行脚本 `./samples/stocks/ingest.sh`，按提示输入你的服务器信息即可快速导入示例数据。

导入后的数据结构如下所示：

```json
{
  "mappings": {
    "dynamic": false,
    "properties": {
      "close": { "type": "float" },
      "date": { "type": "date" },
      "high": { "type": "float" },
      "low": { "type": "float" },
      "name": { "type": "keyword" },
      "open": { "type": "float" },
      "volume": { "type": "long" }
    }
  }
}
```

在你开始向 DocKit 的 AI 助手提问前，需要配置好 API Key。DocKit 当前支持 OpenAI 和 DeepSeek。进入设置页面：`Settings` -> `[OpenAI|DeepSeek]` -> 输入模型名称和 API Key -> 点击 `Save & Enable`，这样你就可以启用 AI 助手功能了！

![DocKit AI助手配置](/ai-config.png)

### 向 DocKit AI 助手发送提问

配置完毕后，打开一个新的连接，在代码编辑器中点击右侧的 AI 图标打开 AI 助手：
![DocKit AI助手提问界面](/dockit-ai-assistant-question.png)

在打开的 AI 助手中，输入你的自然语言需求（例如：“返回所有不同股票名称的前 30 个名称”），点击发送按钮，DocKit 会自动将当前索引的上下文与问题一起发送给 AI 助手。

这样你就能获得基于实际上下文的查询语句，整体体验要比自己复制粘贴上下文到 LLM 的方式更高效、更顺畅，DocKit 为你做了这部分的繁重工作。

这只是一个非常基础的示例，我们鼓励你自己去探索更多可能性。我们也在积极扩展更多功能（如 MCP 支持）。如果你感兴趣，欢迎在 [DocKit 项目](https://github.com/geek-fun/dockit) 上提交问题、功能请求，或直接参与贡献！

---

你是否已经尝试过在项目中引入 AI 工具来简化查询编写？ 欢迎交流！
