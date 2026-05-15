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

DocKit is an open source desktop client for OpenSearch. It works on Mac, Windows, and Linux. Most engineers use it as a faster alternative to OpenSearch Dashboards for daily query work. It starts in seconds, uses very little memory, and saves your queries as local files so you can keep them in Git.

<div style="display:flex;gap:12px;margin:1.5rem 0">
  <a href="/download" style="padding:10px 20px;background:var(--vp-c-brand-1);color:#fff;border-radius:6px;font-weight:600;text-decoration:none">Download — Free</a>
  <a href="https://github.com/geek-fun/dockit" style="padding:10px 20px;border:1px solid var(--vp-c-border);border-radius:6px;font-weight:600;text-decoration:none" target="_blank" rel="noopener">View on GitHub</a>
</div>

## Why a desktop client?

OpenSearch Dashboards is fine for visualization, but it is heavy for writing queries. It usually takes 10 to 30 seconds to load and eats up over 500 MB of RAM. Plus, you have to run a Dashboards instance just to use the Dev Tools. DocKit starts in under 2 seconds, stays around 150 MB of RAM, and works entirely offline.

If you spend most of your time in the query editor rather than looking at charts, a dedicated client is a better fit.

## Video demo

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 2rem 0;">
  <iframe
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/Y1GpcTnVQTk"
    title="DocKit OpenSearch installation and features"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

## Features

### Query editor

The editor is built on Monaco, the same engine in VS Code.

- Write queries using JSON5 to skip strict quoting rules and add comments
- Get index and field autocomplete from your live cluster mapping
- Syntax highlighting and validation for OpenSearch Query DSL
- Format queries or copy them as curl commands
- Execute with Cmd/Ctrl + Enter

### AI query assistant

You can write what you need in plain English, like "find all orders from last week over $100," and the app generates the DSL for you. It uses your actual index mapping as context, so the field names and types are correct. It works with OpenAI and DeepSeek. Your data stays on your machine.

### Cluster management

Browse your indices to check health, document counts, and storage stats. You can update mappings, settings, index templates, and aliases directly. It also includes tools to monitor node health, shard allocation, and running tasks.

### Import and export

Export indices to JSON, CSV, or JSONL for the bulk API. You can also import data files into any index. The app uses the scroll API, so it handles indices with millions of documents without crashing.

### Query history

DocKit automatically saves every query you run to a local, searchable history. You don't have to save things manually. You can just search for an old query and load it back into the editor.

### Multi-cluster support

Save as many connection profiles as you need. You can jump between local, staging, and production clusters without losing your work. It supports Basic Auth, API Keys, and no-auth for local development.

## Comparison

| | DocKit | OpenSearch Dashboards | Elasticvue |
|---|---|---|---|
| **Platform** | Desktop (native) | Web (browser) | Web / extension |
| **Startup** | < 2 s | 10–30 s | < 5 s |
| **RAM** | ~150 MB | 500 MB+ | ~200 MB |
| **Editor** | Monaco + JSON5 | Basic | Basic |
| **AI assistant** | ✅ | ❌ | ❌ |
| **Offline mode** | ✅ | ❌ | ❌ |
| **Persistence** | Local files | Limited | ❌ |
| **DynamoDB** | ✅ | ❌ | ❌ |
| **Elasticsearch** | ✅ | ❌ | ✅ |
| **License** | Apache 2.0 | Apache 2.0 | MIT |
| **Price** | Free | Free | Free |

## Usage scenarios

### AWS OpenSearch workflow

Teams often start by developing queries against a local OpenSearch container then move to an AWS OpenSearch Service staging cluster. Since connection details are in saved profiles rather than browser tabs, you can switch environments without re-entering settings or rewriting queries.

### Log analysis

When you are debugging an incident, you need your queries ready to go. A typical log analysis query might look like this:

```javascript
GET /app-logs-*/_search
{
  query: {
    bool: {
      must: [
        {match: {level: 'ERROR'}},
        {range: {timestamp: {gte: 'now-1h'}}}
      ]
    }
  }
}
```

Save this as a reusable query file. If your team treats operational queries like code, you can keep them under version control.

### Environment management

If you manage separate clusters for dev, staging, and prod, switching between them needs to be fast. Saved profiles let you run the same query across different clusters in sequence without losing your editor state. This makes rollout validation much easier.

## Compatibility

DocKit uses the standard OpenSearch REST API. It supports OpenSearch versions 1.x through 3.x, including AWS OpenSearch Service. It works with both self-hosted and cloud deployments.

## Getting started

1. Download DocKit for macOS, Windows, or Linux.
2. Click New Connection and select OpenSearch.
3. Put in your host, port, and credentials.
4. Hit Connect to see your indices.
5. Open Dev Tools to start querying.

Check the connection guide for more details.

## FAQ

**Can I replace OpenSearch Dashboards with this?**
For query development and index management, yes. You still need Dashboards for visualizations and security settings.

**Does it work with AWS OpenSearch?**
Yes. You can connect over HTTPS using IAM credentials or API keys.

**Does it work with Elasticsearch?**
Yes. DocKit supports Elasticsearch, OpenSearch, and DynamoDB in the same app.

**Where are my credentials?**
They are encrypted and stored on your machine. They are never sent anywhere else.

---

[DocKit feature overview](/products/dockit/) · [Migrating from OpenSearch Dashboards](/blog/opensearch-gui) · [Elasticsearch AI assistant](/blog/elasticsearch-ai-assistant)
