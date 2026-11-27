---
title: Supported Databases & JDBC Drivers (68+ Engines) | SqlKit
description: Full catalog of all 68 databases supported by SqlKit across native Rust drivers, PostgreSQL/MySQL wire protocols, HTTP SQL, and the on-demand JDBC Bridge.
outline: [2, 3]
---

# Supported databases & JDBC drivers

SqlKit includes 68 database profiles under **Connections → Add New Connection**. Each profile sets the default port, connection form fields, SQL dialect rules, and driver runtime, and turns UI actions on or off based on what that engine supports.

<DocsFigure src="/sqlkit-database-list.png" alt="Logo wall of all 68 SQL databases supported by SqlKit across native Rust, wire-compatible, HTTP SQL, and JDBC Bridge adapters" caption="All 68 database profiles available in SqlKit across native Rust, wire-compatible, HTTP SQL, and on-demand JDBC adapters." :width="1280" :height="720" />

::: info Connection support and feature coverage
Connecting to an engine does not mean every metadata table or SQL dialect behaves the same way. SqlKit checks per-engine capability flags so object tree nodes, `EXPLAIN` modes, and editing controls only appear where the engine supports them.
:::

## 1. Native Rust adapters (Core)

Compiled directly into the SqlKit binary with no Java or external runtime required.

| Database | Driver crate | Default port | SSL/TLS | Notes |
| --- | --- | --- | --- | --- |
| <DocsDb id="postgresql" label="PostgreSQL" href="/docs/sqlkit/postgresql-gui-client" /> | `tokio-postgres` + `rustls` | `5432` | Full (`disable` to `verify-full`) | Schemas, views, procedures, functions, triggers, `EXPLAIN (FORMAT JSON)` and `ANALYZE` |
| <DocsDb id="mysql" label="MySQL" href="/docs/sqlkit/mysql-gui-client" /> | `mysql_async` + `rustls` | `3306` | Full (`disable` to `verify-full`) | Views, procedures, functions, triggers, storage engines, `EXPLAIN FORMAT=JSON` and `ANALYZE` |
| <DocsDb id="sqlserver" label="SQL Server" href="/docs/sqlkit/sql-server-gui-client" /> | `tiberius` (TDS 7.3) | `1433` | TLS + `Trust Server Certificate` | Schemas (`dbo`), T-SQL `SHOWPLAN_TEXT` and `STATISTICS PROFILE` |
| <DocsDb id="sqlite" label="SQLite" href="/docs/sqlkit/sqlite-gui-client" /> | `rusqlite` (bundled) | Local file / `:memory:` | N/A | Open existing `.db`/`.sqlite` files, create new files, or open `:memory:` |
| <DocsDb id="sqlcipher" label="SQLCipher" href="/docs/sqlkit/sqlite-gui-client#sqlcipher" /> | `rusqlite` (`sqlcipher`) | Local file | N/A | Encrypted SQLite databases via `PRAGMA key` |
| <DocsDb id="clickhouse" label="ClickHouse" /> | Native Rust HTTP | `8123` | HTTPS / TLS | Materialized views supported; no schemas, procedures, or functions |

## 2. PostgreSQL-wire compatible (18 engines)

These profiles reuse SqlKit's native Rust PostgreSQL adapter with engine-specific default ports, default database names, and full SSL/TLS support.

| Database | Default port | Default DB / Notes |
| --- | --- | --- |
| <DocsDb id="alloydb" label="AlloyDB for PostgreSQL" /> | `5432` | Google Cloud managed PG-compatible |
| <DocsDb id="redshift" label="Amazon Redshift" /> | `5439` | Database name required |
| <DocsDb id="cloudsqlpg" label="Cloud SQL for PostgreSQL" /> | `5432` | Google Cloud managed PostgreSQL |
| <DocsDb id="cockroachdb" label="CockroachDB" /> | `5432` | Default database `defaultdb` |
| <DocsDb id="cratedb" label="CrateDB" /> | `5432` | Default database `crate` |
| <DocsDb id="enterprisedb" label="EnterpriseDB (EDB)" /> | `5432` | Database name required |
| <DocsDb id="fujitsupg" label="Fujitsu Enterprise Postgres" /> | `5432` | Enterprise PostgreSQL distribution |
| <DocsDb id="gaussdb" label="GaussDB" /> | `5432` | Distributed PG-wire enterprise engine |
| <DocsDb id="gbase" label="GBase 8c" /> | `5432` | PG-wire distributed engine |
| <DocsDb id="greenplum" label="Greenplum" /> | `5432` | MPP analytical warehouse |
| <DocsDb id="highgo" label="HighGo DB" /> | `5432` | Default database `highgo` |
| <DocsDb id="materialize" label="Materialize" /> | `5432` | Default database `materialize` |
| <DocsDb id="opengauss" label="openGauss" /> | `5432` | Open-source enterprise PG-wire engine |
| <DocsDb id="questdb" label="QuestDB" /> | `8812` | Default database `qdb` |
| <DocsDb id="timescaledb" label="TimescaleDB" /> | `5432` | Database name required |
| <DocsDb id="uxdb" label="UXDB" /> | `5432` | Default database `uxdb` |
| <DocsDb id="vastbase" label="Vastbase" /> | `5432` | Default database `vastbase` |
| <DocsDb id="yugabytedb" label="YugabyteDB" /> | `5433` | Default database `yugabyte` |

## 3. MySQL-wire compatible (13 engines)

These profiles reuse SqlKit's native Rust MySQL adapter with engine-specific default ports and full SSL/TLS support.

| Database | Default port | Notes |
| --- | --- | --- |
| <DocsDb id="doris" label="Apache Doris" /> | `9030` | Real-time OLAP (MySQL query port) |
| <DocsDb id="cloudsqlmysql" label="Cloud SQL for MySQL" /> | `3306` | Google Cloud managed MySQL |
| <DocsDb id="databend" label="Databend" /> | `3307` | Cloud data warehouse (MySQL handler port) |
| <DocsDb id="goldendb" label="GoldenDB" /> | `3306` | Distributed transactional database |
| <DocsDb id="manticore" label="Manticore Search" /> | `9306` | Full-text search engine over MySQL protocol |
| <DocsDb id="mariadb" label="MariaDB" /> | `3306` | Dedicated MariaDB formatter and profile |
| <DocsDb id="oceanbase" label="OceanBase (MySQL mode)" /> | `2883` | ODP / proxy MySQL-mode port |
| <DocsDb id="polardb" label="PolarDB" /> | `3306` | Cloud-native MySQL-compatible database |
| <DocsDb id="selectdb" label="SelectDB" /> | `9030` | Cloud-native Doris distribution |
| <DocsDb id="singlestore" label="SingleStore (MemSQL)" /> | `3306` | Distributed HTAP engine |
| <DocsDb id="starrocks" label="StarRocks" /> | `9030` | OLAP engine |
| <DocsDb id="tdsql" label="TDSQL" /> | `3306` | Distributed MySQL-compatible database |
| <DocsDb id="tidb" label="TiDB" /> | `4000` | Distributed NewSQL database |

## 4. HTTP SQL engines (4 engines)

Connect over native Rust HTTP/HTTPS without Java or JDBC:

| Database | Default port | Notes |
| --- | --- | --- |
| <DocsDb id="presto" label="Presto" /> | `8080` | Distributed SQL query engine over HTTP |
| <DocsDb id="rqlite" label="rqlite" /> | `4001` | Raft-replicated SQLite over HTTP API |
| <DocsDb id="trino" label="Trino" /> | `8080` | Distributed SQL query engine over HTTP |
| <DocsDb id="turso" label="Turso (libSQL)" /> | `443` | Edge SQLite over HTTPS with auth token |

*(ClickHouse also uses a native Rust HTTP adapter on default port `8123`.)*

## 5. JDBC Bridge engines (27 engines)

These engines run through SqlKit's shared Java subprocess (`jdbc-bridge`, backed by HikariCP connection pools). Drivers download automatically on first connection test or from **Settings → JRE & JDBC Drivers**.

| Database | Default port / target | Driver artifact | Special notes |
| --- | --- | --- | --- |
| <DocsDb id="oracle" label="Oracle Database" href="/docs/sqlkit/oracle-gui-client" /> | `1521` | `ojdbc11` | Basic (SID/Service Name), TNS (`tnsnames.ora`), Cloud Wallet, `NORMAL`/`SYSDBA`/`SYSOPER` |
| <DocsDb id="duckdb" label="DuckDB" href="/docs/sqlkit/sqlite-gui-client#duckdb" /> | File / `memory:<label>` | `duckdb_jdbc` | No SSL; Read-Write or Read-Only mode with file conflict guard |
| <DocsDb id="cassandra" label="Apache Cassandra (3.0+)" /> | `9042` | `cassandra-jdbc-wrapper` | CQL mode (see [CQL notes below](#cql-engines)) |
| <DocsDb id="scylladb" label="ScyllaDB" /> | `9042` | `cassandra-jdbc-wrapper` | CQL mode; shares bundle with Cassandra |
| <DocsDb id="snowflake" label="Snowflake" /> | `443` | `snowflake-jdbc` | Cloud data warehouse |
| <DocsDb id="bigquery" label="Google BigQuery" /> | `443` | `googlebigquery-jdbc` | Serverless warehouse |
| <DocsDb id="databricks" label="Databricks SQL" /> | `443` | `databricks-jdbc` | Lakehouse SQL warehouse |
| <DocsDb id="hive" label="Apache Hive" /> | `10000` | `hive-jdbc` (standalone) | HiveServer2 |
| <DocsDb id="kylin" label="Apache Kylin" /> | `7070` | `kylin-jdbc` | OLAP engine |
| <DocsDb id="db2" label="IBM Db2" /> | `50000` | `jcc` | Enterprise relational database |
| <DocsDb id="informix" label="IBM Informix" /> | `9088` | `jcc` | Enterprise database |
| <DocsDb id="hana" label="SAP HANA" /> | `30015` | `ngdbc` | In-memory database |
| <DocsDb id="teradata" label="Teradata" /> | `1025` | `terajdbc` | Enterprise data warehouse |
| <DocsDb id="vertica" label="Vertica" /> | `5433` | `vertica-jdbc` | Columnar analytics |
| <DocsDb id="exasol" label="Exasol" /> | `8563` | `exasol-jdbc` | In-memory analytics |
| <DocsDb id="firebird" label="Firebird" /> | `3050` | `jaybird` | Open-source relational engine |
| <DocsDb id="h2" label="H2" /> | `9092` | `h2` | Java SQL engine |
| <DocsDb id="derby" label="Apache Derby" /> | `1527` | `derbyclient` | Network Derby server |
| <DocsDb id="iris" label="InterSystems IRIS" /> | `1972` | `jdbc` | Multi-model enterprise engine |
| <DocsDb id="access" label="Microsoft Access" /> | Local `.accdb`/`.mdb` | `ucanaccess` | Local file, no SSL |
| <DocsDb id="dm8" label="Dameng (DM8)" /> | `5236` | `DmJdbcDriver8` | Enterprise relational DB |
| <DocsDb id="kingbasees" label="KingbaseES" /> | `54321` | `kingbase8` | Enterprise relational DB |
| <DocsDb id="oceanbase" label="OceanBase (Oracle mode)" /> | `2881` | `oceanbase-client` | Oracle-compatible tenant |
| <DocsDb id="gbase" label="GBase 8a" /> | `5258` | Pre-shaded bundle | Analytical cluster |
| <DocsDb id="xugudb" label="XuguDB" /> | `5138` | `xugu-jdbc` | Distributed relational DB |
| <DocsDb id="yashandb" label="YashanDB" /> | `1688` | `yashandb-jdbc` | Enterprise relational DB |
| <DocsDb id="tdengine" label="TDengine" /> | `6030` | `taos-jdbcdriver` | Time-series database |

## Managing JRE 25 & JDBC drivers {#jdbc-manager}

Open **Settings → JRE & JDBC Drivers** to manage all Java components:

- Java Runtime (JRE 25): detects an existing system JDK 25+ or installs a managed Eclipse Temurin JRE 25 under `~/.sqlkit/jre`, with update checks and one-click removal.
- JDBC Bridge JAR: stored in `~/.sqlkit/jdbc-bridge/jdbc-bridge-<version>.jar`, fetched from GitHub Releases, and restarted automatically when upgraded.
- Per-database drivers: lists all 27 JDBC drivers with install status, version, and file size so you can install, check for updates, or remove each driver individually.

::: info Custom local JARs
SqlKit pulls verified drivers from its built-in registry (Maven Central and direct release bundles). The UI does not currently support uploading custom local JAR files.
:::

## Engine-specific notes {#engine-notes}

### Cassandra & ScyllaDB (CQL) {#cql-engines}

CQL differs from relational SQL, and SqlKit adjusts its UI and parser for it:

- Keyspaces map to schemas, metadata queries `system_schema` directly, and foreign keys and views are omitted because CQL has neither.
- Connection fields include **Local Datacenter** (default `datacenter1`) and **Keyspace** (default `system`).
- CQL has no try-then-fallback TLS handshake: `prefer` connects in plaintext, while `require`, `verify-ca`, and `verify-full` enforce TLS.
- The editor splits CQL `BEGIN ... APPLY BATCH` blocks, `//` comments, and `$$` dollar quotes. Because CQL does not allow arbitrary `WHERE`, `ORDER BY`, or `OFFSET` rewriting, the table tab opens as a preview without grid-side filtering, sorting, or pagination; run explicit CQL statements in the editor instead.

### Engine capability matrix

| Feature | PostgreSQL / MySQL / SQL Server | SQLite / SQLCipher | ClickHouse | Oracle / Standard JDBC | Cassandra / ScyllaDB (CQL) |
| --- | :---: | :---: | :---: | :---: | :---: |
| Object tree & table preview | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> |
| Schemas level | PG / MSSQL: Yes · MySQL: No | <DocsCheck value="no" /> | <DocsCheck value="no" /> | <DocsCheck value="yes" /> | Keyspaces |
| Views / Procedures / Functions | <DocsCheck value="yes" /> | Views only | Materialized Views | Engine-dependent | <DocsCheck value="no" /> |
| Visual `EXPLAIN` plan | <DocsCheck value="yes" label="JSON / Showplan" /> | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> | Engine-dependent | <DocsCheck value="no" /> |
| Grid filter, sort & pagination | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> | CQL Editor only |
| Interactive ER Diagrams (Ultimate) | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> | <DocsCheck value="no" /> | Engine-dependent | <DocsCheck value="no" /> |
| Agentic Data Studio (41+ engines) | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> | <DocsCheck value="no" /> | Oracle, DuckDB, DM8 | <DocsCheck value="no" /> |

## Next steps

<DocsCardGrid :cols="3">
  <DocsCard title="PostgreSQL guide" description="Schemas, SSL verify-full, EXPLAIN JSON, and PG-compatible engines." href="/docs/sqlkit/postgresql-gui-client" icon="database" />
  <DocsCard title="MySQL guide" description="Storage engines, charsets, EXPLAIN ANALYZE, and MariaDB/TiDB." href="/docs/sqlkit/mysql-gui-client" icon="database" />
  <DocsCard title="Oracle guide" description="Basic SID/Service, TNS alias auto-parse, Cloud Wallet, and SYSDBA." href="/docs/sqlkit/oracle-gui-client" icon="database" />
</DocsCardGrid>
