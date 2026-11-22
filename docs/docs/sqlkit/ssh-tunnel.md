---
title: Connect to a SQL Database Through an SSH Tunnel | SqlKit
description: Connect SqlKit through a bastion using a reusable SSH profile, test each part of the connection, and diagnose common SSH tunnel errors.
---

# Connect through an SSH tunnel

Use an SSH tunnel when your database administrator provides a bastion that can reach the database. This requires SqlKit Ultimate. You need separate login details for the SSH host and the database.

## Add an SSH profile to a connection

1. Open [a database connection](/docs/sqlkit/connect-to-database) in the connection editor. In **Basic**, enter the database address and port as the final SSH host sees them, along with the database login. If PostgreSQL is on a separate machine from the bastion, enter its private database hostname here.
2. Open **Advanced → SSH Tunnel** and choose **Add profile…** or **New Profile**.
3. If creating a profile, enter the bastion hostname, SSH username, and port (normally `22`). Select password, private key, or SSH agent authentication. Save the profile to attach it to the connection.
4. Run **Test Connection** in the connection editor. Once the test succeeds, save the connection and open **Queries** to check that you reached the intended database.

## Use more than one bastion

Add the SSH profiles in the order SqlKit should connect to them, starting with the host your machine can reach. The last hop connects to the database. If you remove a profile from the chain, you can still use it in another connection.

## Diagnose a tunnel that will not connect

| What happens | What to check |
| --- | --- |
| The SSH profile test times out | Check whether the first bastion is reachable from your machine and whether you need the organization's VPN. |
| The first hop passes, but **Test Connection** fails | The SSH test checks the first hop. Verify that each subsequent host can be reached from the preceding host, and that the final hop can reach the database address and port in **Basic**. |
| The database rejects the login or certificate | Check the database credentials and TLS settings separately from the SSH profile. The tunnel forwards the connection and your database still applies its authentication and certificate requirements. |
| The app says it tried a direct connection | Check your sign-in and plan status. Community and signed-out sessions skip the saved SSH configuration for the connection attempt. |

See [connection troubleshooting](/docs/sqlkit/connect-to-database#troubleshoot-a-failed-connection) for database-side errors.
