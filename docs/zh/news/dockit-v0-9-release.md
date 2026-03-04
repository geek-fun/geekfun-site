---
title: DocKit v0.9 发布 - UI 重设计、查询历史与 DynamoDB Local 支持
description: DocKit v0.9 带来了基于 shadcn-vue + UnoCSS 的现代 UI 重设计、Elasticsearch 和 DynamoDB 的自动查询历史、DynamoDB Local 端点支持以及 PartiQL 格式化功能。
head:
  - - meta
    - name: keywords
      content: DocKit v0.9, DocKit发布, UI重设计, 查询历史, DynamoDB Local, PartiQL格式化, shadcn-vue, NoSQL GUI客户端, 开源发布
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/news/dockit-v0-9-release
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/news/dockit-v0-9-release
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/news/dockit-v0-9-release
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/news/dockit-v0-9-release
---

# 🎉 DocKit v0.9 发布：UI 重设计、查询历史与 DynamoDB Local 支持

**2026年3月3日** - 我们很高兴地宣布 **DocKit v0.9** 正式发布！这是一个里程碑式的版本，带来了全面的 UI 重设计、所有支持数据库的自动查询历史、DynamoDB Local 端点支持，以及针对 PartiQL 用户的多项体验改进。

## 🚀 新增内容

### 🎨 现代 UI 重设计

v0.9 最显著的变化是全面的 UI 改版。我们从 Naive UI 迁移至 **shadcn-vue + UnoCSS**，带来：

- 更简洁、更现代的视觉设计，覆盖所有面板和对话框
- 组件之间更好的一致性，以及改进的无障碍访问性
- 更快的渲染速度和更轻量的整体包体积
- 为后续 UI 功能迭代奠定更坚实的基础

### 🕘 查询历史

DocKit 现在**自动记录您执行的每一个查询** — 适用于 Elasticsearch、OpenSearch 和 DynamoDB — 无需任何手动保存操作。

- 在全新的**历史面板**中查看过去查询的时间顺序列表
- 每条记录显示 HTTP 方法、API 路径、连接名称和时间戳（Elasticsearch），或查询类型、表名和时间戳（DynamoDB）
- **复制**查询到剪贴板、**添加到编辑器**将其重新加载，或**执行**立即重新运行
- 历史记录**每个连接上限为 500 条**，完全存储在您的本地机器上 — 从不同步到云端
- 同时覆盖 DynamoDB 的 **PartiQL 语句**和**可视化 UI 表单查询**

了解更多：[查询历史博客文章](/zh/blog/dockit-query-history) | [查询历史文档](/zh/docs/dockit/query-history)

### 🏠 DynamoDB Local 支持

现在可以通过在连接配置中指定可选的端点 URL 来连接到**本地运行的 DynamoDB 实例**。这使得以下操作更加简便：

- 在不使用 AWS 资源的情况下开发和测试 DynamoDB Local
- 在指向本地 DynamoDB 容器的 CI 环境中运行集成测试
- 无需任何 AWS 凭证即可离线工作

### ✏️ PartiQL 文档格式化

DynamoDB PartiQL 编辑器现在包含**文档格式化提供器** — 按下格式化快捷键可自动清理和缩进您的 PartiQL 语句，使复杂查询更易于阅读和维护。

### 🔧 改进与修复

- **修复**：在某些配置中加载 HTTP 客户端时凭证未正确传递的问题 (#310)
- **改进**：更新机制迁移至官方 Tauri 更新插件，应用内更新更加可靠
- **安全**：多项依赖升级，包括 `@tauri-apps/plugin-dialog`、`@tauri-apps/plugin-store`、`vue-i18n`、`markdown-it` 和 `json-with-bigint`

## 📥 下载

DocKit v0.9.0 已在所有平台提供：

| 平台 | 下载 |
|------|------|
| **macOS**（通用版） | [DocKit_0.9.0_universal.dmg](https://github.com/geek-fun/dockit/releases/download/v0.9.0/DocKit_0.9.0_universal.dmg) |
| **Windows**（x64） | [DocKit_0.9.0_x64-setup.exe](https://github.com/geek-fun/dockit/releases/download/v0.9.0/DocKit_0.9.0_x64-setup.exe) |
| **Linux**（AppImage） | [DocKit_0.9.0_amd64.AppImage](https://github.com/geek-fun/dockit/releases/download/v0.9.0/DocKit_0.9.0_amd64.AppImage) |
| **Linux**（deb） | [DocKit_0.9.0_amd64.deb](https://github.com/geek-fun/dockit/releases/download/v0.9.0/DocKit_0.9.0_amd64.deb) |

📥 **[从 DocKit 页面下载](/zh/products/dockit/)**  
⭐ **[GitHub 发布说明](https://github.com/geek-fun/dockit/releases/tag/v0.9.0)**

## 参与贡献

我们欢迎社区贡献！如果您发现 Bug 或有功能需求，请[在 GitHub 上提交 Issue](https://github.com/geek-fun/dockit/issues)。

---

**相关链接：**
- [查询历史文档](/zh/docs/dockit/query-history)
- [DocKit 官方网站](/zh/products/dockit/)
- [GitHub 仓库](https://github.com/geek-fun/dockit)
- [完整变更日志](https://github.com/geek-fun/dockit/compare/v0.8.2...v0.9.0)
