---
title: Install SqlKit on macOS, Windows, or Linux
description: Download and install the SqlKit desktop SQL client. Choose the universal Mac installer, Windows x64 installer, or Linux DEB, RPM, or AppImage package.
outline: [2, 3]
---

# SqlKit installation

## Download SqlKit

Choose the installer for your operating system in the [SqlKit download section](/download#sqlkit). The same packages are available on [GitHub Releases](https://github.com/geek-fun/sqlkit/releases).

<DocsFigure src="/download-page.jpg" alt="Geekfun Downloads page showing SqlKit installers for macOS, Windows, and Linux" caption="SqlKit offers a universal .dmg for Apple Silicon and Intel Macs, .exe or .msi for Windows x64, and .deb, .rpm, or AppImage for Linux x86-64." :width="1280" :height="720" />

## Install SqlKit

### macOS

1. Open the downloaded `.dmg` file.
2. Drag the SqlKit icon into the **Applications** folder.
3. Open SqlKit from **Applications**.

<DocsFigure src="/mac-sqlkit-move-to-app.png" alt="The SqlKit disk image showing the app icon and an Applications folder shortcut" caption="Drag SqlKit into Applications to install it." :width="1544" :height="1024" />

If macOS asks whether to open the app on first launch, choose **Open** after checking that you downloaded it from Geekfun or SqlKit’s GitHub Releases. If macOS blocks the launch, identify the alert and follow [Apple’s guidance for opening downloaded apps](https://support.apple.com/en-us/102445).

### Windows

Double-click the downloaded `.exe` or `.msi` and follow the installer prompts. Open SqlKit from the Start menu after installation.

### Linux

- For Debian or Ubuntu, use the `.deb` package. From the download directory, run `sudo apt install ./<package>.deb`, replacing `<package>.deb` with the downloaded filename.
- For Fedora, use the `.rpm` package. From the download directory, run `sudo dnf install ./<package>.rpm` with the downloaded filename.
- For the AppImage, mark the downloaded file as executable, then open it. From a terminal you can use `chmod +x ./<filename>.AppImage` followed by `./<filename>.AppImage`, replacing `<filename>.AppImage` with the actual filename.

## First launch

Open **Connections** to [add your first database](/docs/sqlkit/connect-to-database). MySQL, PostgreSQL, SQL Server, and SQLite use built-in drivers. When you test an Oracle or other JDBC connection, SqlKit checks for Java and downloads any missing JDBC components. See [JDBC setup](/docs/sqlkit/connect-to-database#java-and-jdbc-drivers).

Closing the window leaves SqlKit running in the background. Use **Show Window** in the menu bar or system tray to reopen it, or choose **Quit** to stop the app.
