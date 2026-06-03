---
title: DocKit Agentic Data Studio — AI Agent 数据库工作台
description: 配置 DocKit Agentic Data Studio 和侧边栏助手，通过自然语言与 MongoDB、Elasticsearch、OpenSearch、DynamoDB 和 EasySearch 交互。设置 AI 提供商、管理权限、控制代理循环。
head:
  - - meta
    - name: keywords
      content: DocKit Agentic Data Studio, AI 数据库代理, 自然语言数据库查询, AI 助手, 代理循环, 工具执行, 数据库 AI Agent, OpenAI, Anthropic, DeepSeek, Ollama, DocKit AI
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

DocKit 的 Agentic Data Studio 是一个与您的数据库通过自然语言交互的 AI Agent。描述您的需求——代理会编写查询、检查表结构、更新文档、删除记录、创建索引并返回结果——全部在单个对话中完成。

侧边栏助手提供同样的 AI 能力，以轻量级聊天面板的形式，方便您在编辑器中快速提问和生成查询，无需切换视图。

## 代理能做什么

代理拥有覆盖所有支持数据库的工具：

**Elasticsearch / OpenSearch / EasySearch**：
- 搜索、获取、索引、更新和删除文档
- 列出索引、获取映射、创建和删除索引
- 管理别名——列出、获取、创建、删除、批量更新
- 添加或更新字段映射

**DynamoDB**：
- 执行 PartiQL 查询（SELECT、INSERT、UPDATE、DELETE）
- 描述和列出表

**MongoDB**：
- 查询文档和运行聚合管道
- 插入、更新和删除文档
- 列出数据库和集合

每个工具都有内置的**风险等级**——安全（只读）、升高（创建/更新）或破坏性（删除）——并需要相应的权限。

## 快速开始

打开**设置 → LLMs**，添加一个 AI 提供商（OpenAI、Anthropic、DeepSeek 或 12 个支持提供商中的任意一个）。然后从导航栏打开 **Data Studio**，点击**添加源**附加数据库连接，用自然语言输入请求即可。

如需在不离开编辑器的情况下快速查询，请使用**侧边栏助手**——点击侧边栏中的聊天图标（💬）。

## 安全与权限

## 安全与权限

| 模式 | 工具执行方式 | 风险等级 | 是否需要确认 |
|------|-------------|----------|-------------|
| **询问**（默认） | 每个非只读工具执行前提示允许或拒绝 | **安全** — 读取查询、列出索引、描述表 | 从不 |
| **自动** | 会话有足够权限时自动执行 | **升高** — 创建/更新文档、插入条目 | 仅在询问模式 |
| | | **破坏性** — 删除文档、删除索引、删除表 | 始终需要 |

每个数据库源都可设置独立的读取/创建/更新/删除权限，或从会话级别继承。确认规则可自动允许安全操作，或自动拒绝危险工具。

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

侧边栏助手是一个轻量级聊天面板，可在应用任意位置随时调用。它与 Data Studio 相互独立——以单轮 Q&A 问答的形式运行，而非多步骤代理循环。

用它来询问数据库表结构或查询结果，根据表结构上下文生成查询语句，获取查询行为和错误信息的解释，或在不离开当前视图的前提下快速调试排查。

| 特性 | 侧边栏助手 | Data Studio |
|------|-----------|-------------|
| **交互方式** | 单轮问答 | 多步骤代理循环 |
| **工具执行** | 否——仅文本回复 | 是——读取表结构、执行查询、修改数据 |
| **上下文管理** | 仅当前对话 | 完整会话，支持历史记录和压缩 |
| **附加源** | 不支持 | 支持——每个会话可附加多个数据库 |
| **适用场景** | 快速提问、获取解释 | 复杂数据操作和分析 |

点击右侧边栏中的聊天图标（💬）或使用键盘快捷键打开。侧边栏助手与 Data Studio 共用相同的提供商和模型配置。如果想为快速问答使用轻量模型，同时为 Data Studio 保留更强的模型，可在**设置 → AI → 模型**中单独配置。支持多聊天会话，提供商自动隔离，可从历史面板中删除单个会话。

## 提供商与模型

DocKit 支持 12 种 AI 提供商类型——包括云端和本地：`OpenAI`、`Anthropic`、`DeepSeek`、`OpenRouter`（200+ 模型）、`Google Gemini`、`Grok`、`Mistral`、`Azure OpenAI`、`Ollama`（完全离线）、`LM Studio`（完全离线）、自定义 OpenAI 兼容端点、自定义 Anthropic 兼容端点。

打开**设置 → 提供商**，点击**添加提供商**。选择类型、填写显示名称、输入 API 端点（标准提供商已预填）、粘贴 API Key，可选填 HTTP 代理 URL。点击**测试连接**验证后**保存**。

DocKit 会自动发现可用模型。可将模型路由到特定功能——为**侧边栏助手**（快速 Q&A）选一个模型，为**Data Studio**（完整代理循环）选另一个。未配置时 DocKit 自动选择最佳可用模型。

获取 API Key：
- **OpenAI**：[platform.openai.com](https://platform.openai.com) → API Keys
- **Anthropic**：[console.anthropic.com](https://console.anthropic.com) → API Keys
- **DeepSeek**：[platform.deepseek.com](https://platform.deepseek.com) → API Keys
- **OpenRouter**：[openrouter.ai](https://openrouter.ai) → Keys
- **Ollama / LM Studio**：本地运行，无需 API Key

如需通过防火墙连接，在设置 → 提供商中为每个提供商输入代理 URL。格式：`http://host:port`。或选择**使用系统代理**继承系统级设置。

## 隐私与安全

**代理发送给 AI 提供商的内容：**
- ✅ 您的文本请求
- ✅ 当前索引/表/集合名称
- ✅ Schema/映射（字段名和类型）
- ✅ 查询结果（截断至约 1,024 字符，足以让代理理解返回内容）
- ❌ 完整查询结果（存储在本地 DocKit 数据库中，可在 UI 查看）
- ❌ 凭证（API 密钥、密码、连接密钥从不发送）

**工具结果如何流向 LLM**：当代理执行工具如 `es__search` 或 `mongo__find` 时，完整结果存储在本地。只有短摘要（约 1,024 字符）返回给 LLM 作为下一步推理上下文。够用但不发送完整数据集。

**凭证安全**：连接密钥存储在本地，由 Rust 后端解析。代理从不接触凭证——只传递一个 `connection_id`（如 `"42"`），后端在执行工具前将其解析为实际配置。密码、API 密钥和 AWS 密钥不会出现在 LLM 提示中。

**无遥测**：DocKit 不会回传任何数据。查询内容、凭据或分析数据都不会离开您的电脑。支持 Ollama 和 LM Studio 等本地提供商完全离线运行。

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
