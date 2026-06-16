---
layout: product
title: SqlKit – Open-Source SQL Desktop Client for 50+ Databases with AI Agent
description: SqlKit is an open-source agentic SQL desktop GUI client for 50+ databases — PostgreSQL, MySQL, SQL Server, Oracle, SQLite, DuckDB, ClickHouse, Snowflake, BigQuery and more. AI-powered, privacy-first, and built with Rust + Tauri.
ogImage: https://www.geekfun.club/og/sqlkit-en.png
head:
  - - meta
    - name: keywords
      content: SQL client, database client, PostgreSQL GUI, MySQL GUI, SQL Server GUI, SQLite GUI, DuckDB GUI, ClickHouse GUI, Oracle GUI, Snowflake GUI, BigQuery GUI, open source database tool, SqlKit, desktop SQL client, AI database client, agentic data studio, natural language SQL, cross-platform SQL client, Mac SQL client, Windows SQL client, Linux SQL client, database management, SQL editor, Monaco SQL editor, SSH tunnel, JDBC bridge, data migration
  - - link
    - rel: canonical
      href: https://www.geekfun.club/products/sqlkit/
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
        "alternateName": ["agentic SQL client", "database GUI", "SQL database manager", "AI SQL agent", "database desktop client", "open source SQL client"],
        "description": "Open-source agentic SQL desktop client for 50+ databases — PostgreSQL, MySQL, SQL Server, Oracle, SQLite, DuckDB, ClickHouse, Snowflake, BigQuery, and more. AI-powered natural language to SQL, cross-engine data transfer, SSH tunnels, and JDBC bridge. Built with Rust + Tauri for native performance.",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "featureList": [
          "50+ database support",
          "AI agentic data studio",
          "Natural language to SQL",
          "SQL optimization and execution plan visualization",
          "Agentic error fixing",
          "OpenAI, Anthropic, DeepSeek, Ollama integration",
          "PostgreSQL GUI client",
          "MySQL GUI client",
          "SQL Server GUI client",
          "SQLite GUI client",
          "Oracle database GUI client",
          "DuckDB GUI client",
          "ClickHouse GUI client",
          "Firebird GUI client",
          "Snowflake data cloud client",
          "BigQuery GUI client",
          "JDBC bridge for 20+ databases",
          "SSH tunnel support",
          "Cross-engine data transfer",
          "Migration wizard",
          "ER diagram visualization",
          "Smart Query Editor with Monaco",
          "Visual schema browser",
          "Visual query execution plan",
          "SQL formatting",
          "Virtual-scrolled data grid",
          "Data import and export",
          "Connection management",
          "SSL/TLS encrypted connections",
          "Encrypted credential storage",
          "Query history tracking",
          "Multi-tab editing",
          "DDL viewer",
          "Object search",
          "Saved queries",
          "Auto-update",
          "HTTP proxy for LLM connections",
          "i18n support (English, 简体中文)"
        ],
        "screenshot": "https://www.geekfun.club/sqlkit-client-ui.png",
        "downloadUrl": "https://www.geekfun.club/download",
        "softwareVersion": "0.6.1",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "license": "https://github.com/geek-fun/sqlkit/blob/main/LICENSE",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "892",
          "bestRating": "5",
          "worstRating": "1"
        },
        "sameAs": [
          "https://github.com/geek-fun/sqlkit",
          "https://www.geekfun.club/products/sqlkit/"
        ]
      }

hero:
  name: SqlKit
  headline: "The agentic SQL client for 50+ databases"
  tagline: "50+ databases, one desktop app. AI-powered, open-source, and built for developers."
  logo: /sqlkit.png
  screenshot: /sqlkit-client-ui.png
  actions:
    - text: Download
      link: /download
      theme: brand
    - text: View on GitHub
      link: https://github.com/geek-fun/sqlkit
      theme: alt
      external: true

databases:
  title: "50+ databases, one client"
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
    body: "Describe what you need in natural language — the agent reads your schema, writes optimized queries, explains execution plans visually, and fixes errors on the spot. Supports OpenAI, Anthropic, DeepSeek, and Ollama. Bring your own key. Credentials are never exposed to the LLM."
    image: /sqlkit-client-ui.png
    align: left
  - title: "All Your Databases, One App"
    body: "Connect to 50+ databases across five adapter strategies: native Rust drivers for PostgreSQL, MySQL, SQL Server, SQLite, DuckDB, ClickHouse, Oracle, Firebird; PG-wire and MySQL-wire compatible engines; a JDBC bridge for Snowflake, DB2, BigQuery, and 20+ more; and HTTP bridge for Trino and Presto."
    image: /sqlkit-client-ui.png
    align: right
  - title: "Move Data Between Engines"
    body: "Transfer data between any supported databases — PostgreSQL to ClickHouse, Oracle to SQL Server, MySQL to BigQuery. No intermediate files required. Automatic type mapping, batch processing for millions of records, and DDL generation for target-engine compatibility."
    image: /sqlkit-client-ui.png
    align: left
  - title: "Enterprise Connectivity"
    body: "SSH tunnel support with key and password authentication. SSL/TLS encrypted connections. Encrypted credential storage via OS keychain (macOS Keychain, Windows Credential Manager, Linux Secret Service). Auto-reconnect for resilient connections."
    image: /sqlkit-client-ui.png
    align: right

features:
  - { title: "Agentic Data Studio", body: "Talk to your databases. The AI agent reads your schema, writes queries, optimizes slow SQL, visualizes execution plans, and fixes errors. Per-source permissions and safety gates for destructive operations. Bring your own LLM key — credentials stay local.", icon: "sparkles" }
  - { title: "50+ Database Support", body: "Native (Rust) drivers for PostgreSQL, MySQL, SQL Server, SQLite, DuckDB, ClickHouse, Oracle, Firebird. PG-wire and MySQL-wire for CockroachDB, MariaDB, TiDB, OceanBase, Redshift. JDBC bridge for Snowflake, DB2, BigQuery, Databricks, Teradata, Hive, and 20+ more. HTTP bridge for Trino, Presto.", icon: "database" }
  - { title: "Cross-Engine Data Transfer", body: "Migrate data between any supported engines with automatic column mapping and type conversion. Bulk operations handle millions of records. DDL generation for target-engine SQL dialects.", icon: "import" }
  - { title: "Product-Grade Editor", body: "Monaco Editor (VS Code engine) with full SQL syntax highlighting, context-aware autocomplete, multi-tab support, and configurable SQL formatting with dialect-specific rules.", icon: "code" }
  - { title: "Visual Schema Browser", body: "Tree view of databases, schemas, tables, columns, indexes, views, procedures, and functions. Inspect DDL, search objects across schemas, and navigate relationships visually.", icon: "search" }
  - { title: "Smart Data Grid", body: "Virtual-scrolled data grid with sort, filter, inline editing, and copy. Row-level data search across all columns. Paginated results with CSV, JSON, and Markdown export.", icon: "table" }
  - { title: "ER Diagram Visualization", body: "Interactive ER diagrams rendered on a canvas — explore table relationships, foreign keys, and indexes visually. Powered by Dagre for smart graph layout.", icon: "layers" }
  - { title: "Query Execution Plans", body: "Visualize query execution plans as structured trees with cost highlighting. Understand how your queries are executed and identify optimization opportunities at a glance.", icon: "zap" }
  - { title: "SSH Tunnel & Security", body: "Connect through SSH with key or password authentication. SSL/TLS for encrypted connections. Credentials secured by OS keychain. HTTP proxy support for LLM provider connections.", icon: "lock" }
  - { title: "Multi-Tab & History", body: "Work on multiple queries simultaneously with tab management. Auto-saved query history — searchable, replayable, never lost. Saved queries with file management and context menus.", icon: "history" }
  - { title: "JDBC Bridge", body: "Connect to 20+ additional databases via JDBC including Snowflake, DB2, BigQuery, Databricks, Teradata, Hive, Hana, Vertica, Exasol, Informix, Cassandra, TDengine, and more. Automatic JRE detection and driver management.", icon: "terminal" }
  - { title: "Cross-Platform Native", body: "Built with Rust + Tauri v2 — no Electron, no JRE, no bundled Chromium. Ships as a small native binary for macOS (.dmg), Windows (.exe), and Linux (.AppImage, .deb). Native performance, native look and feel.", icon: "dot" }

platforms:
  title: "Available on all platforms"
  items:
    - { name: macOS, logo: /platform/platform-macos.svg }
    - { name: Windows, logo: /platform/platform-windows.svg }
    - { name: Linux, logo: /platform/platform-linux.svg }

cta:
  title: "Your databases deserve a better client"
  body: "Stop juggling between heavyweight IDEs and limited free tools. Download SqlKit today — a modern, agentic SQL client built for developers who ship."
  actions:
    - { text: "Download", link: "/download", theme: "brand" }
    - { text: "Try DocKit →", link: "/products/dockit/", theme: "alt" }
    - { text: "View on GitHub", link: "https://github.com/geek-fun/sqlkit", theme: "alt", external: true }
---

## Agentic Data Studio

SqlKit's **Agentic Data Studio** transforms how you work with databases. Instead of writing SQL from scratch, describe what you need in natural language — the agent reads your schema, writes queries, optimizes slow SQL, explains execution plans visually, and fixes errors on the spot.

- **Natural language to SQL** — schema-aware context generation with your actual table and column names
- **SQL optimization** — rewrite slow queries and visualize execution plans as structured trees with cost highlights
- **Error fixing** — agent diagnoses and fixes SQL errors automatically
- **Safety** — per-source permissions and explicit confirmation for destructive operations; credentials never exposed to the LLM
- **Bring your own key** — supports OpenAI, Anthropic, DeepSeek, Ollama, and LM Studio. Fully offline with local models.

## Multi-Database Architecture

SqlKit supports **50+ databases** across five adapter strategies, from native Rust drivers to a flexible JDBC bridge. No other open-source SQL client covers this breadth.

| Strategy | Databases |
|----------|-----------|
| **Native** (Rust) | PostgreSQL, MySQL, SQL Server, SQLite, DuckDB, ClickHouse, Firebird, Oracle |
| **PG-wire compat** | CockroachDB, Redshift, YugabyteDB, TimescaleDB, QuestDB, Vastbase, and more |
| **MySQL-wire compat** | MariaDB, TiDB, OceanBase, StarRocks, Databend, ManticoreSearch, and more |
| **JDBC bridge** | Snowflake, DB2, H2, BigQuery, Databricks, Hive, Hana, Teradata, Vertica, Exasol, Informix, Cassandra, TDengine, and more |
| **HTTP bridge** | Trino, Presto |

## Cross-Engine Data Transfer

Move data between any supported engines without intermediate files:

- **Cross-engine migration** — PostgreSQL to ClickHouse, Oracle to SQL Server, MySQL to BigQuery — with automatic type mapping
- **Migration wizard** — interactive interface with column auto-mapping
- **DDL generation** — generate CREATE statements for selected tables, adapted for target-engine compatibility
- **SQL file execution** — execute SQL files against target databases with configurable error handling
- **Import / Export** — CSV, JSON, JSONL with batch processing for millions of records

## Designed for Developers

| vs. | SqlKit | DBeaver | DataGrip | Navicat |
|---|---|---|---|---|
| **AI agent** | ✅ Native | ❌ Plugin | ❌ | ❌ |
| **50+ databases** | ✅ | ✅ | Partial | ✅ |
| **Native performance** | ✅ Rust + Tauri | ❌ Java/Electron | ❌ JVM | ❌ C++ |
| **SSH tunnel** | ✅ | ✅ | ✅ | ✅ |
| **JDBC bridge** | ✅ | ✅ | ❌ | ✅ |
| **Open source** | ✅ Apache 2.0 | ✅ GPL | ❌ | ❌ |
| **Price** | Free | Free | $199/yr | $199+ |
| **macOS / Windows / Linux** | ✅ | ✅ | ✅ | Partial |

## Built for the way you work

- **Multi-tab editing** — work on multiple queries simultaneously with familiar tab management
- **Schema browser** — tree view of databases, schemas, tables, columns, indexes, views, procedures, and functions
- **Virtual data grid** — sort, filter, search inline, edit records, and export results to CSV, JSON, or Markdown
- **Query history** — auto-saved, searchable, replayable. Saved queries with file management and platform-aware shortcuts
- **ER diagrams** — interactive relationship visualization with smart graph layout
- **SQL formatting** — configurable dialect and style with `Shift+Alt+F`
- **DDL viewer** — inspect CREATE statements for any object in your database
- **Object search** — quickly find tables, views, and procedures across any schema
- **Dark mode** — built-in theme system with light and dark variants

## Connectivity & Security

- **SSH tunnel** — connect through SSH with key or password authentication
- **Encrypted storage** — credentials secured by OS keychain (macOS Keychain, Windows Credential Manager, Linux Secret Service)
- **SSL/TLS** — encrypted connections to supported databases
- **HTTP proxy** — configurable proxy for LLM provider connections
- **Auto-reconnect** — resilient connection handling
- **Auto-update** — automatic update checks via GitHub Releases (configurable)

## Frequently asked questions

**What databases does SqlKit support?**
SqlKit supports 40+ databases including PostgreSQL, MySQL, SQL Server, Oracle, SQLite, DuckDB, ClickHouse, Firebird, MariaDB, CockroachDB, Redshift, Snowflake, DB2, Trino, BigQuery, Databricks, Hive, Teradata, and more. See the database compatibility table above for the full breakdown.

**Is SqlKit really free?**
Yes. SqlKit is open source under the Apache 2.0 license. All features — including the AI agent — are free. You only pay for your own LLM API usage if you use cloud-based models.

**Does SqlKit work offline?**
Yes. The desktop app works fully offline for all database operations. AI features require network access to the model endpoint (or a local model via Ollama/LM Studio).

**Does SqlKit collect telemetry?**
No. SqlKit does not collect telemetry. The auto-update feature checks GitHub Releases for new versions — disable it in settings. Your credentials and queries stay on your machine.

**How is SqlKit different from DBeaver or DataGrip?**
SqlKit is built with Rust + Tauri — no Java runtime, no Electron overhead. It includes AI natively (not as a plugin), supports 40+ databases, and runs on macOS, Windows, and Linux from a single small binary. Privacy-first with encrypted local credential storage.

**Can I use my own AI provider?**
Yes. SqlKit supports OpenAI, Anthropic, DeepSeek, and any Ollama-compatible endpoint. Configure your provider and key in Settings. The agent never exposes your database credentials to the LLM.

**Do you also support NoSQL databases?**
SqlKit is purpose-built for SQL databases. If you need MongoDB, Elasticsearch, OpenSearch, or DynamoDB support, check out [**DocKit**](/products/dockit/) — our companion open-source NoSQL desktop client from the same team.
