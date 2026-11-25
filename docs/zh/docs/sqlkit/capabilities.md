---
title: SqlKit 功能 | SQL、数据操作、AI 与 MCP
description: 了解如何用 SqlKit 连接数据库、运行 SQL、查看 ER 图、编辑与传输数据，以及通过 MCP 接入编程智能体。
---

# SqlKit 功能

用 SqlKit 查看数据库结构、编写和保存 SQL、编辑数据行，并在数据库与文件之间导入和导出数据。本页介绍这些功能在桌面端的入口及使用条件。

<div class="docs-section-links">

- [安装 SqlKit](/zh/docs/sqlkit/installation)
- [查看支持的数据库](/zh/docs/sqlkit/supported-databases)
- [比较版本](/zh/pricing)

</div>

## 连接数据库 {#connections}

在**连接管理 → 添加新连接**中选择数据库类型，然后填写服务器地址或选择本地文件。测试成功后保存连接。Oracle 等使用 JDBC 的数据库需要 Java 运行时和相应驱动，SqlKit 会在测试连接时检查这些组件。

连接远程服务器时，可在连接表单中配置 TLS。旗舰版还可以使用可复用的 SSH 配置，或串联多台堡垒机。最后一台堡垒机需要能访问连接表单中的数据库地址。

[添加并测试连接](/zh/docs/sqlkit/connect-to-database) · [配置 SSH 隧道](/zh/docs/sqlkit/ssh-tunnel)

<DocsFigure src="/sqlkit-client-ui.png" alt="SqlKit 连接管理页中的多个已保存连接" caption="连接卡片显示数据库类型与连接信息，可从卡片打开数据库或编辑连接。" :width="3424" :height="2224" />

## 编写 SQL 与查看执行计划 {#query}

在**查询**工作区中，确认当前连接和数据库，再打开查询标签页。用元数据补全表名和列名，执行整个脚本、选中的 SQL 或光标所在的语句。结果显示在编辑器下方，可将返回的行导出为 CSV 或 JSON。

在支持的数据库上，使用**解释**查看执行计划。**分析执行**会实际执行语句并采集耗时。常用查询可以保存为 `.sql` 文件，也可以在**历史记录**中收藏并重新打开。

[运行查询并查看结果](/zh/docs/sqlkit/query-editor) · [快捷键](/zh/docs/sqlkit/keyboard-shortcuts)

<DocsFigure src="/sqlkit-sql-editor-ui.png" alt="SqlKit 查询工作区并列显示对象树、SQL 编辑器和结果表格" caption="在同一个工作区中浏览对象、编写 SQL 并查看结果。" :width="3424" :height="2224" />

## 查看表结构与关系 {#schema}

在对象树中选择连接可访问的数据库、模式、表或视图。打开表的**查看结构**页，了解列、键和索引。

旗舰版可在数据库或模式菜单中选择**展示ER图表**，查看数据库报告的外键关系。双击图中的表即可打开对应的数据表格。

[查看表结构](/zh/docs/sqlkit/table-browser)

<DocsFigure src="/sqlkit-er-diagram-ui.png" alt="SqlKit ER 图展示多张表、字段和外键关系" caption="ER 图将数据库报告的外键关系呈现在画布上，也可从图中打开数据表。" :width="3424" :height="2224" />

## 浏览、编辑与传输数据 {#data}

双击表名，在独立标签页中查看数据。驱动支持时，可筛选和排序。选择**编辑行**前，检查用于定位这行的值，确认账号具有写入权限。

旗舰版的**传输**工作区可以导入文件或导出表数据。以 CSV 导入为例，先预览源文件，再将字段映射到目标表，运行后检查任务结果。只需要当前查询返回的行时，可直接在结果表格中导出 CSV 或 JSON。

[浏览和编辑表数据](/zh/docs/sqlkit/table-browser) · [导入与导出文件](/zh/docs/sqlkit/import-export)

<DocsFigure src="/sqlkit-data-view-table-ui.png" alt="SqlKit 数据表格中的筛选条件和行操作" caption="筛选条件和行操作都在表格中，便于对照正在查看的数据。" :width="3424" :height="2224" />

## 在 SqlKit 中使用 AI {#ai}

Agentic Data Studio 属于旗舰版。配置自己的模型服务商或本地模型端点，再打开应用内助手。可以让它解释查询，或者基于当前数据库结构起草 SQL。例如，先请助手找出适合用于月度报表的日期字段，再到编辑器中检查生成的 SQL。

[配置 Agentic Data Studio](/zh/docs/sqlkit/agentic-datastudio)

<DocsFigure src="/sqlkit-data-studio-ui.png" alt="SqlKit 的 Agentic Data Studio 展示表结构和生成的 SQL" caption="助手根据数据库上下文起草 SQL，可在编辑器中检查后运行。" :width="1440" :height="935" />

## 通过 MCP 接入编程智能体 {#mcp}

旗舰版可在**设置 → MCP 桥接**中打开桥接，然后在编程工具中注册 [Data Studio Agent](/zh/docs/data-studio-agent/quick-start)。智能体通过本地桥接访问你允许它使用的 SqlKit 连接。

如果只需要查看结构和执行读查询，先将权限设为**只读**。例如，让 Codex 先列出 PostgreSQL 连接中的表，再查询指定记录。开放写入前要检查各连接的权限，数据库账号的权限仍然生效。

[配置 MCP 桥接](/zh/docs/sqlkit/mcp-bridge) · [设置 AI 权限](/zh/docs/sqlkit/ai-permissions)

## 核对数据库和版本要求 {#requirements}

- **数据库与驱动。** 是否能查看执行计划、编辑行或浏览特定对象，取决于数据库、驱动和账号权限。Cassandra 和 ScyllaDB 使用 CQL，表格提供数据预览。
- **社区版。** 可连接数据库、浏览对象、运行和保存 SQL，并将查询结果导出为 CSV 或 JSON。
- **旗舰版。** 提供 SSH 隧道、ER 图、传输工作区、Agentic Data Studio 和 MCP 桥接。详情见[版本对比](/zh/pricing)。
