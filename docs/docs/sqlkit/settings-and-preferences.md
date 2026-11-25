---
title: Settings, Themes, Languages & Auto-Updates | SqlKit
description: Configure all 6 tabs in SqlKit Settings — themes, 7 UI languages, Monaco editor preferences, query row limits and timeouts, AI providers, MCP Bridge, and JRE 25 / JDBC drivers.
outline: [2, 3]
---

# Settings, themes & updates

Open **Settings** from the bottom of the left navigation rail to customize appearance, localization, Monaco editor behavior, query defaults, AI/MCP integration, and Java/JDBC components.

## Overview of the 6 Settings tabs

| Tab | What you configure | Edition |
| --- | --- | --- |
| **General** | Theme (**System / Dark / Light**), UI Language (7 languages + Auto OS detection), Account & Plan, About & Signed Auto-Updater | <DocsBadge variant="community">Community</DocsBadge> |
| **Editor** | Monaco font size, tab size, SQL formatter indent & line width, word wrap, line numbers, minimap | <DocsBadge variant="community">Community</DocsBadge> |
| **Query** | Default row limit, default query timeout, auto-save queries | <DocsBadge variant="community">Community</DocsBadge> |
| **AI** | 20 BYOK LLM provider presets, per-provider HTTP proxy, model sync, global system prompt, auto-compact, safety budgets | <DocsBadge variant="ultimate">Ultimate</DocsBadge> |
| **MCP Bridge** | Embedded bridge status & restart, live connected clients, Claude/Codex/Cursor setup snippets, Default AI permissions | <DocsBadge variant="ultimate">Ultimate</DocsBadge> |
| **JRE & JDBC Drivers** | System JDK 25+ detection or managed Eclipse Temurin JRE 25, `jdbc-bridge` JAR, and all 27 JDBC drivers | <DocsBadge variant="community">Community</DocsBadge> |

## General: Themes, 7 UI languages & account

### Themes

Choose between **System** (tracks macOS/Windows/Linux appearance automatically), **Dark**, and **Light** using the visual preview cards. The Monaco SQL editor, data grid, and ER diagram canvas synchronize immediately.

### Supported UI languages (7 locales)

By default, SqlKit detects your operating system language automatically. You can override it anytime under **Settings → General → Language** (updates the entire app UI and the system tray / menu bar menu):

- **English** (`en-US`)
- **简体中文** (`zh-CN`)
- **繁體中文** (`zh-TW`)
- **Português (Brasil)** (`pt-BR`)
- **日本語** (`ja-JP`)
- **한국어** (`ko-KR`)
- **Español** (`es-ES`)

### Account, Ultimate trial & version-lock guarantee

Under **Account & Plan**, sign in with your GEEKFUN account (authenticates in your system browser and returns cleanly via the `sqlkit://auth` deep link) to activate a **7-day free trial** or **Ultimate** subscription.

::: tip Local version-lock fallback
SqlKit records your subscription's version-lock horizon locally. Every version of SqlKit released on or before that horizon remains permanently unlocked on your machine even if you cancel your subscription later.
:::

### About & signed auto-updates

Check the installed version, trigger a manual update check against **GitHub Releases** (`latest.json`), view download progress, and install signed updates with a single restart. You can disable automatic update checks if you manage installs manually or run offline.

## Editor & Query preferences

### Editor settings

| Setting | Range / options | Notes |
| --- | --- | --- |
| **Font Size** | `8` – `32` px | Applies across all Monaco SQL tabs |
| **Tab Size** | `1` – `8` spaces | Controls editor indentation stops |
| **Formatter Indent Width** | `1` – `8` spaces | Used by `Format SQL` (`Shift+Option/Alt+F`) |
| **Formatter Line Width** | `40` – `200` chars | Target wrap width for formatted SQL |
| **Word Wrap** | On / Off | Wraps long SQL lines inside the viewport |
| **Show Line Numbers** | On / Off | Displays line numbers next to gutter play icons |
| **Show Minimap** | On / Off | Toggles Monaco's right-hand code overview minimap |

### Query settings

| Setting | Range | Default | Notes |
| --- | --- | --- | --- |
| **Default Row Limit** | `10` – `10,000` | `1,000` | Bounds result sets when no explicit `LIMIT` is present |
| **Query Timeout** | `1` – `300` seconds | `30` s | Maximum execution time before timing out (can be overridden per connection) |
| **Auto-save Queries** | On / Off | — | Automatically persists edits to saved `.sql` files |

## Desktop behavior, privacy & local storage

- **Zero telemetry**: SqlKit collects no analytics, usage metrics, or crash telemetry. Database operations work completely offline.
- **Window state persistence**: SqlKit remembers your window size, position, and maximized state across restarts.
- **Background system tray**: Closing the window hides SqlKit to the macOS menu bar or Windows/Linux system tray so long-running transfers and the local MCP Bridge stay active. Choose **Quit** from the tray menu to exit completely.
- **Local storage paths**:
  - Settings & saved connection metadata are stored locally in the app data directory (`.store.dat` and `agent.sqlite` for Data Studio conversation history).
  - Managed Java runtime (when installed): `~/.sqlkit/jre`
  - JDBC bridge JAR (when installed): `~/.sqlkit/jdbc-bridge/`

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard title="Keyboard shortcuts" description="Complete reference for macOS, Windows, and Linux shortcuts." href="/docs/sqlkit/keyboard-shortcuts" icon="keyboard" />
  <DocsCard title="Supported databases & JDBC" description="Learn how the JRE 25 and 27 JDBC drivers are managed on demand." href="/docs/sqlkit/supported-databases#jdbc-manager" icon="database" />
</DocsCardGrid>
