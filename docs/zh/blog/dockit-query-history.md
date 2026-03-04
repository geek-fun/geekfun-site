---
title: "DocKit 查询历史 - 永不丢失查询记录"
description: "DocKit 现在为 Elasticsearch 和 DynamoDB 存储您的完整查询历史。查看、复制、重新执行和将过去的查询添加回编辑器 — 全部本地持久化。"
head:
  - - meta
    - name: keywords
      content: DocKit查询历史, Elasticsearch查询历史, DynamoDB查询历史, NoSQL查询管理, 保存Elasticsearch查询, 重新执行查询, 查询日志, 开源查询历史工具, DocKit功能
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/blog/dockit-query-history
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/dockit-query-history
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/dockit-query-history
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/dockit-query-history
---

# DocKit 查询历史 - 永不丢失查询记录

每个使用 Elasticsearch 或 DynamoDB 的开发者都经历过：您精心构建了一个复杂查询，成功运行，得到了所需的结果 — 然后关闭了标签页或重启了应用程序。之后，您再次需要那个查询，但它已经消失了。您花了 20 分钟从头重新构建它。**DocKit 的查询历史功能**永久解决了这个问题。

## 问题：丢失一次性查询

数据库查询不是一次性的工作。精心制作的 Elasticsearch 聚合或 DynamoDB FilterExpression 可能需要大量时间来编写和调试。然而，大多数数据库客户端将查询视为短暂的 — 一旦会话结束，您的工作也随之消失。

后果是真实的：

- **浪费时间**重新构建您已经编写过的查询。
- **不一致性**，当手动重建的查询与原始查询略有不同时。
- **上下文丢失**，当您无法记住上周调试会话中使用的确切参数时。
- **分散的笔记** — 开发者诉诸在文本文件、Slack 消息或浏览器书签中保存查询片段，这些查询难以找到且容易丢失。

一些团队通过在 Git 存储库中维护共享的"查询库"来解决这个问题，但这引入了额外开销：您必须有意识地决定保存一个查询，打开文件，粘贴进去，写一条提交消息。对于探索性工作，这种摩擦意味着大多数查询永远不会被保存。

DocKit 的查询历史功能通过**自动记录您执行的每个查询**来解决这个问题 — 无需手动操作。

## 新功能：查询历史面板

查询历史面板是 DocKit 中的一个专用侧边栏，显示您执行的每个查询的时间顺序列表。对于每个条目，您可以看到：

- **HTTP 方法徽章**（GET、POST、PUT、DELETE）— 用于 Elasticsearch 查询
- **API 路径** — Elasticsearch 端点（例如 `/my-index/_search`）
- **连接名称** — 查询运行时活跃的集群或账户
- **时间戳** — 查询执行的确切日期和时间
- **查询体预览** — QDSL 或 PartiQL 语句的第一行

该面板支持**搜索和过滤**，因此即使您有数百个条目，也可以快速找到特定的过去查询。

## Elasticsearch 的工作原理

每次您按 **Cmd/Ctrl + Enter** 在 DocKit 的 Elasticsearch 编辑器中执行查询时，查询会自动保存到您的本地历史记录中。保存的记录包括：

- **HTTP 方法**：GET、POST、PUT、DELETE
- **API 路径**：包含索引名称和端点的完整路径（例如 `my-index/_search`）
- **请求体**：完整的 QDSL（Query DSL）载荷
- **连接**：使用的 Elasticsearch 连接名称
- **时间戳**：ISO 8601 日期/时间

历史记录每个连接**上限为 500 条**。当达到限制时，最旧的条目会自动删除，为新条目腾出空间。这使历史面板保持快速，并专注于您最近的工作。

**保存的 Elasticsearch 查询示例：**

```json
POST my-index/_search
{
  "query": {
    "bool": {
      "must": [
        { "match": { "status": "active" } },
        { "range": { "created_at": { "gte": "now-7d" } } }
      ]
    }
  },
  "aggs": {
    "by_category": {
      "terms": { "field": "category.keyword" }
    }
  }
}
```

这个完整的查询 — 方法、路径和请求体 — 在执行后立即保存并在历史面板中可用。

## DynamoDB 的工作原理

DynamoDB 查询历史的工作方式类似，但捕获 DocKit 支持的两种 DynamoDB 查询类型：

### PartiQL 查询

当您在 DocKit 的 DynamoDB PartiQL 编辑器中执行 **PartiQL 语句**时，完整的语句将保存到历史记录中：

```sql
SELECT * FROM Orders
WHERE CustomerId = 'C001'
  AND OrderDate BETWEEN '2025-01-01' AND '2025-12-31'
```

保存的记录包括完整的 PartiQL 文本、表名（从语句中提取）和连接/区域。

### UI 表单查询

当您使用 DocKit 的**可视化查询构建器**通过 UI 查询 DynamoDB 表 — 通过 UI 选择分区键、排序键和过滤器表达式 — 生成的查询参数也会被记录。历史记录条目捕获：

- 表名
- 分区键值
- 排序键条件（如果使用）
- 过滤器表达式
- 使用的索引（主索引或 GSI）

这意味着即使通过 GUI 构建的查询也会被保留，以后可以重新执行。

## 查询历史面板的操作

一旦查询在您的历史记录中，您有几个选项：

### 复制

单击**复制**图标将完整查询（Elasticsearch 的方法 + 路径 + 请求体，或 DynamoDB 的语句）复制到剪贴板。粘贴到任何地方 — 您的编辑器、Slack 消息、文档。

### 添加到编辑器

单击**添加到编辑器**将查询直接插入到活跃的编辑器标签页中。编辑器会预填方法、路径和请求体打开。然后您可以根据需要修改并重新执行。这是继续上次工作的最快方式。

### 执行

单击**执行**立即对当前连接重新运行查询。DocKit 完全按照原始编写的方式执行查询，使用相同的方法、路径和请求体。结果显示在输出面板中。

### 删除

单击单个历史记录条目上的**删除**图标将其移除。这对于清理意外或不相关的查询很有用。

### 清除所有

使用**清除所有**选项清除当前连接的整个查询历史记录。确认对话框可防止意外删除。

## 隐私：所有数据本地存储

DocKit 的一个关键设计原则是**本地优先数据存储**。您的查询历史：

- **存储在您的机器上**，保存在本地数据库文件中 — 不在云端，不在我们的服务器上。
- **从不传输**给任何第三方，包括 DocKit 的维护者。
- **完全在您的控制下** — 您可以随时直接从文件系统中找到并删除历史文件。
- **按连接范围划分** — 您生产集群的历史与预发布集群的历史是分开的。

这对于处理敏感数据的团队很重要。查询通常包含揭示数据模型信息的字段名称、值和模式。将历史记录保持在本地确保这些信息留在您团队的控制范围内。

## 查询历史与手动查询库的比较

| 方法 | 自动 | 可搜索 | 无摩擦 | 本地 |
|------|------|--------|--------|------|
| **DocKit 历史** | ✅ | ✅ | ✅ | ✅ |
| 文本文件/笔记 | ❌ | 有限 | ❌ | ✅ |
| Git 查询库 | ❌ | ✅ | ❌ | ✅ |
| 云查询工具 | ❌ | ✅ | 不定 | ❌ |

关键区别在于 DocKit 历史是**自动的**。您永远不必决定一个查询是否值得保存 — 每个查询都默认保存，您可以删除不需要的查询。

## 哪些人最受益

**查询历史对以下人员尤其有价值：**

- **调试生产问题的开发者**，他们运行许多查询变体，需要回顾早期版本。
- **数据分析师**，他们反复运行复杂的聚合，稍微改变参数。
- **DevOps 工程师**，他们在不同环境中执行相同的集群管理查询。
- **新入职的工程师**，他们在学习代码库的过程中建立有用查询的个人库。

## 开始使用查询历史

查询历史在 DocKit 的最新版本中可用，无需配置。默认为所有连接启用。

1. **[下载 DocKit](/zh/download)** — macOS、Windows 和 Linux 免费使用。
2. 连接到您的 Elasticsearch、OpenSearch 或 DynamoDB 实例。
3. 执行任何查询 — 它会自动保存。
4. 从侧边栏打开**历史**面板查看您的查询历史。

有关详细使用说明，请参阅**[查询历史文档](/zh/docs/dockit/query-history)**。

DocKit 是**免费且开源的**（Apache 2.0 许可证）。[立即下载](/zh/download)，永不丢失查询记录。
