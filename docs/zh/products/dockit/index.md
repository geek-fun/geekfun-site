---
layout: product
title: DocKit - AI Agent 驱动的 NoSQL 桌面客户端 — MongoDB、Elasticsearch、OpenSearch、DynamoDB
description: DocKit 是一款开源的 AI Agent 型 NoSQL 桌面 GUI，支持 MongoDB、DynamoDB、Elasticsearch、OpenSearch 和 EasySearch。AI Agent 通过自然语言编写查询、查看表结构、管理数据 — 隐私优先、本地运行、完全免费。
ogImage: https://www.geekfun.club/og/dockit-zh.png
head:
  - - meta
    - name: keywords
      content: AI 数据库客户端, AI 原生 NoSQL GUI, NoSQL GUI 客户端, NoSQL 桌面客户端, nosql gui client, nosql desktop gui, MongoDB GUI, DynamoDB AI 助手, Elasticsearch AI, OpenSearch AI, 自然语言查询, DocKit, MongoDB GUI 客户端, DynamoDB GUI, Elasticsearch GUI, OpenSearch GUI, 数据库客户端, 开源数据库工具, PartiQL 编辑器, 桌面数据库客户端, Mac 数据库客户端, Windows 数据库客户端, Linux 数据库客户端, Agentic Data Studio, EasySearch, 数据工作室
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/products/dockit/
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/products/dockit/
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/products/dockit/
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/products/dockit/
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "DocKit",
        "alternateName": ["NoSQL GUI 客户端", "NoSQL 桌面客户端", "NoSQL GUI client", "NoSQL desktop GUI", "MongoDB GUI 客户端", "Elasticsearch GUI 客户端", "OpenSearch GUI 客户端", "DynamoDB GUI 客户端", "EasySearch GUI 客户端", "Agentic Data Studio"],
        "description": "AI 原生桌面 GUI 客户端，支持 MongoDB、DynamoDB、OpenSearch 和 Elasticsearch。内置 AI 助手从自然语言生成数据库查询。Agentic Data Studio 支持用自然语言与数据库交互。快速、安全、免费。",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "1096",
          "bestRating": "5",
          "worstRating": "1"
        },
        "featureList": [
          "AI 驱动查询生成",
          "Agentic Data Studio",
          "自然语言转 SQL/PartiQL/MQL",
          "OpenAI、Anthropic 和 DeepSeek 集成",
          "MongoDB GUI 客户端",
          "Elasticsearch GUI 客户端",
          "OpenSearch GUI 客户端",
          "DynamoDB GUI 客户端",
          "EasySearch GUI 客户端",
          "PartiQL 编辑器",
          "MongoDB 查询编辑器",
          "可视化查询构建器",
          "查询历史持久化",
          "多数据库支持",
          "数据导入导出",
          "集群管理",
          "Monaco 编辑器"
        ],
        "screenshot": "https://www.geekfun.club/dockit-client-ui.png",
        "downloadUrl": "https://www.geekfun.club/download",
        "softwareVersion": "1.0.1",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "license": "https://github.com/geek-fun/dockit/blob/main/LICENSE"
      }

hero:
  name: DocKit
  headline: "AI Agent 驱动的 NoSQL 桌面客户端"
  tagline: "一个管理您数据库的开源 AI Agent。连接 MongoDB、DynamoDB、Elasticsearch、OpenSearch 和 EasySearch — 然后用自然语言描述您的需求。代理会编写查询、查看表结构、更新文档并返回结果。隐私优先、本地运行、Apache 2.0。"
  logo: /dockit.png
  screenshot: /dockit-client-ui.png
  actions:
    - text: 下载
      link: /zh/download
      theme: brand
    - text: Agentic Data Studio
      link: /zh/docs/dockit/agentic-datastudio
      theme: alt

databases:
  title: "原生支持现代 NoSQL"
  items:
   - { name: MongoDB, logo: /db-mongodb.svg }
   - { name: DynamoDB, logo: /db-dynamodb.svg }
   - { name: Elasticsearch, logo: /db-elasticsearch.svg }
   - { name: OpenSearch, logo: /db-opensearch.png }
   - { name: EasySearch, logo: /db-easysearch.svg }

showcase:
  - title: "Agentic Data Studio"
    body: "用自然语言与数据库对话。DocKit 的 AI Agent 编写查询、查看表结构、创建索引、更新文档并返回结果——支持按源权限控制，破坏性操作需安全确认。用自然语言描述需求，即刻获得优化查询。支持 OpenAI、Anthropic 和 DeepSeek。"
    image: /dockit-ai-assistant.png
    align: left
  - title: "自动记录查询历史"
    body: "连接和查询被安全地保存到您的本地系统中。所有执行历史被自动追踪，让您可以毫无压力地回顾并重新执行。"
    image: /dockit-query-history.png
    align: right
  - title: "完整掌控 DynamoDB"
    body: "体验桌面级 DynamoDB 交互环境。洞察表结构，管理索引，并使用具有语法高亮与格式化功能的 PartiQL 编辑器。"
    image: /dockit-dynamodb-query-ui.png
    align: left

features:
  - { title: "Agentic Data Studio", body: "用自然语言与数据库对话。AI Agent 编写查询、查看表结构、创建索引、更新文档——支持按源权限控制，破坏性操作需安全确认。", icon: "sparkles" }
  - { title: "AI 助手", body: "用自然语言描述需求 — '查找上周注册的用户' 或 '按地区聚合销售额' — 即刻获得准确查询。支持 OpenAI、Anthropic 和 DeepSeek。", icon: "code" }
  - { title: "桌面级编辑器", body: "Monaco Editor 将 VS Code 的编辑能力带入查询——语法高亮、自动补全、格式化和熟悉的快捷键。", icon: "edit" }
  - { title: "本地持久化", body: "连接和查询保存到本地文件系统。查询历史自动追踪。永不丢失工作内容。", icon: "history" }
  - { title: "多数据库支持", body: "统一界面管理 MongoDB、DynamoDB、Elasticsearch、OpenSearch 和 EasySearch。数据库之间即时无缝切换。", icon: "database" }
  - { title: "导入与导出", body: "支持 JSON、CSV、JSONL 格式导入导出大数据集。批量操作稳定可靠地处理百万级记录。", icon: "import" }
  - { title: "集群管理", body: "监控节点健康状态、管理分片、追踪索引信息、控制集群别名——统统内置在可视化集群工具中。", icon: "cluster" }
  - { title: "MongoDB 文档浏览器", body: "支持分页和内联 CRUD 的文档浏览器，带自动补全的查询编辑器、批量写入和导入导出。", icon: "database" }
  - { title: "查询历史", body: "每次查询自动记录。每个连接 500 条记录，支持星标收藏。可复制、载入或重新执行。", icon: "history" }

cta:
  title: "数据库管理，步入 AI 时代"
  body: "别再纠结于复杂的查询语法了。让 DocKit 的 AI 助手和 Agentic Data Studio 包揽那些重复性的劳动，您只需关注数据本身。"
  actions:
    - { text: "下载", link: "/zh/download", theme: "brand" }
    - { text: "访问 GitHub", link: "https://github.com/geek-fun/dockit", theme: "alt", external: true }
---

## Elasticsearch GUI 客户端

DocKit 是一款功能完备的 **Elasticsearch GUI 客户端**，专为在查询编辑器中投入大量时间的工程师打造。它以 Monaco 驱动的编辑器替代 Kibana 的 Dev Tools 标签页，支持 JSON5 语法、行内注释、基于实时 mapping 的字段自动补全，以及 AI 辅助查询生成。

可连接至任意 Elasticsearch 集群——本地、自托管或云端——支持 Basic Auth 和 API Key 认证。浏览索引、管理 mapping 和别名、监控集群与分片健康状态、导入导出 JSON/CSV/JSONL 数据。查询以本地文件持久化，关闭应用后也不会丢失。

→ [Elasticsearch GUI 客户端详细介绍](/zh/products/dockit/elasticsearch-gui-client)

## OpenSearch GUI 客户端

DocKit 是一款开源 **OpenSearch GUI 客户端**，也是面向日常查询工作的 OpenSearch Dashboards 桌面替代方案。启动仅需 2 秒以内，内存占用约 150 MB，所有内容均存储在本地——无需运行 Dashboards 实例。

相同的 Monaco 编辑器、AI 助手、集群管理和导入导出功能，完全兼容 OpenSearch 1.x、2.x 和 3.x，包括 AWS OpenSearch Service 托管集群。

→ [OpenSearch GUI 客户端详细介绍](/zh/products/dockit/opensearch-gui-client)

## DynamoDB GUI 客户端

DocKit 是一款开源 **DynamoDB GUI 客户端**，替代 AWS 控制台承担日常表操作工作。包含支持 Schema 感知自动补全的 PartiQL 编辑器、适用于非 PartiQL 工作流的可视化查询构建器、以您的真实属性名为上下文的 AI 查询生成，以及 JSON 和 CSV 的导入导出功能。

同时支持 DynamoDB Local 本地开发，兼容所有 AWS 区域和认证方式。

→ [DynamoDB GUI 客户端详细介绍](/zh/products/dockit/dynamodb-gui-client)

## MongoDB GUI 客户端

DocKit 是一款开源 **MongoDB GUI 客户端**，具备功能完备的查询编辑器，支持自动补全和结果格式化。文档浏览器支持分页和内联 CRUD 操作。管理视图提供集合级基础设施浏览——索引、存储统计和元数据一目了然。

支持认证、TLS 和副本集配置连接。批量写入支持高效的批量操作。查询历史支持星标/收藏，按连接持久保存。支持以 JSON、CSV 和 JSONL 格式导入导出集合。

→ [MongoDB GUI 客户端文档](/zh/docs/dockit/connect-to-server)

## EasySearch 支持

DocKit 原生支持 **EasySearch** 作为独立的连接类型，与 Elasticsearch 和 OpenSearch 并列。EasySearch 拥有独立的配置和图标，方便从一个界面管理所有搜索引擎。

## Agentic Data Studio

DocKit 的 **Agentic Data Studio** 让你通过自然语言与数据库交互。描述你的需求——代理会编写查询、检查表结构、更新文档、删除记录、创建索引并返回结果。每个操作都通过经过验证的工具执行，内置细粒度按源权限、破坏性操作需显式确认的安全门，以及不会向 LLM 暴露连接凭据的安全架构。支持 OpenAI、Anthropic 和 DeepSeek。

→ [Agentic Data Studio 指南](/zh/docs/dockit/agentic-datastudio)

## 为什么选择 DocKit 管理多数据库

大多数团队不止使用一种 NoSQL 数据库。同时运行 Elasticsearch 做搜索和 DynamoDB 做键值存储的团队，通常需要两套工具——一套用于 Kibana/Elasticvue，另一套用于 Dynobase/NoSQL Workbench。DocKit 用一个桌面应用覆盖这三种数据库。

| | DocKit | Kibana | Elasticvue | Dynobase | NoSQL Workbench |
|---|---|---|---|---|---|---|
| **MongoDB** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Elasticsearch** | ✅ | ✅ | ✅ | ❌ | ❌ |
| **OpenSearch** | ✅ | ❌ | ✅ | ❌ | ❌ |
| **EasySearch** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **DynamoDB** | ✅ | ❌ | ❌ | ✅ | ✅ |
| **AI 助手** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Agentic Data Studio** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **桌面原生** | ✅ | ❌ | 部分 | ✅ | ✅ |
| **开源协议** | ✅ Apache 2.0 | Mixed | ✅ MIT | ❌ | ❌ |
| **价格** | 社区版免费 | 免费 | 免费 | $12–30/月 | 免费 |

## 常见问题

**DocKit 支持离线使用吗？**
支持。所有连接、查询和历史记录均存储在本地。AI 助手和 Agentic Data Studio 仅在发送提示词时需要联网。

**DocKit 支持 MongoDB 吗？**
支持。DocKit 完全支持 MongoDB，包括连接管理、带自动补全的查询编辑器、文档浏览器（支持内联 CRUD）、索引和集合元数据管理视图、批量写入、查询历史星标收藏以及导入导出功能。同时也支持 EasySearch 作为独立连接类型。

**有 Web 版本吗？**
没有。DocKit 是适用于 macOS、Windows 和 Linux 的桌面应用，这是有意为之——本地优先存储、无云依赖、无需登录。

**Elasticsearch 和 OpenSearch 兼容性如何？**
DocKit 会自动检测您连接的引擎并相应调整 API 调用，同一连接表单可同时用于两者。

**DocKit 是开源的吗？**
是的——Apache 2.0 许可证。完整源码在 [github.com/geek-fun/dockit](https://github.com/geek-fun/dockit)。

**会有付费版本吗？**
计划推出包含附加功能的付费 Ultimate 版。社区版将继续保持开源。
