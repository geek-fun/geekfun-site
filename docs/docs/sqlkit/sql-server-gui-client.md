---
title: Microsoft SQL Server GUI Client for macOS, Windows & Linux | SqlKit
description: Connect to Microsoft SQL Server and Azure SQL with SqlKit's native Rust TDS 7.3 driver (tiberius). Configure encryption, Trust Server Certificate, schemas like dbo, and T-SQL SHOWPLAN.
outline: [2, 3]
---

# Microsoft SQL Server

<DocsBadge variant="native">Native Rust Driver (TDS 7.3)</DocsBadge> <DocsBadge variant="community">Community</DocsBadge>

SqlKit connects natively to **Microsoft SQL Server** and **Azure SQL Database** over TCP using the Rust `tiberius` driver (TDS 7.3 + `rustls`)—requiring no ODBC driver installation or Java runtime on macOS, Windows, or Linux.

## Connect to SQL Server

<DocsSteps>

### Open New Connection and pick SQL Server

Open **Connections → Add New Connection** (<kbd>⌘</kbd>+<kbd>N</kbd> / <kbd>Ctrl</kbd>+<kbd>N</kbd>) and select **SQL Server**.

### Enter instance & login credentials

| Field | Typical value | Notes |
| --- | --- | --- |
| **Host** | Hostname or IP | Enter the host without `\INSTANCENAME` |
| **Port** | `1433` | Default instance uses `1433`. For named instances, enter the specific TCP port assigned to that instance. |
| **Database** | Target database name | Optional default database (e.g., `master` or your app DB) |
| **Username / Password** | SQL Server login | Uses SQL Server authentication |

### Configure TLS & Trust Server Certificate

Under **Advanced → SSL/TLS**, configure encryption to match your SQL Server instance:
- Enable **Trust Server Certificate** only when your administrator requires connecting to an internal or development instance with a self-signed certificate.
- For **Azure SQL Database** or production instances with trusted certificates, keep **Trust Server Certificate** off and use strict TLS verification.

### Test, save, and verify the T-SQL session

Click **Test Connection**, save, and open **Queries**. Verify your active database and login:

```sql
SELECT
  DB_NAME() AS active_database,
  SCHEMA_NAME() AS default_schema,
  SUSER_SNAME() AS login_name,
  @@VERSION AS server_version;
```

</DocsSteps>

## SQL Server features in SqlKit

- **Schema browsing (`dbo` & custom schemas)**: expand databases → schemas (`dbo`, `sales`, `hr`, etc.) → tables, views, stored procedures, and functions, plus table **Indexes**, **Foreign Keys**, and **Triggers**.
- **T-SQL editing & formatting**: `mssql` schema-aware autocomplete and `tsql` dialect formatting (<kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> / <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd>).
- **Visual T-SQL Execution Plans**: press <kbd>F6</kbd> to run `SET SHOWPLAN_TEXT ON` (**EXPLAIN**) or `SET STATISTICS PROFILE ON` (**EXPLAIN ANALYZE**) and inspect the plan in Tree, Summary, and Raw views.
- **Data editing, ER Diagrams & AI** <DocsBadge variant="ultimate">Ultimate</DocsBadge>: edit rows via primary keys, visualize foreign keys in ER diagrams, export/import Excel `.xlsx` & CSV, or query with Agentic Data Studio and MCP.

## Troubleshooting SQL Server connections

| Symptom | What to check |
| --- | --- |
| **Connection timed out** | Open **SQL Server Configuration Manager** on the server and verify **TCP/IP** is enabled for the instance, the SQL Server service is listening on the expected static TCP port, and firewall rules allow traffic. |
| **Named instance port unknown** | SqlKit connects via direct TCP port rather than UDP SQL Browser (`1434`). Ask your DBA for the instance's static TCP port (or check `IPAll → TCP Port` in SQL Server Configuration Manager). |
| **Login failed for user** | Confirm **SQL Server and Windows Authentication mode** (Mixed Mode) is enabled on the server and the login is mapped to the target database. |
| **TLS certificate validation error** | Verify the certificate hostname/CA chain, or enable **Trust Server Certificate** in **Advanced** if connecting to a self-signed internal server. |

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard title="SSH tunnels" description="Connect to SQL Server inside private Windows/Azure subnets via SSH jump hosts." href="/docs/sqlkit/ssh-tunnel" badge="Ultimate" badge-variant="ultimate" icon="lock" />
  <DocsCard title="SQL editor & execution plans" description="Format T-SQL, run selections, and inspect SHOWPLAN trees." href="/docs/sqlkit/query-editor" icon="code" />
</DocsCardGrid>
