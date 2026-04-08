---
title: "DocKit 查询历史 - 自动保存 Elasticsearch DynamoDB 查询记录"
description: "DocKit 自动保存每个执行的 Elasticsearch、DynamoDB 查询。查看查询历史、复制、重新执行、管理历史查询。桌面 GUI 客户端自动本地持久化，永不丢失查询记录。"
head:
  - - meta
    - name: keywords
      content: DocKit查询历史, Elasticsearch查询历史, DynamoDB查询历史, 查询管理, DocKit文档
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/docs/dockit/query-history
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/dockit/query-history
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/dockit/query-history
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/dockit/query-history
---

# DocKit 查询历史

DocKit 自动记录您为 Elasticsearch、OpenSearch 和 DynamoDB 执行的每个查询。查询历史功能让您可以查看历史查询、将其复制到剪贴板、重新执行，或将其添加回编辑器 — 所有这些都无需手动保存。

## 概述

查询历史是您 DocKit 会话中所有执行查询的持久本地日志。主要特征：

- **自动**：每个执行的查询都会自动保存，无需任何用户操作。
- **本地**：历史记录仅存储在您的机器上 — 从不发送到任何服务器。
- 每个连接**上限为 500 条**，以保持性能快速。
- **按连接范围**：每个配置连接的历史记录分别存储。
- **可搜索**：按关键字、路径或日期过滤历史记录。

## 访问查询历史

打开查询历史面板：

1. 打开 DocKit 并连接到 Elasticsearch、OpenSearch 或 DynamoDB 实例。
2. 在左侧边栏或顶部导航中，单击**历史**图标（时钟图标）。
3. 历史面板打开，显示过去查询的时间顺序列表，最新的排在最前面。

历史列表中的每个条目显示：
- 对于 Elasticsearch/OpenSearch：**HTTP 方法徽章**、**API 路径**、**连接名称**和**时间戳**。
- 对于 DynamoDB：**查询类型**（PartiQL 或 UI）、**表名**、**连接名称**和**时间戳**。

单击任何条目将其展开以查看完整的查询体。

## Elasticsearch 的历史记录

每次您在 Elasticsearch 查询编辑器中按 **Cmd/Ctrl + Enter** 时，完整查询都会自动保存。历史记录包含：

- **方法**：使用的 HTTP 方法（GET、POST、PUT、DELETE）。
- **路径**：包含索引名称和端点的 API 路径（例如 `my-index/_search`）。
- **请求体**：完整的 QDSL 请求体。
- **连接**：Elasticsearch 连接的名称。
- **执行时间**：ISO 8601 时间戳。

**保存条目示例：**

```
POST  my-index/_search  [production-cluster]  2026-03-01 14:22:05
{
  "query": { "match": { "status": "published" } },
  "sort": [{ "created_at": "desc" }],
  "size": 20
}
```

## DynamoDB 的历史记录

DocKit 记录两种类型的 DynamoDB 查询：

### PartiQL 查询

当您在 DynamoDB 编辑器中执行 PartiQL 语句时，DocKit 保存：

- **查询类型**：PartiQL
- **语句**：完整的 PartiQL 文本。
- **表名**：从 FROM 子句自动提取。
- **连接**：DynamoDB 连接名称和区域。
- **执行时间**：时间戳。

### UI 表单查询

当您使用可视化查询构建器（通过 UI 的分区键、排序键、过滤器）时，DocKit 保存：

- **查询类型**：UI
- **表名**：查询的表。
- **分区键**：使用的分区键值。
- **排序键条件**：范围、begins_with 或相等条件（如果使用）。
- **过滤器表达式**：应用的任何附加过滤器表达式。
- **索引**：主索引或使用的 GSI。
- **连接**：DynamoDB 连接和区域。
- **执行时间**：时间戳。

## 复制查询

从历史记录中将查询复制到剪贴板：

1. 在历史面板中找到该条目。
2. 将鼠标悬停在条目上以显示操作按钮。
3. 单击**复制**按钮（剪贴板图标）。

对于 Elasticsearch 查询，复制的文本包括 HTTP 方法、路径和请求体，格式可以直接粘贴到 DocKit 编辑器或任何 HTTP 客户端。对于 DynamoDB PartiQL 查询，复制完整语句。对于 UI 查询，以可读格式复制参数。

## 添加到编辑器

将历史查询加载到活跃编辑器标签页中：

1. 在历史面板中找到该条目。
2. 将鼠标悬停在条目上以显示操作按钮。
3. 单击**添加到编辑器**按钮。

DocKit 用历史查询填充活跃编辑器：
- 对于 Elasticsearch：在编辑器中设置方法、路径和请求体。
- 对于 DynamoDB PartiQL：将语句粘贴到 PartiQL 编辑器中。
- 对于 DynamoDB UI：在可视化查询构建器中恢复表单字段（分区键、排序键、过滤器）。

然后您可以在重新执行之前修改查询。编辑加载的查询时不会修改历史记录条目。

## 重新执行查询

不编辑即立即重新运行历史查询：

1. 在历史面板中找到该条目。
2. 单击**执行**按钮（播放图标）。

DocKit 针对当前活跃连接运行查询，并在输出面板中显示结果。请注意，重新执行使用**当前连接** — 如果自原始查询运行以来您已切换连接，查询将针对新连接运行。

## 删除历史记录条目

从历史记录中删除单个条目：

1. 将鼠标悬停在历史面板中的条目上。
2. 单击**删除**按钮（垃圾桶图标）。
3. 无需确认对话框，条目立即删除。

## 清除所有历史记录

删除当前连接的所有历史记录条目：

1. 在历史面板标题中，单击**清除所有**按钮（或 ⋯ 菜单并选择**清除所有**）。
2. 出现确认对话框 — 确认后删除此连接的所有历史记录条目。

**注意**：清除历史记录无法撤销。其他连接的历史记录不受影响。
