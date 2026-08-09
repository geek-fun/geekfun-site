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

LLM 能广泛访问你的数据，但它永远看不到你的凭据。策略模型按风险等级管控每个能力。

- **凭据永不离开应用。** LLM 只能看到一个不透明的 `connection_id`。真实凭据在 DocKit/SqlKit 内部解析，绝不跨越 MCP 边界。你的密码和密钥始终留在本机、留在应用里。
- **基于 ID 的资源访问。** 代理严格通过连接 ID 访问数据库。凭据不会出现在提示词或工具参数中，模型没有途径获取或泄露连接密钥。
- **三级权限模型。** 只读 / 数据读写 / 完全访问三种模式按风险等级管控每个能力，支持连接级覆盖。你可以将任意连接标记为只读，或按操作白名单放行。
  - **只读**（默认）：探索 schema、执行 SELECT 查询、检查查询计划。写入操作被阻止。
  - **数据读写**：允许 INSERT、UPDATE 和索引管理，同时仍阻止 DELETE、TRUNCATE 和 DDL。
  - **完全访问**：解锁全部能力；破坏性操作仍需显式用户确认（Ask）。
- **显式用户确认。** 破坏性操作（DELETE、DROP、TRUNCATE）在策略中标记为 `Ask`。客户端在执行任何破坏性操作前都会弹出显式确认。
- **操作级语句分类。** SQL 在执行前按语句类型解析分类（读 / 写 / 删除 / DDL）。只写工具拒绝 DELETE 语句，删除工具拒绝 DDL。
- **仅本地桥接。** 桥接只绑定 `127.0.0.1`，其他机器无法访问。无需托管服务器、无需管理 API key。
