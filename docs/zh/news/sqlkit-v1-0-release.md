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

SqlKit 1.0 加入 SSH 隧道、跨库浏览、DuckDB 诊断和更快的 JDBC 连接，并引入 Ultimate 订阅和版本锁定授权。

AI 功能、Transfer 模块、SSH 隧道和 MCP 桥接现在需要 Ultimate。账户与套餐设置页会显示版本锁定状态，也可以登录或退出 Geekfun。

SSH 隧道适用于任意连接。可以通过堡垒机连接，支持多跳链、可复用的 SSH 配置、可选的代理跳板，以及密码或 ED25519/RSA 密钥认证。主机密钥在首次连接时固定，服务器密钥变更后可以用恢复命令处理。

表、列、索引、外键、视图、存储过程和触发器面板现在可以查看服务器上的任意数据库，不用重连。PostgreSQL 和 SQL Server 会在后台打开一个短生命周期连接来完成这件事。

DuckDB 连接失败时会说明原因和修复方式。文件被其他进程锁定、实例配置冲突和存储格式不兼容各有对应的提示，文件锁定的情况可以在表单里直接以只读方式重试。表单还会显示 DuckDB 存储格式版本，以及是否存在同名 `.wal` 文件。

可以在连接表单里创建 DuckDB 和 SQLite 数据库。New… 和 Open… 使用系统保存对话框，表单会说明连接时会发生什么，每种引擎都有最近文件列表。DuckDB 新增 File 和 In-Memory 标签页，以及只读访问模式；表单会注明只读模式目前需要更新的桥接构建。

JDBC 连接更快了。JRE 兼容性检查缓存 6 小时，已缓存的驱动 JAR 跳过 Maven 解析，多个连接共享同一个桥接进程。测试中，在同时缓存驱动类加载器的桥接构建下，热连接从约 4.3 秒降到 5.5 毫秒。当前发布的桥接约为每次热连接 1.4 秒。

结果表格在前端对已返回的数据排序，点击表头不会重新执行查询。数字、日期、布尔和文本混合的列也能稳定排序。

设置操作现在会内联显示进行中、成功或失败状态，并支持重试，不再静默失败。这包括 JRE 和驱动安装、提供商同步以及更新检查。

数据库修复：PostgreSQL 多语句批次保留全部结果集；MySQL 和 SQL Server 保持会话；Oracle 保留 PL/SQL 定义；以注释开头或以 `RETURNING` 结尾的语句现在会返回行；数值列的表头与数据对齐。

SqlKit 1.0 支持 macOS、Windows 和 Linux。查看[完整更新日志](https://github.com/geek-fun/sqlkit/releases/tag/v1.0.0)或[下载 SqlKit](/zh/download)。

链接：[下载](/zh/download) · [定价](/zh/pricing) · [SqlKit](/zh/products/sqlkit/)
