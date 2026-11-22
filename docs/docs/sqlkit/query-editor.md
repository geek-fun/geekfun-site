---
title: Use the SqlKit SQL Editor | Run Queries and Export Results
description: Run your first SQL query in SqlKit, execute a selection or script, browse table data, save a SQL file, and export query results to CSV or JSON.
---

# Use the SqlKit SQL editor

Open **Queries** after [connecting to a database](/docs/sqlkit/connect-to-database). The sidebar lets you choose a connection, database, and schema where applicable. Double-click a table in the object tree to open its data in a separate tab.

## Run your first query

1. Select **New Query** and check the connection and database shown on the editor toolbar.
2. Enter a read-only test query.

   ```sql
   SELECT 1 AS connection_check;
   ```

   On Oracle, use `SELECT 1 AS connection_check FROM dual;`.

3. Click **Execute** to run the contents of the editor. To run only selected SQL, highlight it and press `⌘ + Enter` on macOS or `Ctrl + Enter` on Windows or Linux. With no selection, the shortcut runs the statement at the cursor.
4. Check for the value `1` in the results panel.

## Browse and export data

- Open a table from the sidebar to browse its rows. Choose **View Structure** from the table menu to inspect its definition.
- Use the result panel's export controls to save the returned rows as CSV or JSON. Any `LIMIT`, `TOP`, or other row limit also applies to the export.
- See the [table browser](/docs/sqlkit/table-browser) for filters, row edits, and table structure. To export selected tables without writing a query, use the [Transfer workspace](/docs/sqlkit/import-export).

## Save SQL and inspect query plans

- Save the SQL to a `.sql` file with `⌘ + S` or `Ctrl + S`. Reopen saved files from **Saved Queries** in the sidebar.
- Use **Format SQL** to format the editor contents. The [keyboard shortcuts](/docs/sqlkit/keyboard-shortcuts) page lists the keys for formatting, commenting, and suggestions.
- Use **Explain** for a query plan on supported engines. Where available, **Analyze** runs the query to collect actual timings. Use a read-only statement when exploring plans.

## Find and reuse a previous query

Open **History** and search by SQL text, connection, or database. Use the status filter to find failed or successful runs, and star the entries you want to keep. **Clear Non-Favorites** leaves starred entries in history.

Rerun loads the earlier statement into the editor. Check the tab’s connection and database before clicking **Execute**, especially if you’ve removed the original connection.
