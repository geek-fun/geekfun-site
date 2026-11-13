---
title: DocKit v2.0.2 Released — Five New AI Providers & Traditional Chinese
description: DocKit v2.0.2 adds UberLLM, Standard Compute, cheapaimodel, CloudGPU, and Runcrate as AI providers, introduces a Traditional Chinese interface, reworks the DynamoDB Create Item editor, and fixes language persistence and PartiQL pagination.
date: 2026-11-13
head:
  - - meta
    - name: keywords
      content: DocKit v2.0.2, DocKit release, AI providers, UberLLM, Standard Compute, cheapaimodel, CloudGPU, Runcrate, Traditional Chinese, DynamoDB GUI, Elasticsearch GUI, NoSQL client, open source release
  - - link
    - rel: canonical
      href: https://www.geekfun.club/news/dockit-v2-0-2-release
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/news/dockit-v2-0-2-release
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/news/dockit-v2-0-2-release
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/news/dockit-v2-0-2-release
---

# DocKit v2.0.2 released

DocKit v2.0.2 adds five AI providers and a Traditional Chinese interface, reworks the DynamoDB Create Item editor, and makes your language choice stick across restarts.

Five more AI providers join the list. UberLLM, Standard Compute, cheapaimodel, CloudGPU, and Runcrate are available when configuring a connection. Like every third-party preset, they are opt-in — they appear under Add provider and are never pre-added, so nothing contacts a vendor domain until you configure a key (#539) (#541) (#543).

The interface now speaks Traditional Chinese. The new 繁體中文 option is translated with Taiwan terminology (資料庫, 設定, 連線), and Follow OS resolves zh-TW, zh-HK, and zh-Hant system locales to it (#542).

The app reads consistently. One shared text scale now covers dialogs, tables, editors, and settings, the navigation rail and connection cards are slimmer, and sub-11px text is gone (#537).

DynamoDB Create Item is reworked. Attributes are edited in a structured form with typed fields and binary file loading, and index keys sit in a responsive grid. Key attributes are validated before save, structured numbers keep their exact value, and failures report the reason instead of failing silently.

Fixes make state stick. A language picked in settings now survives restarts instead of reverting to OS auto-detection, and choices made in earlier versions take effect too (#544). DynamoDB operations show progress while running, and PartiQL queries page through large result sets correctly.

DocKit 2.0.2 is available for macOS, Windows, and Linux. Read the [full changelog](https://github.com/geek-fun/dockit/releases/tag/v2.0.2) or [download DocKit](/download).

Links: [Download](/download) · [Pricing](/pricing) · [DocKit](/products/dockit/)
