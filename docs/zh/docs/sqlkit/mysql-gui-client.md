---
title: MySQL GUI 客户端 | SqlKit 支持 macOS、Windows 和 Linux
description: 使用 SqlKit 的内置驱动连接 MySQL，浏览数据库和表结构，检查当前数据库，执行查询并导出结果。
---

# MySQL GUI 客户端

SqlKit 自带 MySQL 驱动。连上服务器后，可以浏览表和索引、查看表结构，并在 SQL 编辑器里运行查询。SqlKit 开源，支持 macOS、Windows 和 Linux。

## 连接 MySQL

1. [安装 SqlKit](/zh/docs/sqlkit/installation)，打开**连接管理 → 添加新连接**。
2. 选择 **MySQL**，填写主机地址、TCP 端口（通常为 `3306`）、用户名和密码。如果希望连接后默认打开某个数据库，请填写数据库名称。
3. 如果服务器要求 TLS，在**高级**选项卡中按照服务提供商的要求配置。测试并保存后，选择**连接**。

## 确认当前 MySQL 数据库

在**查询**中运行以下语句，查看当前数据库和服务端版本。

```sql
SELECT DATABASE() AS active_database, VERSION() AS server_version;
```

如果 `active_database` 返回 `NULL`，请在侧栏选择数据库。双击表可浏览数据，也可选择**查看结构**来检查列和索引。保存语句和导出结果的操作见 [SQL 编辑器指南](/zh/docs/sqlkit/query-editor)。

## MySQL 为什么返回 Access denied？

MySQL 账号会限定可以从哪些主机登录。请让管理员核对 MySQL 看到的来源主机，以及该账号是否有权访问目标数据库。如果连接超时，请检查当前设备能否访问服务器的端口。

连接 MariaDB 时，在[连接表单](/zh/docs/sqlkit/connect-to-database)中选择 **MariaDB**。
