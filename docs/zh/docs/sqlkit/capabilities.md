---
title: SqlKit 功能概览与版本对比 | SQL、数据、结构、AI 与 MCP
description: 介绍 SqlKit 桌面端的连接管理、Monaco SQL 编辑器、可视化执行计划、交互式 ER 图、虚拟滚动表格、批量传输、Agentic Data Studio、MCP 桥接与版本差异。
outline: [2, 3]
---

# 功能概览与版本对比

查看 SqlKit 桌面端各个工作区的入口、实现方式以及社区版与旗舰版的区别。

<div class="docs-section-links">

- [安装 SqlKit](/zh/docs/sqlkit/installation)
- [支持的数据库（68+）](/zh/docs/sqlkit/supported-databases)
- [查看定价方案](/zh/pricing)

</div>

## 连接数据库与网络通道 {#connections}

在**连接管理**页面，可以用网格或列表视图管理所有已保存连接，按名称、主机或数据库类型搜索，并查看连接状态。

- 内置 68 种数据库配置，覆盖原生 Rust 驱动（PostgreSQL、MySQL、SQL Server、SQLite、SQLCipher、ClickHouse）、PG/MySQL 兼容协议引擎、HTTP SQL 引擎以及 27 种 JDBC 桥接引擎。
- 支持 `disable`、`prefer`、`require`、`verify-ca`、`verify-full` 五档 SSL/TLS 模式，可指定自定义 CA 证书、客户端证书和私钥；SQL Server 提供 `Trust Server Certificate` 开关。
- Connection Guardian 在后台检测断连并在需要时重建会话，但不会在恢复期间重放写语句。
- 测试 Oracle、DuckDB、Snowflake、BigQuery、Cassandra 等 JDBC 连接时，以三步进度条自动检查并准备 JRE 25、`jdbc-bridge` 和对应驱动。
- 旗舰版 <DocsBadge variant="ultimate">旗舰版</DocsBadge> 支持可复用 SSH 配置、拖拽排序多跳堡垒机、串联系统 HTTP CONNECT 代理、`~/.ssh/config` 别名自动解析，以及密码、私钥、SSH Agent 与 Windows Pageant 认证。

[连接数据库、TLS 与重连](/zh/docs/sqlkit/connect-to-database) · [SSH 隧道与多跳堡垒机](/zh/docs/sqlkit/ssh-tunnel)

<DocsFigure src="/sqlkit-client-ui.png" alt="SqlKit 连接管理页中的多个已保存数据库连接卡片" caption="支持网格和列表视图切换与搜索，双击卡片即可连接并进入查询工作区。" :width="3424" :height="2224" />

## 编写 SQL 与查看执行计划 {#query}

在**查询**工作区中，对象树、多标签页 Monaco 编辑器、已保存查询面板和下方结果表格位于同一界面。

- 元数据自动补全支持 6 种方言配置（`sql`、`mysql`、`pgsql`、`mssql`、`plsql`、`sqlite`），基于本地缓存提示数据库、模式、表、列、函数、类型与关键字。
- SQL 格式化支持 17 种方言，按 <kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd>（macOS）或 <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd>（Windows/Linux）格式化选区或全文。
- 每条语句首行左侧带播放图标，右键可单独执行、格式化或复制；语句拆分器支持 PostgreSQL `$$` 美元引号和 CQL `BEGIN ... APPLY BATCH`，结果区支持多结果集下拉切换。
- 按 <kbd>F6</kbd> 查看可视化 `EXPLAIN` 和 `EXPLAIN ANALYZE`，可在成本树（标记最高开销节点）、汇总表与原始输出之间切换。
- 按 <kbd>⌘</kbd>+<kbd>S</kbd> / <kbd>Ctrl</kbd>+<kbd>S</kbd> 保存 `.sql` 文件；在**历史记录**中按状态筛选、收藏常用语句并一键在新标签页重新打开。

[SQL 编辑器、执行计划与历史](/zh/docs/sqlkit/query-editor) · [快捷键](/zh/docs/sqlkit/keyboard-shortcuts)

<DocsFigure src="/sqlkit-sql-editor-ui.png" alt="SqlKit 查询工作区并列展示对象树、Monaco SQL 编辑器和结果表格" caption="对象树、多标签页 SQL 编辑器与结果表格在同一工作区内联动显示。" :width="3424" :height="2224" />

## 浏览表结构、DDL 与 ER 图 {#schema}

左侧对象树按具体引擎能力显示数据库、模式、表、视图、存储过程和函数。

- 每个打开的表标签页底部包含 **Data（数据）**、**Schema（列结构）**、**Indexes（索引）**、**Foreign Keys（外键）** 和 **Triggers（触发器）** 五个视图及实时数量统计。
- 可视化建表器支持列上下排序、27 种常用 SQL 类型、长度与精度、`NOT NULL`、自增、主键、默认值和 MySQL 存储引擎选择，并在下方实时预览 `CREATE TABLE` DDL。
- 支持查看和复制表、视图、存储过程、函数的 `CREATE` 脚本，新建数据库时可按引擎设置字符集/排序规则（MySQL）或编码/区域设置（PostgreSQL）。
- 旗舰版 <DocsBadge variant="ultimate">旗舰版</DocsBadge> 可从数据库或模式菜单打开**展示 ER 图表**，使用 `dagre` 自动排版外键关系，支持拖拽微调、10%-300% 缩放与触控板捏合、点击高亮关联表、双击直接打开数据表。

[结构浏览、建表与 ER 图](/zh/docs/sqlkit/schema-and-er-diagrams)

<DocsFigure src="/sqlkit-er-diagram-ui.png" alt="SqlKit 交互式 ER 图展示多张表、字段类型和外键连线" caption="ER 图直接读取数据库外键关系，支持点击高亮关联表和双击打开数据表。" :width="3424" :height="2224" />

## 浏览、编辑与批量传输数据 {#data}

双击对象树中的表即可浏览和修改数据，或打开**传输**工作区批量导入导出文件。

- 虚拟滚动表格基于 `@tanstack/vue-virtual` 渲染，支持吸顶列头、拖拽列宽、列显隐切换和服务端分页。
- 支持全表防抖搜索、SQL `WHERE` 过滤框，以及查询结果网格的后端列筛选（`=`、`≠`、`LIKE`、`≥`、`≤`、`BETWEEN`）和右键单元格快速过滤。
- 在**编辑行**弹窗中修改字段（含独立**设为 NULL** 勾选框与主键保护），支持**复制行**和**批量删除**。单表 `SELECT` 查询结果也会自动检测可编辑性，支持直接编辑。
- **行详情**与 **JSON 查看器**用于查看复杂字段；支持将单元格、选中行或结果集复制或导出为 CSV、JSON 或 SQL `INSERT`。
- 旗舰版 <DocsBadge variant="ultimate">旗舰版</DocsBadge> 的**传输**工作区提供 4 步导出（表/库/服务器范围）和导入向导，支持 CSV、JSONL、SQL、Excel（`.xlsx`），包含格式自动识别、字段映射、`Skip`/`Replace`/`Upsert`/`Abort` 冲突策略、Dry Run 演练和后台任务面板。

[数据表格与行编辑](/zh/docs/sqlkit/table-browser) · [批量导入与导出](/zh/docs/sqlkit/import-export)

<DocsFigure src="/sqlkit-data-view-table-ui.png" alt="SqlKit 表格数据浏览器的筛选控件与行操作菜单" caption="搜索、SQL 过滤、列显隐和行操作集中在同一工具栏中。" :width="3424" :height="2224" />

## 在 SqlKit 内使用 AI {#ai}

<DocsBadge variant="ultimate">旗舰版</DocsBadge>

SqlKit 内置两套 AI 界面，都使用你自带的模型密钥或本地推理服务（内置 20 个预设，包括 OpenAI、Anthropic、Google Gemini、DeepSeek、Grok、Mistral、Azure OpenAI、OpenRouter、Ollama、LM Studio 以及自定义 OpenAI / Anthropic 兼容端点）。

- **Agentic Data Studio**（`/data-studio`）是全屏多数据源工作区，可同时挂载多个连接，对话持久化保存在本地 SQLite 中，支持上下文占用监控与自动压缩，以及按会话切换 `Ask` / `Auto` 模式。
- **查询页 AI 助手侧边栏**位于**查询**页右侧（宽 320-600 px，可拖拽调节），自动读取当前活动连接、模式与编辑器 SQL，适合解释语句、排查报错和改写慢查询。
- 支持配置全局系统提示词以及单连接业务上下文提示词（如软删除字段、金额单位或表命名约定）。

[配置 Agentic Data Studio](/zh/docs/sqlkit/agentic-datastudio)

<DocsFigure src="/sqlkit-data-studio-ui.png" alt="SqlKit Agentic Data Studio 展示表结构上下文、模型选择器和生成的 SQL" caption="Agentic Data Studio 读取真实表结构起草 SQL，并展示每次工具调用。" :width="1440" :height="935" />

## 通过 MCP 接入外部编程智能体 {#mcp}

<DocsBadge variant="ultimate">旗舰版</DocsBadge>

在**设置 → MCP 桥接**启用本地桥接后，通过 `npx -y @geek-fun/data-studio-mcp` 即可把已授权的 SqlKit 连接开放给 Claude Code、OpenAI Codex、Cursor 等 stdio MCP 客户端。

- 25 个注册工具覆盖连接发现、元数据查询、AST 校验只读查询、执行计划、受控写入/删除/DDL、会话列表与慢查询诊断。
- 外部 MCP 客户端遵循与内置 AI 相同的单连接权限策略（无访问、只读、读写数据、完全访问、自定义）。
- 关闭主窗口后 MCP 桥接在后台托盘继续运行，并显示当前活跃客户端会话。

[MCP 桥接与编程智能体](/zh/docs/sqlkit/mcp-bridge) · [AI 权限与安全模型](/zh/docs/sqlkit/ai-permissions)

## 版本能力对比与使用条件 {#requirements}

### 社区版 vs. 旗舰版

| 能力项 | 社区版 <DocsBadge variant="community">免费</DocsBadge> | 旗舰版 <DocsBadge variant="ultimate">付费 / 试用</DocsBadge> |
| --- | :---: | :---: |
| 全部 68 种数据库连接（原生、兼容协议、HTTP、JDBC） | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> |
| 5 档 SSL/TLS 与自定义 CA/客户端证书 | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> |
| JRE 25 与 27 种 JDBC 驱动自动安装管理 | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> |
| Monaco SQL 编辑器、6 方言补全与 17 方言格式化 | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> |
| 可视化 `EXPLAIN` / `EXPLAIN ANALYZE`（树/表/原始输出） | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> |
| 对象浏览器、可视化建表器、对象 DDL 查看器 | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> |
| 虚拟滚动数据表格、筛选、排序与行编辑/复制/删除 | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> |
| 查询历史、收藏、本地 `.sql` 管理、结果 CSV/JSON/SQL 导出 | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> |
| 7 种界面语言、浅色/深色/跟随系统主题、签名自动更新 | <DocsCheck value="yes" /> | <DocsCheck value="yes" /> |
| SSH 隧道与多跳堡垒机链 | <DocsCheck value="no" /> | <DocsCheck value="yes" /> |
| 交互式 ER 图 | <DocsCheck value="no" /> | <DocsCheck value="yes" /> |
| 批量传输工作区（CSV、JSONL、SQL、Excel 导入导出） | <DocsCheck value="no" /> | <DocsCheck value="yes" /> |
| Agentic Data Studio 与 AI 助手侧边栏（BYOK） | <DocsCheck value="no" /> | <DocsCheck value="yes" /> |
| 本地 MCP 桥接与 AI 权限策略编辑 | <DocsCheck value="no" /> | <DocsCheck value="yes" /> |

::: tip 版本锁定授权保障
旗舰版提供 7 天免费试用和版本锁定机制：在订阅有效期内发布的任意 SqlKit 版本，即便日后取消订阅，仍可在本地长期使用。详见[定价方案](/zh/pricing)。
:::

### 数据库引擎与权限边界

执行计划格式、行编辑与特定对象节点（模式、视图、存储过程、触发器）取决于对应数据库引擎、驱动支持以及数据库账号权限。Cassandra 和 ScyllaDB 使用 CQL（直查 `system_schema`），无外键和视图，表格只做预览，过滤与排序请在 CQL 编辑器中执行。SqlKit 始终以连接中配置的数据库账号权限执行操作。
