---
title: 设置、主题、多语言与自动更新 | SqlKit
description: 全面了解 SqlKit 设置中的 6 大选项卡：深色/浅色主题、7 种界面语言、Monaco 编辑器参数、查询行数与超时上限、AI 服务商、MCP 桥接与 JRE 25/JDBC 驱动管理。
outline: [2, 3]
---

# 设置、主题与自动更新

点击左侧导航栏底部的**设置**，即可一站式管理外观、界面语言、Monaco 编辑器偏好、查询默认项、AI/MCP 集成以及 Java / JDBC 运行时组件。

## 六大设置选项卡总览

| 选项卡 | 核心配置项 | 版本要求 |
| --- | --- | --- |
| **通用（General）** | 主题（**跟随系统 / 深色 / 浅色**）、界面语言（7 种语言 + 自动检测系统）、账号与方案、关于与签名自动更新 | <DocsBadge variant="community">社区版</DocsBadge> |
| **编辑器（Editor）** | Monaco 字号、Tab 宽度、格式化缩进与行宽、自动换行、行号显示、代码缩略图（Minimap） | <DocsBadge variant="community">社区版</DocsBadge> |
| **查询（Query）** | 默认结果行数上限、默认查询超时时间、自动保存查询 | <DocsBadge variant="community">社区版</DocsBadge> |
| **AI** | 20 个 BYOK 模型服务商预设、单服务商 HTTP 代理、模型同步、全局系统提示词、自动压缩与预算护栏 | <DocsBadge variant="ultimate">旗舰版</DocsBadge> |
| **MCP 桥接（MCP Bridge）** | 内嵌桥接状态与重启、实时活跃客户端列表、Claude/Codex/Cursor 注册指引、默认 AI 权限 | <DocsBadge variant="ultimate">旗舰版</DocsBadge> |
| **JRE 与 JDBC 驱动** | 系统 JDK 25+ 检测或托管 Eclipse Temurin JRE 25、`jdbc-bridge` JAR 与全部 27 个 JDBC 驱动 | <DocsBadge variant="community">社区版</DocsBadge> |

## 通用设置：主题、7 种语言与账号方案

### 主题外观

通过可视化预览卡片在**跟随系统**（自动同步 macOS/Windows/Linux 外观）、**深色**与**浅色**之间切换。Monaco 编辑器、虚拟滚动数据网格与 ER 图画布会同步更新配色。

### 支持的 7 种界面语言

SqlKit 默认自动检测操作系统语言，也可随时在**设置 → 通用 → 语言**中手动切换（主界面与系统托盘/菜单栏菜单同步生效）：

- **English**（`en-US`）
- **简体中文**（`zh-CN`）
- **繁體中文**（`zh-TW`）
- **Português (Brasil)**（`pt-BR`）
- **日本語**（`ja-JP`）
- **한국어**（`ko-KR`）
- **Español**（`es-ES`）

### 账号、旗舰版试用与版本锁定保障

在**账号与方案**中登录你的 GEEKFUN 账号（通过系统浏览器完成登录并由 `sqlkit://auth` 深链安全回传），即可开启 **7 天免费试用**或激活**旗舰版**订阅。

::: tip 本地版本锁定永久授权
SqlKit 会在本地记录你订阅的版本锁定基线（Version-Lock Horizon）。订阅有效期内发布的任意 SqlKit 版本，即便日后取消订阅仍会在本地永久保持解锁状态。
:::

### 关于与签名自动更新

查看当前应用版本号，手动触发针对 **GitHub Releases**（`latest.json`）的签名更新检查，实时展示下载进度并一键安装重启。若你处于离线内网或偏好手动升级，可在设置中关闭自动检查。

## 编辑器与查询默认参数

### 编辑器设置

| 配置项 | 取值范围 / 选项 | 说明 |
| --- | --- | --- |
| **字号（Font Size）** | `8` – `32` px | 全局作用于所有 Monaco SQL 标签页 |
| **Tab 宽度（Tab Size）** | `1` – `8` 空格 | 控制编辑器缩进宽度 |
| **格式化缩进宽度** | `1` – `8` 空格 | `Format SQL`（`Shift+Option/Alt+F`）使用的缩进空格数 |
| **格式化行宽** | `40` – `200` 字符 | SQL 格式化目标换行宽度 |
| **自动换行（Word Wrap）** | 开 / 关 | 视口内自动折行显示长 SQL |
| **显示行号** | 开 / 关 | 在行首播放图标旁显示行号 |
| **显示缩略图（Minimap）** | 开 / 关 | 控制 Monaco 右侧代码缩略图开关 |

### 查询设置

| 配置项 | 取值范围 | 默认值 | 说明 |
| --- | --- | --- | --- |
| **默认行数上限（Row Limit）** | `10` – `10,000` | `1,000` | 未显式写 `LIMIT` 时保护前端与数据库的默认返回条数 |
| **查询超时（Query Timeout）** | `1` – `300` 秒 | `30` 秒 | 单条查询最长等待时间（可在单个连接上覆写） |
| **自动保存查询** | 开 / 关 | — | 自动将编辑内容写回已保存的本地 `.sql` 文件 |

## 桌面特性、零遥测与本地存储

- **零遥测（Zero Telemetry）**：SqlKit 不采集任何使用统计、埋点或遥测数据；数据库日常读写完全支持离线工作。
- **窗口状态记忆**：自动记住上次退出时的窗口尺寸、位置与最大化状态。
- **后台系统托盘常驻**：关闭窗口时应用收起至 macOS 菜单栏或 Windows/Linux 系统托盘，确保后台传输任务与本地 MCP 桥接不中断；如需彻底退出，请在托盘菜单点击**退出**。
- **本地文件目录**：
  - 设置、连接配置与 Data Studio 对话历史均保存在本机应用数据目录（`.store.dat` 与 `agent.sqlite`）。
  - 托管 Java 运行时（按需下载后）：`~/.sqlkit/jre`
  - JDBC 桥接 JAR（按需下载后）：`~/.sqlkit/jdbc-bridge/`

## 下一步

<DocsCardGrid :cols="2">
  <DocsCard title="快捷键参考" description="查阅 macOS、Windows 与 Linux 全平台快捷键。" href="/zh/docs/sqlkit/keyboard-shortcuts" icon="keyboard" />
  <DocsCard title="支持的数据库与 JDBC 驱动" description="了解 JRE 25 与 27 个 JDBC 驱动的按需管理方式。" href="/zh/docs/sqlkit/supported-databases#jdbc-manager" icon="database" />
</DocsCardGrid>
