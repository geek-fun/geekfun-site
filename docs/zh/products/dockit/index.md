---
layout: product
title: DocKit - AI原生 NoSQL GUI 客户端
description: DocKit 是一款 AI 原生 NoSQL 图形化客户端，支持 DynamoDB、OpenSearch 和 Elasticsearch。从自然语言生成查询，管理集群，持久化查询 — 完全免费。
ogImage: https://www.geekfun.club/og/dockit-zh.png
head:
  - - meta
    - name: keywords
      content: AI 数据库客户端, AI 原生 NoSQL GUI, NoSQL GUI 客户端, NoSQL 桌面客户端, nosql gui client, nosql desktop gui, DynamoDB AI 助手, Elasticsearch AI, OpenSearch AI, 自然语言查询, DocKit, DynamoDB GUI, Elasticsearch GUI, OpenSearch GUI, 数据库客户端, 开源数据库工具, PartiQL 编辑器, 桌面数据库客户端, Mac 数据库客户端, Windows 数据库客户端, Linux 数据库客户端
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
        "alternateName": ["NoSQL GUI 客户端", "NoSQL 桌面客户端", "NoSQL GUI client", "NoSQL desktop GUI", "Elasticsearch GUI 客户端", "OpenSearch GUI 客户端", "DynamoDB GUI 客户端"],
        "description": "AI 原生桌面 GUI 客户端，支持 DynamoDB、OpenSearch 和 Elasticsearch。内置 AI 助手从自然语言生成数据库查询。快速、安全、免费。",
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
          "自然语言转 SQL/PartiQL",
          "OpenAI 和 DeepSeek 集成",
          "DynamoDB GUI 客户端",
          "Elasticsearch GUI 客户端",
          "OpenSearch GUI 客户端",
          "PartiQL 编辑器",
          "可视化查询构建器",
          "查询历史持久化",
          "多数据库支持",
          "数据导入导出",
          "集群管理",
          "Monaco 编辑器"
        ],
        "screenshot": "https://www.geekfun.club/client-ui.png",
        "downloadUrl": "https://www.geekfun.club/download",
        "softwareVersion": "1.0.0",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "license": "https://github.com/geek-fun/dockit/blob/main/LICENSE"
      }

hero:
  name: DocKit
  headline: "用自然语言写查询。"
  tagline: "AI 助手深入理解您的数据结构，轻松管理 DynamoDB、Elasticsearch 和 OpenSearch。免费、快速、本地优先。"
  logo: /dockit.png
  screenshot: /dockit-client-ui.png
  actions:
    - text: 下载
      link: /zh/download
      theme: brand
    - text: AI 助手指南
      link: /zh/docs/dockit/ai-assistant
      theme: alt

databases:
  title: "原生支持现代 NoSQL"
  items:
   - { name: DynamoDB, logo: /db-dynamodb.svg }
   - { name: Elasticsearch, logo: /db-elasticsearch.svg }
   - { name: OpenSearch, logo: /db-opensearch.png }

showcase:
  - title: "借助 AI 的力量"
    body: "DocKit 将 AI 作为核心工作流。用自然语言提问，获得优化查询和 Schema 智能感知。内置 OpenAI 与 DeepSeek 支持。"
    image: /dockit-ai-assistant-question.png
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
  - { title: "AI 助手", body: "用自然语言描述需求 — '查找上周注册的用户' 或 '按地区聚合销售额' — 即刻获得准确查询。自动注入 Schema 上下文。", icon: "sparkles" }
  - { title: "桌面级编辑器", body: "Monaco Editor 将 VS Code 的编辑能力带入查询——语法高亮、自动补全、格式化和熟悉的快捷键。", icon: "code" }
  - { title: "本地持久化", body: "连接和查询保存到本地文件系统。查询历史自动追踪。永不丢失工作内容。", icon: "history" }
  - { title: "多引擎支持", body: "统一界面管理 DynamoDB、Elasticsearch 和 OpenSearch。数据库之间即时无缝切换。", icon: "database" }
  - { title: "导入与导出", body: "支持 JSON、CSV、JSONL 格式导入导出大数据集。批量操作稳定可靠地处理百万级记录。", icon: "import" }
  - { title: "集群管理", body: "监控节点健康状态、管理分片、追踪索引信息、控制集群别名——统统内置在可视化集群工具中。", icon: "cluster" }

cta:
  title: "数据库管理，步入 AI 时代"
  body: "别再纠结于复杂的查询语法了。让 DocKit 的 AI 助手包揽那些重复性的劳动，您只需关注数据本身。"
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

## 为什么选择 DocKit 管理多数据库

大多数团队不止使用一种 NoSQL 数据库。同时运行 Elasticsearch 做搜索和 DynamoDB 做键值存储的团队，通常需要两套工具——一套用于 Kibana/Elasticvue，另一套用于 Dynobase/NoSQL Workbench。DocKit 用一个桌面应用覆盖这三种数据库。

| | DocKit | Kibana | Elasticvue | Dynobase | NoSQL Workbench |
|---|---|---|---|---|---|
| **Elasticsearch** | ✅ | ✅ | ✅ | ❌ | ❌ |
| **OpenSearch** | ✅ | ❌ | ✅ | ❌ | ❌ |
| **DynamoDB** | ✅ | ❌ | ❌ | ✅ | ✅ |
| **AI 助手** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **桌面原生** | ✅ | ❌ | 部分 | ✅ | ✅ |
| **开源协议** | ✅ Apache 2.0 | Mixed | ✅ MIT | ❌ | ❌ |
| **价格** | 社区版免费 | 免费 | 免费 | $12–30/月 | 免费 |

## 常见问题

**DocKit 支持离线使用吗？**
支持。所有连接、查询和历史记录均存储在本地。AI 助手仅在发送提示词时需要联网。

**有 Web 版本吗？**
没有。DocKit 是适用于 macOS、Windows 和 Linux 的桌面应用，这是有意为之——本地优先存储、无云依赖、无需登录。

**Elasticsearch 和 OpenSearch 兼容性如何？**
DocKit 会自动检测您连接的引擎并相应调整 API 调用，同一连接表单可同时用于两者。

**DocKit 是开源的吗？**
是的——Apache 2.0 许可证。完整源码在 [github.com/geek-fun/dockit](https://github.com/geek-fun/dockit)。

**会有付费版本吗？**
计划推出包含附加功能的付费 Ultimate 版。社区版将继续保持开源。
