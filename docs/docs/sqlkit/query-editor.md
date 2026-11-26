---
title: SQL Editor, Execution Plans & Query History | SqlKit
description: Write and format SQL in SqlKit's Monaco editor with 6-dialect schema autocomplete, gutter play icons, multi-result sets, visual EXPLAIN trees, saved queries, and history.
outline: [2, 3]
---

# SQL editor, execution plans & history

The **Queries** workspace puts the database object tree, multi-tab Monaco Editor, Saved Queries panel, visual execution plan panel, and result grid in one window.

<DocsFigure src="/sqlkit-sql-editor-ui.png" alt="SqlKit Queries workspace with object tree, Monaco SQL editor, and result grid" caption="Run single statements, selections, or full scripts while keeping schema metadata and results in view." :width="3424" :height="2224" />

## Run your first query {#run-your-first-query}

<DocsSteps>

### Verify connection & database context

In **Queries**, check the active connection and database (and schema where applicable) on the editor toolbar before running SQL. Open a new editor tab with **New Query**.

### Write a read-only check

```sql
SELECT 1 AS connection_check;
```

*(On Oracle Database, use `SELECT 1 AS connection_check FROM dual;`.)*

### Execute by selection, cursor, or full script

Press <kbd>⌘</kbd>+<kbd>Enter</kbd> (macOS) or <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows/Linux) to run the selected SQL, or the statement at the cursor when nothing is selected. You can also click the play icon in the editor gutter beside the first line of any statement (right-click it to Execute, Format, or Copy that statement), or click **Execute** in the toolbar to run the whole script.

### Inspect results or switch result sets

Results appear below the editor. When a script returns multiple result sets, switch between them from the result-set dropdown in the result panel header.

</DocsSteps>

## Monaco editor, autocomplete & formatting

SqlKit uses Monaco Editor synced with your Light or Dark theme. Adjust font size (8-32 px), tab size, indent width, line width, word wrap, line numbers, and minimap in **Settings → Editor**.

### Schema-aware autocomplete (6 dialects)

Start typing or press <kbd>⌘</kbd>+<kbd>Space</kbd> (macOS) or <kbd>Ctrl</kbd>+<kbd>Space</kbd> (Windows/Linux) for synchronous suggestions backed by cached schema metadata. Autocomplete supports 6 dialect profiles (`sql`, `mysql`, `pgsql`, `mssql`, `plsql`, `sqlite`) and suggests connected databases, schemas, tables, columns, dialect keywords, built-in functions, and data types.

### Dialect-aware SQL formatting (17 dialects)

Press <kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> (macOS) or <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd> (Windows/Linux), or click **Format SQL** in the toolbar. Formatting acts on the current selection if text is highlighted, or the full document otherwise. SqlKit picks the matching formatter across 17 dialects: `postgresql`, `mysql`, `mariadb`, `tidb`, `redshift`, `sqlite`, `tsql`, `duckdb`, `clickhouse`, `plsql`, `db2`, `snowflake`, `trino`, `hive`, `spark`, `bigquery`, and generic `sql`.

### SQL & CQL statement splitting

The character-level statement scanner splits multi-statement scripts without breaking on semicolons inside strings or blocks. It handles single quotes, double quotes, backticks, PostgreSQL `$$...$$` dollar-quoted blocks, and `--`, `#`, `//` (CQL), and `/* ... */` comments. It also keeps CQL `BEGIN ... APPLY BATCH` blocks together and separates blank-line-delimited statements when semicolons are omitted, without splitting Common Table Expressions (`WITH ...`).

## Visual execution plans (`EXPLAIN` / `EXPLAIN ANALYZE`) {#explain-plans}

Press <kbd>F6</kbd> or click **Explain** in the toolbar to inspect how the database plans a query. Switch between **EXPLAIN** (estimated plan without running the query) and **EXPLAIN ANALYZE** (runs the query to collect real timings and row counts).

::: warning EXPLAIN ANALYZE executes the statement
Use `EXPLAIN ANALYZE` only on read-only `SELECT` statements unless you intend to run a write statement on the target database.
:::

### Three plan views

1. **Tree View**: operator tree showing total estimated cost and marking the most expensive node.
2. **Summary Table**: flat breakdown of plan operators, costs, and metrics.
3. **Raw Output**: exact JSON or text returned by the database engine.

| Engine family | `EXPLAIN` command | `EXPLAIN ANALYZE` command |
| --- | --- | --- |
| PostgreSQL & PG-wire | `EXPLAIN (FORMAT JSON)` | `EXPLAIN (ANALYZE, FORMAT JSON)` |
| MySQL & MySQL-wire | `EXPLAIN FORMAT=JSON` | `EXPLAIN ANALYZE` |
| SQL Server | `SET SHOWPLAN_TEXT ON` | `SET STATISTICS PROFILE ON` |
| SQLite / ClickHouse / JDBC / HTTP | `EXPLAIN` | Engine-dependent |

## Browse, edit & export query results {#browse-and-export-data}

In the result grid, sort by multiple columns, apply backend column filters (`=`, `≠`, `LIKE`, `≥`, `≤`, `BETWEEN`), inspect full rows or JSON cells, and copy cells or rows as CSV, JSON, or SQL `INSERT`.

For single-table `SELECT` queries, SqlKit runs SQL editability analysis automatically. When it identifies one editable table and a primary key, you can edit, duplicate, or delete rows straight from the query results.

Use the result toolbar to export returned rows to CSV, JSON, or SQL via the native save dialog. Any `LIMIT`, `TOP`, or default row limit (configured in **Settings → Query**, default `1,000`) applies to the exported file. To export entire tables or databases without writing queries, use the [Bulk Transfer workspace](/docs/sqlkit/import-export) <DocsBadge variant="ultimate">Ultimate</DocsBadge>.

## Saved queries & query history

### Saved Queries panel

The bottom of the Queries sidebar holds a resizable **Saved Queries** panel. Press <kbd>⌘</kbd>+<kbd>S</kbd> (macOS) or <kbd>Ctrl</kbd>+<kbd>S</kbd> (Windows/Linux) to save any tab as a local `.sql` file. From the panel you can open, rename, reassign the connection, reveal in Finder or File Explorer, or delete saved files.

### Query History

SqlKit records every executed query in **History** with its SQL text, connection name, database, execution time, timestamp, and status (`Success` or `Error`). You can search across SQL, connection, or database, filter by status, star frequent queries so **Clear Non-Favorites** keeps them, and reopen any past entry in a new editor tab. Always check the active connection and database before rerunning an old query, especially if you renamed or removed the original connection.

::: info Current editor boundaries
- SqlKit does not have toolbar buttons for autocommit, commit, or rollback; run `BEGIN`, `COMMIT`, and `ROLLBACK` in SQL when you need manual transaction control.
- Mid-flight query cancellation is not yet implemented. Set **Query Timeout** (1-300 s, default `30 s`) in **Settings → Query** or per connection to bound long-running queries.
- With Ultimate, open the **AI Assistant** right sidebar in Queries to explain SQL, diagnose errors, or rewrite slow queries using your active editor context.
:::

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard title="Data grid & table browser" description="Filter, sort, inspect JSON, and edit rows with primary-key validation." href="/docs/sqlkit/table-browser" icon="table" />
  <DocsCard title="Keyboard shortcuts" description="All macOS, Windows, and Linux shortcuts for the editor and workspace." href="/docs/sqlkit/keyboard-shortcuts" icon="keyboard" />
</DocsCardGrid>
