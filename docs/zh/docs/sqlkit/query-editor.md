---
title: SQL 编辑器、可视化执行计划与查询历史 | SqlKit
description: 使用 SqlKit 内嵌的 Monaco SQL 编辑器进行 6 方言元数据补全、17 方言格式化、行首执行、多结果集切换、可视化 EXPLAIN 树分析以及历史记录管理。
outline: [2, 3]
---

# SQL 编辑器、执行计划与历史

**查询**工作区把数据库对象树、多标签页 Monaco 编辑器、已保存查询面板、可视化执行计划面板和结果表格放在同一个窗口中。

<DocsFigure src="/sqlkit-sql-editor-ui.png" alt="SqlKit 查询工作区：对象树、Monaco SQL 编辑器和结果表格" caption="支持执行单条语句、选中片段或整份脚本，结构树和结果集同屏可见。" :width="3424" :height="2224" />

## 运行第一条查询 {#run-your-first-query}

<DocsSteps>

### 确认连接与数据库上下文

在**查询**工作区点击**新建查询**，先核对编辑器工具栏上当前的连接、数据库以及适用的模式。

### 输入只读测试语句

```sql
SELECT 1 AS connection_check;
```

*（Oracle 数据库请使用 `SELECT 1 AS connection_check FROM dual;`。）*

### 按选区、光标或整份脚本执行

按 <kbd>⌘</kbd>+<kbd>Enter</kbd>（macOS）或 <kbd>Ctrl</kbd>+<kbd>Enter</kbd>（Windows/Linux）执行选中的 SQL；未选中文本时执行光标所在语句。也可以点击任意语句首行左侧的播放图标直接运行该条语句（右键该图标可单独执行、格式化或复制），或点击工具栏**执行**运行整个脚本。

### 查看或切换多结果集

结果显示在编辑器下方。如果脚本返回多个结果集，可通过结果面板顶部的结果集下拉框切换。

</DocsSteps>

## Monaco 编辑器、补全与格式化

SqlKit 内嵌 Monaco Editor，自动同步浅色或深色主题。在**设置 → 编辑器**中可以调整字号（8-32 px）、Tab 宽度、缩进、行宽、自动换行、行号和缩略图（Minimap）。

### 6 方言元数据自动补全

输入字符或按 <kbd>⌘</kbd>+<kbd>Space</kbd>（macOS）/ <kbd>Ctrl</kbd>+<kbd>Space</kbd>（Windows/Linux），即可基于本地缓存的元数据获得同步提示。补全支持 6 套方言配置（`sql`、`mysql`、`pgsql`、`mssql`、`plsql`、`sqlite`），覆盖当前连接的数据库名、模式名、表名、字段名，以及对应方言的关键字、内置函数与数据类型。

### 17 方言 SQL 格式化

按 <kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd>（macOS）或 <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd>（Windows/Linux），或点击工具栏**格式化 SQL**。选中文本时只格式化选区，未选中时格式化全文。格式化器按引擎自动匹配 17 种方言：`postgresql`、`mysql`、`mariadb`、`tidb`、`redshift`、`sqlite`、`tsql`、`duckdb`、`clickhouse`、`plsql`、`db2`、`snowflake`、`trino`、`hive`、`spark`、`bigquery` 以及通用 `sql`。

### SQL / CQL 语句拆分

字符级语句扫描器可拆分多语句脚本，不会被字符串或注释里的分号干扰。它能正确识别单引号、双引号、反引号、PostgreSQL `$$...$$` 美元引号块，以及 `--`、`#`、`//`（CQL）和 `/* ... */` 注释；同时保留 CQL `BEGIN ... APPLY BATCH` 批处理块，在省略分号时也能通过空行分隔语句，且不会拆开 `WITH ...` 公共表表达式（CTE）。

## 可视化执行计划（`EXPLAIN` / `EXPLAIN ANALYZE`） {#explain-plans}

按 <kbd>F6</kbd> 或点击工具栏**解释（Explain）**分析 SQL 执行计划，可在 **EXPLAIN**（估算计划，不执行语句）和 **EXPLAIN ANALYZE**（实际执行并采集耗时与行数）之间切换。

<DocsFigure src="/sqlkit-explain-tree.png" alt="SqlKit PostgreSQL 分区表连接查询的可视化 EXPLAIN 树状视图，显示总估算开销、最高开销算子及各节点行数指标" caption="可视化 EXPLAIN 树状视图标注了总估算开销、开销最高算子以及各层扫描与连接节点，并支持在 Tree、Summary、Raw 视图间切换。" :width="3842" :height="2306" />

::: warning EXPLAIN ANALYZE 会实际执行语句
分析执行计划时请优先使用只读 `SELECT` 语句；除非确有必要，不要对写操作执行 `EXPLAIN ANALYZE`。
:::

### 三种视图

1. **树状视图（Tree View）**：展示算子成本树，汇总总开销并标记开销最高的节点。
2. **汇总表（Summary Table）**：以表格列出各执行算子的成本和指标。
3. **原始输出（Raw Output）**：查看数据库返回的原始 JSON 或文本计划。

| 引擎家族 | `EXPLAIN` 底层语句 | `EXPLAIN ANALYZE` 底层语句 |
| --- | --- | --- |
| PostgreSQL 及 PG 兼容 | `EXPLAIN (FORMAT JSON)` | `EXPLAIN (ANALYZE, FORMAT JSON)` |
| MySQL 及 MySQL 兼容 | `EXPLAIN FORMAT=JSON` | `EXPLAIN ANALYZE` |
| SQL Server | `SET SHOWPLAN_TEXT ON` | `SET STATISTICS PROFILE ON` |
| SQLite / ClickHouse / JDBC / HTTP | `EXPLAIN` | 视具体引擎支持情况 |

## 查看、编辑与导出查询结果 {#browse-and-export-data}

在结果网格中可以进行多列排序、后端列筛选（`=`、`≠`、`LIKE`、`≥`、`≤`、`BETWEEN`）、查看行详情与 JSON 单元格，并将单元格或行复制为 CSV、JSON 或 SQL `INSERT`。

对单表 `SELECT` 语句，SqlKit 会自动做可编辑性分析。识别出单一目标表和主键后，可以直接在查询结果中编辑、复制或删除行。

使用结果工具栏可将返回行导出为 CSV、JSON 或 SQL 文件。查询中的 `LIMIT`、`TOP` 以及**设置 → 查询**里的默认行数上限（默认 `1,000`）都会作用于导出结果。如果需要导出整表、整库或 Excel/JSONL 文件，请使用[批量传输工作区](/zh/docs/sqlkit/import-export) <DocsBadge variant="ultimate">旗舰版</DocsBadge>。

## 已保存查询与查询历史

### 已保存查询面板

查询页侧栏底部提供可调节高度的**已保存的查询**面板。按 <kbd>⌘</kbd>+<kbd>S</kbd>（macOS）或 <kbd>Ctrl</kbd>+<kbd>S</kbd>（Windows/Linux）可将当前标签页保存为本地 `.sql` 文件，并可在面板中打开、重命名、更改关联连接、在访达或文件管理器中定位文件，或删除文件。

### 查询历史

每次执行都会自动记入**历史记录**，保留 SQL 原文、连接名、数据库名、耗时、时间戳与状态（成功或错误）。可按 SQL 文本、连接或数据库搜索，按状态过滤，为常用语句加星标（点击**清除非收藏**时保留收藏项），或一键在新标签页重新打开。重新执行前请先核对当前标签页绑定的连接和数据库，尤其是原连接已改名或删除时。

::: info 当前编辑器边界
- 工具栏暂未提供图形化的自动提交、提交或回滚按钮，需要事务控制时请在 SQL 中编写 `BEGIN`、`COMMIT` 和 `ROLLBACK`。
- 暂不支持中断正在运行的查询；可在**设置 → 查询**或单个连接中设置**查询超时**（1-300 秒，默认 `30` 秒）。
- 旗舰版可在查询页右上角打开 **AI 助手**侧边栏，结合当前连接、表结构与编辑器内容解释语句、排查报错或优化执行计划。
:::

## 下一步

<DocsCardGrid :cols="2">
  <DocsCard title="数据表格与行编辑" description="学习全表搜索、SQL 过滤、JSON 查看与主键行编辑。" href="/zh/docs/sqlkit/table-browser" icon="table" />
  <DocsCard title="快捷键参考" description="查看 macOS、Windows 与 Linux 下的全部快捷键。" href="/zh/docs/sqlkit/keyboard-shortcuts" icon="keyboard" />
</DocsCardGrid>
