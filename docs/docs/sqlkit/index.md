---
title: What is SqlKit? | Open-Source Desktop SQL Database GUI
description: SqlKit is an open-source, Rust + Tauri desktop SQL client for 68+ databases with Monaco SQL editing, visual EXPLAIN plans, ER diagrams, bulk transfer, Agentic Data Studio, and MCP.
outline: [2, 3]
---

# What is SqlKit?

SqlKit is an open-source, cross-platform desktop SQL client built with **Rust, Tauri v2, and Vue 3**. It brings connection management, schema browsing, Monaco-powered SQL editing, visual execution plans, data browsing and editing, interactive ER diagrams, bulk data transfer, an in-app AI agent (**Agentic Data Studio**), and a local **MCP Bridge** into one native desktop workspace across **68 database profiles**.

<div class="docs-section-links">

- [Install SqlKit](/docs/sqlkit/installation)
- [Connect to a database](/docs/sqlkit/connect-to-database)
- [Supported databases (68+)](/docs/sqlkit/supported-databases)
- [Feature tour & editions](/docs/sqlkit/capabilities)

</div>

<DocsFigure src="/sqlkit-sql-editor-ui.png" alt="SqlKit desktop workspace showing the schema object tree, Monaco SQL editor, and virtual-scrolled query result grid" caption="SqlKit keeps your database object tree, multi-tab Monaco SQL editor, and result grid side by side in a native desktop shell." :width="3424" :height="2224" eager />

## What SqlKit solves

<DocsCardGrid :cols="2">
  <DocsCard
    title="Connect across 68+ SQL engines"
    description="Use native Rust drivers for PostgreSQL, MySQL, SQL Server, SQLite, SQLCipher, and ClickHouse, plus wire-compatible profiles, HTTP SQL adapters, and an on-demand JDBC bridge."
    href="/docs/sqlkit/supported-databases"
    icon="database"
  />
  <DocsCard
    title="Write, format, and tune SQL"
    description="Work in Monaco Editor with schema-aware 6-dialect autocomplete, 17-dialect formatting, gutter play controls, multi-result-set tabs, visual EXPLAIN plans, and searchable history."
    href="/docs/sqlkit/query-editor"
    icon="code"
  />
  <DocsCard
    title="Browse and edit table data safely"
    description="Navigate large tables with a virtual-scrolled grid, backend column filters, multi-column sort, row detail and JSON viewers, primary-key-aware row editing, and CSV/JSON/SQL export."
    href="/docs/sqlkit/table-browser"
    icon="table"
  />
  <DocsCard
    title="Explore schemas, DDL, and ER diagrams"
    description="Inspect databases, schemas, tables, views, procedures, functions, indexes, foreign keys, and triggers. Create tables visually with live DDL preview or generate interactive ER diagrams."
    href="/docs/sqlkit/schema-and-er-diagrams"
    icon="layers"
  />
  <DocsCard
    title="Import and export files at scale"
    description="Transfer CSV, JSONL, SQL, and Excel (.xlsx) files with automatic format detection, column mapping, conflict strategies (Skip, Replace, Upsert, Abort), dry runs, and background tasks."
    href="/docs/sqlkit/import-export"
    badge="Ultimate"
    badge-variant="ultimate"
    icon="upload"
  />
  <DocsCard
    title="Bring AI and coding agents safely"
    description="Query schemas with your own cloud or local LLM in Agentic Data Studio, or expose approved connections to Claude Code, Codex, and Cursor through the local MCP Bridge."
    href="/docs/sqlkit/agentic-datastudio"
    badge="Ultimate"
    badge-variant="ultimate"
    icon="sparkles"
  />
</DocsCardGrid>

## Multi-driver architecture {#which-databases-can-i-open-in-sqlkit}

Instead of forcing every database through a single heavy runtime, SqlKit routes each engine to the lightest adapter that fits its wire protocol. Native databases work immediately after installation with zero external runtime dependencies; JDBC engines set up a managed **Eclipse Temurin JRE 25** and database drivers on demand.

| Driver layer | Engine count | Representative databases | Runtime requirement |
| --- | --- | --- | --- |
| **Native Rust (TCP)** | 3 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#tcp--> | Built in — zero setup |
| **Native Rust (Local File)** | 2 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#local--> | Built in — zero setup |
| **MySQL-wire compatible** | 13 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#mysql--> | Built in — reuses native MySQL driver |
| **PostgreSQL-wire compatible** | 18 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#postgresql--> | Built in — reuses native PostgreSQL driver |
| **HTTP SQL** | 5 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#http--> | Built in — native Rust HTTP |
| **JDBC Bridge** | 27 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#jdbc--> | On-demand JRE 25 + JDBC bridge & driver |

See [Supported databases and JDBC drivers](/docs/sqlkit/supported-databases) for default ports, engine capability boundaries, and CQL / Oracle / DuckDB specifics.

## Core capability map

| Workflow | Shipped capabilities in SqlKit | Guide |
| --- | --- | --- |
| **Connection & network** | 68 profiles, 5 SSL/TLS modes + custom CA/client certs, Connection Guardian auto-recovery, multi-hop SSH jump chains + OS System Proxy + `known_hosts` pinning | [Connections & TLS](/docs/sqlkit/connect-to-database) · [SSH tunnels](/docs/sqlkit/ssh-tunnel) |
| **SQL authoring** | Monaco Editor, 6-dialect schema-aware autocomplete, 17-dialect formatter, statement splitter (SQL & CQL), gutter play icons, Saved Queries, searchable & starrable History | [SQL editor & plans](/docs/sqlkit/query-editor) |
| **Performance analysis** | Dialect-aware `EXPLAIN` and `EXPLAIN ANALYZE` with interactive Tree view (cost highlights), Summary table, and Raw output | [SQL editor & plans](/docs/sqlkit/query-editor#explain-plans) |
| **Data inspection & CRUD** | Virtual-scrolled grid, full-table search, SQL `WHERE` filter, backend column filter chips, multi-column sort, SQL editability detection, dialog row edit/duplicate/batch-delete, Row Details & JSON viewer | [Data grid & browser](/docs/sqlkit/table-browser) |
| **Schema & modeling** | Object tree (databases, schemas, tables, views, procedures, functions), Indexes/FKs/Triggers tabs, visual Create Table with live DDL preview, Object DDL viewer, interactive `dagre` ER diagrams | [Schema & ER diagrams](/docs/sqlkit/schema-and-er-diagrams) |
| **Data transfer** | Quick result export (CSV, JSON, SQL) + Transfer workspace for CSV, JSONL, SQL, and Excel (`.xlsx`) with auto-detect, column mapping, conflict strategies, dry run, and background task panel | [Bulk import & export](/docs/sqlkit/import-export) |
| **AI & MCP** | Data Studio multi-source agent, Queries AI Assistant sidebar, 20 BYOK presets (OpenAI, Anthropic, Gemini, DeepSeek, Ollama, LM Studio, custom), local Axum MCP Bridge (`@geek-fun/data-studio-mcp`), 25 registered tools | [Agentic Data Studio](/docs/sqlkit/agentic-datastudio) · [MCP bridge](/docs/sqlkit/mcp-bridge) |
| **Safety & governance** | Unified per-connection AI policy (Read / Create / Update / Delete / Manage), `sqlparser` AST + CQL classifier, `Ask` vs `Auto` approval cards, zero telemetry, local-only credentials | [AI permissions & safety](/docs/sqlkit/ai-permissions) |
| **Desktop & localization** | macOS universal, Windows x64, Linux `.deb`/`.rpm`/`.AppImage`, System/Dark/Light themes, 7 UI languages, background system tray, signed GitHub auto-updater | [Settings & preferences](/docs/sqlkit/settings-and-preferences) |

## Security and privacy model

SqlKit is designed as a **local-first desktop workbench** with zero telemetry:

- **Your database credentials stay local.** Saved connections and settings are stored on your machine, and database credentials are never sent to any LLM provider or returned by AI/MCP discovery tools.
- **Database privileges remain the final boundary.** SqlKit cannot bypass the grants on the database user configured in your connection. Use least-privilege or read-only accounts for production inspection.
- **Unified AI safety chain.** Both in-app AI (Data Studio + AI Assistant sidebar) and external MCP clients share one policy engine: `per-connection rule → system default → deny`.
- **AST-verified write isolation.** Read tools parse SQL with `sqlparser` (and a dedicated CQL classifier for Cassandra/ScyllaDB) to block writes—including data-modifying CTEs (`WITH ... INSERT/UPDATE/DELETE`)—from running through read-only tools.
- **Explicit destructive confirmation.** In interactive AI sessions, `DELETE`, `TRUNCATE`, and `CREATE/ALTER/DROP` statements always require explicit confirmation in both `Ask` and `Auto` modes unless you save a matching session rule.

Read the full security architecture in [AI permissions and safety model](/docs/sqlkit/ai-permissions).

## Scope and honest boundaries

SqlKit focuses on fast, reliable day-to-day SQL engineering rather than claiming every database feature exists everywhere:

- **Connection support does not mean identical features across all 68 engines.** Schema trees, `EXPLAIN` plans, and row editing adapt to what each engine and driver exposes. For example, **Cassandra and ScyllaDB** use CQL and provide table previews without grid-side filtering/sorting/paging, and have no foreign keys or views.
- **NoSQL document/search engines belong in DocKit.** If you work with MongoDB, DynamoDB, Elasticsearch, OpenSearch, or EasySearch, use [DocKit](/docs/dockit/), our companion open-source NoSQL desktop client.
- **Bulk Transfer is built for working datasets, not multi-terabyte backups.** For large production disaster recovery, use native database backup utilities (`pg_dump`, `mysqldump`, RMAN, etc.).
- **Local-only runtime.** SqlKit is a desktop application, not a cloud-hosted SaaS proxy. When you use a cloud LLM provider, only the prompt and relevant schema/query context are sent to your configured endpoint; choose **Ollama** or **LM Studio** to keep inference 100% offline.

## Community vs. Ultimate {#editions}

Can you use SqlKit without signing in or configuring AI? **Yes.** SqlKit is open source under the **Apache-2.0** license.

| Edition | Included capabilities |
| --- | --- |
| **Community** <DocsBadge variant="community">Free · Apache-2.0</DocsBadge> | Unlimited local and remote connections (all 68 profiles), SSL/TLS, JRE & JDBC driver manager, Monaco SQL editor, autocomplete & formatting, visual `EXPLAIN` / `EXPLAIN ANALYZE`, schema & table browser, visual Create Table & DDL viewer, row editing, quick CSV/JSON/SQL result export, query history & saved queries, 7 UI languages, Light/Dark themes |
| **GEEKFUN Data Studio Ultimate** <DocsBadge variant="ultimate">7-day free trial</DocsBadge> | Adds **5 advanced capabilities**: **Agentic Data Studio & AI Assistant** (BYOK), **Local MCP Bridge**, **Interactive ER Diagrams**, **Bulk Transfer (Import/Export Wizard)**, and **SSH Tunnels & Multi-Hop Jump Chains**. Includes a **version-lock guarantee**: any version released while subscribed stays unlocked locally even if you cancel. |

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
