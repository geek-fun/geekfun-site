---
title: SSH Tunnels, Multi-Hop Chains & System Proxy | SqlKit
description: Connect SqlKit to private databases through reusable SSH profiles, drag-and-drop multi-hop jump chains, OS System HTTP CONNECT proxy chaining, ~/.ssh/config resolution, and SSH agent/Pageant authentication.
outline: [2, 3]
---

# SSH tunnels, multi-hop chains & proxy support

<DocsBadge variant="ultimate">Ultimate</DocsBadge>

Use an SSH tunnel when your database runs inside a private VPC, corporate subnet, or behind one or more bastion hosts. SqlKit runs a built-in Rust SSH client that opens a local loopback forwarding socket (`127.0.0.1` on an ephemeral port) and routes database traffic through one or more bastions to the target database.

<DocsFlowDiagram variant="ssh-tunnel" />

## Supported tunnel and proxy modes

| Mode | Availability | When to use |
| --- | --- | --- |
| SSH tunnel (single-hop or multi-hop) | Supported (Ultimate) | You have SSH access to a bastion, jump host, or database server that can reach the database. |
| OS System Proxy (`http://` CONNECT, hop 0) | Supported with SSH (Ultimate) | Outbound SSH to your first bastion must pass through your operating system's HTTP CONNECT proxy. Must be paired with at least one SSH hop. |
| Standalone SOCKS5 / HTTP proxy (without SSH) | Not supported | SqlKit does not route raw database TCP traffic through a standalone SOCKS5 or HTTP proxy layer without an SSH bastion. |
| HTTP tunnel (server-side web script) | Not supported | SqlKit does not include a server-side HTTP or PHP tunneling script. |
| File-based databases (SQLite, SQLCipher, DuckDB) | Local files only | File-based engines always open local files directly and ignore SSH transport layers. |

::: info Outbound HTTP proxy for AI and downloads
SqlKit's per-provider proxy setting under **Settings → AI** (`None`, `System`, or `Manual`) applies to outbound HTTP requests (such as LLM API calls), not to database driver connections.
:::

## Create a reusable SSH profile

Manage shared SSH profiles from the **Connections** page (**Add SSH Profile**), or create one inline while editing any database connection under **Advanced → SSH Tunnel** (`+`). One profile can be attached to multiple database connections, and updating it applies to every connection that references it.

| Field | Description |
| --- | --- |
| Profile Name | Label shown in tunnel chains and the profile selector |
| SSH Host | Bastion hostname, IP address, or a `Host` alias from `~/.ssh/config`. At connect time, SqlKit resolves `HostName`, `Port`, `User`, and `IdentityFile` from `~/.ssh/config` for any fields left blank or default (wildcards and `Include` directives are skipped). |
| SSH Port | Bastion SSH port (default `22`) |
| Username | SSH login user on the bastion |
| Authentication Method | **Password**, **Private Key** (browse for a key file plus optional passphrase), or **SSH Agent** (`$SSH_AUTH_SOCK`, custom socket path, or Pageant on Windows). SqlKit also probes SSH `none` authentication first for gateways that allow unauthenticated access. |

Built-in runtime defaults apply automatically to every SSH hop: a `10s` connect timeout and a `30s` SSH keepalive heartbeat to prevent idle tunnels from being dropped by NAT gateways or firewalls.

Click **Test Connection** inside the SSH profile dialog to check bastion reachability and authentication before attaching the profile to a database.

## Attach hops and optional System Proxy

<DocsSteps>

### Enter the database address as the final hop sees it

In the database connection's **Basic** tab, enter the database **Host** and **Port** as reachable from the last bastion in your chain. If PostgreSQL runs on an internal RDS endpoint (`prod-db.internal:5432`) or on the bastion itself (`127.0.0.1:5432`), enter that internal address rather than the bastion's public IP.

### Attach one or more SSH profiles

Switch to **Advanced → SSH Tunnel** and pick a saved profile from the dropdown, or click `+` to create a new one. To chain multiple bastions (such as a corporate jump host into a VPC bastion), add each SSH profile in hop order.

### Optional: attach OS System Proxy as hop 0

If your operating system has an HTTP proxy configured, SqlKit detects it automatically (honoring `NO_PROXY` and OS proxy bypass lists) and shows a **System Proxy** banner in the SSH Tunnel panel. Click **Add** to pin it as hop `0` ahead of your first SSH bastion.

The proxy URL is resolved dynamically from the OS at connect time rather than saved in the connection record. Only `http://` HTTP CONNECT proxies are supported for SSH chaining, and System Proxy requires at least one SSH hop in the chain.

### Reorder hops and inspect the route

Drag hops by their handle, or use the up and down arrow buttons, to reorder the chain. SqlKit displays a live route preview (`System Proxy → Hop 1 → Hop 2 → Database`) so you can check the forwarding path before connecting.

### Test and save the connection

Use the chain test button in the **SSH Tunnel** header to test the first hop, or click **Test Connection** on the database dialog to open the full SSH chain, bind a local forwarding socket, and validate the database login and TLS settings end to end.

</DocsSteps>

::: tip Reusing, detaching, and converting legacy tunnels
Detaching an SSH profile from a connection only removes it from that connection's chain. The shared profile stays available for other connections.

If you have an older connection with an inline (connection-only) SSH configuration, you can keep editing it directly (including importing host entries from `~/.ssh/config`) or click **Convert to Profile** to promote it into a reusable profile for multi-hop chains.
:::

## Tunnel behavior and current limitations

- Local forwarding listeners always bind to `127.0.0.1` on an OS-assigned ephemeral port. Custom fixed local ports and `0.0.0.0` LAN exposure are not available in the UI.
- Multiple database connections that use the same SSH hop chain and target `host:port` share a single active tunnel session automatically.
- The current SSH UI connects in lenient host-key mode and does not prompt for interactive `known_hosts` fingerprint confirmation yet. Verify your bastion hostname and port carefully, and rely on key-based authentication and private network controls.

## Plan behavior (Community downgrade)

If you configured SSH tunnels under Ultimate and later use SqlKit while signed out or on Community, SqlKit keeps your saved SSH profiles and chains intact without deleting them. Connection attempts skip the SSH tunnel and display a warning that a direct connection is being attempted.

## Diagnose SSH tunnel failures

| Symptom | What to check |
| --- | --- |
| SSH profile test times out | Check that the first bastion host and port are reachable from your network, confirm VPN status, or attach **System Proxy** on the database connection if outbound SSH goes through a corporate HTTP CONNECT proxy. |
| System Proxy shows "not detected" or fails | Confirm an `http://` proxy is active in your OS network settings and that your first bastion host is not listed in `NO_PROXY` or the OS bypass list. SOCKS proxy URLs are not supported for hop 0. If no OS proxy applies at connect time, SqlKit falls back to a direct connection to hop 1. |
| First hop passes, but database `Test Connection` fails | The profile test and header test icon check only the first hop. Confirm hop `N` can reach hop `N+1`, and that the final hop can reach the database host and port entered in **Basic** (including security groups and `AllowTcpForwarding yes` in `sshd_config`). |
| `~/.ssh/config` alias does not resolve | Check that the `Host` block uses an exact alias (wildcard patterns like `*` and `Include` directives are ignored) and that the file is readable at `~/.ssh/config`. |
| SSH agent authentication fails | Confirm your key is loaded (`ssh-add -l` on macOS/Linux, or Pageant running on Windows) and verify the custom socket path if not using `$SSH_AUTH_SOCK`. |
| TLS certificate hostname mismatch over tunnel | The tunnel forwards TCP through `127.0.0.1`, while the database still presents its own TLS certificate. Verify the hostname in **Basic** matches the certificate SAN/CN, or use `verify-ca` with your CA certificate if connecting by internal IP. |
| SqlKit attempts a direct connection | Check **Settings → General → Account & Plan** to confirm Ultimate is active, and confirm the target engine is not a file-based database (SQLite, SQLCipher, DuckDB). |

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard title="Connections & TLS" description="Configure SSL/TLS modes, custom CA certs, and Connection Guardian." href="/docs/sqlkit/connect-to-database" icon="server" />
  <DocsCard title="AI permissions & safety" description="Keep production tunneled connections read-only or No Access for AI." href="/docs/sqlkit/ai-permissions" icon="shield" />
</DocsCardGrid>
