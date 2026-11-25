---
title: SqlKit 文档 | 桌面 SQL 数据库 GUI 客户端
description: 在 macOS、Windows 或 Linux 上安装 SqlKit，连接 MySQL、PostgreSQL、SQL Server、Oracle 或 SQLite，并运行和保存 SQL 查询。
---

# SqlKit 文档

SqlKit 是一款开源桌面数据库客户端，支持 macOS、Windows 和 Linux。连接服务器或打开本地数据库文件后，可以在同一个工作区查看表结构、编写 SQL 并检查查询结果。

<div class="docs-section-links">

- [安装 SqlKit](/zh/docs/sqlkit/installation)
- [查看功能](/zh/docs/sqlkit/capabilities)
- [查看支持的数据库](/zh/docs/sqlkit/supported-databases)

</div>

<DocsFigure src="/sqlkit-sql-editor-ui.png" alt="SqlKit 桌面端的数据库对象树、SQL 编辑器和查询结果" caption="查询工作区同时显示数据库结构、编辑器和查询结果。" :width="3424" :height="2224" eager />

## SqlKit 能做什么？

| 任务 | 从这里开始 |
| --- | --- |
| 保存本地或远程连接并测试访问 | [连接与驱动](/zh/docs/sqlkit/capabilities#connections) |
| 编写和保存 SQL，查看执行计划 | [SQL 编辑器与结果](/zh/docs/sqlkit/capabilities#query) |
| 查看列、键、索引和表之间的关系 | [表结构与 ER 图](/zh/docs/sqlkit/capabilities#schema) |
| 编辑数据行、导出结果或导入文件 | [表数据与传输](/zh/docs/sqlkit/capabilities#data) |
| 配置应用内助手或编程智能体 | [Agentic Data Studio](/zh/docs/sqlkit/agentic-datastudio) · [MCP 配置](/zh/docs/sqlkit/mcp-bridge) · [AI 权限](/zh/docs/sqlkit/ai-permissions) |

## 快速开始

1. [安装 SqlKit](/zh/docs/sqlkit/installation)。
2. 使用服务器地址或本地文件[连接数据库](/zh/docs/sqlkit/connect-to-database)。
3. [运行第一条 SQL 查询](/zh/docs/sqlkit/query-editor)，查看结果并保存 SQL。
4. 用[快捷键](/zh/docs/sqlkit/keyboard-shortcuts)执行语句或格式化 SQL。

## SqlKit 支持哪些数据库？

在**连接管理 → 添加新连接**中选择数据库类型。

| 连接方式 | 数据库 |
| --- | --- |
| 内置 TCP 驱动 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#tcp--> |
| 内置本地文件驱动 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#local--> |
| MySQL 兼容驱动 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#mysql--> |
| PostgreSQL 兼容驱动 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#postgresql--> |
| JDBC 桥接 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#jdbc--> |
| HTTP 连接 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#http--> |

连接要求见[支持的数据库与驱动](/zh/docs/sqlkit/supported-databases)。

## 可以不配置 AI 直接使用 SqlKit 吗？

可以。社区版包含数据库连接、SQL 编辑器和 CSV、JSON 结果导出。更多信息见[功能使用条件](/zh/docs/sqlkit/capabilities#requirements)和[版本对比](/zh/pricing)。
