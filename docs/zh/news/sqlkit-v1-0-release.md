---
title: SqlKit v1.0 发布 — SSH 隧道、跨库浏览与更快的 JDBC 连接
description: SqlKit v1.0 新增 SSH 隧道、跨数据库元数据浏览、DuckDB 诊断与建库、结果表格即时排序，并显著加速 JDBC 连接。
date: 2026-10-18
head:
  - - meta
    - name: keywords
      content: SqlKit v1.0, SqlKit 发布, SSH 隧道, 跨库浏览, DuckDB GUI, SQL 客户端, JDBC 桥接, 开源发布
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/news/sqlkit-v1-0-release
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/news/sqlkit-v1-0-release
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/news/sqlkit-v1-0-release
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/news/sqlkit-v1-0-release
---

# SqlKit v1.0 发布

SqlKit 迎来 1.0，这是迄今为止最大的一次更新：通过 SSH 安全接入、跨库浏览、更快的 JDBC 桥接，以及 Ultimate 订阅与版本锁定授权。

**v1.0 新功能：**

- **Ultimate 订阅与版本锁定** — AI 功能、Transfer 模块、SSH 隧道和 MCP 桥接需要 Ultimate。账户与套餐设置页会显示版本锁定状态，并支持 Geekfun 登录/登出。
- **任意连接都可用 SSH 隧道** — 通过堡垒机连接，支持多跳链、可复用 SSH 配置、可选代理跳板、密码或 ED25519/RSA 密钥认证，以及首次使用信任（TOFU）的主机密钥固定；服务器密钥变更时提供恢复命令。
- **无需重连即可跨库浏览** — 表、列、索引、外键、视图、存储过程和触发器面板可以查看服务器上的任意数据库；PostgreSQL 和 SQL Server 会在后台使用短生命周期连接。
- **会解释原因的 DuckDB** — 连接失败时会给出原因和修复方式：文件被其他进程锁定（可在表单内直接以只读方式重试）、实例配置冲突、存储格式不兼容。连接表单还会显示 DuckDB 存储格式版本以及是否存在同名 `.wal` 文件。
- **在连接表单里创建 DuckDB / SQLite 数据库** — 新增 New… / Open… 操作，使用系统保存对话框，说明连接时会发生什么，并为每种引擎保留最近文件列表。DuckDB 还新增 File / In-Memory 标签页和只读访问模式（表单会说明只读模式目前需要更新的桥接构建）。
- **JDBC 连接大幅提速** — JRE 兼容性检查缓存 6 小时，已缓存的驱动 JAR 跳过 Maven 解析，多个连接共享同一个桥接进程。在同时缓存驱动类加载器的桥接构建下，测试中的热连接从约 4.3 秒降到 5.5 毫秒；当前已发布的桥接约为每次热连接 1.4 秒。
- **结果表格即时排序** — 排序在前端对已返回的数据执行，点击表头不再重新执行查询；数字、日期、布尔和文本混合的列也能稳定排序。
- **设置操作有进度反馈** — JRE/驱动安装、提供商同步和更新检查会内联显示进行中、成功或失败状态，并支持重试，不再静默失败。
- **更多数据库修复** — PostgreSQL 多语句批次保留全部结果集，MySQL 和 SQL Server 保持会话，Oracle 保留 PL/SQL 定义，以注释开头或以 `RETURNING` 结尾的语句现在会返回行，数值列的表头与数据对齐。

SqlKit 1.0 已支持 macOS、Windows 和 Linux。查看[完整更新日志](https://github.com/geek-fun/sqlkit/releases/tag/v1.0.0)或[下载 SqlKit](/zh/download)。

**链接：** [下载](/zh/download) · [定价](/zh/pricing) · [SqlKit](/zh/products/sqlkit/)
