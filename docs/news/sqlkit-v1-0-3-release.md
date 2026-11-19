---
title: SqlKit v1.0.3 Released — Apache Cassandra and ScyllaDB Support
description: SqlKit v1.0.3 adds Apache Cassandra and ScyllaDB support over CQL with keyspace browsing and CQL-aware SQL gates, introduces a settings language switcher with five new locales, keeps the app in the system tray, and fixes title bar dragging.
date: 2026-11-19
head:
  - - meta
    - name: keywords
      content: SqlKit v1.0.3, SqlKit release, Apache Cassandra, ScyllaDB, CQL, keyspace, SQL client, language switcher, system tray, PostgreSQL GUI, MySQL GUI, open source release
  - - link
    - rel: canonical
      href: https://www.geekfun.club/news/sqlkit-v1-0-3-release
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/news/sqlkit-v1-0-3-release
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/news/sqlkit-v1-0-3-release
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/news/sqlkit-v1-0-3-release
---

# SqlKit v1.0.3 released

SqlKit v1.0.3 adds Apache Cassandra and ScyllaDB support, introduces a settings language switcher with five more locales, and keeps the app running in the system tray.

Apache Cassandra and ScyllaDB are now supported. Connect over CQL, browse keyspaces and tables with metadata read from `system_schema`, and run CQL statements in the SQL editor. The connection form labels the database field as Keyspace for both engines, TLS follows your sslmode setting with `prefer` staying plaintext, and the multi-statement SQL gates understand CQL instead of failing the parse. Both engines sit in the list right after TimescaleDB, under their official logos.

![SqlKit workspace: object tree, SQL editor with query tabs, and result grid](/sqlkit-sql-editor-ui.png)

The interface now has a language switcher. Settings lets you pick 繁體中文, Português (Brasil), 日本語, 한국어, or Español, the choice persists across restarts, and language detection follows the same unified standard as DocKit for Simplified Chinese.

Closing the window no longer quits the app. SqlKit moves to the system tray and background tasks keep running, with Show Window and Quit in the tray menu.

Two fixes round it out. Title bar dragging works again, and the SQLite adapter short-circuits empty or comment-only statements instead of erroring on them.

![Data Studio: asking questions about your data in AI chat](/sqlkit-data-studio-ui.png)

SqlKit 1.0.3 is available for macOS, Windows, and Linux. Read the [full changelog](https://github.com/geek-fun/sqlkit/releases/tag/v1.0.3) or [download SqlKit](/download).

Links: [Download](/download) · [Pricing](/pricing) · [SqlKit](/products/sqlkit/)
