---
title: SqlKit v1.0.3 发布 — 支持 Apache Cassandra 与 ScyllaDB
description: SqlKit v1.0.3 新增 Apache Cassandra 和 ScyllaDB 支持（CQL 连接、keyspace 浏览、CQL 感知 SQL 门控），设置中新增语言切换器并加入 zh-TW、pt-BR、ja、ko、es 语言，支持关闭窗口后常驻系统托盘，并修复标题栏拖动问题。
date: 2026-11-19
head:
  - - meta
    - name: keywords
      content: SqlKit v1.0.3, SqlKit 发布, Apache Cassandra, ScyllaDB, CQL, keyspace, SQL 客户端, 语言切换器, 系统托盘, PostgreSQL GUI, MySQL GUI, 开源发布
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/news/sqlkit-v1-0-3-release
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/news/sqlkit-v1-0-3-release
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/news/sqlkit-v1-0-3-release
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/news/sqlkit-v1-0-3-release
---

# SqlKit v1.0.3 发布

SqlKit v1.0.3 新增 Apache Cassandra 和 ScyllaDB 支持，设置中加入语言切换器并扩展五种语言，同时支持关闭窗口后常驻系统托盘。

Apache Cassandra 和 ScyllaDB 正式受支持。通过 CQL 连接，基于 `system_schema` 浏览 keyspace 和表，在同一个编辑器里执行 CQL 和 SQL 语句。连接表单中这两款引擎的数据库字段会标注为 Keyspace，TLS 跟随 sslmode 设置（`prefer` 保持明文连接），多语句 SQL 门控也能理解 CQL 而不再解析失败。两款数据库紧随 TimescaleDB 出现在引擎列表中，使用各自的官方 logo。

![SqlKit 工作区：对象树、SQL 编辑器与查询标签页、结果网格](/sqlkit-sql-editor-ui.png)

界面新增语言切换器。在设置中可以选择繁體中文、Português (Brasil)、日本語、한국어 或 Español，选择会跨重启保留，简体中文的识别也采用了与 DocKit 相同的统一标准。

关闭窗口不再退出应用。SqlKit 会移入系统托盘，后台任务继续运行，托盘菜单提供 Show Window 和 Quit。

两个修复收尾。标题栏拖动恢复正常，SQLite 适配器遇到空语句或纯注释语句会直接短路返回，不再报错。

![Data Studio：在 AI 聊天中向数据提问](/sqlkit-data-studio-ui.png)

SqlKit 1.0.3 支持 macOS、Windows 和 Linux。查看[完整更新日志](https://github.com/geek-fun/sqlkit/releases/tag/v1.0.3)或[下载 SqlKit](/zh/download)。

链接：[下载](/zh/download) · [定价](/zh/pricing) · [SqlKit](/zh/products/sqlkit/)
