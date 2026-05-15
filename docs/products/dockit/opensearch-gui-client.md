---
title: OpenSearch GUI Client — DocKit Desktop App for Mac, Windows, Linux
description: DocKit is an open-source OpenSearch GUI client and OpenSearch Dashboards alternative. Monaco editor, AI query assistant, cluster management, and local-first persistence. Free, Apache 2.0.
sidebar: false
head:
  - - meta
    - name: keywords
      content: opensearch gui client, opensearch desktop client, opensearch dashboards alternative, aws opensearch client, opensearch query builder, opensearch cluster management, open source opensearch client, opensearch mac client, opensearch windows client
  - - link
    - rel: canonical
      href: https://www.geekfun.club/products/dockit/opensearch-gui-client
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/products/dockit/opensearch-gui-client
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/products/dockit/opensearch-gui-client
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/products/dockit/opensearch-gui-client
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "DocKit",
        "alternateName": "OpenSearch GUI Client",
        "description": "Open-source desktop OpenSearch GUI client with AI query generation, Monaco editor, cluster management, and local-first persistence. OpenSearch Dashboards alternative for Mac, Windows, and Linux.",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": { "@type": "Offer", "priceCurrency": "USD" },
        "downloadUrl": "https://www.geekfun.club/download",
        "author": { "@type": "Organization", "name": "GEEKFUN", "url": "https://www.geekfun.club" },
        "license": "https://github.com/geek-fun/dockit/blob/main/LICENSE",
        "sameAs": ["https://github.com/geek-fun/dockit"]
      }
---

# OpenSearch GUI Client

**DocKit** is an open-source desktop **OpenSearch GUI client** for Mac, Windows, and Linux. It replaces OpenSearch Dashboards for daily query work — faster startup, lower memory, and your queries stored as local files you can commit to Git.

<div style="display:flex;gap:12px;margin:1.5rem 0">
  <a href="/download" style="padding:10px 20px;background:var(--vp-c-brand-1);color:#fff;border-radius:6px;font-weight:600;text-decoration:none">Download — Free</a>
  <a href="https://github.com/geek-fun/dockit" style="padding:10px 20px;border:1px solid var(--vp-c-border);border-radius:6px;font-weight:600;text-decoration:none" target="_blank" rel="noopener">View on GitHub</a>
</div>

## Why use an OpenSearch desktop client?

OpenSearch Dashboards is the standard web interface for OpenSearch clusters. For query development it is expensive to run — 10–30 s startup, 500 MB+ RAM, and it requires a running Dashboards instance alongside your cluster. A dedicated OpenSearch GUI client starts in under 2 seconds, uses ~150 MB RAM, and runs entirely offline.

DocKit is built for the engineer who spends most of their OpenSearch time in the query editor, not building dashboards.

## OpenSearch features in DocKit

### Monaco-powered query editor

The Dev Tools editor is built on Monaco (VS Code engine):

- **JSON5 syntax** — write queries without strict JSON double-quote rules; add `//` inline comments
- **Field and index autocomplete** pulled from your live cluster mapping
- **Syntax highlighting and validation** for OpenSearch Query DSL
- **Auto-format** and one-click copy as `curl` command
- `Cmd/Ctrl + Enter` to execute

### AI query assistant

Type your requirement in plain English — "find all orders from last week over $100" — and DocKit generates the OpenSearch DSL. The AI has your actual index mapping as context, so it produces queries that match your real field names and types. Supports OpenAI and DeepSeek. Your data stays local.

### Cluster management

Browse all indices with live health, doc counts, and storage stats. Manage mappings, settings, index templates, and aliases. Monitor node health, shard allocation, and long-running tasks.

### Import & Export

Export entire indices to JSON, CSV, or JSONL (bulk API format). Import data files into any index with automatic type detection. Handles multi-million-record indices reliably using the scroll API.

### Query history

Every executed query is saved automatically to a local, searchable history. No manual saving required — copy, re-execute, or load back into the editor with one click.

### Multi-cluster support

Save unlimited connection profiles and switch between dev, staging, and production clusters instantly. Supports Basic Auth, API Keys, and no-auth for local development.

## Comparison: DocKit vs other OpenSearch GUI clients

| | DocKit | OpenSearch Dashboards | Elasticvue |
|---|---|---|---|
| **Platform** | Desktop (native) | Web (browser) | Web / extension |
| **Startup** | < 2 s | 10–30 s | < 5 s |
| **RAM** | ~150 MB | 500 MB+ | ~200 MB |
| **Dev Tools editor** | ✅ Monaco + JSON5 | ✅ Basic | ✅ Basic |
| **AI assistant** | ✅ | ❌ | ❌ |
| **Offline mode** | ✅ | ❌ | ❌ |
| **Query persistence** | ✅ Local files | Limited | ❌ |
| **DynamoDB support** | ✅ | ❌ | ❌ |
| **Elasticsearch support** | ✅ | ❌ | ✅ |
| **Open source** | ✅ Apache 2.0 | ✅ Apache 2.0 | ✅ MIT |
| **Price** | Community: free | Free | Free |

## OpenSearch version compatibility

DocKit uses the standard OpenSearch REST API and supports **OpenSearch 1.x through 3.x**, including AWS OpenSearch Service. Both self-hosted clusters and managed cloud deployments work. [Report compatibility issues on GitHub](https://github.com/geek-fun/dockit/issues).

## Getting started

1. **[Download DocKit](/download)** for macOS (Apple Silicon + Intel), Windows, or Linux
2. Open DocKit → click **New Connection** → choose OpenSearch
3. Enter your host, port, and credentials
4. Click **Connect** — indices load in the sidebar
5. Open **Dev Tools** and start querying

See the [connection guide](/docs/dockit/connect-to-server) for full setup details.

## Frequently asked questions

**Is DocKit an OpenSearch Dashboards replacement?**
For query development and index management, yes. For visualizations, observability, and security administration, Dashboards is still needed. Many teams use both.

**Does it work with AWS OpenSearch Service?**
Yes. Connect via HTTPS with your IAM credentials or API keys.

**Does it work with Elasticsearch too?**
Yes — DocKit supports Elasticsearch, OpenSearch, and DynamoDB in the same app. See the [Elasticsearch GUI client page](/products/dockit/elasticsearch-gui-client).

**Where are credentials stored?**
Encrypted locally on your machine. Never transmitted anywhere.

---

→ **[DocKit full feature overview](/products/dockit/)** · [OpenSearch GUI deep-dive](/blog/opensearch-gui) · [Elasticsearch AI assistant](/blog/elasticsearch-ai-assistant)
