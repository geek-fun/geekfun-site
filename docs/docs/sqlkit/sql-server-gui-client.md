---
title: Microsoft SQL Server GUI Client for Mac, Windows, and Linux | SqlKit
description: Use SqlKit to connect to Microsoft SQL Server with a SQL login and TCP port, browse schemas such as dbo, and run T-SQL on macOS, Windows, or Linux.
---

# Microsoft SQL Server GUI client

SqlKit connects to Microsoft SQL Server over TCP with a built-in driver. In the app, you can browse objects in schemas such as `dbo` and run Transact-SQL (T-SQL) queries. The open-source desktop app runs on macOS, Windows, and Linux.

## Connect to SQL Server

1. [Download and install SqlKit](/docs/sqlkit/installation), then open **Connections → Add New Connection**.
2. Select **SQL Server** and enter the hostname, TCP port, database name, username, and password for your SQL Server login.
3. Set the required encryption options in **Advanced**. Test and save the connection, then choose **Connect**.

A default instance commonly listens on `1433`. For a named instance, fill in the hostname and the TCP port that instance listens on. Ask your administrator for the port if the instance uses a different or dynamic port.

## Verify the SQL Server session

In **Queries**, run this T-SQL to check the database and login your query uses.

```sql
SELECT DB_NAME() AS active_database, SUSER_SNAME() AS login_name;
```

Expand `dbo` or your application schema in the sidebar. Double-click a table to browse its rows, or run a T-SQL query and [export the returned rows](/docs/sqlkit/query-editor#browse-and-export-data).

## What if the connection fails?

- For a timeout, confirm TCP/IP is enabled for the SQL Server instance and that the port is reachable from your machine.
- For a login failure, confirm SQL Server authentication is enabled for the login and that it has access to the target database.
- For TLS validation errors, verify the server name and certificate trust with your administrator. Use the **Trust Server Certificate** option only when your administrator explicitly requires it for that connection.
