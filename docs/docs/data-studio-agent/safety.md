---
title: Data Studio Agent safety — local-first, permission modes
description: Security and safety details for Data Studio Agent, including local-only bridge, read-safe defaults, credential handling, and permission modes.
head:
  - - meta
    - name: keywords
      content: data studio agent safety, MCP security, read only mode, local only, credentials never leave
  - - link
    - rel: canonical
      href: https://www.geekfun.club/docs/data-studio-agent/safety/
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/data-studio-agent/safety/
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/data-studio-agent/safety/
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/data-studio-agent/safety/
---

# Safety

- **127.0.0.1 only** – the bridge binds exclusively to the localhost interface; it cannot be reached from other machines.
- **Read-safe tools** – destructive and elevated operations are rejected by the bridge. By default only read-only capabilities are exposed.
- **Credentials never leave the apps** – the LLM sees only an opaque `connection_id`. Real credentials are resolved inside DocKit/SqlKit and never cross the MCP boundary.
- **Three-tier permission model**
  - **Read Only** (default) – explore schemas, run SELECT queries, and inspect query plans. Write operations are blocked.
  - **Data Read/Write** – allows INSERT, UPDATE and index management while still blocking DELETE, TRUNCATE and DDL.
  - **Full Access** – unlocks all capabilities; destructive operations still require explicit user confirmation (Ask).
- **Explicit user confirmation** – DELETE, DROP, TRUNCATE surface as an *Ask* policy prompting the user before execution.
- **Action-level statement classification** – SQL statements are parsed and classified before execution; write-only tools reject DELETE statements, and delete-only tools reject DDL.
