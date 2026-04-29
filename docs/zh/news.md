---
title: 极客范新闻 - DocKit 发布 DynamoDB GUI 客户端 Elasticsearch 工具更新
description: "关注极客范最新新闻、DocKit 与 SqlKit 版本发布、产品公告和社区里程碑，及时了解数据库工具更新、新功能上线与开源项目进展。"
head:
  - - meta
    - name: keywords
      content: 极客范新闻, DocKit发布, 开源公告, 软件更新, 极客范更新
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/news
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/news
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/news
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/news
---
# 新闻

欢迎来到 **GEEKFUN 新闻！** :rocket::rocket::rocket:

及时了解 GEEKFUN 社区的最新公告、发布和更新。在这里您将找到关于我们项目的新闻、新功能、社区活动和重要里程碑。

## [🎉 DocKit v0.9 发布：UI 重设计、查询历史与 DynamoDB Local 支持](/zh/news/dockit-v0-9-release)

**2026年3月3日** — DocKit v0.9 是一个里程碑版本，包含 **1,200+ 行 UI 重设计**，覆盖 60+ 个 Vue 组件。

🎨 **全面 UI 重设计 — Naive UI → shadcn-vue + UnoCSS** — 将所有 UI 组件从 Naive UI/SCSS 迁移到 shadcn-vue + UnoCSS，减少 CSS 依赖并建立统一的设计系统。100+ 个组件完成迁移，支持一致的全暗色/全亮色主题。

📜 **查询历史**——再也不用担心丢失查询。Elasticsearch 和 DynamoDB 查询现在自动保存带时间戳，可跨会话搜索和重用。查询本地持久化，让你可以精确恢复到上次工作状态。

🔌 **DynamoDB Local 支持**——新增可选端点 URL 配置，轻松连接 DynamoDB Local、LocalStack 或 Testcontainers——只需将 DocKit 指向 `http://localhost:8000` 即可开始工作。

📝 **PartiQL 文档格式化**——Monaco 编辑器新增 DynamoDB PartiQL 查询代码格式化支持。正确的缩进、关键字大小写和语法结构，让 PartiQL 脚本更易读。

🔄 **官方 Tauri 更新器**——从自定义更新机制迁移到官方 Tauri 更新插件，支持代码签名、版本清单和回滚保护。

## [🎉 DocKit v0.8 发布：全面支持 DynamoDB](/zh/news/dockit-v0-8-dynamodb-support)

**2026年1月20日** - 我们很高兴地宣布 DocKit v0.8 正式发布，完整支持 Amazon DynamoDB！此版本带来了强大的新功能，包括 PartiQL 查询编辑器、可视化查询 UI、内联数据编辑等。了解这次重大更新的更多新特性。
