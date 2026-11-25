---
title: 结构浏览、可视化建表、DDL 查看与 ER 图 | SqlKit
description: 在 SqlKit 中浏览数据库、模式、表、视图、存储过程与函数，使用可视化建表器实时预览 DDL，查看对象 CREATE 脚本，并通过交互式 ER 图梳理表关系。
outline: [2, 3]
---

# 结构浏览、建表与 ER 图

SqlKit 在**查询**工作区左侧提供自适应的数据库对象浏览器，同时内置对象 DDL 查看器、可视化建表器以及交互式 **ER 图画布**。

## 数据库对象浏览器

侧边栏支持**活动数据库选择器**与**可展开多库对象树**两种浏览方式，并按当前数据库引擎的实际能力动态展示层级：

- **数据库**：支持新建库、删库、刷新、新建查询以及打开 ER 图。
- **模式（Schema）**：对 PostgreSQL、SQL Server、Oracle、Redshift、CockroachDB、Snowflake 等分模式引擎自动展示；对 MySQL、SQLite、ClickHouse 等扁平引擎透明省略。
- **数据表**：按需懒加载，内置即时搜索过滤框。
- **视图、存储过程与函数**：提供可折叠树节点，以及专属的**对象列表标签页（Listing Tab）**，支持搜索、查看 DDL、复制名称、重命名与删除。

### 表节点右键菜单

右键对象树中的任意表，可一键触发高频操作：

| 操作 | 行为 |
| --- | --- |
| **查看数据** | 打开表的虚拟滚动 **Data** 标签页 |
| **查看结构** | 直接打开表的 **Schema（列定义）** 标签页 |
| **`SELECT TOP 100`** | 按对应数据库引号规则在新标签页生成预览查询 |
| **生成 CREATE 脚本** | 打开 **DDL 查看器** 展示建表语句 |
| **导出数据** | 跳转[批量传输](/zh/docs/sqlkit/import-export)导出向导并预选该表 <DocsBadge variant="ultimate">旗舰版</DocsBadge> |
| **展示 ER 图表** | 打开当前库或模式的交互式 ER 图 <DocsBadge variant="ultimate">旗舰版</DocsBadge> |
| **清空表 / 删除表** | 弹出破坏性二次确认后执行 `TRUNCATE` 或 `DROP` |

### 表级元信息五联标签页

在每个已打开的表标签页底部均可切换以下视图（并显示实时计数）：

1. **Data** — 表数据浏览、搜索、过滤与行编辑
2. **Schema** — 列名、数据类型、是否可空、默认值与主键标识
3. **Indexes** — 索引定义、唯一性与包含列
4. **Foreign Keys** — 引用目标表、列映射与级联规则
5. **Triggers** — 触发器名称、事件与定义（引擎支持时展示）

## 可视化建表与建库工具

### 可视化建表器（Create Table）

右键 **Tables** 选择**新建表**，无需手写样板 DDL 即可完成建表：

- **表级属性**：填写表名；连接 MySQL 家族引擎时可选择**存储引擎**（`InnoDB`、`MyISAM`、`MEMORY`、`CSV`、`ARCHIVE`、`BLACKHOLE`）。
- **列构建器**：支持添加、删除和上下移动列顺序，并配置：
  - 列名与 **27 种常用 SQL 数据类型**
  - 针对 `VARCHAR`、`CHAR`、`DECIMAL`、`NUMERIC` 的长度/精度输入
  - **`NOT NULL`**、**自增（Auto-Increment / `GENERATED ALWAYS AS IDENTITY`）** 与**主键（Primary Key）** 开关
  - 默认值表达式
- **实时 `CREATE TABLE` DDL 预览**：随着列配置变化实时生成目标方言的建表语句，确认无误后再提交执行。

### 新建数据库、新建模式与 DDL 查看器

- **新建数据库**：提供引擎专属参数，如 MySQL 家族的**字符集与排序规则（Charset & Collation）**，以及 PostgreSQL 家族的**编码与区域设置（Encoding & Locale）**。
- **新建模式 / 删除数据库**：在支持对应操作的引擎中可直接从右键菜单完成。
- **对象 DDL 查看器**：对任意表、视图、存储过程或函数点击**查看 DDL / 生成 CREATE 脚本**，即可审阅并一键复制定义语句。

::: info 可视化结构编辑边界
目前可视化设计器聚焦于新建数据库、新建模式、新建表以及只读检视现有表的列/索引/外键/触发器和 DDL。针对已有表的可视化 `ALTER TABLE` 设计器与自动 Schema 对比工具尚未上线，修改既有表结构请在 [SQL 编辑器](/zh/docs/sqlkit/query-editor)中执行 `ALTER TABLE` 语句。
:::

## 交互式 ER 图 {#er-diagrams}

<DocsBadge variant="ultimate">旗舰版</DocsBadge>

在数据库、模式或表的右键菜单中选择**展示 ER 图表**，SqlKit 会读取实时列信息与外键约束并绘制交互式实体关系画布。

<DocsFigure src="/sqlkit-er-diagram-ui.png" alt="SqlKit 交互式 ER 图，展示表卡片、字段列表和正交外键连线" caption="ER 图基于真实外键自动完成 dagre 布局，同时支持手动拖拽微调与双击直达数据表。" :width="3424" :height="2224" />

### 画布导航与交互能力

- **自动图布局**：内置 `dagre` 排版引擎搭配清晰的正交 SVG 关系连线。
- **手动拖拽排版**：按住任意表卡片顶部即可拖动调整位置，手动布局会保留至你点击**重置布局**。
- **平滑平移与缩放**：拖拽画布空白处平移；支持 **10%–300%** 缩放（工具栏按钮、<kbd>⌘</kbd>/<kbd>Ctrl</kbd> + 滚轮跟随指针缩放、触控板双指捏合），并可一键**适配画布（Fit to Screen）**。
- **模式过滤与即时检索**：支持在“全部模式”与单个模式间切换，实时搜索表名，并在工具栏显示当前表数量与外键关系数。
- **深度探索**：
  - 每张表卡片默认展示前 5 个字段，点击即可展开全部列。
  - **单击表卡片**高亮其直接关联的所有表和外键连线。
  - **双击表卡片**直接在[数据表格浏览器](/zh/docs/sqlkit/table-browser)中打开该表。
- **大库保护提示**：当目标模式包含**超过 30 张表**时，布局前会弹出确认提示，避免一次性渲染过多节点影响阅读。

::: tip ER 关系连线的来源
ER 图中的连线完全来自数据库声明的外键约束（`get_foreign_keys`）。如果数据库本身不支持外键（如 Cassandra/ScyllaDB、ClickHouse）或仅在应用层维护逻辑关联，画布会展示表卡片但不会绘制关系箭头。当前暂不支持将 ER 图导出为 PNG/SVG 图片。
:::

## 下一步

<DocsCardGrid :cols="2">
  <DocsCard title="数据表格与行编辑" description="从对象树或 ER 图双击表进入网格，筛选并修改数据。" href="/zh/docs/sqlkit/table-browser" icon="table" />
  <DocsCard title="Agentic Data Studio" description="让 AI 智能体快速读懂陌生库结构、梳理关联关系并起草 SQL。" href="/zh/docs/sqlkit/agentic-datastudio" badge="旗舰版" badge-variant="ultimate" icon="sparkles" />
</DocsCardGrid>
