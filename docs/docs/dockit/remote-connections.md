---
title: Connect DocKit Through an SSH Tunnel or System Proxy
description: Set up reusable SSH profiles and jump hosts for DocKit, attach your system proxy, and troubleshoot MongoDB and search connections.
---

# SSH tunnels and system proxy

With DocKit Ultimate, you can connect through a bastion or use your system proxy. If you use a bastion, enter its address and login details in the SSH profile and the database’s details in the connection form.

## Add a reusable SSH profile

1. [Create or edit a connection](/docs/dockit/connect-to-server). In the database connection fields, enter the database address as seen from the final SSH host.
2. Open **Advanced → SSH Tunnel** and add an existing SSH profile or choose **Create New Profile**. Enter the SSH host, port, and username, then select password, private key, or SSH agent authentication as appropriate.
3. For multiple bastions, add the profiles in connection order and drag them to reorder. The last hop forwards the database connection. Detaching a profile from the chain leaves it in the reusable profile list.
4. Before saving, click **Test Connection** in the connection dialog. It checks the whole route and the database login, so run it even if your SSH profile passed its own test.

## Attach the system proxy

When DocKit shows a detected system proxy under the SSH section, choose **Add** to attach it. It appears before the SSH profiles in the chain. Remove the system proxy from that connection if your organization expects the traffic to go directly to the server or bastion.

## Diagnose a connection failure

- If the app reports that it skipped the tunnel, check your sign-in and Ultimate access. Community and signed-out sessions try a direct connection and keep the saved profile settings.
- If an SSH profile works but the database test fails, confirm that the final bastion can resolve and reach the database address. Check database credentials and TLS settings separately.
- For MongoDB **URI Auth** over SSH, use a single-host `mongodb://` URI. Connect directly if you need a multi-host URI or a `mongodb+srv://` URI.
