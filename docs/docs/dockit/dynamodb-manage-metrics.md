---
title: "DocKit DynamoDB Manage & Metrics"
description: "Learn how to manage DynamoDB tables and view metrics using DocKit — the free, open-source GUI client for DynamoDB."
head:
  - - meta
    - name: keywords
      content: DocKit DynamoDB manage, DynamoDB metrics GUI, DynamoDB table management, DynamoDB monitoring, DocKit DynamoDB documentation
  - - link
    - rel: canonical
      href: https://www.geekfun.club/docs/dockit/dynamodb-manage-metrics
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/dockit/dynamodb-manage-metrics
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/dockit/dynamodb-manage-metrics
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/dockit/dynamodb-manage-metrics
---

# DocKit DynamoDB Manage & Metrics

DocKit provides a built-in DynamoDB management panel for browsing tables, creating and deleting tables, viewing table metrics, and inspecting indexes — all from a native desktop interface.

## Overview

The DynamoDB Manage & Metrics panel in DocKit gives you access to the following capabilities:

- Browse all tables in a connected AWS account and region.
- View table details: status, creation date, billing mode, key schema.
- Create new tables via a guided wizard.
- Delete tables with a confirmation prompt.
- View table metrics: item count, storage size, provisioned capacity.
- Inspect Global Secondary Indexes (GSI) and Local Secondary Indexes (LSI).
- Monitor capacity mode (Provisioned vs. On-Demand) and auto-scaling status.

## Connect to DynamoDB

Before using the management panel, configure a DynamoDB connection in DocKit. See the [Connect to Server guide](/docs/dockit/connect-to-server) for complete setup instructions.

**Supported connection methods:**
- **AWS Profile**: Uses credentials from `~/.aws/credentials` or `~/.aws/config`.
- **Access Key + Secret Key**: Direct credential entry for service accounts.
- **DynamoDB Local**: Connect to a locally running DynamoDB instance (e.g., `http://localhost:8000`).

Once configured, click the connection in the sidebar to open the DynamoDB management view.

## Table Management

### Browsing Tables

When you open a DynamoDB connection, DocKit displays all tables in the connected account and region in the sidebar. You can:

- **Filter by name**: Type in the search box above the table list to filter tables by name.
- **Open a table**: Click any table name to open it in the main view and start querying.
- **View table details**: Click the **Info** tab in the table view to see the table's key schema, status, creation date, and billing mode.

### Creating a Table

1. In the DynamoDB connection panel, click the **New Table** button (or right-click the connection and choose **New Table**).
2. In the Create Table wizard:
   - Enter a **Table Name**.
   - Define the **Partition Key**: enter the attribute name and select the type (String, Number, or Binary).
   - Optionally add a **Sort Key**: enter the attribute name and type.
   - Select the **Billing Mode**: Provisioned or On-Demand.
   - For Provisioned mode, set the **Read Capacity Units (RCU)** and **Write Capacity Units (WCU)**.
3. Click **Create Table**. DocKit creates the table and it appears in the sidebar once it becomes ACTIVE (usually within a few seconds).

### Deleting a Table

1. Right-click the table name in the sidebar and choose **Delete Table**.
2. A confirmation dialog appears showing the table name.
3. Type the table name in the confirmation input to confirm.
4. Click **Delete**. The table is deleted and removed from the sidebar.

**Warning**: Table deletion is irreversible. Export your data before deleting if you need to preserve it.

## Viewing Table Metrics

Click the **Metrics** tab in the table view to see operational data for the selected table.

### Item Count

The **Item Count** shows the total number of items in the table. This value is an estimate provided by DynamoDB, updated approximately every 6 hours. For real-time counts, use a `SELECT COUNT(*)` PartiQL query instead.

### Storage Size

The **Table Size** shows the total storage consumed by the table in bytes (including all items and indexes). This value is also an estimate updated approximately every 6 hours.

### Provisioned Capacity

For tables in **Provisioned** billing mode, DocKit shows:

- **Read Capacity Units (RCU)**: Current provisioned read throughput (reads per second for items up to 4 KB).
- **Write Capacity Units (WCU)**: Current provisioned write throughput (writes per second for items up to 1 KB).
- **Auto-scaling**: Whether read and/or write auto-scaling is enabled, and the current minimum and maximum capacity settings.

### On-Demand Mode

For tables in **On-Demand** billing mode, DocKit confirms the billing mode and notes that capacity scales automatically in response to traffic.

## Index Management

Click the **Indexes** tab in the table view to see all indexes defined on the table.

### Global Secondary Indexes (GSI)

DocKit displays each GSI with:

| Field | Description |
|-------|-------------|
| **Index Name** | The GSI name |
| **Partition Key** | GSI partition key attribute and type |
| **Sort Key** | GSI sort key attribute and type (if defined) |
| **Projection** | ALL, KEYS_ONLY, or INCLUDE |
| **Projected Attributes** | List of included attributes (INCLUDE projection only) |
| **Status** | ACTIVE, CREATING, UPDATING, or DELETING |
| **Item Count** | Approximate number of items in the index |
| **Index Size** | Approximate storage used by the index |
| **RCU / WCU** | Provisioned throughput (Provisioned billing only) |

### Local Secondary Indexes (LSI)

DocKit displays each LSI with:

| Field | Description |
|-------|-------------|
| **Index Name** | The LSI name |
| **Sort Key** | LSI sort key attribute and type |
| **Projection** | ALL, KEYS_ONLY, or INCLUDE |
| **Projected Attributes** | List of included attributes (INCLUDE projection only) |
| **Item Count** | Approximate number of items in the index |
| **Index Size** | Approximate storage used by the index |

**Note**: LSIs share read/write capacity with the base table. They cannot be added or deleted after table creation.

## Capacity Mode Monitoring

The **Capacity** tab (or section within Metrics) shows:

- **Billing Mode**: Provisioned or On-Demand.
- **Last billing mode change**: Timestamp of when the billing mode was last changed.
- **Auto-scaling policies**: For Provisioned tables, shows whether auto-scaling is configured for reads, writes, or both.
- **GSI capacity**: For Provisioned tables, each GSI can have its own RCU/WCU settings shown here.

To change the billing mode or update capacity settings, use the AWS Console or AWS CLI. DocKit currently provides read-only visibility into capacity settings.
