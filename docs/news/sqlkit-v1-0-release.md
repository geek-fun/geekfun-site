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

# SqlKit v1.0 released

SqlKit 1.0 adds SSH tunnels, cross-database browsing, DuckDB diagnostics, and a faster JDBC bridge. It also brings the Ultimate plan and version-lock licensing.

AI features, the Transfer module, SSH tunnels, and the MCP bridge now require Ultimate. The Account & Plan settings tab shows your version-lock state and handles Geekfun login and logout.

SSH tunnels work with any connection. You can connect through a bastion with multi-hop chains, reuse SSH profiles, add a proxy hop, and authenticate with a password or an ED25519/RSA key. Host keys are pinned on first use, and a recovery command covers servers whose key changes.

The table, column, index, foreign-key, view, routine, and trigger panels can now inspect any database on the server without reconnecting. PostgreSQL and SQL Server open a short-lived connection in the background for this.

DuckDB connection failures now explain the cause and the fix. A file lock held by another process, an instance-configuration conflict, and a storage-format mismatch each get their own message, and the lock cases offer a retry as read-only in the form. The form also reports the DuckDB storage-format version and whether a sibling `.wal` file exists.

You can create DuckDB and SQLite databases from the connection form. New… and Open… use the native save dialog, the form explains what will happen on connect, and each engine keeps a recent-files list. DuckDB has File and In-Memory tabs, plus a read-only access mode; the form notes that read-only currently needs a newer bridge build.

JDBC connections are faster. The JRE compatibility check is cached for six hours, cached driver JARs skip Maven resolution, and connections share one bridge process. In testing, a warm connect dropped from about 4.3 seconds to 5.5 milliseconds with a bridge build that also caches the driver class loader. The currently released bridge measures about 1.4 seconds per warm connect.

Result grids sort in the frontend over the rows already returned, so clicking a header no longer re-runs the query. Columns that mix numbers, dates, booleans, and text sort consistently.

Settings actions now show pending, success, and failure inline, with retry, instead of failing silently. This covers JRE and driver installs, provider sync, and update checks.

Database fixes: PostgreSQL multi-statement batches keep all result sets; MySQL and SQL Server preserve sessions; Oracle keeps PL/SQL definitions; statements that start with a comment or end in `RETURNING` now return rows; numeric headers align with their values.

SqlKit 1.0 is available for macOS, Windows, and Linux. Read the [full changelog](https://github.com/geek-fun/sqlkit/releases/tag/v1.0.0) or [download SqlKit](/download).

Links: [Download](/download) · [Pricing](/pricing) · [SqlKit](/products/sqlkit/)
