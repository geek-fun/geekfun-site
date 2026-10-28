---
title: DocKit v2.0.1 发布 — 统一 AI 权限模型与会话修复
description: DocKit v2.0.1 将聊天、Data Studio 与 MCP 客户端纳入统一的 AI 权限模型，新增 Cheaper Inference 提供商，并修复重启后登录状态丢失、Data Studio 数据源掉线与 DynamoDB PartiQL 错误显示问题。
date: 2026-10-28
head:
  - - meta
    - name: keywords
      content: DocKit v2.0.1, DocKit 发布, AI 权限, Cheaper Inference, Data Studio, MCP 客户端, DynamoDB GUI, Elasticsearch GUI, NoSQL 客户端, 开源发布
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/news/dockit-v2-0-1-release
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/news/dockit-v2-0-1-release
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/news/dockit-v2-0-1-release
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/news/dockit-v2-0-1-release
---

# DocKit v2.0.1 发布

DocKit v2.0.1 把所有 AI 入口纳入同一套权限模型，新增 Cheaper Inference 提供商，并修复了重启后登录状态丢失的问题。

AI 权限现在处处一致。内置聊天、Data Studio 和外部 MCP 客户端共用按连接的允许/拒绝决策，覆盖读、创建、更新、删除和结构/管理操作，连接继承的部分使用系统默认值。Ask 和 Auto 模式只控制确认频率——系统默认、连接或会话已拒绝的权限不会被放行。按连接的权限是 Ultimate 功能，限制在后端强制执行，而不只是 UI 拦截。

被拦截的操作可以就地恢复，不会丢掉对话。被拦截、拒绝和中断的工具调用会说明原因，并提供 Review permissions 和 Retry request 操作，从原处继续。

Elasticsearch 写检查现在与请求的实际影响一致。使用生成 ID 写入需要 create，使用显式 ID 还需要 update，脚本或批量操作需要涉及的每一个权限。

Cheaper Inference 加入了 AI 提供商列表。

多项修复让状态更可靠。登录和套餐状态在重启后保持不变——并发令牌轮换不会再重放已使用的令牌，导致设备被登出或丢失 Ultimate 权益。保存时缺少连接绑定的 Data Studio 数据源，重新加载后不会再报「Connection is no longer attached」。AI 权限和数据源绑定会跨重启持久化，不再回退到默认值。

全新安装不再预置九张无法使用的第三方提供商卡片，也不会去联系从未配置过密钥的厂商域名。DynamoDB PartiQL 错误固定在结果面板顶部，保留格式，长诊断可以换行滚动，Close 按钮始终可达。

本次发布还升级了 DOMPurify，处理依赖审计报告的一个严重安全通告。

DocKit 2.0.1 支持 macOS、Windows 和 Linux。查看[完整更新日志](https://github.com/geek-fun/dockit/releases/tag/v2.0.1)或[下载 DocKit](/zh/download)。

链接：[下载](/zh/download) · [定价](/zh/pricing) · [DocKit](/zh/products/dockit/)
