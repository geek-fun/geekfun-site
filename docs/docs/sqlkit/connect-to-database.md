---
title: Connect to a SQL Database in SqlKit | Ports, SSL/TLS & Recovery
description: Configure TCP, local file, HTTP, and JDBC database connections in SqlKit. Covers all 5 SSL/TLS modes, timeouts, Connection Guardian auto-recovery, and troubleshooting.
outline: [2, 3]
---

# Connections, SSL/TLS & recovery

SqlKit stores connection profiles locally and connects straight from your machine (or through an [SSH tunnel](/docs/sqlkit/ssh-tunnel)) with no cloud proxy in between.

## Add and test a connection {#add-and-test-a-connection}

<DocsSteps>

### Open the New Connection dialog

In **Connections**, click **`+`** (or press <kbd>⌘</kbd>+<kbd>N</kbd> on macOS, <kbd>Ctrl</kbd>+<kbd>N</kbd> on Windows and Linux).

<DocsFigure src="/sqlkit-connect-to-database.png" alt="SqlKit New Connection dialog showing Basic and Advanced tabs" caption="The connection dialog splits core server fields (Basic) from TLS, SSH tunneling, and AI settings (Advanced)." :width="3264" :height="2222" />

### Fill in the Basic tab

1. Enter a **Connection Name** to identify the database in your workspace.
2. Pick a **Database Type** from the searchable selector (the 7 most common engines stay pinned at the top; all 68 profiles are searchable by name).
3. Enter **Host**, **Port** (prefilled with the engine default), **Database / Keyspace**, **Username**, and **Password**, or pick a local file path for SQLite, SQLCipher, DuckDB, or Microsoft Access.
4. Adjust **Connect Timeout** (default `10s`) and **Query Timeout** (default `30s`) for slow networks.

### Configure the Advanced tab (optional)

Set SSL/TLS encryption and optional CA or client certificate files. With Ultimate <DocsBadge variant="ultimate">Ultimate</DocsBadge>, you can also attach one or more reusable SSH profiles for a single-hop or multi-hop jump chain, override default AI permissions for the connection, and add a connection-specific context prompt for Agentic Data Studio.

### Test, save, and connect

Click **Test Connection** to check network reachability, authentication, TLS certificates, and (for JDBC profiles) JRE and driver readiness. Once it passes, click **Create Connection** and double-click the card to open **Queries**.

</DocsSteps>

In the **Connections** toolbar, switch between Grid View and List View, filter saved connections by name, host, or engine, and check active connection status and counts.

## Choose a connection type {#choose-a-connection-type}

Replace the default port if your server or cloud provider listens on a custom port.

| Database | Driver | Default port / target | Key fields |
| --- | --- | --- | --- |
| [PostgreSQL](/docs/sqlkit/postgresql-gui-client) | <DocsBadge variant="native">Native Rust</DocsBadge> | `5432` | Host, port, database name, role and password |
| [MySQL](/docs/sqlkit/mysql-gui-client) | <DocsBadge variant="native">Native Rust</DocsBadge> | `3306` | Host, port, user and password, optional default database |
| [SQL Server](/docs/sqlkit/sql-server-gui-client) | <DocsBadge variant="native">Native Rust</DocsBadge> | `1433` | Host, instance TCP port, SQL login, database, `Trust Server Certificate` |
| [Oracle Database](/docs/sqlkit/oracle-gui-client) | <DocsBadge variant="jdbc">JDBC</DocsBadge> | `1521` | Basic (SID or Service Name), TNS (`tnsnames.ora`), or Cloud Wallet plus Role (`NORMAL`, `SYSDBA`, `SYSOPER`) |
| [SQLite / SQLCipher](/docs/sqlkit/sqlite-gui-client) | <DocsBadge variant="native">Native Rust</DocsBadge> | Local file / `:memory:` | File path (open existing or create new); encryption key for SQLCipher |
| [DuckDB](/docs/sqlkit/sqlite-gui-client#duckdb) | <DocsBadge variant="jdbc">JDBC</DocsBadge> | Local file / `memory:<label>` | File path plus **Read-Write** or **Read-Only** access mode |
| MariaDB / TiDB / Doris / StarRocks | <DocsBadge variant="native">MySQL-wire</DocsBadge> | `3306` / `4000` / `9030` | Pick the matching engine profile for dialect and default port |
| CockroachDB / Redshift / TimescaleDB | <DocsBadge variant="native">PG-wire</DocsBadge> | `5432` / `5439` | Pick the matching engine profile and target database |
| ClickHouse / Trino / Presto / Turso | <DocsBadge variant="http">HTTP SQL</DocsBadge> | `8123` / `8080` / `443` | HTTP/HTTPS host, port, credentials or token |
| Cassandra / ScyllaDB | <DocsBadge variant="jdbc">JDBC (CQL)</DocsBadge> | `9042` | Host, port, **Local Datacenter** (default `datacenter1`), **Keyspace** |

See [Supported databases and JDBC drivers](/docs/sqlkit/supported-databases) for all 68 engines.

## SSL / TLS encryption

Network databases support five SSL/TLS modes under **Advanced → SSL/TLS**. Embedded file engines (SQLite, SQLCipher, DuckDB, and Microsoft Access) hide the SSL section.

| SSL Mode | Encrypts traffic | Verifies CA chain | Verifies hostname | When to use |
| --- | :---: | :---: | :---: | --- |
| `disable` | <DocsCheck value="no" /> | <DocsCheck value="no" /> | <DocsCheck value="no" /> | Local development or isolated loopback |
| `prefer` *(default)* | Attempts TLS, falls back to plaintext | <DocsCheck value="no" /> | <DocsCheck value="no" /> | General compatibility (except CQL; see below) |
| `require` | <DocsCheck value="yes" /> | <DocsCheck value="no" /> | <DocsCheck value="no" /> | Encrypted transit without strict CA verification |
| `verify-ca` | <DocsCheck value="yes" /> | <DocsCheck value="yes" label="CA cert" /> | <DocsCheck value="no" /> | Self-signed or enterprise CA where hostname differs (such as over an SSH tunnel) |
| `verify-full` | <DocsCheck value="yes" /> | <DocsCheck value="yes" label="CA cert" /> | <DocsCheck value="yes" /> | Production cloud databases (AWS RDS, Cloud SQL, Neon, Supabase, Azure) |

### Custom certificates & engine notes

Provide local paths for **CA Certificate**, **Client Certificate**, and **Client Private Key** when your server requires mutual TLS (mTLS). Modes `verify-ca` and `verify-full` require a CA certificate file.

SQL Server adds a **Trust Server Certificate** toggle for servers using self-signed TLS certificates.

Cassandra and ScyllaDB (CQL) have no TLS fallback handshake. Selecting `prefer` connects in plaintext to avoid timeouts against non-TLS clusters; select `require`, `verify-ca`, or `verify-full` when your cluster enforces TLS.

## Java and JDBC drivers {#java-and-jdbc-drivers}

All 27 JDBC engines (including Oracle, DuckDB, Snowflake, BigQuery, Databricks, DB2, SAP HANA, Firebird, Cassandra, ScyllaDB, and Dameng DM8) run through SqlKit's shared Java subprocess (`jdbc-bridge`, backed by HikariCP pools).

Clicking **Test Connection** on a JDBC profile runs a 3-step setup check:

1. **JRE 25 Runtime**: detects a system JDK 25+ or downloads a managed Eclipse Temurin JRE 25 from Adoptium into `~/.sqlkit/jre`.
2. **JDBC Bridge**: downloads `jdbc-bridge-<version>.jar` from GitHub Releases into `~/.sqlkit/jdbc-bridge/`.
3. **Database Driver**: downloads the engine driver from Maven Central or its pre-shaded release bundle.

Open **Settings → JRE & Drivers** anytime to check installed versions and sizes, check for updates, download drivers ahead of time, or remove unused components.

<DocsFigure src="/sqlkit-settings-drivers.png" alt="SqlKit Settings JRE & Drivers tab showing managed JRE 25, Bridge JAR, and installed JDBC drivers for Apache Cassandra, DuckDB, GBase 8a, KingbaseES, and Oracle Database" caption="Settings → JRE & Drivers tracks the managed JRE 25 runtime, Bridge JAR, and per-engine JDBC driver versions, sizes, and updates." :width="3842" :height="2306" />

::: warning Restricted or air-gapped networks
Automatic downloads require outbound HTTPS access to Adoptium, GitHub Releases, and Maven Central (or the vendor bundle URL). If your firewall blocks those hosts, allow access before retrying in **Settings → JRE & JDBC Drivers**.
:::

## Connection Guardian & auto-recovery

Idle connections behind NAT gateways, cloud load balancers, or sleeping laptops drop regularly. SqlKit runs a background **Connection Guardian** across native, HTTP, and JDBC adapters to watch connection health and replace a broken socket in one shot when needed. It never replays write queries during recovery; if a write fails mid-flight, SqlKit reports the error so you can check database state before retrying.

## Troubleshoot a failed connection {#troubleshoot-a-failed-connection}

| Symptom | Likely cause and what to check |
| --- | --- |
| Connection refused or timed out | Confirm the server is listening on that host and port, firewall or cloud security group allows your IP, and VPN is active. For private subnets, set up an [SSH tunnel](/docs/sqlkit/ssh-tunnel) (Ultimate). |
| Authentication failed | Check username, password, authentication plugin, and allowed client host (MySQL `'user'@'host'` or PostgreSQL `pg_hba.conf`). |
| TLS / certificate error | Match the server's required SSL mode in **Advanced**. For `verify-full`, confirm the CA certificate matches the server chain and the hostname matches the certificate SAN/CN. |
| JDBC test fails during download | Open **Settings → JRE & JDBC Drivers**, check whether JRE, Bridge, or Driver failed, confirm outbound HTTPS access, and retry. |
| DuckDB file access conflict | DuckDB cannot open the same file in Read-Write and Read-Only mode at once across saved connections. SqlKit flags conflicting modes in the dialog; align both connections to Read-Only or close the conflicting session. |
| Connected, but tables are missing | Select the target database and schema in **Queries**, refresh the object tree, and confirm your role has `USAGE`, `SELECT`, and metadata privileges. |

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard
    title="Set up an SSH tunnel"
    description="Reach private databases through single-hop or multi-hop jump hosts."
    href="/docs/sqlkit/ssh-tunnel"
    badge="Ultimate"
    badge-variant="ultimate"
    icon="lock"
  />
  <DocsCard
    title="Run your first query"
    description="Open the Monaco SQL editor, run a read-only check, and explore results."
    href="/docs/sqlkit/query-editor"
    icon="code"
  />
</DocsCardGrid>
