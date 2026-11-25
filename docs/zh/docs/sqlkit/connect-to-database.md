---
title: 连接数据库、SSL/TLS 加密与自动恢复 | SqlKit
description: 在 SqlKit 中配置 TCP、本地文件、HTTP 与 JDBC 数据库连接，掌握 5 档 SSL/TLS 模式、自定义证书、超时配置、Connection Guardian 自动恢复与连接排错。
outline: [2, 3]
---

# 连接数据库、TLS 与重连

SqlKit 将所有连接配置与凭据保存在本机，并直接从你的桌面端（或经由 [SSH 隧道](/zh/docs/sqlkit/ssh-tunnel)）连接目标数据库，不经过任何云端中转服务。

## 添加并测试连接 {#add-and-test-a-connection}

<DocsSteps>

### 打开新建连接弹窗

在**连接管理**页面点击右下角 **`+`** 按钮（或按 macOS 的 <kbd>⌘</kbd>+<kbd>N</kbd> / Windows 与 Linux 的 <kbd>Ctrl</kbd>+<kbd>N</kbd>）。

<DocsFigure src="/sqlkit-connect-to-database.png" alt="SqlKit 新建连接弹窗，包含基础与高级两个选项卡" caption="连接弹窗将服务器基础信息（基础）与 TLS、SSH 隧道、AI 策略（高级）清晰分层。" :width="3264" :height="2222" />

### 填写“基础”选项卡

1. 填写**连接名称**，用于区分开发、测试、预发或生产环境。
2. 在可搜索下拉框中选择**数据库类型**（前 7 个常用引擎固定置顶，支持按名称检索全部 68 种引擎）。
3. 填写**主机**、**端口**（已自动填入该引擎默认端口）、**数据库 / Keyspace**、**用户名**与**密码**；若为 SQLite、SQLCipher、DuckDB 或 Microsoft Access，则选择本地文件路径。
4. 如跨地域或高延迟网络，可按需调整**连接超时**（默认 `10s`）与**查询超时**（默认 `30s`）。

### 配置“高级”选项卡（可选）

- **SSL/TLS**：选择加密模式并挂载自定义 CA 证书或客户端证书。
- **SSH 隧道** <DocsBadge variant="ultimate">旗舰版</DocsBadge>：挂载一个或多个可复用的 SSH 配置，组建单跳或多跳堡垒机通道。
- **AI 权限与上下文提示词** <DocsBadge variant="ultimate">旗舰版</DocsBadge>：为该连接单独设定 AI 访问策略，并可填写专属业务上下文说明。

### 测试、保存并连接

点击**测试连接**验证网络连通性、身份认证、TLS 证书以及（针对 JDBC 引擎的）JRE 与驱动就绪状态。测试通过后点击**创建连接**，双击连接卡片即可进入**查询**工作区。

</DocsSteps>

### 管理已保存连接

- 在连接页工具栏一键切换**网格视图**或**列表视图**。
- 使用搜索框按名称、主机地址或数据库类型即时过滤。
- 卡片实时展示连接状态与当前活跃连接数。

## 常见连接方式与默认端口 {#choose-a-connection-type}

若服务器或云厂商使用了非标准端口，请填写实际监听端口。

| 数据库 | 驱动层 | 默认端口 / 目标 | 关键填写项 |
| --- | --- | --- | --- |
| [PostgreSQL](/zh/docs/sqlkit/postgresql-gui-client) | <DocsBadge variant="native">原生 Rust</DocsBadge> | `5432` | 主机、端口、数据库名、角色与密码 |
| [MySQL](/zh/docs/sqlkit/mysql-gui-client) | <DocsBadge variant="native">原生 Rust</DocsBadge> | `3306` | 主机、端口、账号密码、可选默认库 |
| [SQL Server](/zh/docs/sqlkit/sql-server-gui-client) | <DocsBadge variant="native">原生 Rust</DocsBadge> | `1433` | 主机、实例 TCP 端口、SQL 登录名、`Trust Server Certificate` |
| [Oracle Database](/zh/docs/sqlkit/oracle-gui-client) | <DocsBadge variant="jdbc">JDBC</DocsBadge> | `1521` | 基础（SID / 服务名）、TNS（`tnsnames.ora`）或云钱包 + 角色（`NORMAL` / `SYSDBA` / `SYSOPER`） |
| [SQLite / SQLCipher](/zh/docs/sqlkit/sqlite-gui-client) | <DocsBadge variant="native">原生 Rust</DocsBadge> | 本地文件 / `:memory:` | 文件路径（打开现有或新建）；SQLCipher 需填写加密密钥 |
| [DuckDB](/zh/docs/sqlkit/sqlite-gui-client#duckdb) | <DocsBadge variant="jdbc">JDBC</DocsBadge> | 本地文件 / `memory:<label>` | 文件路径 + **读写（Read-Write）**或**只读（Read-Only）**访问模式 |
| MariaDB / TiDB / Doris / StarRocks | <DocsBadge variant="native">MySQL 兼容</DocsBadge> | `3306` / `4000` / `9030` | 选择对应引擎配置以匹配方言与默认端口 |
| CockroachDB / Redshift / TimescaleDB | <DocsBadge variant="native">PG 兼容</DocsBadge> | `5432` / `5439` | 选择对应引擎配置与目标数据库 |
| ClickHouse / Trino / Presto / Turso | <DocsBadge variant="http">HTTP SQL</DocsBadge> | `8123` / `8080` / `443` | HTTP/HTTPS 主机、端口与凭据或令牌 |
| Cassandra / ScyllaDB | <DocsBadge variant="jdbc">JDBC (CQL)</DocsBadge> | `9042` | 主机、端口、**本地数据中心**（默认 `datacenter1`）、**Keyspace** |

全部 68 种引擎请查阅[支持的数据库与 JDBC 驱动](/zh/docs/sqlkit/supported-databases)。

## SSL / TLS 加密模式

在**高级 → SSL/TLS** 中，SqlKit 为所有网络型数据库提供 5 档标准 SSL 模式（SQLite、SQLCipher、DuckDB、Microsoft Access 等本地文件引擎会自动隐藏该区块）：

| SSL 模式 | 加密传输 | 校验证书链（CA） | 校验主机名 | 适用场景 |
| --- | :---: | :---: | :---: | --- |
| **`disable`** | 否 | 否 | 否 | 本地开发环境或受控回环网络 |
| **`prefer`** *（默认）* | 优先 TLS，失败则回退明文 | 否 | 否 | 通用兼容（CQL 例外，见下方说明） |
| **`require`** | 是 | 否 | 否 | 强制加密传输，不严格校验 CA |
| **`verify-ca`** | 是 | 是（需提供 CA 证书） | 否 | 自签/企业 CA，或经 SSH 隧道连接导致主机名与证书不一致时 |
| **`verify-full`** | 是 | 是（需提供 CA 证书） | 是 | 生产云数据库（AWS RDS、阿里云 RDS、Cloud SQL、Neon、Supabase 等） |

### 自定义证书与特殊引擎说明

- **证书挂载**：支持指定本地 **CA 证书**、**客户端证书**与**客户端私钥**路径（用于双向认证 mTLS）。选择 `verify-ca` 或 `verify-full` 时必须提供 CA 证书。
- **SQL Server**：提供独立的 **Trust Server Certificate** 开关，用于信任内网自签名证书。
- **Cassandra 与 ScyllaDB（CQL）**：CQL 原生协议不支持“先试 TLS 再降级明文”。因此选择 `prefer` 时会自动以明文连接以避免超时；若集群已开启 TLS，请明确选择 `require`、`verify-ca` 或 `verify-full`。

## Java 运行时与 JDBC 驱动 {#java-and-jdbc-drivers}

Oracle、DuckDB、Snowflake、BigQuery、Databricks、DB2、SAP HANA、Firebird、Cassandra、ScyllaDB、达梦 DM8 等 27 种 JDBC 引擎共用 SqlKit 的本地 Java 子进程（`jdbc-bridge`，内置 HikariCP 连接池）。

点击 JDBC 连接的**测试连接**时，界面会展示实时**三步准备进度**：

1. **JRE 25 运行时**：优先检测本机 JDK 25+，如未安装则自动从 Adoptium 下载独立的 **Eclipse Temurin JRE 25** 至 `~/.sqlkit/jre`。
2. **JDBC 桥接包**：从 GitHub Releases 下载 `jdbc-bridge-<version>.jar` 至 `~/.sqlkit/jdbc-bridge/`。
3. **数据库驱动**：从 Maven Central 或预打包发行地址拉取对应引擎驱动。

随时打开**设置 → JRE 与 JDBC 驱动**可查看所有组件的版本与体积、检查更新、预先下载或移除不再使用的驱动。

::: warning 受限网络或内网环境
自动下载组件需要能够访问 Adoptium、GitHub Releases 与 Maven Central（或驱动发行源）。若公司防火墙限制出站 HTTPS，请先放通相关下载源，再到**设置 → JRE 与 JDBC 驱动**重试。
:::

## Connection Guardian 自动恢复

经过 NAT 网关、云负载均衡或电脑休眠后的空闲连接很容易被服务端静默断开。SqlKit 在原生、HTTP 与 JDBC 适配器之上内置了后台 **Connection Guardian**：

- 持续监控连接状态并自动识别传输层断开。
- 发现失效会话时透明执行**一次性会话重建**。
- **绝不盲目重放写语句**：若写入过程中连接中断，SqlKit 会清晰上报错误，由你确认数据库状态后再决定是否重试，避免重复写入。

## 排查连接失败 {#troubleshoot-a-failed-connection}

| 现象 | 常见原因与排查项 |
| --- | --- |
| **连接被拒绝或超时** | 确认服务端正在该主机与端口监听，检查防火墙、云安全组白名单与 VPN 状态；若数据库位于私有子网，请配置 [SSH 隧道](/zh/docs/sqlkit/ssh-tunnel)（旗舰版）。 |
| **身份验证失败** | 核对账号、密码、认证插件及客户端来源限制（如 MySQL 的 `'user'@'host'` 或 PostgreSQL 的 `pg_hba.conf`）。 |
| **TLS / 证书校验失败** | 在**高级**选项卡匹配服务端 TLS 要求；使用 `verify-full` 时确认已提供正确的 CA 证书，且主机名与证书 SAN/CN 一致。 |
| **JDBC 测试在下载阶段失败** | 打开**设置 → JRE 与 JDBC 驱动**查看卡在 JRE、桥接包还是驱动环节，核对出站 HTTPS 访问后重试。 |
| **DuckDB 文件访问冲突** | DuckDB 不允许对同一文件同时混用读写与只读模式。SqlKit 会在表单中提示冲突连接，请统一为只读或先断开冲突会话。 |
| **已连接但看不到任何表** | 在**查询**页确认已选中目标数据库与模式，刷新对象树，并检查数据库账号是否具备 `USAGE` / `SELECT` 元数据权限。 |

## 下一步

<DocsCardGrid :cols="2">
  <DocsCard title="配置 SSH 隧道" description="通过单跳或多跳堡垒机安全访问私有网络数据库。" href="/zh/docs/sqlkit/ssh-tunnel" badge="旗舰版" badge-variant="ultimate" icon="lock" />
  <DocsCard title="执行第一条 SQL 查询" description="打开 Monaco SQL 编辑器，运行验证查询并查看结果。" href="/zh/docs/sqlkit/query-editor" icon="code" />
</DocsCardGrid>
