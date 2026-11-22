---
title: Data Studio Agent 文档 — 数据库 MCP 服务器
description: MCP 服务器文档，通过 SqlKit 和 DocKit 连接 SQL 与 NoSQL 数据库，本地优先，仅绑定 127.0.0.1，可按操作配置连接权限。
head:
  - - meta
    - name: keywords
      content: MCP 服务器, 数据库 MCP, AI 代理访问数据库, Data Studio Agent, data-studio-mcp, SQL, NoSQL, DocKit, SqlKit, 本地优先, 只读, 安全, 开源
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/docs/data-studio-agent/
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

## Data Studio Agent 是什么？

Data Studio Agent 是一个 [Model Context Protocol](https://modelcontextprotocol.io/)（MCP）服务器，通过 [DocKit](/products/dockit/) 和 [SqlKit](/products/sqlkit/) 桌面应用，让 AI 编码代理直接访问你的数据库。不用再把查询结果复制粘贴到 AI 工具里，代理直接替你查数据库，用自然语言就行。

- 通过 SqlKit 连接 PostgreSQL、MySQL、SQL Server、Oracle、SQLite、DuckDB、ClickHouse、Snowflake、BigQuery 等 SQL 数据库。
- 通过 DocKit 连接 Elasticsearch、OpenSearch、MongoDB 和 DynamoDB 等 NoSQL 数据库。

桥接只监听 `127.0.0.1`。DocKit 和 SqlKit 会在本机读取数据库凭据。编程助手能做什么，取决于该连接的 [AI 权限](/zh/docs/data-studio-agent/safety)。

## 工作原理

```text
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
    |                |
    v                v
Elasticsearch    PostgreSQL
MongoDB          MySQL
DynamoDB         SQL Server
OpenSearch       SQLite
```

MCP 服务器是一个薄路由层。所有数据库驱动、SSH 隧道和连接管理都在桌面应用里，应用暴露本地 HTTP 桥接（仅 `127.0.0.1`）。MCP 服务器通过每个应用的端口文件自动发现正在运行的后端。
