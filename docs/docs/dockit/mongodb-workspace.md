---
title: Query and Edit MongoDB Documents in DocKit
description: Run MongoDB find and aggregation queries in DocKit, inspect nested results, edit or clone documents, and manage collections and indexes.
---

# Query and edit MongoDB documents

[Connect to MongoDB](/docs/dockit/connect-to-server#connect-to-mongodb), choose the target database in the editor toolbar, and open the MongoDB editor. Write a MongoDB statement or start with one of the examples for finding documents, running an aggregation pipeline, or writing data.

## Find and inspect documents

Run a `find` with a small limit to inspect a collection. Replace `orders` with your collection name.

```javascript
db.orders.find({ status: "open" }).limit(20)
```

Run the statement with the play control in the editor gutter, or with `⌘ + Enter` on macOS or `Ctrl + Enter` on Windows and Linux. Use **Table**, **Tree**, or **JSON** in the result panel to inspect scalar values, nested objects, and arrays. If DocKit reports that the result was truncated, narrow the filter or projection before exporting it.

## Add or edit a document

If the results belong to a collection, you can add to it with **Insert Document**. To edit, clone, or delete a returned document, open its row menu. Check the active database and collection and review the document's `_id` before saving changes. Cloning opens a new document for review.

Find earlier commands in [Query History](/docs/dockit/query-history). The result toolbar can copy or export the rows you got back. For files covering a collection, go to [Import & Export](/docs/dockit/import-export#mongodb-support).

## Manage collections and indexes

Open **Manage**, select a database, and inspect its collections, indexes, and storage statistics. Collection actions include creating, renaming, cloning, emptying, and dropping. **Empty Collection** removes documents from the selected collection. **Drop Collection** removes the collection itself. The Manage workspace requires Ultimate and your MongoDB account must have the relevant privileges.
