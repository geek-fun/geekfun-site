---
title: 安装 SqlKit | macOS、Windows 和 Linux
description: 下载并安装 SqlKit 桌面 SQL 客户端。提供 macOS 通用安装包、Windows x64 安装包，以及 Linux DEB、RPM 和 AppImage。
---

# 安装 SqlKit

在 [SqlKit 下载区](/zh/download#sqlkit)按操作系统选安装包。[GitHub Releases](https://github.com/geek-fun/sqlkit/releases) 也提供同样的文件。

| 操作系统 | 安装包 | 架构 |
| --- | --- | --- |
| macOS | `.dmg` | 通用版，支持 Apple 芯片和 Intel 芯片 |
| Windows | `.exe` 或 `.msi` | x64 |
| Linux | `.deb`、`.rpm` 或 AppImage | x86-64 |

## macOS

1. 打开下载的 `.dmg` 文件。
2. 将 SqlKit 拖到**应用程序**文件夹。
3. 从**应用程序**文件夹打开 SqlKit。

## Windows

1. 打开 `.exe` 安装程序，或在下载页面选择 `.msi` 安装包。
2. 按照提示完成安装，然后从开始菜单打开 SqlKit。

## Linux

- Debian 或 Ubuntu 可使用 `.deb` 安装包。在下载目录执行 `sudo apt install ./<package>.deb`，并将 `<package>.deb` 替换为实际文件名。
- Fedora 可使用 `.rpm` 安装包。在下载目录执行 `sudo dnf install ./<package>.rpm`，并替换为实际文件名。
- 使用 AppImage 时，先为文件添加执行权限，再打开它。也可以在终端执行 `chmod +x ./<filename>.AppImage` 和 `./<filename>.AppImage`，并替换为实际文件名。

## 首次启动

打开**连接管理**并[添加数据库连接](/zh/docs/sqlkit/connect-to-database)。MySQL、PostgreSQL、SQL Server 和 SQLite 使用内置驱动。测试 Oracle 等 JDBC 连接时，SqlKit 会检查 Java 运行环境，并按需下载缺少的 JDBC 组件。操作见 [JDBC 设置](/zh/docs/sqlkit/connect-to-database#java-and-jdbc-drivers)。

关闭窗口后，SqlKit 仍会在后台运行。要重新打开窗口，请在菜单栏或系统托盘选**显示窗口**。要结束应用，请选**退出**。
