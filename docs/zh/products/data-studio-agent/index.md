---
layout: product
title: Data Studio Agent。你的 DBA。– 用自然语言和数据库对话
description: Data Studio Agent。你的 DBA。一个开源的 MCP 服务器，让 AI 编程智能体用自然语言、安全地和你的数据库对话。它读懂你的 schema、执行查询、一步步讲给你听，像一个永不休息的 DBA。通过 SqlKit 支持 70+ 种 SQL 数据库，通过 DocKit 支持 NoSQL。
ogImage: https://www.geekfun.club/og/master-zh.png
head:
  - - meta
    - name: keywords
      content: MCP 服务器, Model Context Protocol, 数据库 MCP, AI 代理访问数据库, Claude Code 数据库, Cursor 数据库, MCP 数据库服务器, data-studio-agent, data-studio-mcp, 智能数据库, SQL MCP, NoSQL MCP, PostgreSQL MCP, Elasticsearch MCP, MongoDB MCP, DynamoDB MCP, 开源 MCP
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/products/data-studio-agent/
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/products/data-studio-agent/
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/products/data-studio-agent/
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/products/data-studio-agent/
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Data Studio Agent",
        "alternateName": ["data-studio-mcp", "Data Studio MCP Server", "数据库 MCP 服务器", "AI 数据库助手"],
        "description": "Data Studio Agent。你的 DBA。一个开源的 MCP 服务器，让 AI 编程智能体用自然语言、安全地和你的数据库对话。它读懂你的 schema、执行查询、一步步讲给你听。通过 SqlKit 支持 70+ 种 SQL 数据库，通过 DocKit 支持 NoSQL。",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "macOS, Windows, Linux",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "featureList": [
          "面向 AI 编码代理的 MCP 服务器",
          "通过 SqlKit 访问 SQL 数据库（70+ 种）",
          "通过 DocKit 访问 NoSQL 数据库",
          "PostgreSQL、MySQL、SQL Server、Oracle、SQLite、DuckDB、ClickHouse、Snowflake、BigQuery",
          "Elasticsearch、OpenSearch、MongoDB、DynamoDB",
          "支持 Claude Code、Cursor、Windsurf、OpenCode、Codex",
          "本地优先，仅绑定 127.0.0.1",
          "只读安全工具",
          "凭据永不离开你的电脑"
        ],
        "downloadUrl": "https://www.npmjs.com/package/@geek-fun/data-studio-mcp",
        "softwareVersion": "0.1.0",
        "author": { "@type": "Organization", "name": "GEEKFUN", "url": "https://www.geekfun.club" },
        "license": "https://github.com/geek-fun/data-studio-agent/blob/master/LICENSE",
        "sameAs": [
          "https://github.com/geek-fun/data-studio-agent",
          "https://www.npmjs.com/package/@geek-fun/data-studio-mcp"
        ]
      }

hero:
  name: Data Studio Agent
  headline: 你的 DBA。
  tagline: 用自然语言和你的数据库对话。你的智能体读懂你的 schema、执行查询，一步步讲给你听。像一个永不休息的 DBA。
  highlights:
    - "任意数据库 —— 70+ SQL 与 NoSQL"
    - "任意 AI 代理 · 任意 LLM 模型"
    - "任意系统 —— macOS · Windows · Linux"

install:
  eyebrow: "快速开始"
  title: "一条命令开始使用"
  tabs:
    - label: Codex
      icon: /agent-logos/codex-logo.png
      command: "codex mcp add data-studio -- npx -y @geek-fun/data-studio-mcp"
    - label: Claude Code
      icon: /agent-logos/claude-code-logo.png
      command: "claude mcp add --transport stdio data-studio -- npx -y @geek-fun/data-studio-mcp"
    - label: Cursor
      icon: /agent-logos/cursor-logo.png
      command: "// .cursor/mcp.json（项目）或 ~/.cursor/mcp.json（全局）\n{\n  \"mcpServers\": {\n    \"data-studio\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@geek-fun/data-studio-mcp\"]\n    }\n  }\n}"
    - label: Windsurf
      icon: /agent-logos/windsurf-logo.png
      command: "// ~/.codeium/windsurf/mcp_config.json\n{\n  \"mcpServers\": {\n    \"data-studio\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@geek-fun/data-studio-mcp\"]\n    }\n  }\n}"
    - label: OpenCode
      icon: /agent-logos/opencode-logo.png
      command: "// opencode.json（项目）或 ~/.config/opencode/opencode.json（全局）\n{\n  \"$schema\": \"https://opencode.ai/config.json\",\n  \"mcp\": {\n    \"data-studio\": {\n      \"type\": \"local\",\n      \"command\": [\"npx\", \"-y\", \"@geek-fun/data-studio-mcp\"],\n      \"enabled\": true\n    }\n  }\n}"



ecosystem:
  eyebrow: "生态"
  title: "一个 MCP 服务器，70+ 种数据库"
  subtitle: "与所有主流 AI 编码代理兼容"
  agents:
    - { name: Claude Code, logo: /agent-logos/claude-code-logo.png }
    - { name: Cursor, logo: /agent-logos/cursor-logo.png }
    - { name: Windsurf, logo: /agent-logos/windsurf-logo.png }
    - { name: OpenCode, logo: /agent-logos/opencode-logo.png }
    - { name: Codex, logo: /agent-logos/codex-logo.png }
    - { name: Cline, logo: /agent-logos/cline-logo.png }
    - { name: Pi, logo: /agent-logos/pi-agent-logo.png }
    - { name: Qoder, logo: /agent-logos/qoder-logo.png }
    - { name: Trae, logo: /agent-logos/trae-logo.png }
    - { name: Kiro, logo: /agent-logos/kiro-logo.png }
    - { name: GitHub Copilot, logo: /agent-logos/github-copilot-logo.png }
    - { name: CodeBuddy, logo: /agent-logos/codebuddy.png }
    - { name: Antigravity, logo: /agent-logos/antigravity-logo.png }
    - { name: Grok Build, logo: /agent-logos/grok-build-logo.png }
  databases:
    - { name: MongoDB, logo: /db-mongodb.svg }
    - { name: Elasticsearch, logo: /db-elasticsearch.svg }
    - { name: OpenSearch, logo: /db-opensearch.png }
    - { name: DynamoDB, logo: /db-dynamodb.svg }
    - { name: EasySearch, logo: /db-easysearch.svg }
    - { name: Oracle, logo: /db-logos/oracle-logo.svg }
    - { name: MySQL, logo: /db-logos/mysql-logo.svg }
    - { name: SQL Server, logo: /db-logos/sqlserver-logo.svg }
    - { name: PostgreSQL, logo: /db-logos/postgresql-logo.svg }
    - { name: Snowflake, logo: /db-logos/snowflake-logo.svg }
    - { name: Databricks, logo: /db-logos/databricks-logo.svg }
    - { name: DB2, logo: /db-logos/db2-logo.svg }
    - { name: Cassandra, logo: /db-logos/cassandra-logo.svg }
    - { name: SQLite, logo: /db-logos/sqlite-logo.svg }
    - { name: MariaDB, logo: /db-logos/mariadb-logo.svg }
    - { name: Hive, logo: /db-logos/hive-logo.svg }
    - { name: Microsoft Access, logo: /db-logos/access-logo.svg }
    - { name: BigQuery, logo: /db-logos/bigquery-logo.svg }
    - { name: SAP HANA, logo: /db-logos/hana-logo.svg }
    - { name: Teradata, logo: /db-logos/teradata-logo.svg }
    - { name: ClickHouse, logo: /db-logos/clickhouse-logo.svg }
    - { name: Firebird, logo: /db-logos/clickhouse-logo.svg }
    - { name: Redshift, logo: /db-logos/redshift-logo.svg }
    - { name: Informix, logo: /db-logos/informix-logo.svg }
    - { name: DuckDB, logo: /db-logos/duckdb-logo.svg }
    - { name: Vertica, logo: /db-logos/vertica-logo.svg }
    - { name: H2, logo: /db-logos/h2-logo.svg }
    - { name: Trino, logo: /db-logos/trino-logo.svg }
    - { name: Presto, logo: /db-logos/presto-logo.svg }
    - { name: TimescaleDB, logo: /db-logos/timescaledb-logo.svg }
    - { name: CockroachDB, logo: /db-logos/cockroachdb-logo.svg }
    - { name: QuestDB, logo: /db-logos/questdb-logo.svg }
    - { name: Derby, logo: /db-logos/sqlite-logo.svg }
    - { name: InterSystems IRIS, logo: /db-logos/iris-logo.svg }
    - { name: YugabyteDB, logo: /db-logos/yugabytedb-logo.svg }
    - { name: Exasol, logo: /db-logos/exasol-logo.svg }
    - { name: Manticore Search, logo: /db-logos/manticore-logo.svg }
    - { name: TiDB, logo: /db-logos/tidb-logo.svg }
    - { name: PolarDB, logo: /db-logos/polardb-logo.svg }
    - { name: TDengine, logo: /db-logos/clickhouse-logo.svg }
    - { name: OceanBase, logo: /db-logos/oceanbase-logo.svg }
    - { name: GBase, logo: /db-logos/gbase-logo.svg }
    - { name: StarRocks, logo: /db-logos/starrocks-logo.svg }
    - { name: TDSQL, logo: /db-logos/tdsql-logo.svg }
    - { name: openGauss, logo: /db-logos/opengauss-logo.svg }
    - { name: Kylin, logo: /db-logos/kylin-logo.svg }
    - { name: KingbaseES, logo: /db-logos/kingbasees-logo.svg }
    - { name: Doris, logo: /db-logos/doris-logo.svg }
    - { name: Databend, logo: /db-logos/databend-logo.svg }
    - { name: DM8, logo: /db-logos/dm8-logo.svg }
    - { name: GoldenDB, logo: /db-logos/goldendb-logo.svg }
    - { name: GaussDB, logo: /db-logos/gaussdb-logo.svg }
    - { name: HighGo, logo: /db-logos/highgo-logo.svg }
    - { name: UXDB, logo: /db-logos/uxdb-logo.svg }
    - { name: Vastbase, logo: /db-logos/vastbase-logo.svg }
    - { name: YashanDB, logo: /db-logos/yashandb-logo.svg }
    - { name: Xugudb, logo: /db-logos/xugudb-logo.svg }
    - { name: SelectDB, logo: /db-logos/selectdb-logo.svg }
    - { name: rqlite, logo: /db-logos/sqlite-logo.svg }
    - { name: Turso, logo: /db-logos/sqlite-logo.svg }

showcase:
  - title: "用自然语言访问你的数据库"
    body: "告诉你的代理你需要什么，它读取 schema、编写查询并返回结果。\"找出 MongoDB 里所有大于 30 岁的用户\"、\"显示 Elasticsearch 最近的 10 条订单\"、\"列出我 PostgreSQL 数据库里的所有表\"。"
    image: /data-studio-agent-arch.svg
    align: left
  - title: "每个数据库、每个工具，一份配置"
    body: "SQL 和 NoSQL、本地和云端，一份 MCP 服务器配置自动路由到正确的后端。你的代理无需为每种数据库写胶水代码即可覆盖整个数据栈。"
    image: /data-studio-agent-arch.svg
    align: right

features:
  eyebrow: "为什么选择 Data Studio Agent"
  title: "核心能力"
  items:
    - { title: "一个 MCP 服务器覆盖整个数据栈", body: "一个 npm 包同时路由到 SqlKit（SQL）和 DocKit（NoSQL）的本地桥接。不需要为每种数据库写胶水代码，注册一个 MCP 服务器，查询一切。", icon: "database" }
    - { title: "自然语言搞定数据库操作", body: "不用再手写每条 JOIN、不用再翻 CLI 输出。说出你的需求，代理针对你的真实 schema 执行经过验证的查询。", icon: "sparkles" }
    - { title: "始终在线的诊断", body: "每个工具都会报告后端可用性和权限状态。如果数据库应用未运行或操作被门控，代理会得到可操作的提示，而不是静默失败。", icon: "search" }
    - { title: "构建在你信赖的应用之上", body: "所有数据库驱动、SSH 隧道和连接管理都在 DocKit 和 SqlKit 里。MCP 服务器只是一个薄路由层，自动发现正在运行的后端。", icon: "layers" }

security:
  eyebrow: "企业级安全"
  title: "为安全优先的团队而生"
  items:
    - title: "凭据永不离开应用"
      body: "LLM 只能看到一个不透明的 connection_id。真实凭据在 DocKit/SqlKit 内部解析，绝不跨越 MCP 边界。你的密码和密钥始终留在本机、留在应用里。"
      icon: "lock"
    - title: "基于 ID 的资源访问"
      body: "代理严格通过连接 ID 访问数据库。凭据不会出现在提示词或工具参数中，模型没有途径获取或泄露连接密钥。"
      icon: "id"
    - title: "三级权限模型"
      body: "只读 / 数据读写 / 完全访问三种模式按风险等级管控每个能力，外加连接级覆盖。你可以将任意连接标记为只读，或按操作白名单放行。"
      icon: "shield"
    - title: "显式用户确认"
      body: "破坏性操作（DELETE、DROP、TRUNCATE）在策略中标记为 Ask。客户端在执行任何破坏性操作前都会弹出显式确认。"
      icon: "check"
    - title: "操作级语句分类"
      body: "SQL 在执行前会按语句类型解析分类（读 / 写 / 删除 / DDL）。只写工具拒绝 DELETE 语句，删除工具拒绝 DDL。"
      icon: "alert"
    - title: "仅本地桥接"
      body: "桥接只绑定 127.0.0.1，其他机器无法访问。一个薄路由层，无需托管服务器、无需管理 API key。"
      icon: "local"


cta:
  title: "让编码代理访问你的数据"
  body: "安装 MCP 服务器，指向 DocKit 和 SqlKit，然后用自然语言开始提问。免费、开源、Apache 2.0。"
  actions:
    - { text: "开始使用", link: "https://www.npmjs.com/package/@geek-fun/data-studio-mcp", theme: "brand", external: true }
    - { text: "查看 GitHub", link: "https://github.com/geek-fun/data-studio-agent", theme: "alt", external: true }
---

## Data Studio Agent 是什么？

Data Studio Agent 是一个 [Model Context Protocol](https://modelcontextprotocol.io/)（MCP）服务器，通过 <img src="/dockit.png" alt="DocKit" width="18" height="18" style="display:inline-block;vertical-align:-3px;margin:0 2px" loading="lazy" />[DocKit](/products/dockit/) 和 <img src="/sqlkit.png" alt="SqlKit" width="18" height="18" style="display:inline-block;vertical-align:-3px;margin:0 2px" loading="lazy" />[SqlKit](/products/sqlkit/) 桌面应用，让 AI 编码代理直接访问你的数据库。不用再把查询结果复制粘贴到 AI 工具里，你的代理直接替你查数据库，用自然语言就行。

- **SQL**（走 <img src="/sqlkit.png" alt="SqlKit" width="16" height="16" style="display:inline-block;vertical-align:-3px;margin:0 2px" loading="lazy" />SqlKit）：70+ 种数据库（PostgreSQL、MySQL、SQL Server、Oracle、SQLite、DuckDB、ClickHouse、Snowflake、BigQuery 等）
- **NoSQL**（走 <img src="/dockit.png" alt="DocKit" width="16" height="16" style="display:inline-block;vertical-align:-3px;margin:0 2px" loading="lazy" />DocKit）：Elasticsearch、OpenSearch、MongoDB、DynamoDB

本地优先。桥接只绑定 `127.0.0.1`，凭据永不离开桌面应用，只向代理暴露只读工具。

## 快速开始

完整配置分四步：安装桌面应用、安装 MCP 包、在你的 AI 工具中注册，然后按需调整权限。

### 1. 前置条件：安装桌面应用

安装并启动 [DocKit](/products/dockit/) 和/或 [SqlKit](/products/sqlkit/)，添加至少一个数据库连接，并确保 **设置 → MCP Bridge → 自动启动** 已开启（默认开启）。

- **SQL** 数据库需要 SqlKit；**NoSQL** 数据库需要 DocKit。两个都装可获得完整工具集。
- MCP 服务器自动发现正在运行的后端，只有实际运行的应用所对应的工具才会被暴露。

### 2. 安装 MCP 服务器包

两种等价方式，任选其一：

**方式 A：全局安装（推荐）**

```bash
npm install -g @geek-fun/data-studio-mcp
```

**方式 B：无需安装（npx 首次运行自动下载）**

```bash
npx -y @geek-fun/data-studio-mcp
```

两种方式对下方所有 agent 配置都适用。`npx` 会自动解析包，如果已全局安装则优先使用全局版本，否则按需下载。无需托管服务器、无需管理 API key，一切都在你的机器上本地运行。

### 3. 在你的 AI 编码代理中注册

**OpenAI Codex**，一条命令：

```bash
codex mcp add data-studio -- npx -y @geek-fun/data-studio-mcp
```

用 `codex mcp list` 验证。

**Claude Code**，一条命令：

```bash
claude mcp add --transport stdio data-studio -- npx -y @geek-fun/data-studio-mcp
```

对所有项目生效（user 作用域）：

```bash
claude mcp add --scope user --transport stdio data-studio -- npx -y @geek-fun/data-studio-mcp
```

**Cursor。** 创建 `.cursor/mcp.json`（项目）或 `~/.cursor/mcp.json`（全局）：

```json
{
  "mcpServers": {
    "data-studio": {
      "command": "npx",
      "args": ["-y", "@geek-fun/data-studio-mcp"]
    }
  }
}
```

**Windsurf。** 创建 `~/.codeium/windsurf/mcp_config.json`（仅全局）：

```json
{
  "mcpServers": {
    "data-studio": {
      "command": "npx",
      "args": ["-y", "@geek-fun/data-studio-mcp"]
    }
  }
}
```

**OpenCode。** 添加到 `opencode.json`（项目）或 `~/.config/opencode/opencode.json`（全局）：

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "data-studio": {
      "type": "local",
      "command": ["npx", "-y", "@geek-fun/data-studio-mcp"],
      "enabled": true
    }
  }
}
```

或者运行 `opencode mcp add` 交互式配置。

**任何其他 MCP 客户端。** 注册一个 stdio 服务器，命令 `npx`，参数 `-y @geek-fun/data-studio-mcp`。

### 4. 调整权限（可选）

在 DocKit/SqlKit 中打开 **设置 → MCP Bridge**，控制代理能做什么：

| 权限模式 | 代理能做什么 |
|---|---|
| **只读**（默认） | 浏览 schema、运行 SELECT 查询。不可写。 |
| **数据读写** | INSERT、UPDATE、索引操作。不可删除/删表。 |
| **完全访问** | 一切操作，包括 DELETE、DROP、TRUNCATE。 |

每个应用独立设置模式。你还可以限制连接白名单（MCP 服务器可访问哪些连接），并将单个连接标记为只读。

### 5. 开始提问

直接用自然语言。代理会替你查询数据库：

- "列出我 PostgreSQL 数据库里的所有表"
- "显示 Elasticsearch `orders*` 索引里最近的 10 条订单"
- "找出 MongoDB 里所有大于 30 岁的用户"
- "运行这条查询并解释结果"

代理会读取 schema、执行查询、探索你的数据，然后展示它执行的每一条查询。

## 工作原理

```
代码代理 (Claude Code / Cursor / OpenCode ...)
    |
    | MCP stdio 协议
    v
@geek-fun/data-studio-mcp   ← npm 包（纯 TypeScript）
    |
    | HTTP（本地）
    +----------------+----------------+
    v                v
dockit:9120    sqlkit:9121
(NoSQL 桥接)    (SQL 桥接)
    |                |
    v                v
Elasticsearch    PostgreSQL
MongoDB          MySQL
DynamoDB         SQL Server
OpenSearch       SQLite
```

MCP 服务器是一个薄路由层。所有数据库驱动、SSH 隧道和连接管理都在桌面应用里，应用暴露本地 HTTP 桥接（仅 `127.0.0.1`）。MCP 服务器通过每个应用的端口文件自动发现正在运行的后端。

## 工具命名

所有工具遵循 `data_studio__{backend}__{action}` 命名规范：

| 前缀 | 后端 | 示例 |
|------|------|------|
| `data_studio__sql_*` | SqlKit | `data_studio__sql_execute`, `data_studio__sql_list_tables` |
| `data_studio__es_*` | DocKit | `data_studio__es_search`, `data_studio__es_list_indices` |
| `data_studio__mongo_*` | DocKit | `data_studio__mongo_find`, `data_studio__mongo_insert` |
| `data_studio__dynamo_*` | DocKit | `data_studio__dynamo_query`, `data_studio__dynamo_list_tables` |

## 安全

- 桥接只绑定 `127.0.0.1`，其他机器无法访问。
- 破坏性与提权操作被桥接拒绝。通过 MCP 服务器只暴露只读能力。
- 凭据永远不会暴露给代理。所有连接都在桌面应用内部解析。

## 常见问题

<details>
<summary>免费吗？</summary>

是的。Apache 2.0 许可，所有功能免费。

</details>

<details>
<summary>支持哪些 AI 工具？</summary>

任何支持 MCP 的工具：Claude Code、Cursor、Windsurf、OpenCode、Codex 等。

</details>

<details>
<summary>需要同时安装 DocKit 和 SqlKit 吗？</summary>

只需要安装与你数据库匹配的那个。SQL 数据库需要 SqlKit；NoSQL 数据库需要 DocKit。两个都装可获得完整工具集。

</details>

<details>
<summary>我的凭据会离开电脑吗？</summary>

不会。桥接运行在 `127.0.0.1`，所有连接在 DocKit/SqlKit 内部解析。代理只能看到连接元数据和查询结果。

</details>

<details>
<summary>代理可以修改数据吗？</summary>

默认情况下破坏性和提权操作会被桥接拒绝，通过 MCP 服务器只暴露只读能力。

</details>

<details>
<summary>agent 框架从哪来？</summary>

同一仓库还包含 `data-studio-agent` Rust 框架，即驱动 DocKit 和 SqlKit 内置助手的共享 AI 代理循环（provider 适配、流式输出、工具调用、上下文压缩）。

</details>
