---
title: What is SqlKit? | Open-Source Desktop SQL Database GUI
description: SqlKit is an open-source, Rust + Tauri desktop SQL client for 68+ databases with Monaco SQL editing, visual EXPLAIN plans, ER diagrams, bulk transfer, Agentic Data Studio, and MCP.
outline: [2, 3]
---

# What is SqlKit?

SqlKit is an open-source desktop SQL client built with Rust, Tauri v2, and Vue 3. It runs on macOS, Windows, and Linux, and supports 68 database profiles across native Rust drivers, HTTP SQL, and an on-demand JDBC bridge. From one app you can browse schemas, edit and explain SQL in Monaco, inspect and update table rows, draw ER diagrams, import and export files, and connect AI agents locally through Agentic Data Studio or MCP.

<div class="docs-section-links">

- [Install SqlKit](/docs/sqlkit/installation)
- [Connect to a database](/docs/sqlkit/connect-to-database)
- [Supported databases (68+)](/docs/sqlkit/supported-databases)
- [Feature tour & editions](/docs/sqlkit/capabilities)

</div>

<DocsFigure src="/sqlkit-sql-editor-ui.png" alt="SqlKit desktop workspace showing the schema object tree, Monaco SQL editor, and virtual-scrolled query result grid" caption="The object tree, multi-tab Monaco SQL editor, and query result grid sit side by side in the Queries workspace." :width="3424" :height="2224" eager />

## Core workflows

<DocsCardGrid :cols="2">
  <DocsCard
    title="Connect to 68+ SQL engines"
    description="Built-in Rust drivers for PostgreSQL, MySQL, SQL Server, SQLite, SQLCipher, and ClickHouse, wire-compatible profiles, HTTP SQL adapters, and an on-demand JDBC bridge."
    href="/docs/sqlkit/supported-databases"
    icon="database"
  />
  <DocsCard
    title="Write and inspect SQL"
    description="Monaco editor with 6-dialect schema autocomplete, 17-dialect formatting, gutter play controls, multi-result-set tabs, visual EXPLAIN trees, and searchable history."
    href="/docs/sqlkit/query-editor"
    icon="code"
  />
  <DocsCard
    title="Browse and edit table data"
    description="Virtual-scrolled grid with backend column filters, multi-column sort, row detail and JSON viewers, primary-key-aware editing, and CSV/JSON/SQL export."
    href="/docs/sqlkit/table-browser"
    icon="table"
  />
  <DocsCard
    title="Inspect schemas, DDL, and ER diagrams"
    description="Browse databases, schemas, tables, views, procedures, functions, indexes, foreign keys, and triggers. Create tables visually with live DDL preview or open interactive ER diagrams."
    href="/docs/sqlkit/schema-and-er-diagrams"
    icon="layers"
  />
  <DocsCard
    title="Import and export files"
    description="Move CSV, JSONL, SQL, and Excel (.xlsx) files with format auto-detection, column mapping, Skip/Replace/Upsert/Abort conflict strategies, dry runs, and background tasks."
    href="/docs/sqlkit/import-export"
    badge="Ultimate"
    badge-variant="ultimate"
    icon="upload"
  />
  <DocsCard
    title="Connect AI and coding agents"
    description="Use your own cloud or local model in Agentic Data Studio, or expose approved connections to Claude Code, Codex, and Cursor over the local MCP Bridge."
    href="/docs/sqlkit/agentic-datastudio"
    badge="Ultimate"
    badge-variant="ultimate"
    icon="sparkles"
  />
</DocsCardGrid>

## Multi-driver architecture {#which-databases-can-i-open-in-sqlkit}

SqlKit routes each engine to an adapter built for its protocol. Built-in databases work immediately after installation with no external runtime. JDBC engines set up a managed Eclipse Temurin JRE 25 and the database driver automatically during your first connection test.

<DocsFlowDiagram variant="multi-driver" />

| Driver layer | Engines | Representative databases | Runtime requirement |
| --- | --- | --- | --- |
| Native Rust (TCP) | 3 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#tcp--> | Built in (native Rust) |
| Native Rust (Local file) | 2 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#local--> | Built in (native Rust) |
| MySQL-wire compatible | 13 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#mysql--> | Built in (reuses native MySQL driver) |
| PostgreSQL-wire compatible | 18 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#postgresql--> | Built in (reuses native PostgreSQL driver) |
| HTTP SQL | 5 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#http--> | Built in (native Rust HTTP) |
| JDBC Bridge | 27 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#jdbc--> | On-demand JRE 25, JDBC bridge, and driver |

See [Supported databases and JDBC drivers](/docs/sqlkit/supported-databases) for default ports, capability differences, and notes on CQL, Oracle, and DuckDB.

## Capability map

| Area | What SqlKit includes | Guide |
| --- | --- | --- |
| Connections and network | 68 profiles, 5 SSL/TLS modes with custom CA and client certs, Connection Guardian recovery, multi-hop SSH jump chains, OS System HTTP CONNECT proxy, `~/.ssh/config` alias resolution | [Connections & TLS](/docs/sqlkit/connect-to-database) · [SSH tunnels](/docs/sqlkit/ssh-tunnel) |
| SQL editor | Monaco editor, 6-dialect schema autocomplete, 17-dialect formatter, SQL and CQL statement splitter, gutter play icons, Saved Queries, searchable History with favorites | [SQL editor & plans](/docs/sqlkit/query-editor) |
| Execution plans | Dialect-aware `EXPLAIN` and `EXPLAIN ANALYZE` with Tree view (cost totals and most expensive node), Summary table, and Raw output | [SQL editor & plans](/docs/sqlkit/query-editor#explain-plans) |
| Data grid | Virtual-scrolled grid, full-table search, SQL `WHERE` filter, backend column filter chips, multi-column sort, SQL editability detection, dialog row edit/duplicate/batch delete, Row Details and JSON viewer | [Data grid & browser](/docs/sqlkit/table-browser) |
| Schema and modeling | Object tree (databases, schemas, tables, views, procedures, functions), Indexes/FKs/Triggers tabs, visual Create Table with live DDL preview, Object DDL viewer, `dagre` ER diagrams | [Schema & ER diagrams](/docs/sqlkit/schema-and-er-diagrams) |
| Import and export | Quick result export (CSV, JSON, SQL) plus Transfer wizard for CSV, JSONL, SQL, and Excel (`.xlsx`) with auto-detect, column mapping, conflict strategies, dry run, and background tasks | [Bulk import & export](/docs/sqlkit/import-export) |
| AI and MCP | Data Studio multi-source agent, Queries AI Assistant sidebar, 20 BYOK presets (OpenAI, Anthropic, Gemini, DeepSeek, Ollama, LM Studio, custom), local Axum MCP Bridge (`@geek-fun/data-studio-mcp`), 25 registered tools | [Agentic Data Studio](/docs/sqlkit/agentic-datastudio) · [MCP bridge](/docs/sqlkit/mcp-bridge) |
| AI safety | Shared per-connection policy (Read, Create, Update, Delete, Manage), `sqlparser` AST and CQL classifier, `Ask` and `Auto` approval cards, local credentials, zero telemetry | [AI permissions & safety](/docs/sqlkit/ai-permissions) |
| Desktop and localization | macOS universal, Windows x64, Linux `.deb`/`.rpm`/`.AppImage`, System/Dark/Light themes, 7 UI languages, background system tray, signed GitHub auto-updater | [Settings & preferences](/docs/sqlkit/settings-and-preferences) |

## Security and privacy

SqlKit runs locally on your machine and sends no usage telemetry.

- Saved connections and passwords stay on disk locally. SqlKit never sends database credentials to an LLM provider or exposes them through AI or MCP discovery tools.
- Database grants remain the final boundary. SqlKit runs every query under the database account in your connection, so a read-only database user cannot write even if client settings allow it.
- In-app AI (Data Studio and the Queries AI Assistant sidebar) and external MCP clients share one policy chain: per-connection rule, then system default, then deny.
- Read-only query tools parse SQL with `sqlparser` (and a CQL classifier for Cassandra and ScyllaDB) to reject writes, including data-modifying CTEs (`WITH ... INSERT/UPDATE/DELETE`).
- In interactive AI sessions, `DELETE`, `TRUNCATE`, and `CREATE`/`ALTER`/`DROP` statements always prompt for confirmation in both `Ask` and `Auto` modes unless you save a matching session rule.

Read the details in [AI permissions and safety model](/docs/sqlkit/ai-permissions).

## Boundaries to know

- Connecting to an engine does not guarantee every UI feature works identically on all 68 profiles. Schema trees, `EXPLAIN` plans, and row editing depend on what the engine, driver, and account expose. For example, Cassandra and ScyllaDB use CQL, have no foreign keys or views, and open as table previews without grid-side filtering, sorting, or pagination.
- For MongoDB, DynamoDB, Elasticsearch, OpenSearch, or EasySearch, use [DocKit](/docs/dockit/), our companion open-source NoSQL desktop client.
- Bulk Transfer is built for working datasets and regular imports or exports. For multi-terabyte production backups and disaster recovery, use native tools such as `pg_dump`, `mysqldump`, or Oracle RMAN.
- SqlKit is a desktop app with no cloud proxy. When you configure a cloud LLM provider, prompts plus the schema and query results returned by tools go to that provider's API. Use Ollama or LM Studio if inference must stay offline.

## Community and Ultimate {#editions}

SqlKit is open source under the Apache-2.0 license, and you can use it without signing in or configuring AI.

| Edition | Included |
| --- | --- |
| **Community** <DocsBadge variant="community">Free · Apache-2.0</DocsBadge> | Unlimited local and remote connections across all 68 profiles, SSL/TLS, JRE 25 and JDBC driver manager, Monaco SQL editor with autocomplete and formatting, visual `EXPLAIN` and `EXPLAIN ANALYZE`, schema and table browser, visual Create Table and DDL viewer, row editing, quick CSV/JSON/SQL result export, query history and saved queries, 7 UI languages, Light/Dark themes |
| **GEEKFUN Data Studio Ultimate** <DocsBadge variant="ultimate">7-day free trial</DocsBadge> | Adds five capabilities: Agentic Data Studio and AI Assistant (BYOK), Local MCP Bridge, Interactive ER Diagrams, Bulk Transfer (Import/Export Wizard), and SSH Tunnels with multi-hop jump chains. Includes a version-lock guarantee: any version released while you are subscribed stays available locally even if you cancel later. |

See [Feature tour & editions](/docs/sqlkit/capabilities) and [Plan comparison](/pricing) for full details.

## Next steps

<DocsCardGrid :cols="3">
  <DocsCard
    title="Install SqlKit"
    description="Download for macOS (Apple Silicon & Intel), Windows, or Linux."
    href="/docs/sqlkit/installation"
    icon="rocket"
  />
  <DocsCard
    title="Add your first connection"
    description="Configure TCP, local file, TLS, or JDBC connections and test access."
    href="/docs/sqlkit/connect-to-database"
    icon="server"
  />
  <DocsCard
    title="Explore the SQL editor"
    description="Run queries, inspect visual EXPLAIN trees, and manage saved SQL."
    href="/docs/sqlkit/query-editor"
    icon="code"
  />
</DocsCardGrid>
