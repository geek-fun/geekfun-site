---
title: Configure DocKit AI Permissions for Data Studio and MCP
description: Set DocKit AI action permissions per connection, understand inheritance and Ask versus Auto, and review a blocked request.
---

# Configure AI permissions

A connection’s AI permissions apply to Agentic Data Studio, the Sidebar Assistant, and external MCP clients. When you work in the editor yourself, the app’s feature permissions and your database account govern access. You need Ultimate to change AI permissions, including defaults and overrides.

## Choose the effective access

1. In **Settings → MCP Bridge → Default AI permissions**, set the permissions that connections inherit. A fresh installation allows reading, creating, and updating data by default. DocKit blocks deletion and management by default. If you upgraded, check the settings for existing connections because DocKit keeps earlier restrictions.
2. To override the defaults for one connection, open its connection dialog and expand **Advanced → AI permissions**. Use **Custom** to decide which of read, create, update, delete, and manage to allow. An inherited action uses the current system default.
3. In Data Studio, attach only the connections you need. Conversation settings can further restrict the connection's permissions. The Sidebar Assistant uses the active connection's policy.

| Access level | Actions |
| --- | --- |
| **No access** | No AI data or management actions. |
| **Read** | Read data and inspect its structure. |
| **Read & modify data** | Read, create, update, and delete data. |
| **Full access** | Data operations, structure changes, and administration. |
| **Custom** | Individual action decisions. |

## Confirm a permitted action

**Ask** and **Auto** control confirmations for actions the policy already permits. Ask prompts for elevated operations such as data writes. Auto can run permitted elevated operations immediately. Destructive calls prompt in either mode unless a saved **Always Allow** rule matches. DocKit checks its policy each time it runs or retries a request. The database applies the account’s permissions as usual.

For external MCP connections, the client controls approval prompts. DocKit supplies risk annotations and applies its own permission policy before running a tool. Check your MCP client's approval settings for confirmation behavior.

## Review a blocked request

Open **Review permissions** on the blocked message to see which connection and action were denied. If you approve an access change, save it, return to the conversation, and choose **Retry request**. Retrying rechecks the current policy and any confirmation requirement.
