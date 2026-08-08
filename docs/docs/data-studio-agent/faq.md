---
title: Data Studio Agent FAQ
description: Frequently asked questions about Data Studio Agent – licensing, supported AI tools, back-ends, security, and more.
head:
  - - meta
    - name: keywords
      content: data studio agent faq, MCP server questions, AI coding agents, security, licensing
  - - link
    - rel: canonical
      href: https://www.geekfun.club/docs/data-studio-agent/faq/
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/data-studio-agent/faq/
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/data-studio-agent/faq/
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/data-studio-agent/faq/
---

# FAQ

**Is Data Studio Agent free?**

Yes. It is released under the Apache 2.0 license and can be used without cost.

**Which AI coding agents are supported?**

Claude Code, Codex, Cursor, Windsurf, OpenCode, and any other MCP-compatible client.

**Does it work with both DocKit and SqlKit?**

Exactly. SqlKit provides the SQL bridge (port 9121) and DocKit provides the NoSQL bridge (port 9120). The MCP server routes to the appropriate bridge automatically.

**Do credentials ever leave my machine?**

No. The LLM only receives an opaque `connection_id`. Real database credentials are resolved inside DocKit/SqlKit and never cross the MCP boundary.

**Can the agent modify data?**

Write operations are gated by the permission model. By default the server is *Read Only*. Enable **Data Read/Write** or **Full Access** in Settings → MCP Bridge to allow inserts, updates, or full destructive commands (with explicit confirmation).

**Where does the agent framework come from?**

The repository includes the `data-studio-agent` Rust framework that powers the built-in assistants in DocKit and SqlKit. The same engine is exposed to external AI agents through the MCP server.
