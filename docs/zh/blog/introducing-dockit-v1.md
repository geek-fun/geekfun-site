---
title: DocKit v1.0 正式介绍 — AI 原生 NoSQL 桌面客户端的首个稳定版本
description: DocKit v1.0 发布，历经 970+ 次提交、244 个合并 PR、132 个已解决问题、70 个版本发布和 1,000+ GitHub Star。从头梳理 AI 原生 NoSQL 桌面客户端的每一项功能，从第一行代码到首个稳定版。
head:
  - - meta
    - name: keywords
      content: DocKit 1.0, DocKit 介绍, AI原生 NoSQL GUI, DynamoDB 桌面客户端, Elasticsearch GUI, OpenSearch GUI, NoSQL 数据库工具, Kibana 替代品, 开源数据库客户端, PartiQL 编辑器, AI 数据库助手, Tauri 桌面应用
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/blog/introducing-dockit-v1
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/introducing-dockit-v1
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/introducing-dockit-v1
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/introducing-dockit-v1
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "DocKit v1.0 正式介绍 — AI 原生 NoSQL 桌面客户端的首个稳定版本",
        "description": "DocKit v1.0 发布，历经 970+ 次提交、244 个合并 PR、132 个已解决问题、70 个版本发布和 1,000+ GitHub Star。从头梳理 AI 原生 NoSQL 桌面客户端的每一项功能。",
        "image": "https://www.geekfun.club/dockit-client-ui.png",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.geekfun.club/geekfun.png"
          }
        },
        "datePublished": "2026-05-10",
        "dateModified": "2026-05-10",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.geekfun.club/zh/blog/introducing-dockit-v1"
        },
        "keywords": ["DocKit", "NoSQL GUI", "Elasticsearch 客户端", "DynamoDB 工具", "AI 数据库助手", "开源", "Tauri"],
        "articleSection": "产品发布"
      }
---

# DocKit v1.0 正式介绍

**970 次提交。244 个合并 PR。132 个已解决问题。70 个版本发布。1,091 个 GitHub Star。**

历经 2 年 10 个月的开发，DocKit 发布了首个稳定版本。一个从简单 Elasticsearch 查询编辑器起步的项目，正式成长为成熟的 NoSQL 桌面平台。如果你很久没看过 DocKit 了，或者从未听说过它，现在正是时候。

![DocKit UI](/public/dockit-client-ui.png)

## DocKit 之前的烦恼

每个和 Elasticsearch 打交道的开发者都懂 Kibana 的问题。打开它，等 30 秒容器启动，烧掉 500MB 内存，然后开始跟一个切个窗口就丢滚动位置的浏览器标签搏斗。Kibana 的可视化确实出色。但作为日常查询编辑器，它很挣扎。

如果你的技术栈还包含 DynamoDB 或 OpenSearch，痛苦会加倍 — 三个不同的控制台，三种不同的查询语言，三个地方可能丢失你的工作。我们受够了。

于是我们做了 DocKit：一款免费、开源、AI 原生的 NoSQL 桌面客户端。它基于 [Tauri](https://tauri.app/) 构建，用原生应用取代浏览器控制台和商业工具。一个界面，三种引擎：DynamoDB、Elasticsearch、OpenSearch。MongoDB 正在积极开发中。

原生桌面应用。两秒启动，内存占用可忽略不计，一切本地存储。没有 Docker，没有浏览器，没有云。同一套编辑器、快捷键和行为，处处一致。

它是为每天写查询的开发者而生的。是给那个需要查「为什么这条搜索返回空结果」、探索某个 DynamoDB 表结构、或用自然语言生成一条 PartiQL 语句，并且需要在几秒内得到答案的人。

## DocKit 能做什么

### 读懂你数据结构的 AI

DocKit 的 AI 助手不是通用聊天机器人。生成查询前，它会读取你的表结构、索引映射和字段类型。描述你的需求：

- "查找最近 7 天注册且邮箱未验证的用户"
- "按产品类别聚合 2026 年第一季度的销售额"
- "显示最近一小时内最慢的 10 条查询"

你得到的是能实际运行的查询 — DynamoDB PartiQL 或 Elasticsearch DSL — 带有正确的字段名、正确的操作符、正确的语法。内置 OpenAI 和 DeepSeek。自带 API Key，查询数据不离本地。

### 开发者应得的编辑器

Monaco Editor — VS Code 同款引擎 — 处理所有编辑工作。语法高亮、智能补全、多光标编辑、括号匹配，以及你早已记熟的每个快捷键。在此之上：

语法驱动补全引擎，覆盖 Elasticsearch、OpenSearch 和 DynamoDB。37 个测试用例验证从 v0.90 到 v9.x 的 API 版本覆盖。ES|QL 自动补全，支持数据源、命令和函数建议。查询语言注册中心，SQL、PPL、EQL、DSL 和 PartiQL 共享同一套补全架构。Body 补全，输入时自动提示字段映射、索引设置、组件模板。JSON5 支持：行内注释、尾逗号、无引号键名。按你的思考方式写查询，而不是按解析器的要求。Ctrl+D 文档快捷键，在任意 API 端点上按 Ctrl+D，打开该操作的精确文档页面，版本与你的集群匹配。

### 查询历史，无需操心

没有保存按钮。没有配置。DocKit 自动记录你执行的每条查询，跨三个引擎。每个连接 500 条，存储在你的机器上。

每条记录捕获方法、路径、连接名和时间戳（Elasticsearch/OpenSearch），或查询类型、表和时间戳（DynamoDB）。键盘导航浏览历史。复制到剪贴板。载回编辑器。一键重新执行。覆盖 PartiQL 语句、Elasticsearch DSL 查询和可视化表单查询。

### DynamoDB，完整支持

DocKit 的 DynamoDB 集成不是打个勾的复选框功能。它是一套完整的工具链，历经六个月持续打磨。

可视化查询构建器，用主键过滤和高级条件扫描和查询表，无需编写代码。PartiQL 编辑器，SQL 风格语法，完整自动补全、语法高亮、文档格式化和 Gutter 执行。写 SQL 风格的查询并直接运行。在结果中直接更新和删除条目，无需切换视图。

表管理覆盖浏览、查看条目、管理 GSI/LSI、查看 CloudWatch 指标。导入导出结构感知：JSON、CSV、JSONL。DynamoDB Local 支持离线开发，无需 AWS 凭证。SSO 和 AssumeRole 处理跨账户认证。

目标很简单：让你不再感知工具的存在，只专注于数据本身。

### Elasticsearch 和 OpenSearch 管理

DocKit 替代了那些你原本需要手动执行的 `_cat` API 调用。不是因为 curl 难用。是因为记住哪个端点返回什么纯属浪费时间。

集群总览：健康状态、节点计数、分片分配、索引摘要。节点监控：每个节点的 IP、内存、磁盘、JVM 堆、分片分布。分片检查：类型、分配、文档计数、磁盘使用、段详情。索引操作：创建、删除、关闭、打开、强制合并、刷新、清空。别名和模板可视化管理。索引和模板表支持列排序。一键切换显示/隐藏系统索引。

这些不是用来替代你的监控体系的。是当你需要快速查看点什么、不想切到另一个工具时的选择。

### 规模化导入导出

JSON、CSV、JSONL。批量操作处理百万级记录。在集群间迁移数据、为开发环境备份表、给测试环境播种数据。跨 Elasticsearch、OpenSearch 和 DynamoDB。

### 隐私优先架构

DocKit 设计上就是本地优先的。连接、查询和历史存储在你的文件系统上。凭证由操作系统钥匙串加密（macOS Keychain、Windows 凭据管理器、Linux libsecret）。零遥测。无分析、无回传、无云同步。无需网络连接。完全离线可用。Apache 2.0 许可。无企业版、无功能锁。

### 跨平台，真正的轻量

基于 Tauri v2 构建，不是 Electron。macOS 安装包不到 10MB。Tauri 使用操作系统的原生 webview（macOS 上 WebKit、Windows 上 WebView2、Linux 上 WebKitGTK），因此没有捆绑的浏览器引擎。

| 平台 | 安装包 |
|------|--------|
| macOS（通用版 — Apple Silicon + Intel） | `.dmg`，约 8MB |
| Windows（x64） | `.exe` 安装器 |
| Linux | `.AppImage`、`.deb` |

## 数据说话

| 指标 | 数字 |
|------|------|
| 总提交数 | 970 |
| 合并 PR 数 | 244 |
| 已解决问题数 | 132 |
| 发布版本数 | 70 |
| GitHub Star | 1,091 |
| 开发周期 | 2 年 10 个月 |
| 主贡献者提交数 | 791 |
| UI 迁移变更行数 | 1,200+ 行，60+ 组件 |
| 自动补全测试用例 | 37 |

## 通往 1.0 之路

### 2023：奠基

**2023 年 7 月 22 日。** 首次提交。一个 `package.json`、一个 LICENSE 文件、一个 README。基于 Electron 构建。

**2023 年 8 月。** Monaco Editor 作为查询编辑器核心集成。基础连接管理：添加、测试、删除 Elasticsearch 连接。编辑器获得了搜索 DSL 的语法高亮和代码补全。

**2024 年 1 月。** 查询执行上线。支持对 Elasticsearch 端点的 GET、POST、PUT、DELETE 操作。同月加入 OpenSearch 认证支持。实现了自动更新机制。2 月首次公开发布。

### 2024：平台转变

**2024 年 4 月。** OpenAI 集成发布。这是转折点。DocKit 不再只是代码补全，它可以解释自然语言并生成上下文准确的查询。不是侧边栏里贴的聊天框 — 是一个真正理解 Elasticsearch DSL 的助手。

**2024 年 6 月 29 日。** Electron → Tauri v1 迁移。这是一次重写。Electron 的 Chromium 依赖意味着 150MB+ 的安装包。Tauri 使用操作系统的原生 webview，安装包缩减到 20MB 以下。这次迁移触及了每一层：Rust 后端替代 Node.js 主进程，新的 IPC 架构，新的构建流水线。

**2024 年夏季。** 集群管理上线。节点健康监控、分片状态可视化、索引管理、别名控制。全部通过可视化界面完成，比 curl `_cat` 端点快得多。9 月加入 Query DSL 自动补全。11 月加入导入导出（JSON、CSV）。

**2024 年 12 月 26 日。** DynamoDB 支持启动。这是第二次重大转折。DocKit 不再只是 Elasticsearch 工具。DynamoDB 集成将在接下来的六个月中成长为一个完整的子系统。

### 2025：扩展

**2025 年 3 月 30 日。** Tauri v1 → Tauri v2 升级。Tauri v2 带来了移动端支持、可插拔权限系统和改进的 IPC 性能。升级涉及所有 Tauri 插件，需要将整个 Rust 层适配到新 API。

**2025 年 4 月。** DeepSeek 集成加入，与 OpenAI 并行。开发者现在可以选择 AI 提供商。同月，DynamoDB 可视化查询构建器发布 — 无需写代码即可扫描和查询表。

**2025 年 7 月。** v0.7.0：多语言支持（英文 + 中文），DynamoDB 分页，以及一轮依赖升级将技术栈更新到最新版本。

### 2026：成熟

**2026 年 1 月。** 这是开发最密集的月份。一个月内：PartiQL 编辑器（完整语法高亮和格式化），语法驱动补全引擎（37 个测试用例覆盖从 0.90 到 9.x 的每个 API 版本），DynamoDB CRUD 操作（行内创建、更新、删除条目），实时语法校验和错误高亮，以及连接加载模态框。

**2026 年 1 月 13 日。** v0.8.0。DynamoDB 子系统现在已经足够完整，可以被称为一个独立的产品。可视化查询构建器、带 Gutter 执行图标的 PartiQL 编辑器、统一工具栏、结构感知导出、元数据验证导入、带 GSI 操作和 CloudWatch 指标的 DynamoDB 管理面板。

**2026 年 2 月 28 日。** Naive UI → shadcn-vue + UnoCSS 迁移。又一次完整 UI 重写。60+ 个 Vue 组件中 1,200+ 行变更。Naive UI 被替换为 shadcn-vue（Radix Vue 基础组件）和 UnoCSS 样式。更干净的设计，更好的无障碍性，更轻的包体积，以及更快迭代 UI 的基础。

**2026 年 3 月 3 日。** v0.9.0。查询历史（每个连接 500 条，自动记录，纯本地），DynamoDB Local 端点支持（离线开发），PartiQL 文档格式化，以及官方 Tauri 更新器插件。v0.9.x 快速发布周期从此开始。

**2026 年 3–4 月。** v0.9.x 冲刺。8 周内 10 个补丁版本：Elasticsearch API Key 认证、连接克隆、查询参数自动补全、连接排序筛选、历史视图键盘导航、DynamoDB SSO 和 AssumeRole、完全重建的 Data Studio AI Agent（流式 LLM 响应），以及 Naive UI → shadcn-vue 迁移的完成。0.9 系列共 20 个版本。

**2026 年 5 月 5–7 日。** v1.0.0 落地。ES|QL 查询补全。统一查询语言注册中心（SQL、PPL、EQL、DSL、PartiQL）。索引和组件模板的 body 补全。管理面板列排序。标签从 `0.x` 变为 `1.0`。

## 接下来的计划

MongoDB 支持正在积极开发中。连接管理和查询执行已合并到主分支。Azure Cosmos DB 已列入路线图。

0.9 系列共发布了 20 个版本，平均每 6 天一次。这个节奏不会因为版本号从 1 开始就改变。

---

DocKit 使用 Apache 2.0 许可。无企业版。无功能锁。无注册墙。仓库里有的，二进制包里就有。

[下载 DocKit 1.0](/zh/products/dockit/)，支持 macOS、Windows 和 Linux。

[查看 GitHub](https://github.com/geek-fun/dockit)。

[阅读完整更新日志](https://github.com/geek-fun/dockit/blob/main/CHANGELOG.md)。
