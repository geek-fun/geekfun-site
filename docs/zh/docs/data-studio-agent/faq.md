---
title: Data Studio Agent 常见问题
description: 常见问题汇总，涵盖免费许可、支持的 AI 工具、是否需要同时安装 DocKit 与 SqlKit、凭据是否会离开本机、代理是否可以修改数据、agent 框架来源等。
head:
  - - meta
    - name: keywords
      content: Data Studio Agent, 常见问题, FAQ, 免费, AI 工具, DocKit, SqlKit, 凭据安全, 数据修改
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/docs/data-studio-agent/faq
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/data-studio-agent/faq
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/data-studio-agent/faq
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/data-studio-agent/faq
---

# 常见问题

<details>
<summary>免费吗？</summary>

是的。Apache 2.0 许可，所有功能免费。

</details>

<details>
<summary>支持哪些 AI 工具？</summary>

任何支持 MCP 的工具：Claude Code、Cursor、Windsurf、OpenCode、Codex 等。

</details>

<details>
<summary>需要同时安装 DocKit 和 SqlKit 吗？</summary>

只需要安装与你数据库匹配的那个。SQL 数据库需要 SqlKit；NoSQL 数据库需要 DocKit。两个都装可获得完整工具集。

</details>

<details>
<summary>我的凭据会离开电脑吗？</summary>

不会。桥接运行在 `127.0.0.1`，所有连接在 DocKit/SqlKit 内部解析。代理只能看到连接元数据和查询结果。

</details>

<details>
<summary>代理可以修改数据吗？</summary>

默认情况下破坏性和提权操作会被桥接拒绝，通过 MCP 服务器只暴露只读能力。

</details>

<details>
<summary>agent 框架从哪来？</summary>

同一仓库还包含 `data-studio-agent` Rust 框架，即驱动 DocKit 和 SqlKit 内置助手的共享 AI 代理循环（provider 适配、流式输出、工具调用、上下文压缩）。

</details>
