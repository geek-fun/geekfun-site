---
title: SqlKit Documentation | Desktop SQL Database GUI
description: Learn how to install SqlKit, connect to MySQL, PostgreSQL, SQL Server, Oracle, or SQLite, and run SQL queries on macOS, Windows, and Linux.
---

# SqlKit documentation

SqlKit is an open-source desktop database client for macOS, Windows, and Linux. Connect to a server or open a local database file, inspect the schema, and run SQL with the results alongside the editor.

<div class="docs-section-links">

- [Install SqlKit](/docs/sqlkit/installation)
- [Explore capabilities](/docs/sqlkit/capabilities)
- [Check database support](#which-databases-can-i-open-in-sqlkit)

</div>


<DocsFigure src="/sqlkit-database-list.png" alt="SqlKit database support graphic with database product names and logos" caption="SqlKit connects through built-in drivers, compatible wire protocols, JDBC, and HTTP. Use the table above to look up a particular profile." :width="1280" :height="720" />

## What can I do with SqlKit?

| Task | Where to start |
| --- | --- |
| Save a local or remote connection and test access | [Connections and drivers](/docs/sqlkit/capabilities#connections) |
| Write SQL, save queries, and inspect execution plans | [SQL editor and results](/docs/sqlkit/capabilities#query) |
| Check columns, keys, indexes, and table relationships | [Schema browser and ER diagrams](/docs/sqlkit/capabilities#schema) |
| Edit rows, export a result, or import a file | [Table data and Transfer](/docs/sqlkit/capabilities#data) |
| Set up the in-app assistant or a coding agent | [Agentic Data Studio](/docs/sqlkit/agentic-datastudio) · [MCP setup](/docs/sqlkit/mcp-bridge) · [AI permissions](/docs/sqlkit/ai-permissions) |

## Get started

1. [Install SqlKit](/docs/sqlkit/installation) on your operating system.
2. [Connect to a database](/docs/sqlkit/connect-to-database) using a server address or a local database file.
3. [Run your first query](/docs/sqlkit/query-editor), inspect the result grid, and save the SQL for later.
4. Use the [keyboard shortcuts](/docs/sqlkit/keyboard-shortcuts) to run statements and format SQL.

## Which databases can I open in SqlKit?

Choose a database type under **Connections → Add New Connection**.

| Connection method | Databases |
| --- | --- |
| Built-in TCP driver | <!--@include: @/.vitepress/includes/sqlkit-databases.md#tcp--> |
| Built-in local file driver | <!--@include: @/.vitepress/includes/sqlkit-databases.md#local--> |
| MySQL-compatible driver | <!--@include: @/.vitepress/includes/sqlkit-databases.md#mysql--> |
| PostgreSQL-compatible driver | <!--@include: @/.vitepress/includes/sqlkit-databases.md#postgresql--> |
| JDBC bridge | <!--@include: @/.vitepress/includes/sqlkit-databases.md#jdbc--> |
| HTTP connection | <!--@include: @/.vitepress/includes/sqlkit-databases.md#http--> |

For connection requirements, see [supported databases and drivers](/docs/sqlkit/supported-databases).


## Can I use SqlKit without setting up AI?

Yes. The Community plan includes database connections, the SQL editor, and CSV and JSON result export. See the [capability requirements](/docs/sqlkit/capabilities#requirements) and [plan comparison](/pricing) for details.
