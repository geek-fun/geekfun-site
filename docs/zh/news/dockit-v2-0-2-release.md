---
title: DocKit v2.0.2 发布 — 新增五家 AI 提供商与繁體中文界面
description: DocKit v2.0.2 新增 UberLLM、Standard Compute、cheapaimodel、CloudGPU 和 Runcrate 五家 AI 提供商，引入繁體中文界面，重构 DynamoDB Create Item 编辑器，并修复语言选择持久化和 PartiQL 分页问题。
date: 2026-11-13
head:
  - - meta
    - name: keywords
      content: DocKit v2.0.2, DocKit 发布, AI 提供商, UberLLM, Standard Compute, cheapaimodel, CloudGPU, Runcrate, 繁體中文, DynamoDB GUI, Elasticsearch GUI, NoSQL 客户端, 开源发布
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/news/dockit-v2-0-2-release
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

# DocKit v2.0.2 发布

DocKit v2.0.2 新增五家 AI 提供商和繁體中文界面，重构了 DynamoDB Create Item 编辑器，并让语言选择在重启后不再丢失。

AI 提供商再添五家。UberLLM、Standard Compute、cheapaimodel、CloudGPU 和 Runcrate 现在可以在配置连接时选择。与所有第三方预设一样，它们是可选加入的——只出现在「Add provider」列表里，不会被预置，未配置密钥前不会联系任何厂商域名（#539）（#541）（#543）。

界面现在支持繁體中文。新增的「繁體中文」选项以台湾用语翻译（如 資料庫、設定、連線），「跟随系统」在 zh-TW、zh-HK 和 zh-Hant 系统语言下会解析为繁體中文（#542）。

界面观感更一致。对话框、表格、编辑器和设置共用同一套字号规范，导航栏和连接卡片更紧凑，不再出现小于 11px 的文字（#537）。

DynamoDB Create Item 全面重构。属性以结构化表单编辑，支持类型选择和二进制文件加载，索引键以响应式网格排列。保存前校验键属性，结构化数字保留精确值，失败时给出具体原因，而不是静默失败。

多项修复让状态更可靠。在设置中选择的语言现在会跨重启保留，不再回退到系统语言自动检测，旧版本中的选择也会生效（#544）。DynamoDB 操作运行时显示进度，PartiQL 查询可以正确翻页浏览大结果集。

DocKit 2.0.2 支持 macOS、Windows 和 Linux。查看[完整更新日志](https://github.com/geek-fun/dockit/releases/tag/v2.0.2)或[下载 DocKit](/zh/download)。

链接：[下载](/zh/download) · [定价](/zh/pricing) · [DocKit](/zh/products/dockit/)
