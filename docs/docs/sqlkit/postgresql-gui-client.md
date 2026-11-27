---
title: PostgreSQL GUI Client for macOS, Windows & Linux | SqlKit
description: Connect to PostgreSQL and 18 PG-wire databases with SqlKit's native Rust driver. Configure SSL/TLS verify-full, navigate schemas, run EXPLAIN (FORMAT JSON), and troubleshoot roles.
outline: [2, 3]
---

# PostgreSQL & PG-compatible databases

<DocsBadge variant="native">Native Rust Driver</DocsBadge> <DocsBadge variant="community">Community</DocsBadge>

SqlKit connects to PostgreSQL natively through `tokio-postgres`, `deadpool-postgres`, and `rustls`, with no Java runtime or external binaries required. The same adapter handles 18 PostgreSQL-wire compatible engines, including CockroachDB, Amazon Redshift, TimescaleDB, YugabyteDB, AlloyDB, Cloud SQL, Greenplum, openGauss, and GaussDB.

## Connect to PostgreSQL

<DocsSteps>

### Open New Connection and pick PostgreSQL

Open **Connections → Add New Connection** (<kbd>⌘</kbd>+<kbd>N</kbd> / <kbd>Ctrl</kbd>+<kbd>N</kbd>) and select **PostgreSQL** (or a dedicated PG-compatible profile such as Amazon Redshift, CockroachDB, TimescaleDB, or YugabyteDB).

### Enter server & role details

| Field | Typical value | Notes |
| --- | --- | --- |
| Host | `localhost` or cloud endpoint | Enter the internal host when connecting through an [SSH tunnel](/docs/sqlkit/ssh-tunnel) |
| Port | `5432` | Redshift defaults to `5439`, YugabyteDB `5433`, QuestDB `8812` |
| Database | `postgres` or app database | Required for PostgreSQL, Redshift, TimescaleDB, and EDB |
| Username / Password | PostgreSQL role credentials | Stored locally on your machine |

### Match your server's SSL / TLS settings

In **Advanced → SSL/TLS**, pick the mode required by your provider. Use `verify-full` with your provider's CA certificate for AWS RDS, Google Cloud SQL, Neon, Supabase, and Azure Database for PostgreSQL. Use `verify-ca` when connecting through an SSH tunnel or private IP where the hostname differs from the certificate SAN. Attach a **Client Certificate** and **Client Private Key** if your cluster requires mTLS.

### Test, save, and verify the session

Click **Test Connection**, save the profile, and open **Queries**. Run a quick check:

```sql
SELECT
  current_database() AS active_database,
  current_schema() AS active_schema,
  current_user AS active_role,
  version();
```

</DocsSteps>

## PostgreSQL support in SqlKit

- The object tree expands databases into schemas (such as `public` or `analytics`), then tables, views, stored procedures, and functions, plus table Indexes, Foreign Keys, and Triggers.
- Monaco uses `pgsql` autocomplete, `postgresql` dialect formatting (`Shift+Option/Alt+F`), and handles `$$...$$` dollar-quoted blocks in functions and `DO` blocks.
- Pressing <kbd>F6</kbd> runs `EXPLAIN (FORMAT JSON)` or `EXPLAIN (ANALYZE, FORMAT JSON)` and displays an operator cost tree with the most expensive node marked, alongside Summary and Raw JSON views.
- **Create Database** includes PostgreSQL **Encoding** and **Locale** options.
- With Ultimate <DocsBadge variant="ultimate">Ultimate</DocsBadge>, plot foreign keys across schemas in ER Diagrams, or attach PostgreSQL to Agentic Data Studio and MCP with AST-guarded read-only queries (blocks data-modifying CTEs such as `WITH ... DELETE`).

## Working with schemas & `search_path`

`current_schema()` returns the first existing schema on your session's `search_path` (commonly `public`). When tables with the same name exist across multiple schemas, or when querying a non-default schema, qualify the table name explicitly:

```sql
SELECT *
FROM reporting.orders
ORDER BY created_at DESC
LIMIT 100;
```

## PostgreSQL-compatible engines

Pick the dedicated engine profile so SqlKit sets the right default port and database name:

<!--@include: @/.vitepress/includes/sqlkit-databases.md#postgresql-->

## Troubleshooting PostgreSQL connections

| Symptom | What to check |
| --- | --- |
| Connected, but no tables appear | Expand the intended database and schema in **Queries** and refresh the tree. If queries return `permission denied for schema`, ask your DBA for `USAGE` on the schema and `SELECT` on its tables. |
| `pg_hba.conf` / authentication rejected | Check your role password, client IP allowlist, and whether the server mandates `sslmode=require` or `verify-full` in `pg_hba.conf`. |
| SSL certificate verification failed | Download your cloud provider's root CA bundle and set it in **Advanced → SSL/TLS → CA Certificate**. |
| Dollar-quoted function split incorrectly | Check for matching `$$` or `$tag$` delimiters. SqlKit's statement scanner parses `$$...$$` blocks natively. |

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard title="SQL editor & EXPLAIN plans" description="Run visual EXPLAIN (FORMAT JSON) trees and format PostgreSQL queries." href="/docs/sqlkit/query-editor" icon="code" />
  <DocsCard title="Schema browser & ER diagrams" description="Inspect PostgreSQL schemas, foreign keys, triggers, and ER graphs." href="/docs/sqlkit/schema-and-er-diagrams" icon="layers" />
</DocsCardGrid>
