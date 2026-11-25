---
title: Install SqlKit on macOS, Windows, or Linux | Quick Start
description: Download and install SqlKit on macOS (universal Apple Silicon & Intel), Windows x64, or Linux (.deb, .rpm, AppImage). Learn about system tray mode and signed auto-updates.
outline: [2, 3]
---

# Installation & first launch

SqlKit ships as a lightweight native desktop application built on **Tauri v2 and Rust**. No Java runtime or external dependencies are required to install the app or connect to built-in engines (PostgreSQL, MySQL, SQL Server, SQLite, SQLCipher, ClickHouse, and their wire-compatible ecosystems).

## Platform packages

Download installers from the [SqlKit download page](/download#sqlkit) or [GitHub Releases](https://github.com/geek-fun/sqlkit/releases).

| Operating system | Architecture | Package format | Minimum requirement |
| --- | --- | --- | --- |
| **macOS** | Universal (`arm64` + `x86_64`) | `.dmg` (signed & notarized) | macOS 10.15 (Catalina) or later |
| **Windows** | `x86_64` (64-bit) | `.exe` (NSIS) / `.msi` | Windows 10 / 11 (WebView2) |
| **Linux** | `x86_64` (64-bit) | `.deb`, `.rpm`, `.AppImage` | Debian/Ubuntu, Fedora/RHEL, or AppImage-compatible distro |

<DocsFigure src="/download-page.jpg" alt="GEEKFUN Downloads page showing SqlKit installers for macOS, Windows, and Linux" caption="Choose the package for your operating system from the GEEKFUN Downloads page or GitHub Releases." :width="1280" :height="720" />

## Install by platform

### macOS

The macOS disk image contains a **Universal binary** that runs natively on both Apple Silicon (M1–M4) and Intel Macs.

<DocsSteps>

### Open the disk image

Double-click the downloaded `SqlKit_*.dmg` file in Finder.

### Drag to Applications

Drag the **SqlKit** icon onto the **Applications** folder alias.

<DocsFigure src="/mac-sqlkit-move-to-app.png" alt="The SqlKit macOS disk image showing the app icon and Applications folder shortcut" caption="Drag SqlKit into Applications so auto-updates and Spotlight launch work cleanly." :width="1544" :height="1024" />

### Launch and confirm Gatekeeper

Open **SqlKit** from **Applications** or Spotlight. On first launch, macOS may ask you to confirm opening an app downloaded from the internet — verify the download came from `geekfun.club` or `github.com/geek-fun/sqlkit/releases` and select **Open**.

</DocsSteps>

::: tip macOS Gatekeeper warning?
If macOS blocks the launch, check **System Settings → Privacy & Security** or follow [Apple's guide for opening downloaded apps](https://support.apple.com/en-us/102445).
:::

### Windows

1. Download the `.exe` (NSIS installer) or `.msi` package for Windows `x86_64`.
2. Double-click the installer and follow the setup wizard.
3. Launch **SqlKit** from the Start menu or desktop shortcut.

::: info Single-instance behavior
On Windows and Linux, SqlKit enforces a single running instance: launching SqlKit again brings the existing window to the front instead of spawning duplicate processes.
:::

### Linux

Choose the package format that matches your distribution:

::: code-group

```bash [Debian / Ubuntu (.deb)]
sudo apt install ./SqlKit_*_amd64.deb
```

```bash [Fedora / RHEL (.rpm)]
sudo dnf install ./SqlKit-*.x86_64.rpm
```

```bash [AppImage (Portable)]
chmod +x ./SqlKit_*.AppImage
./SqlKit_*.AppImage
```

:::

Replace the wildcard filename with the exact file you downloaded. The `.deb` and `.rpm` packages register a desktop entry (`SqlKit.desktop`) so SqlKit appears in your application launcher.

## Background system tray mode

Closing the main SqlKit window **hides the window to the system tray (Windows/Linux) or menu bar (macOS)** rather than terminating the app. This keeps background tasks and the local **MCP Bridge** running while you work in your terminal or IDE.

From the tray / menu bar icon, you can:
- **Show Window** — bring SqlKit back to focus immediately
- View live **MCP Bridge** status, port, and connected client count (Ultimate)
- **Copy Bridge URL** — copy the local bridge endpoint to clipboard
- **Quit** — fully shut down SqlKit and stop background services

The tray menu automatically matches your selected UI language (7 languages supported).

## Built-in auto-updates

SqlKit checks [GitHub Releases](https://github.com/geek-fun/sqlkit/releases) for signed updates automatically and also lets you check manually under **Settings → General → About**:

- Updates use signed release artifacts (`latest.json`) verified before installation.
- When a new version is available, SqlKit shows a download progress bar and installs + restarts in one click.
- Automatic update checks can be toggled off in settings if you manage packages manually or work in an air-gapped environment.

## First launch checklist

<DocsSteps>

### Add and test a database connection

Open **Connections** and click **`+`** (or **Add New Connection**). Choose your database engine, fill in credentials or pick a local SQLite/DuckDB file, and click **Test Connection**.

### Let JDBC drivers install on demand (if needed)

Built-in engines (PostgreSQL, MySQL, SQL Server, SQLite, SQLCipher, ClickHouse, and compatible profiles) connect immediately. If you add an **Oracle, DuckDB, Snowflake, BigQuery, Cassandra**, or other JDBC engine, SqlKit automatically checks for a compatible Java runtime (JDK 25+ or managed **Eclipse Temurin JRE 25**), downloads `jdbc-bridge`, and fetches the engine driver during the connection test. You can also manage them anytime in **Settings → JRE & JDBC Drivers**.

### Run a quick verification query

Double-click your saved connection to open **Queries**, type `SELECT 1;` (or `SELECT 1 FROM dual;` on Oracle), and press <kbd>⌘</kbd>+<kbd>Enter</kbd> on macOS or <kbd>Ctrl</kbd>+<kbd>Enter</kbd> on Windows/Linux.

### Optional: Sign in for Ultimate features

If you have a **GEEKFUN Data Studio Ultimate** subscription or 7-day free trial, sign in from **Settings → General → Account & Plan** (opens browser auth and returns via the `sqlkit://auth` deep link) to unlock Agentic Data Studio, MCP Bridge, ER Diagrams, Bulk Transfer, and SSH Tunnels.

</DocsSteps>

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard
    title="Connect to a database"
    description="Set up hosts, ports, SSL/TLS certificates, timeouts, and JDBC drivers."
    href="/docs/sqlkit/connect-to-database"
    icon="server"
  />
  <DocsCard
    title="Supported databases & JDBC"
    description="Browse all 68 supported engines, default ports, and capability boundaries."
    href="/docs/sqlkit/supported-databases"
    icon="database"
  />
  <DocsCard
    title="SQL editor & execution plans"
    description="Learn Monaco autocomplete, formatting, EXPLAIN trees, and query history."
    href="/docs/sqlkit/query-editor"
    icon="code"
  />
  <DocsCard
    title="Settings, themes & languages"
    description="Configure Light/Dark/System themes, 7 UI languages, and editor defaults."
    href="/docs/sqlkit/settings-and-preferences"
    icon="settings"
  />
</DocsCardGrid>
