---
title: DocKit 1.1 — Agentic Data Studio, MongoDB & EasySearch
description: DocKit v1.1 ships with MongoDB and EasySearch support, Agentic Data Studio with 28+ agent tools, 12 AI providers, AWS SSO, full DynamoDB table lifecycle, import/export wizards, and more. The biggest update since v1.0.
date: 2026-06-04
head:
  - - meta
    - name: keywords
      content: DocKit 1.1, DocKit MongoDB, Agentic Data Studio, AI database agent, NoSQL GUI, EasySearch, DynamoDB table lifecycle, import export wizard, AWS SSO, MongoDB GUI client
  - - link
    - rel: canonical
      href: https://www.geekfun.club/blog/introducing-dockit-v1-1
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/introducing-dockit-v1-1
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/introducing-dockit-v1-1
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/introducing-dockit-v1-1
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/introducing-dockit-v1-1
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "DocKit 1.1 — Agentic Data Studio, MongoDB & EasySearch",
        "description": "DocKit v1.1 ships with MongoDB and EasySearch support, Agentic Data Studio with 28+ agent tools, 12 AI providers, AWS SSO, full DynamoDB table lifecycle, import/export wizards, and more.",
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
        "datePublished": "2026-06-04",
        "dateModified": "2026-06-04",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.geekfun.club/blog/introducing-dockit-v1-1"
        },
        "keywords": ["DocKit", "MongoDB GUI", "Agentic Data Studio", "NoSQL", "Elasticsearch client", "DynamoDB tool", "AI agent", "open source"],
        "articleSection": "Product Releases"
      }
---

# DocKit 1.1 — Agentic Data Studio, MongoDB & EasySearch

> MongoDB support. EasySearch. Agentic Data Studio with 28+ agent tools. 12 AI providers. Full DynamoDB table lifecycle. AWS SSO. Import/export wizards. Background tasks. File browser.

v1.0 shipped a stable foundation. v1.1 is where it becomes the database client you never knew you needed — because every feature here came from watching how people actually work with their data.

## MongoDB is here

![MongoDB connection](/dockit-mongodb-connection-demo.gif)

The most requested feature since day one. MongoDB is fully wired in: connect with SCRAM auth, URI passthrough, or no auth for local dev. TLS toggle, replica set URIs, auth source configuration.

The query editor supports find, aggregate, insert, update, and delete operations with result formatting. The Manage view shows collection stats, index management, server status, replica set health, and sharded cluster info.

MongoDB wasn't tacked on. It shares the same query history, import/export, and Agentic Data Studio infrastructure as every other database.

## Agentic Data Studio

The biggest change in v1.1. The AI assistant from v1.0 was a query generator. Data Studio is an autonomous agent that talks to your databases in natural language — it writes queries, inspects schemas, updates documents, deletes records, and creates indexes across MongoDB, DynamoDB, Elasticsearch, OpenSearch, and EasySearch.

**28+ tools** organized by database type with built-in risk levels: Safe (read-only), Elevated (create/update), Destructive (delete). Each tool requires the matching permission to run.

Permission modes let you decide how much autonomy the agent has:
- **Ask mode**: every non-read tool prompts for Allow/Deny before executing
- **Auto mode**: tools run automatically when the session has permissions

Per-source permissions — each attached database has independent read/create/update/delete controls. Confirmation rules let you auto-allow safe operations or auto-deny dangerous ones entirely.

**12+ AI providers** — OpenAI, Anthropic, DeepSeek, OpenRouter, Google Gemini, Grok, Mistral, Azure OpenAI, Ollama, LM Studio, plus custom endpoints. Route different models to Data Studio vs the Sidebar Assistant.

![Data Studio in action](/dockit-data-studio-list-indices.gif)

The agent runs in an iterative loop with configurable budgets (max iterations, wall clock, token). Long conversations auto-compact to manage token usage. The full result stays local — only a truncated summary goes to the LLM.

## 12 AI providers, not just two

v1.0 shipped with OpenAI and DeepSeek. v1.1 adds Anthropic, OpenRouter, Google Gemini, Grok, Mistral, Azure OpenAI, Ollama, and LM Studio. Each provider can be added with its own API key, base URL, and proxy configuration. DocKit discovers available models automatically and lets you route them to specific features.

The Sidebar Assistant is a lightweight chat panel for quick Q&A without leaving your current view. It shares providers with Data Studio but operates as a single-turn interface.

## DynamoDB gets the full lifecycle

Table management now covers the complete lifecycle: create with a 4-step wizard (basic info, capacity, indexes & streams, review), modify billing mode, table class, auto scaling, GSI/LSI, TTL, Point-in-Time Recovery, streams, encryption (AWS-owned/KMS/CMK), deletion protection, and tags. CloudWatch metrics — read/write capacity utilization, throttled events, consumed RCU/WCU — visible directly in the app. Truncate and delete operations with proper safeguards.

The visual query builder supports 13+ filter operators across partition key, sort key, and GSI queries. PartiQL editor with Monaco syntax highlighting. Inline item CRUD with attribute type selection.

## AWS SSO and Profile authentication

DynamoDB connections now support AWS IAM Identity Center (SSO) with device authorization flow and cached sessions. AWS Profile authentication reads from `~/.aws/credentials` and `~/.aws/config`, supporting source role chains, SSO-based profiles, and MFA-enabled setups. Alongside the existing access key and DynamoDB Local options.

## Import/export wizards

The old single-dialog import/export is replaced with multi-step wizards. Select source and scope, review schema with field mapping (match/new/exclude), choose output format and target, then execute as a background task with real-time progress. Metadata export creates a companion `metadata.json` for seamless re-import. Supports JSON, CSV, JSONL, and Elasticsearch Bulk formats.

Background tasks run in the Task Manager panel — start an import, switch to querying, check progress. No blocking.

## EasySearch support

EasySearch joins Elasticsearch and OpenSearch as a supported search engine. Same agent tools, same import/export, same query editor. All three share the same 16 agent tools for search, document CRUD, index management, alias operations, and field mappings.

## Elasticsearch cluster management, deeper

The shard view now exposes per-shard detail metrics: docs count, store size, completion, fielddata, query cache, get/search rates, indexing stats, merge status, refresh/flush metrics, segments, and suggest operations. Template management covers composable index templates, component templates, and legacy templates. Alias management with create, atomic switch, and remove operations.

ES|QL completion is built in alongside the existing grammar-driven completion engine.

## Query history with bookmarks

Every query across MongoDB, DynamoDB, Elasticsearch, OpenSearch, and EasySearch is recorded automatically. Star important queries to bookmark them. Search by path, method, content, or connection. Expand any entry to see the full detail view. Configurable history capacity (up to 1000 entries).

## File browser

Browse, create, and organize local query files (`.search`, `.partiql`, `.mongo`) directly in the app. Open files as editor tabs. Sort by name, date, or size.

## What else changed

- **MongoDB connection** with SCRAM, URI, and no-auth modes. Auth source and auth mechanism configuration. TLS toggle.
- **MongoDB collection operations** — create, drop, rename, clone, truncate. Index management with types: ascending, descending, text, hashed, 2dsphere. Unique, sparse, and TTL constraints.
- **MongoDB replica set monitoring** — members, primary/secondary/arbiter, replication lag.
- **MongoDB sharded cluster status**.
- **Server status and database/collection stats** for MongoDB.
- **Inline MongoDB document CRUD** with JSON, table, and tree views.
- **Connection cloning** — duplicate any connection with a single click.
- **Compact and composable template support** for Elasticsearch and OpenSearch.

## The numbers

| Metric | v1.0 | v1.1 |
|--------|------|------|
| Supported databases | 3 | 5 |
| AI providers | 2 | 12+ |
| Agent tools | — | 28+ |
| Connection auth methods | 4 | 9 |
| Query history entries | 500 | 1000 |
| Import formats | 3 | 4 |
| Languages | 2 | 2 |

---

DocKit is Apache 2.0. No feature gating, no sign-up walls, no telemetry. All current features are in the free, open-source build.

[Download DocKit 1.1](/products/dockit/) for macOS, Windows, or Linux.

[View on GitHub](https://github.com/geek-fun/dockit).

[Read the full changelog](https://github.com/geek-fun/dockit/blob/main/CHANGELOG.md).
