---
title: Data Studio Agent 快速开始 — 安装 MCP 服务器
description: 快速上手 Data Studio Agent，完整四步配置：安装桌面应用、安装 MCP 包、在 AI 代理中注册、可选调整权限。
head:
  - - meta
    - name: keywords
      content: data-studio-mcp 安装, MCP 服务器配置, Claude Code MCP, Cursor MCP, Codex MCP
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/docs/data-studio-agent/quick-start
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/data-studio-agent/quick-start
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/data-studio-agent/quick-start
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/data-studio-agent/quick-start
---

# 快速开始

完整配置分四步：安装桌面应用、安装 MCP 包、在你的 AI 工具中注册，然后按需调整权限。

## 1. 前置条件：安装桌面应用

安装并启动 [DocKit](/products/dockit/) 和/或 [SqlKit](/products/sqlkit/)，添加至少一个数据库连接，并确保 **设置 → MCP Bridge → 自动启动** 已开启（默认开启）。

- **SQL** 数据库需要 SqlKit；**NoSQL** 数据库需要 DocKit。两个都装可获得完整工具集。
- MCP 服务器自动发现正在运行的后端，只有实际运行的应用所对应的工具才会被暴露。

## 2. 安装 MCP 服务器包

两种等价方式，任选其一：

**方式 A：全局安装（推荐）**

```bash
npm install -g @geek-fun/data-studio-mcp
```

**方式 B：无需安装（npx 首次运行自动下载）**

```bash
npx -y @geek-fun/data-studio-mcp
```

两种方式对下方所有 agent 配置都适用。`npx` 会自动解析包，如果已全局安装则优先使用全局版本，否则按需下载。无需托管服务器、无需管理 API key，一切都在你的机器上本地运行。

## 3. 在你的 AI 编码代理中注册

**OpenAI Codex**，一条命令：

```bash
codex mcp add data-studio -- npx -y @geek-fun/data-studio-mcp
```

用 `codex mcp list` 验证。

**Claude Code**，一条命令：

```bash
claude mcp add --transport stdio data-studio -- npx -y @geek-fun/data-studio-mcp
```

对所有项目生效（user 作用域）：

```bash
claude mcp add --scope user --transport stdio data-studio -- npx -y @geek-fun/data-studio-mcp
```

**Cursor。** 创建 `.cursor/mcp.json`（项目）或 `~/.cursor/mcp.json`（全局）：

```json
{
  "mcpServers": {
    "data-studio": {
      "command": "npx",
      "args": ["-y", "@geek-fun/data-studio-mcp"]
    }
  }
}
```

**Windsurf。** 创建 `~/.codeium/windsurf/mcp_config.json`（仅全局）：

```json
{
  "mcpServers": {
    "data-studio": {
      "command": "npx",
      "args": ["-y", "@geek-fun/data-studio-mcp"]
    }
  }
}
```

**OpenCode。** 添加到 `opencode.json`（项目）或 `~/.config/opencode/opencode.json`（全局）：

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "data-studio": {
      "type": "local",
      "command": ["npx", "-y", "@geek-fun/data-studio-mcp"],
      "enabled": true
    }
  }
}
```

或者运行 `opencode mcp add` 交互式配置。

**任何其他 MCP 客户端。** 注册一个 stdio 服务器，命令 `npx`，参数 `-y @geek-fun/data-studio-mcp`。

## 4. 调整权限（可选）

在 DocKit/SqlKit 中打开 **设置 → MCP Bridge**，控制代理能做什么：

| 权限模式 | 代理能做什么 |
|---|---|
| **只读**（默认） | 浏览 schema、运行 SELECT 查询。不可写。 |
| **数据读写** | INSERT、UPDATE、索引操作。不可删除/删表。 |
| **完全访问** | 一切操作，包括 DELETE、DROP、TRUNCATE。 |

每个应用独立设置模式。你还可以限制连接白名单（MCP 服务器可访问哪些连接），并将单个连接标记为只读。

## 5. 开始提问

直接用自然语言。代理会替你查询数据库：

- "列出我 PostgreSQL 数据库里的所有表"
- "显示 Elasticsearch `orders*` 索引里最近的 10 条订单"
- "找出 MongoDB 里所有大于 30 岍的用户"
- "运行这条查询并解释结果"

代理会读取 schema、执行查询、探索你的数据，然后展示它执行的每一条查询。