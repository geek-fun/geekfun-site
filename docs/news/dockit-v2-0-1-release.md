---
title: DocKit v2.0.1 Released — One AI Permission Model & Session Fixes
description: DocKit v2.0.1 unifies AI permissions across chat, Data Studio, and MCP clients, adds the Cheaper Inference provider, and fixes sign-in persistence, detached Data Studio sources, and DynamoDB PartiQL error rendering.
date: 2026-10-28
head:
  - - meta
    - name: keywords
      content: DocKit v2.0.1, DocKit release, AI permissions, Cheaper Inference, Data Studio, MCP clients, DynamoDB GUI, Elasticsearch GUI, NoSQL client, open source release
  - - link
    - rel: canonical
      href: https://www.geekfun.club/news/dockit-v2-0-1-release
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/news/dockit-v2-0-1-release
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/news/dockit-v2-0-1-release
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/news/dockit-v2-0-1-release
---

# DocKit v2.0.1 released

DocKit v2.0.1 puts every AI surface under one permission model, adds Cheaper Inference as a provider, and fixes sessions that did not survive a restart.

AI permissions now work the same everywhere. Built-in chat, Data Studio, and external MCP clients share per-connection allow/deny decisions for read, create, update, delete, and structure or administration actions, with system defaults for whatever a connection inherits. Ask and Auto modes only control how often you confirm — neither grants a permission that the system default, the connection, or the conversation denies. Per-connection permissions are an Ultimate feature, and the restriction is enforced in the backend, not just the UI.

Blocked actions recover without losing the conversation. Blocked, rejected, and interrupted tool calls now say what stopped them, with Review permissions and Retry request actions to continue from where you were.

Elasticsearch write checks now match what a request can touch. Indexing with a generated ID needs create, indexing with an explicit ID also needs update, and scripted or bulk operations require every permission involved.

Cheaper Inference joins the AI provider list.

Several fixes make state stick. Sign-in and plan state survive restarts — concurrent token rotations no longer replay a consumed token, which could sign the device out or drop Ultimate access. Data Studio sources saved without their connection binding no longer report "Connection is no longer attached" after a reload, and AI permissions and source bindings persist across restarts instead of falling back to defaults.

A fresh install no longer pre-adds nine unusable third-party provider cards or contacts vendor domains for keys that were never configured. DynamoDB PartiQL errors stay at the top of the result pane, keep their formatting, wrap long diagnostics, scroll, and leave Close reachable.

This release also upgrades DOMPurify to address a critical advisory reported by the dependency audit.

DocKit 2.0.1 is available for macOS, Windows, and Linux. Read the [full changelog](https://github.com/geek-fun/dockit/releases/tag/v2.0.1) or [download DocKit](/download).

Links: [Download](/download) · [Pricing](/pricing) · [DocKit](/products/dockit/)
