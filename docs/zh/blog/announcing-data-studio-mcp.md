---
title: 发布 Data Studio Agent。你的 DBA。
description: Data Studio Agent。你的 DBA。一个开源的 MCP 服务器，让 AI 编码智能体用自然语言、安全地和你的数据库对话。它读懂你的 schema、执行查询、一步步讲给你听。5 分钟完成配置。
date: 2026-08-07
head:
  - - meta
    - name: keywords
      content: MCP 服务器, Model Context Protocol, 数据库 MCP, AI 代理访问数据库, Claude Code 数据库, Cursor MCP, data-studio-mcp, data-studio-agent, SQL MCP, NoSQL MCP, PostgreSQL MCP, Elasticsearch MCP, MongoDB MCP, DynamoDB MCP, 智能数据库
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/blog/announcing-data-studio-mcp
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
        "headline": "发布 Data Studio Agent。你的 DBA。",
        "description": "Data Studio MCP 是一个开源的 MCP 服务器，通过 DocKit 和 SqlKit 将 AI 编码代理连接到你的数据库。自然语言查询、默认只读安全、本地优先。",
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

# 发布 Data Studio Agent。你的 DBA。

你的 AI 编码智能体现在可以直接查询你的数据库了。用自然语言和它们对话，像一个 DBA 那样。

今天，我们开源了 **[Data Studio Agent](https://github.com/geek-fun/data-studio-agent)**，一个 [Model Context Protocol](https://modelcontextprotocol.io/)（MCP）服务器，通过 [DocKit](/products/dockit/) 和 [SqlKit](/products/sqlkit/) 将 Claude Code、Cursor、Windsurf、OpenCode、Codex 连接到你的数据库。

用自然语言提问。代理读取你的 schema、执行查询，并展示它运行的每一条查询。

## 现在你可以做到

- **"列出我 PostgreSQL 数据库里的所有表"** 代理通过 SqlKit 连接、读取 schema，直接给出答案。
- **"显示 Elasticsearch `orders*` 索引里最近的 10 条订单"** 通过 DocKit 的 NoSQL 桥接路由。
- **"找出 MongoDB 里所有大于 30 岁的用户"** 同一个桥接，自然语言查询。
- **"运行这条查询并解释结果"** 执行加解释，全部在你的编码代理里完成。

不用再把查询结果复制粘贴进 AI 工具了。代理直接基于你的真实数据工作。

## 一个服务器，SQL 和 NoSQL 通吃

一个 npm 包、一份 MCP 配置、两个后端：

| 数据栈 | 后端 | 数据库 |
|--------|------|--------|
| SQL | SqlKit 桥接 (:9121) | PostgreSQL、MySQL、SQL Server、SQLite |
| NoSQL | DocKit 桥接 (:9120) | Elasticsearch、OpenSearch、MongoDB、DynamoDB |

两个应用都安装，你的代理就能覆盖整个数据栈。

## 工作原理

MCP 服务器是一个薄路由层。所有数据库驱动、SSH 隧道和连接管理都在桌面应用里，应用暴露本地 HTTP 桥接（仅 `127.0.0.1`）。MCP 服务器通过每个应用的端口文件自动发现正在运行的后端。

```
代码代理 (Claude Code / Cursor / OpenCode ...)
    |
    | MCP stdio 协议
    v
@geek-fun/data-studio-mcp   ← npm 包（纯 TypeScript）
    |
    | HTTP（本地）
    +----------------+----------------+
    v                v
dockit:9120    sqlkit:9121
(NoSQL 桥接)    (SQL 桥接)
```

## 默认只读安全

安全从一开始就参与了设计：

- **仅绑定 `127.0.0.1`** 其他机器无法访问桥接。
- **只读工具** 破坏性和提权操作被桥接拒绝。通过 MCP 服务器只暴露只读能力。
- **凭据永不离开应用** 所有连接在 DocKit/SqlKit 内部解析。代理只能看到连接元数据和查询结果。

## 5 分钟完成配置

**1. 安装并启动 [DocKit](/products/dockit/) 和/或 [SqlKit](/products/sqlkit/)**，添加数据库连接，保持 **设置 → MCP Bridge → 自动启动** 开启（默认开启）。

**2. 安装 MCP 服务器：**

```bash
npm install -g @geek-fun/data-studio-mcp
```

或者不安装直接运行：`npx -y @geek-fun/data-studio-mcp`。

**3. 在你的 AI 工具中注册。** Codex 和 Claude Code 都是一条命令：

```bash
# OpenAI Codex
codex mcp add data-studio -- npx -y @geek-fun/data-studio-mcp

# Claude Code
claude mcp add --transport stdio data-studio -- npx -y @geek-fun/data-studio-mcp
```

Cursor、Windsurf 和 OpenCode 使用配置文件。每种 agent 的精确配置片段见[产品页快速开始](/zh/products/data-studio-agent/#快速开始)。任何 MCP 客户端都可用：命令 `npx`，参数 `-y @geek-fun/data-studio-mcp`。

**4. 开始提问。** 就这么简单。默认情况下代理是只读的。只有当你希望它修改数据时，才在设置 → MCP Bridge 中开启完全访问。

## 底层架构

该仓库还包含 `data-studio-agent` Rust 框架，即驱动 DocKit 和 SqlKit 内置助手的共享 AI 代理循环（provider 适配、流式输出、工具调用、上下文压缩）。同一引擎现在通过 MCP 开放给你的编码代理。

## 开始使用

- **[产品页](/products/data-studio-agent/)** 概览、安装与配置。
- **GitHub：** [github.com/geek-fun/data-studio-agent](https://github.com/geek-fun/data-studio-agent)
- **npm：** [@geek-fun/data-studio-mcp](https://www.npmjs.com/package/@geek-fun/data-studio-mcp)

免费、开源、Apache 2.0。你的数据始终留在你的电脑上。
