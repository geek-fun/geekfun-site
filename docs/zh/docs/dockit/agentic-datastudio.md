---
title: DocKit Agentic Data Studio — Data AI Agent 数据库工作台
description: 配置 DocKit Agentic Data Studio 和侧边栏助手，通过自然语言与 MongoDB、Elasticsearch、OpenSearch、DynamoDB 和 EasySearch 交互。设置 AI 提供商、管理权限、控制代理循环。
head:
  - - meta
    - name: keywords
      content: DocKit Agentic Data Studio, Data AI 数据库代理, 自然语言数据库查询, AI 助手, 代理循环, 工具执行, 数据库 Data AI Agent, OpenAI, Anthropic, DeepSeek, Ollama, DocKit AI
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/docs/dockit/agentic-datastudio
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/dockit/agentic-datastudio
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/dockit/agentic-datastudio
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/dockit/agentic-datastudio
---

# DocKit Agentic Data Studio

DocKit 的 Agentic Data Studio 是一个与您的数据库通过自然语言交互的 Data AI Agent。描述您的需求——代理会编写查询、检查表结构、更新文档、删除记录、创建索引并返回结果——全部在单个对话中完成。

侧边栏助手提供同样的 AI 能力，以轻量级聊天面板的形式，方便您在编辑器中快速提问和生成查询，无需切换视图。

![DocKit Data Studio 列出索引](/dockit-data-studio-list-indices.gif)

## 代理能做什么

代理拥有覆盖所有支持数据库的工具：

| 数据库 | 能力 |
|--------|------|
| **Elasticsearch / OpenSearch / EasySearch** | 搜索、获取、索引、更新、删除文档 · 列出索引、获取映射、创建/删除索引 · 管理别名（列出、获取、创建、删除、批量更新） · 添加或更新字段映射 |
| **DynamoDB** | 执行 PartiQL 查询（SELECT、INSERT、UPDATE、DELETE） · 描述和列出表 |
| **MongoDB** | 查询文档、运行聚合管道 · 插入、更新、删除文档 · 列出数据库和集合 |

每个工具都有内置的**风险等级**——安全（只读）、升高（创建/更新）或破坏性（删除）——并需要相应的权限。

## 快速开始

打开**设置 → AI**，添加一个 AI 提供商（OpenAI、Anthropic、DeepSeek 或任意支持的提供商）。然后从导航栏打开 **Data Studio**，点**添加源**选一个数据库连接，再用自己的话描述要做什么。

![DocKit Settings LLMs 演示](/dockit-settings-llm.gif)

如需在不离开编辑器的情况下快速查询，请使用**侧边栏助手**——点击侧边栏中的聊天图标（💬）。

## 安全与权限

此功能需要旗舰版。Data Studio 只能使用当前会话已挂载的连接。运行工具前，DocKit 会检查连接权限和当前会话的限制。何时弹出确认取决于你选的询问或自动模式。设置权限、继承默认值和重试请求的步骤见 [AI 权限指南](/zh/docs/dockit/ai-permissions)。

## 代理循环

代理在循环中运行：思考、调用工具、检查结果、决定下一步。三个设置控制运行时长：**最大迭代次数**（默认 200）限制工具调用轮数，**运行时间预算**（默认 30 分钟）限制最长耗时，**Token 预算**（默认 1,000,000）限制累计输入 token。任一预算超限时，代理会附上说明并询问是否继续。

长对话会自动压缩——旧消息被总结为紧凑摘要，保留关键信息同时减少 token 用量。压缩标记会出现在聊天时间线中，方便了解哪些内容被合并了。

代理会显示当前阶段：

```
准备中 → 迭代中 → 等待模型 → 压缩中 → 完成
```

每次工具调用都会显示名称、参数、耗时和结果，展开可查看完整的输出内容。

## 源管理

可以将任意已配置的连接附加为 Data Studio 源。代理根据您设置的权限读取表结构、查询数据和写入更改。也可以附加本地文件作为只读源——CSV、Excel、JSON 和 Parquet。代理可以检查并查询文件内容，但不能修改。

## 会话管理

每个 Data Studio 对话是一个**会话**，拥有独立的对话历史、附加源和设置。从历史面板浏览和切换过去的会话，新建空白会话，分离源而不删除连接，或为每个会话选择不同的模型。

## 侧边栏助手

在编辑器侧栏打开聊天面板，可以提问、解释查询错误或生成语句。侧边栏助手可对当前连接调用工具，实际操作受该连接的 [AI 权限](/zh/docs/dockit/ai-permissions)约束。Data Studio 则使用会话中挂载的数据源，可以在一次会话中使用多个连接。

## 提供商与模型

DocKit 支持多种 AI 提供商类型——包括云端和本地：`OpenAI`、`Anthropic`、`DeepSeek`、`OpenRouter`（200+ 模型）、`Google Gemini`、`Grok`、`Mistral`、`Azure OpenAI`、`Ollama`（完全离线）、`LM Studio`（完全离线）、自定义 OpenAI 兼容端点、自定义 Anthropic 兼容端点。

打开**设置 → AI**，点击**添加提供商**。选择类型、填写显示名称、输入 API 端点（标准提供商已预填）、粘贴 API Key，可选填 HTTP 代理 URL。点击**测试连接**验证后**保存**。

DocKit 会自动发现可用模型。可将模型路由到特定功能——为**侧边栏助手**（快速 Q&A）选一个模型，为**Data Studio**（完整代理循环）选另一个。未配置时 DocKit 自动选择最佳可用模型。

获取 API Key：
- **OpenAI**：[platform.openai.com](https://platform.openai.com) → API Keys
- **Anthropic**：[console.anthropic.com](https://console.anthropic.com) → API Keys
- **DeepSeek**：[platform.deepseek.com](https://platform.deepseek.com) → API Keys
- **OpenRouter**：[openrouter.ai](https://openrouter.ai) → Keys
- **Ollama / LM Studio**：本地运行，无需 API Key

如果访问提供商需要代理，可以在**设置 → AI** 中为该提供商填入类似 `http://host:port` 的代理地址。也可以选**使用系统代理**，沿用操作系统的设置。

## 上下文如何工作

模型能看到哪些内容，取决于你添加的数据源和这些连接的读取权限。如果使用云端模型，DocKit 可能会把你的提问、选中的上下文、相关的数据库结构和工具返回的摘要发给提供商。摘要可能包含文档或表里的值。

## 隐私与安全

数据库连接凭据由 DocKit 后端解析。模型通过连接 ID 请求操作，工具参数无需包含数据库密码或密钥。如果使用在本机运行的 Ollama 或 LM Studio 模型，可以将模型推理留在本机。

## 故障排除

### API Key 问题

如果遇到 `Invalid API key` 或 `Unauthorized`，确认密钥没有多余空格或换行，检查是否已过期，确保有足够的额度或配额，或尝试重新生成密钥。

### 连接失败

遇到 `Network error` 或 `Timeout` 时，检查网络连接，如需通过防火墙则配置代理，确认 API 端点可访问。对于 Ollama 或 LM Studio 等本地提供商，确保服务正在运行。

### 代理提前停止

如果代理因迭代上限、运行时间或 token 预算而停止，在设置 → AI → 聊天设置中增加相应预算，简化请求以减少工具调用次数，或新建会话重置上下文。

### 响应质量差

尝试不同的模型——Claude 适合推理任务，GPT-4o 适合通用场景。在请求中包含字段名和索引名，提高描述的精确度。将复杂操作拆分为更小的步骤。

## 下一步

- **[设置指南](/zh/docs/dockit/settings)** — 配置提供商、预算和模型路由
- **[连接服务器](/zh/docs/dockit/connect-to-server)** — 为 Data Studio 源设置数据库连接
- **[DynamoDB GUI 客户端](/zh/products/dockit/dynamodb-gui-client)** — DynamoDB 功能与 PartiQL
- **[Elasticsearch GUI 客户端](/zh/products/dockit/elasticsearch-gui-client)** — Elasticsearch 管理
