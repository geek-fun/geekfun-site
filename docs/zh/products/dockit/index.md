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
  text: 开源 NoSQL GUI 客户端
  tagline: 快速、安全的桌面客户端，支持 DynamoDB、Elasticsearch 和 OpenSearch。AI 驱动的数据库管理工具，适用于 Windows、macOS 和 Linux
  image:
    src: dockit.png
    alt: DocKit logo
  actions:
    - theme: brand
      text: 下载
      link: /zh/download
    - theme: alt
      text: 文档
      link: /zh/docs

features:
  - title: 全功能编辑器
    details: DocKit的编辑器由 monaco-editor(vscode的编辑基础模块) 构建而来，提供了与vscode一致的编辑体验，为开发者提供熟悉的编辑环境
  - title: 连接、查询持久化
    details: DocKit可以同时连接多个 Elasticsearch、OpenSearch 和 DynamoDB 实例，并且可以将查询持久化到本地文件中，避免数据丢失。
  - title: 多引擎存储支持
    details: 支持 Elasticsearch、OpenSearch、DynamoDB，更多引擎即将支持
  - title: 可视化管理监控
    details: DocKit 提供集群管理和监控功能，帮助您轻松管理和监控 Elasticsearch 集群的健康状况、节点、分片和索引等信息。
---

::: tip 🎉 最新消息
DocKit v0.8 已发布 - 现已全面支持 DynamoDB！[了解更多 →](/zh/download)
:::

<div align="center" style="padding: 64px;">
<p style="font-size: 20px;margin: 20px;font-weight: bolder;">客户端截图</p>
<img src="/client-ui.png" alt="客户端界面" style="width: 90%"/>
</div>
