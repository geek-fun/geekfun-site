---
title: Microsoft SQL Server GUI Client for macOS, Windows & Linux | SqlKit
description: Connect to Microsoft SQL Server and Azure SQL with SqlKit's native Rust TDS 7.3 driver (tiberius). Configure encryption, Trust Server Certificate, schemas like dbo, and T-SQL SHOWPLAN.
outline: [2, 3]
---

# Microsoft SQL Server

<DocsBadge variant="native">Native Rust Driver (TDS 7.3)</DocsBadge> <DocsBadge variant="community">Community</DocsBadge>

SqlKit connects to Microsoft SQL Server and Azure SQL Database over TCP using the Rust `tiberius` driver (TDS 7.3 + `rustls`), with no ODBC driver or Java runtime required on macOS, Windows, or Linux.

## Connect to SQL Server

<DocsSteps>

### Open New Connection and pick SQL Server

Open **Connections → Add New Connection** (<kbd>⌘</kbd>+<kbd>N</kbd> / <kbd>Ctrl</kbd>+<kbd>N</kbd>) and select **SQL Server**.

### Enter instance & login credentials

| Field | Typical value | Notes |
| --- | --- | --- |
| Host | Hostname or IP | Enter the host without `\INSTANCENAME` |
| Port | `1433` | Default instance uses `1433`. For named instances, enter that instance's TCP port. |
| Database | Target database name | Optional default database (such as `master` or your app DB) |
| Username / Password | SQL Server login | Uses SQL Server authentication |

### Configure TLS & Trust Server Certificate

Under **Advanced → SSL/TLS**, match the encryption requirements of your instance. Turn on **Trust Server Certificate** only when your administrator requires connecting to an internal or development server with a self-signed certificate. For Azure SQL Database or production servers with trusted certificates, keep it off.

### Test, save, and verify the T-SQL session

Click **Test Connection**, save, and open **Queries**. Check your active database and login:

```sql
SELECT
  DB_NAME() AS active_database,
  SCHEMA_NAME() AS default_schema,
  SUSER_SNAME() AS login_name,
  @@VERSION AS server_version;
```

</DocsSteps>

## SQL Server support in SqlKit

- Databases expand into schemas (`dbo`, `sales`, `hr`, and custom schemas), then tables, views, stored procedures, and functions, plus table Indexes, Foreign Keys, and Triggers.
- Monaco uses `mssql` autocomplete and `tsql` formatting (<kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> / <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd>).
- Pressing <kbd>F6</kbd> runs `SET SHOWPLAN_TEXT ON` (EXPLAIN) or `SET STATISTICS PROFILE ON` (EXPLAIN ANALYZE) in Tree, Summary, and Raw views.
- With Ultimate <DocsBadge variant="ultimate">Ultimate</DocsBadge>, plot foreign keys in ER Diagrams, import or export Excel `.xlsx` and CSV files, or query SQL Server from Agentic Data Studio and MCP.

## Troubleshooting SQL Server connections

| Symptom | What to check |
| --- | --- |
| Connection timed out | Open SQL Server Configuration Manager on the server and confirm TCP/IP is enabled for the instance, the service listens on the expected static TCP port, and firewall rules allow traffic. |
| Named instance port unknown | SqlKit connects over a direct TCP port (it does not query UDP SQL Browser on port `1434`). Ask your DBA for the instance's static TCP port, or check `IPAll → TCP Port` in SQL Server Configuration Manager. |
| Login failed for user | Confirm Mixed Mode (SQL Server and Windows Authentication) is enabled on the server and the login is mapped to the target database. |
| TLS certificate validation error | Check the certificate hostname and CA chain, or enable **Trust Server Certificate** in **Advanced** for a self-signed internal server. |

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard title="SSH tunnels" description="Connect to SQL Server inside private subnets via SSH jump hosts." href="/docs/sqlkit/ssh-tunnel" badge="Ultimate" badge-variant="ultimate" icon="lock" />
  <DocsCard title="SQL editor & execution plans" description="Format T-SQL, run selections, and inspect SHOWPLAN trees." href="/docs/sqlkit/query-editor" icon="code" />
</DocsCardGrid>
