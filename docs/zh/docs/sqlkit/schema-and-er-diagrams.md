---
title: 结构浏览、可视化建表、DDL 查看与 ER 图 | SqlKit
description: 在 SqlKit 中浏览数据库、模式、表、视图、存储过程与函数，使用可视化建表器实时预览 DDL，查看对象 CREATE 脚本，并通过交互式 ER 图梳理表关系。
outline: [2, 3]
---

# 结构浏览、建表与 ER 图

在**查询**工作区左侧浏览数据库对象，查看并复制对象的 `CREATE` DDL，使用可视化弹窗新建表并实时预览 SQL，以及在交互式画布上查看外键 ER 图。

## 数据库对象浏览器

侧边栏支持活动数据库选择器和可展开多库对象树两种方式，按引擎能力显示对应层级：

- 数据库：新建库、删库、刷新、新建查询或打开 ER 图。
- 模式（Schema）：PostgreSQL、SQL Server、Oracle、Redshift、CockroachDB、Snowflake 等分模式引擎会显示模式层；MySQL、SQLite、ClickHouse 等扁平引擎自动跳过。
- 数据表：按需懒加载，带即时搜索过滤框。
- 视图、存储过程与函数：提供可折叠树节点，以及专属的对象列表标签页（Listing Tab），支持搜索、查看 DDL、复制名称、重命名与删除。

### 表节点右键菜单

右键对象树中的任意表可执行以下操作：

| 操作 | 行为 |
| --- | --- |
| 查看数据 | 打开表的虚拟滚动 **Data** 标签页 |
| 查看结构 | 直接打开表的 **Schema（列定义）** 标签页 |
| `SELECT TOP 100` | 按对应数据库引号规则在新标签页生成预览查询 |
| 生成 CREATE 脚本 | 打开 **DDL 查看器** 展示建表语句 |
| 导出数据 | 打开[批量传输](/zh/docs/sqlkit/import-export)导出向导并预选该表 <DocsBadge variant="ultimate">旗舰版</DocsBadge> |
| 展示 ER 图表 | 打开当前库或模式的交互式 ER 图 <DocsBadge variant="ultimate">旗舰版</DocsBadge> |
| 清空表 / 删除表 | 弹出破坏性二次确认后执行 `TRUNCATE` 或 `DROP` |

### 表级元信息标签页

每个打开的表标签页底部包含五个视图并显示实时计数：**Data**（浏览、搜索、过滤和行编辑）、**Schema**（列名、类型、可空性、默认值和主键）、**Indexes**（索引定义、唯一性和包含列）、**Foreign Keys**（目标表、列映射和级联规则）以及 **Triggers**（触发器名称、事件与定义，视引擎支持情况显示）。

## 可视化建表与建库工具

### 可视化建表器（Create Table）

右键 **Tables** 选择**新建表**，填写表名（连接 MySQL 家族引擎时可选择 `InnoDB`、`MyISAM`、`MEMORY`、`CSV`、`ARCHIVE`、`BLACKHOLE` 存储引擎），然后添加、删除或上下调整列顺序：

- 列名与 27 种常用 SQL 数据类型
- 针对 `VARCHAR`、`CHAR`、`DECIMAL`、`NUMERIC` 的长度与精度输入
- `NOT NULL`、自增（Auto-Increment / `GENERATED ALWAYS AS IDENTITY`）和主键开关
- 默认值表达式

底部会随着列配置实时生成目标方言的 `CREATE TABLE` DDL 预览，确认后再执行。

### 新建数据库、新建模式与 DDL 查看器

**新建数据库**会显示引擎专属参数：MySQL 家族提供字符集与排序规则（Charset & Collation），PostgreSQL 家族提供编码与区域设置（Encoding & Locale）。支持对应操作的引擎还可在右键菜单中执行**新建模式**和**删除数据库**。对任意表、视图、存储过程或函数点击**查看 DDL / 生成 CREATE 脚本**，即可查看并复制定义语句。

::: info 可视化结构编辑边界
当前可视化表单覆盖新建数据库、新建模式、新建表以及只读查看现有表的列、索引、外键、触发器和 DDL。针对既有表的可视化 `ALTER TABLE` 设计器和自动 Schema 对比工具尚未上线，修改已有表结构请在 [SQL 编辑器](/zh/docs/sqlkit/query-editor)中执行 `ALTER TABLE`。
:::

## 交互式 ER 图 {#er-diagrams}

<DocsBadge variant="ultimate">旗舰版</DocsBadge>

在数据库、模式或表的右键菜单选择**展示 ER 图表**，SqlKit 会读取实时列信息与外键约束并绘制实体关系图。

<DocsFigure src="/sqlkit-er-diagram-ui.png" alt="SqlKit 交互式 ER 图，展示表卡片、字段列表和正交外键连线" caption="ER 图基于真实外键自动完成 dagre 布局，支持拖拽微调与双击直达数据表。" :width="3424" :height="2224" />

### 画布导航与交互

ER 图使用 `dagre` 自动排版并绘制正交 SVG 关系连线。按住表卡片顶部可拖动微调位置（手动位置会保留到点击**重置布局**），拖拽空白处平移画布。支持 10%-300% 缩放（工具栏按钮、<kbd>⌘</kbd>/<kbd>Ctrl</kbd> 加鼠标滚轮跟随指针缩放，或触控板双指捏合），也可点击**适配画布（Fit to Screen）**。

工具栏支持在“全部模式”与单个模式间切换、实时搜索表名，并显示当前表数量与外键关系数。每张表卡片默认显示前 5 个字段，点击展开全部列；单击表卡片高亮直接关联的表与外键连线，双击直接打开[数据表格浏览器](/zh/docs/sqlkit/table-browser)。目标模式超过 30 张表时，布局前会弹出确认提示。

::: tip ER 关系连线的来源
ER 图的连线只来自数据库声明的外键约束（`get_foreign_keys`）。如果数据库不支持外键（如 Cassandra、ScyllaDB、ClickHouse）或只在应用层维护逻辑关联，画布会展示表卡片但没有关系箭头。当前暂不支持导出 ER 图为 PNG 或 SVG。
:::

## 下一步

<DocsCardGrid :cols="2">
  <DocsCard title="数据表格与行编辑" description="从对象树或 ER 图双击表进入网格，筛选并修改数据。" href="/zh/docs/sqlkit/table-browser" icon="table" />
  <DocsCard title="Agentic Data Studio" description="让 AI 智能体读取陌生库结构、梳理关联关系并起草 SQL。" href="/zh/docs/sqlkit/agentic-datastudio" badge="旗舰版" badge-variant="ultimate" icon="sparkles" />
</DocsCardGrid>
