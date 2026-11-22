---
title: MySQL GUI Client for macOS, Windows, and Linux | SqlKit
description: Connect to MySQL with SqlKit using the native driver. Browse databases, inspect the active database, run SQL, and export query results.
---

# MySQL GUI client

SqlKit includes a MySQL driver. Connect to your server to browse tables and indexes, inspect table definitions, and run queries in the SQL editor. The open-source desktop app runs on macOS, Windows, and Linux.

## Connect to MySQL

1. [Download and install SqlKit](/docs/sqlkit/installation), then open **Connections → Add New Connection**.
2. Select **MySQL**. Enter the host, TCP port (usually `3306`), username, and password. Enter a database name to select it when connecting.
3. If your server requires TLS, configure it in **Advanced** using the settings from your database provider. Test and save the connection, then choose **Connect**.

## Check the active MySQL database

Open **Queries** and run the following to check which database is selected and which MySQL version responded.

```sql
SELECT DATABASE() AS active_database, VERSION() AS server_version;
```

If `active_database` is `NULL`, select your database in the sidebar. Double-click a table to browse rows, or open **View Structure** to inspect its columns and indexes. See [how to save SQL and export results](/docs/sqlkit/query-editor).

## Why does MySQL say “Access denied”?

MySQL accounts specify where the user can connect from. Ask your database administrator to check the host MySQL sees and the account’s permissions on the selected database. If the connection times out, check whether you can reach the server on its configured port.

For MariaDB, choose **MariaDB** in the [connection form](/docs/sqlkit/connect-to-database).
