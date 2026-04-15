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
  text: The NoSQL Desktop Client
  tagline: A premium, AI-powered GUI for DynamoDB, Elasticsearch, and OpenSearch. Manage clusters and persist queries instantly, all for free.
  image:
    src: /dockit.png
    alt: DocKit - Open-source NoSQL GUI client for DynamoDB, Elasticsearch, and OpenSearch
  actions:
    - theme: brand
      text: Download
      link: /download
    - theme: alt
      text: Documentation
      link: /docs

features:
  - title: Desktop-Grade Editor
    details: Built on Monaco Editor to bring the power and familiarity of VS Code right to your database queries.
  - title: Local Persistence
    details: Keep multiple connections alive and save queries securely to your local filesystem. Never lose your work.
  - title: Multi-Engine Support
    details: Seamlessly manage DynamoDB, Elasticsearch, and OpenSearch from a single, unified interface.
  - title: Cluster Management
    details: Monitor node health, manage shards, and track indices with built-in visual cluster tools.

---

::: tip 🎉 Latest News
DocKit v0.9 Released - Redesigned UI with Query History & Full DynamoDB support is now available! [Read more →](/news/dockit-v0-9-release)
:::

<div style="padding: 64px 24px; text-align: center; max-width: 1152px; margin: 0 auto;">
  <h2 style="font-size: 28px; font-weight: 600; margin-bottom: 40px; letter-spacing: -0.025em;">See DocKit in Action</h2>
  <div style="border-radius: 12px; overflow: hidden; border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider)); box-shadow: var(--vp-shadow-2);">
    <img src="/client-ui.png" alt="DocKit desktop application interface" style="display: block; width: 100%; height: auto;" />
  </div>
</div>
