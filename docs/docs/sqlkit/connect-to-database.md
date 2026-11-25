---
title: Connect to a SQL Database in SqlKit | Ports, SSL/TLS & Recovery
description: Configure TCP, local file, HTTP, and JDBC database connections in SqlKit. Learn all 5 SSL/TLS modes, timeouts, Connection Guardian auto-recovery, and troubleshooting.
outline: [2, 3]
---

# Connections, SSL/TLS & recovery

SqlKit stores all connection profiles locally on your machine and connects directly from your desktop (or through an [SSH tunnel](/docs/sqlkit/ssh-tunnel)) without routing credentials through any cloud proxy.

## Add and test a connection {#add-and-test-a-connection}

<DocsSteps>

### Open the New Connection dialog

In the **Connections** workspace, click the **`+`** button (or press <kbd>⌘</kbd>+<kbd>N</kbd> on macOS / <kbd>Ctrl</kbd>+<kbd>N</kbd> on Windows & Linux) to open the connection modal.

<DocsFigure src="/sqlkit-connect-to-database.png" alt="SqlKit New Connection dialog showing Basic and Advanced tabs" caption="The connection dialog separates core server details (Basic) from TLS, SSH tunneling, and AI controls (Advanced)." :width="3264" :height="2222" />

### Fill in the Basic tab

1. Enter a **Connection Name** to identify this environment in your workspace.
2. Pick a **Database Type** from the searchable selector (the 7 most common engines are pinned at the top; all 68 profiles are searchable by name).
3. Enter the **Host**, **Port** (auto-filled with the engine's default), **Database / Keyspace**, **Username**, and **Password**—or choose a local file path for SQLite, SQLCipher, DuckDB, or Microsoft Access.
4. Adjust **Connect Timeout** (default `10s`) and **Query Timeout** (default `30s`) if you connect over high-latency links.

### Configure the Advanced tab (optional)

- **SSL/TLS**: choose encryption mode and optional CA/client certificate files.
- **SSH Tunnel** <DocsBadge variant="ultimate">Ultimate</DocsBadge>: attach one or more reusable SSH profiles to form a single-hop or multi-hop jump chain.
- **AI Permissions & Context Prompt** <DocsBadge variant="ultimate">Ultimate</DocsBadge>: override default AI access rules for this connection and optionally attach domain-specific instructions for Agentic Data Studio.

### Test, save, and connect

Click **Test Connection** to verify network reachability, authentication, TLS certificates, and (for JDBC profiles) JRE/driver readiness. Once the test passes, click **Create Connection** and double-click the card to open the **Queries** workspace.

</DocsSteps>

### Managing your connection list

- Switch between **Grid View** and **List View** in the Connections toolbar.
- Filter saved connections by name, host, or database engine using the search bar.
- Monitor live connection status indicators and active connection counts at a glance.

## Choose a connection type {#choose-a-connection-type}

Always override the default port if your database server or cloud provider listens on a custom port.

| Database | Driver | Default port / target | Key fields |
| --- | --- | --- | --- |
| [PostgreSQL](/docs/sqlkit/postgresql-gui-client) | <DocsBadge variant="native">Native Rust</DocsBadge> | `5432` | Host, port, database name, role & password |
| [MySQL](/docs/sqlkit/mysql-gui-client) | <DocsBadge variant="native">Native Rust</DocsBadge> | `3306` | Host, port, user & password, optional default database |
| [SQL Server](/docs/sqlkit/sql-server-gui-client) | <DocsBadge variant="native">Native Rust</DocsBadge> | `1433` | Host, instance TCP port, SQL login, database, `Trust Server Certificate` |
| [Oracle Database](/docs/sqlkit/oracle-gui-client) | <DocsBadge variant="jdbc">JDBC</DocsBadge> | `1521` | Basic (SID / Service Name), TNS (`tnsnames.ora`), or Cloud Wallet + Role (`NORMAL` / `SYSDBA` / `SYSOPER`) |
| [SQLite / SQLCipher](/docs/sqlkit/sqlite-gui-client) | <DocsBadge variant="native">Native Rust</DocsBadge> | Local file / `:memory:` | File path (open existing or create new); encryption key for SQLCipher |
| [DuckDB](/docs/sqlkit/sqlite-gui-client#duckdb) | <DocsBadge variant="jdbc">JDBC</DocsBadge> | Local file / `memory:<label>` | File path + **Read-Write** or **Read-Only** access mode |
| MariaDB / TiDB / Doris / StarRocks | <DocsBadge variant="native">MySQL-wire</DocsBadge> | `3306` / `4000` / `9030` | Select the matching engine profile for dialect & default port |
| CockroachDB / Redshift / TimescaleDB | <DocsBadge variant="native">PG-wire</DocsBadge> | `5432` / `5439` | Select the matching engine profile and target database |
| ClickHouse / Trino / Presto / Turso | <DocsBadge variant="http">HTTP SQL</DocsBadge> | `8123` / `8080` / `443` | HTTP/HTTPS host, port, credentials or token |
| Cassandra / ScyllaDB | <DocsBadge variant="jdbc">JDBC (CQL)</DocsBadge> | `9042` | Host, port, **Local Datacenter** (default `datacenter1`), **Keyspace** |

See [Supported databases and JDBC drivers](/docs/sqlkit/supported-databases) for the full 68-engine catalog.

## SSL / TLS encryption

SqlKit supports five standard SSL/TLS modes under **Advanced → SSL/TLS** for all network databases (the SSL section is automatically hidden for embedded file engines: SQLite, SQLCipher, DuckDB, and Microsoft Access).

| SSL Mode | Encrypts traffic? | Verifies CA chain? | Verifies hostname? | When to use |
| --- | :---: | :---: | :---: | --- |
| **`disable`** | No | No | No | Local development or isolated loopback |
| **`prefer`** *(default)* | Attempts TLS, falls back to plaintext | No | No | General compatibility (except CQL — see note below) |
| **`require`** | Yes | No | No | Encrypted transit without strict CA verification |
| **`verify-ca`** | Yes | Yes (requires CA cert) | No | Self-signed / enterprise CA where hostname differs (e.g., via SSH tunnel) |
| **`verify-full`** | Yes | Yes (requires CA cert) | Yes | Production cloud databases (AWS RDS, Cloud SQL, Neon, Supabase, Azure) |

### Custom certificates & engine notes

- **Certificate files**: provide local paths for **CA Certificate**, **Client Certificate**, and **Client Private Key** (for mutual TLS / mTLS). Modes `verify-ca` and `verify-full` require a CA certificate file.
- **SQL Server**: exposes a dedicated **Trust Server Certificate** toggle for servers using self-signed TLS certificates.
- **Cassandra & ScyllaDB (CQL)**: the CQL native protocol does not negotiate TLS fallback. Selecting `prefer` automatically connects in plaintext to avoid timeouts against non-TLS clusters; choose `require`, `verify-ca`, or `verify-full` when your cluster enforces TLS.

## Java and JDBC drivers {#java-and-jdbc-drivers}

All 27 JDBC engines (including Oracle, DuckDB, Snowflake, BigQuery, Databricks, DB2, SAP HANA, Firebird, Cassandra, ScyllaDB, and Dameng DM8) run through SqlKit's shared Java subprocess (`jdbc-bridge`, backed by HikariCP pools).

When you click **Test Connection** on a JDBC profile, SqlKit displays a live **3-step setup check**:

1. **JRE 25 Runtime** — detects a compatible system JDK 25+ or downloads a managed **Eclipse Temurin JRE 25** from Adoptium into `~/.sqlkit/jre`.
2. **JDBC Bridge** — downloads `jdbc-bridge-<version>.jar` from GitHub Releases into `~/.sqlkit/jdbc-bridge/`.
3. **Database Driver** — downloads the official engine driver from Maven Central or its pre-shaded release bundle.

Open **Settings → JRE & JDBC Drivers** anytime to inspect installed versions, file sizes, check for updates, pre-download drivers, or remove unused components.

::: warning Restricted or air-gapped networks
Automatic downloads require outbound HTTPS access to Adoptium, GitHub Releases, and Maven Central (or the vendor bundle URL). If your corporate firewall blocks those hosts, verify network access or configure system networking before retrying the test in **Settings → JRE & JDBC Drivers**.
:::

## Connection Guardian & auto-recovery

Idle connections behind NAT gateways, cloud load balancers, or laptop sleep cycles inevitably drop. SqlKit runs a background **Connection Guardian** across native, HTTP, and JDBC adapters:

- Monitors connection health and detects transport-level failures automatically.
- Transparently performs a **one-shot session replacement** when a broken socket is encountered.
- **Never blindly replays write queries** during recovery—if a failure happens mid-write, SqlKit surfaces the error cleanly so you can confirm state before retrying.

## Troubleshoot a failed connection {#troubleshoot-a-failed-connection}

| Symptom | Likely cause & what to check |
| --- | --- |
| **Connection refused or timed out** | Confirm the server is listening on that host and port, firewall / cloud security group allows your IP, and VPN is active. If the database is in a private subnet, configure an [SSH tunnel](/docs/sqlkit/ssh-tunnel) (Ultimate). |
| **Authentication failed** | Verify username, password, authentication plugin, and allowed client host (for MySQL `'user'@'host'` or PostgreSQL `pg_hba.conf`). |
| **TLS / certificate error** | Match the server's required SSL mode in **Advanced**. For `verify-full`, confirm the CA certificate matches the server chain and the hostname matches the certificate's SAN/CN. |
| **JDBC test fails during download** | Open **Settings → JRE & JDBC Drivers**, check which step failed (JRE, Bridge, or Driver), verify outbound HTTPS access, and retry. |
| **DuckDB file access conflict** | DuckDB cannot open the same file simultaneously in Read-Write and Read-Only mode across saved connections. SqlKit flags conflicting access modes in the dialog—align both connections to Read-Only or close the conflicting session. |
| **Connected, but tables are missing** | Select the target database and schema in **Queries**, refresh the object tree, and verify your database role has `USAGE` / `SELECT` / metadata privileges. |

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
