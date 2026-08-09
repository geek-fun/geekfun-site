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

The LLM gets broad access to your data, but it never sees your credentials. The policy model gates every capability by risk level.

- **Credentials never leave the apps.** The LLM only ever sees an opaque `connection_id`. Real credentials are resolved inside DocKit/SqlKit and never cross the MCP boundary. Your passwords and keys stay on your machine, in your app.
- **ID-based resource access.** Agents access databases strictly by connection ID. Credentials never appear in prompts or tool arguments, so there is no path for the model to obtain or exfiltrate connection secrets.
- **Three-tier permission model.** Read Only / Data Read-Write / Full Access modes gate every capability by risk level, with per-connection overrides. You can mark any connection read-only or allowlist specific actions.
  - **Read Only** (default): explore schemas, run SELECT queries, and inspect query plans. Writes are rejected.
  - **Data Read/Write**: allows INSERT, UPDATE, and index management, while still blocking DELETE, TRUNCATE, and DDL.
  - **Full Access**: unlocks all capabilities; destructive operations still require explicit user confirmation (Ask).
- **Explicit user confirmation.** Destructive operations (DELETE, DROP, TRUNCATE) surface as `Ask` in the policy. The client prompts the user for explicit confirmation before anything destructive runs.
- **Action-level statement classification.** SQL is parsed and classified by statement kind (Read / Write / Delete / DDL) before execution. Write-only tools reject DELETE statements; delete tools reject DDL.
- **Local-only bridge.** The bridge binds to `127.0.0.1` exclusively. Other machines cannot reach it, and there's no server to host or API key to manage.
