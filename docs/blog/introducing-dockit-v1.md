---
title: DocKit 1.0 - The NoSQL desktop client developers deserved
description: DocKit v1.0 ships after 970+ commits, 244 merged PRs, 132 resolved issues, 70 releases, and 1,000+ GitHub stars. A complete re-introduction of the AI-native NoSQL desktop client covering every feature built from scratch to the first stable release.
head:
  - - meta
    - name: keywords
      content: DocKit 1.0, DocKit introduction, AI-native NoSQL GUI, DynamoDB desktop client, Elasticsearch GUI, OpenSearch GUI, NoSQL database tool, Kibana alternative, open source database client, PartiQL editor, AI database assistant, Tauri desktop app
  - - link
    - rel: canonical
      href: https://www.geekfun.club/blog/introducing-dockit-v1
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/introducing-dockit-v1
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/introducing-dockit-v1
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/introducing-dockit-v1
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "DocKit 1.0 - The NoSQL desktop client developers deserved",
        "description": "DocKit v1.0 ships after 970+ commits, 244 merged PRs, 132 resolved issues, 70 releases, and 1,000+ GitHub stars. A complete introduction to every feature built from scratch.",
        "image": "https://www.geekfun.club/dockit-client-ui.png",
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
        "datePublished": "2026-05-10",
        "dateModified": "2026-05-10",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.geekfun.club/blog/introducing-dockit-v1"
        },
        "keywords": ["DocKit", "NoSQL GUI", "Elasticsearch client", "DynamoDB tool", "AI database assistant", "open source", "Tauri"],
        "articleSection": "Product Releases"
      }
---

# DocKit 1.0 - The NoSQL desktop client developers deserved

> 970 commits. 244 merged pull requests. 132 resolved issues. 70 releases. 1,091 GitHub stars.

After 2 years and 10 months, DocKit ships its first stable release. It started as a simple Elasticsearch query editor. Now it manages DynamoDB, Elasticsearch, and OpenSearch from a single native desktop app. If you never heard of DocKit, now's the time.

![DocKit UI](/public/dockit-client-ui.png)

## The frustration before DocKit

Browser-based NoSQL tools share the same structural problems: bloat, state loss, and client lock-in. Kibana, OpenSearch Dashboards, the AWS Console — different logos, same pain points.

**Bloat by default.** These tools are built as full platforms: dashboards, monitoring, alerting, visualization engines. But most of the time you just need to run queries. Kibana/OpenSearch Dashboards costs you a container, 30+ seconds and 500MB of RAM before you've typed a single line. Its autocomplete alone spikes CPU across every warm node in the cluster.

**Disappearing queries.** Browser-based tools don't hold state the way a desktop app does. Open a Kibana dashboard in a new tab and your filters vanish ([#188914](https://github.com/elastic/kibana/issues/188914), still open). Step away for a few minutes and the session expires — back to login, everything gone ([#106235](https://github.com/elastic/kibana/issues/106235), also still open). The AWS Console does the same: session refreshes mid-workflow and wipes your form. You didn't forget to save. The tool forgot for you.

**Locked-in client.** Each web UI is bound to a single backend. Case like Kibana/OpenSearch Dashboards requires one Elasticsearch cluster per instance and decide as long-standing goal(see [#25183](https://github.com/elastic/kibana/issues/25183)). The AWS Console locks you to DynamoDB in a single tab with a ticking session timer. all of this creates the same pain: staging and production means two instances, two logins. Different database? Different tool. Every backend is another client running on your machine.

We wanted NoSQL clients to work the way RDBMS clients do: decoupled from the server, managing multiple engines and clusters in one place, persisting queries and history to the filesystem instead of relying on fragile browser state. So we built DocKit — a native desktop app on Tauri that does exactly that.

## What DocKit changes

### Natural language to database queries

The AI assistant understands your database structure, so the queries it generates actually work. Describe what you need:

![DocKit AI assistant screenshort](/public/dockit-ai-assistant.png)

- "Find users who signed up in the last 7 days with unverified email"
- "Aggregate sales by product category for Q1 2026"
- "Show me the top 10 slowest queries from the last hour"

You get a query that runs. DynamoDB PartiQL or Elasticsearch DSL, with the right field names, correct operators, and proper syntax. OpenAI and DeepSeek are built in. You bring your API key. Your queries stay on your machine.

### VS Code-grade editing for databases

Monaco — the same engine inside VS Code — powers the editor. Syntax highlighting, intelligent autocomplete, multi-cursor editing, bracket matching, every keyboard shortcut you know. Plus:

![DocKit editor screenshort](/public/dockit-dynamodb-manage-local.png)

Grammar-driven completion covers Elasticsearch, OpenSearch, and DynamoDB — 37 test cases across API versions from 0.90 to 9.x. ES|QL autocomplete with sources, commands, and function suggestions. A query language registry so SQL, PPL, EQL, DSL, and PartiQL all share the same completion engine. Body completion for field mappings, index settings, and component templates. JSON5 support: inline comments, trailing commas, unquoted keys. Write queries the way you think, not the way the parser insists. Ctrl+D on any API endpoint opens the exact documentation page for that operation, version-matched to your cluster.

### Queries and connections, persistently saved

No save button. No config. DocKit keeps your database connections and records every query you run, across every engine, automatically. 500 entries per connection, stored locally.

![DocKit query history screenshort](/public/dockit-query-history.png)

Each entry captures the method, path, connection name, and timestamp (Elasticsearch/OpenSearch) or query type, table, and timestamp (DynamoDB). Keyboard navigation through history. Copy to clipboard. Load back into the editor. Re-execute. Covers PartiQL statements, Elasticsearch DSL queries, and visual form queries.

### Fast streaming import and export

JSON, CSV, JSONL. Batch operations through millions of records. Move data between clusters, back up tables for development, seed test environments. Works across Elasticsearch, OpenSearch, and DynamoDB.
![DocKit data import export panel screenshort](/public/dockit-dynamodb-import-export.png)

### One tool, multiple engines

DynamoDB, Elasticsearch, OpenSearch — same editor, same shortcuts. Switch between them instantly.

For DynamoDB, you get a visual query builder with primary key filtering and advanced conditions. A PartiQL editor with full autocomplete, syntax highlighting, document formatting, and gutter execution. Inline editing — update and delete items directly from results. Table management with GSI/LSI operations and CloudWatch metrics. DynamoDB Local for offline development. SSO and AssumeRole for cross-account AWS authentication.

For Elasticsearch and OpenSearch, you get Monaco-backed editing with grammar-driven completion (37 test cases, v0.90 to 9.x), plus full cluster management: node health, shard state, index operations, alias control — all visual, no `_cat` curling. Column sorting, system index filtering.

### Local-first, privacy by design

DocKit is local-first. Connections, queries, and history live on your filesystem. Credentials are encrypted by your OS keychain (macOS Keychain, Windows Credential Manager, Linux libsecret). Zero telemetry. No cloud sync, no phoning home. No internet connection required — it works fully offline. Apache 2.0 licensed. No feature gating.

### Cross-platform — macOS, Windows, Linux

Built on Tauri v2. Not Electron. The macOS installer is under 10MB. Tauri uses the OS-native webview: WebKit on macOS, WebView2 on Windows, WebKitGTK on Linux. No bundled browser engine.

| Platform | Installer |
|----------|-----------|
| macOS (Universal: Apple Silicon + Intel) | `.dmg`, ~8MB |
| Windows (x64) | `.exe` installer |
| Linux | `.AppImage`, `.deb` |

## How we got here

### 2023: Foundation

![Foundation — repo bootstrap and first features](/public/screenshots/milestone-foundation.png)

**July 22, 2023.** First commit. A `package.json`, a LICENSE file, a README. Built on Electron.

**August 2023.** Monaco Editor integrated as the query editor core. Basic connection management for Elasticsearch: add, test, delete. Syntax highlighting and code completion for the search DSL arrived.

**January 2024.** Query execution went live: GET, POST, PUT, DELETE against Elasticsearch endpoints. OpenSearch auth support shipped the same month. Auto-update mechanism landed. First public release in February.

### 2024: Platform shift

![Platform shift — Electron removed, Tauri v1 in place](/public/screenshots/milestone-platform.png)

**April 2024.** OpenAI integration shipped. That was when things changed. Instead of just autocomplete, DocKit could take natural language and produce contextually accurate queries — an assistant that actually understood Elasticsearch DSL, not a chatbot bolted to the sidebar.

**June 29, 2024.** Electron → Tauri v1 migration. A full rewrite. Electron's Chromium dependency meant 150MB+ installers. Tauri uses the OS-native webview, so the installer drops under 20MB. The migration touched everything: Rust backend replacing the Node.js main process, new IPC architecture, new build pipeline.

**Summer 2024.** Cluster management shipped. Node health, shard state, index management, alias control — all visual, faster than curling `_cat` endpoints. Query DSL auto-completion in September. Import/export (JSON, CSV) in November.

**December 26, 2024.** DynamoDB support began. DocKit stopped being just an Elasticsearch tool. The DynamoDB integration grew into a full subsystem over the next six months.

### 2025: Expansion

![Expansion — Tauri v2, multi-lang, DynamoDB UI](/public/screenshots/milestone-expansion.png)

**March 30, 2025.** Tauri v1 → Tauri v2 upgrade. Tauri v2 added mobile support, a pluggable permission system, and IPC improvements. Every Tauri plugin was touched. The entire Rust layer adapted.

**April 2025.** DeepSeek joined OpenAI. Developers could pick their AI provider. DynamoDB visual query builder shipped the same month — scan and query tables without writing a line of code.

**July 2025.** v0.7.0: Multi-language support (English + Chinese), DynamoDB pagination, dependencies updated across the board.

### 2026: Maturation

![Maturation — query history, ES|QL, v1.0 polish](/public/screenshots/milestone-maturation.png)

**January 2026.** The busiest month in the project's history. PartiQL Editor with syntax highlighting and formatting. A grammar-driven completion engine for Elasticsearch and OpenSearch — 37 test cases covering every API version from 0.90 to 9.x. DynamoDB CRUD: create, update, delete items inline. Real-time syntax validation with error highlighting. Connection loading modals. All in 31 days.

**January 13, 2026.** v0.8.0. The DynamoDB subsystem is now a product in its own right: visual query builder, PartiQL editor with gutter execution, unified toolbar, schema-aware export, metadata-validated import, DynamoDB Manage panel with GSI operations and CloudWatch metrics.

**February 28, 2026.** Naive UI → shadcn-vue + UnoCSS migration. 1,200+ lines changed across 60+ Vue components. Naive UI out, shadcn-vue (Radix Vue primitives) and UnoCSS in. Cleaner design, better accessibility, lighter bundle.

**March 3, 2026.** v0.9.0. Query history: 500 entries per connection, automatic, local-only. DynamoDB Local endpoint support for offline development. PartiQL document formatting. Official Tauri updater plugin. The 0.9.x rapid release cycle starts here.

**March–April 2026.** Ten patch releases in eight weeks: Elasticsearch API Key auth, connection cloning, query parameter autocomplete, connection sorting and filtering, keyboard navigation for history view, DynamoDB SSO and AssumeRole, a rebuilt Data Studio AI agent with streaming LLM responses, and the final pieces of the shadcn-vue migration. Twenty releases in the 0.9 line.

### Stable release

![v1.0 Release — keyboard navigation, UX polish, README refresh](/public/screenshots/milestone-v1release.png)

The label flipped from `0.x` to `1.0`. ES|QL query completion landed alongside a unified query language registry — SQL, PPL, EQL, DSL, and PartiQL now share the same completion engine. Body completion handles index settings and component templates. Column sorting hit the Manage panel.

After two years and 130-odd resolved issues, this is the point where DocKit says: this works, use it. No beta disclaimers.

## What's next

MongoDB is in active development. Connection management and query execution are merged into main. Azure Cosmos DB is coming.

That cadence doesn't stop just because the number starts with 1.

---

DocKit is Apache 2.0. The open-source release is fully functional — no feature gating, no sign-up walls. If it's in the repo, you get the binary.

[Download DocKit 1.0](/products/dockit/) for macOS, Windows, or Linux.

[View on GitHub](https://github.com/geek-fun/dockit).

[Read the full changelog](https://github.com/geek-fun/dockit/blob/main/CHANGELOG.md).
