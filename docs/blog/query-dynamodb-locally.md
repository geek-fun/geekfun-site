---
title: Access and Manage Local DynamoDB with DocKit
description: Learn how to connect DocKit to DynamoDB Local, query tables with the Visual Query Builder or PartiQL editor, manage tables with the Management Panel, and import/export data for local development.
head:
  - - meta
    - name: keywords
      content: DynamoDB Local GUI, manage DynamoDB Local, DocKit DynamoDB Local, DynamoDB Local import export, DynamoDB Local table management, DynamoDB Local GUI client, access DynamoDB locally, offline DynamoDB development, DocKit DynamoDB, PartiQL DynamoDB Local
  - - link
    - rel: canonical
      href: https://www.geekfun.club/blog/query-dynamodb-locally
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/query-dynamodb-locally
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/query-dynamodb-locally
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/query-dynamodb-locally
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Access and Manage Local DynamoDB with DocKit",
        "description": "Learn how to connect DocKit to DynamoDB Local, query tables with the Visual Query Builder or PartiQL editor, manage tables with the Management Panel, and import/export data for local development.",
        "image": "https://www.geekfun.club/dockit-connection-dynamodblocal.png",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.geekfun.club/geekfun.png"
          }
        },
        "datePublished": "2025-03-04",
        "dateModified": "2026-05-05",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.geekfun.club/blog/query-dynamodb-locally"
        },
        "keywords": ["DynamoDB Local", "DynamoDB Local GUI", "DocKit", "manage DynamoDB Local", "import export DynamoDB", "DynamoDB Local table management", "local development"],
        "articleSection": "Database Development"
      }
---

# Access and Manage Local DynamoDB with DocKit

**DynamoDB Local** gives you a zero-cost local DynamoDB endpoint — no AWS account, no latency, no billing surprises. But managing it through the CLI means staring at raw JSON output, manually constructing queries, and retyping `--endpoint-url` on every command. **DocKit** replaces all of that with a native desktop interface for browsing tables, writing PartiQL, and inspecting data inline. This post covers how it works end to end.


## Quick Start: Connect DocKit to DynamoDB Local

Once DynamoDB Local is running, connect to it in DocKit:

![DocKit DynamoDB Local connection screen](/dockit-connection-dynamodblocal.png)

1. Open DocKit
2. Click the bottom-right **+** icon and select DynamoDB to add a connection
3. Enter your desired connection name (e.g. `my-dynamodb-local`), then click the **Local** tab for a DynamoDB Local connection
4. Endpoint: `http://localhost:8000` by default — update it depending on your local server setup
5. DocKit loads all tables on the server, but you can choose whether to work with all tables or only the ones you care about
6. Click **Confirm** — you're ready to query. ✅


See **[How to Set Up DynamoDB Local for Local Development](/blog/setup-dynamodb-local)** for the full environment setup guide.

## Querying DynamoDB Local with DocKit

DocKit provides both a Visual Query Builder and a PartiQL editor. The Visual Query Builder lets you access DynamoDB data interactively — a much better experience for anyone not familiar with CLI or SQL, or who simply doesn't want to touch it (fair enough). For those who are especially comfortable with SQL — DBAs in particular — the PartiQL editor offers intelligent autocomplete and a clean result table with automatic pagination.

There is no right answer for which to pick; it's all about what feels natural.

### Visual Query Builder

![DocKit DynamoDB Visual Query Builder screenshot](/dockit-dynamodb-visual-query-builder.png)


### PartiQL Editor

DocKit's PartiQL editor works identically with local and cloud DynamoDB:

![DocKit DynamoDB PartiQL Editor screenshot](/dockit-dynamodb-sql-editor.png)

Common editor shortcuts (`Cmd+Enter` to execute, `Cmd+I` to format, `Cmd+Space` for autocomplete) work here too. See the [full shortcuts reference](/docs/dockit/shortcut) for all available keybindings.


## Managing DynamoDB Local with DocKit

Once connected, DocKit gives you a full management UI for your local DynamoDB — no CLI required for day-to-day tasks.

### Table Management Panel

The Management Panel toolbar lets you view and manage all tables on your local instance at a glance:

![DocKit DynamoDB Manage panel for local screenshot](/dockit-dynamodb-manage-local.png)

- **Browse tables** — see all tables with their key schema, billing mode, and item count
- **Create tables** — define partition key, sort key, and GSIs through a guided form; no JSON or CLI flags needed
- **Delete tables** — right-click any table to drop it instantly
- **Describe table** — inspect full metadata, attribute definitions, and index configuration inline

### Import & Export Data

Teams frequently write ad-hoc seed scripts for local DynamoDB — scripts that live in someone's local directory, break when environments change, and nobody else can reproduce. DocKit's import/export panel handles table backup, environment migration, and test fixture sharing directly from the GUI.

![DocKit DynamoDB Import Export Data screenshot](/dockit-dynamodb-import-export.png)

**Export data from local DynamoDB:**

1. Open the Import/Export panel by clicking the **Import/Export** icon in the nav bar
2. Select **Export** — it will redirect you to the export panel
3. Follow the step-by-step guide to select source connection and table, Schema & Structure, and Target & Output including export file type and location
4. Click **Start Export** to begin the task — you can view all running import/export tasks and history in Task Manager

The exported data can easily be imported into any target DynamoDB table.

**Import data into local DynamoDB:**

1. In the same Import/Export panel, click **Import**
2. Follow the guide to select your Target & Output connection and DynamoDB table
3. Upload the schema (only required when importing and creating a new table at the same time) and data file
4. Click **Start Import** to begin the task

### Browsing and Editing Data

DocKit renders items as a formatted table with inline JSON expansion — easier to spot data shape issues than raw CLI output:

![DocKit DynamoDB Modify Item screenshot](/dockit-dynamodb-edit-item.png)

- **Inline edit** — double-click any field to update it in place
- **Delete items** — select one or more rows and delete with a single click
- **Copy as JSON** — copy any item to clipboard for use in tests or docs


## Differences: Local vs. Cloud DynamoDB

### Features NOT Available Locally

❌ **DynamoDB Streams**: No stream processing
❌ **Global Tables**: Multi-region replication
❌ **Point-in-Time Recovery**: Backups
❌ **Auto Scaling**: Capacity management
❌ **CloudWatch Metrics**: Monitoring
❌ **IAM Authentication**: Always uses fake credentials

### Behavior Differences

⚠️ **Eventual Consistency**: Local is always strongly consistent
⚠️ **Capacity Units**: Ignored (no throttling)
⚠️ **Data Persistence**: Depends on configuration (in-memory vs. file)

**Recommendation:** Use local for 99% of development, test production behavior in staging.



## Summary

DynamoDB Local on its own is just an endpoint. DocKit makes it feel like a real development environment. Query with the visual builder or PartiQL, seed data through import/export, inspect schemas without hunting through CLI output — all in one desktop app.

If you haven't set up DynamoDB Local yet, start with **[How to Set Up DynamoDB Local for Local Development](/blog/setup-dynamodb-local)**. Once it's running, [download DocKit](/download) and connect in under a minute.

## Learn More

- **[How to Set Up DynamoDB Local for Local Development](/blog/setup-dynamodb-local)** — Full local environment setup guide
- **[Managing your DynamoDB tables with DocKit](/blog/dynamodb-gui-client)** — DocKit DynamoDB feature overview
- **[Download DocKit](/download)** — Get started

*Last updated: May 2026*
