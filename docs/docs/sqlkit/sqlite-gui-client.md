---
title: SQLite GUI and Database Browser for Mac, Windows, and Linux | SqlKit
description: Open a local SQLite database file in SqlKit, browse tables and views, run SQL, and export query results to CSV or JSON.
---

# SQLite GUI and database browser

Open a SQLite file in SqlKit to browse its tables and views or run SQL against it. The app is open source and runs on macOS, Windows, and Linux.

## Open a SQLite file

1. [Download and install SqlKit](/docs/sqlkit/installation), then open **Connections → Add New Connection**.
2. Choose **SQLite**, give the connection a name, and use **Open…** to select an existing database file. To create a database, use **New…** to pick a file path.
3. Save the connection, then choose **Connect**. In **Queries**, expand the object tree and double-click a table to view its data.

## List tables and views in the file

```sql
SELECT type, name
FROM sqlite_schema
WHERE type IN ('table', 'view')
ORDER BY type, name;
```

Run the query in **Queries**. If an existing database looks empty, check the file path in the connection. If you created a file at a different path, it starts with no user tables.

For SQLite, the local file path takes the place of a server address and TCP port. For a SQLCipher-encrypted file, choose **SQLCipher** and supply its encryption key. See the [SQL editor guide](/docs/sqlkit/query-editor) to save SQL or export rows to CSV or JSON.
