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

# DocKit v2.0 Released

DocKit v2.0 is a major release: it introduces the **Ultimate** plan and a version-lock subscription model, expands AI provider support, and polishes the workflows you use every day.

**What's new in v2.0:**

- **Ultimate plan & version-lock licensing** — AI features, MongoDB import/export, SSH, HTTP/SOCKS proxying, AWS Profile/SSO/AssumeRole authentication, and the MCP bridge now require Ultimate. Settings shows your plan and version-lock state, with Geekfun login and logout built in. Releases published during a paid period stay unlocked under the version-lock model.
- **Three new AI providers** — API Route, Atlas Cloud, and Opper join the provider list, giving you more ways to connect a model to Data Studio.
- **Redesigned upgrade gates** — posters, motion, and Pro badges make it clear which features belong to which plan.
- **ES editor result layout** — dock query results to the bottom or to the right; DocKit remembers your choice.
- **Task Manager is now Ultimate** — background task management is part of the paid plan.
- **Reliable plan status** — a single session-phase source keeps the plan display consistent across the app, and the first entitlement check shows "Checking…" instead of "Unknown".
- **DynamoDB editing fixes** — Create Item reloads table keys when the table changes; Edit Item preserves sets, binary, NULL, false, and exact large numbers; attributes can be removed or renamed; duplicate keys are reported instead of overwritten.
- **Smaller fixes** — AI provider base URLs that already carry a version segment no longer get a duplicated version path, `dockit://auth` deep links survive a cold start, and accounts without a profile picture get a themed default avatar.

DocKit 2.0 is available for macOS, Windows, and Linux. Read the [full changelog](https://github.com/geek-fun/dockit/releases/tag/v2.0.0) or [download DocKit](/download).

**Links:** [Download](/download) · [Pricing](/pricing) · [DocKit](/products/dockit/)
