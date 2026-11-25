---
title: SQL Editor, Execution Plans & Query History | SqlKit
description: Write and format SQL in SqlKit's Monaco editor with 6-dialect schema autocomplete, gutter play icons, multi-result sets, visual EXPLAIN trees, saved queries, and history.
outline: [2, 3]
---

# SQL editor, execution plans & history

The **Queries** workspace pairs your live database object tree with a multi-tab **Monaco Editor**, Saved Queries panel, visual execution plan analyzer, and virtual-scrolled result grid.

<DocsFigure src="/sqlkit-sql-editor-ui.png" alt="SqlKit Queries workspace with object tree, Monaco SQL editor, and result grid" caption="Run single statements, selections, or full scripts while keeping schema metadata and results in view." :width="3424" :height="2224" />

## Run your first query {#run-your-first-query}

<DocsSteps>

### Verify connection & database context

In **Queries**, check the active **connection** and **database** (and schema where applicable) on the editor toolbar before running SQL. Open a new editor tab with **New Query**.

### Write a read-only check

```sql
SELECT 1 AS connection_check;
```

*(On Oracle Database, use `SELECT 1 AS connection_check FROM dual;`.)*

### Execute by selection, cursor, or full script

- Press <kbd>⌘</kbd>+<kbd>Enter</kbd> (macOS) or <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows/Linux) to run the **selected SQL**, or—when nothing is selected—the **statement at the cursor**.
- Click the **play icon in the editor gutter** beside the first line of any statement to execute that exact statement. Right-click a gutter icon to **Execute**, **Format**, or **Copy** that statement.
- Click **Execute** in the toolbar to run the entire script in the editor.

### Inspect results or switch result sets

Results appear immediately below the editor. When a script returns multiple result sets, use the **result-set selector dropdown** in the result panel header to switch between them.

</DocsSteps>

## Monaco editor, autocomplete & formatting

SqlKit embeds **Monaco Editor** synchronized with your Light/Dark theme and customizable under **Settings → Editor** (font size 8–32 px, tab size, indent width, line width, word wrap, line numbers, minimap).

### Schema-aware autocomplete (6 dialects)

Press <kbd>⌘</kbd>+<kbd>Space</kbd> (macOS) or <kbd>Ctrl</kbd>+<kbd>Space</kbd> (Windows/Linux)—or simply type—to get synchronous suggestions powered by cached schema metadata:

- **6 dialect profiles**: `sql`, `mysql`, `pgsql`, `mssql`, `plsql`, `sqlite`
- **Live schema objects**: databases, schemas, tables, and columns from your connected instance
- **Language items**: dialect-specific SQL keywords, built-in functions, and data types

### Dialect-aware SQL formatting (17 dialects)

Press <kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> (macOS) or <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd> (Windows/Linux), or click **Format SQL** in the toolbar:

- Formats **only the selection** if text is highlighted, or the **entire document** otherwise.
- Automatically selects the right dialect formatter across **17 dialects**: `postgresql`, `mysql`, `mariadb`, `tidb`, `redshift`, `sqlite`, `tsql`, `duckdb`, `clickhouse`, `plsql`, `db2`, `snowflake`, `trino`, `hive`, `spark`, `bigquery`, and generic `sql`.

### Smart SQL & CQL statement splitting

SqlKit's character-level scanner accurately splits multi-statement scripts without breaking on embedded semicolons:

- Handles single quotes, double quotes, backticks, PostgreSQL `$$...$$` dollar-quoted blocks, and `--`, `#`, `//` (CQL), and `/* ... */` comments.
- Preserves CQL `BEGIN ... APPLY BATCH` blocks as a single executable statement.
- Recovers blank-line-separated statements when semicolons are omitted, without prematurely splitting Common Table Expressions (`WITH ...`).

## Visual execution plans (`EXPLAIN` / `EXPLAIN ANALYZE`) {#explain-plans}

Press <kbd>F6</kbd> or click **Explain** in the toolbar to analyze how the database executes your query. Toggle between **EXPLAIN** (estimated plan without running the query) and **EXPLAIN ANALYZE** (runs the query and collects real timings and row counts).

::: warning EXPLAIN ANALYZE executes the statement
Use `EXPLAIN ANALYZE` only on read-only `SELECT` statements unless you intentionally want a write statement to execute on the target database.
:::

### Three synchronized plan views

1. **Tree View** — interactive operator tree displaying total estimated cost and highlighting the **most expensive node** so bottlenecks stand out immediately.
2. **Summary Table** — tabular breakdown of plan operators, costs, and metrics.
3. **Raw Output** — exact JSON or text returned by the database engine.

| Engine family | `EXPLAIN` command | `EXPLAIN ANALYZE` command |
| --- | --- | --- |
| **PostgreSQL & PG-wire** | `EXPLAIN (FORMAT JSON)` | `EXPLAIN (ANALYZE, FORMAT JSON)` |
| **MySQL & MySQL-wire** | `EXPLAIN FORMAT=JSON` | `EXPLAIN ANALYZE` |
| **SQL Server** | `SET SHOWPLAN_TEXT ON` | `SET STATISTICS PROFILE ON` |
| **SQLite / ClickHouse / JDBC / HTTP** | `EXPLAIN` | Engine-dependent |

## Browse, edit & export query results {#browse-and-export-data}

- **Interactive result grid**: sort by multiple columns, apply backend column filters (`=`, `≠`, `LIKE`, `≥`, `≤`, `BETWEEN`), inspect full rows or JSON cells, and copy cells or rows as **CSV**, **JSON**, or **SQL `INSERT`**.
- **Direct editing on `SELECT` results**: SqlKit runs SQL editability analysis on single-table `SELECT` queries—when it detects a single editable table and primary key, you can edit, duplicate, or delete rows straight from the query result grid.
- **Export results to file**: export returned rows to **CSV**, **JSON**, or **SQL** via the native save dialog. Note that any `LIMIT` / `TOP` or default row limit (configured in **Settings → Query**, default `1,000`) applies to the exported result set.
- To export entire tables or databases without writing queries, use the [Bulk Transfer workspace](/docs/sqlkit/import-export) <DocsBadge variant="ultimate">Ultimate</DocsBadge>.

## Saved queries & query history

### Saved Queries panel

The bottom section of the Queries sidebar houses a resizable **Saved Queries** panel:

- Press <kbd>⌘</kbd>+<kbd>S</kbd> (macOS) or <kbd>Ctrl</kbd>+<kbd>S</kbd> (Windows/Linux) to save any query tab as a local `.sql` file.
- Open, rename, reassign the target connection, reveal in Finder / File Explorer, or delete saved `.sql` files directly from the panel.

### Query History

Every executed query is automatically recorded in **History** with its SQL text, connection name, database, execution duration, timestamp, and status (`Success` or `Error`):

- **Search & filter**: full-text search across SQL, connection, or database, combined with status filtering.
- **Favorites**: star frequently used queries so **Clear Non-Favorites** cleans up ad-hoc history without touching saved favorites.
- **One-click re-run**: reopen any historical query in a new editor tab. Always verify the tab's active connection and database before executing, especially if you renamed or removed the original connection.

::: info Current editor boundaries
- **Transactions**: SqlKit does not include an interactive autocommit/commit/rollback toolbar button; run `BEGIN`, `COMMIT`, and `ROLLBACK` explicitly in SQL when needed.
- **Query cancellation**: configure **Query Timeout** (1–300 s, default `30 s`) in **Settings → Query** or per connection to bound long-running queries; mid-flight query cancellation is not yet implemented.
- **AI assistance**: with Ultimate, open the **AI Assistant** right sidebar directly inside Queries to explain SQL, diagnose errors, or optimize slow plans using your active editor context.
:::

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard title="Data grid & table browser" description="Filter, sort, inspect JSON, and edit rows with primary-key validation." href="/docs/sqlkit/table-browser" icon="table" />
  <DocsCard title="Keyboard shortcuts" description="Master macOS, Windows, and Linux shortcuts for faster SQL workflows." href="/docs/sqlkit/keyboard-shortcuts" icon="keyboard" />
</DocsCardGrid>
