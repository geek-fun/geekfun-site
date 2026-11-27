---
title: 支持的数据库与 JDBC 驱动（68+ 引擎） | SqlKit
description: SqlKit 支持的 68 种数据库引擎及能力矩阵，涵盖原生 Rust 驱动、PostgreSQL/MySQL 兼容协议、HTTP SQL 与按需下载的 JDBC 桥接。
outline: [2, 3]
---

# 支持的数据库与 JDBC 驱动

SqlKit 在**连接管理 → 添加新连接**中提供 68 种数据库配置。选择对应配置后，表单会自动匹配默认端口、连接字段、SQL 方言与驱动运行时，并按该引擎实际支持的能力显示对应界面操作。

<DocsFigure src="/sqlkit-database-list.png" alt="SqlKit 支持的 68 种数据库引擎总览，涵盖原生 Rust、兼容协议、HTTP SQL 与 JDBC 桥接" caption="SqlKit 支持的 68 种数据库配置总览：内置原生驱动、兼容协议、HTTP SQL 与按需 JDBC 桥接。" :width="1280" :height="720" />

::: info 连接支持与功能差异
“能建立连接”不等于所有 68 种引擎拥有一致的元数据视图或 SQL 语法。SqlKit 按引擎能力标记只启用可靠的对象树节点、执行计划和编辑入口。
:::

## 1. 核心原生 Rust 驱动（6 种）

直接编译进 SqlKit 主程序，不需要 Java 或外部驱动。

| 数据库 | 底层驱动 | 默认端口 | SSL/TLS | 说明 |
| --- | --- | --- | --- | --- |
| <DocsDb id="postgresql" label="PostgreSQL" href="/zh/docs/sqlkit/postgresql-gui-client" /> | `tokio-postgres` + `rustls` | `5432` | 完整 5 档（`disable` 到 `verify-full`） | 模式树、视图/过程/函数/触发器、`EXPLAIN (FORMAT JSON)` 与 `ANALYZE` |
| <DocsDb id="mysql" label="MySQL" href="/zh/docs/sqlkit/mysql-gui-client" /> | `mysql_async` + `rustls` | `3306` | 完整 5 档（`disable` 到 `verify-full`） | 视图/过程/函数/触发器、存储引擎、`EXPLAIN FORMAT=JSON` 与 `ANALYZE` |
| <DocsDb id="sqlserver" label="SQL Server" href="/zh/docs/sqlkit/sql-server-gui-client" /> | `tiberius`（TDS 7.3） | `1433` | TLS + `Trust Server Certificate` | 模式（`dbo`）、T-SQL `SHOWPLAN_TEXT` 与 `STATISTICS PROFILE` |
| <DocsDb id="sqlite" label="SQLite" href="/zh/docs/sqlkit/sqlite-gui-client" /> | `rusqlite`（内置） | 本地文件 / `:memory:` | 不适用 | 打开已有文件、新建文件或 `:memory:` 内存库 |
| <DocsDb id="sqlcipher" label="SQLCipher" href="/zh/docs/sqlkit/sqlite-gui-client#sqlcipher" /> | `rusqlite`（`sqlcipher`） | 本地文件 | 不适用 | 通过 `PRAGMA key` 打开加密 SQLite 文件 |
| <DocsDb id="clickhouse" label="ClickHouse" /> | 原生 Rust HTTP | `8123` | HTTPS / TLS | 支持物化视图；无模式、存储过程和函数节点 |

## 2. PostgreSQL 协议兼容引擎（18 种）

复用原生 Rust PostgreSQL 驱动，内置各引擎默认端口与默认库名，支持完整 SSL/TLS。

| 数据库 | 默认端口 | 默认库 / 说明 |
| --- | --- | --- |
| <DocsDb id="alloydb" label="AlloyDB for PostgreSQL" /> | `5432` | Google Cloud 托管 PG 兼容引擎 |
| <DocsDb id="redshift" label="Amazon Redshift" /> | `5439` | 需指定数据库名称 |
| <DocsDb id="cloudsqlpg" label="Cloud SQL for PostgreSQL" /> | `5432` | Google Cloud 托管 PostgreSQL |
| <DocsDb id="cockroachdb" label="CockroachDB" /> | `5432` | 默认库 `defaultdb` |
| <DocsDb id="cratedb" label="CrateDB" /> | `5432` | 默认库 `crate` |
| <DocsDb id="enterprisedb" label="EnterpriseDB (EDB)" /> | `5432` | 需指定数据库名称 |
| <DocsDb id="fujitsupg" label="Fujitsu Enterprise Postgres" /> | `5432` | 企业级 PostgreSQL 发行版 |
| <DocsDb id="gaussdb" label="GaussDB" /> | `5432` | 华为分布式 PG 兼容数据库 |
| <DocsDb id="gbase" label="GBase 8c" /> | `5432` | 南大通用分布式 PG 兼容库 |
| <DocsDb id="greenplum" label="Greenplum" /> | `5432` | MPP 分析型数据仓库 |
| <DocsDb id="highgo" label="HighGo DB（瀚高）" /> | `5432` | 默认库 `highgo` |
| <DocsDb id="materialize" label="Materialize" /> | `5432` | 默认库 `materialize` |
| <DocsDb id="opengauss" label="openGauss" /> | `5432` | 开源企业级关系数据库 |
| <DocsDb id="questdb" label="QuestDB" /> | `8812` | 默认库 `qdb` |
| <DocsDb id="timescaledb" label="TimescaleDB" /> | `5432` | 需指定数据库名称 |
| <DocsDb id="uxdb" label="UXDB（优炫）" /> | `5432` | 默认库 `uxdb` |
| <DocsDb id="vastbase" label="Vastbase（海量）" /> | `5432` | 默认库 `vastbase` |
| <DocsDb id="yugabytedb" label="YugabyteDB" /> | `5433` | 默认库 `yugabyte` |

## 3. MySQL 协议兼容引擎（13 种）

复用原生 Rust MySQL 驱动，内置各引擎默认端口，支持完整 SSL/TLS。

| 数据库 | 默认端口 | 说明 |
| --- | --- | --- |
| <DocsDb id="doris" label="Apache Doris" /> | `9030` | 实时 OLAP 引擎（MySQL 协议查询端口） |
| <DocsDb id="cloudsqlmysql" label="Cloud SQL for MySQL" /> | `3306` | Google Cloud 托管 MySQL |
| <DocsDb id="databend" label="Databend" /> | `3307` | 云原生数仓（MySQL 协议端口） |
| <DocsDb id="goldendb" label="GoldenDB" /> | `3306` | 分布式事务数据库 |
| <DocsDb id="manticore" label="Manticore Search" /> | `9306` | 通过 MySQL 协议查询的全文检索引擎 |
| <DocsDb id="mariadb" label="MariaDB" /> | `3306` | 独立配置与专属 `mariadb` 格式化方言 |
| <DocsDb id="oceanbase" label="OceanBase（MySQL 模式）" /> | `2883` | ODP 代理默认端口 |
| <DocsDb id="polardb" label="PolarDB" /> | `3306` | 云原生 MySQL 兼容数据库 |
| <DocsDb id="selectdb" label="SelectDB" /> | `9030` | 云原生 Doris 发行版 |
| <DocsDb id="singlestore" label="SingleStore（MemSQL）" /> | `3306` | 分布式 HTAP 引擎 |
| <DocsDb id="starrocks" label="StarRocks" /> | `9030` | 实时 OLAP 引擎 |
| <DocsDb id="tdsql" label="TDSQL" /> | `3306` | 分布式 MySQL 兼容数据库 |
| <DocsDb id="tidb" label="TiDB" /> | `4000` | 分布式 NewSQL 数据库 |

## 4. 原生 HTTP SQL 引擎（4 种）

直接通过原生 Rust HTTP/HTTPS 通信，不需要 Java 或 JDBC：

| 数据库 | 默认端口 | 说明 |
| --- | --- | --- |
| <DocsDb id="presto" label="Presto" /> | `8080` | 分布式 SQL 查询引擎 |
| <DocsDb id="rqlite" label="rqlite" /> | `4001` | 基于 Raft 的分布式 SQLite |
| <DocsDb id="trino" label="Trino" /> | `8080` | 分布式 SQL 查询引擎 |
| <DocsDb id="turso" label="Turso (libSQL)" /> | `443` | 边缘 SQLite（HTTPS + Token） |

*（ClickHouse 同样采用原生 Rust HTTP 适配器，默认端口 `8123`。）*

## 5. JDBC 桥接引擎（27 种）

通过 SqlKit 内置共享 Java 子进程（`jdbc-bridge` + HikariCP 连接池）连接，首次测试连接或在**设置 → JRE 与 JDBC 驱动**中自动拉取驱动：

| 数据库 | 默认端口 / 目标 | 驱动包 | 特别说明 |
| --- | --- | --- | --- |
| <DocsDb id="oracle" label="Oracle Database" href="/zh/docs/sqlkit/oracle-gui-client" /> | `1521` | `ojdbc11` | 基础（SID/服务名）、TNS（`tnsnames.ora`）、云钱包、`NORMAL`/`SYSDBA`/`SYSOPER` |
| <DocsDb id="duckdb" label="DuckDB" href="/zh/docs/sqlkit/sqlite-gui-client#duckdb" /> | 本地文件 / `memory:<label>` | `duckdb_jdbc` | 无 SSL；支持读写 / 只读模式及同文件冲突检测 |
| <DocsDb id="cassandra" label="Apache Cassandra (3.0+)" /> | `9042` | `cassandra-jdbc-wrapper` | CQL 宽列模式（见下方 [CQL 说明](#cql-engines)） |
| <DocsDb id="scylladb" label="ScyllaDB" /> | `9042` | `cassandra-jdbc-wrapper` | CQL 宽列模式，与 Cassandra 共用预打包驱动 |
| <DocsDb id="snowflake" label="Snowflake" /> | `443` | `snowflake-jdbc` | 云数据仓库 |
| <DocsDb id="bigquery" label="Google BigQuery" /> | `443` | `googlebigquery-jdbc` | 无服务器数据仓库 |
| <DocsDb id="databricks" label="Databricks SQL" /> | `443` | `databricks-jdbc` | 湖仓 SQL 仓库 |
| <DocsDb id="hive" label="Apache Hive" /> | `10000` | `hive-jdbc`（standalone） | HiveServer2 |
| <DocsDb id="kylin" label="Apache Kylin" /> | `7070` | `kylin-jdbc` | OLAP 分析引擎 |
| <DocsDb id="db2" label="IBM Db2" /> | `50000` | `jcc` | 企业级关系数据库 |
| <DocsDb id="informix" label="IBM Informix" /> | `9088` | `jcc` | 企业级关系数据库 |
| <DocsDb id="hana" label="SAP HANA" /> | `30015` | `ngdbc` | 内存数据库 |
| <DocsDb id="teradata" label="Teradata" /> | `1025` | `terajdbc` | 企业级数据仓库 |
| <DocsDb id="vertica" label="Vertica" /> | `5433` | `vertica-jdbc` | 列式分析数据库 |
| <DocsDb id="exasol" label="Exasol" /> | `8563` | `exasol-jdbc` | 内存分析数据库 |
| <DocsDb id="firebird" label="Firebird" /> | `3050` | `jaybird` | 开源关系数据库 |
| <DocsDb id="h2" label="H2" /> | `9092` | `h2` | Java SQL 引擎 |
| <DocsDb id="derby" label="Apache Derby" /> | `1527` | `derbyclient` | 网络版 Derby 服务 |
| <DocsDb id="iris" label="InterSystems IRIS" /> | `1972` | `jdbc` | 企业级多模数据库 |
| <DocsDb id="access" label="Microsoft Access" /> | 本地 `.accdb`/`.mdb` | `ucanaccess` | 本地文件，无 SSL |
| <DocsDb id="dm8" label="达梦 Dameng (DM8)" /> | `5236` | `DmJdbcDriver8` | 国产关系数据库 |
| <DocsDb id="kingbasees" label="人大金仓 KingbaseES" /> | `54321` | `kingbase8` | 国产关系数据库 |
| <DocsDb id="oceanbase" label="OceanBase（Oracle 模式）" /> | `2881` | `oceanbase-client` | Oracle 兼容租户 |
| <DocsDb id="gbase" label="南大通用 GBase 8a" /> | `5258` | 预打包驱动 | 分布式分析集群 |
| <DocsDb id="xugudb" label="虚谷 XuguDB" /> | `5138` | `xugu-jdbc` | 分布式关系数据库 |
| <DocsDb id="yashandb" label="崖山 YashanDB" /> | `1688` | `yashandb-jdbc` | 企业级关系数据库 |
| <DocsDb id="tdengine" label="TDengine" /> | `6030` | `taos-jdbcdriver` | 时序数据库 |

## 管理 JRE 25 与 JDBC 驱动 {#jdbc-manager}

前往**设置 → JRE 与 JDBC 驱动**管理全部 Java 组件：

- Java 运行时（JRE 25）：检测系统已安装的 JDK 25+，或从 Adoptium 下载托管的 Eclipse Temurin JRE 25 至 `~/.sqlkit/jre`，支持检查更新与卸载。
- JDBC Bridge JAR：存放于 `~/.sqlkit/jdbc-bridge/jdbc-bridge-<version>.jar`，从 GitHub Releases 拉取，升级后自动重启桥接进程。
- 各引擎驱动：列出全部 27 个 JDBC 驱动的安装状态、版本号与文件大小，支持单个下载、检查更新和删除。

::: info 关于自定义本地 JAR
SqlKit 通过内置注册表拉取官方驱动包（Maven Central 与预打包发行源），界面暂不支持上传自定义本地 JAR 文件。
:::

## 特殊引擎说明与能力矩阵 {#engine-notes}

### Cassandra 与 ScyllaDB（CQL） {#cql-engines}

CQL 在数据模型和网络协议上与关系型 SQL 不同：

- Keyspace 映射为模式，元数据直接查询 `system_schema`；CQL 没有外键和视图，相关节点自动隐藏。
- 连接字段包含**本地数据中心**（默认 `datacenter1`）与 **Keyspace**（默认 `system`）。
- CQL 没有先试 TLS 再回退明文的握手过程，`prefer` 会直接以明文连接；开启 TLS 的集群请选择 `require`、`verify-ca` 或 `verify-full`。
- 语句拆分器支持 CQL 的 `BEGIN ... APPLY BATCH`、`//` 注释与 `$$` 美元引号。数据表标签页提供只读预览，不支持网格侧过滤、排序与分页，过滤和排序请在编辑器中编写 CQL 执行。

### 引擎能力矩阵

| 能力 | PostgreSQL / MySQL / SQL Server | SQLite / SQLCipher | ClickHouse | Oracle / 标准 JDBC | Cassandra / ScyllaDB (CQL) |
| --- | :---: | :---: | :---: | :---: | :---: |
| 对象树与表数据预览 | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> |
| Schema（模式）层级 | PG / MSSQL：支持 · MySQL：无 | <DocsCheck value="no" /> | <DocsCheck value="no" /> | <DocsCheck value="yes" /> | Keyspace |
| 视图 / 存储过程 / 函数 | <DocsCheck value="yes" /> | 仅视图 | 物化视图 | 视引擎而定 | <DocsCheck value="no" /> |
| 可视化 `EXPLAIN` 执行计划 | <DocsCheck value="yes" label="JSON / Showplan" /> | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> | 视引擎而定 | <DocsCheck value="no" /> |
| 网格筛选、排序与分页 | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> | 请在 CQL 编辑器执行 |
| 交互式 ER 图（旗舰版） | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> | <DocsCheck value="no" /> | 视引擎而定 | <DocsCheck value="no" /> |
| Agentic Data Studio（41+ 引擎） | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> | <DocsCheck value="no" /> | Oracle、DuckDB、DM8 | <DocsCheck value="no" /> |

## 下一步

<DocsCardGrid :cols="3">
  <DocsCard title="PostgreSQL 指南" description="Schema、SSL verify-full、EXPLAIN JSON 与 PG 兼容数据库。" href="/zh/docs/sqlkit/postgresql-gui-client" icon="database" />
  <DocsCard title="MySQL 指南" description="存储引擎、字符集、EXPLAIN ANALYZE 与 MariaDB/TiDB。" href="/zh/docs/sqlkit/mysql-gui-client" icon="database" />
  <DocsCard title="Oracle 指南" description="基础 SID/服务名、TNS 自动解析、云钱包与 SYSDBA。" href="/zh/docs/sqlkit/oracle-gui-client" icon="database" />
</DocsCardGrid>
