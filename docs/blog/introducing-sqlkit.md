---
title: "Introducing SqlKit, an open-source desktop SQL client"
description: "Why I built SqlKit and how to get started with PostgreSQL, MySQL, SQL Server, Oracle, or SQLite on macOS, Windows, and Linux."
date: 2026-11-22
tags: ["SqlKit", "SQL"]
cover:
  src: /og/sqlkit-en.png
  alt: "SqlKit, the open-source SQL desktop client from GEEKFUN."
  height: 630
head:
  - - link
    - rel: canonical
      href: https://www.geekfun.club/blog/introducing-sqlkit
---

# Introducing SqlKit, an open-source desktop SQL client

When I started DocKit, I wanted a desktop app I could open to check an Elasticsearch index or run a quick query. I wanted the same thing for SQL. Some days that means checking a table in PostgreSQL, running the same report on MySQL, or opening a SQLite file from a test. The queries are usually the easy part. It’s keeping track of which connection and which editor tab I used last time that gets annoying.

I built SqlKit to make that part easier. It’s an open-source SQL client for macOS, Windows, and Linux. It connects to PostgreSQL, MySQL, Microsoft SQL Server, Oracle, SQLite, and other databases from one desktop app.

![SqlKit, the open-source SQL desktop client from GEEKFUN](/og/sqlkit-en.png)

## What I wanted in a SQL client

In SqlKit, I can name my connections and switch databases from the sidebar. Before running a query, I can check the editor toolbar to see which connection the tab is using. If you’re connecting to Oracle, SqlKit can set up its JDBC driver when you need it.

For the editor, I went with Monaco, the one VS Code uses. Type a few letters to get suggestions from the schema. Select some SQL and press `Cmd + Enter` on macOS or `Ctrl + Enter` on Windows and Linux to run that selection.

I can save queries as `.sql` files and search local history to reopen earlier queries in the editor. I can also browse a table and export query results as CSV or JSON when someone asks for the rows.

## Try it on a database you know

Add a development connection, open a query tab, and run something you already use. Then open History and bring the query back into the editor. [Download SqlKit](/download#sqlkit)

Those tools are available in the free Community edition. Ultimate adds Agentic Data Studio. On a development connection, try asking it to inspect the schema, find the orders table, and write a read-only query for the five most recent paid orders. You can review the SQL and run it in the same app. [Compare plans](/pricing)

SqlKit is open source under the Apache 2.0 license. If you try it, I’d love to hear which database you connected and where you got stuck. Issues and stars are always welcome. [SqlKit on GitHub](https://github.com/geek-fun/sqlkit) · [Apache 2.0 license](https://github.com/geek-fun/sqlkit/blob/master/LICENSE)
