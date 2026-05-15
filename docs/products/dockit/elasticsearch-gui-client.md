---
title: Elasticsearch GUI Client — DocKit Desktop App for Mac, Windows, Linux
description: DocKit is an open-source Elasticsearch GUI client with a Monaco-powered Dev Tools editor, AI query assistant, cluster management, and local-first query persistence. Free alternative to Kibana.
sidebar: false
head:
  - - meta
    - name: keywords
      content: elasticsearch gui client, elasticsearch desktop client, kibana alternative, elasticsearch dev tools, elasticsearch query builder, elasticsearch cluster management, open source elasticsearch client, elasticsearch mac client, elasticsearch windows client
  - - link
    - rel: canonical
      href: https://www.geekfun.club/products/dockit/elasticsearch-gui-client
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/products/dockit/elasticsearch-gui-client
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/products/dockit/elasticsearch-gui-client
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/products/dockit/elasticsearch-gui-client
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "DocKit",
        "alternateName": "Elasticsearch GUI Client",
        "description": "Open-source desktop Elasticsearch GUI client with AI query generation, Monaco editor, cluster management, and local-first persistence. Free alternative to Kibana for Mac, Windows, and Linux.",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": { "@type": "Offer", "priceCurrency": "USD" },
        "downloadUrl": "https://www.geekfun.club/download",
        "author": { "@type": "Organization", "name": "GEEKFUN", "url": "https://www.geekfun.club" },
        "license": "https://github.com/geek-fun/dockit/blob/main/LICENSE",
        "sameAs": ["https://github.com/geek-fun/dockit"]
      }
---

# Elasticsearch GUI Client

**DocKit** is an open-source desktop **Elasticsearch GUI client** for Mac, Windows, and Linux. It gives you a VS Code-grade query editor, AI-assisted query generation, and visual cluster management — without running Kibana.

<div style="display:flex;gap:12px;margin:1.5rem 0">
  <a href="/download" style="padding:10px 20px;background:var(--vp-c-brand-1);color:#fff;border-radius:6px;font-weight:600;text-decoration:none">Download — Free</a>
  <a href="https://github.com/geek-fun/dockit" style="padding:10px 20px;border:1px solid var(--vp-c-border);border-radius:6px;font-weight:600;text-decoration:none" target="_blank" rel="noopener">View on GitHub</a>
</div>

## Why use an Elasticsearch desktop client?

Kibana is powerful for dashboards and observability. For day-to-day query work it is heavy — 10–30 s startup, 500 MB+ RAM, requires a running Kibana instance. A dedicated Elasticsearch GUI client starts in under 2 seconds, uses ~150 MB RAM, stores queries as local files, and works offline.

DocKit sits in this space: a lightweight, open-source Elasticsearch GUI that replaces the Dev Tools tab for everyone who doesn't need Kibana's visualization stack.

## Elasticsearch features in DocKit

### Monaco-powered Dev Tools editor

The query editor is built on Monaco — the same engine that powers VS Code. You get:

- **JSON5 syntax** — write queries without strict double-quote discipline; add `//` and `/* */` comments inline
- **Syntax highlighting and validation** for Elasticsearch Query DSL
- **Field and index autocomplete** drawn from your live cluster mapping
- **Auto-format** on save; one-click copy as `curl` command
- `Cmd/Ctrl + Enter` to execute

### AI query assistant

Describe what you need in plain English and DocKit generates the Elasticsearch DSL for you — with your actual index mapping injected automatically as context, so the query matches your real fields and types. Supports OpenAI and DeepSeek with your own API key. Your data never leaves your machine.

### Cluster management

Browse all indices with live stats (doc count, shard health, storage size). Manage mappings, settings, aliases, and index templates. Monitor node health, shard allocation, and long-running tasks — all in the same window.

### Import & Export

Move data in and out using JSON, CSV, or JSONL (native Elasticsearch bulk format). Uses the scroll API internally so even multi-million-document indices export reliably.

### Query history

Every query you execute is saved automatically. Search history, copy, re-execute, or load back into the editor with one click. History is connection-scoped and stored locally — never sent anywhere.

### Multi-cluster support

Save unlimited connection profiles (dev / staging / prod), switch instantly, and run identical queries across environments. Supports Basic Auth, API Keys, and client certificates.

## Comparison: DocKit vs other Elasticsearch GUI clients

| | DocKit | Kibana | Elasticvue | Dejavu |
|---|---|---|---|---|
| **Platform** | Desktop (native) | Web (browser) | Web / extension | Web |
| **Startup** | < 2 s | 10–30 s | < 5 s | < 5 s |
| **RAM** | ~150 MB | 500 MB+ | ~200 MB | ~150 MB |
| **Dev Tools editor** | ✅ Monaco + JSON5 | ✅ Basic | ✅ Basic | ❌ |
| **AI assistant** | ✅ | ❌ | ❌ | ❌ |
| **Offline mode** | ✅ | ❌ | ❌ | ❌ |
| **Query persistence** | ✅ Local files | ✅ Saved queries | ❌ | ❌ |
| **DynamoDB support** | ✅ | ❌ | ❌ | ❌ |
| **OpenSearch support** | ✅ | ❌ | ❌ | ❌ |
| **Open source** | ✅ Apache 2.0 | Mixed | ✅ MIT | ✅ |
| **Price** | Community: free | Free (Basic) | Free | Free |

## Elasticsearch version compatibility

DocKit uses the standard Elasticsearch REST API and supports **Elasticsearch 1.x through 9.x**, including both the Apache 2.0 and Elastic License distributions. If you hit a compatibility issue, [file it on GitHub](https://github.com/geek-fun/dockit/issues) — broad version support is a first-class goal.

## Getting started

1. **[Download DocKit](/download)** for macOS (Apple Silicon + Intel), Windows, or Linux
2. Open DocKit → click **New Connection** → choose Elasticsearch
3. Enter your host, port, and credentials (Basic Auth, API Key, or no auth for local)
4. Click **Connect** — indices appear in the sidebar immediately
5. Open **Dev Tools** and start writing queries

For detailed setup, see the [connection guide](/docs/dockit/connect-to-server).

## Frequently asked questions

**Is DocKit a full Kibana replacement?**
For query development and index management, yes. For visualizations, dashboards, APM, and alerting, no. Many teams use both — DocKit for daily querying, Kibana for stakeholder dashboards.

**Does it work with Elasticsearch 9.x?**
Yes. DocKit is tested against Elasticsearch 1.x–9.x.

**Where are my credentials stored?**
Encrypted on your local filesystem. They never leave your machine.

**Can I use it with OpenSearch?**
Yes — DocKit supports OpenSearch and DynamoDB in the same app. See the [OpenSearch GUI client page](/products/dockit/opensearch-gui-client).

---

→ **[DocKit full feature overview](/products/dockit/)** · [Elasticsearch AI assistant guide](/blog/elasticsearch-ai-assistant) · [ES GUI deep-dive](/blog/elasticsearch-gui)
