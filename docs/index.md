---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: GEEKFUN - Free Open Source NoSQL GUI Client for DynamoDB & Elasticsearch
description: GEEKFUN builds sustainable open-source software. Download DocKit - free GUI client for DynamoDB, Elasticsearch, OpenSearch. Cross-platform desktop tool for Mac, Windows, Linux developers.
head:
  - - link
    - rel: canonical
      href: https://www.geekfun.club/
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/

hero:
  name: "GEEKFUN"
  text: open-source club
  tagline: software club to build sustainable open source software for the world
  image:
    src: geekfun.png
    alt: GEEKFUN open-source software community logo
  actions:
    - theme: brand
      text: Products
      link: /products
    - theme: alt
      text: GitHub
      link: https://github.com/geek-fun

features:
  - title: Value Driven
    details: We believe that software and services should deliver tangible value to both individuals and industries. By adhering to a value-oriented approach, we define and uphold key principles that focus on continuously driving meaningful outcomes and delivering long-term benefits.
  - title: Open Source
    details: Our commitment to open source is unwavering. We develop, iterate, and improve our software through transparent, collaborative processes that foster innovation and community-driven progress.
  - title: Software Sustainability
    details: We are dedicated to creating software that not only provides value but also prioritizes sustainability. Our goal is to develop solutions that contribute positively to the world while ensuring their long-term viability and impact.
---

::: tip 🎉 Latest News
**DocKit v0.9 Released** - Redesigned UI with Query History & Full DynamoDB support is now available! [Read more →](/news/dockit-v0-9-release)
:::

## Products

<div style="display: flex;flex-wrap: wrap; justify-content: space-evenly;">
<Product :product='{name: "DocKit", logo: "/dockit.png",preview: "/dockit-client-ui.png", description: "Open-source NoSQL desktop client for Elasticsearch, OpenSearch, DynamoDB, and more, built for the next generation of AI Native database management.", url: "/products/dockit/"}'></Product>
<Product :product='{name: "SqlKit", logo: "/sqlkit.png",preview: "/sqlkit-client-ui.png", description: "Open-source SQL desktop client for PostgreSQL, MySQL, SQL Server, SQLite, and other mainstream databases, designed for modern developer workflows.", url: "https://github.com/geek-fun/sqlkit"}'></Product>
<Product :product='{name: "ServerlessInsight", logo: "/serverlessinsight.png",preview: "/serverlessinsight-preview.png", description: "Open-source and vendor-neutral serverless infrastructure platform for Alibaba Cloud, Tencent Cloud, and Volcengine, with end-to-end application delivery capabilities.", url: "https://serverlessinsight.com/"}'></Product>
<Product :product='{name: "serverless-adapter", logo: "/serverless-adapter.svg",preview: "/serverless-adapter-preview.svg", description: "Serverless adapter for Express and Koa across Alibaba Cloud Function Compute, Tencent SCF, and Volcengine veFaaS with automatic provider detection.", url: "https://github.com/geek-fun/serverless-adapter"}'></Product>
<Product :product='{name: "jest-search", logo: "/jest-search.png",preview: "/jest-search-preview.png", description: "Jest tool for search integration testing that quickly boots local Elasticsearch, OpenSearch, and ZincSearch environments.", url: "https://github.com/geek-fun/jest-search"}'></Product>
</div>

## Team Members
<TeamMembers></TeamMembers>
