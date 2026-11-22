---
title: Query DynamoDB with Query Builder and PartiQL in DocKit
description: Choose between the DynamoDB visual query builder and PartiQL editor. Query partition keys, page through results, and manage typed item attributes.
---

# Query and edit DynamoDB items

[Connect to DynamoDB or DynamoDB Local](/docs/dockit/connect-to-server#connect-to-dynamodb) and select a table. In the visual builder, fill in key conditions and attribute filters. To write a statement you can save, edit, and run again, open the PartiQL editor.

## Query with the visual builder

1. Choose the target table or index in the editor.
2. Enter a partition key value for a keyed query. If the selected table or index has a sort key, add a sort-key condition to narrow the results.
3. Add extra attribute filters if needed, then run the query. With no partition key value, the builder warns that it will scan. For large tables, start with a key condition when you have one.
4. Use the controls in the result panel to page through the response. DynamoDB applies attribute filters after reading items, so later pages may still have matches even if the current page has only a few.

## Run a PartiQL statement

Open the PartiQL editor. Replace `Orders`, `customerId`, and `example-customer` with your own table, partition key, and key value.

```sql
SELECT * FROM "Orders" WHERE "customerId" = 'example-customer';
```

Choose a template from **Sample Queries** or write a statement yourself. Run the current statement with the play control or `⌘ + Enter` on macOS and `Ctrl + Enter` on Windows and Linux. Use [Query History](/docs/dockit/query-history) to find earlier PartiQL statements and visual queries.

## Create or edit an item

Use **Create Item** to add the required primary key values and choose DynamoDB types for other attributes. For an existing row, select **Edit Item** and change its non-key attributes. The editor has structured inputs for maps, lists, and sets, and accepts Base64 for binary attributes. The create form reports when the primary key already exists.

For indexes, TTL, streams, continuous backups, and capacity metrics, see [DynamoDB table management](/docs/dockit/dynamodb-manage-metrics). For file operations, see [Import & Export](/docs/dockit/import-export).
