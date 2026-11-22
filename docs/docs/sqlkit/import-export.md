---
title: Import and Export CSV, JSONL, SQL, and Excel in SqlKit
description: Use the SqlKit Transfer workspace to import a file, map columns to a target table, export table data, and check the result of a job.
---

# Import and export database files

With SqlKit Ultimate, you can use **Transfer** to import or export CSV, JSONL, SQL, and Excel (`.xlsx`) files. If you’ve already run a query and only need the rows it returned, use [query result export](/docs/sqlkit/query-editor#browse-and-export-data) to save them as CSV or JSON.

## Import a CSV into an existing table

1. Open **Transfer → Import** and browse for the CSV file. Check the detected columns and preview. If the header row or delimiter is wrong, check the source file before continuing.
2. In **Target & Mapping**, select the connection, database, schema where applicable, and table. Match each source column to a destination column. Use **Auto-Map** to match by name and check the matches.
3. Review the import options and run the import. Before retrying, check how many rows the import processed and which errors it reported. If it may have written some batches, check the target table before you run it again.

For SQL files, examine the script before importing. The statements run against the selected destination using its SQL dialect and your database permissions.

## Export table data to a file

1. Open **Transfer → Export** and select a connection. Choose the export scope and the source tables or database as required.
2. Choose CSV for a flat table, JSONL for one object per line, Excel for a spreadsheet, or SQL for a script. For SQL output, review the options for including table creation and drop statements.
3. Select an output path and click **Start Export**. Check the task result and open the written file to confirm it contains the intended data.
