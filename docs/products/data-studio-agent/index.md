---
layout: product
title: Data Studio Agent. Your DBA. – Talk to your databases in plain language
description: Data Studio Agent. Your DBA. An open-source MCP server that lets AI coding agents talk to your databases in plain language, securely. It understands your schema, runs queries, and walks you through what it did, like a DBA who never sleeps. Supports 70+ SQL databases via SqlKit and NoSQL via DocKit.
ogImage: https://www.geekfun.club/og/master-en.png
head:
  - - meta
    - name: keywords
      content: MCP server, Model Context Protocol, database MCP, AI agent database, Claude Code database, Cursor database, MCP database server, data-studio-agent, data-studio-mcp, agentic database, SQL MCP, NoSQL MCP, PostgreSQL MCP, Elasticsearch MCP, MongoDB MCP, DynamoDB MCP, open source MCP
  - - link
    - rel: canonical
      href: https://www.geekfun.club/products/data-studio-agent/
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
        "alternateName": ["data-studio-mcp", "Data Studio MCP Server", "database MCP server", "AI database assistant"],
        "description": "Data Studio Agent. Your DBA. An open-source MCP server that lets AI coding agents talk to your databases in plain language, securely. It understands your schema, runs queries, and walks you through what it did. Supports 70+ SQL databases via SqlKit and NoSQL via DocKit.",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "macOS, Windows, Linux",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "featureList": [
          "MCP server for AI coding agents",
          "SQL access via SqlKit (70+ databases)",
          "NoSQL access via DocKit",
          "PostgreSQL, MySQL, SQL Server, Oracle, SQLite, DuckDB, ClickHouse, Snowflake, BigQuery",
          "Elasticsearch, OpenSearch, MongoDB, DynamoDB",
          "Claude Code, Cursor, Windsurf, OpenCode, Codex support",
          "Local-first, 127.0.0.1 only",
          "Read-safe tools",
          "Credentials never leave your machine"
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
  headline: Your DBA.
  tagline: Talk to your databases in plain language. Your agent understands your schema, runs the query, and walks you through what it did. Like a DBA who never sleeps.
  highlights:
    - "Any database — 70+ SQL & NoSQL"
    - "Any AI agent with any LLM models"
    - "Any OS — macOS · Windows · Linux"

install:
  eyebrow: "Quick Start"
  title: "Get started in one command"
  tabs:
    - label: Codex
      icon: /agent-logos/codex-logo.png
      command: "codex mcp add data-studio -- npx -y @geek-fun/data-studio-mcp"
    - label: Claude Code
      icon: /agent-logos/claude-code-logo.png
      command: "claude mcp add --transport stdio data-studio -- npx -y @geek-fun/data-studio-mcp"
    - label: Cursor
      icon: /agent-logos/cursor-logo.png
      command: "// .cursor/mcp.json (project) or ~/.cursor/mcp.json (global)\n{\n  \"mcpServers\": {\n    \"data-studio\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@geek-fun/data-studio-mcp\"]\n    }\n  }\n}"
    - label: Windsurf
      icon: /agent-logos/windsurf-logo.png
      command: "// ~/.codeium/windsurf/mcp_config.json\n{\n  \"mcpServers\": {\n    \"data-studio\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@geek-fun/data-studio-mcp\"]\n    }\n  }\n}"
    - label: OpenCode
      icon: /agent-logos/opencode-logo.png
      command: "// opencode.json (project) or ~/.config/opencode/opencode.json (global)\n{\n  \"$schema\": \"https://opencode.ai/config.json\",\n  \"mcp\": {\n    \"data-studio\": {\n      \"type\": \"local\",\n      \"command\": [\"npx\", \"-y\", \"@geek-fun/data-studio-mcp\"],\n      \"enabled\": true\n    }\n  }\n}"



ecosystem:
  eyebrow: "Ecosystem"
  title: "One MCP server, 70+ databases"
  subtitle: "Works with every major AI coding agent"
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
  - title: "Ask your databases in plain language"
    body: "Tell your agent what you need, it reads schemas, writes queries, and returns results. \"Find all users older than 30 in MongoDB\", \"Show me the last 10 orders from Elasticsearch\", \"List all tables in my PostgreSQL database\"."
    image: /data-studio-agent-arch.svg
    align: left
  - title: "Every database, every tool, one config"
    body: "SQL and NoSQL, local and cloud, one MCP server config routes to the right backend automatically. Your agent covers your whole data stack without per-database glue code."
    image: /data-studio-agent-arch.svg
    align: right

features:
  eyebrow: "Why Data Studio Agent"
  title: "Core capabilities"
  items:
    - { title: "One MCP server for your whole stack", body: "A single npm package routes to both SqlKit (SQL) and DocKit (NoSQL) bridges over localhost. No per-database glue code. Register one MCP server, query everything.", icon: "database" }
    - { title: "Plain-language database work", body: "No more writing every JOIN by hand or digging through CLI output. Ask for what you need and the agent executes verified queries against your real schemas.", icon: "sparkles" }
    - { title: "Always-on diagnostics", body: "Every tool reports backend availability and permission state. If a database app isn't running or an operation is gated, the agent gets an actionable message, not a silent failure.", icon: "search" }
    - { title: "Built on the apps you trust", body: "All database drivers, SSH tunnels, and connection management live in DocKit and SqlKit. The MCP server is a thin routing layer that auto-discovers running backends.", icon: "layers" }

security:
  eyebrow: "Enterprise-grade security"
  title: "Built for security-first teams"
  items:
    - title: "Credentials never leave the apps"
      body: "The LLM only ever sees an opaque connection_id. Real credentials are resolved inside DocKit/SqlKit and never cross the MCP boundary. Your passwords and keys stay on your machine, in your app."
      icon: "lock"
    - title: "ID-based resource access"
      body: "Agents access databases strictly by connection ID, never by embedding credentials in prompts or tool arguments. There is no path for the model to obtain or exfiltrate connection secrets."
      icon: "id"
    - title: "Three-tier permission model"
      body: "Read Only / Data Read-Write / Full Access modes gate every capability by risk level. Plus per-connection overrides: mark any connection read-only, or allowlist specific actions."
      icon: "shield"
    - title: "Explicit user confirmation"
      body: "Destructive operations (DELETE, DROP, TRUNCATE) surface as Ask in the policy. The client prompts the user for explicit confirmation before anything destructive runs."
      icon: "check"
    - title: "Action-level statement classification"
      body: "SQL is parsed and classified by statement kind (Read / Write / Delete / DDL) before execution. Write-only tools reject DELETE statements, and delete tools reject DDL."
      icon: "alert"
    - title: "Local-only bridge"
      body: "The bridge binds to 127.0.0.1 exclusively, unreachable from other machines. A thin routing layer with no server to host and no API keys to manage."
      icon: "local"


cta:
  title: "Give your coding agent access to your data"
  body: "Install the MCP server, point it at DocKit and SqlKit, and start asking questions in plain language. Free, open source, Apache 2.0."
  actions:
    - { text: "Get Started", link: "https://www.npmjs.com/package/@geek-fun/data-studio-mcp", theme: "brand", external: true }
    - { text: "View on GitHub", link: "https://github.com/geek-fun/data-studio-agent", theme: "alt", external: true }
---

## What is Data Studio Agent?

Data Studio Agent is a [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) server that gives AI coding agents direct access to your databases through the <img src="/dockit.png" alt="DocKit" width="18" height="18" style="display:inline-block;vertical-align:-3px;margin:0 2px" loading="lazy" />[DocKit](/products/dockit/) and <img src="/sqlkit.png" alt="SqlKit" width="18" height="18" style="display:inline-block;vertical-align:-3px;margin:0 2px" loading="lazy" />[SqlKit](/products/sqlkit/) desktop apps. Instead of copy-pasting query results into your AI tool, your agent queries the databases for you in plain language.

- **SQL** (via <img src="/sqlkit.png" alt="SqlKit" width="16" height="16" style="display:inline-block;vertical-align:-3px;margin:0 2px" loading="lazy" />SqlKit): 70+ databases (PostgreSQL, MySQL, SQL Server, Oracle, SQLite, DuckDB, ClickHouse, Snowflake, BigQuery, and more)
- **NoSQL** (via <img src="/dockit.png" alt="DocKit" width="16" height="16" style="display:inline-block;vertical-align:-3px;margin:0 2px" loading="lazy" />DocKit): Elasticsearch, OpenSearch, MongoDB, DynamoDB

It's local-first. The bridge binds to `127.0.0.1`, your credentials never leave the desktop apps, and only read-safe tools are exposed to the agent.

## Quick Start

The full setup is four steps: install the apps, install the MCP package, register it in your AI tool, and optionally tune permissions.

### 1. Prerequisites: install the desktop apps

Install and launch [DocKit](/products/dockit/) and/or [SqlKit](/products/sqlkit/), add at least one database connection, and make sure **Settings → MCP Bridge → Auto-start** is enabled (it's on by default).

- **SQL** databases need SqlKit; **NoSQL** databases need DocKit. Install both for the full tool set.
- The MCP server auto-discovers running backends. Only tools for apps that are actually running are exposed.

### 2. Install the MCP server package

Two equivalent options, pick one:

**Option A: global install (recommended)**

```bash
npm install -g @geek-fun/data-studio-mcp
```

**Option B: no install needed (npx downloads on first run)**

```bash
npx -y @geek-fun/data-studio-mcp
```

Both work with every agent config below. `npx` resolves the package automatically (it prefers the global install when present, otherwise downloads it on demand). There is no server to host and no API keys to manage. Everything runs locally on your machine.

### 3. Register it in your AI coding agent

**OpenAI Codex**, one command:

```bash
codex mcp add data-studio -- npx -y @geek-fun/data-studio-mcp
```

Verify with `codex mcp list`.

**Claude Code**, one command:

```bash
claude mcp add --transport stdio data-studio -- npx -y @geek-fun/data-studio-mcp
```

For all projects (user scope):

```bash
claude mcp add --scope user --transport stdio data-studio -- npx -y @geek-fun/data-studio-mcp
```

**Cursor.** Create `.cursor/mcp.json` (project) or `~/.cursor/mcp.json` (global):

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

**Windsurf.** Create `~/.codeium/windsurf/mcp_config.json` (global only):

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

**OpenCode.** Add to `opencode.json` (project) or `~/.config/opencode/opencode.json` (global):

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

Or run `opencode mcp add` interactively.

**Any other MCP client.** Register a stdio server with command `npx` and args `-y @geek-fun/data-studio-mcp`.

### 4. Tune permissions (optional)

Open **Settings → MCP Bridge** in DocKit/SqlKit to control what the agent can do:

| Permission mode | What the agent can do |
|---|---|
| **Read Only** (default) | Explore schemas, run SELECT queries. No writes. |
| **Data Read/Write** | INSERT, UPDATE, index operations. No deletes/drops. |
| **Full Access** | Everything, including DELETE, DROP, TRUNCATE. |

The mode is set per app. You can also restrict the connection allowlist (which connections the MCP server can reach) and mark individual connections read-only.

### 5. Start asking

Use plain language. The agent queries your databases for you:

- "List all tables in my PostgreSQL database"
- "Show me the last 10 orders from the Elasticsearch index `orders*`"
- "Find all users older than 30 in MongoDB"
- "Run this query and explain the results"

The agent reads your schema, runs the query, and shows you every step it executed.

## How it works

```
code agent (Claude Code / Cursor / OpenCode ...)
    |
    | MCP stdio protocol
    v
@geek-fun/data-studio-mcp   ← npm package (pure TypeScript)
    |
    | HTTP (localhost)
    +----------------+----------------+
    v                v
dockit:9120    sqlkit:9121
(NoSQL bridge)  (SQL bridge)
    |                |
    v                v
Elasticsearch    PostgreSQL
MongoDB          MySQL
DynamoDB         SQL Server
OpenSearch       SQLite
```

The MCP server is a thin routing layer. All database drivers, SSH tunnels, and connection management live in the desktop apps, which expose a local HTTP bridge (`127.0.0.1` only). The MCP server auto-discovers running backends via each app's port file.

## Tool naming

All tools follow the `data_studio__{backend}__{action}` convention:

| Prefix | Backend | Examples |
|--------|---------|----------|
| `data_studio__sql_*` | SqlKit | `data_studio__sql_execute`, `data_studio__sql_list_tables` |
| `data_studio__es_*` | DocKit | `data_studio__es_search`, `data_studio__es_list_indices` |
| `data_studio__mongo_*` | DocKit | `data_studio__mongo_find`, `data_studio__mongo_insert` |
| `data_studio__dynamo_*` | DocKit | `data_studio__dynamo_query`, `data_studio__dynamo_list_tables` |

## Safety

- The bridge binds to `127.0.0.1` only. It is unreachable from other machines.
- Destructive and elevated operations are rejected by the bridge. Only read-safe capabilities are exposed through the MCP server.
- Credentials are never exposed to the agent. All connections are resolved inside the desktop apps.

## FAQ

<details>
<summary>Is it free?</summary>

Yes. Apache 2.0 license, all features included.

</details>

<details>
<summary>Which AI tools work with it?</summary>

Anything that speaks MCP: Claude Code, Cursor, Windsurf, OpenCode, Codex, and more.

</details>

<details>
<summary>Do I need both DocKit and SqlKit?</summary>

Only the ones matching your databases. SQL databases need SqlKit; NoSQL databases need DocKit. Install both for the full tool set.

</details>

<details>
<summary>Do my credentials leave my machine?</summary>

No. The bridge runs on `127.0.0.1` and all connections resolve inside DocKit/SqlKit. The agent only sees connection metadata and query results.

</details>

<details>
<summary>Can the agent modify data?</summary>

Destructive and elevated operations are rejected by the bridge by default. Only read-safe capabilities are exposed through the MCP server.

</details>

<details>
<summary>Where does the agent framework come from?</summary>

The same repository also contains the `data-studio-agent` Rust framework, the shared AI agent loop (provider adapters, streaming, tool calling, context compaction) that powers the built-in assistants in DocKit and SqlKit.

</details>
