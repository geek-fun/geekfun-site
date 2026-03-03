---
title: "DocKit Import & Export - Seamlessly Move Data Across NoSQL Databases"
description: "Learn how to import and export data in DocKit - the free, open-source GUI client for Elasticsearch, OpenSearch, and DynamoDB. Supports JSON, CSV, and bulk import/export."
head:
  - - meta
    - name: keywords
      content: DocKit import export, Elasticsearch import data, Elasticsearch export data, DynamoDB import export, NoSQL data migration, Elasticsearch bulk import, JSON export Elasticsearch, CSV export DynamoDB, open source data migration tool, DocKit data transfer
  - - link
    - rel: canonical
      href: https://www.geekfun.club/blog/import-export
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/import-export
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/import-export
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/import-export
---

# DocKit Import & Export - Seamlessly Move Data Across NoSQL Databases

**Data portability** is a cornerstone of any serious database workflow. Whether you are migrating between clusters, seeding a test environment, or creating a pre-upgrade backup, you need a reliable way to move data in and out of your NoSQL databases without writing custom scripts or wrestling with cloud consoles. **DocKit's import/export feature** puts that capability directly inside your desktop client — free, open-source, and completely local.

## Why Data Portability Matters

Modern development teams work across multiple environments: local development, staging, pre-production, and production. Keeping data consistent across these environments — or moving a representative snapshot of production data into a lower environment for testing — is a frequent and painful task.

**Common scenarios where import/export is essential:**

- **Cluster migrations**: Moving from Elasticsearch 7 to Elasticsearch 8, or from a self-hosted cluster to a managed cloud offering like Amazon OpenSearch Service.
- **Test data seeding**: Populating a staging index or DynamoDB table with realistic data before a QA sprint.
- **Pre-upgrade backups**: Exporting a full index or table snapshot before running a risky schema change.
- **Cross-region replication**: Bootstrapping a new region with an existing data set.
- **Data sharing**: Handing off a dataset to a colleague or client in a standard format like JSON or CSV.

Without a dedicated GUI tool, developers typically resort to `elasticdump`, custom Python scripts, or `aws dynamodb scan` combined with shell pipelines — all of which require local tooling setup, careful error handling, and deep knowledge of API formats. DocKit eliminates this friction.

## What Formats DocKit Supports

DocKit's import/export engine supports three widely-used data formats:

| Format | Import | Export | Best For |
|--------|--------|--------|----------|
| **JSON** | ✅ | ✅ | Human-readable, full-fidelity data |
| **CSV** | ✅ | ✅ | Spreadsheet workflows, flat data |
| **Elasticsearch Bulk** | ✅ | ✅ | Large-scale ES/OpenSearch migrations |

**JSON** preserves nested objects, arrays, and all native data types. It is the most reliable format for round-tripping data between NoSQL databases.

**CSV** is ideal for flat data that needs to be opened in a spreadsheet, shared with non-engineers, or imported into analytics tools. DocKit automatically handles column mapping and type coercion during import.

**Elasticsearch Bulk format** uses the native Elasticsearch `_bulk` API format — each line alternating between an action/metadata JSON object and a source JSON object. This format is the fastest way to load large volumes of data directly into Elasticsearch or OpenSearch.

## How to Export Data from Elasticsearch / OpenSearch

Exporting an index from Elasticsearch or OpenSearch in DocKit is a straightforward process:

1. **Open DocKit** and connect to your Elasticsearch or OpenSearch cluster. See the [connection guide](/docs/dockit/connect-to-server) if you need help.
2. In the left sidebar, expand the cluster and select the **index** you want to export.
3. Click the **Export** button in the toolbar (or right-click the index and choose **Export**).
4. In the Export dialog, choose your **output format**: JSON, CSV, or Bulk.
5. Optionally apply a **query filter** to export only a subset of documents — useful when you want to export documents matching a specific condition without exporting an entire index.
6. Choose an **output path** on your local filesystem.
7. Click **Export**. DocKit streams the data from Elasticsearch and writes it to disk in the selected format. A progress bar shows the number of documents exported.

**Tips for large exports:**
- Use **Bulk format** for indices with millions of documents — it is faster and requires less post-processing.
- Apply a **date range filter** to export only recent documents when full exports are impractical.
- DocKit uses Elasticsearch's scroll API internally so that even very large indices are exported reliably without hitting memory limits.

## How to Export Data from DynamoDB

Exporting a DynamoDB table follows a similar flow:

1. **Open DocKit** and connect to your AWS account or DynamoDB Local instance. See the [connection guide](/docs/dockit/connect-to-server) for DynamoDB-specific setup.
2. In the left sidebar, select the **table** you want to export.
3. Click the **Export** button in the toolbar.
4. Choose **JSON** or **CSV** as the output format. (Bulk format is Elasticsearch-specific and not available for DynamoDB.)
5. Optionally add a **filter expression** to export only matching items.
6. Choose an **output file path**.
7. Click **Export**. DocKit performs a full table scan and writes results to disk.

**Tips for DynamoDB exports:**
- For tables with a **secondary index**, you can choose to export results based on a GSI scan rather than the primary key scan.
- Large tables benefit from DocKit's **paginated scan** approach, which avoids DynamoDB's per-request item limits.
- Exported JSON preserves DynamoDB's native attribute types (`S`, `N`, `BOOL`, `L`, `M`, etc.) so data can be round-tripped accurately.

## How to Import Data

### Importing into Elasticsearch / OpenSearch

1. In DocKit, connect to the **target** Elasticsearch or OpenSearch cluster.
2. Select or create the **target index**.
3. Click the **Import** button in the toolbar.
4. Choose the **source file** on your filesystem (JSON, CSV, or Bulk format).
5. DocKit automatically detects the file format. For CSV files, a **column mapping dialog** lets you map CSV columns to Elasticsearch field names and types.
6. Configure **batch size** (default: 500 documents per batch) and **concurrency** settings for optimal throughput.
7. Click **Import**. DocKit sends data to Elasticsearch using the `_bulk` API in the specified batch size. A real-time progress indicator shows imported document count and any errors.

### Importing into DynamoDB

1. In DocKit, connect to the **target** AWS account.
2. Select the **target table** in the sidebar.
3. Click the **Import** button.
4. Choose your **source file** (JSON or CSV).
5. For CSV imports, map columns to DynamoDB attribute names and select the attribute type for each column.
6. Click **Import**. DocKit sends `BatchWriteItem` requests in parallel, respecting DynamoDB's rate limits.

**Handling import errors:**
- DocKit logs any failed items with their primary key and error reason to a **error log file** alongside the import file.
- You can retry failed items by importing the error log file directly — DocKit recognises its format.

## Common Use Cases

### Migrate Between Clusters

The most common use case for import/export is **cluster migration**. For example, upgrading from Elasticsearch 7 to Elasticsearch 8 without an in-place rolling upgrade:

1. Export all indices from the old cluster in Bulk format.
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

## DocKit Import/Export vs. Other Tools

| Tool | Elasticsearch | DynamoDB | GUI | Free |
|------|--------------|----------|-----|------|
| **DocKit** | ✅ | ✅ | ✅ | ✅ |
| elasticdump | ✅ | ❌ | ❌ | ✅ |
| AWS DMS | ✅ | ✅ | ✅ | ❌ |
| AWS Console | ❌ | Limited | ✅ | ✅ |
| Custom scripts | ✅ | ✅ | ❌ | ✅ |

DocKit's advantage is the combination of **multi-database support**, a **graphical interface**, and **zero cost**. You do not need to install Node.js for elasticdump, configure AWS Database Migration Service, or write and maintain custom code.

## Getting Started

Ready to start moving data with DocKit?

1. **[Download DocKit](/download)** — Available for macOS, Windows, and Linux.
2. Follow the **[Import & Export Guide](/docs/dockit/import-export)** for step-by-step instructions.
3. Check the **[Connect to Server guide](/docs/dockit/connect-to-server)** to set up your database connections.

DocKit is **100% free and open-source** (Apache 2.0). No subscriptions, no feature gates, no data leaving your machine. [Download it today](/download) and take control of your NoSQL data.
