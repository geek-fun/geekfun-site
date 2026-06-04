---
title: 使用 DocKit 监控和管理 Elasticsearch 集群
description: 使用 DocKit 监控和管理 Elasticsearch，包括索引和别名管理、节点管理、分片管理和模板管理。本文档概述了如何在 DocKit 中监控和管理 Elasticsearch。
head:
  - - meta
    - name: keywords
      content: DocKit, Elasticsearch GUI 客户端, 连接 Elasticsearch 服务器, Elasticsearch 连接指南, Elasticsearch 管理工具, Elasticsearch 桌面客户端, Elasticsearch 数据管理, Elasticsearch 数据分析, Elasticsearch 数据可视化, Elasticsearch 查询工具, Elasticsearch 跨平台客户端, Elasticsearch 开源客户端, Elasticsearch Mac 客户端, Elasticsearch Windows 客户端, Elasticsearch Linux 客户端, Elasticsearch AI 驱动搜索, Elasticsearch 多服务器支持
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/docs/dockit/manage-elasticsearch-cluster
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/dockit/manage-elasticsearch-cluster
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/dockit/manage-elasticsearch-cluster
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/dockit/manage-elasticsearch-cluster
---

# 使用 DocKit 监控和管理 Elasticsearch 集群

DocKit 作为一个 NoSQL GUI 客户端，支持监控和管理 Elasticsearch，包括索引和别名管理、节点管理、分片管理和模板管理。本文档概述了如何在 DocKit 中监控和管理 Elasticsearch。

## 安装并打开 DocKit

您可以在[安装指南](./installation.md)中找到有关如何安装和打开 DocKit 的详细说明。

## 连接到 Elasticsearch 服务器

您可以在[连接指南](./connect-to-server.md)中找到有关如何连接到 Elasticsearch 服务器的详细说明。

## 监控和管理 Elasticsearch 集群

### 集群管理和监控

点击 `管理` 面板以监控和管理 Elasticsearch 集群，您可以查看集群健康状况、索引、节点和分片信息，如下所示：
![DocKit 管理面板](/dockit-es-manage.png)
在集群页面，您可以查看集群健康状况、节点数量、索引数量、分片数量和其他集群概���信息。

### 节点管理和监控

点击 `节点` 标签以查看节点列表，您可以看到节点列表，点击一个节点，您可以查看节点名称、IP、磁盘信息、内存使用情况和其他有用的节点信息。
![DocKit 节点管理界面](/manage-nodes.png)

### 分片管理和监控

点击 `分片` 标签以查看分片列表，您可以查看分片名称、索引名称、状态和其他分片相关信息。点击任意分片，将打开**分片详情面板**，显示以下指标：

| 指标 | 说明 |
|------|------|
| **文档数** | 分片中的文档数量 |
| **存储大小** | 存储空间占用（字节） |
| **建议补全** | 建议/索引补全的大小 |
| **字段数据** | 字段数据内存使用量 |
| **查询缓存** | 查询缓存命中率和大小 |
| **获取/搜索** | Get 和 Search 操作指标 |
| **索引速率** | 索引写入速率和延迟（索引、删除、更新） |
| **合并统计** | 段合并统计信息 |
| **刷新/冲洗** | Refresh 和 Flush 操作指标 |
| **段信息** | 段数量、内存占用和版本映射 |
| **建议** | 建议操作指标 |

该详情面板有助于在分片层面诊断性能瓶颈。

![DocKit 分片管理界面](/manage-shards.png)

### 别名管理

在索引视图中，您可以管理每个索引的别名：

- **创建别名**：为当前索引添加别名，可设置过滤条件和路由规则
- **切换别名**：原子性地将别名从一个索引移动到另一个索引（零停机重新索引）
- **移除别名**：删除别名，不影响底层索引和数据

使用别名可以让应用程序通过抽象名称查询，需要重新映射时无需修改应用代码。

### 索引管理和监控

点击 `索引` 标签以查看索引列表，您可以查看索引名称、文档数量、状态、健康状况和其他索引信息，您还可以：

- 通过点击右上角的 `新建索引` 按钮创建索引，
- 通过点击 `操作` 列中的 `...` 并选择 `删除` 选项删除索引，
- 通过点击 `操作` 列中的 `...` 并选择 `关闭`/`打开` 选项关闭/打开索引，
- 通过点击右上角的 `刷新` 按钮刷新索引，
- 通过点击 `别名` 列中的图标并选择 `移除别名` 选项移除别名，
- 通过点击 `别名` 列中的图标并选择 `切换别名` 选项切换别名。

![DocKit 索引管理界面](/manage-indices.png)

### 模板管理和监控

点击 `模板` 标签以查看模板列表，您可以查看模板名称、类型、版本和其他模板相关信息。您还可以点击右上角的 `创建模板` 按钮创建新模板。
![DocKit 模板管理界面](/manage-template.png)

### 模板类型

DocKit 支持以下两种模板格式：

- **索引模板**（可组合）— 现代格式，支持优先级、多个索引模式以及组件模板引用
- **组件模板** — 可复用的构建模块（映射、设置、别名），可组合到索引模板中
- **遗留模板** — 旧版格式，DocKit 会尽可能将其映射为等效的可组合模板

创建模板时，DocKit 会根据 Elasticsearch/OpenSearch 版本自动检测模板格式。
