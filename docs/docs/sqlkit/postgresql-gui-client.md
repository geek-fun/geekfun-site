---
title: PostgreSQL GUI Client for macOS, Windows, and Linux | SqlKit
description: Connect to Postgres with SqlKit, configure SSL/TLS, browse schemas such as public, and verify the active database and schema in the SQL editor.
---

# PostgreSQL GUI client

Connect to Postgres with SqlKit’s built-in driver. The object tree shows schemas, tables, views, and indexes, and you can run queries in the SQL editor. SqlKit is open source and runs on macOS, Windows, and Linux.

## Connect to PostgreSQL

1. [Download and install SqlKit](/docs/sqlkit/installation), then open **Connections → Add New Connection**.
2. Select **PostgreSQL**. Enter the host, port (usually `5432`), and the username and password for your PostgreSQL role. Use the database name from your provider or administrator.
3. In **Advanced**, match your server's TLS settings. Use **Verify Full** with the appropriate CA certificate when your provider requires verification of both the certificate and hostname.
4. Test and save the connection, then choose **Connect**.

## Find the right schema

In **Queries**, select the database and expand the schema that contains your tables. Many setups use `public`. If the same table name appears in multiple schemas, qualify it in your SQL, for example `reporting.orders`.

```sql
SELECT current_database() AS active_database, current_schema() AS active_schema;
```

`current_schema()` shows the first existing schema on your session's search path. Check the object tree or qualify the table name when working in another schema.

## Why can I connect but see no tables?

Check that you opened the intended database and schema, then refresh the tree. If an object is still missing or a query returns `permission denied`, ask your administrator to check schema usage and table privileges for your PostgreSQL role.

For TLS or network errors, see the [general connection guide](/docs/sqlkit/connect-to-database#troubleshoot-a-failed-connection). Once you’re connected, the [SQL editor guide](/docs/sqlkit/query-editor) shows how to run a query.
