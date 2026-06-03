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

1. 打开**设置 → 提供商**，添加一个 AI 提供商（OpenAI、Anthropic、DeepSeek 或 12 个支持提供商中的任意一个）
2. 从侧边栏导航打开**Data Studio**
3. 点击**添加源**以附加数据库连接
4. 用自然语言输入您的请求——代理会处理其余工作

如需在不离开编辑器的情况下快速查询，请使用**侧边栏助手**——点击侧边栏中的聊天图标（💬）。

## 安全与权限

### 权限模式

| 模式 | 行为 |
|------|------|
| **询问**（默认） | 每个非只读工具都需要显式允许/拒绝确认。适合生产环境。 |
| **自动** | 会话拥有所需权限时自动执行工具。探索时更快速。 |

### 风险等级

| 等级 | 示例 | 需要确认 |
|------|------|----------|
| **安全** | 读取查询、列出索引、描述表 | 从不 |
| **升高** | 创建/更新文档、插入条目 | 询问模式下需要 |
| **破坏性** | 删除文档、删除索引、删除表 | 始终需要 |

### 按源权限

每个附加的数据库源都有独立的读取/创建/更新/删除权限。您可以自定义每个源的权限，或继承会话级别的模式。

### 确认规则

您可以创建规则来自动允许或拒绝会话中的特定工具，绕过默认的确认提示：

- **始终允许**：对安全/重复操作跳过确认
- **始终拒绝**：完全阻止危险工具

## 代理循环

代理在迭代循环中运行——思考、调用工具、观察结果、决定下一步。您可以通过以下设置控制循环：

| 设置 | 默认值 | 限制内容 |
|------|--------|----------|
| **最大迭代次数** | 200 | 每次请求的最大工具调用轮数 |
| **运行时间预算** | 30 秒 | 单次代理运行的最大墙钟时间 |
| **Token 预算** | 1,000,000 | 所有迭代的最大累积输入 tokens |

当预算超限时，代理会附上说明优雅地停止，并提供继续的选项。

### 上下文压缩

对于长对话，DocKit 会自动压缩上下文——旧消息被总结为紧凑表示，保留关键信息同时减少 token 使用。压缩标记会出现在聊天时间线中，让您始终了解发生了什么。

### 会话进度

代理会显示当前阶段，让您始终了解进展：

```
准备中 → 迭代中 → 等待模型 → 压缩中 → 完成
```

每个工具调用都会显示其名称、参数、耗时和结果。展开工具调用可查看完整结果。

## 源管理

### 数据库源

将任意已配置的连接附加为 Data Studio 源。代理可以根据您授予的权限读取表结构、查询数据和写入更改。

### 文件源（只读）

除数据库外，您还可以将本地文件附加为只读源：

- **CSV** — 表格数据
- **Excel** — 电子表格数据
- **JSON** — 结构化数据
- **Parquet** — 列式数据

代理可以检查和查询文件内容，但无法修改。

## 会话管理

每个 Data Studio 对话都是一个**会话**，拥有自己的历史记录、附加源和设置。

- **会话历史**：从历史面板浏览、切换和管理过去的会话
- **新会话**：以干净的对话重新开始
- **分离源**：从会话中移除源，无需删除连接
- **模型选择**：为每个会话选择不同的模型

## 侧边栏助手

侧边栏助手是一个轻量级聊天面板，可在应用任意位置随时调用。它与 Data Studio 相互独立——以单轮 Q&A 问答的形式运行，而非多步骤代理循环。

**适用场景：**
- 询问数据库表结构或查询结果的相关问题
- 基于当前表结构上下文生成查询语句
- 解释查询行为和错误信息
- 在不离开当前视图的前提下快速调试排查

**与 Data Studio 的区别：**

| 特性 | 侧边栏助手 | Data Studio |
|------|-----------|-------------|
| **交互方式** | 单轮问答 | 多步骤代理循环 |
| **工具执行** | 否——仅文本回复 | 是——读取表结构、执行查询、修改数据 |
| **上下文管理** | 仅当前对话 | 完整会话，支持历史记录和压缩 |
| **附加源** | 不支持 | 支持——每个会话可附加多个数据库 |
| **适用场景** | 快速提问、获取解释 | 复杂数据操作和分析 |

**打开方式：**
- 点击右侧边栏中的聊天图标（💬）
- 使用键盘快捷键快速唤起

侧边栏助手与 Data Studio 共用相同的提供商和模型配置。如果想为快速问答使用轻量模型，同时为 Data Studio 保留更强的模型，可在**设置 → AI → 模型**中单独配置。

支持多聊天会话，提供商自动隔离。您可以从历史面板中删除单个聊天会话。

## 提供商与模型

### 支持的提供商

DocKit 支持 12 种 AI 提供商类型——包括云端和本地：

| 提供商 | 兼容方式 |
|--------|----------|
| **OpenAI** | OpenAI API |
| **Anthropic** | Anthropic API |
| **DeepSeek** | OpenAI 兼容 |
| **OpenRouter** | OpenAI 兼容（200+ 模型） |
| **Google Gemini** | OpenAI 兼容 |
| **Grok** | OpenAI 兼容 |
| **Mistral** | OpenAI 兼容 |
| **Azure OpenAI** | OpenAI 兼容 |
| **Ollama** | 本地运行（完全离线） |
| **LM Studio** | 本地运行（完全离线） |
| **自定义 OpenAI 兼容** | 任意 OpenAI 端点 |
| **自定义 Anthropic 兼容** | 任意 Anthropic 端点 |

### 添加提供商

1. 打开**设置 → 提供商**
2. 点击**添加提供商**并选择类型
3. 配置：

| 字段 | 说明 |
|------|------|
| **显示名称** | 此提供商的友好标签 |
| **基础 URL** | API 端点（标准提供商预填） |
| **API Key** | 您的 API 密钥或令牌 |
| **代理** | HTTP 代理 URL（可选） |

4. 点击**测试连接**验证
5. 点击**保存**

DocKit 会自动发现可用模型。您可以将模型路由到特定功能：

- **侧边栏助手** — 快速 Q&A 使用的模型
- **Data Studio** — 完整代理循环使用的模型
- 如未配置，DocKit 自动选择最佳可用模型

### 获取 API Key

- **OpenAI**：[platform.openai.com](https://platform.openai.com) → API Keys
- **Anthropic**：[console.anthropic.com](https://console.anthropic.com) → API Keys
- **DeepSeek**：[platform.deepseek.com](https://platform.deepseek.com) → API Keys
- **OpenRouter**：[openrouter.ai](https://openrouter.ai) → Keys
- **Ollama / LM Studio**：本地运行——无需 API Key

### 代理配置

如果在防火墙后：

1. 在设置 → 提供商中，为每个提供商输入代理 URL
2. 格式：`http://host:port`
3. 或选择**使用系统代理**继承操作系统级设置

## 隐私与安全

**代理发送给 AI 提供商的内容：**
- ✅ 您的文本请求（自然语言描述）
- ✅ 当前索引/表/集合名称
- ✅ Schema/映射（字段名和类型）
- ✅ 查询结果（截断至约 1,024 字符，以便代理理解返回内容）
- ❌ 完整查询结果（存储在本地 DocKit 数据库中，可在 UI 查看）
- ❌ 凭证（从不发送 API 密钥、密码或连接密钥）

**工具结果如何流向 LLM**：当代理执行工具（如 `es__search`、`mongo__find`）时，完整结果存储在本地供您检查。只有截断的摘要（约 1,024 字符）会返回给 LLM 作为下一步推理的上下文。这让代理能理解查询结果，而不会发送整个数据集。

**凭证安全**：连接密钥存储在本地，由 Rust 后端解析。代理从不接触凭证——它只传递一个 `connection_id`（如 `"42"`），后端在执行工具前将其解析为实际连接配置。这种架构确保密码、API 密钥和 AWS 密钥不会出现在 LLM 提示中。

**无遥测**：DocKit 不会回传任何数据。查询内容、凭据或分析数据都不会离开您的电脑。支持本地 LLM 提供商（Ollama、LM Studio）完全离线运行。

## 故障排除

### API Key 问题

**错误**：`Invalid API key` 或 `Unauthorized`

1. 验证密钥正确（无额外空格或换行）
2. 检查密钥是否过期
3. 确保有足够的额度/配额
4. 尝试重新生成密钥

### 连接失败

**错误**：`Network error` 或 `Timeout`

1. 检查网络连接
2. 如在防火墙后，配置代理
3. 验证 API 端点可访问
4. 对于本地提供商（Ollama/LM Studio）：确认服务正在运行

### 代理提前停止

**错误**：代理因迭代上限、运行时间或 token 预算消息而停止

1. 在设置 → AI → 聊天设置中增加相应预算
2. 简化请求以减少工具调用次数
3. 开始新会话以重置上下文

### 响应质量差

1. 尝试不同模型（Claude 适合推理，GPT-4o 适合通用）
2. 在请求中更具体——包含字段名、索引名
3. 对于复杂操作，分解为更小的步骤

## 下一步

- **[设置指南](/zh/docs/dockit/settings)** — 配置提供商、预算和模型路由
- **[连接服务器](/zh/docs/dockit/connect-to-server)** — 为 Data Studio 源设置数据库连接
- **[DynamoDB GUI 客户端](/zh/products/dockit/dynamodb-gui-client)** — DynamoDB 功能与 PartiQL
- **[Elasticsearch GUI 客户端](/zh/products/dockit/elasticsearch-gui-client)** — Elasticsearch 管理
