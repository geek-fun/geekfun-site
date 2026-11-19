---
title: DocKit v2.0.3 Released — System Tray and Four New Languages
description: DocKit v2.0.3 keeps the app running in the system tray, adds Português (Brasil), Japanese, Korean, and Spanish interfaces, unifies Simplified Chinese detection, and fixes sign-in being blocked by locale sync.
date: 2026-11-19
head:
  - - meta
    - name: keywords
      content: DocKit v2.0.3, DocKit release, system tray, pt-BR, 日本語, 한국어, Español, Simplified Chinese detection, DynamoDB GUI, Elasticsearch GUI, MongoDB GUI, open source release
  - - link
    - rel: canonical
      href: https://www.geekfun.club/news/dockit-v2-0-3-release
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/news/dockit-v2-0-3-release
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/news/dockit-v2-0-3-release
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/news/dockit-v2-0-3-release
---

# DocKit v2.0.3 released

DocKit v2.0.3 keeps the app running in the system tray, adds four new interface languages, and stops locale sync from blocking sign-in.

Closing the window no longer quits the app. DocKit moves to the system tray and keeps background tasks and the MCP server running; Show Window or Quit in the tray menu brings the session back or exits the app.

Four more languages join the interface. Português (Brasil), 日本語, 한국어, and Español are now available alongside English and Simplified and Traditional Chinese, and the tray menu speaks the language you picked.

Simplified Chinese detection follows one standard. A bare zh or zh-SG system locale now resolves to 简体中文, while ambiguous zh tags fall back to English.

Sign-in no longer waits on locale sync. A slow locale handshake cannot hold the login screen, and the app reports your interface language during device activation and session refresh.

DocKit 2.0.3 is available for macOS, Windows, and Linux. Read the [full changelog](https://github.com/geek-fun/dockit/releases/tag/v2.0.3) or [download DocKit](/download).

Links: [Download](/download) · [Pricing](/pricing) · [DocKit](/products/dockit/)
