---
title: DocKit v2.0.3 发布 — 系统托盘常驻与四种新语言
description: DocKit v2.0.3 支持关闭窗口后常驻系统托盘，新增 Português (Brasil)、日本語、한국어 和 Español 界面语言，统一简体中文识别标准，并修复语言同步阻塞登录的问题。
date: 2026-11-19
head:
  - - meta
    - name: keywords
      content: DocKit v2.0.3, DocKit 发布, 系统托盘, pt-BR, 日本語, 한국어, Español, 简体中文识别, DynamoDB GUI, Elasticsearch GUI, MongoDB GUI, 开源发布
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/news/dockit-v2-0-3-release
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

# DocKit v2.0.3 发布

DocKit v2.0.3 支持关闭窗口后常驻系统托盘，并新增四种界面语言，让会话在窗口关闭后依然存活，也让更多人能用母语工作。

关闭窗口不再退出应用。DocKit 会移入系统托盘，后台任务和 MCP server 继续运行；托盘图标菜单里的「Show Window」或「Quit」可以召回会话或彻底退出。

界面再添四种语言。Português (Brasil)、日本語、한국어 和 Español 现在与英文、简体中文、繁體中文并列，托盘菜单也会跟随你选择的语言。

简体中文识别有了统一标准。裸 zh 和 zh-SG 系统语言现在解析为简体中文，含糊的 zh 标签仍回退到默认语言，不做错误的猜测。

登录不再被语言同步拖住。语言握手再慢也不会卡住登录界面，应用还会在设备激活时上报界面语言，保证账号在各设备间保持一致。

DocKit 2.0.3 支持 macOS、Windows 和 Linux。查看[完整更新日志](https://github.com/geek-fun/dockit/releases/tag/v2.0.3)或[下载 DocKit](/zh/download)。

链接：[下载](/zh/download) · [定价](/zh/pricing) · [DocKit](/zh/products/dockit/)
