---
title: DocKit v1.0 发布 — 首个稳定版本
description: DocKit v1.0 作为首个稳定版本发布，历经两年开发，全面支持 DynamoDB、Elasticsearch 和 OpenSearch。新增 ES|QL 补全、查询语言注册中心和模板 body 自动补全。
head:
  - - meta
    - name: keywords
      content: DocKit v1.0, DocKit 发布, 稳定版本, ES|QL, 查询语言注册中心, DynamoDB, Elasticsearch, OpenSearch, NoSQL GUI 客户端, 开源发布
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/news/dockit-v1-0-release
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/news/dockit-v1-0-release
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/news/dockit-v1-0-release
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/news/dockit-v1-0-release
---

# 🎉 DocKit v1.0 发布：首个稳定版本

**2026年5月10日** — 今天我们发布 **DocKit v1.0**，这是 AI 原生 NoSQL 桌面客户端的首个稳定版本。历经两年开发、一次完整的 UI 重写，以及从 0.5 到 0.9 周期的数千次下载，DocKit 正式步入 1.0。

此次发布结束了 0.9 时代 — 该时代涵盖了从 0.9.0 到 0.9.10 共 20 个版本 — 标志着 DocKit 在所有三个支持的引擎上已具备生产就绪品质：DynamoDB、Elasticsearch 和 OpenSearch。

## 🚀 v1.0.0 新功能

### 🔤 ES|QL 查询补全

Elasticsearch 的管道查询语言现已在编辑器中获得完整自动补全支持。输入 ES|QL 命令时，DocKit 会自动提示数据源、命令和函数 — 与 DSL 编辑器如出一辙的使用体验。

### 🧩 查询语言注册中心

统一架构现已支撑所有查询引擎。SQL、PPL 和 EQL 与现有的 Elasticsearch DSL 及 DynamoDB PartiQL 引擎统一纳入单一注册中心。这意味着 DocKit 支持的每种查询语言都能获得一致的补全行为、格式化和文档快捷键体验 — 现在和未来都是如此。

### 📋 模板 Body 补全

索引模板和组件模板现已支持完整的 body 自动补全 — 字段映射、设置和配置块会在输入时自动提示，与现有的索引和搜索 DSL 补全体验相同。

### 📊 管理面板列排序

管理面板中的索引和模板表现在支持按列排序。点击任意列标题 — 名称、状态、文档数量、大小 — 即可进行升序或降序排序。

### 🔧 修复

- 修复新建 DynamoDB 表的 **PartiQL 校验**问题 (#400)
- **Ctrl+D 文档快捷键**现已正确覆盖所有 Elasticsearch API 端点，无遗漏 (#395)

## 通往 1.0 之路

DocKit 始于 2025 年初的一个简单 Elasticsearch 查询编辑器。一路走来的主要里程碑：

- **v0.5** — 查询文件管理、索引导入导出
- **v0.6** — AI 助手（OpenAI）、Monaco 编辑器、集群管理、多标签编辑
- **v0.8** — DynamoDB 支持：可视化查询构建器、PartiQL 编辑器、表管理
- **v0.9** — 完整 UI 重设计（Naive UI → shadcn-vue + UnoCSS）、查询历史、DynamoDB Local、PartiQL 格式化

每个 0.9.x 补丁版本直到 v0.9.10，陆续加入了连接排序、键盘导航、SSO 认证、ES|QL 基础架构、Data Studio AI Agent，并完成了 UI 迁移。

v1.0 并没有添加某个单一的头条功能。它是这些积累的顶点 — 每一套系统都已经足够成熟，可以称为稳定。

## 📥 下载

| 平台 | 下载 |
|------|------|
| **macOS**（通用版） | [下载 .dmg](https://github.com/geek-fun/dockit/releases/latest) |
| **Windows**（x64） | [下载 .exe](https://github.com/geek-fun/dockit/releases/latest) |
| **Linux**（AppImage / deb） | [下载](https://github.com/geek-fun/dockit/releases/latest) |

📥 **[从 DocKit 页面下载](/zh/products/dockit/)**  
⭐ **[GitHub 发布说明](https://github.com/geek-fun/dockit/releases/tag/v1.0.0)**

## 参与贡献

欢迎社区贡献。如果你发现了 bug 或有功能需求，请在 [GitHub 提交 issue](https://github.com/geek-fun/dockit/issues)。

---

**相关链接：**
- [DocKit v1.0 正式介绍](/zh/blog/introducing-dockit-v1)
- [DocKit 官方网站](/zh/products/dockit/)
- [GitHub 仓库](https://github.com/geek-fun/dockit)
- [完整更新日志](https://github.com/geek-fun/dockit/blob/main/CHANGELOG.md)
