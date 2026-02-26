---
title: 使用 DocKit GUI 连接到数据库服务器
description: DocKit 作为一个 NoSQL GUI 客户端，支持多种数据库，包括 Elasticsearch、OpenSearch、DynamoDB 以及更多即将支持的数据库。本文档概述了如何使用 DocKit 连接到数据库服务器。
head:
   - - meta
     - name: keywords
       content: DocKit, Elasticsearch GUI 客户端, 连接 Elasticsearch 服务器, Elasticsearch 连接指南, Elasticsearch 管理工具, Elasticsearch 桌面客户端, Elasticsearch 数据管理, Elasticsearch 数据分析, Elasticsearch 数据可视化, Elasticsearch 查询工具, Elasticsearch 跨平台客户端, Elasticsearch 开源客户端, Elasticsearch Mac 客户端, Elasticsearch Windows 客户端, Elasticsearch Linux 客户端, Elasticsearch AI 驱动搜索, Elasticsearch 多服务器支持
   - - link
     - rel: canonical
       href: https://www.geekfun.club/zh/docs/dockit/connect-to-server
   - - link
     - rel: alternate
       hreflang: en
       href: https://www.geekfun.club/docs/dockit/connect-to-server
   - - link
     - rel: alternate
       hreflang: zh
       href: https://www.geekfun.club/zh/docs/dockit/connect-to-server
   - - link
     - rel: alternate
       hreflang: x-default
       href: https://www.geekfun.club/docs/dockit/connect-to-server
---

# 使用 DocKit 桌面客户端连接到数据库服务器

DocKit 作为一个 NoSQL GUI 桌面客户端，支持多种数据库，包括 [Elasticsearch](https://www.elastic.co)、OpenSearch、[DynamoDB](https://aws.amazon.com/dynamodb/) 以及更多即将支持的数据库。本文档概述了如何使用 DocKit 连接到数据库服务器。

## 安装并打开 DocKit

您可以在[安装指南](/zh/docs/dockit/installation)中找到有关如何安装和打开 DocKit 的详细说明。

## 连接到 Elasticsearch 服务器

打开 DocKit 后，点击 `+ 新建连接` 按钮以添加新连接，然后您可以输入 Elasticsearch 服务器信息，包括连接名称、主机、端口和认证信息。
![mac 连接到 Elasticsearch 服务器](/mac-connect-to-server.png)

注意：

1. 主机需要包含协议 `http` 或 `https` 的完整域名
2. 如果您尝试连接到自签名的 Elasticsearch 服务器，可以通过取消勾选 :lock: 来禁用证书验证
3. 如果您的 Elasticsearch 服务器需要认证，您可以输入用户名和密码进行连接

## 测试连接

输入完成后，点击 `测试连接` 按钮以验证 DocKit 是否可以连接到配置的 Elasticsearch 服务器

注意：测试和保存连接至少需要 `view_index_metadata` 权限，如果您的用户角色没有访问所有索引的权限，请指定索引名称。

## 保存连接

点击 `确认` 以保存连接，这样您就可以随时使用 DocKit 访问目标 Elasticsearch 服务器。
