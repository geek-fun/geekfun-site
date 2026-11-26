---
title: MCP 桥接与编程智能体（Claude Code、Codex、Cursor） | SqlKit
description: 启动 SqlKit 本地 MCP 桥接，在 Claude Code、OpenAI Codex 或 Cursor 中注册 Data Studio Agent（@geek-fun/data-studio-mcp），并查阅全部 25 个注册数据库与 DBA 工具。
outline: [2, 3]
---

# MCP 桥接与编程智能体

<DocsBadge variant="ultimate">旗舰版</DocsBadge>

SqlKit 内嵌基于 Rust 和 Axum 的本地 HTTP **MCP 桥接**，让 Claude Code、OpenAI Codex、Cursor、Windsurf、OpenCode 等外部编程工具通过 **Data Studio Agent**（`@geek-fun/data-studio-mcp`）访问你在 SqlKit 中已授权的数据库连接。

<DocsFlowDiagram variant="mcp-bridge" />

外部编程工具不会接触到数据库密码、SSH 私钥或 TLS 证书。连接管理、权限校验和 SQL 语法树检查都由本机 SqlKit 执行。

## 准备 SqlKit 环境 {#prepare-sqlkit}

<DocsSteps>

### 确认旗舰版状态与已保存连接

打开 SqlKit 并登录**旗舰版**（或有效 7 天试用），确保**连接管理**中至少有一个已测试通过的数据库连接。

### 确认 MCP 桥接正在运行

进入**设置 → MCP 桥接**，确认状态显示**运行中（Running on port `<port>`）**；需要时可点击**重启桥接**。旗舰版激活后桥接会随应用自动启动，关闭主窗口后继续在系统托盘或菜单栏中运行。

### 配置默认与单连接 AI 权限

在**设置 → MCP 桥接 → 默认 AI 权限**中建议先设为**只读（Read）**，并核对目标连接的[AI 权限](/zh/docs/sqlkit/ai-permissions)允许读取。设为**无访问（No Access）**的连接不会出现在 MCP 发现列表中。

### 确认本机已安装 Node.js（`npx`）

确保运行编程客户端的机器上已安装 Node.js 18+ 与 `npm`：

```bash
npx --version
```

</DocsSteps>

## 在编程客户端中注册 Data Studio Agent {#register}

按你的工具选择下方配置（**设置 → MCP 桥接**内也提供一键复制标签页）。首次启动时 `npx -y` 会自动拉取 `@geek-fun/data-studio-mcp`。

::: code-group

<!--@include: @/.vitepress/includes/data-studio-mcp.md#codex-->

<!--@include: @/.vitepress/includes/data-studio-mcp.md#claude-->

<!--@include: @/.vitepress/includes/data-studio-mcp.md#cursor-->

:::

在 Codex 中执行 `codex mcp list` 核对 `data-studio` 是否已注册；在 Claude Code 会话中输入 `/mcp` 查看在线状态；在 Cursor 中将 JSON 写入项目级 `.cursor/mcp.json` 或用户级 `~/.cursor/mcp.json`（已有 `mcpServers` 时合并条目）后刷新 MCP 服务。Windsurf、OpenCode 等其他 stdio MCP 客户端请配置命令 `npx` 与参数 `["-y", "@geek-fun/data-studio-mcp"]`，更多示例见 [Data Studio Agent 快速开始](/zh/docs/data-studio-agent/quick-start)。

## 验证接入与监控活跃会话 {#verify}

1. 在编程工具中提问：“列出当前可访问的 SqlKit 连接，然后以只读方式查看 `<你的开发库连接>` 中的所有表，不要修改任何数据。”
2. 确认返回结果只包含安全连接元数据（ID、名称、引擎类型，不含密码），随后列出数据表。
3. 在**设置 → MCP 桥接**或点击系统托盘/菜单栏图标，查看当前活跃客户端会话（客户端名称、版本，30 秒心跳保活）或复制 Bridge URL。

## 注册的 25 个 MCP 工具总览

全部 25 个工具在 MCP 桥接、Agentic Data Studio 和查询页 AI 助手之间共享，按风险级别拆分：

| 类别 | 工具名 | 所需权限 |
| --- | --- | --- |
| 连接发现（1） | `sqlkit__list_connections` *（仅返回 id、名称与类型，不含密码）* | 至少具备一项允许操作 |
| 只读查询与结构探查（16） | `sqlkit__execute_query` *（经 AST 校验的只读 `SELECT`/`SHOW`/`EXPLAIN`）*、`sqlkit__list_databases`、`sqlkit__list_schemas`、`sqlkit__list_tables`、`sqlkit__get_schema`、`sqlkit__describe_table`、`sqlkit__explain_query`、`sqlkit__list_indexes`、`sqlkit__list_foreign_keys`、`sqlkit__list_views`、`sqlkit__list_procedures`、`sqlkit__list_functions`、`sqlkit__list_triggers`、`sqlkit__get_object_ddl`、`sqlkit__get_table_info`、`sqlkit__get_foreign_keys` | 只读（Read） |
| 数据写入 SQL（1） | `sqlkit__execute_write`（`INSERT`、`UPDATE`、`MERGE`） | 新增 / 更新 |
| 破坏性 SQL（2） | `sqlkit__execute_delete`（`DELETE`、`TRUNCATE`）、`sqlkit__execute_ddl`（`CREATE`、`ALTER`、`DROP`） | 删除 / 管理 |
| DBA 与运维诊断（5） | `sqlkit__list_sessions` *（只读）*、`sqlkit__get_slow_queries` *（只读）*、`sqlkit__kill_session` *（管理）*、`sqlkit__grant_privilege` *（管理）*、`sqlkit__revoke_privilege` *（管理）* | 只读或管理 |

完整参数定义见 [Data Studio Agent 工具参考](/zh/docs/data-studio-agent/tools)。

## 常见故障排查 {#troubleshoot}

| 现象 | 检查项 |
| --- | --- |
| 客户端无法启动 MCP 服务 | 确认 IDE 或 CLI 的 `PATH` 能找到 `npx`，且 npm 可下载 `@geek-fun/data-studio-mcp`；修改配置后重载客户端。 |
| MCP 已启动，但提示 SqlKit 不可用 | 确认 SqlKit 正在运行（前台或系统托盘均可）、旗舰版有效，且**设置 → MCP 桥接**显示正在监听端口。编程客户端与 SqlKit 需在同一台机器运行以完成本地发现。 |
| 某个已保存连接未出现在列表中 | 检查该连接生效的[AI 权限](/zh/docs/sqlkit/ai-permissions)。只有至少允许一项操作的连接才会向 MCP 暴露。 |
| 查询或变更被拒绝 | 核对该连接的 AI 权限（增、改、删、管理），同时确认数据库账号自身有相应权限。 |

## 下一步

<DocsCardGrid :cols="2">
  <DocsCard title="AI 权限与安全模型" description="了解 AST 写防护与单连接策略如何保护生产环境。" href="/zh/docs/sqlkit/ai-permissions" icon="shield" />
  <DocsCard title="Codex 实战图文教程" description="查看从零配置 OpenAI Codex 连接数据库的截图指南。" href="/zh/blog/connect-codex-databases-mcp" icon="book" />
</DocsCardGrid>
