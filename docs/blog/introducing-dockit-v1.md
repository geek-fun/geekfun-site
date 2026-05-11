---
title: Introducing DocKit v1.0 — The First Stable Release of the AI-Native NoSQL Desktop Client
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
        "headline": "Introducing DocKit v1.0 — The First Stable Release of the AI-Native NoSQL Desktop Client",
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

# Introducing DocKit v1.0

> 970 commits. 244 merged pull requests. 132 resolved issues. 70 releases. 1,091 GitHub stars.

After 2 years and 10 months, DocKit ships its first stable release. A project that started as a simple Elasticsearch query editor is now a full NoSQL desktop platform. If you never heard of DocKit, now's the time.

![DocKit UI](/public/dockit-client-ui.png)

## The frustration before DocKit

Every developer who works with Elasticsearch knows the Kibana problem. Open it, wait 30 seconds for the container, burn 500MB of RAM, fight a browser tab that forgets your scroll position every time you switch windows. Kibana's visualizations are great. As a daily query editor, it's painful. The autocomplete alone has been known to send 20 serial requests to the cluster, spiking CPU across every warm node — one developer on the Kibana GitHub issues called it "100% CPU across all my warm nodes." The server alone takes five minutes to start after `yarn start`.

OpenSearch Dashboards isn't much better. In 2024, a user reported on the OpenSearch GitHub that "incredibly slow dashboards" made the UI "completely unresponsive" — autocomplete was hitting `GET */_mapping` on every keystroke, taking 30 seconds per request. "Production environments with large indices become unusable," another wrote. "We've had to disable dev tools as a workaround."

And DynamoDB? The AWS Console works for quick checks. Try debugging a production issue through it. You get a single tab: want to compare two tables? Hope you enjoy the back button. The PartiQL results show nested data as a long JSON string, not something you can actually read. As one developer put it on Reddit: "When your team is having serious conversations about the repercussions of your data values going from 4KB to 8KB, you begin questioning your decision to use DynamoDB."

Three consoles, three query languages, three places to lose your work. We got tired of it.

So we built DocKit: a free, open-source desktop client for NoSQL databases. It replaces browser-based consoles and proprietary tools with a native app on [Tauri](https://tauri.app/). One interface, three engines: DynamoDB, Elasticsearch, OpenSearch. MongoDB is in progress.

Native desktop app. Under two seconds to launch. A fraction of the memory. Everything stored locally. No Docker, no browser, no cloud. One editor, shared shortcuts, consistent behavior everywhere.

It's for developers who write queries every day. The person who needs to figure out why a search returns nothing, poke around a DynamoDB table, or turn a sentence into a PartiQL statement and get an answer in seconds instead of minutes.

## What DocKit does

### AI that reads your schema

The AI assistant isn't generic. Before it generates anything, it reads your table schemas, index mappings, and field types. You describe what you need:

- "Find users who signed up in the last 7 days with unverified email"
- "Aggregate sales by product category for Q1 2026"
- "Show me the top 10 slowest queries from the last hour"

You get a query that runs. DynamoDB PartiQL or Elasticsearch DSL, with the right field names, correct operators, and proper syntax. OpenAI and DeepSeek are built in. You bring your API key. Your queries stay on your machine.

### The editor

Monaco — the same engine inside VS Code — handles everything. Syntax highlighting, intelligent autocomplete, multi-cursor editing, bracket matching, every keyboard shortcut you know. On top of that:

Grammar-driven completion for Elasticsearch, OpenSearch, and DynamoDB. 37 test cases covering API versions from 0.90 to 9.x. ES|QL autocomplete with sources, commands, and function suggestions. A query language registry so SQL, PPL, EQL, DSL, and PartiQL all share the same completion engine. Body completion for field mappings, index settings, and component templates. JSON5 support: inline comments, trailing commas, unquoted keys. Write queries the way you think, not the way the parser insists. And Ctrl+D on any API endpoint opens the exact documentation page for that operation, version-matched to your cluster.

### Query history

No save button. No config. DocKit records every query you run, across all three engines, automatically. 500 entries per connection, stored locally.

Each entry captures the method, path, connection name, and timestamp (Elasticsearch/OpenSearch) or query type, table, and timestamp (DynamoDB). Keyboard navigation through history. Copy to clipboard. Load back into the editor. Re-execute. Covers PartiQL statements, Elasticsearch DSL queries, and visual form queries.

### DynamoDB

The DynamoDB integration isn't a checkbox feature. It's a full toolchain, built over six months of steady iteration.

You get a visual query builder that scans and queries tables with primary key filtering and advanced conditions. No code needed. There's a PartiQL editor with autocomplete, syntax highlighting, document formatting, and gutter execution — write SQL-like queries and run them inline. You can update and delete items directly from results without switching views.

Table management covers browsing, inspecting items, managing GSI/LSI, and viewing CloudWatch metrics. Import and export are schema-aware: JSON, CSV, JSONL. DynamoDB Local lets you develop offline. No AWS credentials needed. SSO and AssumeRole handle cross-account authentication.

It's the kind of integration where you stop thinking about the tool and just work with the data. That was the goal.

### Elasticsearch and OpenSearch management

DocKit replaces the `_cat` API calls you'd otherwise type by hand. Not because curl is hard. Because remembering which endpoint gives you what is a waste of time.

Cluster overview: health status, node count, shard allocation, index summary. Per-node monitoring: IP, memory, disk, JVM heap, shard distribution. Shard inspection: type, assignment, doc count, disk usage, segment detail. Index operations: create, delete, close, open, force merge, refresh, flush. Aliases and templates, managed visually. Column sorting on the indices and templates tables. A toggle to filter out system indices.

None of this replaces your monitoring stack. It's for the moment when you need to check something fast and don't want to context-switch into another tool.

### Import and export at scale

JSON, CSV, JSONL. Batch operations through millions of records. Move data between clusters, back up tables for development, seed test environments. Works across Elasticsearch, OpenSearch, and DynamoDB.

### Privacy-first

DocKit is local-first by design. Connections, queries, and history live on your filesystem. Credentials are encrypted by your OS keychain (macOS Keychain, Windows Credential Manager, Linux libsecret). Zero telemetry. No analytics, no cloud sync, no phoning home. No internet connection required. It works fully offline. Apache 2.0 licensed. No enterprise tier, no feature gating.

### Cross-platform, actually lightweight

Built on Tauri v2. Not Electron. The macOS installer is under 10MB. Tauri uses the OS-native webview: WebKit on macOS, WebView2 on Windows, WebKitGTK on Linux. No bundled browser engine.

| Platform | Installer |
|----------|-----------|
| macOS (Universal: Apple Silicon + Intel) | `.dmg`, ~8MB |
| Windows (x64) | `.exe` installer |
| Linux | `.AppImage`, `.deb` |

## By the numbers

| Metric | Count |
|--------|-------|
| Total commits | 970 |
| Merged pull requests | 244 |
| Resolved issues | 132 |
| Releases shipped | 70 |
| GitHub stars | 1,091 |
| Development period | 2 years, 10 months |
| Primary contributor commits | 791 |
| Lines changed in UI migration | 1,200+ across 60+ components |
| Automated completion test cases | 37 |

## How we got here

### 2023: Foundation

**July 22, 2023.** First commit. A `package.json`, a LICENSE file, a README. Built on Electron.

**August 2023.** Monaco Editor integrated as the query editor core. Basic connection management for Elasticsearch: add, test, delete. Syntax highlighting and code completion for the search DSL arrive.

**January 2024.** Query execution goes live: GET, POST, PUT, DELETE against Elasticsearch endpoints. OpenSearch auth support ships the same month. Auto-update mechanism lands. First public release in February.

### 2024: Platform shift

**April 2024.** OpenAI integration ships. This is when things changed. Instead of just autocomplete, DocKit could take natural language and produce contextually accurate queries. Not a chatbot bolted to the sidebar — an assistant that actually understood Elasticsearch DSL.

**June 29, 2024.** Electron → Tauri v1 migration. A full rewrite. Electron's Chromium dependency meant 150MB+ installers. Tauri uses the OS-native webview, so the installer drops under 20MB. The migration touched everything: Rust backend replacing the Node.js main process, new IPC architecture, new build pipeline.

**Summer 2024.** Cluster management ships. Node health, shard state, index management, alias control. All visual and faster than curling `_cat` endpoints. Query DSL auto-completion in September. Import/export (JSON, CSV) in November.

**December 26, 2024.** DynamoDB support begins. DocKit stops being just an Elasticsearch tool. The DynamoDB integration grows into a full subsystem over the next six months.

### 2025: Expansion

**March 30, 2025.** Tauri v1 → Tauri v2 upgrade. Tauri v2 added mobile support, a pluggable permission system, and IPC improvements. Every Tauri plugin was touched. The entire Rust layer adapted.

**April 2025.** DeepSeek joins OpenAI. Developers can pick their AI provider. DynamoDB visual query builder ships the same month — scan and query tables without writing a line of code.

**July 2025.** v0.7.0: Multi-language support (English + Chinese), DynamoDB pagination, dependencies updated across the board.

### 2026: Maturation

**January 2026.** The busiest month in the project's history. PartiQL Editor with syntax highlighting and formatting. A grammar-driven completion engine for Elasticsearch and OpenSearch — 37 test cases covering every API version from 0.90 to 9.x. DynamoDB CRUD: create, update, delete items inline. Real-time syntax validation with error highlighting. Connection loading modals. All in 31 days.

**January 13, 2026.** v0.8.0. The DynamoDB subsystem is now a product in its own right: visual query builder, PartiQL editor with gutter execution, unified toolbar, schema-aware export, metadata-validated import, DynamoDB Manage panel with GSI operations and CloudWatch metrics.

**February 28, 2026.** Naive UI → shadcn-vue + UnoCSS migration. 1,200+ lines changed across 60+ Vue components. Naive UI out, shadcn-vue (Radix Vue primitives) and UnoCSS in. Cleaner design, better accessibility, lighter bundle.

**March 3, 2026.** v0.9.0. Query history: 500 entries per connection, automatic, local-only. DynamoDB Local endpoint support for offline development. PartiQL document formatting. Official Tauri updater plugin. The 0.9.x rapid release cycle starts here.

**March–April 2026.** Ten patch releases in eight weeks: Elasticsearch API Key auth, connection cloning, query parameter autocomplete, connection sorting and filtering, keyboard navigation for history view, DynamoDB SSO and AssumeRole, a rebuilt Data Studio AI agent with streaming LLM responses, and the final pieces of the shadcn-vue migration. Twenty releases in the 0.9 line.

**May 5–7, 2026.** v1.0.0. ES|QL query completion. Unified query language registry (SQL, PPL, EQL, DSL, PartiQL). Body completion for index and component templates. Column sorting in the Manage panel. And the label flips from `0.x` to `1.0`.

## What's next

MongoDB is in active development. Connection management and query execution are merged into main. Azure Cosmos DB is coming.

We shipped 20 releases in the 0.9 line, averaging one every six days. That pace doesn't change just because the version number starts with a 1.

---

DocKit is Apache 2.0. No enterprise tier. No feature gating. No sign-up walls. If it's in the repo, it's in the binary.

[Download DocKit 1.0](/products/dockit/) for macOS, Windows, or Linux.

[View on GitHub](https://github.com/geek-fun/dockit).

[Read the full changelog](https://github.com/geek-fun/dockit/blob/main/CHANGELOG.md).
