---
title: Bulk Import & Export (CSV, JSONL, SQL, Excel) | SqlKit Transfer
description: Export tables, databases, or servers and import CSV, JSONL, SQL, and Excel (.xlsx) files in SqlKit Transfer with auto-detection, column mapping, conflict strategies, dry runs, and background tasks.
outline: [2, 3]
---

# Bulk import & export (Transfer)

SqlKit has two export and import paths depending on scope:

- **Quick Grid Export** <DocsBadge variant="community">Community · Free</DocsBadge> exports or copies rows returned by any query (CSV, JSON, SQL `INSERT`) or the current page in the table browser (CSV). See [SQL editor results](/docs/sqlkit/query-editor#browse-and-export-data).
- **Transfer Workspace** <DocsBadge variant="ultimate">Ultimate</DocsBadge> provides 4-step Export and Import wizards for CSV, JSONL, SQL, and Excel (`.xlsx`) files with live preview, column mapping, conflict strategies, dry runs, and background task tracking.

## Supported transfer formats

| Format | Export options | Import capabilities |
| --- | --- | --- |
| CSV (`.csv`) | Custom delimiter, quote character, encoding, header row toggle, quote-all, `LF` / `CRLF` line endings | Auto-detects format, delimiter, encoding, header row, and columns |
| JSONL (`.jsonl`) | One JSON object per line, configurable date format (such as ISO-8601) | Auto-detects JSON keys and previews records |
| SQL (`.sql`) | Target table name, batch size (default `1,000`), include `CREATE TABLE`, include `DROP TABLE`, target engine dialect | Runs SQL statements against the selected target connection and database |
| Excel (`.xlsx`) | Sheet name, include header row, auto-fit column widths, freeze header row | Reads Excel worksheets with automatic column preview and mapping |

*(Parquet files are not supported.)*

## Export database data

Open **Transfer → Export** from the main sidebar, or right-click any table in **Queries** and choose **Export Data** to pre-select that table.

<DocsSteps>

### Choose source scope

Select a saved connection and pick the scope: **Tables** (one or more tables, with optional per-table column selection), **Database** (all tables in the selected database or schema), or **Server** (across databases visible on the connection).

### Pick format & options

Choose CSV, JSONL, SQL, or Excel (`.xlsx`) and set format-specific options (delimiters, line endings, sheet settings, or SQL `CREATE`/`DROP` statements and batch size).

### Preview the output

Check the live **Export Preview** to verify headers, quoting, and SQL dialect syntax before writing to disk.

### Run & monitor progress

Pick an output path and click **Start Export**. Progress updates live in the wizard and in the **Background Task Manager**.

</DocsSteps>

## Import files into a database

Open **Transfer → Import** to load CSV, JSONL, Excel (`.xlsx`), or SQL files into a target connection.

<DocsSteps>

### Select or drop the source file

Drop a file onto the upload zone or browse from disk. SqlKit detects the file format, delimiter, text encoding, header row, and column names automatically and previews the first rows.

### Map source columns to target columns

In **Target & Mapping**, select the destination connection, database, schema (where applicable), and table (or choose to create a new table). Match each source column to a destination column and type, or skip unneeded columns.

### Configure conflict handling & run a Dry Run

Set import execution options before writing to the database:

| Option | Behavior |
| --- | --- |
| Conflict Strategy: `Skip` | Ignores rows that violate primary-key or unique constraints and continues |
| Conflict Strategy: `Replace` | Replaces existing conflicting rows |
| Conflict Strategy: `Upsert` | Inserts new rows and updates existing rows on key match |
| Conflict Strategy: `Abort` | Stops the import immediately on the first conflict |
| Batch Size | Rows written per batch (default `5,000`) |
| Create Table if missing | Creates the destination table from the mapped column types |
| Truncate before import | Empties the destination table before inserting rows |
| Dry Run | Validates parsing, type conversion, and mapping without modifying the target table |

### Execute & review row-level results

Click **Start Import** and monitor processed, inserted, skipped, and errored row counts.

</DocsSteps>

::: warning Retrying a partially completed import
If an import stops midway after writing earlier batches, check the target table (or switch conflict strategy to **Skip** or **Upsert**) before re-running so you do not duplicate rows. For `.sql` imports, review the script before running; statements execute directly under your database account's privileges.
:::

## Background task manager

Long-running exports and imports run in the background without blocking **Queries** or **Data Studio**. Open the **Task Sidebar / Task Manager Panel** anytime to check running, completed, and failed jobs along with processed rows, skipped counts, error summaries, and elapsed time.

::: info Operational boundary
Transfer is meant for working datasets, analytics extracts, and routine table imports or exports. For multi-gigabyte backups and disaster recovery, use native database tools such as `pg_dump`, `mysqldump`, `sqlcmd`, or Oracle Data Pump / RMAN.
:::

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard title="Data grid & table browser" description="Inspect imported rows, run filters, and verify values right away." href="/docs/sqlkit/table-browser" icon="table" />
  <DocsCard title="SQL editor & results" description="Use free CSV/JSON/SQL quick export on any query result set." href="/docs/sqlkit/query-editor#browse-and-export-data" icon="code" />
</DocsCardGrid>
