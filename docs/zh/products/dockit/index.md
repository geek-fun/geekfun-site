---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: DocKit - 开源 NoSQL GUI 客户端
description: DocKit 是一款开源 NoSQL 图形化客户端，支持 DynamoDB、OpenSearch 和 Elasticsearch。适用于 Mac、Windows 和 Linux 的快速、安全的数据库管理工具。
head:
  - - meta
    - name: keywords
      content: NoSQL GUI 客户端, DynamoDB GUI, Elasticsearch GUI, OpenSearch GUI, 数据库客户端, 开源数据库工具, PartiQL 编辑器, 桌面数据库客户端, Mac 数据库客户端, Windows 数据库客户端, Linux 数据库客户端
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/products/dockit/
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/products/dockit/
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/products/dockit/
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/products/dockit/
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "DocKit",
        "description": "开源桌面 GUI 客户端，支持 DynamoDB、OpenSearch 和 Elasticsearch。适用于 Mac、Windows 和 Linux 的快速、安全的数据库管理工具。",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "featureList": [
          "DynamoDB GUI 客户端",
          "Elasticsearch GUI 客户端",
          "OpenSearch GUI 客户端",
          "PartiQL 编辑器",
          "可视化查询构建器",
          "查询历史持久化",
          "多数据库支持",
          "集群管理",
          "AI 驱动数据库助手"
        ],
        "screenshot": "https://www.geekfun.club/client-ui.png",
        "downloadUrl": "https://www.geekfun.club/download",
        "softwareVersion": "0.9.0",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "license": "https://github.com/geek-fun/dockit/blob/main/LICENSE"
      }

hero:
  name: "DocKit"
  text: NoSQL 桌面客户端
  tagline: 高品质 AI 驱动 GUI，支持 DynamoDB、Elasticsearch 和 OpenSearch。集群管理与查询持久化，完全免费。
  image:
    src: dockit.png
    alt: DocKit - 开源 NoSQL GUI 客户端
  actions:
    - theme: brand
      text: 下载
      link: /zh/download
    - theme: alt
      text: 文档
      link: /zh/docs

features:
  - title: 桌面级编辑器
    details: 基于 Monaco Editor 构建，将 VS Code 的强大编辑能力带入数据库查询体验。
  - title: 本地持久化
    details: 同时保持多个连接，查询安全保存到本地文件系统，永不丢失工作内容。
  - title: 多引擎支持
    details: 在统一界面中无缝管理 DynamoDB、Elasticsearch 和 OpenSearch。
  - title: 集群管理
    details: 内置可视化集群工具，轻松监控节点健康、管理分片和追踪索引。
---

::: tip 🎉 最新消息
DocKit v0.9 已发布 — 全新 UI 设计、查询历史和完整 DynamoDB 支持！[了解更多 →](/zh/news/dockit-v0-8-dynamodb-support)
:::

<div style="padding: 64px 24px; text-align: center; max-width: 1152px; margin: 0 auto;">
  <h2 style="font-size: 28px; font-weight: 600; margin-bottom: 40px; letter-spacing: -0.025em;">客户端展示</h2>
  <div style="border-radius: 12px; overflow: hidden; border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider)); box-shadow: var(--vp-shadow-2);">
    <img src="/client-ui.png" alt="DocKit 桌面应用界面" style="display: block; width: 100%; height: auto;" />
  </div>
</div>
