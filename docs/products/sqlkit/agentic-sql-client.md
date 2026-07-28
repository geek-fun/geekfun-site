---
title: Agentic SQL GUI Client — SqlKit Desktop App for Mac, Windows, Linux
description: SqlKit is an open-source agentic SQL desktop client with AI-powered natural language to SQL, schema-aware query generation, execution plan visualization, and automatic error fixing. Supports 50+ databases natively.
sidebar: false
head:
  - - meta
    - name: keywords
      content: AI SQL client, agentic SQL client, natural language to SQL, AI query generator, SQL desktop client, AI database client, open source SQL client, SQL AI assistant, PostgreSQL AI client, MySQL AI client, SQLite AI client, DuckDB AI client
  - - link
    - rel: canonical
      href: https://www.geekfun.club/products/sqlkit/agentic-sql-client
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
        "description": "Open-source agentic SQL desktop client with AI-powered natural language to SQL, schema-aware query generation, execution plan visualization, and automatic error fixing for 50+ databases including PostgreSQL, MySQL, SQL Server, SQLite, DuckDB, ClickHouse, and Snowflake.",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": { "@type": "Offer", "priceCurrency": "USD" },
        "downloadUrl": "https://www.geekfun.club/download",
        "author": { "@type": "Organization", "name": "GEEKFUN", "url": "https://www.geekfun.club" },
        "license": "https://github.com/geek-fun/sqlkit/blob/main/LICENSE",
        "sameAs": ["https://github.com/geek-fun/sqlkit"]
      }
---

# Agentic SQL GUI Client

SqlKit is an open-source agentic SQL desktop client for Mac, Windows, and Linux. It combines an AI-powered Agentic Data Studio with native database connectivity for **50+ databases** — PostgreSQL, MySQL, SQL Server, SQLite, DuckDB, ClickHouse, Snowflake, BigQuery, and more.

<div style="display:flex;gap:12px;margin:1.5rem 0">
  <a href="/download" style="padding:10px 20px;background:var(--vp-c-brand-1);color:#fff;border-radius:6px;font-weight:600;text-decoration:none">Download — Free</a>
  <a href="https://github.com/geek-fun/sqlkit" style="padding:10px 20px;border:1px solid var(--vp-c-border);border-radius:6px;font-weight:600;text-decoration:none" target="_blank" rel="noopener">View on GitHub</a>
</div>

## AI-powered client vs traditional SQL tools

Traditional SQL clients like DBeaver or DataGrip require you to write all SQL from scratch, manually optimize slow queries, and debug errors by reading through stack traces. SqlKit's Agentic Data Studio changes this: describe what you need in plain English, and the agent reads your schema, writes the query, explains the execution plan, and fixes errors automatically.

It starts in under 2 seconds, uses about 150 MB of RAM, and works fully offline for database operations. The AI agent supports bring-your-own-key for OpenAI, Anthropic, DeepSeek, Ollama, and LM Studio.

![SqlKit Agentic Data Studio](/sqlkit-client-ui.png)

## Key features

### Agentic Data Studio

The Agentic Data Studio is an AI agent with access to your database schema, table structures, indexes, and query history. When you ask for something, it reads live context from your database, generates the appropriate SQL, and can execute it through verified tools.

Ask "find the top 10 customers by revenue this quarter" — the agent reads your schema, identifies the relevant tables and columns, constructs the query, runs it, and shows you results. Ask "optimize this slow query" — it rewrites the SQL and visualizes the execution plan with cost highlights.

Read operations run automatically. Destructive operations (DELETE, DROP, UPDATE without WHERE) require explicit confirmation. Your database credentials are never sent to the LLM.

![SqlKit Agentic Data Studio](/sqlkit-data-studio-ui.png)

### Natural language to SQL

Schema-aware context generation uses your actual table and column names. No more "table X doesn't exist" errors from generic AI tools. The agent understands your database structure and generates correct, dialect-specific SQL.

- Schema-aware — reads live table definitions, column types, indexes, and relationships
- Dialect-specific — generates PostgreSQL, MySQL, SQL Server, or any target dialect
- Multi-turn refinement — ask follow-ups to adjust sorting, filtering, or grouping
- Explain mode — shows you the generated SQL before running it

### SQL optimization and execution plan visualization

Slow queries get rewritten with optimized JOINs, proper index usage, and efficient WHERE clause ordering. The execution plan viewer renders query plans as structured trees with cost highlighting, so you can identify bottlenecks at a glance.

![SqlKit data view table](/sqlkit-data-view-table-ui.png)

### Automatic error fixing

SQL errors are diagnosed and fixed automatically. The agent reads the error message, your schema context, and the failing query, then suggests the corrected version. This works for syntax errors, missing columns, type mismatches, and permission issues.

### Bring your own AI provider

SqlKit doesn't lock you into any AI vendor. Configure your preferred provider in Settings:

| Provider | Type |
|---|---|
| OpenAI | GPT-4o, GPT-4o-mini, o-series |
| Anthropic | Claude 3.5 Sonnet, Claude 3 Opus |
| DeepSeek | DeepSeek V2, DeepSeek Coder |
| OpenRouter | Unified access to 100+ models |
| Ollama | Fully offline with local models |
| LM Studio | Run models from Hugging Face locally |
| Custom endpoint | Any OpenAI-compatible API |

### Monaco-powered SQL editor

The query editor uses the same engine as VS Code — Monaco Editor.

![SqlKit SQL editor](/sqlkit-sql-editor-ui.png)

- Full SQL syntax highlighting for all supported dialects
- Context-aware autocomplete using live schema metadata
- Multi-tab support for working on multiple queries simultaneously
- Configurable SQL formatting with `Shift+Alt+F`
- Cmd/Ctrl + Enter to run, Cmd/Ctrl + Shift + Enter to run with explain

### Multi-database support

SqlKit supports **50+ databases** across five adapter strategies:

| Strategy | Databases |
|---|---|
| **Native** (Rust) | PostgreSQL, MySQL, SQL Server, SQLite, DuckDB, ClickHouse, Firebird, Oracle |
| **PG-wire compat** | CockroachDB, Redshift, YugabyteDB, TimescaleDB, QuestDB |
| **MySQL-wire compat** | MariaDB, TiDB, OceanBase, StarRocks, Databend |
| **JDBC bridge** | Snowflake, DB2, H2, BigQuery, Databricks, Hive, Teradata, Vertica, Exasol |
| **HTTP bridge** | Trino, Presto |

### Cross-engine data transfer

Transfer data between any supported databases without intermediate files — PostgreSQL to ClickHouse, Oracle to SQL Server, MySQL to BigQuery. Automatic type mapping, batch processing for millions of records, and DDL generation for target-engine compatibility.

### ER diagram visualization

Interactive entity-relationship diagrams rendered on a canvas — explore table relationships, foreign keys, and indexes visually. Powered by Dagre for smart graph layout, with zoom, pan, and node selection.

![SqlKit ER diagram](/sqlkit-er-diagram-ui.png)

## Comparison

| | SqlKit | DBeaver | DataGrip | Navicat |
|---|---|---|---|---|
| **AI agent** | ✅ Native | ❌ Plugin | ❌ | ❌ |
| **Natural language to SQL** | ✅ Schema-aware | ❌ | ❌ | ❌ |
| **SQL optimization** | ✅ Auto + explain | ❌ | ❌ | ❌ |
| **Error auto-fix** | ✅ | ❌ | ❌ | ❌ |
| **50+ databases** | ✅ | ✅ | Partial | ✅ |
| **Platform** | Desktop (Rust + Tauri) | Java/Electron | JVM | C++ |
| **Startup** | < 2 s | 5–15 s | 10–20 s | 3–8 s |
| **RAM** | ~150 MB | ~400 MB | ~500 MB | ~200 MB |
| **Open source** | Apache 2.0 | GPL | ❌ | ❌ |
| **Price** | Free | Free | $199/yr | $199+ |

## Version compatibility

SqlKit connects to any server that exposes a standard SQL interface. PostgreSQL 9.x through 17.x, MySQL 5.7 through 9.x, SQL Server 2012 through 2025, SQLite 3.x, DuckDB 0.x through 1.x, and all recent versions of ClickHouse, Snowflake, BigQuery, and Oracle. The JDBC bridge supports any database with a JDBC 4.0 driver.

## Quick start

1. [Download SqlKit](/download) for macOS, Windows, or Linux.
2. Open the app and create a new connection (PostgreSQL, MySQL, SQL Server, SQLite, or any of 50+ databases).
3. Enter your host, port, and credentials.
4. Open the Agentic Data Studio panel.
5. Describe what you need in plain English — or start writing SQL directly in the Monaco editor.

See the [connection guide](/docs/dockit/connect-to-server) for detailed setup instructions.

## FAQ

**Is SqlKit's AI agent free?**
The AI agent is included with SqlKit at no extra cost. You only pay for LLM API usage if you use cloud providers (OpenAI, Anthropic, etc.). Local models via Ollama or LM Studio are fully free.

**Does SqlKit work offline?**
Database operations work completely offline. AI features need network access to your model endpoint, or you can run a local model via Ollama or LM Studio.

**What AI providers are supported?**
OpenAI, Anthropic, DeepSeek, OpenRouter, Ollama, LM Studio, and any OpenAI-compatible custom endpoint. Configure your key in Settings — credentials stay on your machine.

**Is my data sent to the AI provider?**
Only the schema context (table names, column names, types) and your query are sent to the LLM. Your database credentials and actual row data are never exposed to the AI provider.

**How is this different from GitHub Copilot for SQL?**
Copilot autocompletes what you're typing. SqlKit's agent reads your schema, generates queries from natural language descriptions, optimizes slow SQL, explains execution plans, and fixes errors — it's a full agent, not an autocomplete tool.

**Does SqlKit support PostgreSQL?**
Yes, with a native Rust driver. PostgreSQL is fully supported with schema browsing, query execution, EXPLAIN plans, DDL viewer, and the Agentic Data Studio.

**Can I use my own Ollama model?**
Yes. Point SqlKit to any Ollama endpoint. Works with Llama, CodeLlama, Mistral, DeepSeek Coder, and any model available through Ollama.

---

→ **[SqlKit full feature overview](/products/sqlkit/)** · [PostgreSQL GUI](/products/sqlkit/agentic-sql-client) · [AI SQL query guide](/products/sqlkit/agentic-sql-client)
