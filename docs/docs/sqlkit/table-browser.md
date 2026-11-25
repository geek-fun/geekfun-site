---
title: Data Grid & Table Browser | Filter, Sort, Inspect & Edit Rows | SqlKit
description: Browse large SQL tables with SqlKit's virtual-scrolled data grid. Use full-table search, SQL WHERE filters, column filter chips, row editing, JSON viewer, and CSV/JSON/SQL export.
outline: [2, 3]
---

# Data grid & table browser

Double-click any table in the **Queries** object tree to open it in a dedicated tab. Every table tab gives you five views at the bottom—**Data**, **Schema**, **Indexes**, **Foreign Keys**, and **Triggers**—along with live item counts.

<DocsFigure src="/sqlkit-data-view-table-ui.png" alt="SqlKit table data grid showing filter controls, column headers, and row actions" caption="The virtual-scrolled table grid keeps search, SQL WHERE filtering, column toggles, and row actions within reach." :width="3424" :height="2224" />

## Virtual-scrolled grid & layout

Powered by `@tanstack/vue-virtual`, the data grid renders only visible rows so large pages stay responsive:

- **Sticky horizontal headers** stay aligned while scrolling wide tables.
- **Draggable column resizing**: drag any column divider to adjust width.
- **Column visibility selector**: toggle individual columns on or off without altering the underlying table.
- **Server-side pagination** (table view): adjust page size and view the total row count badge.

## Search, filter & sort

SqlKit provides three complementary ways to narrow down rows depending on whether you are in a **Table Data** tab or a **Query Result** tab:

| Method | Where available | How it works |
| --- | --- | --- |
| **Full-table search** | Table Data tab | Live debounced search across table columns executed against the database. |
| **SQL `WHERE` filter** | Table Data tab | Enter any SQL predicate without the `WHERE` keyword (e.g., `status = 'active' AND amount > 100`) and press <kbd>Enter</kbd> or click **Apply Filters**. Can be combined with search. |
| **Column filter chips** | Query Result grid | Open the column header menu or right-click a cell (**Filter by value** / **Exclude value**) to apply backend filters with `=`, `≠`, `LIKE`, `≥`, `≤`, and `BETWEEN`. Active filters appear as removable colored chips. |
| **Multi-column sorting** | Table & Query grids | Click a column header to sort; hold <kbd>Shift</kbd>+click to add secondary sort columns. Complex columns (`JSON`, arrays, `BLOB`) are safely marked unsortable. |

::: info Table sorting vs. full-table `ORDER BY`
Clicking a column header in a paginated view sorts within the active grid context; to guarantee global ordering across millions of rows, add `ORDER BY` in a [SQL editor](/docs/sqlkit/query-editor) query. For **Cassandra and ScyllaDB (CQL)**, the table tab provides a read-only preview without grid-side filter/sort/paging—filter using CQL partition keys in the editor.
:::

## Inspect complex rows & JSON values

- **Row Details dialog**: open a vertical field-by-field inspector for any row showing each column's data type, explicit `(NULL)` badges, and formatted JSON values.
- **JSON Viewer dialog**: inspect nested JSON documents with pretty-printing and one-click **Copy**.

## Edit, duplicate & delete rows

SqlKit supports safe, validated row mutations both in **Table Data** tabs and in **single-table `SELECT` query results** (SqlKit automatically runs SQL editability analysis to identify the source table and primary key).

### Edit a single row

1. In the row's **Actions** column (or right-click context menu), choose **Edit Row**.
2. Inspect the identifying primary key columns (protected in the dialog) and update any editable fields.
3. Use the explicit **Set NULL** checkbox beside nullable fields to distinguish SQL `NULL` from an empty string `""`.
4. Click **Save**. Numeric and boolean fields are validated before execution, and closing the dialog with unsaved edits prompts for confirmation.

### Duplicate or delete rows

- **Duplicate Row**: pre-fills the Edit/Insert dialog with an existing row's values so you can adjust keys and save a new record quickly.
- **Delete Row**: removes a single row after a destructive confirmation prompt.
- **Batch Delete**: select multiple rows via checkboxes to reveal the **Batch Action Bar**, then delete all selected rows in one confirmed action.

::: warning Direct execution & tables without primary keys
- Row edits and deletes execute **immediately** when you click **Save** or confirm deletion—SqlKit does not queue staged edits for a separate batch commit.
- When a table has a primary key, SqlKit targets the row strictly by its primary key. On tables **without a primary key**, verify that the original column values uniquely identify the intended row before saving or deleting.
- Your database account must hold `UPDATE`, `INSERT`, or `DELETE` privileges on the target table.
:::

## Copy & quick export

Right-click any cell, use the **Batch Action Bar** for selected rows, or use the grid toolbar to copy or export data (available in **Community**):

| Action | Formats supported | Scope |
| --- | --- | --- |
| **Copy cell value** | Plain text | Single focused cell |
| **Copy to clipboard** | **CSV**, **JSON**, **SQL `INSERT`** | Single row, selected rows, or entire loaded result |
| **Export to file** | **CSV**, **JSON**, **SQL** (query grid) · **CSV** (table page) | Selected rows or current visible page / result |

Need to export full multi-table databases, Excel (`.xlsx`), or JSONL, or import files back into tables? Use the [Bulk Transfer workspace](/docs/sqlkit/import-export) <DocsBadge variant="ultimate">Ultimate</DocsBadge>.

## Next steps

<DocsCardGrid :cols="2">
  <DocsCard title="Schema browser, DDL & ER diagrams" description="Inspect columns, indexes, keys, triggers, visual Create Table, and ER graphs." href="/docs/sqlkit/schema-and-er-diagrams" icon="layers" />
  <DocsCard title="Bulk import & export (Transfer)" description="Export full tables or import CSV, JSONL, SQL, and Excel with column mapping." href="/docs/sqlkit/import-export" badge="Ultimate" badge-variant="ultimate" icon="upload" />
</DocsCardGrid>
