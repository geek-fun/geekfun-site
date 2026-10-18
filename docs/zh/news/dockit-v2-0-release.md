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

DocKit v2.0 加入 Ultimate 订阅和版本锁定授权，新增三家 AI 提供商，并修复了 DynamoDB 编辑和套餐状态的问题。

以下功能现在需要 Ultimate：AI 功能、MongoDB 导入导出、SSH、HTTP/SOCKS 代理、AWS Profile/SSO/AssumeRole 认证和 MCP 桥接。设置页会显示当前套餐和版本锁定状态，也可以在这里登录或退出 Geekfun。按版本锁定规则，付费期内发布的版本会保持解锁。

Data Studio 支持 API Route、Atlas Cloud 和 Opper，可以选择更多模型提供商。升级提示换了新的海报、动效和 Pro 标识，能看出功能属于哪个套餐。

ES 编辑器的结果面板可以停靠到底部或右侧，DocKit 会记住你的选择。任务管理器现在是 Ultimate 功能。

套餐状态改由单一的会话阶段数据源驱动，应用内显示保持一致。首次权益检查会显示「检查中…」，不再显示「未知」。

DynamoDB 编辑修复了几处问题。切换表时，Create Item 会重新加载表键。Edit Item 会保留集合、二进制、NULL、false 和精确的大数。属性可以删除或重命名，重复键会提示，不再覆盖。

其他修复包括：带版本段的 AI 提供商 Base URL 不会再重复拼接版本路径，`dockit://auth` 深链接在冷启动时不会丢令牌，没有头像的账号会得到主题化默认头像。

DocKit 2.0 支持 macOS、Windows 和 Linux。查看[完整更新日志](https://github.com/geek-fun/dockit/releases/tag/v2.0.0)或[下载 DocKit](/zh/download)。

链接：[下载](/zh/download) · [定价](/zh/pricing) · [DocKit](/zh/products/dockit/)
