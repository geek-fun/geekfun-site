---
title: DocKit v2.0 发布 — Ultimate 订阅、版本锁定授权与更多 AI 提供商
description: DocKit v2.0 引入 Ultimate 订阅与版本锁定授权，新增三家 AI 提供商，重做升级引导，ES 编辑器结果面板可停靠底部或右侧，并修复一批 DynamoDB 数据编辑问题。
date: 2026-10-18
head:
  - - meta
    - name: keywords
      content: DocKit v2.0, DocKit 发布, Ultimate 订阅, 版本锁定, AI 提供商, DynamoDB GUI, Elasticsearch GUI, NoSQL 客户端, 开源发布
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/news/dockit-v2-0-release
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

# DocKit v2.0 发布

DocKit v2.0 是一次大版本更新：引入 **Ultimate** 订阅与版本锁定授权模型，扩充 AI 提供商支持，并打磨日常使用中最常用的操作流程。

**v2.0 新功能：**

- **Ultimate 订阅与版本锁定授权** — AI 功能、MongoDB 导入导出、SSH、HTTP/SOCKS 代理、AWS Profile/SSO/AssumeRole 认证和 MCP 桥接现在需要 Ultimate。设置页会显示当前套餐与版本锁定状态，并内置 Geekfun 登录/登出。按版本锁定模型，在付费期内发布的版本会保持解锁。
- **三家新 AI 提供商** — API Route、Atlas Cloud 和 Opper 加入提供商列表，连接模型到 Data Studio 多了更多选择。
- **重做的升级引导** — 海报、动效和 Pro 标识，让你一眼看出功能属于哪个套餐。
- **ES 编辑器结果布局** — 查询结果可以停靠在底部或右侧，DocKit 会记住你的选择。
- **任务管理器改为 Ultimate 功能** — 后台任务管理归入付费套餐。
- **更可靠的套餐状态** — 统一由单一会话阶段数据源驱动，套餐显示在应用内保持一致；首次权益检查期间显示「检查中…」而不是「未知」。
- **DynamoDB 编辑修复** — 切换表时 Create Item 会重新加载表键；Edit Item 会保留集合、二进制、NULL、false 和精确的大数；属性可以删除或重命名；重复键会给出提示而不是覆盖。
- **其他修复** — 已带版本段的 AI 提供商 Base URL 不会再重复拼接版本路径；`dockit://auth` 深链接在冷启动时不再丢失令牌；没有头像的账号会获得主题化默认头像。

DocKit 2.0 已支持 macOS、Windows 和 Linux。查看[完整更新日志](https://github.com/geek-fun/dockit/releases/tag/v2.0.0)或[下载 DocKit](/zh/download)。

**链接：** [下载](/zh/download) · [定价](/zh/pricing) · [DocKit](/zh/products/dockit/)
