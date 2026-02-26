---
title: 使用 DocKit 监控和管理 Elasticsearch 集群
description: 使用 DocKit 监控和管理 Elasticsearch，包括索引和别名管理、节点管理、分片管理和模板管理。本文档概述了如何在 DocKit 中监控和管理 Elasticsearch。
head:
  - - meta
    - name: keywords
      content: DocKit, Elasticsearch GUI 客户端, 连接 Elasticsearch 服务器, Elasticsearch 连接指南, Elasticsearch 管理工具, Elasticsearch 桌面客户端, Elasticsearch 数据管理, Elasticsearch 数据分析, Elasticsearch 数据可视化, Elasticsearch 查询工具, Elasticsearch 跨平台客户端, Elasticsearch 开源客户端, Elasticsearch Mac 客户端, Elasticsearch Windows 客户端, Elasticsearch Linux 客户端, Elasticsearch AI 驱动搜索, Elasticsearch 多服务器支持
  - - meta
    - name: robots
      content: noindex, follow
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
![DocKit 管理面板](/manage-cluster.png)
在集群页面，您可以查看集群健康状况、节点数量、索引数量、分片数量和其他集群概���信息。

### 节点管理和监控

点击 `节点` 标签以查看节点列表，您可以看到节点列表，点击一个节点，您可以查看节点名称、IP、磁盘信息、内存使用情况和其他有用的节点信息。
![DocKit 节点管理界面](/manage-nodes.png)

### 分片管理和监控

点击 `分片` 标签以查看分片列表，您可以查看分片名称、索引名称、状态和其他分片相关信息。点击分片项，DocKit 将显示所选分片的详细信息，如文档数量、大小、内存等。
![DocKit 分片管理界面](/manage-shards.png)

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
