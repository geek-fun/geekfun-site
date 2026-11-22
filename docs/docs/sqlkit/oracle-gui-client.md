---
title: Oracle Database GUI Client for macOS, Windows, and Linux | SqlKit
description: Connect to Oracle Database from SqlKit using a service name, SID, TNS alias, or cloud wallet. Set up the Oracle JDBC driver and verify your SQL session.
---

# Oracle Database GUI client

SqlKit connects to Oracle through its JDBC bridge and the Oracle JDBC driver. Use the connection details your administrator gave you, whether that’s a service name, a SID, a TNS alias, or a cloud wallet for Oracle Autonomous Database. SqlKit is open source and runs on macOS, Windows, and Linux.

## Choose an Oracle connection method

Open **Connections → Add New Connection**, select **Oracle**, and pick the method that matches the details from your database administrator.

| Method | What to enter |
| --- | --- |
| **Basic (Host:Port)** | Host, Oracle listener port (commonly `1521`), and the **Service Name** or **SID** provided for the database. |
| **TNS (tnsnames.ora)** | The folder containing `tnsnames.ora` and the **TNS Alias** you want to connect to. |
| **Cloud Wallet (ATP/ADW)** | The extracted wallet folder and the alias for your database service, plus the wallet password if required. |

Enter your Oracle database username and password. When you test the connection, SqlKit checks for Java, the bridge, and the Oracle driver. Use [Settings → JRE & Drivers](/docs/sqlkit/connect-to-database#java-and-jdbc-drivers) if a component download fails. Save and connect after the test succeeds.

## Check the Oracle service and schema

```sql
SELECT SYS_CONTEXT('USERENV', 'SERVICE_NAME') AS service_name,
       SYS_CONTEXT('USERENV', 'CURRENT_SCHEMA') AS current_schema
FROM dual;
```

Run this in **Queries**, then expand the relevant schema to find its tables and views. Follow the [SQL editor guide](/docs/sqlkit/query-editor) to save queries and export results.

## Why does the Oracle listener reject the connection?

If the listener reports an unknown service or SID, check **Identify By** and verify the value with your administrator. If the TNS alias list is empty, select the directory that contains `tnsnames.ora`. For a wallet connection, select the extracted wallet directory before choosing its alias.
