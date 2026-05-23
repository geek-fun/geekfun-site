---
title: "DocKit Import & Export - Seamlessly Move Data Across NoSQL Databases"
description: "Learn how to import and export data in DocKit - the free, open-source GUI client for Elasticsearch, OpenSearch, and DynamoDB. Supports JSON, CSV, and JSONL import/export."
head:
  - - meta
    - name: keywords
      content: DocKit import export, Elasticsearch import data, Elasticsearch export data, DynamoDB import export, NoSQL data migration, Elasticsearch JSONL import, JSON export Elasticsearch, CSV export DynamoDB, open source data migration tool, DocKit data transfer
  - - link
    - rel: canonical
      href: https://www.geekfun.club/blog/dockit-import-export
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/dockit-import-export
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/dockit-import-export
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/dockit-import-export
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "DocKit Import & Export - Seamlessly Move Data Across NoSQL Databases",
        "description": "Learn how to import and export data in DocKit - the free, open-source GUI client for Elasticsearch, OpenSearch, and DynamoDB. Supports JSON, CSV, and JSONL import/export.",
        "image": "https://www.geekfun.club/dockit-dynamodb-import.png",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.geekfun.club/geekfun.png"
          }
        },
        "datePublished": "2025-03-04",
        "dateModified": "2026-04-08",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.geekfun.club/blog/dockit-import-export"
        },
        "keywords": ["DocKit", "import export", "data migration", "NoSQL"],
        "articleSection": "DocKit Features"
      }
---

# DocKit Import & Export - Seamlessly Move Data Across NoSQL Databases

Moving data in and out of NoSQL databases is a routine but painful task. Cluster migrations, test data seeding, pre-upgrade backups — these all require a reliable way to transfer data without writing custom scripts or fighting with cloud consoles. **DocKit's import/export feature** handles this directly in your desktop client, with no data leaving your machine.

## What Formats DocKit Supports

DocKit's import/export engine supports three widely-used data formats:

| Format | Import | Export | Best For |
|--------|--------|--------|----------|
| **JSON** | ✅ | ✅ | Human-readable, full-fidelity data |
| **CSV** | ✅ | ✅ | Spreadsheet workflows, flat data |
| **JSONL** | ✅ | ✅ | Large-scale ES/OpenSearch migrations |

**JSON** preserves nested objects, arrays, and all native data types. It is the most reliable format for round-tripping data between NoSQL databases.

**CSV** is ideal for flat data that needs to be opened in a spreadsheet, shared with non-engineers, or imported into analytics tools. DocKit automatically handles column mapping and type coercion during import.

**JSONL format** uses one JSON object per line, following the native Elasticsearch `_bulk` API structure — each line alternating between an action/metadata JSON object and a source JSON object. This format is the fastest way to load large volumes of data directly into Elasticsearch or OpenSearch.

## How to Export Data from Elasticsearch / OpenSearch / DynamoDB

Exporting an index or table from DocKit is a straightforward process:

![DocKit export data panel screenshot](/dockit-dynamodb-export.png)

1. **Open DocKit** and connect to your Elasticsearch, OpenSearch, or DynamoDB instance. See the [connection guide](/docs/dockit/connect-to-server) if you need help.
2. In the left sidebar, click the Import/Export icon to open the Import/Export panel, then select the **Export** tab to export data.
3. select the **SOURCE DATABASE** and **COLLECTION NAME** for the target data you want to export
4. Choose your **output format**: JSON, CSV or JSONL format
5. Choose an **output path** on your local filesystem.
6. Optionally apply a **query filter** (Elasticsearch / OpenSearch) or a **filter expression** (DynamoDB) to export only a matching subset of documents or items.
7. Click **Export**. DocKit streams data and writes it to disk. A progress bar shows the number of documents exported.

**Tips:**
- For large Elasticsearch / OpenSearch indices and DynamoDB tables, use **JSONL format** — DocKit uses the scroll API internally so even very large indices are exported reliably without hitting memory limits.
- Exported JSON preserves native attribute types (Elasticsearch field types and DynamoDB types such as `S`, `N`, `BOOL`, `L`, `M`) so data can be round-tripped accurately.

## How to Import Data into Elasticsearch / OpenSearch / DynamoDB

![DocKit import data panel screenshot](/dockit-dynamodb-import.png)

1. **Open DocKit** and connect to your Elasticsearch, OpenSearch, or DynamoDB instance. See the [connection guide](/docs/dockit/connect-to-server) if you need help.
2. In the left sidebar click the Import/Export icon to open the Import/Export panel, then select **Import**.
3. Select the **TARGET DATABASE** and **COLLECTION NAME** for the destination you want to import into.
4. Choose the **source file** on your filesystem. Supported formats: JSON, CSV, or JSONL
5. DocKit automatically detects the file format. For CSV files, a **column mapping dialog** lets you map columns to field or attribute names and types.
6. Click **Import**. DocKit sends data using the `_bulk` API (Elasticsearch / OpenSearch) or `BatchWriteItem` (DynamoDB) in parallel, respecting rate limits. A real-time progress indicator shows imported document count and any errors.

**Handling import errors:**
- DocKit logs any failed items with their primary key and error reason to an **error log file** alongside the import file.
- You can retry failed items by importing the error log file directly — DocKit recognises its format.

## DocKit Import/Export vs. Other Tools

| Tool | Elasticsearch | DynamoDB | GUI | Free |
|------|--------------|----------|-----|------|
| **DocKit** | ✅ | ✅ | ✅ | ✅ |
| elasticdump | ✅ | ❌ | ❌ | ✅ |
| AWS DMS | ✅ | ✅ | ✅ | ❌ |
| AWS Console | ❌ | Limited | ✅ | ✅ |
| Custom scripts | ✅ | ✅ | ❌ | ✅ |

DocKit's advantage is the combination of **multi-database support**, a **graphical interface**, and **zero cost**. You do not need to install Node.js for elasticdump, configure AWS Database Migration Service, or write and maintain custom code.

## Common Use Cases

Modern development teams work across multiple environments: local development, staging, pre-production, and production. Keeping data consistent across these environments — or moving a representative snapshot of production data into a lower environment for testing — is a frequent and painful task. Common scenarios where import/export is essential:

- **Cluster migrations**: Moving from Elasticsearch 7 to Elasticsearch 8, or from a self-hosted cluster to a managed cloud offering like Amazon OpenSearch Service.
- **Test data seeding**: Populating a staging index or DynamoDB table with realistic data before a QA sprint.
- **Pre-upgrade backups**: Exporting a full index or table snapshot before running a risky schema change.
- **Cross-region replication**: Bootstrapping a new region with an existing data set.
- **Data sharing**: Handing off a dataset to a colleague or client in a standard format like JSON or CSV.

### Migrate Between Clusters

The most common use case for import/export is **cluster migration**. For example, upgrading from Elasticsearch 7 to Elasticsearch 8 without an in-place rolling upgrade:

1. Export all indices from the old cluster in JSONL format.
2. Create the new indices on the Elasticsearch 8 cluster with the desired mappings.
3. Import the exported files into the new cluster.
4. Validate document counts and spot-check records.
5. Switch your application traffic to the new cluster.

### Seed Test Data

QA teams frequently need realistic data in staging environments. With DocKit:

1. Export a sample of production data (use a query filter to limit to non-PII records or anonymised data).
2. Import it into the staging index or DynamoDB table before a QA sprint.
3. Re-seed before each release cycle.

### Back Up Before Upgrades

Before any risky operation — mapping changes, index restructuring, major version upgrades — export a full snapshot:

1. Export the affected index/table to JSON.
2. Store the export file in a secure location (S3, Git LFS, etc.).
3. Proceed with the operation. If something goes wrong, import the backup to restore.

### Share Data With Colleagues

Export a small dataset as JSON or CSV and share it via email, Slack, or your preferred channel. The recipient can import it into their own DocKit instance in seconds.

## Getting Started

1. **[Download DocKit](/download)** — Available for macOS, Windows, and Linux.
2. Follow the **[Import & Export Guide](/docs/dockit/import-export)** for step-by-step instructions.
3. Check the **[Connect to Server guide](/docs/dockit/connect-to-server)** to set up your database connections.

## Per-Database Landing Pages

- **[Elasticsearch GUI Client](/products/dockit/elasticsearch-gui-client)** — Full guide to DocKit's Elasticsearch features
- **[OpenSearch GUI Client](/products/dockit/opensearch-gui-client)** — OpenSearch-specific setup and workflows
- **[DynamoDB GUI Client](/products/dockit/dynamodb-gui-client)** — DynamoDB table management, PartiQL editor, and more
