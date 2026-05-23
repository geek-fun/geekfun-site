---
title: GEEKFUN News - DocKit Releases DynamoDB Elasticsearch GUI Updates
description: "Stay updated with latest GEEKFUN news, DocKit releases, product announcements. Follow open-source projects: DynamoDB GUI client, Elasticsearch tools, new features, updates, community milestones."
head:
  - - meta
    - name: keywords
      content: geekfun news, DocKit releases, open source announcements, software updates, geekfun updates
  - - link
    - rel: canonical
      href: https://www.geekfun.club/news
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/news
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/news
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/news
---
# News

Welcome to **GEEKFUN News!** :rocket::rocket::rocket:

Product releases, feature updates, and community milestones from the GEEKFUN team.

## [🎉 DocKit v1.0 Released: First Stable Release](/news/dockit-v1-0-release)

**May 10, 2026** — DocKit ships its first stable release. After two years of development, a complete UI rewrite, and 30+ releases, the AI-native NoSQL desktop client graduates to **v1.0.0**. Full DynamoDB, Elasticsearch, and OpenSearch support. ES|QL autocomplete, unified query language registry, template body completion, and column sorting in the Manage panel. Read the [full announcement](/news/dockit-v1-0-release) or the [1.0 blog post](/blog/introducing-dockit-v1).

⭐ **[GitHub Release](https://github.com/geek-fun/dockit/releases/tag/v1.0.0)** | 📥 **[Download](/products/dockit/)**

## [🚀 DocKit v0.9.10 Released: Smarter Auto-completion, Data Studio Agent & Cross-App Auth](https://github.com/geek-fun/dockit/releases/tag/v0.9.10)

**April 28, 2026** — 60+ commits across the Data Studio AI agent, complete UI migration, and editor improvements.

🔍 **Smarter Elasticsearch Auto-completion** — Monaco was suggesting field types (`text`, `keyword`, etc.) at wrong positions inside JSON. The fix required the tokenizer to distinguish "key positions" (field NAME) from "value positions" (field TYPE). Small change, big UX difference.

📌 **Ctrl+D Documentation for Every ES API** — Replaced 28 hardcoded regex patterns with spec-driven `apiSpecProvider` coverage. Now every endpoint — from `_cat/indices` to `_security/role_mapping` — opens the exact documentation page.

🖱️ **macOS Monterey Scroll Fix** — WebKit bug in fixed-height containers locked up the connection list. The fix? `-webkit-transform: translateZ(0)` to force GPU compositing. One of those "spent 3 hours on one CSS property" moments.

🤖 **Data Studio AI Agent** — Completely rebuilt with streaming LLM responses, activity timeline with tool call visualization, thinking content display, and Rust backend agent loop with concurrency guard. Added LM Studio provider and enhanced system prompts with DynamoDB + ES query DSL knowledge.

🔐 **Cross-App Authentication** — Implemented `dockit://` deep link protocol for seamless Geekfun login, including deep link URL parsing and avatar URL validation with domain allowlist.

🎨 **Completed Naive UI → shadcn-vue Migration** — All remaining components migrated. Combined UnoCSS + Tailwind configs, migrated 21 components from @vicons to @unocss/preset-icons, and removed all SCSS dependencies.

## [🚀 DocKit v0.9.9 Released: DynamoDB SSO, Auth Improvements & DSL Auto-completion](https://github.com/geek-fun/dockit/releases/tag/v0.9.9)

**April 28, 2026** — Major authentication and auto-completion improvements.

🔑 **DynamoDB SSO & AssumeRole** — Full AWS SSO support and cross-account role assumption. No more copying temporary credentials — DocKit handles the entire auth flow.

🔧 **Credential-Based Connection Model** — Rebuilt DynamoDB auth with AWS profile and environment variable support. Multi-table workflows across different accounts work seamlessly now.

🎯 **313 New Spec-Compliance Tests** — Comprehensive auto-completion tests covering parameter names, enum values, and boolean completions. Fixed field type suggestions appearing at wrong positions inside `properties` blocks.

✨ **Unified Searchable Select** — Replaced multiple select implementations with a single searchable combobox used across the codebase.

🛡️ **Security: rustls-webpki CVE Fix** — Resolved Dependabot alerts for rustls-webpki vulnerability.

## [🎉 DocKit v0.9.8 Released: Keyboard Navigation & History View Accessibility](https://github.com/geek-fun/dockit/releases/tag/v0.9.8)

**April 22, 2026** - DocKit v0.9.8 is now live. This patch release improves the history view with keyboard navigation and a clearer empty-state call to action, making recent-query workflows more accessible and easier to use.

Also includes Elasticsearch cluster management refinements with improved node state display and index management UX.

## [🎉 DocKit v0.9.7 Released: Connection Cloning, Query Autocomplete & Import Improvements](https://github.com/geek-fun/dockit/releases/tag/v0.9.7)

**April 20, 2026** - Three focused improvements for faster workflows:

📋 **Connection Cloning** — Duplicate any existing connection from the connection list with one click. Perfect for staging/production pairs or tweaking settings without starting from scratch.

💡 **Query Parameter Autocomplete** — Added autocomplete support for Elasticsearch query parameter values in the editor. Typing a query now surfaces relevant suggestions as you type.

📥 **Create Index/Table During Import** — Import can now create a new index or table if it doesn't exist, eliminating a separate "create then import" step.

## [🎉 DocKit v0.9.6 Released: Updater Install Fix](https://github.com/geek-fun/dockit/releases/tag/v0.9.6)

**April 14, 2026** - Fixed updater installation failures by re-fetching a fresh signed URL before downloading, eliminating expired URL errors that blocked upgrades on first click.

## [🎉 DocKit v0.9.5 Released: CI & Release Pipeline Hardening](https://github.com/geek-fun/dockit/releases/tag/v0.9.5)

**April 14, 2026** - Strengthened the release process: CI checks now run on push to `master` (not just PRs), and release publishing is gated on all platform builds succeeding — no more partial releases.

## [🎉 DocKit v0.9.4 Released: Connection Sorting, Filtering & Update Progress](https://github.com/geek-fun/dockit/releases/tag/v0.9.4)

**April 14, 2026** - DocKit v0.9.4 adds sort and filter controls for the connection list with ascending/descending toggle, a progress bar with percentage indicator during update download and install, and fixes keyboard shortcuts on Windows.

## [🎉 DocKit v0.9.3 Released](https://github.com/geek-fun/dockit/releases/tag/v0.9.3)

**April 8, 2026** - Maintenance release with keyboard shortcut fixes for Windows platforms.

## [🎉 DocKit v0.9.2 Released](https://github.com/geek-fun/dockit/releases/tag/v0.9.2)

**April 6, 2026** - Auto-updater fixes and new shortcut dialog. Users can now view all available keyboard shortcuts via a new dialog.

## [🎉 DocKit v0.9.1 Released: Elasticsearch API Key Auth & Auto-completion Fixes](https://github.com/geek-fun/dockit/releases/tag/v0.9.1)

**March 25, 2026** - Added API Key authentication for Elasticsearch connections, enabling auth against secured clusters that use API keys instead of basic credentials. Also fixed auto-completion issues in the editor.

## [🎉 DocKit v0.9 Released: UI Redesign, Query History & DynamoDB Local Support](/news/dockit-v0-9-release)

**March 3, 2026** — DocKit v0.9 is a landmark release with **1,200+ lines of UI overhaul** across 60+ Vue components.

🎨 **Complete UI Redesign — Naive UI → shadcn-vue + UnoCSS** — Replaced every UI component from Naive UI/SCSS to shadcn-vue + UnoCSS, cutting CSS dependencies and standardizing on a unified design system. 100+ components migrated with consistent dark/light theming.

📜 **Query History** — Never lose a query again. Elasticsearch and DynamoDB queries are now automatically saved with timestamps, searchable and reusable across sessions. Queries persist locally so you can pick up exactly where you left off.

🔌 **DynamoDB Local Support** — Added optional endpoint URL configuration for DynamoDB connections. Develop against DynamoDB Local, LocalStack, or Testcontainers without switching tools — just point DocKit at `http://localhost:8000` and start working.

📝 **PartiQL Document Formatting** — New code formatting provider for DynamoDB PartiQL queries in the Monaco editor. Proper indentation, keyword casing, and syntax structure for readable PartiQL scripts.

🔄 **Official Tauri Updater** — Migrated from custom update mechanism to the official Tauri updater plugin with code signing, version manifests, and rollback protection.

## [🎉 DocKit v0.8 Released: Full DynamoDB Support](/news/dockit-v0-8-dynamodb-support)

**January 20, 2026** - We're excited to announce DocKit v0.8 with complete Amazon DynamoDB support! This release brings powerful new features including PartiQL query editor, visual query UI, inline data editing, and more. Read more about what's new in this major update.
