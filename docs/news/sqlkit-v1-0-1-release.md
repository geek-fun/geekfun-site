---
title: SqlKit v1.0.1 Released — Unified AI Permissions, Pagination & a Graphite Theme
description: SqlKit v1.0.1 unifies AI permissions across Data Studio and MCP clients, adds result pagination, layered agent prompts, and a graphite dark theme, and keeps sessions alive across restarts.
date: 2026-10-28
head:
  - - meta
    - name: keywords
      content: SqlKit v1.0.1, SqlKit release, AI permissions, result pagination, agent prompts, graphite theme, SQL client, PostgreSQL GUI, MySQL GUI, open source release
  - - link
    - rel: canonical
      href: https://www.geekfun.club/news/sqlkit-v1-0-1-release
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/news/sqlkit-v1-0-1-release
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/news/sqlkit-v1-0-1-release
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/news/sqlkit-v1-0-1-release
---

# SqlKit v1.0.1 released

SqlKit v1.0.1 unifies AI permissions, paginates results, adds layered agent prompts, and repaints the workspace in graphite.

AI permissions use one policy everywhere. A per-connection access level overrides the system default, and individual actions can be tuned in Custom — for Data Studio and MCP clients alike. Editing permissions requires Ultimate. Blocked agent actions recover in place: the denial names the connection, the required action, and the source, and Review permissions and Retry request start a fresh turn without replaying earlier work. Permission changes apply immediately to agent dispatches, and earlier denials stay labeled as previous attempts instead of implying current access.

Agent prompts are layered. A global system prompt in AI settings plus an optional prompt per connection give the agent business context wherever it runs.

Query results and table views are paginated. Choose rows per page, jump to the first or last page, or show all returned rows; sorting applies to the visible page. Table and result footers show the active database, affected rows, execution time, and per-tab counts for columns, indexes, foreign keys, and triggers.

The workspace uses a graphite dark theme with consistent semantic colors, while keeping the data, status, and database-type recognition cues you know. Settings consolidates account, plan, theme, and update controls into a General tab, and pagination uses the same controls in table views and result grids. Table context menus lead with View Data and open View Structure directly on the schema sub-page, each tab remembers the sub-page you last viewed, and database menus gain Create Script. SSH tunnel details stay read-only until you explicitly edit them, so saved hop chains no longer show open editable fields.

Sessions now survive app restarts — you stay signed in with entitlements restored, and overlapping session refreshes no longer invalidate each other. Idle connections recover before a database action runs: metadata browsing, queries, edits, DDL, transfers, and AI or MCP tools replace a dead session instead of failing. PostgreSQL scripts that return multiple result sets keep all of them and let you switch between result sets.

A Cheaper Inference preset joins AI settings (OpenAI compatible, base URL `https://api.cheaperinference.com/v1`). The source permission modal follows the permission editor's radio cards and switch rows, with an explicit detach confirmation, and About shows the running app version from Settings.

On the security side, DOMPurify picked up upstream fixes including the copy bundled with Monaco, an unused command that allowed generic capability invocation from the WebView was removed, and permission cleanup is limited to connections that no longer exist.

SqlKit 1.0.1 is available for macOS, Windows, and Linux. Read the [full changelog](https://github.com/geek-fun/sqlkit/releases/tag/v1.0.1) or [download SqlKit](/download).

Links: [Download](/download) · [Pricing](/pricing) · [SqlKit](/products/sqlkit/)
