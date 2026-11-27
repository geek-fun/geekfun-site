---
layout: product
showBody: true
title: SqlKit 开源 SQL 数据库客户端 | MySQL、PostgreSQL、SQL Server 和 Oracle
titleTemplate: false
description: SqlKit 是一款支持 macOS、Windows 和 Linux 的开源 SQL 数据库 GUI 客户端，可连接 MySQL、PostgreSQL、SQL Server、Oracle 等数据库，浏览数据表、执行 SQL 并导出查询结果。
ogImage: https://www.geekfun.club/og/sqlkit-zh.png
head:
  - - meta
    - name: keywords
      content: SQL 客户端, 数据库客户端, PostgreSQL 客户端, MySQL 客户端, SQL Server 客户端, SQLite 客户端, DuckDB 客户端, ClickHouse 客户端, Oracle 客户端, Snowflake 客户端, BigQuery 客户端, 开源数据库工具, SqlKit, 桌面端 SQL 客户端, AI 数据库客户端, Agentic Data Studio, 自然语言 SQL, 跨平台 SQL 客户端, Mac SQL 客户端, Windows SQL 客户端, Linux SQL 客户端, 数据库管理, SQL 编辑器, Monaco SQL 编辑器, SSH 隧道, JDBC 桥接, 数据迁移
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/products/sqlkit/
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/products/sqlkit/
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/products/sqlkit/
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/products/sqlkit/
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "SqlKit",
        "alternateName": ["智能 SQL 客户端", "数据库 GUI", "SQL 数据库管理器", "AI SQL 智能体", "数据库桌面客户端", "开源 SQL 客户端"],
        "description": "开源 SQL 桌面客户端，支持 PostgreSQL、MySQL、SQL Server、Oracle、SQLite、DuckDB、ClickHouse、Snowflake 和 BigQuery 等数据库。内置 AI 自然语言转 SQL、可视化 Schema 浏览器、SSH 隧道和 JDBC 桥接。基于 Rust + Tauri 构建，原生性能。",
        "url": "https://www.geekfun.club/zh/products/sqlkit/",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": {
          "@type": "Offer",
          "name": "社区版",
          "price": "0",
          "priceCurrency": "USD",
          "url": "https://www.geekfun.club/zh/pricing"
        },
        "featureList": [
          "支持 PostgreSQL、MySQL、SQL Server、Oracle、SQLite 等数据库",
          "AI Agentic Data Studio",
          "自然语言转 SQL",
          "SQL 优化与执行计划可视化",
          "AI 自动修复 SQL 错误",
          "OpenAI、Anthropic、DeepSeek、Ollama 集成",
          "PostgreSQL GUI 客户端",
          "MySQL GUI 客户端",
          "SQL Server GUI 客户端",
          "SQLite GUI 客户端",
          "Oracle 数据库 GUI 客户端",
          "DuckDB GUI 客户端",
          "ClickHouse GUI 客户端",
          "Firebird GUI 客户端",
          "Snowflake 数据云客户端",
          "BigQuery GUI 客户端",
          "20+ 种数据库 JDBC 桥接",
          "SSH 隧道支持",
          "ER 图可视化",
          "基于 Monaco 的智能查询编辑器",
          "可视化 Schema 浏览器",
          "可视化查询执行计划",
          "SQL 格式化",
          "虚拟滚动数据网格",
          "数据导入与导出",
          "连接管理",
          "SSL/TLS 加密连接",
          "凭据加密存储",
          "查询历史记录",
          "多标签编辑",
          "DDL 查看器",
          "对象搜索",
          "保存的查询",
          "自动更新",
          "LLM 连接 HTTP 代理",
          "多语言界面"
        ],
        "screenshot": "https://www.geekfun.club/sqlkit-client-ui.png",
        "downloadUrl": "https://www.geekfun.club/zh/download#sqlkit",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "license": "https://github.com/geek-fun/sqlkit/blob/master/LICENSE",
        "sameAs": [
          "https://github.com/geek-fun/sqlkit",
          "https://www.geekfun.club/zh/products/sqlkit/"
        ]
      }

hero:
  name: SqlKit
  headline: "开源 SQL 数据库 GUI 客户端"
  tagline: "在 macOS、Windows 或 Linux 上连接 MySQL、PostgreSQL、SQL Server、Oracle 等数据库，浏览表、执行 SQL 并导出查询结果。"
  logo: /sqlkit.png
  screenshot: /sqlkit-client-ui.png
  actions:
    - text: 开始免费试用
      link: https://console.geekfun.club/subscribe?intent=trial
      theme: brand
      external: true
    - text: 下载
      link: /zh/download#sqlkit
      theme: alt
    - text: 使用文档
      link: /zh/docs/sqlkit/
      theme: alt

databases:
  title: "支持的数据库"
  items:
    - { name: Oracle, logo: /db-logos/oracle-logo.svg }
    - { name: MySQL, logo: /db-logos/mysql-logo.svg }
    - { name: SQL Server, logo: /db-logos/sqlserver-logo.svg }
    - { name: PostgreSQL, logo: /db-logos/postgresql-logo.svg }
    - { name: Snowflake, logo: /db-logos/snowflake-logo.svg }
    - { name: Databricks, logo: /db-logos/databricks-logo.svg }
    - { name: DB2, logo: /db-logos/db2-logo.svg }
    - { name: Cassandra, logo: /db-logos/cassandra-logo.svg }
    - { name: SQLite, logo: /db-logos/sqlite-logo.svg }
    - { name: MariaDB, logo: /db-logos/mariadb-logo.svg }
    - { name: Hive, logo: /db-logos/hive-logo.svg }
    - { name: Microsoft Access, logo: /db-logos/access-logo.svg }
    - { name: BigQuery, logo: /db-logos/bigquery-logo.svg }
    - { name: SAP HANA, logo: /db-logos/hana-logo.svg }
    - { name: Teradata, logo: /db-logos/teradata-logo.svg }
    - { name: ClickHouse, logo: /db-logos/clickhouse-logo.svg }
    - { name: Firebird, logo: /db-logos/clickhouse-logo.svg }
    - { name: Redshift, logo: /db-logos/redshift-logo.svg }
    - { name: Informix, logo: /db-logos/informix-logo.svg }
    - { name: DuckDB, logo: /db-logos/duckdb-logo.svg }
    - { name: Vertica, logo: /db-logos/vertica-logo.svg }
    - { name: H2, logo: /db-logos/h2-logo.svg }
    - { name: Trino, logo: /db-logos/trino-logo.svg }
    - { name: Presto, logo: /db-logos/presto-logo.svg }
    - { name: TimescaleDB, logo: /db-logos/timescaledb-logo.svg }
    - { name: CockroachDB, logo: /db-logos/cockroachdb-logo.svg }
    - { name: QuestDB, logo: /db-logos/questdb-logo.svg }
    - { name: Derby, logo: /db-logos/sqlite-logo.svg }
    - { name: InterSystems IRIS, logo: /db-logos/iris-logo.svg }
    - { name: YugabyteDB, logo: /db-logos/yugabytedb-logo.svg }
    - { name: Exasol, logo: /db-logos/exasol-logo.svg }
    - { name: Manticore Search, logo: /db-logos/manticore-logo.svg }
    - { name: TiDB, logo: /db-logos/tidb-logo.svg }
    - { name: PolarDB, logo: /db-logos/polardb-logo.svg }
    - { name: TDengine, logo: /db-logos/clickhouse-logo.svg }
    - { name: OceanBase, logo: /db-logos/oceanbase-logo.svg }
    - { name: GBase, logo: /db-logos/gbase-logo.svg }
    - { name: StarRocks, logo: /db-logos/starrocks-logo.svg }
    - { name: TDSQL, logo: /db-logos/tdsql-logo.svg }
    - { name: openGauss, logo: /db-logos/opengauss-logo.svg }
    - { name: Kylin, logo: /db-logos/kylin-logo.svg }
    - { name: KingbaseES, logo: /db-logos/kingbasees-logo.svg }
    - { name: Doris, logo: /db-logos/doris-logo.svg }
    - { name: Databend, logo: /db-logos/databend-logo.svg }
    - { name: DM8, logo: /db-logos/dm8-logo.svg }
    - { name: GoldenDB, logo: /db-logos/goldendb-logo.svg }
    - { name: GaussDB, logo: /db-logos/gaussdb-logo.svg }
    - { name: HighGo, logo: /db-logos/highgo-logo.svg }
    - { name: UXDB, logo: /db-logos/uxdb-logo.svg }
    - { name: Vastbase, logo: /db-logos/vastbase-logo.svg }
    - { name: YashanDB, logo: /db-logos/yashandb-logo.svg }
    - { name: Xugudb, logo: /db-logos/xugudb-logo.svg }
    - { name: SelectDB, logo: /db-logos/selectdb-logo.svg }
    - { name: rqlite, logo: /db-logos/sqlite-logo.svg }
    - { name: Turso, logo: /db-logos/sqlite-logo.svg }

showcase:
  - title: "Agentic Data Studio"
    body: "说需求，AI 读 schema、写查询、解释执行计划、修 SQL 错误。支持 OpenAI、Anthropic、DeepSeek、Ollama。自备 key，凭据不上云。"
    image: /sqlkit-data-studio-ui.png
    align: left
  - title: "在一个客户端里连接多个数据库"
    body: "SqlKit 内置 PostgreSQL、MySQL、SQL Server 和 SQLite 驱动，也能连接 TiDB、OceanBase、PolarDB、达梦 DM8、人大金仓 KingbaseES、GaussDB、GBase、TDSQL、openGauss、YashanDB 和 Vastbase 等数据库。"
    image: /sqlkit-sql-editor-ui.png
    align: right
  - title: "数据浏览与可视化"
    body: "树形浏览数据库、Schema、表、列。虚拟滚动数据网格，支持排序、筛选、行内编辑。ER 图查看表关系。DDL 查看器、对象搜索——探索数据所需的一切。"
    image: /sqlkit-data-view-table-ui.png
    align: left
  - title: "企业级安全连接"
    body: "SSH 隧道（密钥/密码认证）、SSL/TLS 加密、OS 密钥链凭据存储、自动重连。"
    image: /sqlkit-er-diagram-ui.png
    align: right

features:
  title: "SqlKit 能做什么？"
  guide: {"text": "查看 SqlKit 功能指南", "link": "/zh/docs/sqlkit/capabilities"}
  items:
    - {"title": "连接数据库", "body": "保存服务器连接或打开本地数据库文件。按数据库类型使用内置驱动、JDBC 或 HTTP。", "icon": "database"}
    - {"title": "编写与排查 SQL", "body": "执行单条语句或选中的 SQL，保存常用查询，并在受支持的数据库上查看执行计划。", "icon": "code"}
    - {"title": "查看表结构与关系", "body": "打开表结构查看列、键和索引。旗舰版可用 ER 图查看数据库声明的外键关系。", "icon": "layers"}
    - {"title": "编辑与传输数据", "body": "在受支持的数据库上筛选和编辑数据。可导出查询结果，旗舰版还支持导入文件和导出表。", "icon": "table"}
    - {"title": "使用 AI 起草查询", "body": "在旗舰版的 Agentic Data Studio 中配置自己的模型，基于数据库结构起草 SQL 并在编辑器中检查。", "icon": "sparkles"}
    - {"title": "通过 MCP 接入编程工具", "body": "用旗舰版的 MCP 桥接与 Data Studio Agent，将允许访问的连接交给 Codex 等编程工具。", "icon": "terminal"}

platforms:
  title: "支持全平台"
  items:
    - { name: macOS, logo: /platform/platform-macos.svg }
    - { name: Windows, logo: /platform/platform-windows.svg }
    - { name: Linux, logo: /platform/platform-linux.svg }

cta:
  title: "你的数据库值得更好的客户端"
  body: "别再受限于臃肿的 IDE 和功能简陋的免费工具。立即下载 SqlKit — 专为开发者打造的现代化智能 SQL 客户端。"
  actions:
    - { text: "开始免费试用", link: "https://console.geekfun.club/subscribe?intent=trial", theme: "brand", external: true }
    - { text: "下载", link: "/zh/download#sqlkit", theme: "alt" }
    - { text: "了解 DocKit →", link: "/zh/products/dockit/", theme: "alt" }
---

## Agentic Data Studio

SqlKit 的 **Agentic Data Studio** 重新定义了数据库工作方式。无需从头编写 SQL，用自然语言描述需求 — AI 智能体自动读取 Schema、编写优化查询、可视化执行计划、实时修复错误。

- **自然语言转 SQL** — 基于实际表和字段名生成 Schema 感知的精准查询
- **SQL 优化** — 自动重写慢查询，以树形图可视化执行计划，成本高亮显示
- **错误修复** — AI 智能体自动诊断并修复 SQL 错误
- **安全机制** — 细粒度权限控制，危险操作需二次确认；凭据永不暴露给 LLM
- **自带密钥** — 支持 OpenAI、Anthropic、DeepSeek、Ollama 和 LM Studio。本地模型可完全离线使用

## 多数据库架构

连接前，可在[支持的数据库与驱动](/zh/docs/sqlkit/supported-databases)中查看需要的驱动和配置。

| 策略 | 支持的数据库 |
|----------|-----------|
| **原生**（Rust） | PostgreSQL、MySQL、SQL Server、SQLite |
| **PG 协议兼容** | CockroachDB、Redshift、YugabyteDB、TimescaleDB、QuestDB、Vastbase 等 |
| **MySQL 协议兼容** | MariaDB、TiDB、OceanBase、StarRocks、Databend、ManticoreSearch 等 |
| **JDBC 桥接** | Oracle、DuckDB、Firebird、Snowflake、DB2、H2、BigQuery、Databricks、Hive、Hana、Teradata、Vertica、Exasol、Informix、Cassandra、TDengine 等 |
| **HTTP 桥接** | ClickHouse、Trino、Presto、rqlite、Turso |

## 为开发者而生

| 对比 | SqlKit | DBeaver | DataGrip | Navicat |
|---|---|---|---|---|
| **AI 智能体** | ✅ 原生内置 | ❌ 插件 | ❌ | ❌ |
| **原生性能** | ✅ Rust + Tauri | ❌ Java/Electron | ❌ JVM | ❌ C++ |
| **SSH 隧道** | ✅ | ✅ | ✅ | ✅ |
| **JDBC 桥接** | ✅ | ✅ | ❌ | ✅ |
| **开源** | ✅ Apache 2.0 | ✅ GPL | ❌ | ❌ |
| **价格** | 社区版免费 · 旗舰版 USD 9.90/月 | 免费 | ¥1,399/年 | ¥1,299+ |
| **macOS / Windows / Linux** | ✅ | ✅ | ✅ | 部分 |

## 为你的工作流而生

- **多标签编辑** — 同时处理多个查询，熟悉的标签页管理
- **Schema 浏览器** — 数据库、Schema、表、列、索引、视图、存储过程、函数的树形浏览
- **虚拟数据网格** — 排序、筛选、内联搜索、编辑记录、导出为 CSV/JSON/Markdown
- **查询历史** — 自动保存、可搜索、可回放。保存的查询支持文件管理和平台感知快捷键
- **ER 图** — 交互式关系可视化，智能图形布局
- **SQL 格式化** — 可配置方言和风格，快捷键 `Shift+Alt+F`
- **DDL 查看器** — 一键查看数据库中任意对象的 CREATE 语句
- **对象搜索** — 跨 Schema 快速查找表、视图和存储过程
- **深色模式** — 内置主题系统，支持浅色和深色主题

## 连接与安全

- **SSH 隧道** — 通过 SSH 连接，支持密钥和密码认证
- **加密存储** — 凭据由操作系统密钥链保护（macOS Keychain、Windows Credential Manager、Linux Secret Service）
- **SSL/TLS** — 对支持的数据库启用加密连接
- **HTTP 代理** — 可配置的 LLM 提供商连接代理
- **自动重连** — 弹性连接保持
- **自动更新** — 通过 GitHub Releases 自动检查更新（可配置）

## 常见问题

**SqlKit 支持哪些数据库？**
SqlKit 可以连接 PostgreSQL、MySQL、SQL Server、Oracle、SQLite 等 SQL 数据库和数据仓库。每种数据库的连接步骤见[支持的数据库与驱动](/zh/docs/sqlkit/supported-databases)。

**SqlKit 真的免费吗？**
是的。社区版永久免费且开源（Apache 2.0），涵盖完整的本地数据库工作流，不限连接数。进阶功能（AI 智能体与自带 LLM、MCP、集群管理、ER 图、批量导入导出和跨设备同步）包含在付费的 GEEKFUN Data Studio 旗舰版订阅中（USD 9.90/月 或 USD 99.00/年，含 7 天免费试用）。订阅期间发布的版本永久可用，取消订阅后依然归你。

**SqlKit 可以离线使用吗？**
可以。桌面端的所有数据库操作均可完全离线运行。AI 功能需要网络连接（或通过 Ollama/LM Studio 使用本地模型）。

**SqlKit 会收集数据吗？**
不会。SqlKit 不收集任何遥测数据。自动更新功能仅检查 GitHub Releases 新版本 — 可在设置中关闭。您的凭据和查询记录始终保存在本地。

**SqlKit 与 DBeaver、DataGrip 有何不同？**
SqlKit 是基于 Rust 和 Tauri 的桌面应用，内置 Agentic Data Studio。连接凭据保存在系统密钥链中。连接 JDBC 数据库时，SqlKit 可按需配置 Java 运行环境。

**我可以使用自己的 AI 提供商吗？**
可以。SqlKit 支持 OpenAI、Anthropic、DeepSeek 以及任何 Ollama 兼容端点。在设置中配置提供商和密钥即可。AI 智能体不会将数据库凭据暴露给 LLM。

**SqlKit 支持 NoSQL 数据库吗？**
SqlKit 专注于 SQL 数据库。如果您需要管理 MongoDB、Elasticsearch、OpenSearch 或 DynamoDB，请查看我们的另一款开源产品 [**DocKit**](/zh/products/dockit/) — 专为 NoSQL 数据库打造的桌面客户端。
