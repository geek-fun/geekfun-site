---
title: SqlKit Documentation | Desktop SQL Database GUI
description: Learn how to install SqlKit, connect to MySQL, PostgreSQL, SQL Server, Oracle, or SQLite, and run SQL queries on macOS, Windows, and Linux.
---

# SqlKit documentation

SqlKit is an open-source desktop SQL database GUI for macOS, Windows, and Linux. Save connections to MySQL, PostgreSQL, SQL Server, Oracle Database, SQLite, and other databases. From a saved connection, you can browse tables and other objects, write SQL, and export query results.

## Get started

1. [Install SqlKit](/docs/sqlkit/installation) on your operating system.
2. [Connect to a database](/docs/sqlkit/connect-to-database) using a server address or a local database file.
3. [Run your first query](/docs/sqlkit/query-editor), inspect the result grid, and save the SQL for later.
4. Use the [keyboard shortcuts](/docs/sqlkit/keyboard-shortcuts) to run statements and format SQL.

## Which databases can I open in SqlKit?

| Database | Connection type | Guide |
| --- | --- | --- |
| MySQL | Native connection over TCP | [MySQL GUI client](/docs/sqlkit/mysql-gui-client) |
| PostgreSQL (Postgres) | Native connection over TCP | [PostgreSQL GUI client](/docs/sqlkit/postgresql-gui-client) |
| Microsoft SQL Server | Native connection over TCP | [SQL Server GUI client](/docs/sqlkit/sql-server-gui-client) |
| Oracle Database | JDBC bridge | [Oracle Database GUI client](/docs/sqlkit/oracle-gui-client) |
| SQLite | Local database file | [SQLite GUI and database browser](/docs/sqlkit/sqlite-gui-client) |

See [supported databases and drivers](/docs/sqlkit/supported-databases) for MariaDB, DuckDB, ClickHouse, CockroachDB, Snowflake, BigQuery, and other connection types.

## Work with your data

- [Connect through an SSH tunnel](/docs/sqlkit/ssh-tunnel) when your database is reachable through a bastion.
- [Browse and edit table data](/docs/sqlkit/table-browser) with the table grid and inspect keys and indexes.
- [Import and export files](/docs/sqlkit/import-export) with the Transfer workspace, or export the rows returned by a query.

## Can I use SqlKit without setting up AI?

Yes. The Community plan includes the core SQL editor, database connections, and CSV and JSON result export. For help writing SQL, use [Agentic Data Studio](/products/sqlkit/agentic-sql-client). See the [plan comparison](/pricing) for details.
