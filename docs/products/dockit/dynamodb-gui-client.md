---
title: DynamoDB GUI Client — DocKit Desktop App for Mac, Windows, Linux
description: DocKit is an open-source DynamoDB GUI client with PartiQL editor, AI query assistant, visual query builder, import/export, and local-first persistence. Free Dynobase alternative for Mac, Windows, Linux.
sidebar: false
head:
  - - meta
    - name: keywords
      content: dynamodb gui client, dynamodb desktop client, dynamodb gui, dynobase alternative, nosql workbench alternative, dynamodb partiql editor, dynamodb query builder, open source dynamodb client, dynamodb mac client, dynamodb windows client
  - - link
    - rel: canonical
      href: https://www.geekfun.club/products/dockit/dynamodb-gui-client
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/products/dockit/dynamodb-gui-client
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/products/dockit/dynamodb-gui-client
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/products/dockit/dynamodb-gui-client
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "DocKit",
        "alternateName": ["DynamoDB GUI Client", "Dynobase alternative"],
        "description": "Open-source desktop DynamoDB GUI client with PartiQL editor, AI query generation, visual query builder, import/export, and local-first persistence. Free alternative to Dynobase and NoSQL Workbench.",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": { "@type": "Offer", "priceCurrency": "USD" },
        "downloadUrl": "https://www.geekfun.club/download",
        "author": { "@type": "Organization", "name": "GEEKFUN", "url": "https://www.geekfun.club" },
        "license": "https://github.com/geek-fun/dockit/blob/main/LICENSE",
        "sameAs": ["https://github.com/geek-fun/dockit"]
      }
---

# DynamoDB GUI Client

**DocKit** is an open-source desktop **DynamoDB GUI client** for Mac, Windows, and Linux. It replaces the AWS Console for day-to-day DynamoDB work — PartiQL editor, visual query builder, AI query assistant, and import/export, all in a single native app.

<div style="display:flex;gap:12px;margin:1.5rem 0">
  <a href="/download" style="padding:10px 20px;background:var(--vp-c-brand-1);color:#fff;border-radius:6px;font-weight:600;text-decoration:none">Download — Free</a>
  <a href="https://github.com/geek-fun/dockit" style="padding:10px 20px;border:1px solid var(--vp-c-border);border-radius:6px;font-weight:600;text-decoration:none" target="_blank" rel="noopener">View on GitHub</a>
</div>

## Why use a DynamoDB GUI client?

The AWS Console handles simple lookups. It is not built for development work: single-tab navigation, no query history, no offline mode, and writing filter expressions in a small text box is error-prone. DynamoDB-specific GUI clients exist to fix exactly these pain points.

DocKit adds one thing most DynamoDB clients don't have: **an AI assistant that knows your table schema**. Describe your query in plain English and get working PartiQL back instantly.

## DynamoDB features in DocKit

### PartiQL editor

A Monaco-powered editor built for DynamoDB PartiQL:

- Syntax highlighting and validation for PartiQL statements
- **Schema-aware autocomplete** — table names, attribute names, and types from your live tables
- Multi-statement support: run multiple queries in one session
- `Cmd/Ctrl + Enter` to execute; results in a structured table view

### Visual query builder

Not comfortable with PartiQL? The visual query builder lets you:

- Select a table from the sidebar
- Set partition key, sort key condition, and filter expressions through form fields
- Preview the generated query before running
- Switch to PartiQL view to see (and edit) the underlying statement

Every query built visually is also saved to query history.

### AI query assistant

Type your requirement in natural language — "find all orders placed this week where total exceeds 500" — and DocKit generates the correct PartiQL statement with your actual attribute names and types injected as context. Supports OpenAI and DeepSeek with your own API key. Your table data never leaves your machine.

### Import & Export

Move DynamoDB data in and out with full fidelity:

- **JSON** — preserves all DynamoDB types (S, N, BOOL, L, M, etc.)
- **CSV** — for spreadsheet workflows and analytics tools
- Batch writes using `BatchWriteItem` API with automatic rate limiting and retries
- Export large tables with cursor-based pagination — no memory limits

### Query history

Every PartiQL statement and visual query you run is saved automatically. Search history, re-execute, or load back into the editor with one click. History is local and connection-scoped.

### Multi-database in one app

DocKit also supports **Elasticsearch** and **OpenSearch** in the same application. Switch between DynamoDB tables, Elasticsearch indices, and OpenSearch clusters without opening a different tool.

## Comparison: DocKit vs other DynamoDB GUI clients

| | DocKit | AWS Console | NoSQL Workbench | Dynobase |
|---|---|---|---|---|
| **Platform** | Desktop (native) | Web (browser) | Desktop | Desktop |
| **PartiQL editor** | ✅ Monaco | ✅ Basic | ✅ | ✅ |
| **Visual query builder** | ✅ | Limited | ✅ | ✅ |
| **AI assistant** | ✅ | ❌ | ❌ | ❌ |
| **Query history** | ✅ Auto | ❌ | ❌ | ✅ |
| **Import / Export** | ✅ JSON, CSV | Limited | Limited | ✅ |
| **Offline mode** | ✅ | ❌ | ✅ | ✅ |
| **Elasticsearch support** | ✅ | ❌ | ❌ | ❌ |
| **Open source** | ✅ Apache 2.0 | ❌ | ❌ | ❌ |
| **Price** | Community: free | Free | Free | $12–30/mo |

## Getting started

1. **[Download DocKit](/download)** for macOS (Apple Silicon + Intel), Windows, or Linux
2. Open DocKit → click **New Connection** → choose DynamoDB
3. Enter your AWS region, Access Key ID, and Secret Access Key (or use an IAM profile)
4. Click **Connect** — your tables appear in the sidebar
5. Open the **PartiQL editor** or **Visual Query Builder** and start querying

For connecting to DynamoDB Local, use `http://localhost:8000` as the endpoint with any non-empty credentials. See the [connection guide](/docs/dockit/connect-to-server) for full details.

## Frequently asked questions

**Is DocKit a Dynobase alternative?**
Yes. DocKit covers the same core workflows — browse tables, run PartiQL, import/export data — plus adds an AI assistant and Elasticsearch/OpenSearch support. It is open-source (Apache 2.0).

**Does it support DynamoDB Local?**
Yes. Set a custom endpoint to `http://localhost:8000` when creating the connection.

**Is it a NoSQL Workbench replacement?**
For query development and data operations, yes. NoSQL Workbench has a stronger data modeler. If you do heavy data modeling, use both.

**Where are AWS credentials stored?**
Encrypted locally on your machine. They are never transmitted to any third party, including DocKit's maintainers.

---

→ **[DocKit full feature overview](/products/dockit/)** · [Best DynamoDB GUI clients 2026](/blog/best-dynamodb-gui-client-2026) · [Import & Export guide](/blog/dockit-import-export)
