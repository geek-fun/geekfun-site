---
title: SqlKit v1.0.1 发布 — 统一 AI 权限、结果分页与石墨主题
description: SqlKit v1.0.1 统一 Data Studio 与 MCP 客户端的 AI 权限，新增结果分页、分层智能体提示词与石墨暗色主题，并修复重启后登录状态丢失的问题。
date: 2026-10-28
head:
  - - meta
    - name: keywords
      content: SqlKit v1.0.1, SqlKit 发布, AI 权限, 结果分页, 智能体提示词, 石墨主题, SQL 客户端, PostgreSQL GUI, MySQL GUI, 开源发布
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/news/sqlkit-v1-0-1-release
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/news/sqlkit-v1-0-1-release
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/news/sqlkit-v1-0-1-release
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/news/sqlkit-v1-0-1-release
---

# SqlKit v1.0.1 发布

SqlKit v1.0.1 统一了 AI 权限，结果支持分页，新增分层智能体提示词，工作区换上石墨配色。

AI 权限处处使用同一套策略。按连接的访问级别覆盖系统默认值，单个操作可以在 Custom 中细调——Data Studio 和 MCP 客户端同样适用。编辑权限需要 Ultimate。被拦截的智能体操作可以就地恢复：拒绝信息会标明连接、所需操作和数据来源，Review permissions 和 Retry request 会开启新一轮，而不重放之前的工作。权限变更立即对智能体调度生效，历史的拒绝会标注为之前的尝试，不会让人误以为当前仍被拒绝。

智能体提示词支持分层。AI 设置中的全局系统提示词，加上每个连接可选的提示词，让智能体在任何地方运行都带有业务上下文。

查询结果和表视图支持分页。可以设置每页行数、跳转首页或末页，或显示全部返回行；排序作用于当前页。表和结果的底栏会显示当前数据库、影响行数、执行时间，以及列、索引、外键和触发器的分栏计数。

工作区使用石墨暗色主题和一致的语义色，同时保留你熟悉的数据、状态和数据库类型识别线索。设置页把账户、套餐、主题和更新控件合并到 General 标签页，表格视图和结果网格使用同一套分页控件。表上下文菜单以 View Data 为首选项，View Structure 直接打开到 schema 子页，每个标签页会记住你上次浏览的子页，数据库菜单新增 Create Script。SSH 隧道详情在你显式编辑前保持只读，已保存的多跳链不会再显示可编辑的空字段。

会话在应用重启后保持有效——登录状态和权益都会恢复，重叠的会话刷新不再互相失效。空闲连接会在数据库操作执行前自动恢复：元数据浏览、查询、编辑、DDL、数据迁移和 AI/MCP 工具都会替换失效的会话，而不是直接失败。返回多个结果集的 PostgreSQL 脚本会保留全部结果集，并可以在结果集之间切换。

AI 设置新增 Cheaper Inference 预设（OpenAI 兼容，Base URL 为 `https://api.cheaperinference.com/v1`）。数据源权限弹窗改为与权限编辑器一致的单选卡片和开关行，并有明确的解除绑定确认，About 合并进设置页并显示当前运行的应用版本。

安全方面，DOMPurify 升级获取了上游修复（包括 Monaco 捆绑的副本），移除了一个允许从 WebView 调用任意能力的未使用命令，权限清理只针对已不存在的连接。

SqlKit 1.0.1 支持 macOS、Windows 和 Linux。查看[完整更新日志](https://github.com/geek-fun/sqlkit/releases/tag/v1.0.1)或[下载 SqlKit](/zh/download)。

链接：[下载](/zh/download) · [定价](/zh/pricing) · [SqlKit](/zh/products/sqlkit/)
