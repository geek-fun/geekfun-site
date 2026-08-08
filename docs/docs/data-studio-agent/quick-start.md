---
title: Data Studio Agent Quick Start — install the MCP server
description: Step-by-step guide to get Data Studio Agent up and running. Install DocKit/SqlKit, add the MCP server, register it in your AI coding tool, and start asking plain-language queries.
head:
  - - meta
    - name: keywords
      content: data studio agent quick start, MCP server install, AI coding agent registration, Claude Code, Codex, Cursor, Windsurf, OpenCode
  - - link
    - rel: canonical
      href: https://www.geekfun.club/docs/data-studio-agent/quick-start/
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/data-studio-agent/quick-start/
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/data-studio-agent/quick-start/
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/data-studio-agent/quick-start/
---

# Quick Start

The full setup is four steps: install the apps, install the MCP package, register it in your AI tool, and optionally tune permissions.

## 1. Prerequisites: install the desktop apps

Install and launch [DocKit](/products/dockit/) and/or [SqlKit](/products/sqlkit/), add at least one database connection, and make sure **Settings → MCP Bridge → Auto-start** is enabled (it's on by default).

- **SQL** databases need SqlKit; **NoSQL** databases need DocKit. Install both for the full tool set.
- The MCP server auto-discovers running backends. Only tools for apps that are actually running are exposed.

## 2. Install the MCP server package

Two equivalent options, pick one:

**Option A: global install (recommended)**

```bash
npm install -g @geek-fun/data-studio-mcp
```

**Option B: no install needed (npx downloads on first run)**

```bash
npx -y @geek-fun/data-studio-mcp
```

Both work with every agent config below. `npx` resolves the package automatically (it prefers the global install when present, otherwise downloads it on demand). There is no server to host and no API keys to manage. Everything runs locally on your machine.

## 3. Register it in your AI coding agent

**OpenAI Codex**, one command:

```bash
codex mcp add data-studio -- npx -y @geek-fun/data-studio-mcp
```

Verify with `codex mcp list`.

**Claude Code**, one command:

```bash
claude mcp add --transport stdio data-studio -- npx -y @geek-fun/data-studio-mcp
```

For all projects (user scope):

```bash
claude mcp add --scope user --transport stdio data-studio -- npx -y @geek-fun/data-studio-mcp
```

**Cursor.** Create `.cursor/mcp.json` (project) or `~/.cursor/mcp.json` (global):

```json
{
  "mcpServers": {
    "data-studio": {
      "command": "npx",
      "args": ["-y", "@geek-fun/data-studio-mcp"]
    }
  }
}
```

**Windsurf.** Create `~/.codeium/windsurf/mcp_config.json` (global only):

```json
{
  "mcpServers": {
    "data-studio": {
      "command": "npx",
      "args": ["-y", "@geek-fun/data-studio-mcp"]
    }
  }
}
```

**OpenCode.** Add to `opencode.json` (project) or `~/.config/opencode/opencode.json` (global):

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "data-studio": {
      "type": "local",
      "command": ["npx", "-y", "@geek-fun/data-studio-mcp"],
      "enabled": true
    }
  }
}
```

Or run `opencode mcp add` interactively.

**Any other MCP client.** Register a stdio server with command `npx` and args `-y @geek-fun/data-studio-mcp`.

## 4. Tune permissions (optional)

Open **Settings → MCP Bridge** in DocKit/SqlKit to control what the agent can do:

| Permission mode | What the agent can do |
|---|---|
| **Read Only** (default) | Explore schemas, run SELECT queries. No writes. |
| **Data Read/Write** | INSERT, UPDATE, index operations. No deletes/drops. |
| **Full Access** | Everything, including DELETE, DROP, TRUNCATE. |

The mode is set per app. You can also restrict the connection allowlist (which connections the MCP server can reach) and mark individual connections read-only.

## 5. Start asking

Use plain language. The agent queries your databases for you:

- "List all tables in my PostgreSQL database"
- "Show me the last 10 orders from the Elasticsearch index `orders*`"
- "Find all users older than 30 in MongoDB"
- "Run this query and explain the results"

The agent reads your schema, runs the query, and shows you every step it executed.
