---
title: Set Up SqlKit MCP for Codex, Claude Code, and Cursor
description: Start the local SqlKit MCP Bridge, register Data Studio Agent in a coding client, and verify access to a saved database connection.
---

# Connect a coding agent to SqlKit with MCP

Data Studio Agent is a Model Context Protocol (MCP) server for external coding tools. Your coding tool launches the server locally, which routes database requests through SqlKit’s MCP Bridge. SqlKit uses the saved connection to reach the database. The bridge requires Ultimate. For the assistant built into SqlKit, see [Agentic Data Studio](/docs/sqlkit/agentic-datastudio).

## Prepare SqlKit {#prepare-sqlkit}

1. [Install and open SqlKit](/docs/sqlkit/installation), sign in with Ultimate, and [save a working database connection](/docs/sqlkit/connect-to-database).
2. Open **Settings → MCP Bridge** and check that the bridge reports **Running on port**. Use **Restart Bridge** if needed. **Auto-start** starts the bridge when SqlKit launches.
3. Open **Default AI permissions** and select **Read** for schema inspection and read queries. Check that the saved connection’s [AI permissions](/docs/sqlkit/ai-permissions) also allow reading. Keep SqlKit running while you use the client.
4. Make sure Node.js 18 or later and npm are installed on the machine that runs your coding client. Run `npx --version` to confirm the client’s launch command is available.

## Register Data Studio Agent {#register}

Use the configuration for your client. The `npx` command installs the package on demand when the client launches it.

::: code-group

<!--@include: @/.vitepress/includes/data-studio-mcp.md#codex-->

<!--@include: @/.vitepress/includes/data-studio-mcp.md#claude-->

<!--@include: @/.vitepress/includes/data-studio-mcp.md#cursor-->

:::

For Codex, run `codex mcp list` to verify the registration. In Claude Code, run `/mcp` in a session to check server status. For Cursor, add the JSON to your project’s `.cursor/mcp.json` or your user-level `~/.cursor/mcp.json` and check the MCP server status in Cursor. Merge it with existing entries if the file already has an `mcpServers` object.

For Windsurf, OpenCode, and other stdio clients, see the [Data Studio Agent quick start](/docs/data-studio-agent/quick-start).

## Verify the connection {#verify}

In your coding client, ask Data Studio to list accessible SqlKit connections. Then ask it to list tables for a specific development connection without changing data. The tool response should identify the connection and its tables. **Settings → MCP Bridge** shows active sessions after the client connects.

<DocsFigure src="/blog/codex-data-studio/codex-data-studio-architecture-branded.png" alt="A local coding agent calls Data Studio Agent, which routes SQL requests through SqlKit to the database" caption="The MCP server runs locally and reaches saved SQL connections through SqlKit. The coding client receives the tool output." :width="3600" :height="2160" />

## Troubleshoot the bridge {#troubleshoot}

| What you see | What to check |
| --- | --- |
| The client cannot launch the server | Make sure `npx` is available to the client and npm can download the package. Reload the client after changing its configuration. |
| The server starts but SqlKit is unavailable | Open SqlKit, check your Ultimate status, and verify the bridge is running. The client and SqlKit need to run on the same machine for automatic discovery. |
| A saved connection is missing | Check the connection’s effective AI permissions. Data Studio lists connections with at least one allowed action. |
| A query or change is denied | Check the connection’s [AI permissions](/docs/sqlkit/ai-permissions) and the database account’s permissions. |

[Codex walkthrough with screenshots](/blog/connect-codex-databases-mcp) · [MCP tool reference](/docs/data-studio-agent/tools)
