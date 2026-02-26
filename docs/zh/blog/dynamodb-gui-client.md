---
title: 使用 DocKit 管理操作 DynamoDB 表
description: 使用 DocKit 管理 DynamoDB 表变得更加简单 - 一款强大的桌面 GUI 客户端，具有直观的数据浏览、PartiQL 查询支持、内联编辑和跨平台兼容性。告别 AWS 控制台的困扰和 CLI 的复杂性。
head:
  - - meta
    - name: keywords
      content: DynamoDB GUI客户端, DynamoDB桌面客户端, DynamoDB可视化工具, DynamoDB管理工具, DynamoDB PartiQL, NoSQL GUI客户端, DynamoDB查询工具, AWS DynamoDB客户端, DynamoDB数据管理, DynamoDB桌面工具, DocKit DynamoDB, DynamoDB本地
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/blog/dynamodb-gui-client
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/dynamodb-gui-client
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/dynamodb-gui-client
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/dynamodb-gui-client
---

# 使用 DocKit 管理 DynamoDB 表让生活更轻松

AWS DynamoDB 作为 Serverless NoSQL 数据库提供了高性能，高伸缩性的新型数据库，在开发面对不可预知的流量的应用程序时有着独到的优势。但在 AWS 控制台上进行增删改查（CURD）可谓是一眼难尽，网页界面很容易容易误操作和丢失输入内容，一个不小心你就回退到之前的页面，你辛辛苦苦写的条件、SQL也就不翼而飞了。现有的桌面客户端如 [dynobase](https://dynobase.dev/) 和 [dynomate](https://www.dynomate.io/) 都是闭源的，并且dynobase已经很久没有更新了。

这也是我们构建 [DocKit](/zh/products/dockit/) 并支持 DynamoDB 的原因，从 **v0.8** 开始，你可以使用针对 DynaomoDB 而设计的 UI 和 PartiQL 在桌面上连接、查询和管理 DynamoDB 数据表，一如你习以为常的传统 SQ L数据库管理方式。

![DocKit DynamoDB UI](/dockit-dynamodb.png)

## 什么是 DocKit？

DocKit 是一款**开源跨平台 GUI 桌面客户端，专为 NoSQL 数据库设计**，包括 **DynamoDB**、**Elasticsearch** 和 **OpenSearch**。让我们可以逃离粗糙简陋的第一方工具，不需要写冗长的 CLI 命令，获得和管理关系型数据库一样的体验。

### 主要特性

- **便捷友好的用户界面**：使用 DocKit 直观的桌面界面操作 DynamoDB 数据。
- **PartiQL 语法支持**：为 DynamoDB 编写类 SQL 查询，具有表名、属性和操作符的智能自动补全和错误提示。
- **可视化查询 UI**：通过 UI 交互构建  DynamoDB 的Scan、Query 以及写入新的数据，告别在CLI上 “拼好template”
- **跨平台支持**：适适配 Mac、Windows 和 Linux，确保与的操作系统兼容。
- **开源**：DocKit 是一个开源项目，致力于社区贡献和持续改进。
- **多连接和数据库引擎**：支持同时连接多个 Elasticsearch、OpenSearch 和 DynamoDB 数据库，可以快速在 DocKit中切换不同的数据库。
- **持久化查询和连接管理**：所有连接和 PartiQL 脚本都可以保存并持久化到文件系统，永远不会丢失您的工作。可以随时查找和使用常用脚本，即使在关闭并重新打开 DocKit 后也是如此。


## 在 DocKit 中使用 DynamoDB

### 添加 DynamoDB 连接

打开 DocKit， 从主页面，您只需几步即可添加新的 DynamoDB 连接：

1. 点击 **➕（加号）**按钮创建新连接
2. 选择 **DynamoDB** 作为数据库类型，然后提供连接信息以建立连接
![DocKit DynamoDB 新建连接对话框](/dockit-dynamodb-connection.png)
3. 您可以点击 **测试连接** 在保存之前验证凭据
5. 保存连接

保存后的 DynamoDB 连接将出现在连接列表中，可以选择连接或直接双击来连接到 DynamoDB，连接成功后将重定向到查询面板

## 使用查询交互界面浏览和编辑数据

打开 DynamoDB 连接后，DocKit 重定向到查询面板，我们可以在其中使用专为 DynamoDB 设计的 **查询 UI** 管理数据。

![DocKit DynamoDB 查询 UI](/dockit-dynamodb-query-ui.png)

- **扫描**：界面允许您选择任何**表**和可选的**辅助索引**，然后直接运行**扫描**操作，以清晰、结构化的表格格式查看结果。
- **查询**：使用特定的分区键和排序键条件执行查询，以高效检索目标数据。
- **高级过滤器**：通过**主键**过滤并添加**附加条件**（如等于、小于或大于操作）来优化结果
- **数据修改**：只需点击结果表中的任何字段，更改其值，确认，更新即会立即应用——无需编辑 JSON。
- **删除记录**：支持直接在返回结果的数据表上删除记录，方便快捷。

## 使用 PartiQL 管理 DynamoDB

如果需要使用 PartiQL 来操作 DynamoDB ，DocKit 同样也包含了一个功能强大的 **PartiQL 编辑器**，它实现了 AWS 为 DynamoDB 而设计的 PartiQL 的自动补全，语法高亮及错误提示，助力基于 PartiQL 的功能开发和快速查询。

![DocKit DynamoDB PartiQL 编辑器](/dockit-dynamodb-partiql.png)

- **完善的 PartiQL 支持**：直接对您的 DynamoDB 表执行所有 PartiQL 操作，如 `SELECT`、`DELETE`、`UPDATE` 等。
- **结果操作**：直接从查询结果修改或删除项目——无需编写单独的更新查询。
- **智能自动完成**：表名、属性名、操作符和关键字的全面自动完成大大减少了错误并加快了查询编写速度。
- **示例查询**：内置示例查询帮助您快速入门并通过示例学习 PartiQL 语法。
- **脚本持久化**：按 **Cmd + S**（或 `Ctrl + S`）将您的 PartiQL 查询保存到文件系统。保存的脚本可以在 **文件面板**中查看和打开。

有关 PartiQL 语法和功能的更多详细信息，请查看 [AWS 官方文档](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ql-reference.html)和 [PartiQL 规范](https://partiql.org/)。

## 通过 UI 创建新项目

DocKit 还使项目创建变得简单——无需 JSON 模板。通过点击工具栏中的 `创建项目`，它将重定向您到创建项目 UI，使用 UI，您可以：

* 定义分区键和排序键
* 设置属性值
* 只需点击几下即可创建新项目

![DocKit DynamoDB 通过 UI 创建项目](/dockit-dynamodb-create-item.png)

创建后，您可以立即使用查询 UI 或 PartiQL 编辑器查询该项目以验证结果。

## What's Next?

DocKit v0.8 为 DynamoDB 的管理与操作带来了与管理关系型数据库一样的体验，交互式操作以及 PartiQL。项目仍在积极开发中，我们将继续为 NoSQL 管理体验带来更多功能和改进，下一步，将让 DocKit 进入 agentic 的时代，这将是另一个维度的体验跃升！敬请期待 🚀

欢迎试用及反馈，无论是功能请求、错误报告还是改进建议。都可以在 GitHub 找到我们！

**官方网站**：[https://www.geekfun.club/products/dockit/](/zh/products/dockit/)

**GitHub**：[https://github.com/geek-fun/dockit](https://github.com/geek-fun/dockit)

