---
layout: product
title: DocKit - AI原生 NoSQL GUI 客户端
description: DocKit 是一款 AI 原生 NoSQL 图形化客户端，支持 DynamoDB、OpenSearch 和 Elasticsearch。从自然语言生成查询，管理集群，持久化查询 — 完全免费。
ogImage: https://www.geekfun.club/og/dockit-zh.png
head:
  - - meta
    - name: keywords
      content: AI 数据库客户端, AI 原生 NoSQL GUI, DynamoDB AI 助手, Elasticsearch AI, OpenSearch AI, 自然语言查询, DocKit, NoSQL GUI 客户端, DynamoDB GUI, Elasticsearch GUI, OpenSearch GUI, 数据库客户端, 开源数据库工具, PartiQL 编辑器, 桌面数据库客户端, Mac 数据库客户端, Windows 数据库客户端, Linux 数据库客户端
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
        "description": "AI 原生桌面 GUI 客户端，支持 DynamoDB、OpenSearch 和 Elasticsearch。内置 AI 助手从自然语言生成数据库查询。快速、安全、免费。",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
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
