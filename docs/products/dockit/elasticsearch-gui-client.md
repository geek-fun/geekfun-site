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

DocKit is an open source Elasticsearch desktop client for Mac, Windows, and Linux. It provides a Monaco based query editor, AI query generation, and cluster management tools without requiring a Kibana installation.

<div style="display:flex;gap:12px;margin:1.5rem 0">
  <a href="/download" style="padding:10px 20px;background:var(--vp-c-brand-1);color:#fff;border-radius:6px;font-weight:600;text-decoration:none">Download — Free</a>
  <a href="https://github.com/geek-fun/dockit" style="padding:10px 20px;border:1px solid var(--vp-c-border);border-radius:6px;font-weight:600;text-decoration:none" target="_blank" rel="noopener">View on GitHub</a>
</div>

## Desktop client vs Kibana

Kibana works well for dashboards and observability but starts slowly. It often takes 10 to 30 seconds to load, requires over 500 MB of RAM, and needs a server side instance. DocKit starts in under 2 seconds and uses about 150 MB of RAM. It works offline and stores queries as local files.

This makes it a faster option for developers who only need the Dev Tools functionality.

## Product demo

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 2rem 0;">
  <iframe
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/Y1GpcTnVQTk"
    title="DocKit Elasticsearch installation and features"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

## Key features

### Monaco based editor

The query editor uses the same engine as VS Code.

![DocKit Elasticsearch Monaco editor](/dockit-dynamodb-partiql-editor.png)

- JSON5 support lets you use comments and trailing commas.
- Syntax highlighting for Elasticsearch Query DSL.
- Autocomplete for fields and indices using live cluster mappings.
- Automatic formatting and one click copy as curl commands.
- Use Cmd/Ctrl + Enter to run queries.

### AI query generation

Describe a query in plain English to generate Elasticsearch DSL. DocKit uses your index mapping as context so generated queries match your actual schema. You can use OpenAI or DeepSeek with your own API key. Data stays on your machine.

![DocKit AI query generation](/dockit-ai-assistant.png)

### Cluster management

View index statistics like document counts, shard health, and storage size. You can manage mappings, settings, aliases, and templates from the UI. The app also monitors node health, shard allocation, and active tasks.

![DocKit Elasticsearch cluster management](/manage-cluster.png)

### Import and export

Move data using JSON, CSV, or JSONL formats. The export process uses the scroll API to handle large indices reliably.

![DocKit import and export](/dockit-dynamodb-import-export.png)

### Query history

DocKit saves your query history automatically. You can search, copy, or re-run previous queries. This history is connection scoped and stored locally.

![DocKit query history](/dockit-query-history.png)

### Multi-cluster support

Save multiple connection profiles to switch between dev, staging, and production clusters. It supports Basic Auth, API Keys, and client certificates.

## Comparison

| | DocKit | Kibana | Elasticvue | Dejavu |
|---|---|---|---|---|
| **Platform** | Desktop (native) | Web (browser) | Web / extension | Web |
| **Startup** | < 2 s | 10–30 s | < 5 s | < 5 s |
| **RAM** | ~150 MB | 500 MB+ | ~200 MB | ~150 MB |
| **Dev Tools editor** | Monaco + JSON5 | Basic | Basic | None |
| **AI assistant** | Yes | No | No | No |
| **Offline mode** | Yes | No | No | No |
| **Query persistence** | Local files | Saved queries | No | No |
| **DynamoDB support** | Yes | No | No | No |
| **OpenSearch support** | Yes | No | No | No |
| **Open source** | Apache 2.0 | Mixed | MIT | Yes |
| **Price** | Free | Free (Basic) | Free | Free |

## Version compatibility

DocKit uses the standard Elasticsearch REST API and works with versions 1.x through 9.x. This includes both Apache 2.0 and Elastic License distributions.

## Quick start

1. [Download DocKit](/download) for macOS, Windows, or Linux.
2. Create a new Elasticsearch connection.
3. Enter your host, port, and credentials.
4. Connect to see indices in the sidebar.
5. Use Dev Tools to write queries.

See the [connection guide](/docs/dockit/connect-to-server) for more details.

## FAQ

**Is DocKit a Kibana replacement?**
It replaces Kibana for query development and index management. It does not include visualizations or dashboards.

**Does it support Elasticsearch 9.x?**
Yes.

**Where is data stored?**
Credentials and history are encrypted on your local filesystem.

**Is OpenSearch supported?**
Yes. DocKit supports OpenSearch and DynamoDB. See the [OpenSearch page](/products/dockit/opensearch-gui-client).

---

→ **[DocKit full feature overview](/products/dockit/)** · [Elasticsearch AI assistant guide](/blog/elasticsearch-ai-assistant) · [Elasticsearch query workflows guide](/blog/elasticsearch-gui)
