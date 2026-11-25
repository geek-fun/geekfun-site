---
title: SqlKit Keyboard Shortcuts | macOS, Windows & Linux
description: Complete keyboard shortcut reference for SqlKit's Monaco SQL editor, workspace tabs, application commands, data grid, and ER diagram canvas on macOS, Windows, and Linux.
outline: [2, 3]
---

# Keyboard shortcuts

SqlKit automatically adapts modifier keys to your operating system—using <kbd>⌘</kbd> (Command) and <kbd>Option</kbd> on macOS, and <kbd>Ctrl</kbd> and <kbd>Alt</kbd> on Windows and Linux.

## SQL editor shortcuts

Click inside the Monaco SQL editor in **Queries** before triggering editor shortcuts:

| Action | macOS | Windows & Linux |
| --- | --- | --- |
| **Run selected SQL** *(or statement at cursor when nothing is selected)* | <kbd>⌘</kbd> + <kbd>Enter</kbd> | <kbd>Ctrl</kbd> + <kbd>Enter</kbd> |
| **Save query** as a `.sql` file *(or update existing saved file)* | <kbd>⌘</kbd> + <kbd>S</kbd> | <kbd>Ctrl</kbd> + <kbd>S</kbd> |
| **Format SQL** *(selection if highlighted, otherwise entire document)* | <kbd>Shift</kbd> + <kbd>Option</kbd> + <kbd>F</kbd> | <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd> |
| **Toggle line comment** | <kbd>⌘</kbd> + <kbd>/</kbd> | <kbd>Ctrl</kbd> + <kbd>/</kbd> |
| **Trigger schema-aware autocomplete** | <kbd>⌘</kbd> + <kbd>Space</kbd> | <kbd>Ctrl</kbd> + <kbd>Space</kbd> |
| **Run `EXPLAIN` / `EXPLAIN ANALYZE`** *(on supported engines)* | <kbd>F6</kbd> | <kbd>F6</kbd> |

::: tip macOS Spotlight shortcut conflict (`⌘ + Space`)
macOS binds <kbd>⌘</kbd>+<kbd>Space</kbd> to Spotlight Search by default. If pressing it opens Spotlight instead of SQL autocomplete, remap Spotlight under **System Settings → Keyboard → Keyboard Shortcuts → Spotlight**, or simply start typing to trigger automatic suggestions.
:::

## Workspace & application shortcuts

| Action | macOS | Windows & Linux |
| --- | --- | --- |
| **New database connection** | <kbd>⌘</kbd> + <kbd>N</kbd> | <kbd>Ctrl</kbd> + <kbd>N</kbd> |
| **Close active workspace tab** | <kbd>⌘</kbd> + <kbd>W</kbd> | <kbd>Ctrl</kbd> + <kbd>W</kbd> |
| **Reload window** | <kbd>⌘</kbd> + <kbd>R</kbd> | <kbd>Ctrl</kbd> + <kbd>R</kbd> |
| **Toggle Developer Tools** | <kbd>F12</kbd> | <kbd>F12</kbd> |

## Data grid & ER diagram interactions

| Workspace | Action | Gesture / shortcut |
| --- | --- | --- |
| **SQL Editor** | Execute a specific statement directly | Click the **gutter play icon** beside the statement's first line |
| **SQL Editor** | Execute, Format, or Copy a single statement | Right-click the **gutter play icon** |
| **Data Grid** | Multi-column sort | Click a column header, then <kbd>Shift</kbd> + click additional columns |
| **Data Grid** | Apply SQL `WHERE` filter | Press <kbd>Enter</kbd> in the filter input |
| **Data Grid** | Quick filter by or exclude a cell value | Right-click cell → **Filter by value** / **Exclude value** |
| **ER Diagram** | Zoom canvas (cursor-centered, 10%–300%) | <kbd>⌘</kbd> / <kbd>Ctrl</kbd> + scroll wheel, or trackpad pinch |
| **ER Diagram** | Pan canvas | Drag empty background |
| **ER Diagram** | Open table in Data Browser | Double-click a table card |

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard title="SQL editor & execution plans" description="Learn gutter actions, 17-dialect formatting, and EXPLAIN trees." href="/docs/sqlkit/query-editor" icon="code" />
  <DocsCard title="Settings & preferences" description="Customize editor font size, tab width, formatter width, and minimap." href="/docs/sqlkit/settings-and-preferences" icon="settings" />
</DocsCardGrid>
