---
title: SqlKit v1.0.2 发布 — 新增 AI 提供商预设与更精致的工作区
description: SqlKit v1.0.2 新增 UberLLM、CloudGPU、Runcrate 三个 AI 提供商预设，统一工作区字号与密度，并修复 AI 聊天中输入法回车误发送的问题。
date: 2026-11-13
head:
  - - meta
    - name: keywords
      content: SqlKit v1.0.2, SqlKit 发布, AI 提供商预设, UberLLM, CloudGPU, Runcrate, 界面密度, 输入法修复, SQL 客户端, PostgreSQL GUI, MySQL GUI, 开源发布
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/news/sqlkit-v1-0-2-release
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

# SqlKit v1.0.2 发布

SqlKit v1.0.2 新增三个 AI 提供商预设，统一了工作区字号与密度，并修复 AI 聊天中的输入法回车问题。

![SqlKit 工作区：对象树、SQL 编辑器与查询标签页、结果网格](/sqlkit-sql-editor-ui.png)

AI 设置新增三个 OpenAI 兼容预设：UberLLM（Base URL `https://api.uberllm.dev/v1`）、CloudGPU（Base URL `https://cloudgpu.app/v1`）和 Runcrate（Base URL `https://api.runcrate.ai/v1`）。选择预设、填入 API Key 即可使用。

工作区使用统一的字号体系。侧边栏树和查询标签页提升到 13px 正文档位；导航栏、对象树和工具栏更紧凑。按钮、对话框和状态文本共用同一套尺寸。

在 AI 聊天中，中文或日文输入法确认候选词时按回车不再直接发送消息——候选词先正常上屏，只有你真正按下回车发送时消息才会发出。

![Data Studio：在 AI 聊天中向数据提问](/sqlkit-data-studio-ui.png)

SqlKit 1.0.2 支持 macOS、Windows 和 Linux。查看[完整更新日志](https://github.com/geek-fun/sqlkit/releases/tag/v1.0.2)或[下载 SqlKit](/zh/download)。

链接：[下载](/zh/download) · [定价](/zh/pricing) · [SqlKit](/zh/products/sqlkit/)
