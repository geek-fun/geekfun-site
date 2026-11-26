---
title: Oracle Database GUI Client (Basic, TNS & Cloud Wallet) | SqlKit
description: Connect to Oracle Database and Autonomous Database (ATP/ADW) in SqlKit via JDBC (ojdbc11). Supports Service Name, SID, tnsnames.ora auto-parsing, Cloud Wallet, and NORMAL/SYSDBA/SYSOPER roles.
outline: [2, 3]
---

# Oracle Database

<DocsBadge variant="jdbc">JDBC Bridge (ojdbc11)</DocsBadge> <DocsBadge variant="community">Community</DocsBadge>

SqlKit connects to Oracle Database (on-premises, Amazon RDS for Oracle, and Oracle Autonomous Database ATP/ADW) through its JDBC Bridge and the `ojdbc11` driver. On your first connection test, SqlKit checks for a compatible Java runtime (system JDK 25+ or managed Eclipse Temurin JRE 25), downloads `jdbc-bridge`, and fetches `ojdbc11`.

## Choose an Oracle connection method

Open **Connections → Add New Connection** (<kbd>⌘</kbd>+<kbd>N</kbd> / <kbd>Ctrl</kbd>+<kbd>N</kbd>), pick **Oracle**, and select the mode matching your DBA details:

| Connection mode | Required fields | Typical use case |
| --- | --- | --- |
| Basic (`Host:Port`) | Host, listener port (default `1521`), and **Identify By** (**Service Name** or **SID**) | On-premises, Docker, and Amazon RDS Oracle instances |
| TNS (`tnsnames.ora`) | Folder containing `tnsnames.ora` (SqlKit parses the file and fills the **TNS Alias** dropdown automatically) | Environments using centralized TNS descriptors, RAC SCAN addresses, or failover lists |
| Cloud Wallet (ATP / ADW) | Extracted Oracle **Wallet Directory**, **TNS Alias** (parsed from the wallet's `tnsnames.ora`), and **Wallet Password** if required | OCI Autonomous Transaction Processing and Autonomous Data Warehouse |

### Oracle connection roles

Select the privilege role required for your login: `NORMAL` (default for application and developer accounts), `SYSDBA` (full database administration), or `SYSOPER` (startup, shutdown, backup, and recovery).

## Verify your Oracle session

Click **Test Connection** to run the 3-step JRE, Bridge, and `ojdbc11` check, then save and open **Queries**. Verify your service and schema against `dual`:

```sql
SELECT
  SYS_CONTEXT('USERENV', 'SERVICE_NAME') AS service_name,
  SYS_CONTEXT('USERENV', 'CURRENT_SCHEMA') AS current_schema,
  USER AS active_user
FROM dual;
```

## Oracle support in SqlKit

- Monaco provides `plsql` autocomplete and `plsql` formatting (<kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> / <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd>).
- Oracle schemas expand into tables, views, stored procedures, functions, indexes, foreign keys, triggers, and generated `CREATE` DDL.
- With Ultimate <DocsBadge variant="ultimate">Ultimate</DocsBadge>, plot foreign keys in ER Diagrams, transfer CSV/JSONL/SQL/Excel files, or attach Oracle to Agentic Data Studio and MCP.

::: tip Managing Oracle JDBC components
Open **Settings → JRE & JDBC Drivers** anytime to check the installed `ojdbc11` version, check for updates, or retry downloads if your network previously blocked Maven Central or Adoptium.
:::

## Troubleshooting Oracle connections

| Symptom | What to check |
| --- | --- |
| `ORA-12514` / `ORA-12505` (unknown service or SID) | Check **Identify By** (**Service Name** vs. **SID**) and verify the exact value with your DBA (PDBs almost always use a Service Name such as `ORCLPDB1`). |
| TNS Alias dropdown is empty | Pick the folder containing `tnsnames.ora` (not the file itself) and verify the file has valid TNS entries. |
| Cloud Wallet fails to connect | Extract the downloaded wallet archive first, point SqlKit to the extracted folder, choose the `_high`, `_medium`, or `_low` alias, and supply the wallet password if configured. |
| `ORA-01017` invalid username/password | Check password case sensitivity and confirm whether the login requires `SYSDBA` instead of `NORMAL`. |
| JDBC setup fails during test | Open **Settings → JRE & JDBC Drivers** to see whether JRE 25, `jdbc-bridge`, or `ojdbc11` failed to download, and confirm outbound HTTPS access. |

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard title="Supported databases & JDBC" description="Manage JRE 25, jdbc-bridge, and all 27 JDBC drivers." href="/docs/sqlkit/supported-databases#jdbc-manager" icon="database" />
  <DocsCard title="SQL editor & results" description="Save .sql scripts, format PL/SQL, and export query results." href="/docs/sqlkit/query-editor" icon="code" />
</DocsCardGrid>
