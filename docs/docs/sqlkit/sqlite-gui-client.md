---
title: SQLite, SQLCipher & DuckDB GUI Client | Local & In-Memory | SqlKit
description: Open local SQLite files, SQLCipher encrypted databases, and DuckDB analytical files (Read-Write or Read-Only with conflict detection) in SqlKit on macOS, Windows, and Linux.
outline: [2, 3]
---

# SQLite, SQLCipher & DuckDB

SqlKit supports local embedded databases directly on disk or in memory—ideal for application debugging, local analytics, and offline SQL prototyping.

| Engine | Driver layer | Storage modes | Special options |
| --- | --- | --- | --- |
| **SQLite** | <DocsBadge variant="native">Native Rust (`rusqlite`)</DocsBadge> | Existing file, new file, or `:memory:` | Zero setup; no SSL section |
| **SQLCipher** | <DocsBadge variant="native">Native Rust (`sqlcipher`)</DocsBadge> | Encrypted local file | **Encryption Key** field (`PRAGMA key`) |
| **DuckDB** | <DocsBadge variant="jdbc">JDBC (`duckdb_jdbc`)</DocsBadge> | Local file or named in-memory (`memory:<label>`) | **Read-Write** / **Read-Only** mode with lock conflict guard |

## Open a SQLite database {#sqlite}

<DocsSteps>

### Create a SQLite connection

Open **Connections → Add New Connection** (<kbd>⌘</kbd>+<kbd>N</kbd> / <kbd>Ctrl</kbd>+<kbd>N</kbd>) and choose **SQLite**.

### Choose a file or in-memory mode

- **Open existing file**: click **Open…** and pick your `.db`, `.sqlite`, or `.sqlite3` file on disk.
- **Create a new database**: click **New…** and pick a target path for a fresh database file.
- **In-memory scratchpad**: select **`:memory:`** for an ephemeral local SQLite session.

### Save, connect, and inspect tables

Save the connection, double-click it to open **Queries**, and inspect the objects in the file:

```sql
SELECT type, name
FROM sqlite_schema
WHERE type IN ('table', 'view')
ORDER BY type, name;
```

</DocsSteps>

## Open an encrypted SQLCipher database {#sqlcipher}

To inspect a SQLCipher-encrypted SQLite file:

1. Select **SQLCipher** as the database type (instead of plain SQLite).
2. Browse to the encrypted database file on disk.
3. Enter your database **Encryption Key** (applied via `PRAGMA key` on open).
4. Click **Test Connection** to verify the key decrypts the database cleanly before saving.

::: warning Wrong key or unencrypted file
If SQLCipher reports *"file is not a database"*, verify that the encryption key is exact (keys are case-sensitive) and that the file is encrypted with a compatible SQLCipher format rather than plain SQLite.
:::

## Open a DuckDB analytical database {#duckdb}

DuckDB connects through SqlKit's managed JDBC Bridge (`duckdb_jdbc` — automatically downloaded on first test) and supports both **local `.duckdb` files** and **named in-memory databases** (`memory:<label>`).

### Read-Write vs. Read-Only access mode

DuckDB enforces strict single-writer file locking at the engine level. In the DuckDB connection form, choose:
- **Read-Write**: full querying, table creation, and writes (exclusive writer lock).
- **Read-Only** (`access_mode=READ_ONLY`): safe concurrent inspection while another read-only process reads the same file.

::: info Built-in DuckDB file conflict detection
SqlKit checks your saved connections when configuring a DuckDB file path and warns you if another saved connection opens the exact same file in the opposite access mode (`Read-Write` vs. `Read-Only`). Align access modes or disconnect the conflicting session before connecting.
:::

### Querying Parquet & CSV directly with DuckDB

Once connected to a local or in-memory DuckDB session, you can query local Parquet, CSV, or JSON files directly in the SQL editor using DuckDB's built-in readers:

```sql
SELECT *
FROM read_parquet('/path/to/events.parquet')
LIMIT 100;
```

## Troubleshooting local databases

| Symptom | What to check |
| --- | --- |
| **Database opens, but shows zero tables** | Verify the file path in the connection settings. Selecting a new path creates an empty database file with no user tables yet. |
| **SQLite `database is locked`** | Another process is holding a write transaction on the file. Finish the write transaction or wait for WAL checkpointing to complete. |
| **DuckDB file lock / access-mode conflict** | Close external writers (Python/CLI) or switch SqlKit's DuckDB connection to **Read-Only** if you only need to inspect data. |
| **DuckDB JDBC download fails** | Open **Settings → JRE & JDBC Drivers** to verify JRE 25, `jdbc-bridge`, and `duckdb_jdbc` installation status. |

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard title="Data grid & table browser" description="Search, filter, inspect JSON columns, and edit rows in SQLite and DuckDB." href="/docs/sqlkit/table-browser" icon="table" />
  <DocsCard title="Bulk import & export" description="Import CSV/Excel into SQLite or export DuckDB tables to CSV, JSONL, or Excel." href="/docs/sqlkit/import-export" badge="Ultimate" badge-variant="ultimate" icon="upload" />
</DocsCardGrid>
