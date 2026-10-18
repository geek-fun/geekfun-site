---
title: DocKit v2.0 Released — Ultimate Plan, Version-Lock Licensing & More AI Providers
description: DocKit v2.0 introduces the Ultimate plan with version-lock licensing, three new AI providers, redesigned upgrade gates, a movable ES result panel, and a batch of DynamoDB data-editing fixes.
date: 2026-10-18
head:
  - - meta
    - name: keywords
      content: DocKit v2.0, DocKit release, Ultimate plan, version-lock subscription, AI providers, DynamoDB GUI, Elasticsearch GUI, NoSQL client, open source release
  - - link
    - rel: canonical
      href: https://www.geekfun.club/news/dockit-v2-0-release
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/news/dockit-v2-0-release
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/news/dockit-v2-0-release
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/news/dockit-v2-0-release
---

# DocKit v2.0 released

DocKit v2.0 adds the Ultimate plan and version-lock licensing, three more AI providers, and fixes for DynamoDB editing and plan status.

These features now require Ultimate: AI features, MongoDB import/export, SSH, HTTP/SOCKS proxying, AWS Profile/SSO/AssumeRole authentication, and the MCP bridge. Settings shows your current plan and version-lock state, with Geekfun login and logout. Under version-lock, releases published during a paid period stay unlocked.

Data Studio supports API Route, Atlas Cloud, and Opper, so you can use more model providers. The upgrade prompts have new posters, motion, and Pro badges that show which plan a feature belongs to.

The ES editor can dock query results to the bottom or the right, and DocKit remembers the choice. The Task Manager is now an Ultimate feature.

Plan status now comes from one session-phase source, so the display stays consistent across the app. The first entitlement check shows "Checking…" instead of "Unknown".

DynamoDB editing got several fixes. Create Item reloads table keys when the table changes. Edit Item keeps sets, binary values, NULL, false, and exact large numbers. You can remove or rename attributes, and duplicate keys are reported instead of overwritten.

Elsewhere, AI provider base URLs that already include a version segment no longer get a second one, `dockit://auth` links survive a cold start, and accounts without a profile picture get a themed default avatar.

DocKit 2.0 is available for macOS, Windows, and Linux. Read the [full changelog](https://github.com/geek-fun/dockit/releases/tag/v2.0.0) or [download DocKit](/download).

Links: [Download](/download) · [Pricing](/pricing) · [DocKit](/products/dockit/)
