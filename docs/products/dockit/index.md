---
layout: product
title: DocKit – AI-Native NoSQL GUI Client
description: DocKit is an AI-native desktop GUI client for DynamoDB, OpenSearch, and Elasticsearch. Generate queries from natural language, manage clusters, and persist queries — all for free.
ogImage: https://www.geekfun.club/og/dockit-en.png
head:
  - - meta
    - name: keywords
      content: AI database client, AI-native NoSQL GUI, DynamoDB AI assistant, Elasticsearch AI, OpenSearch AI, natural language queries, DocKit, NoSQL GUI client, DynamoDB GUI, Elasticsearch GUI, OpenSearch GUI, database client, Dynobase alternative, Kibana alternative, open source database tool, PartiQL editor, desktop database client, Mac database client, Windows database client, Linux database client
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
        "description": "AI-native desktop GUI client for DynamoDB, OpenSearch, and Elasticsearch. Generate database queries from natural language with built-in AI assistant. Fast, secure, and free.",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "featureList": [
          "AI-powered query generation",
          "Natural language to SQL/PartiQL",
          "OpenAI and DeepSeek integration",
          "DynamoDB GUI client",
          "Elasticsearch GUI client",
          "OpenSearch GUI client",
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
        "softwareVersion": "0.9.0",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "license": "https://github.com/geek-fun/dockit/blob/main/LICENSE"
      }
hero:
  name: DocKit
  headline: "Write queries in natural language."
  tagline: "Manage DynamoDB, Elasticsearch, and OpenSearch with an AI assistant that understands your data schema. Free, fast, and local-first."
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
