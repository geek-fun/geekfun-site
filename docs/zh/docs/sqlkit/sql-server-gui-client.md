---
title: Microsoft SQL Server GUI 客户端 | SqlKit 跨平台数据库工具
description: 在 macOS、Windows 或 Linux 上使用 SqlKit，通过 SQL Server 登录名和 TCP 端口连接 Microsoft SQL Server，浏览 dbo 等模式并执行 T-SQL。
---

# Microsoft SQL Server GUI 客户端

SqlKit 使用内置驱动通过 TCP 连接 Microsoft SQL Server。连接后，可以浏览 `dbo` 等模式中的对象，也可以运行 Transact-SQL（T-SQL）。SqlKit 开源，支持 macOS、Windows 和 Linux。

## 连接 SQL Server

1. [安装 SqlKit](/zh/docs/sqlkit/installation)，打开**连接管理 → 添加新连接**。
2. 选择 **SQL Server**，填写主机地址、TCP 端口、数据库名称以及 SQL Server 登录账号和密码。
3. 在**高级**选项卡中设置服务器要求的加密选项。测试并保存后，选择**连接**。

默认实例通常监听 `1433`。连接命名实例时，请填写主机名和该实例正在监听的 TCP 端口。如果实例使用动态端口或自定义端口，请向管理员确认。

## 验证 SQL Server 会话

在**查询**中执行以下 T-SQL，确认当前数据库和登录账号。

```sql
SELECT DB_NAME() AS active_database, SUSER_SNAME() AS login_name;
```

在侧栏展开 `dbo` 或应用使用的其他模式，双击表浏览数据，也可以执行 T-SQL 并[导出返回的结果](/zh/docs/sqlkit/query-editor#browse-and-export-data)。

## 如何排查连接失败？

- 连接超时时，确认实例已启用 TCP/IP，且当前设备能够访问实例的端口。
- 登录失败时，确认服务器已启用 SQL Server 身份验证，且账号可以访问目标数据库。
- 遇到 TLS 校验错误时，请与管理员核对服务器名称和证书信任设置。只有在管理员明确要求时，才为该连接启用**信任服务器证书**。
