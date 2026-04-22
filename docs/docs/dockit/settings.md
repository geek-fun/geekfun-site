---
title: DocKit Settings - Customize Editor Theme Language and History
description: Configure DocKit settings including theme (dark/light/auto), language (English/Chinese), editor options (font size, minimap, line numbers), and query history capacity. Personalize your NoSQL GUI client experience.
head:
  - - meta
    - name: keywords
      content: DocKit settings, DocKit configuration, DocKit theme, DocKit editor settings, DocKit language, query history settings, NoSQL GUI client configuration, customize DocKit
  - - link
    - rel: canonical
      href: https://www.geekfun.club/docs/dockit/settings
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/dockit/settings
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/dockit/settings
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/dockit/settings
---

# DocKit Settings

DocKit offers extensive customization options to match your workflow preferences. Configure appearance, editor behavior, and history management from the Settings panel.

## Accessing Settings

Open settings from:
- **Menu**: Click the gear icon (⚙️) in the top toolbar
- **Keyboard**: Press `Cmd+,` (or `Ctrl+,`)

The Settings panel contains three sections: **Theme & Language**, **Editor**, and **History**.

## Theme Settings

Choose how DocKit looks on your system.

| Option | Values | Description |
|--------|--------|-------------|
| **Theme** | `auto` / `dark` / `light` | `auto` follows your OS theme preference; `dark` and `light` force specific themes |

**Recommendations:**
- **`auto`**: Best for most users — matches macOS/Windows dark mode settings automatically
- **`dark`**: Preferred for late-night coding sessions
- **`light`**: Better for bright environments or documentation viewing

Theme changes apply instantly without restarting.

## Language Settings

Select DocKit's display language.

| Option | Values | Description |
|--------|--------|-------------|
| **Language** | `auto` / `English` / `Chinese` | `auto` detects OS language; others force specific languages |

Currently supported:
- **English** (`enUS`)
- **Chinese** (`zhCN` — 简体中文)

Language affects:
- UI labels and menus
- Error messages
- Keyboard shortcut descriptions
- AI assistant prompts (if enabled)

## Editor Settings

Customize the Monaco editor (same engine powering VS Code) for your coding style.

### Font Size

| Option | Range | Default |
|--------|-------|---------|
| **Font Size** | 8 - 32 px | 14 px |

Adjust text size for readability. Larger sizes help with code review; smaller sizes show more code per screen.

### Font Weight

| Option | Values | Description |
|--------|--------|-------------|
| **Font Weight** | `normal` / `medium` / `bold` | Controls text thickness |

- **`normal`**: Standard weight, fastest rendering
- **`medium` (500)**: Slightly thicker, better for extended reading
- **`bold`**: Heavy text, useful for presentations or low-contrast displays

### Line Numbers

| Option | Values | Default |
|--------|--------|---------|
| **Show Line Numbers** | `on` / `off` | `on` |

Toggle line numbers in the editor gutter. Useful for:
- Error reference when debugging
- Code review discussions
- Locating specific query sections

### Minimap

| Option | Values | Default |
|--------|--------|---------|
| **Show Minimap** | `on` / `off` | `off` |

Enable the minimap (code overview) on the right side of the editor. Shows:
- Full document structure at a glance
- Quick navigation via click-to-scroll
- Current viewport position

**Tip**: Enable minimap for large query files (100+ lines). Disable for cleaner UI with small queries.

### Tab Size

| Option | Range | Default |
|--------|-------|---------|
| **Tab Size** | 2 - 8 spaces | 2 spaces |

Set indentation width. Common conventions:
- **2 spaces**: JSON, JavaScript, TypeScript (default)
- **4 spaces**: Python, SQL conventions
- **8 spaces**: Legacy codebases

### Insert Spaces

| Option | Values | Default |
|--------|--------|---------|
| **Insert Spaces** | `on` / `off` | `on` (use spaces) |

When `on`, pressing Tab inserts spaces instead of a tab character. When `off`, inserts real tab characters (`\t`).

**Recommendation**: Keep `on` (spaces) for consistent indentation across all editors and terminals.

## History Settings

Configure how DocKit manages your query history.

### History Capacity

| Option | Range | Default |
|--------|-------|---------|
| **History Capacity** | 0 - 1000 entries | 100 entries |

Set the maximum number of queries stored in history:
- **`0`**: Disable history (no queries saved)
- **`100`**: Default — good balance for most workflows
- **`500-1000`**: Heavy users or teams sharing queries

History is stored locally and persists across sessions. See [Query History Guide](/docs/dockit/query-history) for usage details.

## Settings Storage

All settings are saved to your local filesystem:

| Platform | Location |
|----------|----------|
| macOS | `~/Library/Application Support/DocKit/` |
| Windows | `%APPDATA%/DocKit/` |
| Linux | `~/.config/DocKit/` |

Settings persist across:
- App restarts
- Version updates
- System reboots

## Resetting Settings

To reset all settings to defaults:

1. Open Settings panel
2. Click **Reset to Defaults** at the bottom
3. Confirm the reset

This restores:
- Theme: `auto`
- Language: `auto`
- Font size: 14px
- Font weight: `normal`
- Line numbers: `on`
- Minimap: `off`
- Tab size: 2
- Insert spaces: `on`
- History capacity: 100

## Next Steps

- **[AI Assistant Configuration](/docs/dockit/ai-assistant)** — Set up OpenAI or DeepSeek for query generation
- **[Keyboard Shortcuts](/docs/dockit/shortcut)** — Learn productivity shortcuts
- **[Query History](/docs/dockit/query-history)** — Use saved queries effectively