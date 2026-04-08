---
title: "DocKit Query History - Save Elasticsearch DynamoDB Queries Automatically"
description: "DocKit automatically saves every Elasticsearch, DynamoDB query you execute. View query history, copy, re-execute, manage past queries. Never lose queries again with automatic local persistence in desktop GUI client."
head:
  - - meta
    - name: keywords
      content: DocKit query history, Elasticsearch query history, DynamoDB query history, query management, DocKit documentation
  - - link
    - rel: canonical
      href: https://www.geekfun.club/docs/dockit/query-history
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/dockit/query-history
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/dockit/query-history
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/dockit/query-history
---

# DocKit Query History

DocKit automatically records every query you execute for Elasticsearch, OpenSearch, and DynamoDB. The query history feature lets you view past queries, copy them to the clipboard, re-execute them, or add them back to the editor — all without any manual saving.

## Overview

Query history is a persistent, local log of all queries executed during your DocKit sessions. Key characteristics:

- **Automatic**: Every executed query is saved without any user action.
- **Local**: History is stored on your machine only — never sent to any server.
- **Capped at 500 entries** per connection to keep performance fast.
- **Per-connection scope**: History for each configured connection is stored separately.
- **Searchable**: Filter history by keyword, path, or date.

## Accessing Query History

To open the query history panel:

1. Open DocKit and connect to an Elasticsearch, OpenSearch, or DynamoDB instance.
2. In the left sidebar or top navigation, click the **History** icon (clock icon).
3. The History panel opens showing a chronological list of past queries, most recent first.

Each entry in the history list displays:
- For Elasticsearch/OpenSearch: **HTTP method badge**, **API path**, **connection name**, and **timestamp**.
- For DynamoDB: **query type** (PartiQL or UI), **table name**, **connection name**, and **timestamp**.

Click any entry to expand it and see the full query body.

## History for Elasticsearch

Every time you press **Cmd/Ctrl + Enter** in the Elasticsearch query editor, the full query is automatically saved. The history record contains:

- **Method**: HTTP method used (GET, POST, PUT, DELETE).
- **Path**: The API path including index name and endpoint (e.g., `my-index/_search`).
- **Body**: The complete QDSL request body.
- **Connection**: The name of the Elasticsearch connection.
- **Executed at**: ISO 8601 timestamp.

**Example saved entry:**

```
POST  my-index/_search  [production-cluster]  2026-03-01 14:22:05
{
  "query": { "match": { "status": "published" } },
  "sort": [{ "created_at": "desc" }],
  "size": 20
}
```

## History for DynamoDB

DocKit records both types of DynamoDB queries:

### PartiQL Queries

When you execute a PartiQL statement in the DynamoDB editor, DocKit saves:

- **Query type**: PartiQL
- **Statement**: The full PartiQL text.
- **Table name**: Extracted automatically from the FROM clause.
- **Connection**: The DynamoDB connection name and region.
- **Executed at**: Timestamp.

### UI Form Queries

When you use the visual query builder (partition key, sort key, filters through the UI), DocKit saves:

- **Query type**: UI
- **Table name**: The queried table.
- **Partition key**: The partition key value used.
- **Sort key condition**: Range, begins_with, or equality condition (if used).
- **Filter expression**: Any additional filter expressions applied.
- **Index**: Primary index or the GSI used.
- **Connection**: The DynamoDB connection and region.
- **Executed at**: Timestamp.

## Copy a Query

To copy a query from history to the clipboard:

1. Find the entry in the history panel.
2. Hover over the entry to reveal the action buttons.
3. Click the **Copy** button (clipboard icon).

For Elasticsearch queries, the copied text includes the HTTP method, path, and body in a format ready to paste into the DocKit editor or any HTTP client. For DynamoDB PartiQL queries, the full statement is copied. For UI queries, the parameters are copied in a readable format.

## Add to Editor

To load a past query into the active editor tab:

1. Find the entry in the history panel.
2. Hover over the entry to reveal the action buttons.
3. Click the **Add to Editor** button.

DocKit populates the active editor with the historical query:
- For Elasticsearch: sets the method, path, and body in the editor.
- For DynamoDB PartiQL: pastes the statement into the PartiQL editor.
- For DynamoDB UI: restores the form fields (partition key, sort key, filters) in the visual query builder.

You can then modify the query before re-executing it. The history entry is not modified when you edit the loaded query.

## Re-execute a Query

To immediately re-run a historical query without editing it:

1. Find the entry in the history panel.
2. Click the **Execute** button (play icon).

DocKit runs the query against the currently active connection and displays the results in the output panel. Note that re-execution uses the **current connection** — if you have switched connections since the original query was run, the query runs against the new connection.

## Delete a History Entry

To remove a single entry from history:

1. Hover over the entry in the history panel.
2. Click the **Delete** button (trash icon).
3. The entry is immediately removed without a confirmation dialog.

## Clear All History

To delete all history entries for the current connection:

1. In the history panel header, click the **Clear All** button (or the ⋯ menu and select **Clear All**).
2. A confirmation dialog appears — confirm to delete all history entries for this connection.

**Note**: Clearing history cannot be undone. History for other connections is not affected.
