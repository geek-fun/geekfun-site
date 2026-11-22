---
title: Agentic SQL GUI 客户端 — SqlKit 桌面应用（Mac / Windows / Linux）
description: 使用 SqlKit 的 Agentic Data Studio 将自然语言转为 SQL、浏览数据库模式并查看执行计划，适用于 PostgreSQL、MySQL、SQL Server 和 Oracle 等数据库。
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
        "description": "桌面 SQL 客户端，可结合数据库模式将自然语言转为 SQL，并在支持的数据库中可视化执行计划。",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": { "@type": "Offer", "priceCurrency": "USD" },
        "downloadUrl": "https://www.geekfun.club/download",
        "author": { "@type": "Organization", "name": "极客范", "url": "https://www.geekfun.club" },
        "license": "https://github.com/geek-fun/sqlkit/blob/master/LICENSE",
        "sameAs": ["https://github.com/geek-fun/sqlkit"]
      }
---

# 支持 AI 辅助查询的 SqlKit 桌面客户端 {#sqlkit-覆盖所有-sql-数据库的-ai-智能体-sql-桌面客户端}

SqlKit 是一款开源桌面 SQL 客户端，可在 macOS、Windows 和 Linux 上运行。除了 PostgreSQL、MySQL、SQL Server 和 Oracle，也支持 TiDB、OceanBase、PolarDB、达梦 DM8、人大金仓 KingbaseES、GaussDB、GBase、TDSQL、openGauss、YashanDB 和 Vastbase 等数据库。

<div style="display:flex;gap:12px;margin:1.5rem 0">
  <a href="/download" style="padding:10px 20px;background:var(--vp-c-brand-1);color:#fff;border-radius:6px;font-weight:600;text-decoration:none">免费下载</a>
  <a href="https://github.com/geek-fun/sqlkit" style="padding:10px 20px;border:1px solid var(--vp-c-border);border-radius:6px;font-weight:600;text-decoration:none" target="_blank" rel="noopener">查看 GitHub</a>
</div>

## AI 原生 vs 传统 SQL 工具

DBeaver 和 DataGrip 要你自己写每条 SQL、盯着慢查询发呆、对着堆栈跟踪猜问题。SqlKit 的 Agentic Data Studio 换了个路子：告诉它你要什么，它读 schema、写查询、解释执行计划、出错了帮你修。

启动不到 2 秒，内存 150 MB 上下，数据库操作离线也能用。AI 部分自备 key——OpenAI、Anthropic、DeepSeek、Ollama、LM Studio，你挑。

## 核心功能

### Agentic Data Studio

Agentic Data Studio 是一个 AI agent，连接你的数据库 schema、索引和查询历史。说你要什么，它读取实时上下文，生成 SQL，通过验证工具执行。

"查一下这个季度营收前 10 的客户"——它找到对应的表和字段，构造查询，跑出结果。"优化这条慢查询"——重写 SQL，展示带成本高亮的执行计划树。

读数据不用问。DELETE、DROP、不带 WHERE 的 UPDATE 会先问你。凭据不发给 LLM。

![SqlKit Agentic Data Studio](/sqlkit-data-studio-ui.png)

### 自然语言转 SQL

那些通用 AI 工具动不动就编个不存在的表名。SqlKit 读的是你真实的 schema——表定义、字段类型、索引、关系——生成的 SQL 能直接跑。PostgreSQL、MySQL、SQL Server，什么方言都行。

- 追问可以调排序、加条件、改分组
- 解释模式先给你看 SQL 再执行
- 方言自动适配

### SQL 优化与执行计划可视化

查询太慢？SqlKit 帮你重写——换 JOIN、调索引、改 WHERE。执行计划以结构树展示，成本高低一眼看得出来。

![SqlKit 数据视图表格](/sqlkit-data-view-table-ui.png)

### 自动错误修复

出错了？agent 读错误信息、看你的 schema、再瞅一眼失败的查询，然后告诉你改哪里。语法错误、缺字段、类型对不上、权限不够——基本上你平时要 Google 的那些它都管。

### 自备 AI 提供商

不绑定任何 AI 厂商。设置里选一个：

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

编辑器就是 Monaco——VS Code 用的那个引擎。语法高亮、schema 自动补全、多标签、可配置格式化（`Shift+Alt+F`）。

![SqlKit SQL 编辑器](/sqlkit-sql-editor-ui.png)

按 `⌘ + Enter` 或 `Ctrl + Enter` 运行选中的 SQL 或光标所在语句。支持执行计划的数据库可使用**解释**功能。更多操作见 [SQL 编辑器快捷键](/zh/docs/sqlkit/keyboard-shortcuts)。

### 多数据库支持

| 类型 | 数据库 |
|---|---|
| **原生** (Rust) | PostgreSQL、MySQL、SQL Server、SQLite |
| **PG-wire 兼容** | CockroachDB、Redshift、YugabyteDB、TimescaleDB、QuestDB、Vastbase、HighGo、UXDB、KingbaseES、GaussDB、YashanDB、openGauss、GBase 8c |
| **MySQL-wire 兼容** | MariaDB、TiDB、OceanBase（MySQL 模式）、StarRocks、Databend、PolarDB、TDSQL、SelectDB、Doris |
| **JDBC 桥接** | Oracle、DuckDB、Firebird、Snowflake、DB2、BigQuery、Databricks、Hive、Teradata、Exasol、达梦 DM8、XuguDB、Kylin、GBase 8a |
| **HTTP 桥接** | ClickHouse、Trino、Presto |

### 数据浏览与可视化工具

数据库、Schema、表、列的树形浏览。虚拟滚动数据网格支持排序、筛选、行内编辑、跨列搜索。DDL 查看器、对象搜索、ER 图——不写 SQL 也能看清数据库全貌。

### ER 图可视化

实体关系图画在画布上——表关系、外键、索引，直观展示。Dagre 负责布局，能缩放、平移、点选节点。

![SqlKit ER 图](/sqlkit-er-diagram-ui.png)

## 对比

| | SqlKit | DBeaver | DataGrip | Navicat |
|---|---|---|---|---|
| **AI agent** | ✅ 原生 | ❌ 插件 | ❌ | ❌ |
| **自然语言转 SQL** | ✅ Schema 感知 | ❌ | ❌ | ❌ |
| **SQL 优化** | ✅ 自动 + 解释 | ❌ | ❌ | ❌ |
| **错误自动修复** | ✅ | ❌ | ❌ | ❌ |
| **平台** | Desktop (Rust + Tauri) | Java/Electron | JVM | C++ |
| **启动速度** | < 2 s | 5–15 s | 10–20 s | 3–8 s |
| **内存** | ~150 MB | ~400 MB | ~500 MB | ~200 MB |
| **开源** | Apache 2.0 | GPL | ❌ | ❌ |
| **价格** | 社区版免费 · 旗舰版 $9.9/月 | 免费 | $199/年 | $199+ |

## 版本兼容性

各类数据库的连接方式和设置步骤见[支持的数据库与驱动](/zh/docs/sqlkit/supported-databases)。连上后，能执行哪些操作取决于数据库和账号权限。

## 快速开始

1. [安装 SqlKit](/zh/docs/sqlkit/installation)。
2. [连接数据库](/zh/docs/sqlkit/connect-to-database)。
3. 打开 Agentic Data Studio，描述你要执行的查询。你也可以[直接在编辑器中编写 SQL](/zh/docs/sqlkit/query-editor)。

有问题请发邮件至 [support@geekfun.club](mailto:support@geekfun.club)。

## 常见问题

**SqlKit 的 AI agent 收费吗？**
属于付费旗舰版订阅。用云端模型（OpenAI、Anthropic 等）你还要付 LLM 的调用费；本地模型走 Ollama 或 LM Studio 则没有 LLM 费用。

**SqlKit 支持离线使用吗？**
数据库操作全离线。AI 功能要联网，或者本地跑模型。

**支持哪些 AI 提供商？**
OpenAI、Anthropic、DeepSeek、OpenRouter、Ollama、LM Studio，或者任何兼容 OpenAI 的接口。设置里配 key，存在自己机器上。

**我的数据会发给 AI 吗？**
只发 schema 信息（表名、字段名、类型）和你的查询。数据库密码和实际数据不会出去。

**这和 GitHub Copilot for SQL 有什么不同？**
Copilot 自动补全。SqlKit 读你的 schema、从描述生成查询、优化慢 SQL、解释执行计划、修错误——是个 agent，不是补全工具。

**SqlKit 支持 PostgreSQL 吗？**
支持，原生 Rust 驱动。schema 浏览、EXPLAIN、DDL 查看器、Agentic Data Studio，全套。

**可以用自己的 Ollama 模型吗？**
指向 Ollama 地址就行。Llama、CodeLlama、Mistral、DeepSeek Coder——Ollama 能跑的都能用。

---

→ **[SqlKit 完整功能概览](/zh/products/sqlkit/)** · [PostgreSQL GUI](/zh/products/sqlkit/agentic-sql-client) · [AI SQL 查询指南](/zh/products/sqlkit/agentic-sql-client)
