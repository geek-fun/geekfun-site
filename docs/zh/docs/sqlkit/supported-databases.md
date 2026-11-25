---
title: SqlKit 支持的数据库与驱动
description: 查看 SqlKit 支持的数据库及其连接方式，了解 MySQL、PostgreSQL、SQL Server、Oracle、SQLite、DuckDB 和 ClickHouse 的驱动要求。
---

# 支持的数据库与驱动

在**连接管理 → 添加新连接**中选择数据库类型，表单会显示需要填写的连接信息。如果服务商提供的主机和端口与默认值不同，请填写服务商给出的值。

## 我的数据库使用哪个驱动？

| 连接方式 | 数据库 | 如何设置 |
| --- | --- | --- |
| 内置 TCP 驱动 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#tcp--> | 填写服务器地址和登录信息。 |
| 内置本地文件驱动 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#local--> | 选择本地文件。SQLCipher 还需要加密密钥。 |
| MySQL 兼容驱动 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#mysql--> | 选择对应的数据库类型，并填写该服务实际使用的 SQL 端口。 |
| PostgreSQL 兼容驱动 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#postgresql--> | 选择对应的数据库类型，并填写要连接的数据库。 |
| JDBC 桥接 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#jdbc--> | [设置 Java 和驱动](/zh/docs/sqlkit/connect-to-database#java-and-jdbc-drivers)，然后按数据库类型填写连接信息。 |
| HTTP 连接 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#http--> | 使用对应服务的地址和端口。ClickHouse 的默认 HTTP 端口为 `8123`。 |

默认端口和故障排查步骤见[连接数据库](/zh/docs/sqlkit/connect-to-database)。

## 连接后可以使用哪些功能？

- 先选择目标数据库和模式。对象树会显示该数据库支持的对象，例如视图或存储过程。
- 能否查看执行计划、编辑行或导出数据，取决于数据库类型和账号权限。查看计划见 [SQL 编辑器](/zh/docs/sqlkit/query-editor)，编辑或导出数据见[表格浏览器](/zh/docs/sqlkit/table-browser)。
- 使用 Cassandra 或 ScyllaDB 时，先选择键空间。表格里显示的是数据预览。要用数据库支持的条件筛选或排序，请在编辑器里写 CQL。

如果连接成功但无法完成某项操作，请检查当前数据库和模式、账号权限以及目标数据库支持的 SQL 方言。网络和驱动问题见[连接故障排查](/zh/docs/sqlkit/connect-to-database#troubleshoot-a-failed-connection)。
