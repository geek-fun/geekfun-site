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
      href: https://dockit.geekfun.club/
  - - link
    - rel: alternate
      hreflang: en
      href: https://dockit.geekfun.club/
  - - link
    - rel: alternate
      hreflang: zh
      href: https://dockit.geekfun.club/zh/
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://dockit.geekfun.club/

hero:
  name: "DocKit"
  text: Open-Source NoSQL GUI Client for Developers
  tagline: Fast, secure desktop client for DynamoDB, Elasticsearch, and OpenSearch. AI-powered database management for Windows, macOS, and Linux
  image:
    src: dockit.png
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
DocKit v0.8 Released - Full DynamoDB support is now available! [Read more →](/download)
:::

## Explore DocKit by Database

DocKit provides specialized GUI clients for each database type:

- **[DynamoDB GUI Client](/blog/dynamodb-gui)** - Visual query builder, PartiQL editor, and the best [Dynobase alternative](/blog/dynobase-alternative) for cost-conscious teams
- **[Elasticsearch GUI](/blog/elasticsearch-gui)** - Desktop client with Dev Tools, index management, and cluster monitoring
- **[OpenSearch GUI](/blog/opensearch-gui)** - Open-source OpenSearch desktop tool, perfect for AWS OpenSearch Service

<div align="center" style="padding: 64px;">
<p style="font-size: 20px;margin: 20px;font-weight: bolder;">Client Screen Short</p>
<img src="/client-ui.png" alt="Client UI" style="width: 90%"/>
</div>
