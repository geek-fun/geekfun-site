---
title: Announcing Data Studio Agent. Your DBA.
description: Data Studio Agent. Your DBA. An open-source MCP server that lets AI coding agents talk to your databases in plain language, securely. It understands your schema, runs queries, and walks you through what it did. Here's how it works and how to set it up in under 5 minutes.
date: 2026-08-07
head:
  - - meta
    - name: keywords
      content: MCP server, Model Context Protocol, database MCP, AI agent database, Claude Code database, Cursor MCP, data-studio-mcp, data-studio-agent, SQL MCP, NoSQL MCP, PostgreSQL MCP, Elasticsearch MCP, MongoDB MCP, DynamoDB MCP, agentic database
  - - link
    - rel: canonical
      href: https://www.geekfun.club/blog/announcing-data-studio-mcp
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/announcing-data-studio-mcp
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/announcing-data-studio-mcp
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/announcing-data-studio-mcp
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Announcing Data Studio Agent. Your DBA.",
        "description": "Data Studio MCP is an open-source MCP server that connects AI coding agents to your databases through DocKit and SqlKit. Plain-language queries, read-safe by default, local-first.",
        "image": "https://www.geekfun.club/data-studio-agent-arch.svg",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "datePublished": "2026-08-07",
        "dateModified": "2026-08-07"
      }
---

# Announcing Data Studio Agent. Your DBA.

Your AI coding agent can now query your databases directly. Talk to them in plain language. Your 24/7 database engineer.

Today we're open-sourcing **[Data Studio Agent](https://github.com/geek-fun/data-studio-agent)**, a [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) server that connects Claude Code, Cursor, Windsurf, OpenCode, and Codex to your databases through [DocKit](/products/dockit/) and [SqlKit](/products/sqlkit/).

Ask in plain language. The agent reads your schemas, runs queries, and shows you every query it executes.

## What you can do now

- **"List all tables in my PostgreSQL database"** The agent connects through SqlKit, reads the schema, and returns the answer.
- **"Show me the last 10 orders from the Elasticsearch index `orders*`"** Routed through DocKit's NoSQL bridge.
- **"Find all users older than 30 in MongoDB"** Same bridge, plain-language query.
- **"Run this query and explain the results"** Execution plus explanation, all inside your coding agent.

No more copy-pasting query results into your AI tool. The agent works with your real data.

## SQL and NoSQL through one server

One npm package, one MCP config, two backends:

| Stack | Backend | Databases |
|-------|---------|-----------|
| SQL | SqlKit bridge (:9121) | PostgreSQL, MySQL, SQL Server, SQLite |
| NoSQL | DocKit bridge (:9120) | Elasticsearch, OpenSearch, MongoDB, DynamoDB |

Install both apps and your agent covers your whole data stack.

## How it works

The MCP server is a thin routing layer. All database drivers, SSH tunnels, and connection management live in the desktop apps, which expose a local HTTP bridge (`127.0.0.1` only). The MCP server auto-discovers running backends via each app's port file.

```
code agent (Claude Code / Cursor / OpenCode ...)
    |
    | MCP stdio protocol
    v
@geek-fun/data-studio-mcp   ← npm package (pure TypeScript)
    |
    | HTTP (localhost)
    +----------------+----------------+
    v                v
dockit:9120    sqlkit:9121
(NoSQL bridge)  (SQL bridge)
```

## Read-safe by default

Safety shaped the design from the start:

- **`127.0.0.1` only** The bridge is unreachable from other machines.
- **Read-safe tools** Destructive and elevated operations are rejected by the bridge. Only read-safe capabilities are exposed through the MCP server.
- **Credentials never leave the apps** All connections resolve inside DocKit/SqlKit. The agent only sees connection metadata and query results.

## Set it up in under 5 minutes

**1. Install and launch [DocKit](/products/dockit/) and/or [SqlKit](/products/sqlkit/)**, add a database connection, and keep **Settings → MCP Bridge → Auto-start** enabled (it's the default).

**2. Install the MCP server:**

```bash
npm install -g @geek-fun/data-studio-mcp
```

Or run without installing: `npx -y @geek-fun/data-studio-mcp`.

**3. Register it in your AI tool.** Codex and Claude Code are one command:

```bash
# OpenAI Codex
codex mcp add data-studio -- npx -y @geek-fun/data-studio-mcp

# Claude Code
claude mcp add --transport stdio data-studio -- npx -y @geek-fun/data-studio-mcp
```

Cursor, Windsurf, and OpenCode use a config file. See the [product page](/products/data-studio-agent/#quick-start) for the exact snippet for your agent. Any MCP client works: command `npx`, args `-y @geek-fun/data-studio-mcp`.

**4. Start asking.** That's it. By default the agent is read-only. Enable Full Access in Settings → MCP Bridge only if you want it to modify data.

## What's under the hood

The repository also contains the `data-studio-agent` Rust framework, the shared AI agent loop (provider adapters, streaming, tool calling, context compaction) that powers the built-in assistants in DocKit and SqlKit. The same engine is now exposed to your coding agent through MCP.

## Get started

- **[Product page](/products/data-studio-agent/)** Overview, install, and configuration.
- **GitHub:** [github.com/geek-fun/data-studio-agent](https://github.com/geek-fun/data-studio-agent)
- **npm:** [@geek-fun/data-studio-mcp](https://www.npmjs.com/package/@geek-fun/data-studio-mcp)

Free, open source, Apache 2.0. Your data stays on your machine.
