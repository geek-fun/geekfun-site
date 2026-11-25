---
title: Configure SqlKit AI Permissions for Data Studio and MCP
description: Set default and per-connection access, understand Ask and Auto, and review a blocked action in SqlKit.
---

# Configure SqlKit AI permissions

SqlKit uses the connection’s AI policy when an in-app agent or an external MCP client requests a database operation. You need Ultimate to change the default and per-connection AI settings.

## Set default and connection permissions {#connection-permissions}

1. Open **Settings → MCP Bridge → Default AI permissions**. Choose **Read** for schema inspection and read queries, then save the defaults. Check the current setting even if you have never changed it yourself.
2. In **Connections**, edit a saved connection and open **Advanced → AI permissions**. New and existing connections can inherit the defaults. To override selected actions, use **Custom** and set each action to **Allow**, **Deny**, or the current default.
3. In **Data Studio**, select the attached source to review access for that conversation. Session settings can further restrict what the connection allows.

| Access level | What AI can do |
| --- | --- |
| **No access** | No data or administrative actions. |
| **Read** | Inspect schema and read data. |
| **Read & modify data** | Read, create, update, and delete data. |
| **Full access** | Data operations, structure changes, and administration. |
| **Custom** | Apply separate decisions for read, create, update, delete, and manage. |

## Understand Ask, Auto, and client approvals {#approvals}

In an in-app conversation, **Ask** prompts for permitted elevated actions. **Auto** can run permitted elevated actions without that prompt. Destructive calls prompt in either mode unless a matching saved confirmation rule applies. A change of mode does not grant an action that the connection or conversation denies.

For MCP, the coding client manages its prompts and SqlKit enforces the applicable connection policy before executing. In either case, the database applies the saved account’s credentials and privileges.

## Review a blocked action {#blocked-actions}

1. Use **Review permissions** on the blocked message in Data Studio. Confirm which connection and action were denied.
2. If the action should be available, review the connection’s settings and the session’s restrictions. To allow only the needed action on that connection, use **Custom**.
3. Save the change and select **Retry request**. SqlKit checks the policy again when the request is retried.

A model may receive schema details and data returned by its tools. With an external MCP client, that client decides what tool output it sends to its model. To keep a connection out of AI workflows, set its access to **No access**.

[Agentic Data Studio setup](/docs/sqlkit/agentic-datastudio) · [MCP setup](/docs/sqlkit/mcp-bridge)
