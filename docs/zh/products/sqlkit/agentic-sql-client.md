---
title: Agentic SQL GUI 客户端 — SqlKit 桌面应用（Mac / Windows / Linux）
description: SqlKit 是一款开源的 AI 原生 SQL 桌面客户端，支持自然语言转 SQL、Schema 感知查询生成、执行计划可视化和自动错误修复。原生支持 50+ 种数据库。
sidebar: false
head:
  - - meta
    - name: keywords
      content: AI SQL 客户端, AI 智能 SQL 客户端, 自然语言转 SQL, AI 查询生成器, SQL 桌面客户端, AI 数据库客户端, 开源 SQL 客户端, SQL AI 助手, PostgreSQL AI 客户端, MySQL AI 客户端, SQLite AI 客户端, DuckDB AI 客户端
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/products/sqlkit/agentic-sql-client
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/products/sqlkit/agentic-sql-client
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/products/sqlkit/agentic-sql-client
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/products/sqlkit/agentic-sql-client
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "SqlKit",
        "alternateName": "Agentic SQL GUI Client",
        "description": "开源的 AI 原生 SQL 桌面客户端，支持自然语言转 SQL、Schema 感知查询生成、执行计划可视化和自动错误修复。原生支持 50+ 种数据库，包括 PostgreSQL、MySQL、SQL Server、SQLite、DuckDB、ClickHouse、Snowflake。",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": { "@type": "Offer", "priceCurrency": "USD" },
        "downloadUrl": "https://www.geekfun.club/download",
        "author": { "@type": "Organization", "name": "极客范", "url": "https://www.geekfun.club" },
        "license": "https://github.com/geek-fun/sqlkit/blob/main/LICENSE",
        "sameAs": ["https://github.com/geek-fun/sqlkit"]
      }
---

# Agentic SQL GUI 客户端

SqlKit 是一款开源的 AI 原生 SQL 桌面客户端，支持 Mac、Windows 和 Linux。覆盖 **50+ 种数据库**——国际主流数据库之外，还全面支持国产信创数据库：TiDB、OceanBase、PolarDB、达梦 DM8、人大金仓 KingbaseES、GaussDB、GBase、TDSQL、OpenGauss、YashanDB、Vastbase 等。

<div style="display:flex;gap:12px;margin:1.5rem 0">
  <a href="/download" style="padding:10px 20px;background:var(--vp-c-brand-1);color:#fff;border-radius:6px;font-weight:600;text-decoration:none">免费下载</a>
  <a href="https://github.com/geek-fun/sqlkit" style="padding:10px 20px;border:1px solid var(--vp-c-border);border-radius:6px;font-weight:600;text-decoration:none" target="_blank" rel="noopener">查看 GitHub</a>
</div>

## AI 原生 vs 传统 SQL 工具

传统的 SQL 客户端如 DBeaver 或 DataGrip 需要你手动编写所有 SQL、自行优化慢查询、通过堆栈跟踪来排查错误。SqlKit 的 Agentic Data Studio 改变了这一切：用自然语言描述你的需求，AI agent 读取你的 schema、编写查询、解释执行计划、并自动修复错误。

应用启动不到 2 秒，内存占用约 150 MB，数据库操作完全支持离线。AI agent 支持自备 key，兼容 OpenAI、Anthropic、DeepSeek、Ollama 和 LM Studio。

## 核心功能

### Agentic Data Studio

Agentic Data Studio 是一个 AI agent，连接你的数据库 schema、索引和查询历史。说你要什么，它读取实时上下文，生成 SQL，通过验证工具执行。

"查一下这个季度营收前 10 的客户"——它找到对应的表和字段，构造查询，跑出结果。"优化这条慢查询"——重写 SQL，展示带成本高亮的执行计划树。

读取自动执行。DELETE、DROP、无 WHERE 条件的 UPDATE 需要你确认。凭据不会发给 LLM。

![SqlKit Agentic Data Studio](/sqlkit-data-studio-ui.png)

### 自然语言转 SQL

Schema 感知的上下文生成使用你真实的表名和列名。告别 AI 工具常见的"表 X 不存在"错误。agent 理解你的数据库结构，生成正确且符合方言的 SQL。

- Schema 感知——读取实时表定义、字段类型、索引和关系
- 方言适配——生成 PostgreSQL、MySQL、SQL Server 或任何目标方言的 SQL
- 多轮优化——通过追问调整排序、过滤或分组
- 解释模式——执行前展示将运行的 SQL

### SQL 优化与执行计划可视化

慢查询会被自动重写——优化 JOIN、合理利用索引、调整 WHERE 条件顺序。执行计划查看器将查询计划渲染为带成本高亮的结构树，瓶颈一目了然。

![SqlKit 数据视图表格](/sqlkit-data-view-table-ui.png)

### 自动错误修复

SQL 错误会被自动诊断和修复。agent 读取错误信息、schema 上下文和失败的查询，然后给出修正版本。支持语法错误、缺少字段、类型不匹配和权限问题。

### 自备 AI 提供商

SqlKit 不绑定任何 AI 厂商。在设置中配置你偏好的提供商：

| 提供商 | 类型 |
|---|---|
| OpenAI | GPT-4o、GPT-4o-mini、o-series |
| Anthropic | Claude 3.5 Sonnet、Claude 3 Opus |
| DeepSeek | DeepSeek V2、DeepSeek Coder |
| OpenRouter | 统一访问 100+ 模型 |
| Ollama | 本地模型，完全离线 |
| LM Studio | 从 Hugging Face 运行本地模型 |
| 自定义端点 | 任何兼容 OpenAI 的 API |

### Monaco SQL 编辑器

查询编辑器使用与 VS Code 同款的 Monaco Editor。

![SqlKit SQL 编辑器](/sqlkit-sql-editor-ui.png)

- 完整的 SQL 语法高亮，支持所有 SQL 方言
- 基于实时 schema 元数据的上下文自动补全
- 多标签页支持，同时处理多个查询
- 可配置的 SQL 格式化（`Shift+Alt+F`）
- Cmd/Ctrl + Enter 执行，Cmd/Ctrl + Shift + Enter 附带执行计划

### 多数据库支持

**50+ 种数据库**，全面覆盖国产信创生态：

| 类型 | 数据库 |
|---|---|
| **原生** (Rust) | PostgreSQL、MySQL、SQL Server、SQLite、DuckDB、ClickHouse、Firebird、Oracle |
| **PG-wire 兼容** | CockroachDB、Redshift、YugabyteDB、TimescaleDB、QuestDB、**Vastbase**、**HighGo**、**UXDB** |
| **MySQL-wire 兼容** | MariaDB、**TiDB**、**OceanBase**、**StarRocks**、Databend、**PolarDB**、**TDSQL**、**GBase** |
| **JDBC 桥接** | Snowflake、DB2、BigQuery、Databricks、Hive、Teradata、Exasol、**达梦 DM8**、**KingbaseES**、**GaussDB**、**YashanDB**、**Xugudb**、**SelectDB**、**Doris**、**Kylin** |
| **HTTP 桥接** | Trino、Presto、**OpenGauss** |

### 跨引擎数据迁移

在任意数据库之间迁移数据，无需中间文件——PostgreSQL 到 ClickHouse、Oracle 到 SQL Server、MySQL 到 BigQuery。自动类型映射、百万级数据批量处理、为目标引擎生成 DDL。

### ER 图可视化

交互式实体关系图渲染——直观探索表关系、外键和索引。基于 Dagre 智能图谱布局，支持缩放、平移和节点选择。

![SqlKit ER 图](/sqlkit-er-diagram-ui.png)

## 对比

| | SqlKit | DBeaver | DataGrip | Navicat |
|---|---|---|---|---|
| **AI agent** | ✅ 原生 | ❌ 插件 | ❌ | ❌ |
| **自然语言转 SQL** | ✅ Schema 感知 | ❌ | ❌ | ❌ |
| **SQL 优化** | ✅ 自动 + 解释 | ❌ | ❌ | ❌ |
| **错误自动修复** | ✅ | ❌ | ❌ | ❌ |
| **50+ 数据库** | ✅ | ✅ | 部分 | ✅ |
| **平台** | Desktop (Rust + Tauri) | Java/Electron | JVM | C++ |
| **启动速度** | < 2 s | 5–15 s | 10–20 s | 3–8 s |
| **内存** | ~150 MB | ~400 MB | ~500 MB | ~200 MB |
| **开源** | Apache 2.0 | GPL | ❌ | ❌ |
| **价格** | 免费 | 免费 | $199/年 | $199+ |

## 版本兼容性

SqlKit 可连接任何暴露标准 SQL 接口的服务器。PostgreSQL 9.x 至 17.x、MySQL 5.7 至 9.x、SQL Server 2012 至 2025、SQLite 3.x、DuckDB 0.x 至 1.x，以及所有最新版本的 ClickHouse、Snowflake、BigQuery 和 Oracle。JDBC 桥接支持任何提供 JDBC 4.0 驱动的数据库。

## 快速开始

1. [下载 SqlKit](/download) 适用于 macOS、Windows 或 Linux。
2. 打开应用，创建新连接（PostgreSQL、MySQL、SQL Server、SQLite 或 50+ 种数据库之一）。
3. 输入主机、端口和凭据。
4. 打开 Agentic Data Studio 面板。
5. 用自然语言描述你的需求——或者直接在 Monaco 编辑器中编写 SQL。

详细设置请参阅[连接指南](/zh/docs/dockit/connect-to-server)。

## 常见问题

**SqlKit 的 AI agent 收费吗？**
AI agent 包含在 SqlKit 中，不额外收费。使用云端提供商（OpenAI、Anthropic 等）时只需支付 LLM API 费用。通过 Ollama 或 LM Studio 使用本地模型完全免费。

**SqlKit 支持离线使用吗？**
数据库操作完全支持离线。AI 功能需要网络访问你的模型端点，或者通过 Ollama / LM Studio 运行本地模型。

**支持哪些 AI 提供商？**
OpenAI、Anthropic、DeepSeek、OpenRouter、Ollama、LM Studio 以及任何兼容 OpenAI 的自定义端点。在设置中配置 key——凭据保留在你的机器上。

**我的数据会发送给 AI 提供商吗？**
仅发送 schema 上下文（表名、列名、类型）和你的查询。数据库凭据和实际行数据永远不会暴露给 AI 提供商。

**这和 GitHub Copilot for SQL 有什么不同？**
Copilot 补全你正在输入的内容。SqlKit 的 agent 读取你的 schema、从自然语言生成查询、优化慢 SQL、解释执行计划并修复错误——它是一个完整的 AI agent，不是自动补全工具。

**SqlKit 支持 PostgreSQL 吗？**
支持，使用原生 Rust 驱动。PostgreSQL 的 schema 浏览、查询执行、EXPLAIN 计划、DDL 查看器和 Agentic Data Studio 都完全支持。

**可以使用自己的 Ollama 模型吗？**
可以。将 SqlKit 指向任何 Ollama 端点即可。支持 Llama、CodeLlama、Mistral、DeepSeek Coder 及所有 Ollama 可用模型。

---

→ **[SqlKit 完整功能概览](/zh/products/sqlkit/)** · [PostgreSQL GUI](/zh/products/sqlkit/agentic-sql-client) · [AI SQL 查询指南](/zh/products/sqlkit/agentic-sql-client)
