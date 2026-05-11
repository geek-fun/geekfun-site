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

# DocKit v1.0 发布：首个稳定版本

**2026年5月10日** — DocKit v1.0 正式发布。历经两年开发、多次 UI 重写，以及从 0.5 到 0.9 周期的数千次下载，这款 AI 原生 NoSQL 桌面客户端迈入 1.0。

0.9 时代涵盖了从 0.9.0 到 0.9.10 共 20 个版本。随着本次发布，DocKit 在所有已支持的引擎上进入生产可用状态：DynamoDB、Elasticsearch 和 OpenSearch。

## v1.0.0 新功能

### ES|QL 查询补全

### 查询语言注册中心

### 模板 Body 补全

### 管理面板列排序

### 修复

- 修复新建 DynamoDB 表的 **PartiQL 校验**问题 (#400)
- **Ctrl+D 文档快捷键**现已正确覆盖所有 Elasticsearch API 端点，无遗漏 (#395)

## 通往 1.0 之路

DocKit 始于 2023 年中，最初只是一个 Elasticsearch 查询编辑器。一路走来的主要里程碑：

- **v0.5** — 查询文件管理、索引导入导出
- **v0.6** — AI 助手（OpenAI）、Monaco 编辑器、集群管理、多标签编辑
- **v0.8** — DynamoDB 支持：可视化查询构建器、PartiQL 编辑器、表管理
- **v0.9** — 完整 UI 重设计（Naive UI → shadcn-vue + UnoCSS）、查询历史、DynamoDB Local、PartiQL 格式化

每个 0.9.x 补丁版本直到 v0.9.10，陆续加入了连接排序、键盘导航、SSO 认证、ES|QL 基础架构、Data Studio AI Agent，并完成了 UI 迁移。

v1.0 并没有添加某个单一的头条功能。每一套系统现在都已经足够成熟，可以称为稳定。

## 下载

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
- [DocKit 1.0 - 开发者早该拥有的 NoSQL 桌面客户端](/zh/blog/introducing-dockit-v1)
- [DocKit 官方网站](/zh/products/dockit/)
- [GitHub 仓库](https://github.com/geek-fun/dockit)
- [完整更新日志](https://github.com/geek-fun/dockit/blob/main/CHANGELOG.md)
