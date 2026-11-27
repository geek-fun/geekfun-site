---
title: SqlKit Capabilities & Feature Tour | SQL, Data, Schema, AI & MCP
description: Walkthrough of SqlKit workspaces including connections, Monaco SQL editor, visual EXPLAIN plans, ER diagrams, data grid, bulk transfer, Agentic Data Studio, MCP Bridge, and edition matrix.
outline: [2, 3]
---

# Capabilities & feature tour

SqlKit splits daily database work across Connections, Queries, Transfer, and Data Studio. All 68 database profiles and core SQL editing are free in Community; SSH tunnels, ER diagrams, bulk transfer, AI, and MCP require Ultimate.

<div class="docs-section-links">

- [Install SqlKit](/docs/sqlkit/installation)
- [Supported databases (68+)](/docs/sqlkit/supported-databases)
- [Compare plans](/pricing)

</div>

## Connect to databases & networks {#connections}

Open **Connections** to view saved database profiles in grid or list view, search by name, host, or engine, and check active connection status. Click **`+`** to add a profile.

- Connect to 68 database profiles across native Rust adapters (PostgreSQL, MySQL, SQL Server, SQLite, SQLCipher, ClickHouse), PostgreSQL/MySQL wire-compatible engines, HTTP SQL engines, and 27 JDBC Bridge engines.
- Choose from five SSL/TLS modes (`disable`, `prefer`, `require`, `verify-ca`, `verify-full`) with custom CA certificates, client certificates, private keys, and SQL Server `trustServerCertificate`.
- Connection Guardian monitors connection health and replaces broken or stale transport sessions on demand without replaying write queries.
- Testing an Oracle, DuckDB, Snowflake, BigQuery, or Cassandra connection runs a live 3-step check for JRE 25, `jdbc-bridge`, and the engine driver.
- With Ultimate <DocsBadge variant="ultimate">Ultimate</DocsBadge>, attach reusable SSH profiles, drag and drop to reorder multi-hop bastions, chain through the OS System HTTP CONNECT proxy, resolve `~/.ssh/config` host aliases, and authenticate with password, private key, SSH agent, or Windows Pageant.

[Connections, TLS & recovery](/docs/sqlkit/connect-to-database) · [SSH tunnels & jump chains](/docs/sqlkit/ssh-tunnel)

<DocsFigure src="/sqlkit-client-ui.png" alt="SqlKit Connections workspace with saved database profiles" caption="Manage saved connections in grid or list view, test connectivity, and open the Queries workspace directly from any card." :width="3424" :height="2224" />

## Write SQL & inspect execution plans {#query}

Open **Queries** for the database object tree, multi-tab Monaco Editor, Saved Queries panel, and bottom result grid in one window.

- Schema-aware autocomplete covers 6 SQL dialect profiles (`sql`, `mysql`, `pgsql`, `mssql`, `plsql`, `sqlite`) and suggests tables, columns, schemas, functions, data types, and keywords.
- SQL formatting supports 17 dialects via <kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> (macOS) or <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd> (Windows/Linux), and formats either the current selection or the full script.
- Statement execution includes clickable gutter play icons, SQL and CQL statement splitting (including PostgreSQL `$$` dollar quotes and CQL `BEGIN ... APPLY BATCH`), and a multi-result-set dropdown.
- Press <kbd>F6</kbd> for visual `EXPLAIN` and `EXPLAIN ANALYZE` with three views: an interactive Tree View (showing total cost and the most expensive node), a Summary Table, and Raw Output.
- Save `.sql` files locally (<kbd>⌘</kbd>+<kbd>S</kbd> / <kbd>Ctrl</kbd>+<kbd>S</kbd>), filter execution history by status, star favorites, and reopen any past run in a new tab.

[SQL editor, plans & history](/docs/sqlkit/query-editor) · [Keyboard shortcuts](/docs/sqlkit/keyboard-shortcuts)

<DocsFigure src="/sqlkit-sql-editor-ui.png" alt="SqlKit object tree, SQL editor, and results grid in the same workspace" caption="The object tree, Monaco SQL editor, and query result grid stay in view in one multi-tab workspace." :width="3424" :height="2224" />

## Explore schemas, DDL & ER diagrams {#schema}

Use the left sidebar object tree to browse databases, schemas, tables, views, stored procedures, and functions. The tree hides nodes an engine does not support.

- Each open table tab includes **Schema (Columns)**, **Indexes**, **Foreign Keys**, and **Triggers** views with live item counts.
- The visual Create Table dialog supports column reordering, 27 SQL data types, length and precision, `NOT NULL`, auto-increment, primary keys, defaults, MySQL storage engines, and a live `CREATE TABLE` DDL preview.
- View and copy `CREATE` DDL for tables, views, procedures, and functions, or create and drop databases and schemas with engine-specific encoding and charset options.
- With Ultimate <DocsBadge variant="ultimate">Ultimate</DocsBadge>, open **Show ER Diagram** from any database or schema to graph live foreign-key links with `dagre` auto-layout, drag-to-arrange cards, 10%-300% zoom and trackpad pinch, connected-table highlighting, schema filtering, and double-click to open tables.

[Schema browser, DDL & ER diagrams](/docs/sqlkit/schema-and-er-diagrams)

<DocsFigure src="/sqlkit-er-diagram-ui.png" alt="SqlKit ER diagram showing tables, columns, and foreign-key links" caption="Interactive ER diagrams plot columns and foreign-key edges reported by the database and open any table on double-click." :width="3424" :height="2224" />

## Browse, edit & transfer data {#data}

Double-click any table in the sidebar to inspect and edit rows, or open **Transfer** for file-based bulk imports and exports.

- The virtual-scrolled grid renders only visible rows and includes sticky headers, draggable column widths, column visibility toggles, and server-side pagination.
- Narrow rows with full-table debounced search, raw SQL `WHERE` conditions, and backend column filter operators (`=`, `≠`, `LIKE`, `≥`, `≤`, `BETWEEN`) or right-click cell filtering.
- Edit rows through the **Edit Row** dialog (with explicit `NULL` checkboxes and PK protection), duplicate rows, or batch-delete selected rows. Single-table `SELECT` results detect editability automatically so you can edit inside query tabs too.
- Inspect nested fields in the vertical **Row Details** dialog or **JSON Viewer**, copy cells or rows as CSV, JSON, or SQL `INSERT`, and export query results to disk.
- With Ultimate <DocsBadge variant="ultimate">Ultimate</DocsBadge>, **Transfer** runs 4-step Export (Tables, Database, or Server scope) and Import wizards for CSV, JSONL, SQL, and Excel (`.xlsx`) with format auto-detection, column mapping, `Skip`/`Replace`/`Upsert`/`Abort` conflict strategies, Dry Run, and a background Task Manager.

[Data grid & table browser](/docs/sqlkit/table-browser) · [Bulk import & export](/docs/sqlkit/import-export)

<DocsFigure src="/sqlkit-data-view-table-ui.png" alt="SqlKit table grid with filter controls and row actions" caption="Search, filter, inspect, and edit table rows without leaving the active workspace." :width="3424" :height="2224" />

## Use AI inside SqlKit {#ai}

<DocsBadge variant="ultimate">Ultimate</DocsBadge>

SqlKit includes two AI workspaces backed by your own API keys or local model server (20 provider presets including OpenAI, Anthropic, Google Gemini, DeepSeek, Grok, Mistral, Azure OpenAI, OpenRouter, Ollama, LM Studio, and custom OpenAI/Anthropic-compatible endpoints).

- **Agentic Data Studio** (`/data-studio`) is a full-page workspace where you attach one or more database connections, keep SQLite-backed conversation history, monitor context usage with auto-compaction, and set per-session `Ask` or `Auto` approval modes.
- **AI Assistant Sidebar** is a resizable right drawer (320-600 px) inside **Queries** that reads your active connection, current schema, and open SQL editor so you can explain queries, diagnose errors, or rewrite slow SQL.
- You can set both a global system prompt and per-connection business context prompts (domain terms, soft-delete columns, reporting rules).

[Set up Agentic Data Studio](/docs/sqlkit/agentic-datastudio)

<DocsFigure src="/sqlkit-data-studio-ui.png" alt="SqlKit Agentic Data Studio showing schema context and generated SQL" caption="Agentic Data Studio inspects live schemas on attached connections, runs permitted read checks, and drafts SQL you can review." :width="1440" :height="935" />

## Connect coding agents through MCP {#mcp}

<DocsBadge variant="ultimate">Ultimate</DocsBadge>

Enable **Settings → MCP Bridge** to share permitted SqlKit connections with external coding tools such as Claude Code, OpenAI Codex, Cursor, and other stdio MCP clients via `npx -y @geek-fun/data-studio-mcp`.

- 25 registered database and DBA tools cover connection discovery, schema inspection, AST-verified read-only queries, execution plans, controlled writes/deletes/DDL, session lists, and slow-query checks.
- External MCP clients follow the same per-connection policy (`No Access`, `Read`, `Read & Modify Data`, `Full Access`, `Custom`) as in-app AI.
- Closing the SqlKit window leaves the local MCP Bridge running in the system tray or menu bar with live connected-client telemetry.

[MCP bridge & coding agents](/docs/sqlkit/mcp-bridge) · [AI permissions & safety model](/docs/sqlkit/ai-permissions)

## Edition & engine requirements {#requirements}

### Community vs. Ultimate

| Capability | Community <DocsBadge variant="community">Free</DocsBadge> | Ultimate <DocsBadge variant="ultimate">Paid / Trial</DocsBadge> |
| --- | :---: | :---: |
| All 68 database profiles (Native, Wire-compat, HTTP, JDBC) | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> |
| SSL/TLS modes & custom CA/client certificates | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> |
| JRE 25 & JDBC driver auto-installer | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> |
| Monaco SQL editor, 6-dialect autocomplete & 17-dialect formatter | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> |
| Visual `EXPLAIN` & `EXPLAIN ANALYZE` (Tree / Summary / Raw) | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> |
| Schema browser, visual Create Table, DDL viewer | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> |
| Virtual-scrolled data grid, filters, row edit/duplicate/delete | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> |
| Query history, favorites, saved `.sql` files, quick CSV/JSON/SQL export | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> |
| 7 UI languages, Light/Dark/System themes, signed auto-updates | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> |
| SSH tunnels & multi-hop jump chains | <DocsCheck value="no" /> | <DocsCheck value="yes" /> |
| Interactive ER diagrams | <DocsCheck value="no" /> | <DocsCheck value="yes" /> |
| Bulk Transfer workspace (CSV, JSONL, SQL, Excel import & export) | <DocsCheck value="no" /> | <DocsCheck value="yes" /> |
| Agentic Data Studio & AI Assistant sidebar (BYOK) | <DocsCheck value="no" /> | <DocsCheck value="yes" /> |
| Local MCP Bridge & per-connection AI policy editor | <DocsCheck value="no" /> | <DocsCheck value="yes" /> |

::: tip Version-lock license guarantee
Ultimate includes a 7-day free trial and a version-lock fallback: every SqlKit version released on or before your subscription's lock horizon stays available locally even if you cancel later. See [Pricing](/pricing).
:::

### Engine and permission boundaries

Whether an engine shows schemas, views, stored procedures, triggers, `EXPLAIN` plans, or editable rows depends on the database engine, the driver layer, and the grants on your database user. Cassandra and ScyllaDB use CQL (`system_schema` metadata), omit foreign keys and views, and open as table previews without grid-side filter, sort, or paging. SqlKit always runs with the privileges of the database login you configure.
