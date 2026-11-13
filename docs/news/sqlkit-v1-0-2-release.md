---
title: SqlKit v1.0.2 Released — New AI Provider Presets and a Refined Workspace
description: SqlKit v1.0.2 adds UberLLM, CloudGPU, and Runcrate AI provider presets, unifies the workspace type scale and density, and fixes IME Enter handling in AI chat.
date: 2026-11-13
head:
  - - meta
    - name: keywords
      content: SqlKit v1.0.2, SqlKit release, AI provider presets, UberLLM, CloudGPU, Runcrate, UI density, IME fix, SQL client, PostgreSQL GUI, MySQL GUI, open source release
  - - link
    - rel: canonical
      href: https://www.geekfun.club/news/sqlkit-v1-0-2-release
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/news/sqlkit-v1-0-2-release
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/news/sqlkit-v1-0-2-release
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/news/sqlkit-v1-0-2-release
---

# SqlKit v1.0.2 released

SqlKit v1.0.2 adds three AI provider presets, unifies the workspace type scale and density, and fixes IME input in AI chat.

![SqlKit workspace: object tree, SQL editor with query tabs, and result grid](/sqlkit-sql-editor-ui.png)

Three OpenAI-compatible presets join AI settings: UberLLM (base URL `https://api.uberllm.dev/v1`), CloudGPU (base URL `https://cloudgpu.app/v1`), and Runcrate (base URL `https://api.runcrate.ai/v1`). Pick one, add your API key, and the provider is ready to use.

The workspace uses a unified type scale. Sidebar trees and query tabs move up to the 13px body tier for comfortable reading. The navigation rail, object tree, and toolbars are more compact and consistent. Buttons, dialogs, and status text share one sizing system across the app.

In AI chat, pressing Enter to confirm an IME candidate during Chinese or Japanese input no longer sends the message. The candidate commits first, and the message goes out only when you press Enter to send.

![Data Studio: asking questions about your data in AI chat](/sqlkit-data-studio-ui.png)

SqlKit 1.0.2 is available for macOS, Windows, and Linux. Read the [full changelog](https://github.com/geek-fun/sqlkit/releases/tag/v1.0.2) or [download SqlKit](/download).

Links: [Download](/download) · [Pricing](/pricing) · [SqlKit](/products/sqlkit/)
