---
title: DynamoDB GUI Client — DocKit Desktop App for Mac, Windows, Linux
description: DocKit is an open-source DynamoDB GUI client with table lifecycle management, PartiQL editor, AI query assistant, visual query builder, import/export, and local-first persistence. Free Dynobase alternative for Mac, Windows, Linux.
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
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is DocKit a Dynobase alternative?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. DocKit covers the same core workflows — browse tables, run PartiQL, import/export data — and adds an AI assistant and Elasticsearch/OpenSearch support. It is open-source (Apache 2.0)."
            }
          },
          {
            "@type": "Question",
            "name": "Does DocKit work with DynamoDB Local?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Set a custom endpoint to http://localhost:8000 when creating the connection."
            }
          },
          {
            "@type": "Question",
            "name": "Is it a NoSQL Workbench replacement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For query development and data operations, yes. NoSQL Workbench has a stronger data modeler. If you do heavy data modeling, use both."
            }
          },
          {
            "@type": "Question",
            "name": "Where are AWS credentials stored?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Encrypted locally on your machine. They are never transmitted to any third party."
            }
          },
          {
            "@type": "Question",
            "name": "Can I manage DynamoDB table lifecycle in DocKit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. DocKit provides full table lifecycle management including create (4-step wizard), modify (billing mode, streams, TTL, PITR, encryption, deletion protection, tags), truncate, delete, and monitor tables — all from a single interface."
            }
          }
        ]
      }
---

# DynamoDB GUI Client

**DocKit** is an open source DynamoDB desktop app for Mac, Windows, and Linux. It replaces the AWS Console for daily work. You get a PartiQL editor, visual query builder, and an AI assistant in one native application.

<div style="display:flex;gap:12px;margin:1.5rem 0">
  <a href="/download" style="padding:10px 20px;background:var(--vp-c-brand-1);color:#fff;border-radius:6px;font-weight:600;text-decoration:none">Download — Free</a>
  <a href="https://github.com/geek-fun/dockit" style="padding:10px 20px;border:1px solid var(--vp-c-border);border-radius:6px;font-weight:600;text-decoration:none" target="_blank" rel="noopener">View on GitHub</a>
</div>

## Why a dedicated GUI?

The AWS Console is fine for quick lookups, but it wasn't built for development. It lacks query history and offline support. Writing filter expressions in a tiny text box is slow and prone to errors. Dedicated clients exist to fix these specific problems.

DocKit includes a data AI agent that understands your table schema. You describe what you need in plain English — the agent reads your schema, generates PartiQL, and runs it against your table through tools it has verified it can use.

## See DocKit in action

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 2rem 0;">
  <iframe
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/UE1hDLXvxuo"
    title="DocKit DynamoDB GUI client demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

## Features

### PartiQL editor

The editor is powered by Monaco and built for DynamoDB.

![DocKit DynamoDB PartiQL editor](/dockit-dynamodb-partiql-editor.png)

- Syntax highlighting and validation for PartiQL statements.
- Autocomplete suggests table names, attribute names, and types from your live environment.
- Run multiple queries in one session.
- Use `Cmd/Ctrl + Enter` to execute and see results in a structured table.

### Visual query builder

If you don't want to write PartiQL manually, use the visual builder.

![DocKit DynamoDB visual query builder](/dockit-dynamodb-query-ui.png)

- Pick a table from the sidebar.
- Set partition keys, sort key conditions, and filter expressions through form fields.
- Preview the generated query before running it.
- Switch to the PartiQL view at any time to edit the underlying statement.

Visual queries are saved to your history automatically.

### Data AI agent — Agentic Data Studio

The sidebar AI assistant and Agentic Data Studio have access to your connection, table schema, indexes, and query history. When you ask for something, they read live context from your DynamoDB connection, build the PartiQL, and can run it against your table through verified tools.

Ask "find orders over $500 from last week" — the agent reads your table schema, constructs the query, runs it, and shows you results. Ask "describe the table capacity" — it calls `DescribeTable` and returns structured metrics.

Read operations run automatically. Write operations (update, delete) require explicit confirmation. Your credentials are never sent to the LLM.

![DocKit AI query assistant](/dockit-ai-assistant.png)

### Import and export

Move data without losing type information.

![DocKit DynamoDB import and export](/dockit-dynamodb-import-export.png)

- JSON format preserves DynamoDB types like S, N, BOOL, and Maps.
- CSV support for spreadsheets and analytics.
- Uses the `BatchWriteItem` API with built-in rate limiting and retries.
- Export large tables with cursor-based pagination to avoid memory limits.

### Query history

DocKit saves every PartiQL statement and visual query. You can search, re-run, or load them back into the editor. This history is stored locally and scoped to your connection.

![DocKit query history](/dockit-query-history.png)

### Multi-database support

DocKit also works with **Elasticsearch** and **OpenSearch**. You can switch between DynamoDB tables and search clusters without changing tools.

<div style="display: flex; gap: 32px; align-items: center; margin: 24px 0;">
  <div style="display: flex; align-items: center; gap: 10px;">
    <img src="/db-dynamodb.svg" alt="DynamoDB" style="width: 32px; height: 32px;" />
    <span>DynamoDB</span>
  </div>
  <div style="display: flex; align-items: center; gap: 10px;">
    <img src="/db-elasticsearch.svg" alt="Elasticsearch" style="width: 32px; height: 32px;" />
    <span>Elasticsearch</span>
  </div>
  <div style="display: flex; align-items: center; gap: 10px;">
    <img src="/db-opensearch.png" alt="OpenSearch" style="width: 32px; height: 32px;" />
    <span>OpenSearch</span>
  </div>
</div>

## Comparison

| | DocKit | AWS Console | NoSQL Workbench | Dynobase |
|---|---|---|---|---|
| **Platform** | Desktop (native) | Web (browser) | Desktop | Desktop |
| **PartiQL editor** | Monaco | Basic | Yes | Yes |
| **Visual query builder** | Yes | Limited | Yes | Yes |
| **AI assistant** | Yes | No | No | No |
| **Query history** | Auto | No | No | Yes |
| **Import / Export** | JSON, CSV | Limited | Limited | Yes |
| **Offline mode** | Yes | No | Yes | Yes |
| **Elasticsearch support** | Yes | No | No | No |
| **Open source** | Apache 2.0 | No | No | No |
| **Price** | Community: free | Free | Free | $12–30/mo |

## Getting started

1. **[Download DocKit](/download)** for macOS, Windows, or Linux.
2. Open the app and click **New Connection**. Select DynamoDB.
3. Enter your AWS region and credentials, or use an existing IAM profile.
4. Click **Connect** to see your tables in the sidebar.
5. Start querying with the **PartiQL editor** or **Visual Query Builder**.

To connect to DynamoDB Local, set the endpoint to `http://localhost:8000`. Use any non-empty credentials. Check the [connection guide](/docs/dockit/connect-to-server) for details.

## Table Management

DocKit provides full DynamoDB table lifecycle management from the **Manage** panel.

### Viewing Tables

Browse all tables with key metadata: item count, size, status, billing mode, partition key, sort key, and index count.

### Creating Tables

A **4-step Create Table Wizard**:

1. **Basic Info** — Table name, partition key (type: string/binary/number), sort key (optional)
2. **Capacity Settings** — On-demand or Provisioned (RCU/WCU)
3. **Indexes & Streams** — Configure GSIs (key schema, projection type, throughput), LSIs, and DynamoDB Streams (keys_only/new_image/old_image/new_and_old_images)
4. **Review** — Summary of all settings before creation

### Modifying Tables

- **Billing mode**: Switch between On-demand and Provisioned
- **Table class**: Standard or Standard-IA (Infrequent Access)
- **Auto Scaling**: Configure read/write capacity min/max/target
- **GSI management**: Create, update throughput, or delete Global Secondary Indexes
- **TTL**: Enable/disable Time-to-Live with attribute selection
- **Point-in-Time Recovery**: Enable/disable continuous backups (PITR)
- **Streams**: Enable/disable/change stream view type
- **Encryption**: AWS-owned vs KMS vs Customer-managed CMK
- **Deletion Protection**: Prevent accidental table deletion
- **Tags**: Manage key-value metadata tags

### Monitoring

View **CloudWatch metrics** directly in the app for the last 24 hours:
- Read/Write capacity utilization
- Throttled events
- Consumed RCU/WCU

### Advanced Operations

- **Truncate table**: Delete all items preserving table schema and settings
- **Delete table**: Permanently remove table and all data

## GSIs and LSIs

DocKit lets you create, view, and delete indexes. For each index you can see:
- Index name, type (GSI/LSI), status (active/creating/deleting/updating)
- Key schema (partition key + optional sort key)
- Projection type (ALL, KEYS_ONLY, INCLUDE)
- Throughput settings (provisioned only)
- Item count and storage size

Create indexes with a dialog that configures key schema, projection, and throughput in one flow.

## PartiQL Editor

DocKit's DynamoDB editor supports both:
- **Visual query builder** — filter by partition key, sort key conditions (equality, begins_with, between, etc.), and 13+ filter operators. Select which index to query against.
- **PartiQL SQL editor** — Monaco-powered editor with syntax highlighting for SELECT, INSERT, UPDATE, DELETE statements. Sample queries included for quick starts.

## Pagination

Query results are paginated with configurable page sizes: 10, 25, 50, 100, 200, or 300 items per page. Navigate forward/backward through result sets.

## Inline Item CRUD

Edit items directly in the result table:
- **Create**: Add new items with attribute editor (type selection: S, N, BOOL, L, M, etc.)
- **Edit**: Modify attribute values inline
- **Delete**: Remove items with confirmation dialog

## FAQ

**Is DocKit an alternative to Dynobase?**
Yes. It handles the same core workflows like browsing tables and running PartiQL. It adds an AI assistant and support for Elasticsearch and OpenSearch. It is open source under Apache 2.0.

**Does it support DynamoDB Local?**
Yes. Set the custom endpoint to `http://localhost:8000` when creating the connection.

**Can I replace NoSQL Workbench with this?**
For queries and data operations, yes. NoSQL Workbench has a better data modeler, so you might want to use both if you do heavy modeling.

**Where are AWS credentials stored?**
They are stored locally on your machine. They are never sent to third parties or DocKit's developers.

**Can I manage DynamoDB tables in DocKit?**
Yes. DocKit provides full table lifecycle management — create with a 4-step wizard, modify billing mode, indexes, streams, TTL, PITR, encryption, and more. You can also truncate, delete, and monitor CloudWatch metrics directly in the app.

---

→ **[DocKit full feature overview](/products/dockit/)** · [DynamoDB query patterns guide](/blog/dynamodb-gui) · [Best DynamoDB GUI clients 2026](/blog/best-dynamodb-gui-client-2026) · [Import & Export guide](/blog/dockit-import-export)
