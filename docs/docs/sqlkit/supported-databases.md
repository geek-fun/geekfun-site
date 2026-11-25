---
title: Supported Databases & JDBC Drivers (68+ Engines) | SqlKit
description: Full catalog of all 68 databases supported by SqlKit across native Rust drivers, PostgreSQL/MySQL wire protocols, HTTP SQL, and the on-demand JDBC Bridge.
outline: [2, 3]
---

# Supported databases & JDBC drivers

SqlKit ships **68 verified database profiles** under **Connections → Add New Connection**. Each profile sets the right default port, connection form fields, SQL dialect rules, and driver runtime—and automatically gates UI features to what that database genuinely supports.

::: info Connection support vs. full feature parity
Being able to connect does not mean every engine implements the same metadata tables or SQL dialect. SqlKit uses engine capability flags to show only reliable object tree nodes, `EXPLAIN` modes, and editing actions for each engine.
:::

## 1. Native Rust adapters (Core)

Built directly into the SqlKit binary—**zero Java or external runtime required**.

| Database | Driver crate | Default port | SSL/TLS | Notes |
| --- | --- | --- | --- | --- |
| [PostgreSQL](/docs/sqlkit/postgresql-gui-client) | `tokio-postgres` + `rustls` | `5432` | Full (`disable`–`verify-full`) | Schemas, views, procedures, functions, triggers, `EXPLAIN (FORMAT JSON)` & `ANALYZE` |
| [MySQL](/docs/sqlkit/mysql-gui-client) | `mysql_async` + `rustls` | `3306` | Full (`disable`–`verify-full`) | Views, procedures, functions, triggers, storage engines, `EXPLAIN FORMAT=JSON` & `ANALYZE` |
| [SQL Server](/docs/sqlkit/sql-server-gui-client) | `tiberius` (TDS 7.3) | `1433` | TLS + `Trust Server Certificate` | Schemas (`dbo`), T-SQL `SHOWPLAN_TEXT` & `STATISTICS PROFILE` |
| [SQLite](/docs/sqlkit/sqlite-gui-client) | `rusqlite` (bundled) | Local file / `:memory:` | N/A | Open existing `.db`/`.sqlite` files, create new files, or open `:memory:` |
| [SQLCipher](/docs/sqlkit/sqlite-gui-client#sqlcipher) | `rusqlite` (`sqlcipher`) | Local file | N/A | Encrypted SQLite databases via `PRAGMA key` |
| **ClickHouse** | Native Rust HTTP | `8123` | HTTPS / TLS | Supports materialized views; no schemas, procedures, or functions |

## 2. PostgreSQL-wire compatible (18 engines)

Reuse SqlKit's native Rust PostgreSQL adapter with engine-specific default ports, default database names, and full SSL/TLS support.

| Database | Default port | Default DB / Notes |
| --- | --- | --- |
| **AlloyDB for PostgreSQL** | `5432` | Google Cloud managed PG-compatible |
| **Amazon Redshift** | `5439` | Database name required |
| **Cloud SQL for PostgreSQL** | `5432` | Google Cloud managed PostgreSQL |
| **CockroachDB** | `5432` | Default database `defaultdb` |
| **CrateDB** | `5432` | Default database `crate` |
| **EnterpriseDB (EDB)** | `5432` | Database name required |
| **Fujitsu Enterprise Postgres** | `5432` | Enterprise PostgreSQL distribution |
| **GaussDB** | `5432` | Distributed PG-wire enterprise engine |
| **GBase 8c** | `5432` | PG-wire distributed engine |
| **Greenplum** | `5432` | MPP analytical warehouse |
| **HighGo DB** | `5432` | Default database `highgo` |
| **Materialize** | `5432` | Default database `materialize` |
| **openGauss** | `5432` | Open-source enterprise PG-wire engine |
| **QuestDB** | `8812` | Default database `qdb` |
| **TimescaleDB** | `5432` | Database name required |
| **UXDB** | `5432` | Default database `uxdb` |
| **Vastbase** | `5432` | Default database `vastbase` |
| **YugabyteDB** | `5433` | Default database `yugabyte` |

## 3. MySQL-wire compatible (13 engines)

Reuse SqlKit's native Rust MySQL adapter with engine-specific default ports and full SSL/TLS support.

| Database | Default port | Notes |
| --- | --- | --- |
| **Apache Doris** | `9030` | Real-time OLAP (MySQL query port) |
| **Cloud SQL for MySQL** | `3306` | Google Cloud managed MySQL |
| **Databend** | `3307` | Cloud data warehouse (MySQL handler port) |
| **GoldenDB** | `3306` | Distributed transactional database |
| **Manticore Search** | `9306` | Full-text search engine via MySQL protocol |
| **MariaDB** | `3306` | Dedicated MariaDB formatter & profile |
| **OceanBase (MySQL mode)** | `2883` | ODP / proxy MySQL-mode port |
| **PolarDB** | `3306` | Cloud-native MySQL-compatible database |
| **SelectDB** | `9030` | Cloud-native Doris distribution |
| **SingleStore (MemSQL)** | `3306` | Distributed HTAP engine |
| **StarRocks** | `9030` | High-performance OLAP engine |
| **TDSQL** | `3306` | Distributed MySQL-compatible database |
| **TiDB** | `4000` | Distributed NewSQL database |

## 4. HTTP SQL engines (4 engines)

Connect via native Rust HTTP/HTTPS without Java or JDBC:

| Database | Default port | Notes |
| --- | --- | --- |
| **Presto** | `8080` | Distributed SQL query engine over HTTP |
| **rqlite** | `4001` | Raft-replicated SQLite over HTTP API |
| **Trino** | `8080` | Distributed SQL query engine over HTTP |
| **Turso (libSQL)** | `443` | Edge SQLite over HTTPS with auth token |

*(ClickHouse also uses a dedicated native Rust HTTP adapter on default port `8123`.)*

## 5. JDBC Bridge engines (27 engines)

Powered by SqlKit's shared Java subprocess (`jdbc-bridge`, backed by HikariCP connection pools). Drivers download automatically on first connection test or from **Settings → JRE & JDBC Drivers**.

| Database | Default port / target | Driver artifact | Special notes |
| --- | --- | --- | --- |
| [Oracle Database](/docs/sqlkit/oracle-gui-client) | `1521` | `ojdbc11` | Basic (SID/Service Name), TNS (`tnsnames.ora`), Cloud Wallet, `NORMAL`/`SYSDBA`/`SYSOPER` |
| [DuckDB](/docs/sqlkit/sqlite-gui-client#duckdb) | File / `memory:<label>` | `duckdb_jdbc` | No SSL; Read-Write or Read-Only mode with file conflict guard |
| **Apache Cassandra (3.0+)** | `9042` | `cassandra-jdbc-wrapper` | CQL mode — see [CQL notes below](#cql-engines) |
| **ScyllaDB** | `9042` | `cassandra-jdbc-wrapper` | CQL mode — shares bundle with Cassandra |
| **Snowflake** | `443` | `snowflake-jdbc` | Cloud data warehouse |
| **Google BigQuery** | `443` | `googlebigquery-jdbc` | Serverless warehouse |
| **Databricks SQL** | `443` | `databricks-jdbc` | Lakehouse SQL warehouse |
| **Apache Hive** | `10000` | `hive-jdbc` (standalone) | HiveServer2 |
| **Apache Kylin** | `7070` | `kylin-jdbc` | OLAP engine |
| **IBM Db2** | `50000` | `jcc` | Enterprise relational database |
| **IBM Informix** | `9088` | `jcc` | Enterprise database |
| **SAP HANA** | `30015` | `ngdbc` | In-memory database |
| **Teradata** | `1025` | `terajdbc` | Enterprise data warehouse |
| **Vertica** | `5433` | `vertica-jdbc` | Columnar analytics |
| **Exasol** | `8563` | `exasol-jdbc` | In-memory analytics |
| **Firebird** | `3050` | `jaybird` | Open-source relational engine |
| **H2** | `9092` | `h2` | Java SQL engine |
| **Apache Derby** | `1527` | `derbyclient` | Network Derby server |
| **InterSystems IRIS** | `1972` | `jdbc` | Multi-model enterprise engine |
| **Microsoft Access** | Local `.accdb`/`.mdb` | `ucanaccess` | Local file, no SSL |
| **Dameng (DM8)** | `5236` | `DmJdbcDriver8` | Domestic enterprise relational DB |
| **KingbaseES** | `54321` | `kingbase8` | Domestic enterprise relational DB |
| **OceanBase (Oracle mode)** | `2881` | `oceanbase-client` | Oracle-compatible tenant |
| **GBase 8a** | `5258` | Pre-shaded bundle | Analytical cluster |
| **XuguDB** | `5138` | `xugu-jdbc` | Distributed relational DB |
| **YashanDB** | `1688` | `yashandb-jdbc` | Enterprise relational DB |
| **TDengine** | `6030` | `taos-jdbcdriver` | Time-series database |

## Managing JRE 25 & JDBC drivers {#jdbc-manager}

Open **Settings → JRE & JDBC Drivers** to manage all Java components in one place:

- **Java Runtime (JRE 25)**: SqlKit detects an existing system JDK 25+ or installs a self-contained **Eclipse Temurin JRE 25** under `~/.sqlkit/jre` (with update checks and one-click removal).
- **JDBC Bridge JAR**: stored in `~/.sqlkit/jdbc-bridge/jdbc-bridge-<version>.jar`, fetched from GitHub Releases and restarted automatically when upgraded.
- **Per-Database Drivers**: lists all 27 JDBC drivers with install status, version, and file size. Install, check updates, or remove any driver individually.

::: info Custom local JARs
SqlKit manages official verified driver artifacts via its built-in registry (`Maven Central` and direct release bundles). Uploading arbitrary custom local JAR files is not currently exposed in the UI.
:::

## Engine-specific notes {#engine-notes}

### Cassandra & ScyllaDB (CQL) {#cql-engines}

CQL differs fundamentally from relational SQL, and SqlKit adapts its UI and parser accordingly:

- **Keyspaces map to schemas**: metadata queries `system_schema` directly; foreign keys and views are omitted because CQL has neither.
- **Connection fields**: provide **Local Datacenter** (default `datacenter1`) and **Keyspace** (default `system`).
- **TLS behavior**: CQL has no try-then-fallback handshake. `prefer` connects in plaintext; choose `require`, `verify-ca`, or `verify-full` for TLS-enabled clusters.
- **Query & Grid behavior**: the editor supports CQL `BEGIN ... APPLY BATCH`, `//` comments, and `$$` dollar quotes. Because CQL does not allow arbitrary `WHERE`/`ORDER BY`/`OFFSET` rewriting, the table view opens as a preview without grid-side filtering, sorting, or pagination—run explicit CQL statements in the editor instead.

### Engine capability matrix

| Feature | PostgreSQL / MySQL / SQL Server | SQLite / SQLCipher | ClickHouse | Oracle / Standard JDBC | Cassandra / ScyllaDB (CQL) |
| --- | :---: | :---: | :---: | :---: | :---: |
| Object tree & table preview | ✅ | ✅ | ✅ | ✅ | ✅ |
| Schemas level | PG / MSSQL ✅ · MySQL — | — | — | ✅ | Keyspaces |
| Views / Procedures / Functions | ✅ | Views only | Materialized Views | Engine-dependent | — |
| Visual `EXPLAIN` plan | ✅ (JSON / Showplan) | ✅ | ✅ | Engine-dependent | — |
| Grid filter, sort & pagination | ✅ | ✅ | ✅ | ✅ | CQL Editor only |
| Interactive ER Diagrams (Ultimate) | ✅ | ✅ | — | Engine-dependent | — |
| Agentic Data Studio (41+ engines) | ✅ | ✅ | — | Oracle, DuckDB, DM8 ✅ | — |

## Next steps

<DocsCardGrid :cols="3">
  <DocsCard title="PostgreSQL guide" description="Schemas, SSL verify-full, EXPLAIN JSON, and PG-compatible engines." href="/docs/sqlkit/postgresql-gui-client" icon="database" />
  <DocsCard title="MySQL guide" description="Storage engines, charsets, EXPLAIN ANALYZE, and MariaDB/TiDB." href="/docs/sqlkit/mysql-gui-client" icon="database" />
  <DocsCard title="Oracle guide" description="Basic SID/Service, TNS alias auto-parse, Cloud Wallet, and SYSDBA." href="/docs/sqlkit/oracle-gui-client" icon="database" />
</DocsCardGrid>
