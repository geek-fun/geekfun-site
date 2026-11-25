---
title: SqlKit Supported Databases and Drivers
description: Find out which databases SqlKit connects to and which require JDBC. Covers MySQL, PostgreSQL, SQL Server, Oracle, SQLite, DuckDB, ClickHouse, and more.
---

# Supported databases and drivers

In **Connections → Add New Connection**, choose your database type to see its connection fields. If your database provider gives you a different host or port from the form’s defaults, use the provider’s values.

## Which driver does my database use?

| Connection method | Databases | Setup |
| --- | --- | --- |
| Built-in TCP driver | <!--@include: @/.vitepress/includes/sqlkit-databases.md#tcp--> | Enter the server address and credentials. |
| Built-in local file driver | <!--@include: @/.vitepress/includes/sqlkit-databases.md#local--> | Choose a local file. SQLCipher also requires the encryption key. |
| MySQL-compatible driver | <!--@include: @/.vitepress/includes/sqlkit-databases.md#mysql--> | Select your engine's profile and use its configured SQL port. |
| PostgreSQL-compatible driver | <!--@include: @/.vitepress/includes/sqlkit-databases.md#postgresql--> | Select your engine's profile and enter the target database. |
| JDBC bridge | <!--@include: @/.vitepress/includes/sqlkit-databases.md#jdbc--> | [Set up Java and the driver](/docs/sqlkit/connect-to-database#java-and-jdbc-drivers). Connection fields depend on the engine. |
| HTTP connection | <!--@include: @/.vitepress/includes/sqlkit-databases.md#http--> | Use the endpoint and port for that profile. For ClickHouse, `8123` is the default HTTP port. |

See [Connect SqlKit to a database](/docs/sqlkit/connect-to-database) for default ports and connection troubleshooting.

## Which tools are available after connecting?

- Select the database and schema if your engine uses them. The object tree shows objects the engine provides, such as views and procedures.
- Whether you can view plans, edit rows, or export data depends on the engine and your account permissions. See the [SQL editor](/docs/sqlkit/query-editor) for query plans and the [table browser](/docs/sqlkit/table-browser) for editing or exporting rows.
- For Cassandra or ScyllaDB, select a keyspace. The table view shows a preview. Write a CQL statement in the editor to filter or sort using the database’s own rules.

If a connection opens but a workflow fails, check the active database and schema, the permissions of your database account, and the SQL dialect your engine accepts. See [connection troubleshooting](/docs/sqlkit/connect-to-database#troubleshoot-a-failed-connection) for network and driver errors.
