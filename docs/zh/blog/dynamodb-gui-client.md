---
title: 使用 DocKit 管理 DynamoDB 表让生活更轻松
description: 使用 DocKit 管理 DynamoDB 表变得更加简单 - 一款强大的桌面 GUI 客户端，具有直观的数据浏览、PartiQL 查询支持、内联编辑和跨平台兼容性。告别 AWS 控制台的困扰和 CLI 的复杂性。
head:
  - - meta
    - name: keywords
      content: DynamoDB GUI客户端, DynamoDB桌面客户端, DynamoDB可视化工具, DynamoDB管理工具, DynamoDB PartiQL, NoSQL GUI客户端, DynamoDB查询工具, AWS DynamoDB客户端, DynamoDB数据管理, DynamoDB桌面工具, DocKit DynamoDB, DynamoDB本地
---

# 使用 DocKit 管理 DynamoDB 表让生活更轻松

虽然 DynamoDB 作为无服务器 NoSQL 数据库提供了高性能，但通过 AWS 控制台管理它可能会令人沮丧，基于网页的界面容易误操作和丢失输入内容。现有的桌面客户端如 [dynobase](https://dynobase.dev/) 和 [dynomate](https://www.dynomate.io/) 都是闭源的，并且似乎缺乏活跃的维护。

这就是我们构建 [DocKit](https://dockit.geekfun.club/) 并支持 DynamoDB 的原因，从 **v0.8** 开始——一款开源的桌面 GUI 客户端，让您可以使用友好的 UI 和 PartiQL 在桌面上连接、查询和管理 DynamoDB 表。

![DocKit DynamoDB UI](/dockit-dynamodb.png)

## 什么是 DocKit？

DocKit 是一款**开源跨平台 GUI 客户端，专为 NoSQL 数据库设计**，包括 **DynamoDB**、**Elasticsearch** 和 **OpenSearch**。专为喜欢可视化、开发者友好工作流而不是原始 CLI 命令的开发者构建。

### 主要特性

- **用户友好界面**：使用 DocKit 直观的桌面界面轻松浏览您的 DynamoDB 表。
- **PartiQL 查询支持**：为 DynamoDB 编写类 SQL 查询，具有表名、属性和操作符的智能自动完成功能。
- **可视化查询 UI**：无需编写代码即可扫描和查询表——通过点选界面按主键和条件进行过滤。
- **内联数据编辑**：直接从查询结果更新和删除项目，获得即时反馈。
- **跨平台支持**：适用于 Mac、Windows 和 Linux，确保与您的操作系统兼容。
- **开源**：DocKit 是一个开源项目，允许社区贡献和持续改进。
- **多连接和数据库引擎**：同时连接多个 Elasticsearch、OpenSearch 和 DynamoDB 服务器——非常适合在一个统一界面中管理开发、预发布和生产环境的不同 NoSQL 数据库。
- **持久化查询和连接管理**：所有连接和 PartiQL 脚本都会自动保存并持久化到文件系统，永远不会丢失您的工作。组织查询以实现可重复的工作流程，并即时访问常用脚本，即使在关闭并重新打开 DocKit 后也是如此。
- **无需 JSON 模板**：使用简单的 UI 表单创建新项目——只需点击几下即可定义键和属性。

## 在 DocKit 中开始使用 DynamoDB

### 添加 DynamoDB 连接

从 DocKit 主页，您只需几步即可添加新的 DynamoDB 连接：

1. 点击 **➕（加号）**按钮创建新连接
2. 选择 **DynamoDB** 作为数据库类型，然后提供连接信息以建立连接
![DocKit DynamoDB 新建连接对话框](/dockit-dynamodb-connection.png)
3. 您可以点击 **测试连接** 在保存之前验证凭据
5. 保存连接

保存后，您的 DynamoDB 连接将出现在连接列表中，您可以选择连接或双击连接项以连接到 DynamoDB，它将重定向您到查询面板

## 使用查询 UI 浏览和编辑数据

打开 DynamoDB 连接后，DocKit 会将您带到编辑器页面，您可以在其中使用专为清晰和速度设计的**查询 UI** 管理数据。

![DocKit DynamoDB 查询 UI](/dockit-dynamodb-query-ui.png)

- **扫描**：界面允许您选择任何**表**和可选的**辅助索引**，然后直接运行**扫描**操作，以清晰、结构化的表格格式查看结果。
- **查询**：使用特定的分区键和排序键条件执行查询，以高效检索目标数据。
- **高级过滤器**：通过**主键**过滤并添加**附加条件**（如等于、小于或大于操作）来优化结果。这使得验证业务逻辑或定位特定记录变得容易，无需构建复杂的查询。
- **内联编辑**：只需点击结果表中的任何字段，更改其值，确认，更新即会立即应用——无需编辑 JSON。
- **删除项目**：使用用户友好的界面删除项目，无需编写一行代码。

## 使用 PartiQL 管理 DynamoDB

对于喜欢更多控制的用户，DocKit 包含一个强大的 **PartiQL 编辑器**，它为 DynamoDB 带来类 SQL 语法，使查询更具表现力并且对开发者更熟悉。

![DocKit DynamoDB PartiQL 编辑器](/dockit-dynamodb-partiql.png)

- **完整的 PartiQL 支持**：直接对您的 DynamoDB 表执行所有 PartiQL 操作，包括 `SELECT`、`DELETE`、`UPDATE` 等。
- **结果操作**：直接从查询结果修改或删除项目——无需编写单独的更新查询。
- **智能自动完成**：表名、属性名、操作符和关键字的全面自动完成大大减少了错误并加快了查询编写速度。
- **示例查询**：内置示例查询帮助您快速入门并通过示例学习 PartiQL 语法。
- **脚本持久化**：按 **Cmd + S**（或 `Ctrl + S`）将您的 PartiQL 查询保存到文件系统。保存的脚本会出现在**文件面板**中，默认存储在 .dockit 中，但您也可以从其他文件夹打开和管理脚本。这使得 DocKit 不仅适用于探索，还适用于**可重复的操作工作流程**。

有关 PartiQL 语法和功能的更多详细信息，请查看 [AWS 官方文档](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ql-reference.html)和 [PartiQL 规范](https://partiql.org/)。

## 通过 UI 创建新项目

DocKit 还使项目创建变得简单——无需 JSON 模板。通过点击工具栏中的 `创建项目`，它将重定向您到创建项目 UI，使用 UI，您可以：

* 定义分区键和排序键
* 设置属性值
* 只需点击几下即可创建新项目

![DocKit DynamoDB 通过 UI 创建项目](/dockit-dynamodb-create-item.png)

创建后，您可以立即使用查询 UI 或 PartiQL 编辑器查询该项目以验证结果。

## 接下来是什么？

DocKit v0.8 将 DynamoDB 管理带入现代、直观的桌面体验——结合了可视化工作流程和 PartiQL 的强大功能。这个项目仍在积极开发中，我们将继续为 NoSQL 管理体验带来更多功能和改进。

欢迎试用，任何反馈都非常欢迎——无论是功能请求、错误报告还是改进建议。不要吝啬您在 GitHub 上的星标和问题反馈！

**官方网站**：[https://dockit.geekfun.club/](https://dockit.geekfun.club/)

**GitHub**：[https://github.com/geek-fun/dockit](https://github.com/geek-fun/dockit)

敬请期待更多更新 🚀
