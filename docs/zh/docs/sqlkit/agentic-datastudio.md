---
title: Agentic Data Studio 与 AI 助手 | BYOK 数据库智能体 | SqlKit
description: 在 SqlKit 的 Agentic Data Studio 与查询页 AI 助手中配置云端或本地大模型（20 个预设，含 OpenAI、Anthropic、Gemini、DeepSeek、Ollama、LM Studio），实现上下文压缩与安全写 SQL。
outline: [2, 3]
---

# Agentic Data Studio 与 AI 助手

<DocsBadge variant="ultimate">旗舰版</DocsBadge>

SqlKit 内置**两套协同的 AI 入口**，均基于 `data-studio-agent` 引擎并以 **BYOK（自带 API 密钥或本地模型）** 方式运行：

1. **Agentic Data Studio**（`/data-studio`）：全屏多数据源智能体工作区，可同时挂载多个已保存连接、将对话持久化存储在本地 SQLite（`agent.sqlite`），适合跨表探索、指标分析与复杂 SQL 起草。
2. **查询页 AI 助手侧边栏**：嵌入在**查询**页面右侧的可调节抽屉（320–600 px），自动感知当前活动连接、模式以及编辑器中的 SQL，无需手动挂载即可就地解释查询、排查报错和优化语句。

如果想把连接开放给 **Claude Code、OpenAI Codex 或 Cursor** 等外部编程工具，请查阅[MCP 桥接与编程智能体](/zh/docs/sqlkit/mcp-bridge)。

## 配置大模型服务商 {#configure-a-provider}

SqlKit 内置 **20 个服务商预设**以及通用 OpenAI 兼容 / Anthropic 兼容自定义配置，并允许为**侧边栏助手**和 **Data Studio** 分别指定不同模型。

<DocsSteps>

### 打开 AI 设置

进入**设置 → AI → 添加服务商（Add Provider）**。

### 选择预设或自定义端点

| 类别 | 内置预设与默认配置 |
| --- | --- |
| **云端模型 API** | **OpenAI**、**Anthropic**、**Google Gemini**、**DeepSeek**、**Grok (xAI)**、**Mistral**、**Azure OpenAI**、**OpenRouter**、Requesty、Opper、API Route、Cheaper Inference、Runcrate、CloudGPU、MartLLM、cheapaimodel |
| **本地 / 离线推理** | **Ollama**（默认 `http://127.0.0.1:11434`）、**LM Studio**（默认 `http://127.0.0.1:1234/v1`） |
| **自定义端点** | **Custom OpenAI-compatible** 或 **Custom Anthropic-compatible** — 自定义 Base URL 与协议兼容类型 |

### 填写密钥、代理与上下文窗口

- 填写 **API Key**（仅保存在本机；本地 Ollama/LM Studio 留空即可）。
- 可为单个服务商独立配置 **HTTP 代理**（`None`、`System` 或 `Manual`），不影响数据库连接流量。
- 可按需覆盖自定义模型或微调模型的**上下文窗口（Context Window）**大小。

### 验证连通性并同步模型

点击**保存服务商**后，点击**测试（Test）**验证端点，再点击**同步模型（Sync Models）**拉取可用模型列表。若服务端不开放 `/models` 接口，可直接在 **Models** 中手动填入模型 ID。

</DocsSteps>

## 挂载数据源并开始首次对话 {#first-conversation}

Data Studio 已明确启用 **41+ 种 SQL 引擎**，覆盖 PostgreSQL 及 PG 兼容家族、MySQL 及 MySQL 兼容家族、SQL Server、SQLite、DuckDB、Oracle 以及达梦 DM8。

<DocsSteps>

### 创建会话并挂载数据源

进入 **Data Studio**，点击**新建会话 → 添加数据源**，勾选一个或多个已保存连接并点击**连接**。首次上手建议先只挂载单个开发库或只读账号连接。

### 核对权限并保持 Ask 模式

确认数据源的 [AI 权限](/zh/docs/sqlkit/ai-permissions)，在底部选择器选定模型，并先保持在 **Ask** 模式下熟悉智能体行为。

### 提出基于真实表结构的问题

从结构探测或 SQL 起草类问题入手，例如：

> *“帮我找出存放客户订单的表和下单时间字段，并起草一条统计近 12 个月按月订单量的 SQL，先不要修改任何数据。”*

智能体会调用注册的元数据工具检查真实表结构、展示可展开的完整工具输出，并生成贴合你实际表名与列名的 SQL。

### 审阅并在编辑器中执行

核对生成的表名、过滤条件和聚合逻辑后，将其复制到**查询**工作区执行、用 `EXPLAIN` 检查性能或保存为 `.sql` 文件。

</DocsSteps>

<DocsFigure src="/sqlkit-data-studio-ui.png" alt="SqlKit Data Studio 展示挂载的数据源、模型选择器与生成的 SQL" caption="Agentic Data Studio 通过实时元数据工具感知表结构，透明呈现每次工具调用并起草可审阅的 SQL。" :width="1440" :height="935" />

## 在查询页使用 AI 助手侧边栏 {#assistant}

在**查询**工作区顶部点击 **AI 助手** 即可展开右侧可拖拽抽屉（320–600 px），无需离开当前 SQL 标签页：

- 自动读取当前**活动连接、数据库/模式与编辑器 SQL 上下文**。
- 适合解释复杂 SQL、定位数据库报错原因，或结合 `EXPLAIN` 结果重写慢查询。
- 严格遵守该连接的 [AI 权限策略](/zh/docs/sqlkit/ai-permissions)。
- 支持与 Data Studio **独立选模型**——例如侧边栏用高速低延迟模型做日常改写，Data Studio 用深度推理模型做跨表分析。

## 上下文压缩、预算保护与自定义提示词

在**设置 → AI** 以及单个连接的高级设置中，可精细化掌控智能体行为：

- **上下文占用指示器与自动压缩**：界面实时显示当前会话的上下文窗口占用率。**自动压缩（Auto-Compact）**默认开启，接近上限前自动提炼历史对话，也支持随时手动触发压缩。
- **运行预算护栏**：可配置**最大迭代轮次**（默认 `200`）、**墙钟时长预算**（默认 `30 分钟`）与 **Token 预算**（默认 `20,000,000`），并支持随时一键中断正在运行的推理循环。
- **全局系统提示词**：沉淀团队通用的 SQL 编写规范（如必须显式带 Schema、优先使用 CTE、查询默认加 `LIMIT`）。
- **单连接业务上下文提示词**：在**连接管理 → 编辑 → 高级**中为特定数据库补充业务规则（例如软删除字段 `deleted_at IS NULL`、金额以分为单位、多租户隔离列等）。

::: info 云端模型与本地模型的隐私边界
数据库连接密码与密钥**绝对不会**发送给任何大模型。使用云端 LLM API 时，你的提问以及工具返回的相关表结构和查询结果会发往你配置的模型服务商；如果要求数据与推理 100% 不出本机，请配置 **Ollama** 或 **LM Studio**。
:::

## 常见配置排错 {#troubleshoot}

| 现象 | 检查项 |
| --- | --- |
| **模型下拉列表为空** | 在**设置 → AI** 启用至少一个服务商，并执行**同步模型**或手动填写模型 ID。 |
| **服务商测试失败** | 核对 Base URL、API Key 以及**单服务商 HTTP 代理**；使用 Ollama / LM Studio 时确认本地推理服务已启动且模型已加载。 |
| **Data Studio 中无法挂载某个连接** | 先在**连接管理**保存并测试通过该连接，并确认其属于 Data Studio 支持的 41+ 种引擎范围。 |
| **智能体提示操作被拦截** | 点击被拦截卡片上的**查看权限**，前往[AI 权限与安全模型](/zh/docs/sqlkit/ai-permissions)检查连接与会话策略。 |

## 下一步

<DocsCardGrid :cols="2">
  <DocsCard title="AI 权限与安全模型" description="了解读/增/改/删/管理五维权限、Ask/Auto 模式与 AST 写拦截。" href="/zh/docs/sqlkit/ai-permissions" icon="shield" />
  <DocsCard title="MCP 桥接与编程智能体" description="把受控的 SqlKit 连接开放给 Claude Code、Codex 与 Cursor。" href="/zh/docs/sqlkit/mcp-bridge" badge="旗舰版" badge-variant="ultimate" icon="terminal" />
</DocsCardGrid>
