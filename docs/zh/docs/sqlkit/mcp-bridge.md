---
title: 为 Codex、Claude Code 和 Cursor 配置 SqlKit MCP
description: 启动本地 SqlKit MCP 桥接，在编程工具中注册 Data Studio Agent，并验证已保存的 SQL 数据库连接。
---

# 通过 MCP 将编程智能体连接到 SqlKit

Data Studio Agent 是供外部编程工具使用的 MCP 服务。编程工具在本机启动该服务，服务再通过 SqlKit 的 MCP 桥接访问已保存的数据库连接。桥接需要旗舰版。若要使用 SqlKit 内置的助手，请查看 [Agentic Data Studio](/zh/docs/sqlkit/agentic-datastudio)。

## 准备 SqlKit {#prepare-sqlkit}

1. [安装并打开 SqlKit](/zh/docs/sqlkit/installation)，登录可使用旗舰版的账号，[保存一个测试通过的连接](/zh/docs/sqlkit/connect-to-database)。
2. 打开**设置 → MCP 桥接**，确认桥接正在运行。如有需要，重启桥接。开启自动启动后，桥接会随 SqlKit 启动。
3. 若仅需查看结构和执行读查询，在**默认 AI 权限**中选择**读取**。确认待使用的连接也允许读取，详见 [AI 权限](/zh/docs/sqlkit/ai-permissions)。使用时保持 SqlKit 运行。
4. 在运行编程工具的机器上安装 Node.js 18 或更高版本及 npm，并用 `npx --version` 确认可以执行 `npx`。

## 注册 Data Studio Agent {#register}

使用对应客户端的配置。客户端首次运行服务时，`npx` 会按需安装 npm 包。

::: code-group

<!--@include: @/.vitepress/includes/data-studio-mcp.md#codex-->

<!--@include: @/.vitepress/includes/data-studio-mcp.md#claude-->

<!--@include: @/.vitepress/includes/data-studio-mcp.md#cursor-->

:::

Codex 可用 `codex mcp list` 查看注册结果。Claude Code 可在会话中执行 `/mcp` 检查状态。Cursor 可将 JSON 保存到项目的 `.cursor/mcp.json` 或用户的 `~/.cursor/mcp.json`，再查看服务状态。若文件已包含 `mcpServers`，请将新条目合并到其中。

Windsurf、OpenCode 等客户端的配置见 [Data Studio Agent 快速开始](/zh/docs/data-studio-agent/quick-start)。

## 验证连接 {#verify}

先请编程工具列出可访问的 SqlKit 连接，再指定一个开发库，让它列出表名并保持只读。确认返回的是预期连接和表。客户端连上后，**设置 → MCP 桥接**会显示活动会话。

<DocsFigure src="/blog/codex-data-studio/codex-data-studio-architecture-branded-zh.png" alt="编程智能体通过本地 Data Studio Agent 和 SqlKit 桥接访问 SQL 数据库" caption="MCP 服务在本机运行，并通过 SqlKit 访问已保存的 SQL 连接。编程工具接收工具返回的结果。" :width="1800" :height="1080" />

## 排查桥接问题 {#troubleshoot}

| 现象 | 检查项 |
| --- | --- |
| 客户端无法启动服务 | 确认客户端能找到 `npx`，npm 可下载该包。改完配置后重新加载客户端。 |
| 服务已启动，但找不到 SqlKit | 打开 SqlKit，确认旗舰版状态和桥接状态。自动发现要求客户端与 SqlKit 在同一台机器上运行。 |
| 找不到某个已保存的连接 | 查看连接的有效 AI 权限。至少允许一项操作的连接才会显示。 |
| 查询或修改被拒绝 | 检查连接的 [AI 权限](/zh/docs/sqlkit/ai-permissions)和数据库账号权限。 |

[Codex 实操与截图](/zh/blog/connect-codex-databases-mcp) · [MCP 工具参考](/zh/docs/data-studio-agent/tools)
