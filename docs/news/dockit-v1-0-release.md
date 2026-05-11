---
title: DocKit v1.0 Released — First Stable Release
description: DocKit v1.0 ships as the first stable release after two years of active development. Full DynamoDB, Elasticsearch, and OpenSearch support. ES|QL completion, query language registry, and template body autocomplete.
head:
  - - meta
    - name: keywords
      content: DocKit v1.0, DocKit release, stable release, ES|QL, query language registry, DynamoDB, Elasticsearch, OpenSearch, NoSQL GUI client, open source release
  - - link
    - rel: canonical
      href: https://www.geekfun.club/news/dockit-v1-0-release
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/news/dockit-v1-0-release
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/news/dockit-v1-0-release
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/news/dockit-v1-0-release
---

# DocKit v1.0 Released: First Stable Release

**May 10, 2026** — DocKit v1.0 ships today. After two years of development, multiple UI rewrites, and thousands of downloads across the 0.5 → 0.9 cycles, the AI-native NoSQL desktop client hits 1.0.

The 0.9 era spanned 20 releases from 0.9.0 to 0.9.10. With this release, DocKit is production-ready across all supported engines: DynamoDB, Elasticsearch, and OpenSearch.

## What's New in v1.0.0

### ES|QL Query Completion

### Query Language Registry

### Body Completion for Templates

### Column Sorting in Manage Panel

### Fixes

- **PartiQL validation** fixed for newly created DynamoDB tables (#400)
- **Ctrl+D documentation shortcut** now maps correctly across every Elasticsearch API without gaps (#395)

## The Road to 1.0

DocKit started as an Elasticsearch query editor in mid-2023. Key milestones:

- **v0.5** — Query file management, index import/export
- **v0.6** — AI assistant (OpenAI), Monaco editor, cluster management, multi-tab editing
- **v0.8** — DynamoDB support: visual query builder, PartiQL editor, table management
- **v0.9** — Complete UI redesign (Naive UI → shadcn-vue + UnoCSS), query history, DynamoDB Local, PartiQL formatting

Each 0.9.x patch release through v0.9.10 added connection sorting, keyboard navigation, SSO authentication, ES|QL groundwork, a Data Studio AI agent, and completed the UI migration.

v1.0 doesn't add a single headline feature. Every system is now mature enough to call stable.

## Download

| Platform | Download |
|----------|----------|
| **macOS** (Universal) | [Download .dmg](https://github.com/geek-fun/dockit/releases/latest) |
| **Windows** (x64) | [Download .exe](https://github.com/geek-fun/dockit/releases/latest) |
| **Linux** (AppImage / deb) | [Download](https://github.com/geek-fun/dockit/releases/latest) |

📥 **[Download from the DocKit page](/products/dockit/)**  
⭐ **[GitHub Release Notes](https://github.com/geek-fun/dockit/releases/tag/v1.0.0)**

## Get Involved

We welcome contributions. If you find a bug or have a feature request, [open an issue on GitHub](https://github.com/geek-fun/dockit/issues).

---

**Related Links:**
- [DocKit 1.0 - The NoSQL desktop client developers deserved](/blog/introducing-dockit-v1)
- [DocKit Official Website](/products/dockit/)
- [GitHub Repository](https://github.com/geek-fun/dockit)
- [Full Changelog](https://github.com/geek-fun/dockit/blob/main/CHANGELOG.md)
