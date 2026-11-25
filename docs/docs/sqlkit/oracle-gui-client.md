---
title: Oracle Database GUI Client (Basic, TNS & Cloud Wallet) | SqlKit
description: Connect to Oracle Database and Autonomous Database (ATP/ADW) in SqlKit via JDBC (ojdbc11). Supports Service Name, SID, tnsnames.ora auto-parsing, Cloud Wallet, and NORMAL/SYSDBA/SYSOPER roles.
outline: [2, 3]
---

# Oracle Database

<DocsBadge variant="jdbc">JDBC Bridge (ojdbc11)</DocsBadge> <DocsBadge variant="community">Community</DocsBadge>

SqlKit connects to **Oracle Database** (on-premises, RDS for Oracle, and Oracle Autonomous Database ATP/ADW) through its managed JDBC Bridge and the official **`ojdbc11`** driver. When you test your first Oracle connection, SqlKit automatically checks for a compatible Java runtime (system JDK 25+ or managed **Eclipse Temurin JRE 25**), downloads `jdbc-bridge`, and fetches `ojdbc11`.

## Choose an Oracle connection method

Open **Connections → Add New Connection** (<kbd>⌘</kbd>+<kbd>N</kbd> / <kbd>Ctrl</kbd>+<kbd>N</kbd>), select **Oracle**, and pick the connection mode that matches what your DBA provided:

| Connection mode | Required fields | Typical use case |
| --- | --- | --- |
| **Basic (`Host:Port`)** | Host, listener port (default `1521`), and **Identify By** (**Service Name** or **SID**) | Standard on-premises, Docker, and Amazon RDS Oracle instances |
| **TNS (`tnsnames.ora`)** | Directory containing `tnsnames.ora` — SqlKit automatically parses the file and populates the **TNS Alias** dropdown | Enterprise environments with centralized TNS descriptors, RAC scan addresses, or failover lists |
| **Cloud Wallet (ATP / ADW)** | Extracted Oracle **Wallet Directory**, **TNS Alias** (auto-parsed from the wallet's `tnsnames.ora`), and **Wallet Password** (if required) | Oracle Cloud Infrastructure (OCI) Autonomous Transaction Processing & Autonomous Data Warehouse |

### Oracle connection roles

Select the appropriate privilege role in the connection form:
- **`NORMAL`** *(default)* — standard application or developer account
- **`SYSDBA`** — full database administration privileges
- **`SYSOPER`** — startup, shutdown, backup, and recovery privileges

## Verify your Oracle session

Click **Test Connection** to watch the 3-step JRE → Bridge → `ojdbc11` readiness check, then save and open **Queries**. Run a quick check against `dual`:

```sql
SELECT
  SYS_CONTEXT('USERENV', 'SERVICE_NAME') AS service_name,
  SYS_CONTEXT('USERENV', 'CURRENT_SCHEMA') AS current_schema,
  USER AS active_user
FROM dual;
```

## Oracle features in SqlKit

- **PL/SQL-aware editor**: `plsql` autocomplete profile and `plsql` SQL formatting (<kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> / <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd>).
- **Schema & object browsing**: expand Oracle schemas to inspect tables, views, stored procedures, functions, indexes, foreign keys, triggers, and generated DDL.
- **Data browsing, ER Diagrams & AI** <DocsBadge variant="ultimate">Ultimate</DocsBadge>: filter and edit rows, visualize foreign keys in ER diagrams, run CSV/JSONL/SQL/Excel transfers, or attach Oracle to **Agentic Data Studio** and **MCP**.

::: tip Managing Oracle JDBC components
Open **Settings → JRE & JDBC Drivers** anytime to verify the installed `ojdbc11` version, check for updates, or retry downloads if your network previously blocked Maven Central or Adoptium.
:::

## Troubleshooting Oracle connections

| Symptom | What to check |
| --- | --- |
| **`ORA-12514` / `ORA-12505` (listener does not know service or SID)** | Check the **Identify By** toggle (**Service Name** vs. **SID**) and verify the exact value with your DBA (PDBs almost always use Service Name, e.g., `ORCLPDB1`). |
| **TNS Alias dropdown is empty** | Select the **folder** containing `tnsnames.ora` (not the file itself) and verify the file contains valid TNS entries. |
| **Cloud Wallet fails to connect** | Unzip the downloaded wallet archive first, point SqlKit to the extracted folder, pick the desired `_high` / `_medium` / `_low` alias, and supply the wallet password if configured. |
| **`ORA-01017` invalid username/password** | Check case sensitivity on passwords and confirm whether your account requires `SYSDBA` instead of `NORMAL`. |
| **JDBC setup fails during test** | Open **Settings → JRE & JDBC Drivers** to see whether JRE 25, `jdbc-bridge`, or `ojdbc11` failed to download, and confirm outbound HTTPS access. |

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard title="Supported databases & JDBC" description="Manage JRE 25, jdbc-bridge, and all 27 JDBC drivers." href="/docs/sqlkit/supported-databases#jdbc-manager" icon="database" />
  <DocsCard title="SQL editor & results" description="Save .sql scripts, format PL/SQL, and export query results." href="/docs/sqlkit/query-editor" icon="code" />
</DocsCardGrid>
