---
layout: product
title: DocKit — Elasticsearch, OpenSearch & DynamoDB GUI Client
description: DocKit is an open-source desktop GUI client for Elasticsearch, OpenSearch, and DynamoDB. Generate queries from natural language, manage clusters, and persist queries — free, local-first, no registration.
ogImage: https://www.geekfun.club/og/dockit-en.png
head:
  - - meta
    - name: keywords
      content: elasticsearch gui client, opensearch gui client, dynamodb gui client, AI database client, AI-native NoSQL GUI, DynamoDB AI assistant, Elasticsearch AI, OpenSearch AI, natural language queries, DocKit, NoSQL GUI client, DynamoDB GUI, Elasticsearch GUI, OpenSearch GUI, database client, Dynobase alternative, Kibana alternative, open source database tool, PartiQL editor, desktop database client, Mac database client, Windows database client, Linux database client
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
        "alternateName": ["Elasticsearch GUI client", "OpenSearch GUI client", "DynamoDB GUI client", "NoSQL GUI client"],
        "description": "Open-source desktop GUI client for Elasticsearch, OpenSearch, and DynamoDB. Generate database queries from natural language with a built-in AI assistant. Fast, local-first, Apache 2.0.",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD"
        },
        "featureList": [
          "AI-powered query generation",
          "Natural language to SQL/PartiQL",
          "OpenAI and DeepSeek integration",
          "Elasticsearch GUI client",
          "OpenSearch GUI client",
          "DynamoDB GUI client",
          "PartiQL editor",
          "Visual query builder",
          "Query history persistence",
          "Multi-database support",
          "Import export data",
          "Cluster management",
          "Monaco editor"
        ],
        "screenshot": "https://www.geekfun.club/client-ui.png",
        "downloadUrl": "https://www.geekfun.club/download",
        "softwareVersion": "1.0.0",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "license": "https://github.com/geek-fun/dockit/blob/main/LICENSE",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "1096",
          "bestRating": "5",
          "worstRating": "1"
        },
        "sameAs": [
          "https://github.com/geek-fun/dockit",
          "https://www.geekfun.club/products/dockit/"
        ]
      }

hero:
  name: DocKit
  headline: "Elasticsearch, OpenSearch & DynamoDB GUI Client"
  tagline: "Open-source desktop client with an AI assistant that understands your schema. Write queries in natural language, manage clusters, and never lose your work — local-first, Apache 2.0."
  logo: /dockit.png
  screenshot: /dockit-client-ui.png
  actions:
    - text: Download
      link: /download
      theme: brand
    - text: AI Assistant Guide
      link: /docs/dockit/ai-assistant
      theme: alt

databases:
  title: "Native support for modern NoSQL"
  items:
    - { name: DynamoDB, logo: /db-dynamodb.svg }
    - { name: Elasticsearch, logo: /db-elasticsearch.svg }
    - { name: OpenSearch, logo: /db-opensearch.png }

showcase:
  - title: "Query with AI Assistance"
    body: "Ask questions in plain English, get optimized queries with schema awareness. DocKit puts AI at the center of your workflow with built-in OpenAI and DeepSeek integration."
    image: /dockit-ai-assistant-question.png
    align: left
  - title: "Never lose a query again"
    body: "Connections and queries are saved to your filesystem automatically. Query history is tracked transparently, so you can easily revert to past experiments."
    image: /dockit-query-history.png
    align: right
  - title: "Full DynamoDB Control"
    body: "A desktop-grade interface for DynamoDB. Inspect tables, manage indexes, and craft PartiQL queries with syntax highlighting and formatting."
    image: /dockit-dynamodb-query-ui.png
    align: left

features:
  - { title: "AI Assistant", body: "Describe what you need in natural language — 'find users who signed up last week' or 'aggregate sales by region' — and get accurate queries instantly.", icon: "sparkles" }
  - { title: "Desktop-Grade Editor", body: "Monaco Editor brings VS Code power to your queries—syntax highlighting, autocomplete, formatting, and keyboard shortcuts you already know.", icon: "code" }
  - { title: "Local Persistence", body: "Connections and queries saved to your filesystem. Query history tracked automatically. Never lose your work.", icon: "history" }
  - { title: "Multi-Engine Support", body: "Manage DynamoDB, Elasticsearch, and OpenSearch from one unified interface. Switch between databases instantly.", icon: "database" }
  - { title: "Import & Export", body: "Move large datasets in and out with JSON, CSV, and JSONL support. Batch operations handle millions of records reliably.", icon: "import" }
  - { title: "Cluster Management", body: "Monitor node health, manage shards, track indices, and control aliases—all with built-in visual cluster tools.", icon: "cluster" }

cta:
  title: "Database management, AI-native"
  body: "Stop wrestling with complex query syntax. Let DocKit's AI assistant handle the boilerplate while you focus on the data."
  actions:
    - { text: "Download", link: "/download", theme: "brand" }
    - { text: "View on GitHub", link: "https://github.com/geek-fun/dockit", theme: "alt", external: true }
---

## Elasticsearch GUI Client

DocKit is a full-featured **Elasticsearch GUI client** built for engineers who spend real time in the query editor. It replaces Kibana's Dev Tools tab with a Monaco-powered editor that supports JSON5 syntax, inline comments, field autocomplete from your live mapping, and AI-assisted query generation.

Connect to any Elasticsearch cluster — local, self-hosted, or cloud — with Basic Auth or API Key. Browse indices, manage mappings and aliases, monitor cluster and shard health, and import/export data in JSON, CSV, or JSONL (bulk format). Queries persist as local files, so nothing is lost when you close the app.

→ [Elasticsearch GUI client full details](/products/dockit/elasticsearch-gui-client)

## OpenSearch GUI Client

DocKit is an open-source **OpenSearch GUI client** and desktop alternative to OpenSearch Dashboards for daily query work. It launches in under 2 seconds, uses ~150 MB RAM, and stores everything locally — no Dashboards instance required.

The same Monaco editor, AI assistant, cluster management, and import/export features work identically for OpenSearch 1.x, 2.x, and 3.x, including AWS OpenSearch Service clusters.

→ [OpenSearch GUI client full details](/products/dockit/opensearch-gui-client)

## DynamoDB GUI Client

DocKit is an open-source **DynamoDB GUI client** that replaces the AWS Console for day-to-day table work. It includes a PartiQL editor with schema-aware autocomplete, a visual query builder for non-PartiQL workflows, AI-powered query generation with your actual attribute names injected as context, and import/export for JSON and CSV.

It supports DynamoDB Local for local development and works with any AWS region and authentication method.

→ [DynamoDB GUI client full details](/products/dockit/dynamodb-gui-client)

## Why DocKit for multi-database teams

Most teams don't use just one NoSQL database. A team running Elasticsearch for search plus DynamoDB for key-value workloads typically needs two separate tools — Kibana/Elasticvue for one, Dynobase/NoSQL Workbench for the other. DocKit covers all three in a single desktop app.

| | DocKit | Kibana | Elasticvue | Dynobase | NoSQL Workbench |
|---|---|---|---|---|---|
| **Elasticsearch** | ✅ | ✅ | ✅ | ❌ | ❌ |
| **OpenSearch** | ✅ | ❌ | ✅ | ❌ | ❌ |
| **DynamoDB** | ✅ | ❌ | ❌ | ✅ | ✅ |
| **AI assistant** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Desktop native** | ✅ | ❌ | Partial | ✅ | ✅ |
| **Open source** | ✅ Apache 2.0 | Mixed | ✅ MIT | ❌ | ❌ |
| **Price** | Community: free | Free | Free | $12–30/mo | Free |

## Frequently asked questions

**Does DocKit work offline?**
Yes. All connections, queries, and history are stored locally. The AI assistant requires an internet connection only when you send a prompt.

**Is there a web version?**
No. DocKit is a desktop application for macOS, Windows, and Linux. This is intentional — local-first storage, no cloud dependency, no login required.

**What about Elasticsearch vs OpenSearch compatibility?**
DocKit auto-detects which engine you're connected to and adjusts API calls accordingly. The same connection form works for both.

**Is DocKit open source?**
Yes — Apache 2.0 license. The full source is at [github.com/geek-fun/dockit](https://github.com/geek-fun/dockit).

**Will there be a paid tier?**
A paid Ultimate tier with additional features is planned. The Community edition will remain open-source.
