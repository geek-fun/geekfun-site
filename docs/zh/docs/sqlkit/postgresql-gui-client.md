---
title: PostgreSQL GUI 客户端 | SqlKit 支持 macOS、Windows 和 Linux
description: 使用 SqlKit 连接 PostgreSQL，配置 SSL/TLS，浏览 public 等数据库模式，并通过 SQL 确认当前数据库和模式。
---

# PostgreSQL GUI 客户端

用 SqlKit 的内置驱动连上 Postgres 后，可以在对象树里查看模式、表、视图和索引，再到 SQL 编辑器中运行查询。SqlKit 开源，支持 macOS、Windows 和 Linux。

## 连接 PostgreSQL

1. [安装 SqlKit](/zh/docs/sqlkit/installation)，打开**连接管理 → 添加新连接**。
2. 选择 **PostgreSQL**，填写主机地址、端口（通常为 `5432`）、角色的用户名和密码，以及提供商或管理员给出的数据库名称。
3. 在**高级**选项卡中匹配服务器的 TLS 要求。如需同时验证证书和主机名，请选择 `verify-full` 模式并使用对应的 CA 证书。
4. 测试并保存后，选择**连接**。

## 找到表所在的模式

在**查询**中选择数据库，并展开存放目标表的模式。常见的默认模式为 `public`。如果多个模式中存在同名表，可在 SQL 中写明模式名，例如 `reporting.orders`。

```sql
SELECT current_database() AS active_database, current_schema() AS active_schema;
```

`current_schema()` 返回会话搜索路径上第一个存在的模式。查询其他模式中的表时，可先检查对象树，或使用带模式名的表名。

## 为什么能连接却看不到表？

确认已选择目标数据库和模式，然后刷新对象树。如果对象仍然不可见，或查询返回 `permission denied`，请让管理员检查 PostgreSQL 角色的模式使用权限和表访问权限。

如果遇到 TLS 或网络错误，请看[连接故障排查](/zh/docs/sqlkit/connect-to-database#troubleshoot-a-failed-connection)。连上后，可按 [SQL 编辑器指南](/zh/docs/sqlkit/query-editor)运行查询。
