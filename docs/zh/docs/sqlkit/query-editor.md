---
title: SQL 编辑器、可视化执行计划与查询历史 | SqlKit
description: 使用 SqlKit 内嵌的 Monaco SQL 编辑器进行 6 方言元数据补全、17 方言格式化、行首执行、多结果集切换、可视化 EXPLAIN 树分析以及历史记录管理。
outline: [2, 3]
---

# SQL 编辑器、执行计划与历史

**查询**工作区将数据库对象树、多标签页 **Monaco 编辑器**、已保存查询面板、可视化执行计划分析器以及虚拟滚动结果表格集成在同一界面中。

<DocsFigure src="/sqlkit-sql-editor-ui.png" alt="SqlKit 查询工作区：对象树、Monaco SQL 编辑器和结果表格" caption="支持执行单条语句、选中片段或整份脚本，结构树与结果集同屏可见。" :width="3424" :height="2224" />

## 运行第一条查询 {#run-your-first-query}

<DocsSteps>

### 确认连接与数据库上下文

在**查询**工作区点击**新建查询**，先核对编辑器工具栏上当前的**连接**、**数据库**（以及适用的**模式**）。

### 输入只读测试语句

```sql
SELECT 1 AS connection_check;
```

*（Oracle 数据库请使用 `SELECT 1 AS connection_check FROM dual;`。）*

### 按选区、光标或整份脚本执行

- 按 <kbd>⌘</kbd>+<kbd>Enter</kbd>（macOS）或 <kbd>Ctrl</kbd>+<kbd>Enter</kbd>（Windows/Linux）执行**选中的 SQL**；未选中文本时自动执行**光标所在语句**。
- 点击任意语句首行左侧的**行首播放图标**直接执行该条语句；右键该图标可对该语句单独执行、格式化或复制。
- 点击工具栏**执行**按钮运行整个编辑器脚本。

### 查看或切换多结果集

结果会立即渲染在编辑器下方。如果脚本返回了多个结果集，可通过结果面板顶部的**结果集下拉选择器**自由切换。

</DocsSteps>

## Monaco 编辑器、补全与格式化

SqlKit 内嵌 **Monaco Editor**，自动同步浅色/深色主题，并可在**设置 → 编辑器**中调整字号（8–32 px）、Tab 宽度、缩进、行宽、自动换行、行号与缩略图（Minimap）。

### 6 方言元数据自动补全

输入字符或按 <kbd>⌘</kbd>+<kbd>Space</kbd>（macOS）/ <kbd>Ctrl</kbd>+<kbd>Space</kbd>（Windows/Linux），即可基于本地缓存的元数据获得同步智能提示：

- **6 套方言配置**：`sql`、`mysql`、`pgsql`、`mssql`、`plsql`、`sqlite`
- **真实结构对象**：当前连接的数据库名、模式名、表名与字段名
- **语言要素**：对应方言的 SQL 关键字、内置函数与数据类型

### 17 方言 SQL 格式化

按 <kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd>（macOS）或 <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd>（Windows/Linux），或点击工具栏**格式化 SQL**：

- 选中文本时**仅格式化选区**，未选中时**格式化全文**。
- 按引擎自动匹配 **17 种方言**：`postgresql`、`mysql`、`mariadb`、`tidb`、`redshift`、`sqlite`、`tsql`、`duckdb`、`clickhouse`、`plsql`、`db2`、`snowflake`、`trino`、`hive`、`spark`、`bigquery` 以及通用 `sql`。

### 智能 SQL / CQL 语句拆分

SqlKit 内置字符级语句扫描器，精准识别多语句脚本中的边界而不会误拆分引号内的分号：

- 正确识别单引号、双引号、反引号、PostgreSQL `$$...$$` 美元引号块，以及 `--`、`#`、`//`（CQL）与 `/* ... */` 注释。
- 完整保留 CQL `BEGIN ... APPLY BATCH` 批处理块。
- 省略分号时也能通过空行智能恢复语句边界，且不会误拆 `WITH ...` CTE 公共表表达式。

## 可视化执行计划（`EXPLAIN` / `EXPLAIN ANALYZE`） {#explain-plans}

按 <kbd>F6</kbd> 或点击工具栏**解释（Explain）**分析 SQL 执行计划，并可在 **EXPLAIN**（估算计划，不执行语句）与 **EXPLAIN ANALYZE**（实际执行并采集真实耗时与行数）之间切换。

::: warning EXPLAIN ANALYZE 会实际执行语句
分析执行计划时请优先使用只读 `SELECT` 语句；除非确有必要，切勿对写操作执行 `EXPLAIN ANALYZE`。
:::

### 三种同步视图

1. **树状视图（Tree View）**：交互式算子成本树，汇总总开销并自动高亮**开销最高的节点**，快速定位全表扫描或慢连接瓶颈。
2. **汇总表（Summary Table）**：以表格形式平铺各执行算子的成本与指标。
3. **原始输出（Raw Output）**：查看数据库返回的完整原始 JSON 或文本计划。

| 引擎家族 | `EXPLAIN` 底层语句 | `EXPLAIN ANALYZE` 底层语句 |
| --- | --- | --- |
| **PostgreSQL 及 PG 兼容** | `EXPLAIN (FORMAT JSON)` | `EXPLAIN (ANALYZE, FORMAT JSON)` |
| **MySQL 及 MySQL 兼容** | `EXPLAIN FORMAT=JSON` | `EXPLAIN ANALYZE` |
| **SQL Server** | `SET SHOWPLAN_TEXT ON` | `SET STATISTICS PROFILE ON` |
| **SQLite / ClickHouse / JDBC / HTTP** | `EXPLAIN` | 视具体引擎支持情况 |

## 查看、编辑与导出查询结果 {#browse-and-export-data}

- **交互式结果网格**：支持多列排序、后端列筛选标签（`=`、`≠`、`LIKE`、`≥`、`≤`、`BETWEEN`）、行详情与 JSON 查看器，以及将单元格或行复制为 **CSV**、**JSON** 或 **SQL `INSERT`**。
- **单表 `SELECT` 结果直接编辑**：SqlKit 会自动对 `SELECT` 语句做可编辑性分析；若识别出单一可编辑表与主键，可直接对查询结果执行编辑、复制或删除行。
- **导出结果文件**：通过系统保存弹窗将当前返回行导出为 **CSV**、**JSON** 或 **SQL**。注意查询中的 `LIMIT` / `TOP` 以及**设置 → 查询**中的默认行数上限（默认 `1,000`）均会作用于导出结果。
- 如需整表、整库或 Excel/JSONL 批量导出，请使用[批量传输工作区](/zh/docs/sqlkit/import-export) <DocsBadge variant="ultimate">旗舰版</DocsBadge>。

## 已保存查询与查询历史

### 已保存查询面板

查询页侧栏底部提供可调节高度的**已保存的查询**面板：

- 按 <kbd>⌘</kbd>+<kbd>S</kbd>（macOS）或 <kbd>Ctrl</kbd>+<kbd>S</kbd>（Windows/Linux）将查询保存为本地 `.sql` 文件。
- 支持直接在面板中打开、重命名、重新关联连接、在访达/文件管理器中定位文件或删除。

### 查询历史

每次执行都会自动记入**历史记录**，保留 SQL 原文、连接名、数据库名、耗时、时间戳与执行状态（成功/失败）：

- **检索与筛选**：支持按 SQL 文本、连接或数据库全文搜索，并按成功/错误状态过滤。
- **收藏夹**：为常用查询加星标，点击**清除非收藏**时仅清理临时记录，保留全部收藏项。
- **一键重跑**：将历史语句重新载入新标签页。点击**执行**前请务必核对当前标签页绑定的连接和数据库（尤其是原连接已改名或删除时）。

::: info 当前编辑器边界说明
- **事务控制**：工具栏暂未提供图形化的自动提交 / 提交 / 回滚按钮，需要事务控制时请在 SQL 中显式编写 `BEGIN`、`COMMIT`、`ROLLBACK`。
- **查询取消**：目前尚不支持中断运行中的查询；请在**设置 → 查询**或单个连接中设置合理的**查询超时**（1–300 秒，默认 `30` 秒）。
- **AI 协作**：旗舰版可在查询页右上角打开 **AI 助手**侧边栏，结合当前连接、表结构与编辑器 SQL 直接解释语句、修复报错或优化执行计划。
:::

## 下一步

<DocsCardGrid :cols="2">
  <DocsCard title="数据表格与行编辑" description="学习全表搜索、SQL 过滤、JSON 检视与主键行编辑。" href="/zh/docs/sqlkit/table-browser" icon="table" />
  <DocsCard title="快捷键参考" description="查看 macOS、Windows 与 Linux 下的全部高频快捷键。" href="/zh/docs/sqlkit/keyboard-shortcuts" icon="keyboard" />
</DocsCardGrid>
