---
title: PostgreSQL 及兼容数据库 GUI 客户端 | macOS、Windows 与 Linux | SqlKit
description: 使用 SqlKit 原生 Rust 驱动连接 PostgreSQL 及 18 种 PG 兼容数据库，配置 SSL/TLS verify-full、多 Schema 浏览与 EXPLAIN (FORMAT JSON) 可视化执行计划。
outline: [2, 3]
---

# PostgreSQL 及兼容数据库

<DocsBadge variant="native">原生 Rust 驱动</DocsBadge> <DocsBadge variant="community">社区版</DocsBadge>

SqlKit 通过 `tokio-postgres`、`deadpool-postgres` 和 `rustls` 原生直连 PostgreSQL，无需 Java 或外部客户端工具。同一套适配器同时支持 18 种 PostgreSQL 协议兼容引擎，包括 CockroachDB、Amazon Redshift、TimescaleDB、YugabyteDB、AlloyDB、Cloud SQL、Greenplum、openGauss 和 GaussDB。

## 连接 PostgreSQL

<DocsSteps>

### 打开新建连接并选择 PostgreSQL

在**连接管理**点击**添加新连接**（<kbd>⌘</kbd>+<kbd>N</kbd> / <kbd>Ctrl</kbd>+<kbd>N</kbd>），选择 **PostgreSQL**（或按需选择 Amazon Redshift、CockroachDB、TimescaleDB、YugabyteDB 等专属配置）。

### 填写服务器与角色凭据

| 字段 | 常见取值 | 说明 |
| --- | --- | --- |
| 主机 | `localhost` 或云端端点 | 通过 [SSH 隧道](/zh/docs/sqlkit/ssh-tunnel)连接时填写内网地址 |
| 端口 | `5432` | Redshift 默认 `5439`，YugabyteDB 默认 `5433`，QuestDB 默认 `8812` |
| 数据库 | `postgres` 或业务库名 | PostgreSQL、Redshift、TimescaleDB 与 EDB 必填 |
| 用户名 / 密码 | PostgreSQL 角色凭据 | 仅保存在本机 |

### 配置 SSL / TLS 证书

在**高级 → SSL/TLS** 中按服务端要求选择模式。连接 AWS RDS、Google Cloud SQL、Neon、Supabase、Azure PostgreSQL 时使用 `verify-full` 并挂载云厂商根 CA 证书；通过 SSH 隧道或内网 IP 访问导致主机名与证书域名不一致时，可选 `verify-ca` 配合 CA 证书；需要双向 TLS（mTLS）时同时挂载**客户端证书**与**客户端私钥**。

### 测试、保存并验证会话

测试通过并保存后进入**查询**，运行只读验证语句：

```sql
SELECT
  current_database() AS active_database,
  current_schema() AS active_schema,
  current_user AS active_role,
  version();
```

</DocsSteps>

## PostgreSQL 支持说明

- 对象树逐级展开数据库、模式（如 `public`、`analytics`）、表、视图、存储过程和函数，以及表级索引、外键与触发器。
- Monaco 内置 `pgsql` 元数据补全与 `postgresql` 方言格式化（`Shift+Option/Alt+F`），可识别函数和 `DO` 块中的 `$$...$$` 美元引号。
- 按 <kbd>F6</kbd> 运行 `EXPLAIN (FORMAT JSON)` 或 `EXPLAIN (ANALYZE, FORMAT JSON)`，在成本树（标记最高开销算子）、汇总表与原始 JSON 视图之间切换。
- **新建数据库**支持配置 PostgreSQL 的 **Encoding（编码）** 与 **Locale（区域设置）**。
- 旗舰版 <DocsBadge variant="ultimate">旗舰版</DocsBadge> 支持跨模式绘制外键 ER 图，或在 Agentic Data Studio 与 MCP 中通过 AST 只读校验（拦截 `WITH ... DELETE` 等数据修改型 CTE）安全查询生产结构。

## 切换模式与 `search_path`

`current_schema()` 返回会话 `search_path` 上首个存在的模式（通常为 `public`）。当多个模式存在同名表或查询非默认模式时，请加上模式前缀：

```sql
SELECT *
FROM reporting.orders
ORDER BY created_at DESC
LIMIT 100;
```

## 支持的 PostgreSQL 兼容引擎

新建连接时优先选择具体引擎配置，以便自动匹配默认端口与默认库名：

<!--@include: @/.vitepress/includes/sqlkit-databases.md#postgresql-->

## 常见连接问题排查

| 现象 | 检查项 |
| --- | --- |
| 连上后看不到表 | 在**查询**页确认已展开目标数据库与模式并刷新树；若查询报 `permission denied for schema`，请联系 DBA 授予模式 `USAGE` 与表 `SELECT` 权限。 |
| `pg_hba.conf` 拒绝认证 | 核对角色密码、来源 IP 白名单，以及服务端 `pg_hba.conf` 是否强制要求 `sslmode=require` 或 `verify-full`。 |
| SSL 证书校验失败 | 下载云厂商根 CA 证书并在**高级 → SSL/TLS → CA 证书**中指定。 |
| 含 `$$` 的函数体被异常拆分 | 核对成对的 `$$` 或 `$tag$` 分隔符；SqlKit 语句扫描器原生支持 `$$...$$` 块。 |

## 下一步

<DocsCardGrid :cols="2">
  <DocsCard title="SQL 编辑器与执行计划" description="使用 EXPLAIN (FORMAT JSON) 成本树与 PostgreSQL 格式化。" href="/zh/docs/sqlkit/query-editor" icon="code" />
  <DocsCard title="结构浏览与 ER 图" description="浏览多 Schema 对象、外键、触发器与交互式 ER 图。" href="/zh/docs/sqlkit/schema-and-er-diagrams" icon="layers" />
</DocsCardGrid>
