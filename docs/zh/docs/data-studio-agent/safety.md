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

Data Studio Agent 通过本机桥接调用 DocKit 和 SqlKit。应用使用连接 ID 查找数据库凭据，并在执行工具前检查操作权限。

- 可以为每条连接分别允许或拒绝读取、新增、更新、删除和管理操作。设为继承的操作使用系统默认值。至少允许一项操作，编程助手才能看到这条连接。
- 如果代理只需查看结构和执行只读查询，请选择**读取**。**读取与修改数据**包含删除权限。要限制写入范围，请使用**自定义**。
- 桌面应用会给出工具的风险级别，由 MCP 客户端决定是否弹出确认。实际执行前，桌面应用还会检查连接权限。
- 桌面应用在本机读取连接凭据。客户端可能把工具返回的数据发给模型，因此只开放任务需要的连接和操作。
- 桥接服务只监听 `127.0.0.1`。有关设置与故障排查，见 [SqlKit MCP 桥接](/zh/docs/sqlkit/mcp-bridge)或 [DocKit MCP 桥接](/zh/docs/dockit/mcp-bridge)。

连接权限和应用内确认方式见 [SqlKit AI 权限](/zh/docs/sqlkit/ai-permissions)或 [DocKit AI 权限](/zh/docs/dockit/ai-permissions)。
