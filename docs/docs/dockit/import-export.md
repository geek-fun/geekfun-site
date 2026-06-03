---
title: "DocKit Import Export - Migrate Elasticsearch DynamoDB Data JSON CSV"
description: "Step-by-step guide to import export data from MongoDB, Elasticsearch, OpenSearch, DynamoDB using DocKit's multi-step import and export wizard. Support JSON, JSONL, CSV, bulk formats with schema mapping and background tasks. Migrate NoSQL databases, backup data, seed test environments with desktop GUI client."
head:
  - - meta
    - name: keywords
      content: DocKit import export, export Elasticsearch data, import DynamoDB data, NoSQL data migration, DocKit data guide
  - - link
    - rel: canonical
      href: https://www.geekfun.club/docs/dockit/import-export
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/dockit/import-export
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/dockit/import-export
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/dockit/import-export
---

# DocKit Import & Export Guide

DocKit supports importing and exporting data from MongoDB, Elasticsearch, OpenSearch, and DynamoDB in JSON, CSV, and Elasticsearch Bulk formats. This guide covers the full workflow for both operations.

## Prerequisites

Before using the import/export feature, ensure you have:

- DocKit installed on your machine. See the [installation guide](/docs/dockit/installation).
- A configured connection to your MongoDB, Elasticsearch, OpenSearch, or DynamoDB instance. See the [connect to server guide](/docs/dockit/connect-to-server).
- Sufficient disk space for the export files (estimate: roughly the same as the compressed index/table size).
- Read permissions on the source index/table, and write permissions on the target index/table.

## Exporting Data from Elasticsearch / OpenSearch

### Step 1: Open the Index

1. Launch DocKit and select your Elasticsearch or OpenSearch connection from the sidebar.
2. Expand the connection to see the list of indices.
3. Click the index you want to export to open it.

### Step 2: Open the Export Dialog

Click the **Export** button in the index toolbar, or right-click the index name in the sidebar and select **Export**.

### Step 3: Configure Export Options

In the Export dialog:

- **Format**: Choose from **JSON**, **CSV**, or **Elasticsearch Bulk**.
  - Use **JSON** for full-fidelity export with nested objects preserved.
  - Use **CSV** for flat data that needs to be opened in a spreadsheet.
  - Use **Elasticsearch Bulk** for fastest re-import into another Elasticsearch/OpenSearch cluster.
- **Query filter** (optional): Enter a QDSL query to export only matching documents. Leave empty to export all documents.
- **Fields** (optional): Specify a comma-separated list of fields to include. Leave empty to export all fields.
- **Output file**: Choose the destination file path on your local machine.

### Step 4: Run the Export

Click **Export**. DocKit streams documents from Elasticsearch using the scroll API and writes them to the output file. A progress bar shows:

- Documents exported so far
- Total document count (estimated)
- Elapsed time

Export does not support resumption: if DocKit is closed mid-export, re-running the same export will restart from the beginning and overwrite any partial output file.

### Step 5: Verify the Export

After export completes, DocKit shows a summary: total documents exported, file size, and elapsed time. You can open the file in any text editor or spreadsheet application to verify the contents.

## Exporting Data from DynamoDB

### Step 1: Open the Table

1. Launch DocKit and select your DynamoDB connection.
2. In the sidebar, click the table you want to export.

### Step 2: Open the Export Dialog

Click the **Export** button in the table toolbar, or right-click the table name and select **Export**.

### Step 3: Configure Export Options

- **Format**: Choose **JSON** or **CSV**. (Bulk format is Elasticsearch-specific.)
- **Filter expression** (optional): Enter a DynamoDB filter expression to export only matching items.
- **Index** (optional): Choose to scan the primary index or a Global Secondary Index.
- **Output file**: Choose the destination file path.

### Step 4: Run the Export

Click **Export**. DocKit performs a paginated scan of the table and writes results to the output file. The export respects DynamoDB's read throughput limits to avoid throttling.

## Importing Data into Elasticsearch / OpenSearch

### Step 1: Prepare the Target Index

Ensure the target index exists in your Elasticsearch/OpenSearch cluster. If not, create it first via DocKit or the Elasticsearch API. For best results, define the index mapping before importing to ensure correct field types.

### Step 2: Open the Import Dialog

Select the target index in DocKit, then click the **Import** button in the toolbar, or right-click the index and choose **Import**.

### Step 3: Select the Source File

Browse to the JSON, CSV, or Elasticsearch Bulk file you want to import. DocKit automatically detects the format based on the file extension and content.

### Step 4: Configure Import Options

- **Batch size**: Number of documents to send per `_bulk` request. Default: 500. Increase for faster imports on high-throughput clusters; decrease if you see timeout errors.
- **Concurrency**: Number of parallel bulk requests. Default: 2.
- **Column mapping** (CSV only): Map CSV column names to Elasticsearch field names and choose the field type for each column.
- **Skip errors**: If enabled, DocKit skips documents that fail to index and logs them to an error file. If disabled, the import stops on the first error.

### Step 5: Run the Import

Click **Import**. DocKit reads the source file and sends documents to Elasticsearch using the `_bulk` API. A progress indicator shows documents imported, errors encountered, and elapsed time.

### Step 6: Review the Error Log

If any documents failed to import, DocKit creates an error log file in the same directory as the source file (e.g., `data.json.errors.json`). Each entry in the error log contains the original document and the Elasticsearch error message. You can retry failed documents by importing the error log file directly.

## Importing Data into DynamoDB

### Step 1: Prepare the Target Table

Ensure the target table exists in DynamoDB. If not, create it via DocKit's [DynamoDB Manage panel](/docs/dockit/dynamodb-manage-metrics) or the AWS Console.

### Step 2: Open the Import Dialog

Select the target table in DocKit, then click **Import** in the toolbar.

### Step 3: Select the Source File

Browse to your JSON or CSV file.

### Step 4: Configure Import Options

- **Column mapping** (CSV only): Map CSV columns to DynamoDB attribute names and select the attribute type (S, N, BOOL, L, M, etc.) for each column.
- **Batch size**: Number of items per `BatchWriteItem` request. Default: 25 (DynamoDB maximum).
- **Skip errors**: Log failed items to an error file and continue, rather than stopping on the first error.

### Step 5: Run the Import

Click **Import**. DocKit sends `BatchWriteItem` requests in parallel, respecting DynamoDB's rate limits. A progress indicator shows items written and any errors.

## Supported Formats

| Format | Import | Export | ES/OS | DynamoDB | Notes |
|--------|--------|--------|-------|----------|-------|
| JSON | ✅ | ✅ | ✅ | ✅ | Full fidelity, supports nested objects |
| CSV | ✅ | ✅ | ✅ | ✅ | Flat data only; requires column mapping on import |
| Elasticsearch Bulk | ✅ | ✅ | ✅ | ❌ | Fastest for ES/OS migrations |

## Export Wizard Workflow

DocKit now uses a **multi-step Export Wizard** for a guided experience:

**Step 1 — Source & Scope**

Select the connection, database type, and specific index/collection/table to export. For MongoDB, you can also specify a filter query (JSON format) and sort criteria.

**Step 2 — Schema & Structure** (optional)

Review the schema of your source data. DocKit shows field names, types, and sample values. You can include or exclude specific fields from the export.

**Step 3 — Target & Output**

Choose the export format and destination:

- **Format**: JSON, JSONL (JSON Lines), or CSV
- **Output file**: Browse to a destination folder and filename
- **Beautify JSON**: Pretty-print JSON output (JSON only)
- **Include metadata**: Export a companion `metadata.json` file with schema info, export timestamp, and row count

**Step 4 — Execution**

Review the summary (target index, document count estimate, file size estimate), then click Export. The task runs in the **background** so you can continue working.

## Import Wizard

DocKit's **Import Wizard** is also multi-step:

**Step 1 — Choose Data**

Select the data file (JSON, JSONL, CSV) and optionally a metadata file from a previous export. DocKit auto-detects the format.

**Step 2 — Schema & Structure**

DocKit shows the source schema (field names, types, sample values) alongside the target schema. Fields are classified as:

- **Match** — Field exists in both source and target (auto-mapped)
- **New** — Field exists in source but not in target (will be added)
- **Exclude** — Selected fields to skip during import

You can override field types for the target (e.g., change String to Number).

**Step 3 — Target & Output**

Select the target database and collection/table. For new collections, configure:

- MongoDB: Collection name
- Elasticsearch: Shard count, replica count
- DynamoDB: Partition key, sort key, billing mode, capacity units

**Step 4 — Execution**

Choose import strategy:

- **Append**: Add data to existing records (skip duplicates)
- **Replace**: Overwrite existing records using upsert

Click Import. The task runs as a **background task** — track progress in the Task Manager panel.

## Background Tasks

Both import and export run as **background tasks**. You can:

- Monitor progress in the **Task Manager** (right sidebar panel)
- See real-time status: Pending → Running → Completed/Failed
- View details: documents processed, errors encountered, elapsed time
- Continue using DocKit normally while tasks execute

## MongoDB Support

Import and Export work with MongoDB collections:

- **Export**: Export documents with optional filter query, field selection, and sort
- **Import**: Import JSON/CSV files into MongoDB collections. Supports both append and replace strategies
- Batch size: 500 documents per batch

## Metadata Export

When you check **Include metadata**, DocKit exports a `metadata.json` file alongside your data. This file contains:

- Source type and version
- Export timestamp
- Schema (field names and types)
- Total row count
- Filter query used (if any)

Metadata files are automatically detected when importing, so field mappings are pre-configured.

## Troubleshooting

### Export fails with "scroll context missing"

This happens when an Elasticsearch scroll context expires during a large export. DocKit automatically retries with a new scroll context. If this occurs frequently, check that your Elasticsearch `scroll` timeout is set to at least `5m`.

### Import is slow

- Increase **batch size** to 1000–2000 documents per request.
- Increase **concurrency** to 4–8 parallel requests.
- Ensure the target cluster is not under heavy load.
- For DynamoDB, check that the table has sufficient provisioned write capacity or is in on-demand mode.

### CSV import shows incorrect types

Use the **column mapping dialog** to explicitly set the type for each CSV column. DocKit defaults to String for columns it cannot auto-detect.

### DynamoDB import fails with throughput exceeded

Lower the batch size or reduce the concurrency. Alternatively, switch the DynamoDB table to **On-Demand** billing mode before the import to avoid throttling.

### File not found after export

Check the output path you specified in the Export dialog. If the path includes directories that do not exist, DocKit will fail silently. Ensure all parent directories exist before exporting.
