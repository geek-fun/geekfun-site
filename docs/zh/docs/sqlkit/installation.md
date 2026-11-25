---
title: 在 macOS、Windows 或 Linux 上安装 SqlKit | 快速开始
description: 下载并安装 SqlKit 桌面客户端（macOS 通用版、Windows x64、Linux DEB/RPM/AppImage），了解后台托盘常驻模式与签名自动更新。
outline: [2, 3]
---

# 安装与首次启动

SqlKit 是基于 **Tauri v2 与 Rust** 构建的轻量级原生桌面应用。安装应用以及连接内置引擎（PostgreSQL、MySQL、SQL Server、SQLite、SQLCipher、ClickHouse 及兼容协议数据库）均**不需要预先安装 Java 或任何外部运行时**。

## 平台安装包

请前往 [SqlKit 下载页](/zh/download#sqlkit) 或 [GitHub Releases](https://github.com/geek-fun/sqlkit/releases) 下载对应平台的安装包：

| 操作系统 | 架构 | 安装包格式 | 最低要求 |
| --- | --- | --- | --- |
| **macOS** | 通用二进制（`arm64` + `x86_64`） | `.dmg`（已签名并公证） | macOS 10.15（Catalina）及以上 |
| **Windows** | `x86_64`（64 位） | `.exe`（NSIS）/ `.msi` | Windows 10 / 11（WebView2） |
| **Linux** | `x86_64`（64 位） | `.deb`、`.rpm`、`.AppImage` | Debian/Ubuntu、Fedora/RHEL 或支持 AppImage 的发行版 |

<DocsFigure src="/download-page.jpg" alt="极客范下载页中的 SqlKit macOS、Windows 与 Linux 安装包" caption="从极客范下载页或 GitHub Releases 选择匹配你操作系统的安装包。" :width="1280" :height="720" />

## 按平台安装

### macOS

macOS `.dmg` 为**通用安装包（Universal）**，原生支持 Apple Silicon（M1–M4）与 Intel Mac。

<DocsSteps>

### 打开磁盘映像

在访达中双击下载好的 `SqlKit_*.dmg` 文件。

### 拖入“应用程序”文件夹

将 **SqlKit** 图标拖放到 **Applications（应用程序）** 快捷方式中。

<DocsFigure src="/mac-sqlkit-move-to-app.png" alt="SqlKit macOS 磁盘映像窗口，将应用图标拖入 Applications 文件夹" caption="将 SqlKit 拖入“应用程序”文件夹，以便自动更新与聚焦搜索正常工作。" :width="1544" :height="1024" />

### 首次打开并确认 Gatekeeper 提示

从“应用程序”或聚焦搜索启动 **SqlKit**。首次启动时，如 macOS 询问是否打开从互联网下载的应用，请确认来源为 `geekfun.club` 或 `github.com/geek-fun/sqlkit/releases`，然后点击**打开**。

</DocsSteps>

::: tip 遇到 macOS 安全拦截？
如 macOS 阻止打开，请前往**系统设置 → 隐私与安全性**放行，或参考 [Apple 官方指南：安全打开来自互联网的 App](https://support.apple.com/zh-cn/102445)。
:::

### Windows

1. 下载 Windows `x86_64` 对应的 `.exe`（NSIS 安装程序）或 `.msi` 安装包。
2. 双击安装程序并按向导完成安装。
3. 从开始菜单或桌面快捷方式启动 **SqlKit**。

::: info 单实例保护
在 Windows 与 Linux 上，SqlKit 启用了单实例机制：重复启动应用时会自动唤起已有窗口，避免产生多个重复进程。
:::

### Linux

根据你的发行版选择对应的安装方式（请将通配符替换为实际下载的文件名）：

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

`.deb` 与 `.rpm` 包会自动注册桌面入口（`SqlKit.desktop`），安装后即可在应用启动器中找到 SqlKit。

## 后台系统托盘模式

关闭 SqlKit 主窗口时，应用会**收起到系统托盘（Windows/Linux）或菜单栏（macOS）后台运行**，而不会直接退出。这样你在 IDE 或终端工作期间，后台导入导出任务与本地 **MCP 桥接**都会持续可用。

点击托盘 / 菜单栏图标可执行以下操作：
- **显示窗口**：立即重新打开主界面
- 查看当前 **MCP 桥接**运行状态、监听端口与活跃客户端数量（旗舰版）
- **复制桥接 URL**：一键复制本地桥接地址
- **退出**：彻底关闭 SqlKit 及后台服务

托盘菜单会自动跟随你设置的界面语言（支持全部 7 种语言）。

## 签名自动更新

SqlKit 支持通过 [GitHub Releases](https://github.com/geek-fun/sqlkit/releases) 自动检查并安装带签名校验的新版本，也可在**设置 → 通用 → 关于**中手动检查：

- 更新清单（`latest.json`）与安装包均经过签名校验。
- 发现新版本后可实时查看下载进度，一键安装并重启。
- 如你习惯手动管理版本或处于离线内网环境，可在设置中关闭自动更新检查。

## 首次启动清单

<DocsSteps>

### 添加并测试第一个数据库连接

打开**连接管理**，点击 **`+`**（或**添加新连接**），选择数据库类型、填写地址和凭据（或选择本地 SQLite / DuckDB 文件），点击**测试连接**。

### 按需自动配置 JDBC 驱动（如需）

PostgreSQL、MySQL、SQL Server、SQLite、SQLCipher、ClickHouse 等内置引擎可直接连接。如果你连接的是 **Oracle、DuckDB、Snowflake、BigQuery、Cassandra** 等 JDBC 数据库，SqlKit 会在测试连接时自动检测系统 JDK 25+ 或下载受管的 **Eclipse Temurin JRE 25**、`jdbc-bridge` 以及对应引擎驱动。你也可以随时在**设置 → JRE 与 JDBC 驱动**中统一管理。

### 运行一条验证查询

双击已保存的连接卡片进入**查询**工作区，输入 `SELECT 1;`（Oracle 请使用 `SELECT 1 FROM dual;`），按 macOS 的 <kbd>⌘</kbd>+<kbd>Enter</kbd> 或 Windows/Linux 的 <kbd>Ctrl</kbd>+<kbd>Enter</kbd> 执行。

### 可选：登录账号启用旗舰版能力

如已订阅 **GEEKFUN Data Studio 旗舰版**或希望开启 **7 天免费试用**，可在**设置 → 通用 → 账号与方案**中登录（通过浏览器认证并由 `sqlkit://auth` 深链返回），解锁 Agentic Data Studio、MCP 桥接、ER 图、批量传输和 SSH 隧道。

</DocsSteps>

## 下一步

<DocsCardGrid :cols="2">
  <DocsCard title="连接数据库、TLS 与重连" description="配置主机、端口、SSL/TLS 证书、超时与自动恢复。" href="/zh/docs/sqlkit/connect-to-database" icon="server" />
  <DocsCard title="支持的数据库与 JDBC 驱动" description="浏览 68 种数据库的默认端口、驱动层与能力边界。" href="/zh/docs/sqlkit/supported-databases" icon="database" />
  <DocsCard title="SQL 编辑器与执行计划" description="掌握 Monaco 补全、格式化、EXPLAIN 树与查询历史。" href="/zh/docs/sqlkit/query-editor" icon="code" />
  <DocsCard title="设置、主题与界面语言" description="调整深色/浅色主题、7 种界面语言与编辑器默认项。" href="/zh/docs/sqlkit/settings-and-preferences" icon="settings" />
</DocsCardGrid>
