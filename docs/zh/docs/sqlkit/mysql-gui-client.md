---
title: MySQL 及兼容生态 GUI 客户端 | macOS、Windows 与 Linux | SqlKit
description: 使用 SqlKit 原生 Rust 驱动连接 MySQL、MariaDB、TiDB、Doris、StarRocks 等 13 种 MySQL 兼容数据库，支持 SSL/TLS、存储引擎建表与 EXPLAIN FORMAT=JSON。
outline: [2, 3]
---

# MySQL 及兼容生态

<DocsBadge variant="native">原生 Rust 驱动</DocsBadge> <DocsBadge variant="community">社区版</DocsBadge>

SqlKit 通过 `mysql_async` + `rustls` 原生直连 MySQL，无需安装 Java。同一套高速原生适配器同时支持 **13 种 MySQL 协议兼容引擎**，包括 MariaDB、TiDB、OceanBase（MySQL 模式）、PolarDB、TDSQL、Apache Doris、SelectDB、StarRocks、Databend、SingleStore、GoldenDB、Cloud SQL for MySQL 与 Manticore Search。

## 连接 MySQL

<DocsSteps>

### 打开新建连接并选择 MySQL

在**连接管理**点击**添加新连接**（<kbd>⌘</kbd>+<kbd>N</kbd> / <kbd>Ctrl</kbd>+<kbd>N</kbd>），选择 **MySQL**（若连接 MariaDB、TiDB、Doris、StarRocks 等，请直接选择对应引擎配置以自动匹配默认端口与格式化方言）。

### 填写服务器与凭据

| 字段 | 常见取值 | 说明 |
| --- | --- | --- |
| **主机** | `127.0.0.1` 或服务端地址 | 通过 [SSH 隧道](/zh/docs/sqlkit/ssh-tunnel)连接时填写内网地址 |
| **端口** | `3306` | TiDB 默认 `4000`，Doris/StarRocks/SelectDB 默认 `9030`，OceanBase 默认 `2883`，Databend 默认 `3307`，Manticore 默认 `9306` |
| **数据库** | 可选 | 留空即可浏览账号有权访问的全部库，或指定默认打开库 |
| **用户名 / 密码** | MySQL 账号凭据 | 仅保存在本机 |

### 配置 SSL / TLS（如需）

连接 AWS RDS/Aurora、阿里云 RDS、PlanetScale 或 Google Cloud SQL 时，在**高级 → SSL/TLS** 中选择 `require`、`verify-ca` 或 `verify-full`，并按需挂载 CA 证书与 mTLS 客户端证书。

### 测试、保存并验证会话

保存并打开**查询**，检查当前激活库与服务端版本：

```sql
SELECT
  DATABASE() AS active_database,
  VERSION() AS server_version,
  CURRENT_USER() AS active_user;
```

若 `active_database` 返回 `NULL`，在左侧选择目标库或执行 `USE your_database;`。

</DocsSteps>

## MySQL 专属体验

- **扁平数据库对象树**：直接展开数据库 → 表、视图、存储过程与函数，不引入多余 Schema 层级。
- **可视化建库与建表**：
  - **新建数据库**提供 MySQL **字符集（Charset，如 `utf8mb4`）**与**排序规则（Collation）**选项。
  - **可视化建表器**内置**存储引擎**下拉选框（`InnoDB`、`MyISAM`、`MEMORY`、`CSV`、`ARCHIVE`、`BLACKHOLE`）与实时 `CREATE TABLE` DDL 预览。
- **方言补全与格式化**：支持 `mysql` 补全以及独立的 `mysql`、`mariadb`、`tidb` 格式化方言（<kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> / <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd>）。
- **可视化 `EXPLAIN FORMAT=JSON` 与 `EXPLAIN ANALYZE`**：按 <kbd>F6</kbd> 以树状图、汇总表和原始输出三种视图分析 MySQL 执行计划。
- **ER 图与批量传输** <DocsBadge variant="ultimate">旗舰版</DocsBadge>：可视化浏览 `InnoDB` 外键关联，并支持 CSV、JSONL、SQL 与 Excel 的批量导入导出。

## 支持的 MySQL 兼容引擎

新建连接时选择对应配置以获得最准确的默认端口与方言规则：

<!--@include: @/.vitepress/includes/sqlkit-databases.md#mysql-->

## 常见连接问题排查

| 现象 | 检查项 |
| --- | --- |
| **`Access denied for user 'name'@'host'`** | MySQL 权限同时绑定用户名与来源主机。确认账号允许从当前本机 IP（或使用 SSH 隧道时的堡垒机内网 IP）登录。 |
| **连接超时** | 检查 `my.cnf` 的 `bind-address`、防火墙/安全组对 `3306`（或自定义端口）的放行规则，以及 VPN / SSH 隧道配置。 |
| **TLS 握手失败** | 核对服务端 `require_secure_transport` 配置，在**高级 → SSL/TLS** 匹配模式并检查 CA 证书。 |
| **ER 图没有外键连线** | `MyISAM` 表或未声明外键约束的逻辑关联不包含外键元数据；ER 箭头依赖数据库声明的 `FOREIGN KEY`（通常在 `InnoDB` 表上）。 |

## 下一步

<DocsCardGrid :cols="2">
  <DocsCard title="结构浏览与可视化建表" description="可视化设计 InnoDB 表并实时预览 CREATE TABLE DDL。" href="/zh/docs/sqlkit/schema-and-er-diagrams" icon="layers" />
  <DocsCard title="批量导入与导出" description="使用 Upsert、Skip、Replace 或 Dry Run 将 CSV/Excel 导入 MySQL。" href="/zh/docs/sqlkit/import-export" badge="旗舰版" badge-variant="ultimate" icon="upload" />
</DocsCardGrid>
