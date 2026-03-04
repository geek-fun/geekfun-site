---
title: DocKit v0.9 Released - UI Redesign, Query History & DynamoDB Local Support
description: DocKit v0.9 brings a modern UI redesign with shadcn-vue + UnoCSS, automatic query history for Elasticsearch and DynamoDB, DynamoDB Local endpoint support, and PartiQL formatting.
head:
  - - meta
    - name: keywords
      content: DocKit v0.9, DocKit release, UI redesign, query history, DynamoDB Local, PartiQL formatting, shadcn-vue, NoSQL GUI client, open source release
  - - link
    - rel: canonical
      href: https://www.geekfun.club/news/dockit-v0-9-release
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/news/dockit-v0-9-release
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/news/dockit-v0-9-release
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/news/dockit-v0-9-release
---

# 🎉 DocKit v0.9 Released: UI Redesign, Query History & DynamoDB Local Support

**March 3, 2026** - We're excited to announce the release of **DocKit v0.9**! This is a landmark release featuring a full UI redesign, automatic query history for all supported databases, DynamoDB Local endpoint support, and significant quality-of-life improvements for PartiQL users.

## 🚀 What's New

### 🎨 Modern UI Redesign

The most visible change in v0.9 is a complete UI overhaul. We've migrated from Naive UI to **shadcn-vue + UnoCSS**, delivering:

- A cleaner, more modern visual design across all panels and dialogs
- Better consistency between components and improved accessibility
- Faster rendering and a lighter overall bundle size
- Foundation for faster iteration on new UI features going forward

### 🕘 Query History

DocKit now **automatically records every query you execute** — for Elasticsearch, OpenSearch, and DynamoDB — without any manual saving required.

- View a chronological list of past queries in the new **History panel**
- Each entry shows the HTTP method, API path, connection name, and timestamp (Elasticsearch) or query type, table, and timestamp (DynamoDB)
- **Copy** a query to the clipboard, **Add to Editor** to load it back, or **Execute** to re-run it immediately
- History is capped at **500 entries per connection** and stored entirely on your local machine — never synced to the cloud
- Covers both **PartiQL statements** and **visual UI form queries** for DynamoDB

Read more: [Query History blog post](/blog/query-history) | [Query History documentation](/docs/dockit/query-history)

### 🏠 DynamoDB Local Support

You can now connect to a **locally running DynamoDB instance** by specifying an optional endpoint URL in the connection configuration. This makes it easier to:

- Develop and test against DynamoDB Local without spinning up AWS resources
- Run integration tests in CI environments pointing to a local DynamoDB container
- Work offline without any AWS credentials

### ✏️ PartiQL Document Formatting

The DynamoDB PartiQL editor now includes a **document formatting provider** — press the format shortcut to automatically clean up and indent your PartiQL statements, making complex queries easier to read and maintain.

### 🔧 Improvements & Fixes

- **Fixed**: Credentials not passed correctly when loading the HTTP client in certain configurations (#310)
- **Improved**: Update mechanism migrated to the official Tauri updater plugin for more reliable in-app updates
- **Security**: Multiple dependency upgrades including `@tauri-apps/plugin-dialog`, `@tauri-apps/plugin-store`, `vue-i18n`, `markdown-it`, and `json-with-bigint`

## 📥 Download

DocKit v0.9.0 is available for all platforms:

| Platform | Download |
|----------|----------|
| **macOS** (Universal) | [DocKit_0.9.0_universal.dmg](https://github.com/geek-fun/dockit/releases/download/v0.9.0/DocKit_0.9.0_universal.dmg) |
| **Windows** (x64) | [DocKit_0.9.0_x64-setup.exe](https://github.com/geek-fun/dockit/releases/download/v0.9.0/DocKit_0.9.0_x64-setup.exe) |
| **Linux** (AppImage) | [DocKit_0.9.0_amd64.AppImage](https://github.com/geek-fun/dockit/releases/download/v0.9.0/DocKit_0.9.0_amd64.AppImage) |
| **Linux** (deb) | [DocKit_0.9.0_amd64.deb](https://github.com/geek-fun/dockit/releases/download/v0.9.0/DocKit_0.9.0_amd64.deb) |

📥 **[Download from the DocKit page](/products/dockit/)**  
⭐ **[GitHub Release Notes](https://github.com/geek-fun/dockit/releases/tag/v0.9.0)**

## Get Involved

We welcome contributions from the community! If you find a bug or have a feature request, please [open an issue on GitHub](https://github.com/geek-fun/dockit/issues).

---

**Related Links:**
- [Query History documentation](/docs/dockit/query-history)
- [DocKit Official Website](/products/dockit/)
- [GitHub Repository](https://github.com/geek-fun/dockit)
- [Full Changelog](https://github.com/geek-fun/dockit/compare/v0.8.2...v0.9.0)
