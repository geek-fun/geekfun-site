---
title: 在 macOS、Windows 或 Linux 上安装 SqlKit | 快速开始
description: 在 macOS（通用版）、Windows x64 或 Linux（DEB/RPM/AppImage）上下载并安装 SqlKit 桌面客户端，支持后台托盘常驻与签名自动更新。
outline: [2, 3]
---

# 安装与首次启动

SqlKit 基于 Tauri v2 和 Rust 构建。安装客户端以及连接内置引擎（PostgreSQL、MySQL、SQL Server、SQLite、SQLCipher、ClickHouse 及兼容协议数据库）都不需要预先安装 Java 或外部运行时。

## 平台安装包

前往 [SqlKit 下载页](/zh/download#sqlkit)或 [GitHub Releases](https://github.com/geek-fun/sqlkit/releases) 下载对应安装包：

<DocsFigure src="/download-page.jpg" alt="极客范下载页中的 SqlKit macOS、Windows 与 Linux 安装包" caption="从极客范下载页或 GitHub Releases 选择匹配操作系统的安装包。" :width="1280" :height="720" />

| 操作系统 | 架构 | 安装包格式 | 最低要求 |
| --- | --- | --- | --- |
| <DocsPlatform name="macos" /> | 通用二进制（`arm64` + `x86_64`） | `.dmg`（已签名并公证） | macOS 10.15（Catalina）及以上 |
| <DocsPlatform name="windows" /> | `x86_64`（64 位） | `.exe`（NSIS）/ `.msi` | Windows 10 / 11（WebView2） |
| <DocsPlatform name="linux" /> | `x86_64`（64 位） | `.deb`、`.rpm`、`.AppImage` | Debian/Ubuntu、Fedora/RHEL 或支持 AppImage 的发行版 |

## 按平台安装

### macOS

macOS `.dmg` 包含通用二进制文件，同时原生运行在 Apple Silicon（M1 到 M4）和 Intel Mac 上。

<DocsSteps>

### 打开磁盘映像

在访达中双击下载好的 `SqlKit_*.dmg` 文件。

### 拖入“应用程序”文件夹

将 **SqlKit** 图标拖放到 **Applications（应用程序）** 快捷方式中。

<DocsFigure src="/mac-sqlkit-move-to-app.png" alt="SqlKit macOS 磁盘映像窗口，将应用图标拖入 Applications 文件夹" caption="将 SqlKit 拖入“应用程序”文件夹，以便自动更新与聚焦搜索正常工作。" :width="1544" :height="1024" />

### 首次打开并确认 Gatekeeper 提示

从“应用程序”或聚焦搜索启动 **SqlKit**。首次启动时，若 macOS 提示是否打开来自互联网的应用，确认安装包来自 `geekfun.club` 或 `github.com/geek-fun/sqlkit/releases` 后点击**打开**。

</DocsSteps>

::: tip 遇到 macOS 安全拦截？
若 macOS 阻止打开，请前往**系统设置 → 隐私与安全性**放行，或参考 [Apple 官方指南：安全打开来自互联网的 App](https://support.apple.com/zh-cn/102445)。
:::

### Windows

1. 下载 Windows `x86_64` 对应的 `.exe`（NSIS 安装程序）或 `.msi` 安装包。
2. 双击安装程序并按提示完成安装。
3. 从开始菜单或桌面快捷方式启动 **SqlKit**。

::: info 单实例机制
在 Windows 与 Linux 上，SqlKit 只保留一个运行实例。重复启动时会切回已有窗口，不会多开进程。
:::

### Linux

按发行版选择对应命令，并将通配符替换为实际文件名：

::: code-group

```bash [Debian / Ubuntu (.deb)]
sudo apt install ./SqlKit_*_amd64.deb
```

```bash [Fedora / RHEL (.rpm)]
sudo dnf install ./SqlKit-*.x86_64.rpm
```

```bash [AppImage（便携版）]
chmod +x ./SqlKit_*.AppImage
./SqlKit_*.AppImage
```

:::

`.deb` 与 `.rpm` 包会注册桌面入口（`SqlKit.desktop`），安装后可直接从应用启动器打开。

## 后台系统托盘模式

关闭主窗口时，SqlKit 会收起到系统托盘（Windows/Linux）或菜单栏（macOS）继续后台运行，这样后台传输任务和本地 **MCP 桥接**在切换去 IDE 或终端时不会中断。

点击托盘或菜单栏图标可以重新打开主窗口（**显示窗口**）、查看 **MCP 桥接**状态、监听端口与活跃客户端数（旗舰版）、复制本地桥接地址（**复制桥接 URL**），或者彻底停止应用和后台服务（**退出**）。托盘菜单会跟随你在设置中选择的 7 种语言之一。

## 签名自动更新

SqlKit 会自动向 [GitHub Releases](https://github.com/geek-fun/sqlkit/releases) 检查带签名校验的新版本（`latest.json`），也可以在**设置 → 通用 → 关于**手动触发检查。发现新版本后会显示下载进度，下载完成后重启一次即可完成安装。如果处于离线内网或习惯手动升级，可在设置中关闭自动检查。

## 首次启动清单

<DocsSteps>

### 添加并测试第一个数据库连接

打开**连接管理**，点击 **`+`**（或**添加新连接**），选择数据库类型，填写地址和凭据（或选择本地 SQLite / DuckDB 文件），然后点击**测试连接**。

### 按需安装 JDBC 驱动（如适用）

PostgreSQL、MySQL、SQL Server、SQLite、SQLCipher、ClickHouse 等内置引擎可直接连接。测试 Oracle、DuckDB、Snowflake、BigQuery、Cassandra 等 JDBC 连接时，SqlKit 会检测系统 JDK 25+ 或自动下载受管的 Eclipse Temurin JRE 25、`jdbc-bridge` 以及对应引擎驱动。随时可在**设置 → JRE 与 JDBC 驱动**中管理这些组件。

### 运行一条验证查询

双击已保存的连接卡片进入**查询**工作区，输入 `SELECT 1;`（Oracle 使用 `SELECT 1 FROM dual;`），按 macOS 的 <kbd>⌘</kbd>+<kbd>Enter</kbd> 或 Windows/Linux 的 <kbd>Ctrl</kbd>+<kbd>Enter</kbd> 执行。

### 可选：登录账号启用旗舰版功能

如已订阅 GEEKFUN Data Studio 旗舰版或需要 7 天免费试用，在**设置 → 通用 → 账号与方案**中登录（通过浏览器认证并经由 `sqlkit://auth` 深链返回），即可启用 Agentic Data Studio、MCP 桥接、ER 图、批量传输和 SSH 隧道。

</DocsSteps>

## 下一步

<DocsCardGrid :cols="2">
  <DocsCard title="连接数据库、TLS 与重连" description="配置主机、端口、SSL/TLS 证书、超时与自动恢复。" href="/zh/docs/sqlkit/connect-to-database" icon="server" />
  <DocsCard title="支持的数据库与 JDBC 驱动" description="浏览 68 种数据库的默认端口、驱动层与能力边界。" href="/zh/docs/sqlkit/supported-databases" icon="database" />
  <DocsCard title="SQL 编辑器与执行计划" description="了解 Monaco 补全、格式化、EXPLAIN 树与查询历史。" href="/zh/docs/sqlkit/query-editor" icon="code" />
  <DocsCard title="设置、主题与界面语言" description="调整深色/浅色主题、7 种界面语言与编辑器默认项。" href="/zh/docs/sqlkit/settings-and-preferences" icon="settings" />
</DocsCardGrid>
