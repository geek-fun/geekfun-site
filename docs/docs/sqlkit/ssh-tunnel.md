---
title: SSH Tunnels & Multi-Hop Jump Chains | SqlKit
description: Connect SqlKit to private databases through reusable SSH profiles, drag-and-drop multi-hop jump chains, OS System Proxy chaining, SSH agent/Pageant, and known_hosts pinning.
outline: [2, 3]
---

# SSH tunnels & multi-hop jump chains

<DocsBadge variant="ultimate">Ultimate</DocsBadge>

Use SSH tunneling when your database runs inside a private VPC, corporate subnet, or behind one or more bastion (jump) hosts. SqlKit manages **reusable SSH profiles** globally so you can attach the same bastion—or chain multiple bastions—across any number of database connections.

```text
Your Machine ──► [Optional OS System Proxy] ──► Bastion 1 (SSH) ──► Bastion 2 (SSH) ──► Private Database
```

## Create a reusable SSH profile

You can manage SSH profiles from the **Connections** page or inline while editing any database connection (**Advanced → SSH Tunnel → New Profile**).

| Field | Description |
| --- | --- |
| **Profile Name** | Label shown in tunnel chains and the profile picker |
| **Host & Port** | Bastion hostname or IP and SSH port (default `22`). SqlKit can also read host aliases from `~/.ssh/config`. |
| **Username** | SSH login user on the bastion |
| **Authentication Method** | **Password**, **Private Key** (file path + optional passphrase), or **SSH Agent** (`$SSH_AUTH_SOCK`, custom socket path, or **Pageant** on Windows) |
| **Connect Timeout** | Seconds to wait for the SSH handshake (default `10s`) |
| **Keepalive Interval** | Heartbeat interval to keep idle tunnels alive through NAT/firewalls (default `30s`) |
| **Use System Proxy** | Route the first SSH hop through the OS-detected HTTP CONNECT proxy when corporate networking requires it |

Click **Test SSH Connection** inside the profile dialog to verify authentication and host-key trust against that bastion independently before attaching it to a database.

## Attach single-hop or multi-hop jump chains

<DocsSteps>

### Enter the database address as the final hop sees it

Open your database connection in **Basic** and enter the database **Host** and **Port** as reachable from the **last bastion** in your chain. For example, if PostgreSQL runs on an internal RDS endpoint (`prod-db.internal:5432`) or on the bastion itself (`127.0.0.1:5432`), enter that internal address—not the bastion's public IP.

### Attach one or more SSH profiles

Switch to **Advanced → SSH Tunnel** and click **Add Profile**. To tunnel through multiple bastions (e.g., corporate edge jump host → VPC bastion → database), add each SSH profile in hop order.

### Reorder hops and inspect the live route

Drag and drop hops in the list to reorder your chain. SqlKit displays a live visual breadcrumb preview (`System Proxy → Hop 1 → Hop 2 → Database`) so you can verify the exact forwarding path before testing.

### Test and save the connection

Click **Test Connection** in the database dialog. SqlKit establishes the entire SSH chain, binds a local forwarding socket, and validates the database login and TLS settings end to end.

</DocsSteps>

::: tip Reusing and removing profiles
Removing an SSH profile from a database connection's chain only detaches it from that connection—the reusable profile remains available for other connections.
:::

## Host key verification (`known_hosts`)

To protect against man-in-the-middle attacks, SqlKit verifies and pins SSH server host keys:

- When connecting to a bastion for the first time, SqlKit records its host key fingerprint.
- If a bastion's host key changes unexpectedly (e.g., after an instance rebuild or rotation), SqlKit blocks the connection and alerts you rather than silently accepting the mismatch.
- After confirming the rotation with your infrastructure team, unpin the stale host entry from the SSH settings so SqlKit can trust the new key.

## Plan behavior (Community downgrade)

If you previously configured SSH tunnels under Ultimate and later open SqlKit while signed out or on the **Community** plan:

- SqlKit **preserves** your saved SSH profiles and chains—nothing is deleted.
- Connection attempts **skip** the SSH tunnel and display an explicit warning that a direct connection is being attempted instead.

## Diagnose SSH tunnel failures

| Symptom | What to check |
| --- | --- |
| **SSH profile test times out** | Verify the first bastion host and port are reachable from your network, check corporate VPN status, or enable **Use System Proxy** if outbound port 22 goes through an HTTP proxy. |
| **First hop passes, but database `Test Connection` fails** | The standalone profile test validates only that hop. Verify hop `N` can reach hop `N+1`, and that the **final hop** can resolve and reach the database host/port entered in **Basic** (including security groups and `AllowTcpForwarding yes` on `sshd`). |
| **SSH agent authentication fails** | Confirm your key is loaded (`ssh-add -l` on macOS/Linux, or Pageant running on Windows) and verify the custom agent socket path if not using `$SSH_AUTH_SOCK`. |
| **Host key verification failed** | The bastion's SSH host key changed. Verify the new fingerprint with your ops team before unpinning the old key. |
| **TLS certificate hostname mismatch over tunnel** | The tunnel forwards traffic over localhost, while the database still presents its real TLS certificate. Verify the hostname in **Basic** matches the certificate SAN/CN, or use `verify-ca` with your CA cert if connecting via an internal IP. |
| **SqlKit attempts a direct connection** | Check **Settings → General → Account & Plan** to confirm Ultimate is active; Community and signed-out sessions bypass SSH tunnels. |

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard title="Connections & TLS" description="Configure SSL/TLS modes, custom CA certs, and Connection Guardian." href="/docs/sqlkit/connect-to-database" icon="server" />
  <DocsCard title="AI permissions & safety" description="Keep production tunneled connections read-only or No Access for AI." href="/docs/sqlkit/ai-permissions" icon="shield" />
</DocsCardGrid>
