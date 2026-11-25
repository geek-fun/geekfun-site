---
title: Schema Browser, Visual Create Table, DDL & ER Diagrams | SqlKit
description: Navigate databases, schemas, tables, views, procedures, and functions in SqlKit. Create tables visually with live DDL preview, inspect CREATE scripts, and explore interactive ER diagrams.
outline: [2, 3]
---

# Schema browser, DDL & ER diagrams

SqlKit lets you inspect database structures from the **Queries** sidebar, view `CREATE` DDL for any object, build new tables visually with live SQL preview, and map foreign-key relationships on an interactive **ER Diagram** canvas.

## Database object browser

The left sidebar supports two browsing modes—a focused **active-database selector** and an **expandable multi-database tree**—and automatically adapts its tree nodes to each engine's capabilities:

- **Databases**: create, drop, refresh, open a new query tab, or launch an ER diagram.
- **Schemas**: displayed on schema-aware engines (PostgreSQL, SQL Server, Oracle, Redshift, CockroachDB, Snowflake, etc.) and transparently omitted on flat engines (MySQL, SQLite, ClickHouse).
- **Tables**: lazy-loaded per schema with an instant filter/search input.
- **Views, Stored Procedures & Functions**: grouped in collapsible tree sections plus a dedicated searchable **Listing Tab** where you can view DDL, copy object names, rename, or drop objects.

### Table context menu actions

Right-click any table in the object tree to run common operations immediately:

| Action | Behavior |
| --- | --- |
| **View Data** | Opens the table's virtual-scrolled **Data** tab |
| **View Structure** | Opens the table directly on its **Schema (Columns)** tab |
| **`SELECT TOP 100`** | Generates a dialect-quoted preview query in a new SQL tab |
| **Generate CREATE Script** | Opens the **DDL Viewer** modal with the table's `CREATE TABLE` statement |
| **Export Data** | Opens the [Bulk Transfer](/docs/sqlkit/import-export) export wizard pre-targeted to that table <DocsBadge variant="ultimate">Ultimate</DocsBadge> |
| **Show ER Diagram** | Launches the interactive ER diagram for the enclosing database/schema <DocsBadge variant="ultimate">Ultimate</DocsBadge> |
| **Truncate Table / Drop Table** | Executes after an explicit destructive confirmation dialog |

### Table metadata tabs

Inside every open table tab, switch between five tabs (each displays its live count in the footer):

1. **Data** — rows, search, SQL filter, and row editing
2. **Schema** — column names, data types, nullability, defaults, and primary key markers
3. **Indexes** — index definitions, uniqueness, and indexed columns
4. **Foreign Keys** — referenced tables, column mappings, and update/delete rules
5. **Triggers** — trigger names, events, and definitions (where supported by the engine)

## Visual Create Table & database creation

### Visual Create Table dialog

Right-click **Tables** and choose **Create Table** to design a new table without hand-writing boilerplate DDL:

- **Table properties**: set the table name and, on MySQL-family engines, choose a **Storage Engine** (`InnoDB`, `MyISAM`, `MEMORY`, `CSV`, `ARCHIVE`, `BLACKHOLE`).
- **Column builder**: add, remove, and reorder columns (up/down controls) with:
  - Column name & **27 common SQL data types**
  - Length / precision fields for `VARCHAR`, `CHAR`, `DECIMAL`, and `NUMERIC`
  - Toggles for **`NOT NULL`**, **Auto-Increment** (`GENERATED ALWAYS AS IDENTITY` / dialect equivalent), and **Primary Key**
  - Default value expression
- **Live `CREATE TABLE` DDL preview**: updates in real time as you edit columns so you can review the exact SQL before creating the table.

### Create Database, Create Schema & DDL Viewer

- **Create Database**: includes engine-aware options such as **Charset & Collation** for MySQL-family databases and **Encoding & Locale** for PostgreSQL-family databases.
- **Create Schema / Drop Database**: available from the sidebar context menu on engines that support them.
- **Object DDL Viewer**: open **Generate CREATE Script** or **View DDL** on any table, view, procedure, or function to inspect formatted DDL and copy it to the clipboard.

::: info Scope of visual schema editing
SqlKit currently provides visual creation for databases, schemas, and new tables plus read-only inspection for existing columns, indexes, foreign keys, triggers, and DDL. Visual `ALTER TABLE` editing and automated schema-diff generation are not yet included—run `ALTER TABLE` statements in the [SQL editor](/docs/sqlkit/query-editor) for structural changes to existing tables.
:::

## Interactive ER diagrams {#er-diagrams}

<DocsBadge variant="ultimate">Ultimate</DocsBadge>

Choose **Show ER Diagram** from any database, schema, or table context menu to visualize live table columns and foreign-key relationships on an interactive canvas.

<DocsFigure src="/sqlkit-er-diagram-ui.png" alt="SqlKit interactive ER diagram displaying table cards, column types, and orthogonal foreign-key connectors" caption="ER diagrams compute an automatic dagre layout from live database foreign keys while allowing manual drag-and-drop refinement." :width="3424" :height="2224" />

### Canvas navigation & exploration

- **Automatic graph layout**: powered by `dagre` with clean orthogonal SVG relationship edges.
- **Manual arrangement**: drag any table card by its header to customize the layout—manual positions are preserved until you click **Reset Layout**.
- **Smooth pan & zoom**: drag the canvas background to pan; zoom from **10% to 300%** via toolbar buttons, <kbd>⌘</kbd>/<kbd>Ctrl</kbd> + mouse wheel (cursor-centered), or trackpad pinch gestures; click **Fit to Screen** anytime.
- **Schema filter & live search**: switch between **All Schemas** or a single schema, search tables in real time, and see total table and relationship counts in the toolbar.
- **Interactive inspection**:
  - Table cards show the first 5 columns by default—click to expand all columns.
  - **Click a table** to highlight its directly connected tables and foreign-key edges.
  - **Double-click a table** to open it immediately in the [Table Data Browser](/docs/sqlkit/table-browser).
- **Large-schema guard**: schemas with **more than 30 tables** prompt a confirmation before layout so huge databases don't unexpectedly saturate the canvas.

::: tip Where do ER relationships come from?
ER diagram edges are drawn strictly from foreign-key constraints declared in the database (`get_foreign_keys`). Databases without foreign keys (such as Cassandra/ScyllaDB, ClickHouse, or SQL schemas that enforce joins only in application code) display table cards without relationship arrows. Exporting ER diagrams to PNG/SVG is not currently supported.
:::

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard title="Data grid & table browser" description="Double-click tables from the tree or ER diagram to filter and edit rows." href="/docs/sqlkit/table-browser" icon="table" />
  <DocsCard title="Agentic Data Studio" description="Ask AI to inspect unfamiliar schemas, trace joins, and draft SQL." href="/docs/sqlkit/agentic-datastudio" badge="Ultimate" badge-variant="ultimate" icon="sparkles" />
</DocsCardGrid>
