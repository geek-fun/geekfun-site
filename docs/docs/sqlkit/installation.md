---
title: Install SqlKit on macOS, Windows, or Linux
description: Download and install the SqlKit desktop SQL client. Choose the universal Mac installer, Windows x64 installer, or Linux DEB, RPM, or AppImage package.
---

# Install SqlKit

Open the [SqlKit download section](/download#sqlkit) and choose an installer for your operating system. The same packages are available on [GitHub Releases](https://github.com/geek-fun/sqlkit/releases).

| Operating system | Package | Architecture |
| --- | --- | --- |
| macOS | `.dmg` | Universal, for Apple Silicon and Intel |
| Windows | `.exe` or `.msi` | x64 |
| Linux | `.deb`, `.rpm`, or AppImage | x86-64 |

## macOS

1. Open the downloaded `.dmg` file.
2. Drag SqlKit to **Applications**.
3. Open SqlKit from **Applications**.

## Windows

1. Open the `.exe` installer. If you prefer the `.msi`, select it on the download page.
2. Follow the installer prompts, then open SqlKit from the Start menu.

## Linux

- For Debian or Ubuntu, use the `.deb` package. From the download directory, run `sudo apt install ./<package>.deb`, replacing `<package>.deb` with the downloaded filename.
- For Fedora, use the `.rpm` package. From the download directory, run `sudo dnf install ./<package>.rpm` with the downloaded filename.
- For the AppImage, mark the downloaded file as executable, then open it. From a terminal you can use `chmod +x ./<filename>.AppImage` followed by `./<filename>.AppImage`, replacing `<filename>.AppImage` with the actual filename.

## First launch

Open **Connections** to [add your first database](/docs/sqlkit/connect-to-database). MySQL, PostgreSQL, SQL Server, and SQLite use built-in drivers. When you test an Oracle or other JDBC connection, SqlKit checks for Java and downloads any missing JDBC components. See [JDBC setup](/docs/sqlkit/connect-to-database#java-and-jdbc-drivers).

Closing the window leaves SqlKit running in the background. Use **Show Window** in the menu bar or system tray to reopen it, or choose **Quit** to stop the app.
