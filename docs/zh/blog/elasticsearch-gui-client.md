---
title: DocKit - Elasticsearch桌面客户端介绍
description: 向您介绍 DocKit，一款顶级的 Elasticsearch 桌面客户端，旨在提升您的工作效率并提高生产力。无论您是经验丰富的开发者还是刚入门，找到合适的工具都至关重要。
head:
  - - meta
    - name: keywords
      content: Elasticsearch GUI客户端, Elasticsearch桌面客户端, Elasticsearch可视化工具, Elasticsearch桌面工具, Elasticsearch客户端,Elasticsearch工具, Elasticsearch管理工具,Elasticsearch查询工具
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/blog/elasticsearch-gui-client
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/elasticsearch-gui-client
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/elasticsearch-gui-client
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/elasticsearch-gui-client
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "DocKit - Elasticsearch桌面客户端介绍",
        "description": "向您介绍 DocKit，一款顶级的 Elasticsearch 桌面客户端，旨在提升您的工作效率并提高生产力。无论您是经验丰富的开发者还是刚入门，找到合适的工具都至关重要。",
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
        "datePublished": "2025-02-05",
        "dateModified": "2026-04-08",
        "inLanguage": "zh-CN",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.geekfun.club/zh/blog/elasticsearch-gui-client"
        },
        "keywords": ["Elasticsearch GUI", "桌面客户端", "DocKit", "开源"],
        "articleSection": "Database Tools"
      }
---

# DocKit - Elasticsearch桌面客户端介绍

DocKit 是一个免费、开源的 Elasticsearch 和 OpenSearch 桌面客户端。相比 Kibana，它启动快、内存占用低、支持同时连接多个服务器，更适合日常查询开发。

Kibana 在可视化和仪表盘方面很强，但日常写查询、切换环境的时候，它太重了——需要跑容器，启动要十几秒，每个浏览器标签页都在吃内存。DocKit 是原生桌面应用，支持同时连多个 Elasticsearch 和 OpenSearch 服务器，本地、预发布、生产环境一键切换。查询保存为本地文件，可以直接提交到 Git，离线也能用。

## 为什么用 DocKit 而不是 Kibana 做日常查询？

Kibana 适合可视化和仪表盘，但在开发中写查询、调试 DSL 的时候太重了——需要跑容器，启动慢，每个浏览器标签都吃内存。

DocKit 是原生桌面应用，启动不到 2 秒，内存占用只有 Kibana 的零头。它可以同时连接多个 Elasticsearch 和 OpenSearch 服务器，本地、预发布、生产环境一键切换。查询自动保存为本地文件，Git 友好，离线也能用。

同时支持 OpenSearch，团队里如果两个都在用，DocKit 一个工具就够了，不用在 Kibana 和 OpenSearch Dashboards 之间来回切。

![DocKit UI](/dockit-client-ui.png)

## DocKit 的主要特点

- 查询编辑器支持语法高亮、自动补全和内联注释（JSON5）
- 同时连接多个 Elasticsearch 和 OpenSearch 服务器
- 集群管理——索引操作、节点监控、分片分配
- AI 辅助查询生成——用自然语言描述需求，自动生成 DSL
- 跨平台——macOS、Windows、Linux
- 开源（Apache 2.0）

## 开始使用

1. [下载安装](/zh/products/dockit/) 适合您操作系统的最新版本
2. [连接到服务器](/zh/docs/dockit/connect-to-server)——本地、远程、云端都支持
3. 在编辑器中写查询，`Cmd/Ctrl + Enter` 执行

了解更多信息并下载 DocKit，请访问 [官方网站](/zh/products/dockit/)。
