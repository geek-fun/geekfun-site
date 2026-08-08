---
title: Data Studio Agent Documentation — MCP server for databases
description: Data Studio Agent is an open-source MCP server that lets AI coding agents talk to your databases in plain language. It routes queries to SqlKit (70+ SQL databases) and DocKit (NoSQL) bridges, runs locally on 127.0.0.1, and never exposes credentials.
head:
  - - meta
    - name: keywords
      content: data studio agent, MCP server, AI database assistant, SqlKit, DocKit, local-first, read-safe, 127.0.0.1, open source
  - - link
    - rel: canonical
      href: https://www.geekfun.club/docs/data-studio-agent/
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/data-studio-agent/
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/data-studio-agent/
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/data-studio-agent/
---

# Data Studio Agent

Data Studio Agent is a [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) server that gives AI coding agents direct access to your databases through the [DocKit](/products/dockit/) and [SqlKit](/products/sqlkit/) desktop apps. Instead of copy-pasting query results into your AI tool, your agent queries the databases for you in plain language.

- **SQL** (via SqlKit): 70+ databases (PostgreSQL, MySQL, SQL Server, Oracle, SQLite, DuckDB, ClickHouse, Snowflake, BigQuery, and more)
- **NoSQL** (via DocKit): Elasticsearch, OpenSearch, MongoDB, DynamoDB

It's local-first. The bridge binds to `127.0.0.1`, your credentials never leave the desktop apps, and only read-safe tools are exposed to the agent by default.

## How it works

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

The MCP server is a thin routing layer; all database drivers, SSH tunnels, and connection management live in DocKit and SqlKit. The bridge is local-only, so credentials never leave your machine.
