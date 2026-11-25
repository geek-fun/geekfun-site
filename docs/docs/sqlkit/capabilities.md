---
title: SqlKit Capabilities | SQL, Data, AI, and MCP
description: See how SqlKit connects to databases, runs SQL, visualizes schemas, edits and transfers data, and gives coding agents access through MCP.
---

# SqlKit capabilities

Use SqlKit to inspect a database, run and save SQL, edit rows, and move data between a database and files. This guide shows where each task starts in the desktop app and what you need to use it.

<div class="docs-section-links">

- [Install SqlKit](/docs/sqlkit/installation)
- [Check database support](/docs/sqlkit/supported-databases)
- [Compare plans](/pricing)

</div>

## Connect to a database {#connections}

In **Connections → Add New Connection**, choose the database type and enter its address or local file path. Test the connection before saving it. Oracle and other JDBC profiles use a Java runtime and a database-specific driver. SqlKit checks for them when you test the connection.

For remote servers, set TLS in the connection editor. With Ultimate, you can also attach a reusable SSH profile or chain several bastions. The last bastion must be able to reach the database address in the connection form.

[Add and test a connection](/docs/sqlkit/connect-to-database) · [Set up an SSH tunnel](/docs/sqlkit/ssh-tunnel)

<DocsFigure src="/sqlkit-client-ui.png" alt="SqlKit Connections workspace with saved database profiles" caption="Use the controls on a saved connection card to connect or edit the profile." :width="3424" :height="2224" />

## Write SQL and inspect execution plans {#query}

In **Queries**, check the active connection and database before opening a query tab. Use metadata suggestions to fill in table and column names. Run the whole script, the selection, or the statement at the cursor. Results appear below the editor, where you can export the returned rows as CSV or JSON.

Use **Explain** on supported databases to see the query plan. **Explain Analyze**, where available, executes the statement to collect timings. Save useful queries as `.sql` files or star earlier runs in **History** and reopen them in the editor.

[Run a query and inspect the result](/docs/sqlkit/query-editor) · [Keyboard shortcuts](/docs/sqlkit/keyboard-shortcuts)

<DocsFigure src="/sqlkit-sql-editor-ui.png" alt="SqlKit object tree, SQL editor, and results grid in the same workspace" caption="The object tree, SQL editor, and result grid stay in view while you work on a query." :width="3424" :height="2224" />

## Explore schemas and relationships {#schema}

Use the object tree to navigate databases, schemas, tables, and views your connection can see. Open a table's **View Structure** tab to inspect columns, keys, and indexes.

With Ultimate, choose **Show ER Diagram** from the database or schema menu to trace foreign-key relationships. Double-click a table in the diagram to open it in the data grid. The relationships come from foreign keys reported by the database.

[Browse table structure](/docs/sqlkit/table-browser)

<DocsFigure src="/sqlkit-er-diagram-ui.png" alt="SqlKit ER diagram showing tables, columns, and foreign-key links" caption="An ER diagram shows the links reported by the connected database and provides another way to open a table." :width="3424" :height="2224" />

## Browse, edit, and transfer data {#data}

Double-click a table to open its rows in a separate tab. On supported engines, filters and sorting help you narrow the results. Use **Edit Row** to update a row, after checking the values that identify it and confirming that your account can write to the table.

Use **Transfer** in Ultimate when you need to import a file or export tables. For a CSV import, preview the source, map its columns to the destination table, then check the job result. For a query you already ran, use the result grid’s CSV or JSON export.

[Browse and edit rows](/docs/sqlkit/table-browser) · [Import and export files](/docs/sqlkit/import-export)

<DocsFigure src="/sqlkit-data-view-table-ui.png" alt="SqlKit table grid with filter controls and row actions" caption="The table grid keeps filters and row actions next to the data you are inspecting." :width="3424" :height="2224" />

## Use AI inside SqlKit {#ai}

Agentic Data Studio is part of SqlKit Ultimate. Configure your own model provider or a local endpoint, then open the assistant in the app. Ask it to explain a query or draft one using the connected schema. For example, ask it to find which date column should drive a monthly report, then review the generated SQL in the editor.

[Set up Agentic Data Studio](/docs/sqlkit/agentic-datastudio)

<DocsFigure src="/sqlkit-data-studio-ui.png" alt="SqlKit Agentic Data Studio showing schema context and generated SQL" caption="The assistant uses database context to draft SQL you can review and run in the editor." :width="1440" :height="935" />

## Give a coding agent access through MCP {#mcp}

With Ultimate, enable **Settings → MCP Bridge**, then register [Data Studio Agent](/docs/data-studio-agent/quick-start) in your coding client. The local bridge gives the agent access to the SqlKit connections you permit.

Start with **Read** permissions for schema inspection and read queries. For example, ask Codex to list tables on a PostgreSQL connection before asking it to check a specific record. Review per-connection permissions before allowing writes. The database account still determines the operations the connection can perform.

[Set up the MCP Bridge](/docs/sqlkit/mcp-bridge) · [Configure AI permissions](/docs/sqlkit/ai-permissions)

## Check database and plan requirements {#requirements}

- **Engine and driver.** Connection support tells you whether SqlKit can connect. Explain plans, editable rows, and schema objects depend on the database, driver, and account permissions. Cassandra and ScyllaDB use CQL and provide a table preview.
- **Community.** Connect to a database, browse objects, run and save SQL, and export query results as CSV or JSON.
- **Ultimate.** Adds SSH tunnels, ER diagrams, the Transfer workspace, Agentic Data Studio, and the MCP Bridge. See the [plan comparison](/pricing) for details.
