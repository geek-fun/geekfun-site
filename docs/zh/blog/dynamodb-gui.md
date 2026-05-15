---
title: DynamoDB GUI 客户端 - 开源桌面工具
description: DocKit 是适用于 Mac、Windows 和 Linux 的免费开源 DynamoDB GUI 客户端。可视化查询构建器、PartiQL 编辑器和本地数据管理，无需 AWS 控制台。
head:
  - - meta
    - name: keywords
      content: DynamoDB GUI, DynamoDB 客户端, DynamoDB 桌面客户端, DynamoDB GUI 客户端, PartiQL 编辑器, DynamoDB 可视化查询构建器, DynamoDB 管理工具, AWS DynamoDB 客户端, 免费 DynamoDB 客户端, 开源 DynamoDB, DynamoDB 数据浏览器, DynamoDB 查询工具, DynamoDB 本地客户端, DynamoDB Mac 客户端, DynamoDB Windows 客户端
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/blog/dynamodb-gui
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/dynamodb-gui
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/dynamodb-gui
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/dynamodb-gui
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "DynamoDB GUI 客户端 - 开源桌面工具",
        "description": "DocKit 是适用于 Mac、Windows 和 Linux 的免费开源 DynamoDB GUI 客户端。可视化查询构建器、PartiQL 编辑器和本地数据管理，无需 AWS 控制台。",
        "image": "https://www.geekfun.club/dockit-dynamodb-query-ui.png",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.geekfun.club/geekfun.png"
          }
        },
        "datePublished": "2025-03-04",
        "dateModified": "2026-04-08",
        "inLanguage": "zh-CN",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.geekfun.club/zh/blog/dynamodb-gui"
        },
        "keywords": ["DynamoDB GUI", "DynamoDB 客户端", "PartiQL", "开源"],
        "articleSection": "Database Tools"
      }
---

# DynamoDB GUI 客户端 - 开源桌面工具

DocKit 是一个**开源 DynamoDB GUI 客户端**，为需要比 AWS 控制台和 Dynobase 等商业工具更快、更安全替代方案的开发者设计。

## 为什么使用 DynamoDB GUI 客户端？

AWS DynamoDB 控制台基于浏览器，需要持续的网络连接，关闭标签后查询会丢失，简单的数据更新需要多次跳转，环境切换也很麻烦。对于每天使用 DynamoDB 的开发者来说，这些摩擦会在一天中不断积累。

专用的桌面客户端在本地运行，查询持久化，历史记录保留，多账户切换简单。

## 观看 DocKit DynamoDB 实战演示

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 2rem 0;">
  <iframe 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
    src="https://www.youtube.com/embed/UE1hDLXvxuo" 
    title="DocKit DynamoDB GUI 客户端演示" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

## 主要功能

### 可视化查询构建器

无需编写代码即可构建 DynamoDB 查询。选择表、指定分区/排序键、添加过滤器，通过直观 UI 执行查询。支持 Scan、Query 和 GetItem 操作，提供类型感知的可视化过滤器构建器。

### PartiQL 查询编辑器

对于高级用法，DocKit 内置功能完整的 PartiQL 编辑器：

```sql
SELECT * FROM ProductCatalog 
WHERE Category = 'Electronics' 
  AND Price < 500
```

编辑器支持语法高亮和自动补全、`Cmd/Ctrl + Enter` 执行、自动格式化，以及查询历史和收藏夹。

[DynamoDB GUI 客户端 - 完整指南](/zh/products/dockit/dynamodb-gui-client)

### 内联数据编辑

直接从查询结果更新和删除 DynamoDB 项目：单击编辑任何属性值，支持类型感知输入（String、Number、Boolean 等），可批量删除多个项目。

### 本地查询持久化

所有查询自动保存到本地文件，切换标签时不会丢失工作。查询可按项目/环境组织，通过 Git 与团队共享，也可以同时打开多个查询标签。

### 安全且私密

DocKit 完全在您的机器上运行：不向第三方服务器发送数据，使用本地 AWS 凭证配置文件，支持连接 DynamoDB Local，以及 IAM 角色和临时凭证。

## DynamoDB GUI 对比

| 功能 | DocKit | AWS 控制台 | Dynobase |
|---------|--------|-------------|----------|
| 价格 | 开源（Apache 2.0） | 免费 | $12-30/月 |
| 平台 | Mac、Windows、Linux | Web | Mac、Windows、Linux |
| PartiQL 编辑器 | ✅ | ✅ | ✅ |
| 可视化查询构建器 | ✅ | ❌ | ✅ |
| 离线模式 | ✅ | ❌ | ✅ |
| 查询持久化 | ✅（本地文件） | ❌ | ✅（云端） |
| 多表标签 | ✅ | ❌ | ✅ |
| DynamoDB Local | ✅ | ❌ | ✅ |
| AI 助手 | ✅ | ❌ | ❌ |
| 开源 | ✅ | ❌ | ❌ |

## 开始使用

1. 访问 [www.geekfun.club/download](/zh/download) 下载 DocKit
2. 连接到 DynamoDB（AWS IAM 凭证、DynamoDB Local 或 IAM 角色）
3. 使用可视化查询构建器或编写 PartiQL 查询

## 常见问题

**DocKit 与 Dynobase 相比如何？**
Dynobase 是一款精良的商业工具，DocKit 是可行的开源替代方案，核心功能没有妥协。详见[功能对比](/zh/products/dockit/dockit-vs-dynobase)。

**DocKit 与 NoSQL Workbench 相比如何？**
NoSQL Workbench 是 AWS 的官方工具，专注于数据建模。DocKit 专注于查询和数据管理，UI 更快，更适合日常开发工作流。

**DocKit 支持其他数据库吗？**
是的，DocKit 在同一应用中支持 Elasticsearch 和 OpenSearch，无需切换工具。

**我的查询存储在哪里？**
查询作为纯文本文件保存在本地，您可以控制存储位置，也可以通过 Git 同步。

## 其他资源

- **[Dynobase 替代方案](/zh/products/dockit/dockit-vs-dynobase)** - 详细功能对比
- **[安装指南](/zh/docs/dockit/installation)** - 分步设置
- **[连接到 DynamoDB](/zh/docs/dockit/connect-to-server)** - 配置详情
- **[GitHub 仓库](https://github.com/geek-fun/dockit)** - 源代码和问题
