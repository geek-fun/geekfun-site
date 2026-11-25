---
title: 什么是 SqlKit？ | 开源桌面 SQL 数据库客户端
description: SqlKit 是基于 Rust、Tauri v2 与 Vue 3 构建的开源桌面 SQL 工作台，覆盖 68+ 数据库，集成 Monaco SQL 编辑器、可视化执行计划、ER 图、批量导入导出、Agentic Data Studio 与 MCP 桥接。
outline: [2, 3]
---

# 什么是 SqlKit？

SqlKit 是一款开源、跨平台的桌面 SQL 数据库客户端，基于 **Rust + Tauri v2 + Vue 3** 构建。它将连接管理、对象浏览、Monaco SQL 编辑器、可视化执行计划、数据表格与行编辑、交互式 ER 图、批量导入导出、应用内 AI 智能体（**Agentic Data Studio**）以及本地 **MCP 桥接**整合在同一个原生桌面工作区中，支持 **68 种数据库配置**。

<div class="docs-section-links">

- [安装 SqlKit](/zh/docs/sqlkit/installation)
- [连接数据库](/zh/docs/sqlkit/connect-to-database)
- [支持的数据库（68+）](/zh/docs/sqlkit/supported-databases)
- [功能概览与版本](/zh/docs/sqlkit/capabilities)

</div>

<DocsFigure src="/sqlkit-sql-editor-ui.png" alt="SqlKit 桌面工作区：左侧数据库对象树、右侧多标签页 Monaco SQL 编辑器与虚拟滚动结果表格" caption="SqlKit 在原生桌面窗口中并列呈现对象树、多标签页 Monaco SQL 编辑器与查询结果表格。" :width="3424" :height="2224" eager />

## SqlKit 解决什么问题

<DocsCardGrid :cols="2">
  <DocsCard
    title="统一连接 68+ 种 SQL 数据库"
    description="内置 PostgreSQL、MySQL、SQL Server、SQLite、SQLCipher 与 ClickHouse 原生 Rust 驱动，并覆盖兼容协议、HTTP SQL 引擎及按需下载的 JDBC 桥接。"
    href="/zh/docs/sqlkit/supported-databases"
    icon="database"
  />
  <DocsCard
    title="高效编写、格式化与调优 SQL"
    description="内嵌 Monaco 编辑器，支持 6 种方言元数据补全、17 种方言格式化、行首播放按钮、多结果集切换、可视化 EXPLAIN 树与可检索查询历史。"
    href="/zh/docs/sqlkit/query-editor"
    icon="code"
  />
  <DocsCard
    title="安全浏览、筛选与修改表数据"
    description="虚拟滚动数据表格支持全表搜索、SQL WHERE 过滤、后端列筛选标签、多列排序、行详情与 JSON 查看器、主键感知行编辑及 CSV/JSON/SQL 导出。"
    href="/zh/docs/sqlkit/table-browser"
    icon="table"
  />
  <DocsCard
    title="理解表结构、DDL 与 ER 关系"
    description="浏览数据库、模式、表、视图、存储过程、函数、索引、外键和触发器；可视化建表并实时预览 DDL，或生成交互式 ER 图。"
    href="/zh/docs/sqlkit/schema-and-er-diagrams"
    icon="layers"
  />
  <DocsCard
    title="批量导入与导出数据文件"
    description="支持 CSV、JSONL、SQL 与 Excel（.xlsx）文件互转，内置格式自动识别、字段映射、冲突策略（Skip/Replace/Upsert/Abort）、演练模式与后台任务管理。"
    href="/zh/docs/sqlkit/import-export"
    badge="旗舰版"
    badge-variant="ultimate"
    icon="upload"
  />
  <DocsCard
    title="安全接入 AI 与编程智能体"
    description="在 Agentic Data Studio 中接入自带云端或本地大模型，或通过本地 MCP 桥接将受控连接安全开放给 Claude Code、Codex 与 Cursor。"
    href="/zh/docs/sqlkit/agentic-datastudio"
    badge="旗舰版"
    badge-variant="ultimate"
    icon="sparkles"
  />
</DocsCardGrid>

## 多驱动架构 {#which-databases-can-i-open-in-sqlkit}

SqlKit 不会把所有数据库都塞进同一个沉重的运行时，而是按协议选择最轻量的适配器：内置引擎安装后即开即用，无需额外依赖；Oracle、DuckDB、Snowflake 等 JDBC 引擎则在首次连接测试时按需配置受管的 **Eclipse Temurin JRE 25** 与对应驱动。

| 驱动层 | 数量 | 代表数据库 | 运行时要求 |
| --- | --- | --- | --- |
| **内置原生 Rust（TCP）** | 3 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#tcp--> | 内置，零配置 |
| **内置原生 Rust（本地文件）** | 2 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#local--> | 内置，零配置 |
| **MySQL 协议兼容** | 13 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#mysql--> | 内置，复用原生 MySQL 驱动 |
| **PostgreSQL 协议兼容** | 18 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#postgresql--> | 内置，复用原生 PostgreSQL 驱动 |
| **原生 HTTP SQL** | 5 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#http--> | 内置原生 Rust HTTP |
| **JDBC 桥接** | 27 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#jdbc--> | 按需下载 JRE 25 + JDBC 桥接与驱动 |

完整的默认端口、能力差异及 CQL / Oracle / DuckDB 专项说明请查阅[支持的数据库与 JDBC 驱动](/zh/docs/sqlkit/supported-databases)。

## 核心能力地图

| 工作流 | SqlKit 已实现的产品能力 | 详细文档 |
| --- | --- | --- |
| **连接与网络** | 68 种连接配置、5 档 SSL/TLS + 自定义 CA/客户端证书、Connection Guardian 自动恢复、多跳 SSH 堡垒机链 + 系统代理 + `known_hosts` 主机密钥固定 | [连接数据库、TLS 与重连](/zh/docs/sqlkit/connect-to-database) · [SSH 隧道](/zh/docs/sqlkit/ssh-tunnel) |
| **SQL 编写与复用** | Monaco 编辑器、6 方言元数据补全、17 方言格式化、SQL/CQL 语句拆分器、行首播放按钮、已保存查询、可搜索可收藏的历史记录 | [SQL 编辑器与执行计划](/zh/docs/sqlkit/query-editor) |
| **性能分析** | 按方言适配的 `EXPLAIN` 与 `EXPLAIN ANALYZE`，提供交互式成本树（高亮最耗时节点）、汇总表和原始输出三种视图 | [SQL 编辑器与执行计划](/zh/docs/sqlkit/query-editor#explain-plans) |
| **数据浏览与编辑** | 虚拟滚动表格、全表搜索、SQL `WHERE` 过滤、后端列筛选标签、多列排序、单表 `SELECT` 可编辑性分析、弹窗行编辑/复制/批量删除、行详情与 JSON 查看器 | [数据表格与行编辑](/zh/docs/sqlkit/table-browser) |
| **结构与建模** | 对象树（库/模式/表/视图/存储过程/函数）、索引/外键/触发器标签页、可视化建表与实时 DDL 预览、对象 DDL 查看器、基于 `dagre` 的交互式 ER 图 | [结构浏览、建表与 ER 图](/zh/docs/sqlkit/schema-and-er-diagrams) |
| **导入与导出** | 免费的查询结果快速导出（CSV/JSON/SQL）+ 旗舰版传输工作区（CSV/JSONL/SQL/Excel，自动检测、字段映射、冲突策略、Dry Run、后台任务面板） | [批量导入与导出](/zh/docs/sqlkit/import-export) |
| **AI 与 MCP** | Data Studio 多数据源工作区、查询页 AI 助手侧边栏、20 个 BYOK 模型预设（OpenAI、Anthropic、Gemini、DeepSeek、Ollama、LM Studio 等）、本地 Axum MCP 桥接与 25 个注册工具 | [Agentic Data Studio](/zh/docs/sqlkit/agentic-datastudio) · [MCP 桥接](/zh/docs/sqlkit/mcp-bridge) |
| **安全与治理** | 统一的单连接 AI 权限链（读/增/改/删/管理）、`sqlparser` AST + CQL 分类器写拦截、`Ask` / `Auto` 审批卡、零遥测、凭据纯本地存储 | [AI 权限与安全模型](/zh/docs/sqlkit/ai-permissions) |
| **桌面与本地化** | macOS 通用版、Windows x64、Linux `.deb`/`.rpm`/`.AppImage`、跟随系统/深色/浅色主题、7 种界面语言、后台系统托盘、GitHub 签名自动更新 | [设置、主题与自动更新](/zh/docs/sqlkit/settings-and-preferences) |

## 安全与隐私模型

SqlKit 定位为**本地优先（Local-First）、零遥测**的桌面工作台：

- **数据库凭据不出本机**：连接配置与密码仅保存在本机，绝不会发送给任何大模型服务商，也不会通过 AI / MCP 的连接发现工具泄露。
- **数据库账号权限始终是最终边界**：SqlKit 不会也无法绕过你在连接中填写的数据库用户权限。排查生产库时请优先使用只读账号。
- **统一的 AI 权限链**：应用内 AI（Data Studio + AI 助手侧边栏）与外部 MCP 客户端共用同一条策略链：`单连接显式规则 → 全局默认策略 → 拒绝（默认关闭）`。
- **AST 级读写隔离**：只读查询工具在执行前通过 `sqlparser`（Cassandra/ScyllaDB 使用专用 CQL 分类器）做语法树校验，杜绝包括数据修改型 CTE（`WITH ... INSERT/UPDATE/DELETE`）在内的写语句混入只读通道。
- **破坏性操作强制确认**：在交互式 AI 会话中，`DELETE`、`TRUNCATE` 和 `CREATE/ALTER/DROP` 在 `Ask` 和 `Auto` 两种模式下均会弹出确认卡（除非你显式保存了匹配的会话规则）。

详见[AI 权限与安全模型](/zh/docs/sqlkit/ai-permissions)。

## 需要了解的边界

- **“可连接”不等于 68 种引擎拥有完全一致的高级能力**：对象树节点、执行计划格式与行编辑取决于具体引擎、驱动以及数据库账号权限。例如 **Cassandra 与 ScyllaDB** 使用 CQL，没有外键和视图，表格视图以预览为主，不提供网格侧过滤/排序/分页。
- **NoSQL 文档与搜索引擎请使用 DocKit**：如果你使用 MongoDB、DynamoDB、Elasticsearch、OpenSearch 或 EasySearch，欢迎使用同一团队维护的开源桌面客户端 [DocKit](/zh/docs/dockit/)。
- **批量传输适合日常工作集，不替代原生灾备工具**：海量生产库的整库备份恢复仍建议使用数据库原生工具（`pg_dump`、`mysqldump`、Oracle Data Pump / RMAN 等）。
- **纯本地桌面运行**：SqlKit 不是云端托管代理。使用云端 LLM 时，提示词和相关表结构/查询结果会发往你配置的模型 API；如需 100% 离线推理，请选择 **Ollama** 或 **LM Studio**。

## 社区版与旗舰版 {#editions}

可以不登录账号、不配置 AI 直接使用 SqlKit 吗？**完全可以。** SqlKit 以 **Apache-2.0** 协议开源：

| 版本 | 包含能力 |
| --- | --- |
| **社区版（Community）** <DocsBadge variant="community">免费 · Apache-2.0</DocsBadge> | 全部 68 种数据库连接（无连接数限制）、SSL/TLS 与自定义证书、JRE 25 与 JDBC 驱动管理器、Monaco SQL 编辑器与格式化、可视化 `EXPLAIN` / `EXPLAIN ANALYZE`、对象浏览与可视化建表、DDL 查看、虚拟滚动表格与行编辑、查询历史与收藏、结果 CSV/JSON/SQL 导出、7 种语言与浅色/深色主题 |
| **GEEKFUN Data Studio 旗舰版（Ultimate）** <DocsBadge variant="ultimate">7 天免费试用</DocsBadge> | 在社区版基础上解锁 **5 项高级能力**：**Agentic Data Studio 与 AI 助手（BYOK）**、**本地 MCP 桥接**、**交互式 ER 图**、**批量导入导出（传输工作区）**、**SSH 隧道与多跳堡垒机**。附带**版本锁定永久授权**：订阅期间发布的任意版本，即便后续取消订阅仍可在本地永久使用。 |

详见[功能概览与版本](/zh/docs/sqlkit/capabilities)与[版本与定价](/zh/pricing)。

## 下一步

<DocsCardGrid :cols="3">
  <DocsCard
    title="安装 SqlKit"
    description="下载 macOS 通用版、Windows 或 Linux 安装包并完成首次启动。"
    href="/zh/docs/sqlkit/installation"
    icon="rocket"
  />
  <DocsCard
    title="创建第一个连接"
    description="配置 TCP、本地文件、SSL/TLS 或 JDBC 连接并验证连通性。"
    href="/zh/docs/sqlkit/connect-to-database"
    icon="server"
  />
  <DocsCard
    title="使用 SQL 编辑器"
    description="编写查询、查看可视化 EXPLAIN 成本树并保存常用 SQL。"
    href="/zh/docs/sqlkit/query-editor"
    icon="code"
  />
</DocsCardGrid>
