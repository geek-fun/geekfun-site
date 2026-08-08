---
title: Data Studio Agent 安全 — 本地优先与权限模式
description: Data Studio Agent 的安全设计：仅本机访问、只读默认、凭据不外泄，提供三种权限模式以满足不同需求。
head:
  - - meta
    - name: keywords
      content: Data Studio Agent, 安全, 本地优先, 只读, 权限模式, MCP, 凭据安全
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/docs/data-studio-agent/safety
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
      href: https://www.geekfun.club/docs/data-studio-agent/safety
---

# 安全

- 桥接只绑定 `127.0.0.1`，其他机器无法访问。
- 破坏性与提权操作被桥接拒绝。通过 MCP 服务器只暴露只读能力。
- 凭据永远不会暴露给代理。所有连接都在桌面应用内部解析。
