---
title: Bulk Import & Export (CSV, JSONL, SQL, Excel) | SqlKit Transfer
description: Export tables, databases, or servers and import CSV, JSONL, SQL, and Excel (.xlsx) files in SqlKit Transfer with auto-detection, column mapping, conflict strategies, dry runs, and background tasks.
outline: [2, 3]
---

# Bulk import & export (Transfer)

SqlKit offers two levels of data movement depending on your task:

- **Quick Grid Export** <DocsBadge variant="community">Community · Free</DocsBadge>: export or copy the rows returned by any query (**CSV**, **JSON**, **SQL `INSERT`**) or the active page in the table browser (**CSV**). See [SQL editor results](/docs/sqlkit/query-editor#browse-and-export-data).
- **Transfer Workspace** <DocsBadge variant="ultimate">Ultimate</DocsBadge>: full 4-step **Export** and **Import** wizards for **CSV**, **JSONL**, **SQL**, and **Excel (`.xlsx`)** files with live preview, column mapping, conflict strategies, dry runs, and background task tracking.

## Supported transfer formats

| Format | Export options | Import capabilities |
| --- | --- | --- |
| **CSV** (`.csv`) | Custom delimiter, quote character, encoding, header row toggle, quote-all, `LF` / `CRLF` line endings | Auto-detects format, delimiter, encoding, header row, and columns |
| **JSONL** (`.jsonl`) | One JSON object per line, configurable date format (e.g., ISO-8601) | Auto-detects JSON keys and previews records |
| **SQL** (`.sql`) | Target table name, batch size (default `1,000`), include `CREATE TABLE`, include `DROP TABLE`, target engine dialect | Executes SQL statements against the selected target connection & database |
| **Excel** (`.xlsx`) | Sheet name, include header row, auto-fit column widths, freeze header row | Reads Excel worksheets with automatic column preview and mapping |

*(Parquet files are not currently supported.)*

## Export database data

Open **Transfer → Export** from the main sidebar (or right-click any table in **Queries** and choose **Export Data** to pre-select that table).

<DocsSteps>

### Choose source scope

Select your saved connection and pick an export scope:
- **Tables** — pick one or more tables and optionally narrow down specific columns per table.
- **Database** — export all tables in the selected database/schema.
- **Server** — export across databases visible on the connection.

### Pick format & options

Select **CSV**, **JSONL**, **SQL**, or **Excel (`.xlsx`)** and configure format-specific options (delimiters, line endings, sheet settings, or SQL `CREATE`/`DROP` statements and batch size).

### Preview the output

Review the live **Export Preview** to verify formatting, column headers, quoting, and dialect syntax before writing to disk.

### Run & monitor progress

Choose an output path and click **Start Export**. Progress updates in real time in the wizard and in the **Background Task Manager**.

</DocsSteps>

## Import files into a database

Open **Transfer → Import** to load CSV, JSONL, Excel (`.xlsx`), or SQL files into a target connection.

<DocsSteps>

### Select or drop the source file

Drop a file onto the upload zone or browse from disk. SqlKit runs automatic detection to identify the **file format, delimiter, text encoding, header row, and column names**, showing a preview of the first rows.

### Map source columns to target columns

In **Target & Mapping**, select the target **connection**, **database**, **schema** (where applicable), and **table** (or choose to create a new table). Match each source column to a destination column and target type, or skip unneeded columns.

### Configure conflict handling & run a Dry Run

Before writing to your database, configure import execution options:

| Option | Behavior |
| --- | --- |
| **Conflict Strategy — `Skip`** | Ignores rows that violate primary-key or unique constraints and continues |
| **Conflict Strategy — `Replace`** | Replaces existing conflicting rows |
| **Conflict Strategy — `Upsert`** | Inserts new rows and updates existing rows on key match |
| **Conflict Strategy — `Abort`** | Stops the import immediately on the first conflict |
| **Batch Size** | Rows written per batch (default `5,000`) |
| **Create Table if missing** | Creates the destination table automatically using mapped column types |
| **Truncate before import** | Empties the destination table before inserting rows (use with caution) |
| **Dry Run** | Validates parsing, type conversion, and mapping without modifying the target table |

### Execute & review row-level results

Click **Start Import** and monitor processed, inserted, skipped, and errored row counts.

</DocsSteps>

::: warning Retrying a partially completed import
If an import stops midway after writing earlier batches, inspect the target table (or switch conflict strategy to **Skip** / **Upsert**) before re-running so you do not duplicate rows. For `.sql` imports, always review the script before running—statements execute directly under your database account's privileges.
:::

## Background task manager

Long-running exports and imports run in the background without blocking your **Queries** or **Data Studio** tabs. Open the **Task Sidebar / Task Manager Panel** at any time to check:

- Active, completed, and failed transfer jobs
- Processed row counts, skipped counts, and error summaries
- Elapsed execution time

::: info Operational boundary
Transfer is designed for development datasets, analytics extracts, and everyday table imports/exports. For multi-gigabyte or production disaster-recovery backups, use your database's native dump utilities (`pg_dump`, `mysqldump`, `sqlcmd`, Oracle Data Pump / RMAN).
:::

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard title="Data grid & table browser" description="Inspect imported rows, run filters, and verify values immediately." href="/docs/sqlkit/table-browser" icon="table" />
  <DocsCard title="SQL editor & results" description="Use free CSV/JSON/SQL quick export on any query result set." href="/docs/sqlkit/query-editor#browse-and-export-data" icon="code" />
</DocsCardGrid>
