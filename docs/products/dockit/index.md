---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: DocKit – Open-Source NoSQL GUI Client
description: DocKit is an open-source desktop GUI client for DynamoDB, OpenSearch, and Elasticsearch. A fast, secure Dynobase alternative for developers on Mac, Windows, and Linux.
head:
  - - meta
    - name: keywords
      content: NoSQL GUI client, DynamoDB GUI, Elasticsearch GUI, OpenSearch GUI, database client, Dynobase alternative, Kibana alternative, open source database tool, PartiQL editor, desktop database client, Mac database client, Windows database client, Linux database client
  - - link
    - rel: canonical
      href: https://www.geekfun.club/products/dockit/
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
        "description": "Open-source desktop GUI client for DynamoDB, OpenSearch, and Elasticsearch. A fast, secure database management tool for developers on Mac, Windows, and Linux.",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "featureList": [
          "DynamoDB GUI client",
          "Elasticsearch GUI client",
          "OpenSearch GUI client",
          "PartiQL editor",
          "Visual query builder",
          "Query history persistence",
          "Multi-database support",
          "Cluster management",
          "AI-powered database assistant"
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
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "DocKit",
        "description": "Open-source NoSQL GUI desktop client for DynamoDB, Elasticsearch, and OpenSearch",
        "brand": {
          "@type": "Brand",
          "name": "GEEKFUN"
        },
        "category": "Database Software",
        "image": "https://www.geekfun.club/dockit.png",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2026-12-31"
        }
      }

hero:
  name: "DocKit"
  text: Open-Source NoSQL GUI Client for Developers
  tagline: Fast, secure desktop client for DynamoDB, Elasticsearch, and OpenSearch. AI-powered database management for Windows, macOS, and Linux
  image:
    src: /dockit.png
    alt: DocKit - Open-source NoSQL GUI client for DynamoDB, Elasticsearch, and OpenSearch
  actions:
    - theme: brand
      text: Download
      link: /download
    - theme: alt
      text: docs
      link: /docs

features:
  - title: Full featured editor
    details: Powered by monaco-editor (the backbone of vscode), providing a familiar editing environment for developers.
  - title: Persist connections and queries
    details: DocKit can connect to multiple Elasticsearch, OpenSearch, and DynamoDB instances simultaneously and persist queries to local files, preventing data loss.
  - title: Multi-engine support
    details: Supports Elasticsearch, OpenSearch, DynamoDB, and more engines coming soon.
  - title: Cluster management and monitoring
    details: DocKit provides cluster management and monitoring features, helping you easily manage and monitor the health, nodes, shards, and indices of your Elasticsearch clusters.

---

::: tip 🎉 Latest News
DocKit v0.9 Released - Redesigned UI with Query History & Full DynamoDB support is now available! [Read more →](/news/dockit-v0-9-release)
:::

<div align="center" style="padding: 64px;">
<p style="font-size: 20px;margin: 20px;font-weight: bolder;">Client Screen Short</p>
<img src="/client-ui.png" alt="Client UI" style="width: 90%"/>
</div>
