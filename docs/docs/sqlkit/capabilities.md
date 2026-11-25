---
title: SqlKit Capabilities & Feature Tour | SQL, Data, Schema, AI & MCP
description: Visual walkthrough of SqlKit workspaces — connections, Monaco SQL editor, visual EXPLAIN plans, ER diagrams, data grid, bulk transfer, Agentic Data Studio, MCP Bridge, and edition matrix.
outline: [2, 3]
---

# Capabilities & feature tour

This tour walks through every major workspace in SqlKit—showing where each task starts in the desktop app, which database engines support it, and how **Community** and **Ultimate** compare.

<div class="docs-section-links">

- [Install SqlKit](/docs/sqlkit/installation)
- [Supported databases (68+)](/docs/sqlkit/supported-databases)
- [Compare plans](/pricing)

</div>

## Connect to databases & networks {#connections}

Open **Connections** to manage all saved database profiles in grid or list view, search by name, host, or engine, and see active connection status at a glance. Click **`+`** to create a profile:

- **68 database profiles** across native Rust adapters (PostgreSQL, MySQL, SQL Server, SQLite, SQLCipher, ClickHouse), PostgreSQL/MySQL wire-compatible engines, HTTP SQL engines, and 27 JDBC Bridge engines.
- **Full SSL/TLS control** (`disable`, `prefer`, `require`, `verify-ca`, `verify-full`) with custom CA certificates, client certificates, private keys, and SQL Server `trustServerCertificate`.
- **Connection Guardian auto-recovery** detects stale or dropped transport sessions and transparently replaces them on demand.
- **On-demand JDBC setup**: testing an Oracle, DuckDB, Snowflake, BigQuery, or Cassandra connection checks JRE 25, `jdbc-bridge`, and the database driver with live 3-step progress.
- **SSH tunnels & multi-hop jump chains** <DocsBadge variant="ultimate">Ultimate</DocsBadge>: attach reusable SSH profiles, drag-and-drop reorder multi-hop bastions, route through the OS System Proxy, authenticate via password, private key, SSH agent, or Windows Pageant, and pin host keys in `known_hosts`.

[Connections, TLS & recovery](/docs/sqlkit/connect-to-database) · [SSH tunnels & jump chains](/docs/sqlkit/ssh-tunnel)

<DocsFigure src="/sqlkit-client-ui.png" alt="SqlKit Connections workspace with saved database profiles" caption="Manage saved connections in grid or list view, test connectivity, and jump directly into the Queries workspace." :width="3424" :height="2224" />

## Write SQL & inspect execution plans {#query}

Open **Queries** to combine the database object tree, multi-tab **Monaco Editor**, Saved Queries panel, and bottom result grid in a single view:

- **Schema-aware autocomplete** across 6 SQL dialect profiles (`sql`, `mysql`, `pgsql`, `mssql`, `plsql`, `sqlite`) suggesting tables, columns, schemas, functions, types, and keywords.
- **17-dialect SQL formatting** via <kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> (macOS) or <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd> (Windows/Linux) for the current selection or entire script.
- **Smart statement execution** with clickable gutter play icons, SQL & CQL statement splitting (including PostgreSQL `$$` dollar quotes and CQL `BEGIN ... APPLY BATCH`), and a multi-result-set selector.
- **Visual `EXPLAIN` & `EXPLAIN ANALYZE`** (<kbd>F6</kbd>): switch between an interactive **Tree View** (highlighting total cost and the most expensive node), a **Summary Table**, and **Raw Output**.
- **Saved Queries & searchable History**: save `.sql` files locally (<kbd>⌘</kbd>+<kbd>S</kbd> / <kbd>Ctrl</kbd>+<kbd>S</kbd>), filter execution history by status, star favorites, and re-run any past statement in a new tab.

[SQL editor, plans & history](/docs/sqlkit/query-editor) · [Keyboard shortcuts](/docs/sqlkit/keyboard-shortcuts)

<DocsFigure src="/sqlkit-sql-editor-ui.png" alt="SqlKit object tree, SQL editor, and results grid in the same workspace" caption="The object tree, Monaco SQL editor, and query result grid stay synchronized in one multi-tab workspace." :width="3424" :height="2224" />

## Explore schemas, DDL & ER diagrams {#schema}

Use the left sidebar object tree to browse **databases, schemas, tables, views, stored procedures, and functions** (automatically tailored to each engine's capabilities):

- **Table metadata tabs**: every table tab gives instant access to **Schema (Columns)**, **Indexes**, **Foreign Keys**, and **Triggers** alongside live item counts.
- **Visual Create Table designer**: create tables with column reordering, 27 SQL data types, length/precision, `NOT NULL`, auto-increment, primary keys, defaults, MySQL storage engines, and a **live `CREATE TABLE` DDL preview**.
- **Object DDL viewer**: inspect and copy `CREATE` scripts for tables, views, procedures, and functions, or create/drop databases and schemas with engine-specific encoding/charset options.
- **Interactive ER Diagrams** <DocsBadge variant="ultimate">Ultimate</DocsBadge>: open **Show ER Diagram** from any database or schema to visualize live foreign-key relationships with `dagre` auto-layout, manual drag-to-arrange cards, zoom/pinch (10%–300%), relationship highlighting, schema filtering, and double-click-to-open tables.

[Schema browser, DDL & ER diagrams](/docs/sqlkit/schema-and-er-diagrams)

<DocsFigure src="/sqlkit-er-diagram-ui.png" alt="SqlKit ER diagram showing tables, columns, and foreign-key links" caption="Interactive ER diagrams render live columns and foreign-key edges reported by the database and let you double-click any table to open its data." :width="3424" :height="2224" />

## Browse, edit & transfer data {#data}

Double-click any table in the sidebar to inspect and modify rows, or open **Transfer** for file-based bulk workflows:

- **Virtual-scrolled data grid**: smooth scrolling over large result sets with sticky headers, draggable column resizing, column visibility toggles, and server-side pagination.
- **Search, SQL filter & column filter chips**: combine full-table debounced search, raw SQL `WHERE` conditions, and backend column filter operators (`=`, `≠`, `LIKE`, `≥`, `≤`, `BETWEEN`) with right-click cell quick-filtering.
- **Primary-key-aware row editing**: edit rows via the validated **Edit Row** dialog (with explicit `NULL` checkboxes and PK protection), duplicate rows, or batch-delete selected rows. Single-table `SELECT` query results automatically detect editability so you can edit right from query tabs too.
- **Inspectors & quick export**: inspect complex rows in the vertical **Row Details** dialog or **JSON Viewer**, copy cells/rows as **CSV**, **JSON**, or **SQL `INSERT`**, and export query results directly to disk.
- **Bulk Transfer workspace** <DocsBadge variant="ultimate">Ultimate</DocsBadge>: 4-step **Export** (Tables, Database, or Server scope) and **Import** wizards supporting **CSV, JSONL, SQL, and Excel (`.xlsx`)** with auto-detection, column mapping, conflict strategies (`Skip`, `Replace`, `Upsert`, `Abort`), **Dry Run**, and a live background Task Manager.

[Data grid & table browser](/docs/sqlkit/table-browser) · [Bulk import & export](/docs/sqlkit/import-export)

<DocsFigure src="/sqlkit-data-view-table-ui.png" alt="SqlKit table grid with filter controls and row actions" caption="Browse, search, filter, inspect, and edit table rows without leaving your active workspace." :width="3424" :height="2224" />

## Use AI inside SqlKit {#ai}

<DocsBadge variant="ultimate">Ultimate</DocsBadge>

SqlKit ships two integrated AI interfaces powered by your own model keys or local inference server (20 provider presets including **OpenAI, Anthropic, Google Gemini, DeepSeek, Grok, Mistral, Azure OpenAI, OpenRouter, Ollama, LM Studio**, and custom OpenAI/Anthropic-compatible endpoints):

- **Agentic Data Studio** (`/data-studio`): full-page multi-source agent workspace where you attach one or more database connections, keep persistent SQLite-backed conversation sessions, monitor context usage with automatic compaction, and control per-session approval modes (`Ask` vs `Auto`).
- **AI Assistant Sidebar**: a resizable right-hand drawer inside **Queries** that automatically knows your active connection, current schema, and SQL editor context—ideal for explaining queries, diagnosing errors, and tuning slow SQL.
- **Custom context prompts**: define a global system prompt and per-connection business context prompts (domain terms, table conventions, reporting rules).

[Set up Agentic Data Studio](/docs/sqlkit/agentic-datastudio)

<DocsFigure src="/sqlkit-data-studio-ui.png" alt="SqlKit Agentic Data Studio showing schema context and generated SQL" caption="Agentic Data Studio inspects live schemas on attached connections, executes read-only verification under your permission policy, and drafts SQL you can review." :width="1440" :height="935" />

## Connect coding agents through MCP {#mcp}

<DocsBadge variant="ultimate">Ultimate</DocsBadge>

Enable **Settings → MCP Bridge** to expose your permitted SqlKit connections to external AI coding tools—including **Claude Code, OpenAI Codex, Cursor**, and any standard stdio MCP client—via `npx -y @geek-fun/data-studio-mcp`:

- **25 registered database & DBA tools** covering connection discovery, schema inspection, AST-verified read-only queries, execution plans, controlled writes/deletes/DDL, session inspection, and slow-query diagnostics.
- **Unified permission policy**: external MCP clients obey the exact same per-connection allow/deny rules (`No Access`, `Read`, `Read & Modify Data`, `Full Access`, `Custom`) as in-app AI.
- **Background persistence**: closing the SqlKit window keeps the local MCP Bridge running in the system tray / menu bar with live connected-client telemetry.

[MCP bridge & coding agents](/docs/sqlkit/mcp-bridge) · [AI permissions & safety model](/docs/sqlkit/ai-permissions)

## Edition & engine requirements {#requirements}

### Community vs. Ultimate feature matrix

| Capability | Community <DocsBadge variant="community">Free</DocsBadge> | Ultimate <DocsBadge variant="ultimate">Paid / Trial</DocsBadge> |
| --- | :---: | :---: |
| All 68 database profiles (Native, Wire-compat, HTTP, JDBC) | ✅ | ✅ |
| SSL/TLS modes & custom CA/client certificates | ✅ | ✅ |
| JRE 25 & JDBC driver auto-installer | ✅ | ✅ |
| Monaco SQL editor, 6-dialect autocomplete & 17-dialect formatter | ✅ | ✅ |
| Visual `EXPLAIN` & `EXPLAIN ANALYZE` (Tree / Summary / Raw) | ✅ | ✅ |
| Schema browser, visual Create Table, DDL viewer | ✅ | ✅ |
| Virtual-scrolled data grid, filters, row edit/duplicate/delete | ✅ | ✅ |
| Query history, favorites, saved `.sql` files, quick CSV/JSON/SQL export | ✅ | ✅ |
| 7 UI languages, Light/Dark/System themes, signed auto-updates | ✅ | ✅ |
| **SSH tunnels & multi-hop jump chains** | — | ✅ |
| **Interactive ER diagrams** | — | ✅ |
| **Bulk Transfer workspace (CSV, JSONL, SQL, Excel import & export)** | — | ✅ |
| **Agentic Data Studio & AI Assistant sidebar (BYOK)** | — | ✅ |
| **Local MCP Bridge & per-connection AI policy editor** | — | ✅ |

::: tip Version-lock license guarantee
Ultimate includes a **7-day free trial** and a **version-lock fallback**: every SqlKit version released on or before your subscription's lock horizon stays permanently unlocked on your machine, even if you later cancel. See [Pricing](/pricing).
:::

### Engine and permission boundaries

- **Engine & driver capabilities**: whether an engine exposes schemas, views, stored procedures, triggers, `EXPLAIN` plans, or editable rows depends on the database engine, driver layer, and your database account's privileges.
- **Wide-column CQL engines**: **Cassandra** and **ScyllaDB** use CQL (`system_schema` metadata), omit foreign keys and views, and provide table previews without grid-side filter/sort/paging.
- **Database account permissions**: SqlKit never elevates privileges beyond the database login you configure.
