---
title: Data Grid & Table Browser | Filter, Sort, Inspect & Edit Rows | SqlKit
description: Browse large SQL tables with SqlKit's virtual-scrolled data grid. Use full-table search, SQL WHERE filters, column filter chips, row editing, JSON viewer, and CSV/JSON/SQL export.
outline: [2, 3]
---

# Data grid & table browser

Double-click any table in the **Queries** object tree to open it in a tab. Five sub-tabs sit at the bottom (**Data**, **Schema**, **Indexes**, **Foreign Keys**, and **Triggers**), each with a live item count.

<DocsFigure src="/sqlkit-data-view-table-ui.png" alt="SqlKit table data grid showing filter controls, column headers, and row actions" caption="The table grid puts search, SQL WHERE filtering, column toggles, and row actions in one toolbar." :width="3424" :height="2224" />

## Virtual-scrolled grid & layout

Built on `@tanstack/vue-virtual`, the data grid renders only the rows currently in view. Horizontal headers stay pinned while scrolling wide tables, column dividers drag to resize, the column menu toggles individual columns without altering the table, and table views use server-side pagination with configurable page sizes and a total row count badge.

## Search, filter & sort

| Method | Where available | How it works |
| --- | --- | --- |
| Full-table search | Table Data tab | Live debounced search across table columns executed against the database. |
| SQL `WHERE` filter | Table Data tab | Enter any SQL predicate without the `WHERE` keyword (for example, `status = 'active' AND amount > 100`) and press <kbd>Enter</kbd> or click **Apply Filters**. Combines with search. |
| Column filter chips | Query Result grid | Open the column header menu or right-click a cell (**Filter by value** / **Exclude value**) to apply backend filters with `=`, `≠`, `LIKE`, `≥`, `≤`, and `BETWEEN`. Active filters appear as removable chips. |
| Multi-column sorting | Table & Query grids | Click a column header to sort; hold <kbd>Shift</kbd>+click to add secondary sort columns. `JSON`, array, and `BLOB` columns are marked unsortable. |

::: info Page sorting and full-table `ORDER BY`
Clicking a column header in a paginated view sorts within the active grid page. To order across an entire table, add `ORDER BY` in a [SQL editor](/docs/sqlkit/query-editor) query. On Cassandra and ScyllaDB (CQL), the table tab opens as a read-only preview without grid-side filtering, sorting, or pagination; run explicit CQL queries in the editor instead.
:::

## Inspect complex rows & JSON values

Open **Row Details** on any row for a vertical field-by-field view showing each column's data type, `(NULL)` badges, and formatted JSON. Open **JSON Viewer** on a JSON cell for pretty-printed JSON with one-click copy.

## Edit, duplicate & delete rows

You can edit rows in **Table Data** tabs and in single-table `SELECT` query results where SqlKit detects the source table and primary key.

### Edit a single row

1. In the row's **Actions** column (or right-click context menu), choose **Edit Row**.
2. Check the identifying primary key columns (protected in the dialog) and change any editable fields.
3. Use the **Set NULL** checkbox beside nullable fields to distinguish SQL `NULL` from an empty string `""`.
4. Click **Save**. Numeric and boolean fields are validated before execution, and closing the dialog with unsaved edits asks for confirmation.

### Duplicate or delete rows

Choose **Duplicate Row** to open a prefilled insert dialog with an existing row's values so you can adjust keys and save a new record. Choose **Delete Row** to remove one row after confirmation, or select multiple rows via checkboxes to open the **Batch Action Bar** and delete them in one confirmed action.

::: warning Direct execution and tables without primary keys
- Row edits and deletes run immediately when you click **Save** or confirm deletion. SqlKit does not stage edits into a deferred batch queue.
- When a table has a primary key, SqlKit targets the row by primary key. On tables without a primary key, check that the original column values uniquely identify the row before saving or deleting.
- Your database account needs `UPDATE`, `INSERT`, or `DELETE` privileges on the table.
:::

## Copy & quick export

Right-click any cell, use the **Batch Action Bar** for selected rows, or use the grid toolbar to copy or export data (included in Community):

| Action | Formats supported | Scope |
| --- | --- | --- |
| Copy cell value | Plain text | Single focused cell |
| Copy to clipboard | CSV, JSON, SQL `INSERT` | Single row, selected rows, or loaded result |
| Export to file | CSV, JSON, SQL (query grid); CSV (table page) | Selected rows or current visible page/result |

To export full multi-table databases, Excel (`.xlsx`), or JSONL, or to import files back into tables, use the [Bulk Transfer workspace](/docs/sqlkit/import-export) <DocsBadge variant="ultimate">Ultimate</DocsBadge>.

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard title="Schema browser, DDL & ER diagrams" description="Inspect columns, indexes, keys, triggers, visual Create Table, and ER graphs." href="/docs/sqlkit/schema-and-er-diagrams" icon="layers" />
  <DocsCard title="Bulk import & export (Transfer)" description="Export full tables or import CSV, JSONL, SQL, and Excel with column mapping." href="/docs/sqlkit/import-export" badge="Ultimate" badge-variant="ultimate" icon="upload" />
</DocsCardGrid>
