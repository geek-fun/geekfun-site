---
title: SqlKit 功能概览与版本对比 | SQL、数据、结构、AI 与 MCP
description: 图文导览 SqlKit 桌面端核心工作区：连接管理、Monaco SQL 编辑器、可视化执行计划、交互式 ER 图、虚拟滚动表格、批量传输、Agentic Data Studio、MCP 桥接与版本对比。
outline: [2, 3]
---

# 功能概览与版本对比

本页带你逐一了解 SqlKit 桌面端的六大核心工作区——每个能力在界面中的入口、底层实现方式，以及**社区版**与**旗舰版**的详细对照。

<div class="docs-section-links">

- [安装 SqlKit](/zh/docs/sqlkit/installation)
- [支持的数据库（68+）](/zh/docs/sqlkit/supported-databases)
- [查看定价方案](/zh/pricing)

</div>

## 连接数据库与网络通道 {#connections}

在**连接管理**页面，你可以以网格或列表视图管理所有已保存连接，按名称、主机或数据库类型快速检索，并实时查看在线状态：

- **68 种数据库配置**：内置原生 Rust 驱动（PostgreSQL、MySQL、SQL Server、SQLite、SQLCipher、ClickHouse）、PG/MySQL 兼容协议引擎、HTTP SQL 引擎以及 27 种 JDBC 桥接引擎。
- **完整的 SSL/TLS 支持**：支持 `disable`、`prefer`、`require`、`verify-ca`、`verify-full` 五档模式，可挂载自定义 CA 证书、客户端证书与私钥，SQL Server 支持 `Trust Server Certificate` 开关。
- **Connection Guardian 自动恢复**：后台监测连接健康状态，遇到网络抖动或空闲断连时自动完成一次性会话重建，且绝不盲目重放写语句。
- **按需 JDBC 初始化**：测试 Oracle、DuckDB、Snowflake、BigQuery、Cassandra 等 JDBC 连接时，以三步进度条自动准备 JRE 25、`jdbc-bridge` 与数据库驱动。
- **SSH 隧道与多跳堡垒机** <DocsBadge variant="ultimate">旗舰版</DocsBadge>：全局复用 SSH 配置，拖拽编排多跳堡垒机链路，支持串联系统代理、密码/私钥/SSH Agent/Windows Pageant 认证及 `known_hosts` 主机密钥固定。

[连接数据库、TLS 与重连](/zh/docs/sqlkit/connect-to-database) · [SSH 隧道与多跳堡垒机](/zh/docs/sqlkit/ssh-tunnel)

<DocsFigure src="/sqlkit-client-ui.png" alt="SqlKit 连接管理页中的多个已保存数据库连接卡片" caption="支持网格/列表切换与即时搜索，点击卡片即可连接并进入查询工作区。" :width="3424" :height="2224" />

## 编写 SQL 与查看执行计划 {#query}

在**查询**工作区，左侧对象树、多标签页 **Monaco 编辑器**、已保存查询面板与下方结果表格协同工作：

- **6 方言元数据补全**：基于本地缓存结构实时补全数据库、模式、表、列、函数、数据类型和关键字（覆盖 `sql`、`mysql`、`pgsql`、`mssql`、`plsql`、`sqlite`）。
- **17 方言 SQL 格式化**：按 <kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd>（macOS）或 <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd>（Windows/Linux）格式化选中文本或整个脚本。
- **智能语句拆分与执行**：支持行首播放图标、右键单条执行/格式化/复制，原生兼容 PostgreSQL `$$` 美元引号与 CQL `BEGIN ... APPLY BATCH`，支持多结果集下拉切换。
- **可视化 `EXPLAIN` / `EXPLAIN ANALYZE`**（<kbd>F6</kbd>）：提供交互式**成本树视图**（自动高亮开销最高节点）、**汇总表**与**原始输出**三种视图。
- **已保存查询与历史记录**：<kbd>⌘</kbd>+<kbd>S</kbd> / <kbd>Ctrl</kbd>+<kbd>S</kbd> 保存本地 `.sql` 文件；在**历史记录**中按状态筛选、收藏常用语句并一键在新标签页重跑。

[SQL 编辑器、执行计划与历史](/zh/docs/sqlkit/query-editor) · [快捷键](/zh/docs/sqlkit/keyboard-shortcuts)

<DocsFigure src="/sqlkit-sql-editor-ui.png" alt="SqlKit 查询工作区并列展示对象树、Monaco SQL 编辑器和结果表格" caption="对象树、多标签页 SQL 编辑器与结果表格保持同屏联动。" :width="3424" :height="2224" />

## 浏览表结构、DDL 与 ER 图 {#schema}

左侧对象树按具体引擎能力自适应呈现**数据库、模式、表、视图、存储过程与函数**：

- **表元信息五联标签页**：打开任意表即可在底部切换 **Data（数据）**、**Schema（列结构）**、**Indexes（索引）**、**Foreign Keys（外键）** 与 **Triggers（触发器）**，并显示实时计数。
- **可视化建表器**：支持列上下排序、27 种常见 SQL 类型、长度/精度、`NOT NULL`、自增、主键、默认值及 MySQL 存储引擎选择，并在下方**实时预览 `CREATE TABLE` DDL**。
- **对象 DDL 查看与建库建模式**：一键查看并复制表、视图、存储过程、函数的 `CREATE` 脚本，支持建库时的字符集/排序规则（MySQL）或编码/区域设置（PostgreSQL）。
- **交互式 ER 图** <DocsBadge variant="ultimate">旗舰版</DocsBadge>：从数据库或模式菜单打开**展示 ER 图表**，基于 `dagre` 自动布局外键关系，支持拖拽表卡片微调、10%–300% 缩放/触控板捏合、点击高亮关联表、双击直接打开数据表。

[结构浏览、建表与 ER 图](/zh/docs/sqlkit/schema-and-er-diagrams)

<DocsFigure src="/sqlkit-er-diagram-ui.png" alt="SqlKit 交互式 ER 图展示多张表、字段类型和外键连线" caption="ER 图直接读取数据库外键关系并支持交互式高亮与双击打开表数据。" :width="3424" :height="2224" />

## 浏览、编辑与批量传输数据 {#data}

双击对象树中的表即可浏览和修改数据，或打开**传输**工作区进行大批量文件导入导出：

- **虚拟滚动数据表格**：基于 `@tanstack/vue-virtual` 渲染，支持吸顶列头、拖拽列宽、列显隐切换与服务端分页。
- **搜索、SQL 过滤与列筛选标签**：组合使用全表防抖搜索、SQL `WHERE` 过滤框，以及查询结果网格的后端列筛选（`=`、`≠`、`LIKE`、`≥`、`≤`、`BETWEEN`）与右键单元格快速过滤。
- **主键感知的行编辑**：通过带校验的**编辑行**弹窗修改字段（含独立 **设为 NULL** 勾选框与主键保护），支持**复制行**与**批量删除**。单表 `SELECT` 查询结果也会自动检测可编辑性，支持直接修改。
- **详情查看与快速导出**：通过**行详情**与 **JSON 查看器**检视复杂字段；支持将单元格、选中行或结果集复制/导出为 **CSV**、**JSON** 或 **SQL `INSERT`**。
- **批量传输工作区** <DocsBadge variant="ultimate">旗舰版</DocsBadge>：4 步**导出**（表/库/服务器范围）与**导入**向导，支持 **CSV、JSONL、SQL、Excel（`.xlsx`）**，提供自动格式识别、字段映射、冲突策略（`Skip` / `Replace` / `Upsert` / `Abort`）、**Dry Run** 演练与后台任务面板。

[数据表格与行编辑](/zh/docs/sqlkit/table-browser) · [批量导入与导出](/zh/docs/sqlkit/import-export)

<DocsFigure src="/sqlkit-data-view-table-ui.png" alt="SqlKit 表格数据浏览器的筛选控件与行操作菜单" caption="搜索、SQL 过滤、列显隐与行操作集中在同一数据网格中。" :width="3424" :height="2224" />

## 在 SqlKit 内使用 AI {#ai}

<DocsBadge variant="ultimate">旗舰版</DocsBadge>

SqlKit 内置两套 AI 协作界面，全部采用 **BYOK（自带密钥或本地模型）** 架构，内置 **20 个服务商预设**（OpenAI、Anthropic、Google Gemini、DeepSeek、Grok、Mistral、Azure OpenAI、OpenRouter、Ollama、LM Studio 及自定义 OpenAI / Anthropic 兼容端点）：

- **Agentic Data Studio**（`/data-studio`）：全屏多数据源智能体工作区，可同时挂载多个连接、持久化保存 SQLite 会话历史、实时监控上下文占用并自动压缩、按会话切换 `Ask` / `Auto` 确认模式。
- **查询页 AI 助手侧边栏**：位于**查询**页面右侧的可拖拽抽屉（320–600 px），自动感知当前活动连接、模式与编辑器 SQL 上下文，适合就地解释 SQL、排查报错与优化执行计划。
- **全局与单连接自定义提示词**：沉淀团队 SQL 规范、软删除字段约定、金额单位等业务上下文。

[配置 Agentic Data Studio](/zh/docs/sqlkit/agentic-datastudio)

<DocsFigure src="/sqlkit-data-studio-ui.png" alt="SqlKit Agentic Data Studio 展示表结构上下文、模型选择器和生成的 SQL" caption="Agentic Data Studio 基于真实数据库元数据起草 SQL，并透明展示每次工具调用。" :width="1440" :height="935" />

## 通过 MCP 接入外部编程智能体 {#mcp}

<DocsBadge variant="ultimate">旗舰版</DocsBadge>

在**设置 → MCP 桥接**中启用本地桥接后，即可通过 `npx -y @geek-fun/data-studio-mcp` 将已授权的 SqlKit 连接开放给 **Claude Code、OpenAI Codex、Cursor** 等任意标准 stdio MCP 客户端：

- **25 个注册数据库与 DBA 工具**：覆盖连接发现、元数据查询、AST 校验只读查询、执行计划、受控写入/删除/DDL、会话列表与慢查询诊断。
- **统一权限治理**：外部 MCP 客户端严格遵循与内置 AI 相同的单连接权限策略（无访问 / 只读 / 读写数据 / 完全访问 / 自定义）。
- **托盘常驻**：关闭主窗口后 MCP 桥接继续在后台运行，并实时展示活跃客户端会话。

[MCP 桥接与编程智能体](/zh/docs/sqlkit/mcp-bridge) · [AI 权限与安全模型](/zh/docs/sqlkit/ai-permissions)

## 版本能力矩阵与使用条件 {#requirements}

### 社区版 vs. 旗舰版

| 能力项 | 社区版 <DocsBadge variant="community">免费</DocsBadge> | 旗舰版 <DocsBadge variant="ultimate">付费 / 试用</DocsBadge> |
| --- | :---: | :---: |
| 全部 68 种数据库连接（原生、兼容协议、HTTP、JDBC） | ✅ | ✅ |
| 5 档 SSL/TLS 与自定义 CA/客户端证书 | ✅ | ✅ |
| JRE 25 与 27 种 JDBC 驱动自动安装管理 | ✅ | ✅ |
| Monaco SQL 编辑器、6 方言补全与 17 方言格式化 | ✅ | ✅ |
| 可视化 `EXPLAIN` / `EXPLAIN ANALYZE`（树/表/原始输出） | ✅ | ✅ |
| 对象浏览器、可视化建表器、对象 DDL 查看器 | ✅ | ✅ |
| 虚拟滚动数据表格、筛选、排序与行编辑/复制/删除 | ✅ | ✅ |
| 查询历史、收藏、本地 `.sql` 管理、结果 CSV/JSON/SQL 导出 | ✅ | ✅ |
| 7 种界面语言、浅色/深色/跟随系统主题、签名自动更新 | ✅ | ✅ |
| **SSH 隧道与多跳堡垒机链** | — | ✅ |
| **交互式 ER 图** | — | ✅ |
| **批量传输工作区（CSV、JSONL、SQL、Excel 导入导出）** | — | ✅ |
| **Agentic Data Studio 与 AI 助手侧边栏（BYOK）** | — | ✅ |
| **本地 MCP 桥接与 AI 权限策略编辑** | — | ✅ |

::: tip 版本锁定永久授权保障
旗舰版提供 **7 天免费试用**与**版本锁定机制**：在订阅有效期内发布的任意 SqlKit 版本，即便日后取消订阅，仍会在本地永久保持解锁状态。详情见[定价方案](/zh/pricing)。
:::

### 数据库引擎与权限边界

- **引擎与驱动能力**：执行计划格式、行编辑与特定对象节点（模式、视图、存储过程、触发器）取决于对应数据库引擎、驱动支持以及当前数据库账号的权限。
- **宽列 CQL 引擎**：**Cassandra** 与 **ScyllaDB** 使用 CQL（直查 `system_schema`），无外键与视图，表格仅提供预览，过滤与排序请在 CQL 编辑器中完成。
- **数据库账号权限**：SqlKit 始终以你配置的数据库账号身份执行，不会越权提权。
