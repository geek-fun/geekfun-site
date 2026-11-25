---
title: SqlKit 快捷键参考 | macOS、Windows 与 Linux
description: 完整列出 SqlKit 在 macOS、Windows 与 Linux 下的 SQL 编辑器、标签页、应用窗口、数据网格以及 ER 图画布快捷键与交互手势。
outline: [2, 3]
---

# 快捷键参考

SqlKit 在运行时自动适配各平台修饰键：macOS 使用 <kbd>⌘</kbd>（Command）与 <kbd>Option</kbd>，Windows 与 Linux 使用 <kbd>Ctrl</kbd> 与 <kbd>Alt</kbd>。

## SQL 编辑器快捷键

在**查询**工作区中先点击进入 Monaco SQL 编辑区，再使用以下快捷键：

| 操作 | macOS | Windows 与 Linux |
| --- | --- | --- |
| **执行选中 SQL** *（无选区时执行光标所在语句）* | <kbd>⌘</kbd> + <kbd>Enter</kbd> | <kbd>Ctrl</kbd> + <kbd>Enter</kbd> |
| **保存查询**为 `.sql` 文件 *（或更新已有文件）* | <kbd>⌘</kbd> + <kbd>S</kbd> | <kbd>Ctrl</kbd> + <kbd>S</kbd> |
| **格式化 SQL** *（有选区时仅格式化选区，否则格式化全文）* | <kbd>Shift</kbd> + <kbd>Option</kbd> + <kbd>F</kbd> | <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd> |
| **切换行注释** | <kbd>⌘</kbd> + <kbd>/</kbd> | <kbd>Ctrl</kbd> + <kbd>/</kbd> |
| **触发元数据自动补全** | <kbd>⌘</kbd> + <kbd>Space</kbd> | <kbd>Ctrl</kbd> + <kbd>Space</kbd> |
| **执行 `EXPLAIN` / `EXPLAIN ANALYZE`** *（支持的引擎）* | <kbd>F6</kbd> | <kbd>F6</kbd> |

::: tip macOS 聚焦搜索快捷键冲突（`⌘ + Space`）
macOS 默认将 <kbd>⌘</kbd>+<kbd>Space</kbd> 分配给聚焦搜索（Spotlight）。若按下时弹出聚焦搜索，请前往**系统设置 → 键盘 → 键盘快捷键 → 聚焦**修改系统绑定，或直接键入字符自动唤出补全列表。
:::

## 工作区与应用快捷键

| 操作 | macOS | Windows 与 Linux |
| --- | --- | --- |
| **新建数据库连接** | <kbd>⌘</kbd> + <kbd>N</kbd> | <kbd>Ctrl</kbd> + <kbd>N</kbd> |
| **关闭当前工作区标签页** | <kbd>⌘</kbd> + <kbd>W</kbd> | <kbd>Ctrl</kbd> + <kbd>W</kbd> |
| **刷新窗口** | <kbd>⌘</kbd> + <kbd>R</kbd> | <kbd>Ctrl</kbd> + <kbd>R</kbd> |
| **切换开发者工具（DevTools）** | <kbd>F12</kbd> | <kbd>F12</kbd> |

## 数据网格与 ER 图交互手势

| 所在工作区 | 操作 | 快捷键 / 手势 |
| --- | --- | --- |
| **SQL 编辑器** | 直接执行某一条语句 | 点击语句首行左侧的**行首播放图标** |
| **SQL 编辑器** | 对单条语句执行、格式化或复制 | 右键点击**行首播放图标** |
| **数据网格** | 多列组合排序 | 点击主排序列头后，按住 <kbd>Shift</kbd> 点击次级列头 |
| **数据网格** | 提交 SQL `WHERE` 过滤条件 | 在过滤框内按 <kbd>Enter</kbd> |
| **数据网格** | 按单元格值快速过滤或排除 | 右键单元格 → **按此值筛选** / **排除此值** |
| **ER 图** | 以指针为中心缩放画布（10%–300%） | <kbd>⌘</kbd> / <kbd>Ctrl</kbd> + 鼠标滚轮，或触控板双指捏合 |
| **ER 图** | 平移画布 | 拖拽空白背景 |
| **ER 图** | 打开表数据浏览器 | 双击任意表卡片 |

## 下一步

<DocsCardGrid :cols="2">
  <DocsCard title="SQL 编辑器与执行计划" description="深入了解行首操作、17 方言格式化与 EXPLAIN 树。" href="/zh/docs/sqlkit/query-editor" icon="code" />
  <DocsCard title="设置、主题与自动更新" description="自定义编辑器字号、缩进、格式化行宽与缩略图。" href="/zh/docs/sqlkit/settings-and-preferences" icon="settings" />
</DocsCardGrid>
