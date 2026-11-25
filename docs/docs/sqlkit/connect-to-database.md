---
title: Connect to a SQL Database in SqlKit | Ports, TLS, and JDBC
description: Add and test a SQL database connection in SqlKit. Find default ports for MySQL, PostgreSQL, SQL Server, and Oracle, plus local file and JDBC setup.
---

# Connect SqlKit to a database

You’ll need the server’s hostname, port, and login credentials. Depending on the database, you may also need a database name or a value such as an Oracle service name. To open SQLite, use the path to the database file.

## Add and test a connection

Once you've installed the SqlKit succesfully, click the **`+`** floating button at the right bottom, a new connection modal will show you to establish a connection with connection details as bellow screenshot shows.

![SqlKit connect to new database server](/sqlkit-connect-to-database.png)

SqlKit have two tabs in connection modal:

**Basic** — Give the connection name, select its database type and enter the server details or choose a local database file, and you can click the  `Test connection` to verify the connectivity or click the `Create Connection` to save connection info.

**Advanced** — To set up TLS or [connect through an SSH tunnel](/docs/sqlkit/ssh-tunnel), or setup agent context and fine-grained permissions against the new connection.


## Choose a connection type

Use your server's configured port if it differs from the default shown here.

| Database | Default port or file | Details |
| --- | --- | --- |
| [MySQL](/docs/sqlkit/mysql-gui-client) | `3306` | Host and SQL credentials. Specify a database when you want to open it by default. |
| [PostgreSQL](/docs/sqlkit/postgresql-gui-client) | `5432` | Host, role credentials, and the database to connect to. |
| [SQL Server](/docs/sqlkit/sql-server-gui-client) | `1433` | Host, the instance's TCP port, and a SQL Server login. |
| [Oracle Database](/docs/sqlkit/oracle-gui-client) | `1521` for a basic connection | JDBC. Use a service name, SID, TNS alias, or cloud wallet according to your setup. |
| [SQLite](/docs/sqlkit/sqlite-gui-client) | Local file | Select the database file on disk. |
| MariaDB | `3306` | Choose **MariaDB** as the database type. |
| DuckDB | Local file | Uses the JDBC bridge. |
| ClickHouse | `8123` for HTTP | Use your server's HTTP or HTTPS endpoint and configured port. |

See [supported databases and drivers](/docs/sqlkit/supported-databases) for additional engines and their setup requirements.

## Java and JDBC drivers

Oracle, DuckDB, and other JDBC engines use a Java runtime, the SqlKit JDBC bridge, and an engine-specific driver. The connection test checks for these components and attempts to download missing ones. Use **Settings → JRE & Drivers** to check their status or retry a download. If your network restricts outbound downloads, check that SqlKit can reach the package sources before retrying the connection test.

## Troubleshoot a failed connection

| Symptom | What to check |
| --- | --- |
| Connection refused or timed out | Confirm the server is listening on that host and port. Check whether access requires a VPN, SSH tunnel, or an IP allowlist. SSH tunneling in SqlKit requires Ultimate. |
| Authentication failed | Check the username and password. Confirm the account can sign in from your machine and access the selected database. |
| TLS certificate error | Match your server's TLS requirements in **Advanced**. Use the trusted CA certificate and the hostname on the certificate when verification is required. |
| Connected, but tables are missing | Select the intended database and schema in **Queries**, refresh the object tree, and check that your account can see the objects. |

Once connected, [run a read-only query to verify your session](/docs/sqlkit/query-editor#run-your-first-query).
