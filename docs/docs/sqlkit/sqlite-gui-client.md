---
title: SQLite, SQLCipher & DuckDB GUI Client | Local & In-Memory | SqlKit
description: Open local SQLite files, SQLCipher encrypted databases, and DuckDB analytical files (Read-Write or Read-Only with conflict detection) in SqlKit on macOS, Windows, and Linux.
outline: [2, 3]
---

# SQLite, SQLCipher & DuckDB

Open local embedded databases from disk or in memory for app debugging, local analytics, and offline SQL testing.

| Engine | Driver layer | Storage modes | Special options |
| --- | --- | --- | --- |
| SQLite | <DocsBadge variant="native">Native Rust (`rusqlite`)</DocsBadge> | Existing file, new file, or `:memory:` | Bundled in app; SSL section hidden |
| SQLCipher | <DocsBadge variant="native">Native Rust (`sqlcipher`)</DocsBadge> | Encrypted local file | **Encryption Key** field (`PRAGMA key`) |
| DuckDB | <DocsBadge variant="jdbc">JDBC (`duckdb_jdbc`)</DocsBadge> | Local file or named in-memory (`memory:<label>`) | **Read-Write** or **Read-Only** mode with lock conflict check |

## Open a SQLite database {#sqlite}

<DocsSteps>

### Create a SQLite connection

Open **Connections → Add New Connection** (<kbd>⌘</kbd>+<kbd>N</kbd> / <kbd>Ctrl</kbd>+<kbd>N</kbd>) and pick **SQLite**.

### Choose a file or in-memory mode

Use **Open...** to pick an existing `.db`, `.sqlite`, or `.sqlite3` file on disk, **New...** to pick a path for a new database file, or **`:memory:`** for a temporary in-memory session.

### Save, connect, and inspect tables

Save the connection, double-click it to open **Queries**, and list objects in the file:

```sql
SELECT type, name
FROM sqlite_schema
WHERE type IN ('table', 'view')
ORDER BY type, name;
```

</DocsSteps>

## Open an encrypted SQLCipher database {#sqlcipher}

1. Pick **SQLCipher** as the database type (plain SQLite will fail to read encrypted files).
2. Browse to the encrypted database file on disk.
3. Enter your **Encryption Key** (applied with `PRAGMA key` on open).
4. Click **Test Connection** to confirm the key decrypts the file before saving.

::: warning Wrong key or unencrypted file
If SQLCipher reports "file is not a database", check that the encryption key matches exact case and that the file was encrypted with a compatible SQLCipher format.
:::

## Open a DuckDB analytical database {#duckdb}

DuckDB connects through SqlKit's JDBC Bridge (`duckdb_jdbc`, downloaded automatically on first test) and supports local `.duckdb` files and named in-memory databases (`memory:<label>`).

### Read-Write vs. Read-Only access mode

DuckDB enforces a single-writer file lock at the engine level. Pick **Read-Write** for table creation and writes (exclusive writer lock), or **Read-Only** (`access_mode=READ_ONLY`) to read a file alongside other read-only processes.

::: info DuckDB file conflict detection
When you pick a DuckDB file path, SqlKit checks your other saved connections and warns if another connection opens the same file in the opposite access mode (`Read-Write` vs. `Read-Only`). Align both connections to Read-Only or disconnect the conflicting session first.
:::

### Querying Parquet & CSV directly with DuckDB

Once connected to a local or in-memory DuckDB session, query local Parquet, CSV, or JSON files directly in the SQL editor:

```sql
SELECT *
FROM read_parquet('/path/to/events.parquet')
LIMIT 100;
```

## Troubleshooting local databases

| Symptom | What to check |
| --- | --- |
| Database opens, but shows zero tables | Check the file path in the connection settings. Picking a new path creates an empty file with no user tables yet. |
| SQLite `database is locked` | Another process holds a write transaction on the file. Wait for the transaction or WAL checkpoint to finish. |
| DuckDB file lock / access-mode conflict | Close external writers (Python or CLI) or switch SqlKit's DuckDB connection to **Read-Only** if you only need to read data. |
| DuckDB JDBC download fails | Open **Settings → JRE & JDBC Drivers** to check JRE 25, `jdbc-bridge`, and `duckdb_jdbc` status. |

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard title="Data grid & table browser" description="Search, filter, inspect JSON columns, and edit rows in SQLite and DuckDB." href="/docs/sqlkit/table-browser" icon="table" />
  <DocsCard title="Bulk import & export" description="Import CSV/Excel into SQLite or export DuckDB tables to CSV, JSONL, or Excel." href="/docs/sqlkit/import-export" badge="Ultimate" badge-variant="ultimate" icon="upload" />
</DocsCardGrid>
