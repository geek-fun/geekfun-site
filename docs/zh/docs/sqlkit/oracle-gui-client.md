---
title: Oracle Database GUI 客户端 | SqlKit 支持 JDBC、TNS 和云钱包
description: 借助 SqlKit 使用服务名、SID、TNS 别名或云钱包连接 Oracle Database，安装 Oracle JDBC 驱动并验证 SQL 会话。
---

# Oracle Database GUI 客户端

SqlKit 通过 JDBC 桥接组件调用 Oracle JDBC 驱动。连接时可以填写服务名或 SID，也可以选择 TNS 别名，或使用 Oracle 自治数据库的云钱包。SqlKit 开源，支持 macOS、Windows 和 Linux。

## 选择 Oracle 连接方式

打开**连接管理 → 添加新连接**，选择 **Oracle**，再根据管理员提供的信息选择连接方式。

| 连接方式 | 填写内容 |
| --- | --- |
| **基本（主机和端口）** | 主机地址、Oracle 监听端口（通常为 `1521`），以及数据库的**服务名**或 **SID**。 |
| **TNS（tnsnames.ora）** | 包含 `tnsnames.ora` 的目录和目标数据库的 **TNS 别名**。 |
| **云钱包（ATP/ADW）** | 解压后的钱包目录和数据库服务别名。如有要求，请填写钱包密码。 |

填写 Oracle 数据库的用户名和密码，然后测试连接。SqlKit 会检查 Java 运行环境、桥接组件和 Oracle 驱动。如果下载失败，可在[设置 → JRE 与驱动](/zh/docs/sqlkit/connect-to-database#java-and-jdbc-drivers)检查状态。测试通过后保存并连接。

## 确认 Oracle 服务和模式

```sql
SELECT SYS_CONTEXT('USERENV', 'SERVICE_NAME') AS service_name,
       SYS_CONTEXT('USERENV', 'CURRENT_SCHEMA') AS current_schema
FROM dual;
```

在**查询**中执行上述 SQL，然后在对象树中展开对应模式，浏览表和视图。保存 SQL 和导出结果的操作见 [SQL 编辑器指南](/zh/docs/sqlkit/query-editor)。

## Oracle 监听程序为什么拒绝连接？

如果监听程序提示无法识别服务或 SID，请检查**标识方式**，并与管理员核对填写的值。如果没有可选的 TNS 别名，请确认所选目录包含 `tnsnames.ora`。使用云钱包时，应先选择解压后的钱包目录，再选择服务别名。
