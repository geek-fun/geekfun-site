---
title: Browse, Filter, and Edit SQL Table Data in SqlKit
description: Open a table in SqlKit, look up rows, apply a SQL filter, inspect indexes and keys, and export the visible page to CSV.
---

# Browse and edit table data

In **Queries**, select a database and schema, then double-click a table to open its **Data** tab. Use **Schema** to see column types and primary keys. The **Indexes**, **Foreign Keys**, and **Triggers** tabs show metadata where the engine provides it.

## Find rows in a table

- Enter text in the search box to look across columns in the table.
- Use the filter box for a SQL condition such as `status = 'active'`, without the `WHERE` keyword. Press Enter or choose **Apply Filters**. Where search and filtering are available, you can combine the conditions.
- Click a sortable column header to sort the rows already loaded on the current page. For ordering across the full matching result set, put `ORDER BY` in a [SQL query](/docs/sqlkit/query-editor).
- Use the column selector to show or hide columns without changing the table.

## Edit a row

In the row’s **Actions** column, choose **Edit Row**. Check the row and its key before changing any fields, then click **Save**. Your account needs update permission, and the columns you change must be editable. SqlKit uses the primary key to identify the row where one exists. For tables without a primary key, check that the original values uniquely identify the row before writing a change.

## Export the rows you see

The table toolbar's CSV export saves the current page in its displayed order, using the visible columns. To choose rows with SQL, [export a query result](/docs/sqlkit/query-editor#browse-and-export-data). To export selected tables as files, use the [Transfer workspace](/docs/sqlkit/import-export).
