---
title: MySQL GUI Client for macOS, Windows & Linux | SqlKit
description: Connect to MySQL, MariaDB, TiDB, Doris, StarRocks, and 13 MySQL-wire databases with SqlKit's native Rust driver. Configure TLS, storage engines, charsets, and EXPLAIN FORMAT=JSON.
outline: [2, 3]
---

# MySQL & MySQL-compatible databases

<DocsBadge variant="native">Native Rust Driver</DocsBadge> <DocsBadge variant="community">Community</DocsBadge>

SqlKit connects to MySQL natively via `mysql_async` + `rustls` with no Java runtime required. The same fast adapter supports **13 MySQL-wire compatible engines** including MariaDB, TiDB, OceanBase (MySQL mode), PolarDB, TDSQL, Apache Doris, SelectDB, StarRocks, Databend, SingleStore, GoldenDB, Cloud SQL for MySQL, and Manticore Search.

## Connect to MySQL

<DocsSteps>

### Open New Connection and select MySQL

Open **Connections → Add New Connection** (<kbd>⌘</kbd>+<kbd>N</kbd> / <kbd>Ctrl</kbd>+<kbd>N</kbd>) and select **MySQL**—or choose the specific MySQL-compatible profile (such as **MariaDB**, **TiDB**, **Apache Doris**, or **StarRocks**) for the right default port and formatter dialect.

### Enter server & credential fields

| Field | Typical value | Notes |
| --- | --- | --- |
| **Host** | `127.0.0.1` or server hostname | Use the internal host if tunneling via [SSH](/docs/sqlkit/ssh-tunnel) |
| **Port** | `3306` | TiDB defaults to `4000`, Doris/StarRocks/SelectDB `9030`, OceanBase `2883`, Databend `3307`, Manticore `9306` |
| **Database** | Optional | Leave blank to browse all permitted databases, or specify a default database |
| **Username / Password** | MySQL account credentials | Stored locally on your machine |

### Configure SSL / TLS (if required)

Under **Advanced → SSL/TLS**, pick `require`, `verify-ca`, or `verify-full` and attach your CA certificate (and optional client certificate/key for mTLS) when connecting to AWS RDS/Aurora, PlanetScale, Cloud SQL, or Alibaba RDS.

### Test, save, and verify the session

Click **Test Connection**, save, and open **Queries**. Verify the active database and server version:

```sql
SELECT
  DATABASE() AS active_database,
  VERSION() AS server_version,
  CURRENT_USER() AS active_user;
```

If `active_database` is `NULL`, choose a database from the sidebar selector or execute `USE your_database;`.

</DocsSteps>

## MySQL features in SqlKit

- **Flat database browsing**: MySQL databases map directly to tables, views, stored procedures, and functions without an unnecessary extra schema layer.
- **Visual Create Database & Create Table**:
  - **Create Database** exposes MySQL **Charset** (e.g., `utf8mb4`) and **Collation** selectors.
  - **Create Table** includes a **Storage Engine** selector (`InnoDB`, `MyISAM`, `MEMORY`, `CSV`, `ARCHIVE`, `BLACKHOLE`) with live `CREATE TABLE` DDL preview.
- **Dialect-aware editing & formatting**: `mysql` autocomplete plus dedicated `mysql`, `mariadb`, and `tidb` SQL formatters (<kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> / <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd>).
- **Visual `EXPLAIN FORMAT=JSON` & `EXPLAIN ANALYZE`**: press <kbd>F6</kbd> to inspect MySQL execution plans in interactive Tree, Summary, and Raw views.
- **ER Diagrams & Transfer** <DocsBadge variant="ultimate">Ultimate</DocsBadge>: map `InnoDB` foreign keys visually and bulk-import/export CSV, JSONL, SQL, or Excel files.

## MySQL-compatible engines

Pick the exact profile in **Add New Connection** for accurate default ports and SQL formatting:

<!--@include: @/.vitepress/includes/sqlkit-databases.md#mysql-->

## Troubleshooting MySQL connections

| Symptom | What to check |
| --- | --- |
| **`Access denied for user 'name'@'host'`** | MySQL binds grants to both username **and** client host. Confirm your account allows logins from your client IP (or the bastion's private IP when using an SSH tunnel). |
| **Connection timed out** | Check `bind-address` in `my.cnf`, firewall/security group rules on port `3306` (or custom port), and VPN/SSH tunnel configuration. |
| **TLS handshake error** | Match the server's `require_secure_transport` setting under **Advanced → SSL/TLS** and verify the CA certificate bundle. |
| **ER diagram shows no arrows** | MySQL `MyISAM` tables and unindexed logical joins do not store foreign keys—ER edges require declared `FOREIGN KEY` constraints (typically on `InnoDB`). |

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard title="Schema browser & Create Table" description="Design InnoDB tables visually with live DDL preview and inspect indexes." href="/docs/sqlkit/schema-and-er-diagrams" icon="layers" />
  <DocsCard title="Bulk import & export" description="Load CSV or Excel into MySQL with Upsert, Skip, Replace, or Dry Run." href="/docs/sqlkit/import-export" badge="Ultimate" badge-variant="ultimate" icon="upload" />
</DocsCardGrid>
