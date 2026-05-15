---
title: DocKit 1.0 - 开发者早该拥有的 NoSQL 桌面客户端
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
        "headline": "DocKit 1.0 - 开发者早该拥有的 NoSQL 桌面客户端",
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

# DocKit 1.0 - 开发者早该拥有的 NoSQL 桌面客户端

> 970 次提交。244 个合并 PR。132 个已解决问题。70 个版本发布。1,091 个 GitHub Star。

历经 2 年 10 个月的开发，DocKit 发布了首个稳定版本。从一个简单的 Elasticsearch 查询编辑器起步，现在能在同一个原生桌面应用里管理 DynamoDB、Elasticsearch 和 OpenSearch。如果你从未听说过 DocKit，现在正是时候。

![DocKit UI](/public/dockit-client-ui.png)

## DocKit 之前的烦恼

浏览器端的 NoSQL 工具有很多通病：臃肿、丢状态、客户端强绑定。Kibana、OpenSearch Dashboards、AWS 控制台——不同 Logo，同一套痛点。

**不必要的臃肿。** 这些工具被做成完整平台：仪表盘、监控、告警、可视化引擎。但大多数时候开发者只是想跑几个查询。Kibana/OpenSearch Dashboards 让你一行查询还没写就需要启动实例/容器、30S+的启动时间、500MB+ 内存占用。光是自动补全就能打满集群每个 warm 节点的 CPU。

**频繁丢失的语句。** 浏览器工具不像桌面应用那样持有状态。Kibana 新标签页打开 Dashboard，筛选条件直接没了（[#188914](https://github.com/elastic/kibana/issues/188914)，至今未修）。离开几分钟，Session 过期，回到登录页，全丢了（[#106235](https://github.com/elastic/kibana/issues/106235)，还开着）。AWS 控制台同理：Session 刷新还会清掉你正在填的表单。不是你忘了保存，是工具替你忘了。

**强制绑定的客户端。** 每个 Web UI 都被捆在单个后端上。Kibana 和 OpenSearch Dashboards 一个实例只能连一个集群，且明确驳回了支持多集群的请求（[#25183](https://github.com/elastic/kibana/issues/25183)），并明确 "长期内都不会考虑"。AWS 控制台把你锁在 DynamoDB 单标签页里，Session 还有倒计时。结果就是：staging 和prod？两个实例，两套登录。换个数据库？换套工具。每个后端都是一个跑在你机器上的新客户端。

我们希望 NoSQL 客户端能像 RDBMS 客户端那样工作：与服务端解耦，在一个地方管理多种引擎和集群，查询和历史持久化到文件系统，而不是依赖脆弱的浏览器状态。于是我们做了 DocKit——基于 Tauri 的原生桌面应用，做的正是这件事。

## DocKit 能做什么

### 用自然语言写数据库查询

AI 助手理解你的数据库结构，所以生成的查询是真正能跑的。描述你的需求：

![DocKit AI 助手截图](/public/dockit-ai-assistant.png)

- "查找最近 7 天注册且邮箱未验证的用户"
- "按产品类别聚合 2026 年第一季度的销售额"
- "显示最近一小时内最慢的 10 条查询"

你得到的是能实际运行的查询 — DynamoDB PartiQL 或 Elasticsearch DSL — 带有正确的字段名、正确的操作符、正确的语法。内置 OpenAI 和 DeepSeek 支持，只需添加你的 API Key，查询数据不离本地。

### VS Code 级别的数据库编辑

Monaco Editor — VS Code 同款引擎 — 驱动编辑器内核。语法高亮、智能补全、多光标编辑、括号匹配，以及你早已记熟的每个快捷键。

![DocKit 编辑器截图](/public/dockit-dynamodb-manage-local.png)

语法驱动补全覆盖 Elasticsearch、OpenSearch 和 DynamoDB——100+测试用例验证从 v0.90 到 v9.x 的 API 版本。ES|QL 自动补全，支持数据源、命令和函数建议。查询语言注册中心，SQL、PPL、EQL、DSL 和 PartiQL 共享同一套补全架构。Body 补全，输入时自动提示字段映射、索引设置、组件模板。JSON5 支持：行内注释、尾逗号、无引号键名。按你的思考方式写查询，而不是按解析器的要求。在任意 API 端点上按 Ctrl+D 即可打开该操作的精确文档页面，版本与你的集群匹配。

### 查询和连接持久保存

得益于桌面应用的天然优势。DocKit 会保存你的数据库连接，并自动记录你执行的每条查询到本地文件中，跨所有引擎。每个连接 500 条，存储在你的机器上。

![DocKit 查询历史截图](/public/dockit-query-history.png)

每条记录捕获方法、路径、连接名和时间戳（Elasticsearch/OpenSearch），或查询类型、表和时间戳（DynamoDB）。键盘导航浏览历史。复制到剪贴板。重新加载回编辑器。一键重新执行。覆盖 PartiQL 语句、Elasticsearch DSL 查询和可视化表单查询。

### 流式数据快速导入导出

JSON、CSV、JSONL。批量操作处理百万级记录。在集群间迁移数据、为开发环境备份表、给测试环境播种数据。跨 Elasticsearch、OpenSearch 和 DynamoDB。
![DocKit 数据导入导出面板截图](/public/dockit-dynamodb-import-export.png)

### 一个工具，多种引擎

DynamoDB、Elasticsearch、OpenSearch——同一个编辑器，同一套快捷键。引擎之间即时切换。

DynamoDB 方面，可视化查询构建器，带主键过滤和高级条件。PartiQL 编辑器，完整自动补全、语法高亮、文档格式化和 Gutter 执行。行内编辑——在结果中直接更新和删除条目。表管理支持 GSI/LSI 操作和 CloudWatch 指标。DynamoDB Local 离线开发。SSO 和 AssumeRole 跨账户 AWS 认证。

Elasticsearch 和 OpenSearch 方面，Monaco 支持的编辑和语法驱动补全（37 个测试用例，v0.90 到 9.x），外加完整的集群管理：节点健康、分片状态、索引操作、别名控制——全部可视化，不用手敲 `_cat`。列排序，系统索引过滤。

### 本地优先，注重隐私

DocKit 本地优先。连接、查询和历史存储在你的文件系统上。凭证由操作系统钥匙串加密（macOS Keychain、Windows 凭据管理器、Linux libsecret）。零遥测。无云同步、无回传。无需网络连接——完全离线可用。Apache 2.0 许可。无功能锁。

### 跨平台支持 — macOS、Windows、Linux

基于 Tauri v2 构建，不是 Electron。macOS 安装包不到 10MB。Tauri 使用操作系统的原生 webview（macOS 上 WebKit、Windows 上 WebView2、Linux 上 WebKitGTK）。没有捆绑的浏览器引擎。

| 平台 | 安装包 |
|------|--------|
| macOS（通用版 — Apple Silicon + Intel） | `.dmg`，约 8MB |
| Windows（x64） | `.exe` 安装器 |
| Linux | `.AppImage`、`.deb` |

## 通往 1.0 之路

### 2023：奠基

![奠基 — 仓库初始化与首批功能](/public/screenshots/milestone-foundation.png)

**2023 年 7 月 22 日。** 首次提交。一个 `package.json`、一个 LICENSE 文件、一个 README。基于 Electron 构建。

**2023 年 8 月。** Monaco Editor 作为查询编辑器核心集成。基础连接管理：添加、测试、删除 Elasticsearch 连接。编辑器获得了搜索 DSL 的语法高亮和代码补全。

**2024 年 1 月。** 查询执行上线。支持对 Elasticsearch 端点的 GET、POST、PUT、DELETE 操作。同月加入 OpenSearch 认证支持。实现了自动更新机制。2 月首次公开发布。

### 2024：平台转变

![平台转变 — 移除 Electron，Tauri v1 就位](/public/screenshots/milestone-platform.png)

**2024 年 4 月。** OpenAI 集成发布。这是转折点。DocKit 不再只是代码补全，它可以解释自然语言并生成上下文准确的查询——一个真正理解 Elasticsearch DSL 的助手，而不是侧边栏里贴的聊天框。

**2024 年 6 月 29 日。** Electron → Tauri v1 迁移。这是一次重写。Electron 的 Chromium 依赖意味着 150MB+ 的安装包。Tauri 使用操作系统的原生 webview，安装包缩减到 20MB 以下。这次迁移触及了每一层：Rust 后端替代 Node.js 主进程，新的 IPC 架构，新的构建流水线。

**2024 年夏季。** 集群管理上线。节点健康监控、分片状态可视化、索引管理、别名控制。全部通过可视化界面完成，比 curl `_cat` 端点快得多。9 月加入 Query DSL 自动补全。11 月加入导入导出（JSON、CSV）。

**2024 年 12 月 26 日。** DynamoDB 支持启动。DocKit 不再只是 Elasticsearch 工具。DynamoDB 集成将在接下来的六个月中成长为一个完整的子系统。

### 2025：扩展

![扩展 — Tauri v2、多语言、DynamoDB UI](/public/screenshots/milestone-expansion.png)

**2025 年 3 月 30 日。** Tauri v1 → Tauri v2 升级。Tauri v2 带来了移动端支持、可插拔权限系统和改进的 IPC 性能。升级涉及所有 Tauri 插件，需要将整个 Rust 层适配到新 API。

**2025 年 4 月。** DeepSeek 集成加入，与 OpenAI 并行。开发者现在可以选择 AI 提供商。同月，DynamoDB 可视化查询构建器发布 — 无需写代码即可扫描和查询表。

**2025 年 7 月。** v0.7.0：多语言支持（英文 + 中文），DynamoDB 分页，以及一轮依赖升级将技术栈更新到最新版本。

### 2026：成熟

![成熟 — 查询历史、ES|QL、v1.0 打磨](/public/screenshots/milestone-maturation.png)

**2026 年 1 月。** 这是开发最密集的月份。一个月内：PartiQL 编辑器（完整语法高亮和格式化），语法驱动补全引擎（37 个测试用例覆盖从 0.90 到 9.x 的每个 API 版本），DynamoDB CRUD 操作（行内创建、更新、删除条目），实时语法校验和错误高亮，以及连接加载模态框。

**2026 年 1 月 13 日。** v0.8.0。DynamoDB 子系统现在已经足够完整，可以被称为一个独立的产品。可视化查询构建器、带 Gutter 执行图标的 PartiQL 编辑器、统一工具栏、结构感知导出、元数据验证导入、带 GSI 操作和 CloudWatch 指标的 DynamoDB 管理面板。

**2026 年 2 月 28 日。** Naive UI → shadcn-vue + UnoCSS 迁移。60+ 个 Vue 组件中 1,200+ 行变更。Naive UI 被替换为 shadcn-vue（Radix Vue 基础组件）和 UnoCSS 样式。更干净的设计，更好的无障碍性，更轻的包体积。

**2026 年 3 月 3 日。** v0.9.0。查询历史（每个连接 500 条，自动记录，纯本地），DynamoDB Local 端点支持（离线开发），PartiQL 文档格式化，以及官方 Tauri 更新器插件。v0.9.x 快速发布周期从此开始。

**2026 年 3–4 月。** v0.9.x 冲刺。8 周内 10 个补丁版本：Elasticsearch API Key 认证、连接克隆、查询参数自动补全、连接排序筛选、历史视图键盘导航、DynamoDB SSO 和 AssumeRole、完全重建的 Data Studio AI Agent（流式 LLM 响应），以及 Naive UI → shadcn-vue 迁移的完成。0.9 系列共 20 个版本。

### 正式版发布

![v1.0 发布 — 键盘导航、UX 打磨、README 更新](/public/screenshots/milestone-v1release.png)

标签从 `0.x` 变为 `1.0`。ES|QL 查询补全落地，统一查询语言注册中心随之发布 — SQL、PPL、EQL、DSL、PartiQL 现在共享同一套补全引擎。Body 补全覆盖索引设置和组件模板。列排序上线管理面板。

经过两年和 130 多个已解决问题，DocKit 正式对外说：能用，拿去用。不再有测试版声明。

## 接下来的计划

MongoDB 支持正在积极开发中。连接管理和查询执行已合并到主分支。Azure Cosmos DB 已列入路线图。

版本号变成 1 了，节奏照旧。

---

DocKit 使用 Apache 2.0 许可。社区版功能完整——无功能锁、无注册墙。仓库里有的，二进制包里就有。

[下载 DocKit 1.0](/zh/download)，支持 macOS、Windows 和 Linux。

[查看 GitHub](https://github.com/geek-fun/dockit)。

[阅读完整更新日志](https://github.com/geek-fun/dockit/blob/main/CHANGELOG.md)。
