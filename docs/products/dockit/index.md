---
layout: product
title: DocKit — Agentic NoSQL Desktop GUI for MongoDB, Elasticsearch, OpenSearch & DynamoDB
description: DocKit is an open-source agentic NoSQL desktop GUI for MongoDB, Elasticsearch, OpenSearch, DynamoDB, and EasySearch. Its AI agent writes queries, inspects schemas, and manages data through natural language — privacy-first, local, free.
ogImage: https://www.geekfun.club/og/dockit-en.png
head:
  - - meta
    - name: keywords
      content: mongodb gui client, mongodb desktop client, elasticsearch gui client, opensearch gui client, dynamodb gui client, nosql gui client, nosql desktop gui, AI database client, AI-native NoSQL GUI, DynamoDB AI assistant, Elasticsearch AI, OpenSearch AI, natural language queries, DocKit, NoSQL GUI client, DynamoDB GUI, Elasticsearch GUI, OpenSearch GUI, MongoDB GUI, database client, Dynobase alternative, Kibana alternative, open source database tool, PartiQL editor, desktop database client, Mac database client, Windows database client, Linux database client, Agentic Data Studio, EasySearch
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
        "alternateName": ["MongoDB GUI client", "Elasticsearch GUI client", "OpenSearch GUI client", "DynamoDB GUI client", "EasySearch GUI client", "NoSQL GUI client", "NoSQL desktop GUI", "Agentic Data Studio"],
        "description": "Open-source desktop GUI client for MongoDB, Elasticsearch, OpenSearch, DynamoDB, and EasySearch. Generate database queries from natural language with a built-in AI assistant. Agentic Data Studio for natural language database interaction. Fast, local-first, Apache 2.0.",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD"
        },
        "featureList": [
          "AI-powered query generation",
          "Agentic Data Studio",
          "Natural language to SQL/PartiQL/MQL",
          "OpenAI, Anthropic and DeepSeek integration",
          "MongoDB GUI client",
          "Elasticsearch GUI client",
          "OpenSearch GUI client",
          "DynamoDB GUI client",
          "EasySearch GUI client",
          "PartiQL editor",
          "MongoDB query editor",
          "Visual query builder",
          "Query history persistence",
          "Multi-database support",
          "Import export data",
          "Cluster management",
          "Monaco editor"
        ],
        "screenshot": "https://www.geekfun.club/dockit-client-ui.png",
        "downloadUrl": "https://www.geekfun.club/download",
        "softwareVersion": "1.0.1",
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
  headline: "Agentic NoSQL Desktop GUI"
  tagline: "An open-source AI agent that manages your databases. Connect MongoDB, Elasticsearch, OpenSearch, DynamoDB, and EasySearch — then describe what you need in natural language. The agent writes queries, inspects schemas, updates documents, and returns results. Privacy-first, local, Apache 2.0."
  logo: /dockit.png
  screenshot: /dockit-client-ui.png
  actions:
    - text: Download
      link: /download
      theme: brand
    - text: Agentic Data Studio
      link: /docs/dockit/ai-assistant
      theme: alt

databases:
  title: "Native support for modern NoSQL"
  items:
    - { name: MongoDB, logo: /db-mongodb.svg }
    - { name: DynamoDB, logo: /db-dynamodb.svg }
    - { name: Elasticsearch, logo: /db-elasticsearch.svg }
    - { name: OpenSearch, logo: /db-opensearch.png }
    - { name: EasySearch, logo: /db-easysearch.svg }

showcase:
  - title: "Agentic Data Studio"
    body: "Talk to your databases in natural language. DocKit's AI agent writes queries, inspects schemas, creates indexes, updates documents, and returns results — with per-source permissions and a safety gate for destructive actions. Ask 'find orders over $500 from last week' and get optimized queries instantly. Supports OpenAI, Anthropic, and DeepSeek."
    image: /dockit-ai-assistant.png
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
  - { title: "Agentic Data Studio", body: "Talk to your databases in natural language. The AI agent writes queries, inspects schemas, creates indexes, and updates documents — with per-source permissions and a safety gate for destructive actions.", icon: "sparkles" }
  - { title: "AI Assistant", body: "Describe what you need in natural language — 'find users who signed up last week' or 'aggregate sales by region' — and get accurate queries instantly. Supports OpenAI, Anthropic, and DeepSeek.", icon: "code" }
  - { title: "Desktop-Grade Editor", body: "Monaco Editor brings VS Code power to your queries—syntax highlighting, autocomplete, formatting, and keyboard shortcuts you already know.", icon: "edit" }
  - { title: "Local Persistence", body: "Connections and queries saved to your filesystem. Query history tracked automatically. Never lose your work.", icon: "history" }
  - { title: "Multi-Database Support", body: "Manage MongoDB, DynamoDB, Elasticsearch, OpenSearch, and EasySearch from one unified interface. Switch between databases instantly.", icon: "database" }
  - { title: "Import & Export", body: "Move large datasets in and out with JSON, CSV, and JSONL support. Batch operations handle millions of records reliably.", icon: "import" }
  - { title: "Cluster Management", body: "Monitor node health, manage shards, track indices, and control aliases—all with built-in visual cluster tools.", icon: "cluster" }
  - { title: "MongoDB Document Browser", body: "Browse collections with pagination, inline CRUD, and a full-featured query editor with autocomplete. Bulk write and import/export included.", icon: "database" }
  - { title: "Query History", body: "Every query recorded automatically. 500 entries per connection with stars/bookmarks. Copy, reload, or re-execute past queries.", icon: "history" }

cta:
  title: "Database management, AI-native"
  body: "Stop wrestling with complex query syntax. Let DocKit's AI assistant and Agentic Data Studio handle the boilerplate while you focus on the data."
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

## MongoDB GUI Client

DocKit is an open-source **MongoDB GUI client** with a full-featured query editor featuring autocomplete and result formatting. Browse documents with pagination and inline CRUD operations. The Manage view provides collection-level infrastructure browsing — indexes, storage stats, and metadata at a glance.

Connect with authentication, TLS, and replica set configurations. Bulk write support for efficient batch operations. Query history with star/bookmark favorites, persisted per connection. Import and export collections in JSON, CSV, and JSONL.

→ [MongoDB GUI client documentation](/docs/dockit/connect-to-server)

## EasySearch Support

DocKit natively supports **EasySearch** as a dedicated connection type alongside Elasticsearch and OpenSearch. EasySearch is split from OpenSearch with independent configuration and iconography, making it straightforward to manage all your search engines from one interface.

## Agentic Data Studio

DocKit's **Agentic Data Studio** lets you interact with your databases through natural language. Describe what you need — the agent writes queries, inspects schemas, updates documents, deletes records, creates indexes, and returns results. Every operation runs through validated tools with built-in safety: fine-grained per-source permissions, a security gate requiring explicit confirmation before destructive actions, and a credential-safe architecture that never exposes connection secrets to the LLM. Supports OpenAI, Anthropic, and DeepSeek.

→ [AI Assistant Guide](/docs/dockit/ai-assistant)

## Why DocKit for multi-database teams

Most teams don't use just one NoSQL database. A team running Elasticsearch for search plus DynamoDB for key-value workloads typically needs two separate tools — Kibana/Elasticvue for one, Dynobase/NoSQL Workbench for the other. DocKit covers all three in a single desktop app.

| | DocKit | Kibana | Elasticvue | Dynobase | NoSQL Workbench |
|---|---|---|---|---|---|---|
| **MongoDB** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Elasticsearch** | ✅ | ✅ | ✅ | ❌ | ❌ |
| **OpenSearch** | ✅ | ❌ | ✅ | ❌ | ❌ |
| **EasySearch** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **DynamoDB** | ✅ | ❌ | ❌ | ✅ | ✅ |
| **AI assistant** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Agentic Data Studio** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Desktop native** | ✅ | ❌ | Partial | ✅ | ✅ |
| **Open source** | ✅ Apache 2.0 | Mixed | ✅ MIT | ❌ | ❌ |
| **Price** | Community: free | Free | Free | $12–30/mo | Free |

## Frequently asked questions

**Does DocKit work offline?**
Yes. All connections, queries, and history are stored locally. The AI assistant and Agentic Data Studio require an internet connection only when you send a prompt.

**Does DocKit support MongoDB?**
Yes. DocKit fully supports MongoDB with connection management, a query editor with autocomplete, document browser with inline CRUD, Manage view for indexes and collection metadata, bulk write, query history with star/bookmark support, and import/export. EasySearch is also supported as a dedicated connection type.

**Is there a web version?**
No. DocKit is a desktop application for macOS, Windows, and Linux. This is intentional — local-first storage, no cloud dependency, no login required.

**What about Elasticsearch vs OpenSearch compatibility?**
DocKit auto-detects which engine you're connected to and adjusts API calls accordingly. The same connection form works for both.

**Is DocKit open source?**
Yes — Apache 2.0 license. The full source is at [github.com/geek-fun/dockit](https://github.com/geek-fun/dockit).

**Will there be a paid tier?**
A paid Ultimate tier with additional features is planned. The Community edition will remain open-source.

