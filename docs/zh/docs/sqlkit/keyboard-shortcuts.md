---
title: SqlKit SQL 编辑器快捷键
description: 查阅 SqlKit 快捷键，执行选中的 SQL、保存查询、格式化 SQL、切换注释、打开补全和查看执行计划。
---

# SqlKit 快捷键

以下快捷键适用于**查询**工作区。使用编辑器快捷键前，先点击 SQL 编辑区。

| 操作 | macOS | Windows 和 Linux |
| --- | --- | --- |
| 执行选中的 SQL 或光标所在的语句 | `⌘ + Enter` | `Ctrl + Enter` |
| 保存查询到 `.sql` 文件或更新已保存文件 | `⌘ + S` | `Ctrl + S` |
| 切换行注释 | `⌘ + /` | `Ctrl + /` |
| 格式化 SQL | `Option + Shift + F` | `Alt + Shift + F` |
| 打开自动补全建议 | `⌘ + Space` | `Ctrl + Space` |
| 查看查询计划（适用于支持的数据库） | `F6` | `F6` |
| 关闭当前工作区标签页 | `⌘ + W` | `Ctrl + W` |

按下 `⌘ + Enter` 或 `Ctrl + Enter` 时，SqlKit 会优先运行选中的 SQL。未选中文本时，该快捷键执行光标所在的语句。要运行编辑器中的全部 SQL，可点击工具栏的**执行**。

如果按 `⌘ + Space` 打开的是聚焦搜索（Spotlight），可以到 macOS 的键盘快捷键设置里给聚焦搜索换一组按键。

有关查询结果、导出和执行计划的操作，请参阅 [SQL 编辑器指南](/zh/docs/sqlkit/query-editor)。
