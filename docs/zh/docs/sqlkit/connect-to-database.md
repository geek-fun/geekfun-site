---
title: 在 SqlKit 中连接 SQL 数据库 | 默认端口、TLS 与 JDBC
description: 了解如何添加和测试 SqlKit 数据库连接，查询 MySQL、PostgreSQL、SQL Server 和 Oracle 的默认端口，以及本地文件和 JDBC 的设置方式。
---

# 用 SqlKit 连接数据库

连接数据库服务器需要主机地址、端口和登录信息。有的连接还要填数据库名称、Oracle 服务名等信息。连接 SQLite 时，选择本地数据库文件即可。

## 添加并测试连接

1. 打开**连接管理**，选择**添加新连接**。
2. 为连接命名并选择数据库类型。
3. 在**基础**选项卡中填写服务器信息或选择本地数据库文件。在**高级**选项卡中设置 TLS，或[配置 SSH 隧道](/zh/docs/sqlkit/ssh-tunnel)。
4. 测试并保存连接，然后在连接卡片上选择**连接**。打开**查询**即可浏览对象并执行 SQL。

## 选择连接方式 {#choose-a-connection-type}

如果服务器使用自定义端口，请填写实际端口。

| 数据库 | 默认端口或文件 | 连接信息 |
| --- | --- | --- |
| [MySQL](/zh/docs/sqlkit/mysql-gui-client) | `3306` | 主机和账号。可指定默认打开的数据库。 |
| [PostgreSQL](/zh/docs/sqlkit/postgresql-gui-client) | `5432` | 主机、角色凭据和要连接的数据库。 |
| [SQL Server](/zh/docs/sqlkit/sql-server-gui-client) | `1433` | 主机、实例的 TCP 端口和 SQL Server 登录账号。 |
| [Oracle Database](/zh/docs/sqlkit/oracle-gui-client) | 基本连接通常使用 `1521` | 使用 JDBC，根据实际设置选择服务名、SID、TNS 别名或云钱包。 |
| [SQLite](/zh/docs/sqlkit/sqlite-gui-client) | 本地文件 | 选择磁盘上的数据库文件。 |
| MariaDB | `3306` | 数据库类型选择 **MariaDB**。 |
| DuckDB | 本地文件 | 使用 JDBC 桥接。 |
| ClickHouse | HTTP 通常使用 `8123` | 使用服务器的 HTTP 或 HTTPS 地址及实际端口。 |

其他数据库及其连接要求见[支持的数据库与驱动](/zh/docs/sqlkit/supported-databases)。

## Java 和 JDBC 驱动 {#java-and-jdbc-drivers}

Oracle、DuckDB 等数据库需要 Java 运行环境、SqlKit JDBC 桥接组件以及对应驱动。测试连接时，SqlKit 会检查并尝试下载缺少的组件。打开**设置 → JRE 与驱动**查看状态或重试下载。如果网络限制文件下载，请先确认 SqlKit 可以访问下载源。

## 排查连接失败 {#troubleshoot-a-failed-connection}

| 现象 | 检查项 |
| --- | --- |
| 连接被拒绝或超时 | 确认服务器正在监听该主机和端口，并检查是否需要 VPN、SSH 隧道或 IP 白名单。SqlKit 的 SSH 隧道功能需要旗舰版。 |
| 身份验证失败 | 确认账号和密码正确，账号允许从当前主机登录，并且可以访问目标数据库。 |
| TLS 证书错误 | 在**高级**选项卡中匹配服务端的 TLS 要求。需要证书校验时，使用受信任的 CA 证书和证书上的主机名。 |
| 已连接但看不到表 | 在**查询**中选择目标数据库和模式，刷新对象树，并确认账号有权查看这些对象。 |

连上后，[运行一条只读查询](/zh/docs/sqlkit/query-editor#run-your-first-query)，确认连接可用。
