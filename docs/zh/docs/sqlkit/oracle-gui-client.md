---
title: Oracle Database GUI 客户端（基础、TNS 与云钱包） | SqlKit
description: 在 SqlKit 中通过 JDBC（ojdbc11）连接 Oracle Database 与自治数据库（ATP/ADW），支持服务名、SID、tnsnames.ora 自动解析、Cloud Wallet 与 NORMAL/SYSDBA/SYSOPER 角色。
outline: [2, 3]
---

# Oracle Database

<DocsBadge variant="jdbc">JDBC 桥接（ojdbc11）</DocsBadge> <DocsBadge variant="community">社区版</DocsBadge>

SqlKit 通过托管 JDBC 桥接与官方 **`ojdbc11`** 驱动连接 **Oracle Database**（本地部署、Amazon RDS for Oracle 以及 Oracle 云自治数据库 ATP / ADW）。首次点击**测试连接**时，SqlKit 会自动检测系统 JDK 25+ 或下载托管的 **Eclipse Temurin JRE 25**、`jdbc-bridge` 与 `ojdbc11` 驱动。

## 选择 Oracle 连接方式

在**连接管理 → 添加新连接**（<kbd>⌘</kbd>+<kbd>N</kbd> / <kbd>Ctrl</kbd>+<kbd>N</kbd>）中选择 **Oracle**，按 DBA 提供的连接信息选择对应模式：

| 连接模式 | 需填写字段 | 适用场景 |
| --- | --- | --- |
| **基础（`Host:Port`）** | 主机、监听端口（默认 `1521`），以及**标识方式**（**服务名 Service Name** 或 **SID**） | 常规本地部署、Docker 与 Amazon RDS Oracle 实例 |
| **TNS（`tnsnames.ora`）** | 选择包含 `tnsnames.ora` 的**目录**——SqlKit 会自动解析文件并填充 **TNS 别名（TNS Alias）** 下拉框 | 集中维护 TNS 描述符、RAC SCAN 地址或故障转移列表的企业环境 |
| **云钱包（Cloud Wallet · ATP/ADW）** | 已解压的 Oracle **钱包目录**、从钱包 `tnsnames.ora` 自动解析出的 **TNS 别名**，以及钱包密码（如需） | OCI Oracle 自治事务处理（ATP）与自治数据仓库（ADW） |

### Oracle 连接角色（Role）

按账号权限在表单中选择对应角色：
- **`NORMAL`** *（默认）* — 常规应用或开发账号
- **`SYSDBA`** — 完整数据库管理员权限
- **`SYSOPER`** — 启动、关闭、备份与恢复等运维权限

## 验证 Oracle 会话

点击**测试连接**查看 JRE → Bridge → `ojdbc11` 三步准备进度，测试通过后保存并打开**查询**，通过 `dual` 验证当前服务与模式：

```sql
SELECT
  SYS_CONTEXT('USERENV', 'SERVICE_NAME') AS service_name,
  SYS_CONTEXT('USERENV', 'CURRENT_SCHEMA') AS current_schema,
  USER AS active_user
FROM dual;
```

## Oracle 专属体验

- **PL/SQL 编辑器支持**：提供 `plsql` 元数据补全与 `plsql` 方言格式化（<kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> / <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd>）。
- **Schema 与对象浏览**：展开 Oracle 模式查看表、视图、存储过程、函数、索引、外键、触发器以及对象 DDL。
- **数据编辑、ER 图与 AI** <DocsBadge variant="ultimate">旗舰版</DocsBadge>：筛选与编辑行数据、绘制外键 ER 图、批量导入导出 CSV/JSONL/SQL/Excel，或将 Oracle 挂载至 **Agentic Data Studio** 与 **MCP**。

::: tip 管理 Oracle JDBC 组件
随时在**设置 → JRE 与 JDBC 驱动**查看已安装的 `ojdbc11` 版本、检查更新，或在网络恢复后重试下载。
:::

## 常见连接问题排查

| 现象 | 检查项 |
| --- | --- |
| **`ORA-12514` / `ORA-12505`（监听程序无法识别服务名或 SID）** | 核对**标识方式**（**服务名** vs **SID**）并与 DBA 确认准确值（PDB 可插拔库几乎均使用服务名，如 `ORCLPDB1`）。 |
| **TNS 别名下拉列表为空** | 请选择包含 `tnsnames.ora` 的**文件夹**（而非文件本身），并确认文件内包含语法有效的 TNS 条目。 |
| **云钱包连接失败** | 先将下载的钱包压缩包解压到本地目录，再指向解压后的文件夹，选择 `_high` / `_medium` / `_low` 别名并在需要时填写钱包密码。 |
| **`ORA-01017` 用户名/密码无效** | 确认密码大小写是否正确，以及该账号是否需要选择 `SYSDBA` 角色。 |
| **测试阶段 JDBC 下载失败** | 打开**设置 → JRE 与 JDBC 驱动**查看具体失败环节（JRE 25、`jdbc-bridge` 或 `ojdbc11`）并确认出站 HTTPS 网络通畅。 |

## 下一步

<DocsCardGrid :cols="2">
  <DocsCard title="支持的数据库与 JDBC 驱动" description="管理 JRE 25、jdbc-bridge 与全部 27 个 JDBC 驱动。" href="/zh/docs/sqlkit/supported-databases#jdbc-manager" icon="database" />
  <DocsCard title="SQL 编辑器与结果导出" description="保存 .sql 脚本、格式化 PL/SQL 并导出结果集。" href="/zh/docs/sqlkit/query-editor" icon="code" />
</DocsCardGrid>
