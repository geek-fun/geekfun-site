---
title: AI Permissions & Safety Model | SqlKit Data Studio & MCP
description: Understand SqlKit's unified AI permission chain, 5 granular action controls, sqlparser AST & CQL write guards, Ask vs. Auto approval modes, and credential isolation.
outline: [2, 3]
---

# AI permissions & safety model

SqlKit enforces **one unified AI safety engine** across every AI entry point—**Agentic Data Studio**, the **Queries AI Assistant sidebar**, and external **MCP clients** (Claude Code, Codex, Cursor). Editing default and per-connection AI policies requires **SqlKit Ultimate**.

## Defense-in-depth architecture

Rather than relying on a single confirmation toggle, SqlKit applies five independent layers of protection:

1. **Database account privileges (ultimate boundary)** — SqlKit always executes queries using your saved database login. Using a read-only database role on production guarantees no write can ever succeed regardless of client settings.
2. **Fail-closed policy chain** — every AI/MCP tool call is evaluated strictly in order:
   ```text
   Per-connection explicit rule (Allow / Deny)  ──►  System AI default  ──►  Deny (fail closed)
   ```
   If a policy file is missing or corrupted, SqlKit fails closed and denies access.
3. **AST-verified write isolation (`sqlparser` + CQL classifier)** — `sqlkit__execute_query` parses incoming SQL into an AST before execution. Writes—including **data-modifying CTEs** (`WITH updated AS (UPDATE ... RETURNING *) SELECT * FROM updated`)—cannot sneak through the read-only query tool. For Cassandra/ScyllaDB, a dedicated CQL keyword classifier enforces the same separation.
4. **Risk-separated tool surface** — reads (`execute_query`), non-destructive writes (`execute_write`), deletes (`execute_delete`), DDL (`execute_ddl`), and DBA operations (`kill_session`, `grant_privilege`, `revoke_privilege`) are separate tools mapped to separate permissions.
5. **Interactive approval cards & credential isolation** — destructive operations require explicit human approval in interactive sessions, and database credentials are never sent to LLMs or exposed via `list_connections`.

## Set default and per-connection permissions {#connection-permissions}

<DocsSteps>

### Set the system default policy

Open **Settings → MCP Bridge → Default AI permissions**. For everyday development, choose **Read** (schema inspection and read-only queries) and save. Any connection set to **Inherit default** follows this baseline.

### Override individual connections

In **Connections**, edit a saved connection and open **Advanced → AI permissions**:
- Leave on **Inherit default** to track the global baseline.
- Set production connections to **No Access** to keep them completely invisible to Data Studio and MCP, or **Read** for safe diagnostics.
- Choose **Custom** to set each of the 5 granular actions independently to **Allow**, **Deny**, or **Inherit**.

### Restrict further per Data Studio session

Inside **Data Studio**, click any attached data source badge to review or tighten access for that conversation. Session restrictions can only narrow—never expand—what the connection policy allows.

</DocsSteps>

### Permission presets & 5 granular actions

| Preset | Read | Create data | Update data | Delete data | Manage structure & admin | Typical use |
| --- | :---: | :---: | :---: | :---: | :---: | --- |
| **No access** | ❌ | ❌ | ❌ | ❌ | ❌ | Sensitive production databases excluded from AI & MCP |
| **Read** | ✅ | ❌ | ❌ | ❌ | ❌ | Schema exploration, SQL drafting, `EXPLAIN` & slow-query analysis |
| **Read & modify data** | ✅ | ✅ | ✅ | ✅ | ❌ | Staging / dev data seeding and updates without DDL/admin changes |
| **Full access** | ✅ | ✅ | ✅ | ✅ | ✅ | Disposable local databases for schema prototyping and migrations |
| **Custom** | Custom | Custom | Custom | Custom | Custom | Fine-grained control (e.g., allow `Read` + `Create`, deny `Delete` & `Manage`) |

## Understand Ask, Auto, and MCP approvals {#approvals}

For actions **already permitted** by the connection policy, approval behavior depends on whether you are in an in-app AI session or an external MCP client:

| Action risk tier | Examples | In-app **Ask** mode | In-app **Auto** mode | External MCP client |
| --- | --- | --- | --- | --- |
| **Safe (Read)** | `execute_query`, `list_tables`, `describe_table`, `explain_query`, `list_sessions`, `get_slow_queries` | Runs automatically | Runs automatically | Runs under client's tool-approval rules |
| **Elevated (Write)** | `execute_write` (`INSERT` / `UPDATE` / `MERGE`) | Prompts confirmation card | Runs automatically | SqlKit checks connection policy; client manages prompt |
| **Destructive (Delete / DDL / Admin)** | `execute_delete` (`DELETE` / `TRUNCATE`), `execute_ddl` (`CREATE` / `ALTER` / `DROP`), `kill_session`, `grant`/`revoke` | **Always prompts** | **Always prompts** *(unless saved rule matches)* | SqlKit checks connection policy; client manages prompt |

### Confirmation card actions (saved session rules)

When a confirmation card appears in Data Studio or the AI Assistant sidebar, you can choose:
- **Allow Once** — approve only this specific call
- **Allow Always** — save a matching confirmation rule for the current session
- **Deny** — reject this call and let the agent adjust
- **Deny Always** — block matching calls for the rest of the session
- **Cancel** — stop the current agent turn

::: warning Switching to Auto never grants new permissions
Changing a session from **Ask** to **Auto** only skips prompts for permitted **Elevated** writes. It can **never** allow an action that the connection policy or session restriction denies.
:::

## Review and retry a blocked action {#blocked-actions}

1. On a blocked action card in **Data Studio**, click **Review permissions** to see the exact connection and action category that was denied.
2. Decide whether the action belongs on that database. If yes, adjust the connection's policy (for example, enable just **Create** under **Custom**) or the session's source settings.
3. Save the policy change and click **Retry request**—SqlKit re-evaluates the policy live before executing.

## Privacy & data boundaries

- **Credentials**: passwords, SSH keys, and TLS private keys are never passed to LLMs or MCP clients.
- **Tool outputs**: schema metadata and query results returned by permitted tools are sent to your configured LLM (in Data Studio / Sidebar) or returned to the calling MCP client (which decides what to send to its model).
- **Keeping sensitive data offline**: set sensitive connections to **No Access**, or configure **Ollama** / **LM Studio** in [Agentic Data Studio](/docs/sqlkit/agentic-datastudio) for 100% local inference.

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard title="Agentic Data Studio" description="Configure cloud or local models, context compaction, and custom prompts." href="/docs/sqlkit/agentic-datastudio" badge="Ultimate" badge-variant="ultimate" icon="sparkles" />
  <DocsCard title="MCP bridge setup" description="Register @geek-fun/data-studio-mcp in Claude Code, Codex, or Cursor." href="/docs/sqlkit/mcp-bridge" badge="Ultimate" badge-variant="ultimate" icon="terminal" />
</DocsCardGrid>
