---
title: SqlKit v1.0 Released — SSH Tunnels, Cross-Database Browsing & a Faster JDBC Bridge
description: SqlKit v1.0 adds SSH tunnels, cross-database metadata browsing, DuckDB diagnostics and database creation, instant result-grid sorting, and a much faster JDBC connection path.
date: 2026-10-18
head:
  - - meta
    - name: keywords
      content: SqlKit v1.0, SqlKit release, SSH tunnels, cross-database browsing, DuckDB GUI, SQL client, JDBC bridge, open source release
  - - link
    - rel: canonical
      href: https://www.geekfun.club/news/sqlkit-v1-0-release
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/news/sqlkit-v1-0-release
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/news/sqlkit-v1-0-release
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/news/sqlkit-v1-0-release
---

# SqlKit v1.0 Released

SqlKit reaches 1.0 with its largest update yet: secure access through SSH, cross-database browsing, a faster JDBC bridge, and the Ultimate plan with version-lock licensing.

**What's new in v1.0:**

- **Ultimate plan & version-lock licensing** — AI features, the Transfer module, SSH tunnels, and the MCP bridge require Ultimate. The Account & Plan settings tab shows your version-lock state and handles Geekfun login and logout.
- **SSH tunnels for any connection** — connect through a bastion with multi-hop chains, reusable SSH profiles, an optional proxy hop, password or ED25519/RSA key auth, and trust-on-first-use host-key pinning with a recovery command for changed server keys.
- **Cross-database browsing without reconnecting** — table, column, index, foreign-key, view, routine, and trigger panels can inspect any database on the server; PostgreSQL and SQL Server route through a short-lived connection under the hood.
- **DuckDB that explains itself** — connection failures now come with the cause and the fix: file locks held by another process (with an inline retry as read-only), instance-configuration conflicts, and storage-format mismatches. The connection form also reports the DuckDB storage-format version and whether a sibling `.wal` file exists.
- **Create DuckDB / SQLite databases from the connection form** — New… and Open… actions use the native save dialog, explain what will happen on connect, and keep a per-engine recent-files list. DuckDB also gains File / In-Memory tabs and a read-only access mode (the form explains that read-only currently needs a newer bridge build).
- **Much faster JDBC connections** — the JRE compatibility check is memoised for six hours, cached driver JARs skip Maven resolution, and connections share one bridge process. In testing, a warm connect dropped from ~4.3 s to 5.5 ms with a bridge build that also caches the driver class loader; the currently released bridge measures ~1.4 s per warm connect.
- **Instant result-grid sorting** — sorting runs in the frontend over the rows already returned, so clicking a header no longer re-runs the query; columns that mix numbers, dates, booleans, and text sort consistently.
- **Settings that report progress** — JRE/driver installs, provider sync, and update checks now show pending, success, and failure inline with retry instead of failing silently.
- **More database fixes** — PostgreSQL multi-statement batches keep all result sets, MySQL and SQL Server preserve sessions, Oracle keeps PL/SQL definitions, statements that start with a comment or end in `RETURNING` now return rows, and numeric headers align with their values.

SqlKit 1.0 is available for macOS, Windows, and Linux. Read the [full changelog](https://github.com/geek-fun/sqlkit/releases/tag/v1.0.0) or [download SqlKit](/download).

**Links:** [Download](/download) · [Pricing](/pricing) · [SqlKit](/products/sqlkit/)
