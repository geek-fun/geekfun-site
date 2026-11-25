---
title: Data Studio Agent safety — local-first, permission modes
description: Security and safety details for Data Studio Agent, including local-only bridge, read-safe defaults, credential handling, and permission modes.
head:
  - - meta
    - name: keywords
      content: data studio agent safety, MCP security, read only mode, local only, credentials never leave
  - - link
    - rel: canonical
      href: https://www.geekfun.club/docs/data-studio-agent/safety
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/data-studio-agent/safety
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/data-studio-agent/safety
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/data-studio-agent/safety/
---

# Safety

Data Studio Agent calls DocKit and SqlKit through a local bridge. Each app resolves database credentials by connection ID and checks action permissions before executing a tool.

- On a connection, you can allow or deny reading, creating, updating, deleting, and managing separately. An inherited action follows the system default. The client can find a connection only if the policy allows at least one action.
- Choose **Read** for schema inspection and read queries. **Read & modify data** includes deletion. Choose **Custom** for a narrower set of writes.
- The desktop app reports each tool’s risk level. The MCP client decides when to prompt, and the app checks the connection’s permissions before it runs the tool.
- The desktop app looks up connection secrets on your machine. Your client may send query results to its model, so allow only the connections and actions it needs.
- The bridge listens on `127.0.0.1`. For setup and troubleshooting, see the [SqlKit MCP bridge](/docs/sqlkit/mcp-bridge) or [DocKit MCP bridge](/docs/dockit/mcp-bridge) guide.

See [SqlKit AI permissions](/docs/sqlkit/ai-permissions) or [DocKit AI permissions](/docs/dockit/ai-permissions) for connection overrides and in-app confirmations.
