---
title: Install SqlKit on macOS, Windows, or Linux | Quick Start
description: Download and install SqlKit on macOS (universal Apple Silicon & Intel), Windows x64, or Linux (.deb, .rpm, AppImage). Learn about system tray mode and signed auto-updates.
outline: [2, 3]
---

# Installation & first launch

SqlKit is a native desktop app built with Tauri v2 and Rust. Installing the app and connecting to built-in engines (PostgreSQL, MySQL, SQL Server, SQLite, SQLCipher, ClickHouse, and their wire-compatible engines) requires no Java runtime or external dependencies.

## Platform packages

Download installers from the [SqlKit download page](/download#sqlkit) or [GitHub Releases](https://github.com/geek-fun/sqlkit/releases).

<DocsFigure src="/download-page.jpg" alt="GEEKFUN Downloads page showing SqlKit installers for macOS, Windows, and Linux" caption="Pick the package for your operating system from the GEEKFUN Downloads page or GitHub Releases." :width="1280" :height="720" />

| Operating system | Architecture | Package format | Minimum requirement |
| --- | --- | --- | --- |
| <DocsPlatform name="macos" /> | Universal (`arm64` + `x86_64`) | `.dmg` (signed and notarized) | macOS 10.15 (Catalina) or later |
| <DocsPlatform name="windows" /> | `x86_64` (64-bit) | `.exe` (NSIS) / `.msi` | Windows 10 / 11 (WebView2) |
| <DocsPlatform name="linux" /> | `x86_64` (64-bit) | `.deb`, `.rpm`, `.AppImage` | Debian/Ubuntu, Fedora/RHEL, or AppImage-compatible distro |

## Install by platform

### macOS

The macOS disk image contains a Universal binary for both Apple Silicon (M1 to M4) and Intel Macs.

<DocsSteps>

### Open the disk image

Double-click the downloaded `SqlKit_*.dmg` file in Finder.

### Drag to Applications

Drag the **SqlKit** icon onto the **Applications** folder alias.

<DocsFigure src="/mac-sqlkit-move-to-app.png" alt="The SqlKit macOS disk image showing the app icon and Applications folder shortcut" caption="Drag SqlKit into Applications so auto-updates and Spotlight launch work properly." :width="1544" :height="1024" />

### Launch and confirm Gatekeeper

Open **SqlKit** from **Applications** or Spotlight. On first launch, macOS may ask you to confirm opening a downloaded app. Check that the package came from `geekfun.club` or `github.com/geek-fun/sqlkit/releases`, then select **Open**.

</DocsSteps>

::: tip macOS Gatekeeper warning?
If macOS blocks the launch, check **System Settings → Privacy & Security** or follow [Apple's guide for opening downloaded apps](https://support.apple.com/en-us/102445).
:::

### Windows

1. Download the `.exe` (NSIS installer) or `.msi` package for Windows `x86_64`.
2. Double-click the installer and follow the prompts.
3. Launch **SqlKit** from the Start menu or desktop shortcut.

::: info Single-instance behavior
On Windows and Linux, SqlKit keeps a single running instance. Launching the app a second time focuses the existing window.
:::

### Linux

Pick the package format for your distribution and replace the wildcard with your downloaded filename:

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

The `.deb` and `.rpm` packages register `SqlKit.desktop` so SqlKit appears in your application launcher.

## Background system tray mode

Closing the main window hides SqlKit to the system tray (Windows and Linux) or menu bar (macOS). Background transfer jobs and the local **MCP Bridge** keep running while you work in your terminal or editor.

From the tray or menu bar icon, you can reopen the main window (**Show Window**), check **MCP Bridge** status, port, and connected client count (Ultimate), copy the local bridge endpoint (**Copy Bridge URL**), or shut down the app and background services (**Quit**). The tray menu matches your selected UI language across all 7 languages.

## Built-in auto-updates

SqlKit checks [GitHub Releases](https://github.com/geek-fun/sqlkit/releases) for signed updates automatically, and you can also check manually under **Settings → General → About**. Updates verify signed release metadata (`latest.json`) before installation, show a download progress bar, and install with one restart. You can turn off automatic update checks in settings if you manage packages manually or work offline.

## First launch checklist

<DocsSteps>

### Add and test a database connection

Open **Connections** and click **`+`** (or **Add New Connection**). Choose your database engine, fill in credentials or pick a local SQLite/DuckDB file, and click **Test Connection**.

### Let JDBC drivers install on demand (if needed)

Built-in engines (PostgreSQL, MySQL, SQL Server, SQLite, SQLCipher, ClickHouse, and compatible profiles) connect right away. When you test Oracle, DuckDB, Snowflake, BigQuery, Cassandra, or another JDBC engine, SqlKit checks for a compatible Java runtime (system JDK 25+ or a managed Eclipse Temurin JRE 25), downloads `jdbc-bridge`, and fetches the database driver. You can manage these components anytime in **Settings → JRE & JDBC Drivers**.

### Run a verification query

Double-click your saved connection to open **Queries**, type `SELECT 1;` (or `SELECT 1 FROM dual;` on Oracle), and press <kbd>⌘</kbd>+<kbd>Enter</kbd> on macOS or <kbd>Ctrl</kbd>+<kbd>Enter</kbd> on Windows and Linux.

### Optional: Sign in for Ultimate features

If you have a GEEKFUN Data Studio Ultimate subscription or 7-day free trial, sign in from **Settings → General → Account & Plan**. Authentication opens in your browser and returns through the `sqlkit://auth` deep link to enable Agentic Data Studio, MCP Bridge, ER Diagrams, Bulk Transfer, and SSH Tunnels.

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
