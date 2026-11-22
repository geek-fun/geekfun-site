---
title: SqlKit 文档 | 桌面 SQL 数据库 GUI 客户端
description: 在 macOS、Windows 或 Linux 上安装 SqlKit，连接 MySQL、PostgreSQL、SQL Server、Oracle 或 SQLite，并运行和保存 SQL 查询。
---

# SqlKit 文档

SqlKit 是一款开源桌面 SQL 客户端，支持 macOS、Windows 和 Linux。它可以保存 MySQL、PostgreSQL、SQL Server、Oracle Database、SQLite 等数据库的连接。连上数据库后，就能查看表等对象、编写 SQL 和导出查询结果。

## 快速开始

1. [安装 SqlKit](/zh/docs/sqlkit/installation)。
2. 使用服务器地址或本地文件[连接数据库](/zh/docs/sqlkit/connect-to-database)。
3. [运行第一条 SQL 查询](/zh/docs/sqlkit/query-editor)，查看结果并保存 SQL。
4. 用[快捷键](/zh/docs/sqlkit/keyboard-shortcuts)执行语句或格式化 SQL。

## SqlKit 支持哪些数据库？

| 数据库 | 连接类型 | 使用指南 |
| --- | --- | --- |
| MySQL | 内置驱动，使用 TCP 连接 | [MySQL GUI 客户端](/zh/docs/sqlkit/mysql-gui-client) |
| PostgreSQL（Postgres） | 内置驱动，使用 TCP 连接 | [PostgreSQL GUI 客户端](/zh/docs/sqlkit/postgresql-gui-client) |
| Microsoft SQL Server | 内置驱动，使用 TCP 连接 | [SQL Server GUI 客户端](/zh/docs/sqlkit/sql-server-gui-client) |
| Oracle Database | JDBC 桥接 | [Oracle Database GUI 客户端](/zh/docs/sqlkit/oracle-gui-client) |
| SQLite | 本地数据库文件 | [SQLite GUI 与数据库浏览器](/zh/docs/sqlkit/sqlite-gui-client) |

有关 MariaDB、DuckDB、ClickHouse、CockroachDB、Snowflake 和 BigQuery 等数据库的连接方式，请参阅[支持的数据库与驱动](/zh/docs/sqlkit/supported-databases)。

## 常用操作

- 通过堡垒机访问数据库时，可[配置 SSH 隧道](/zh/docs/sqlkit/ssh-tunnel)。
- 在表格中[浏览与编辑表数据](/zh/docs/sqlkit/table-browser)，并查看键和索引。
- 在传输工作区[导入与导出文件](/zh/docs/sqlkit/import-export)，或直接导出查询返回的行。

## 可以不配置 AI 直接使用 SqlKit 吗？

可以。社区版包含 SQL 编辑器、数据库连接和 CSV、JSON 结果导出。需要 AI 辅助时，可以使用 [Agentic Data Studio](/zh/products/sqlkit/agentic-sql-client)。各版本功能见[定价页](/zh/pricing)。
