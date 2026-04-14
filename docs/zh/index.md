---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: 极客范 - 免费开源 NoSQL 数据库 GUI 客户端 DynamoDB Elasticsearch 管理工具
description: 极客范开源软件社区，提供可持续的开源软件解决方案。下载 DocKit - 免费 DynamoDB、Elasticsearch、OpenSearch GUI 客户端，跨平台桌面工具支持 Mac、Windows、Linux 开发者。
head:
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/

hero:
  name: "极客范"
  text: 开源俱乐部
  tagline: 致力于打造开放可持续的开源软件
  image:
    src: /geekfun.png
    alt: 极客范开源软件社区 logo
  actions:
    - theme: brand
      text: 产品
      link: /zh/products
    - theme: alt
      text: GitHub
      link: https://github.com/geek-fun

features:
  - title: 价值驱动
    details: 我们坚信软件和服务可以为个人和行业带来切实的价值。坚持以价值为导向的方式，制定并遵循社区原则，以开发维护有价值的软件为目标，并以可持续发展为优先
  - title: 开源开放
    details: 我们对开源的承诺始终坚定。我们通过透明的协作流程进行软件开发、迭代和改进，推动创新并促进社区驱动的进步。
  - title: 可持续软件
    details: 我们致力于开发具备价值且可持续性的软件。我们的目标是创建为世界带来积极贡献的软件和服务，同时确保其长期的可行性和影响力。
---

::: tip 🎉 最新消息
**DocKit v0.8 发布** - 现已全面支持 DynamoDB！[了解更多 →](/zh/news/dockit-v0-8-dynamodb-support)
:::

## 产品

<div style="display: flex;flex-wrap: wrap; justify-content: space-evenly;">
<Product :product='{name: "DocKit", logo: "/dockit.png",preview: "/dockit-client-ui.png", description: "开源 NoSQL 桌面客户端，支持 Elasticsearch、OpenSearch、DynamoDB 等数据库，致力于打造 AI Native 的新一代数据库管理工具。", url: "/zh/products/dockit/"}'></Product>
<Product :product='{name: "SqlKit", logo: "/sqlkit.png",preview: "/sqlkit-client-ui.png", description: "开源 SQL 桌面客户端，支持 PostgreSQL、MySQL、SQL Server、SQLite 等主流数据库，提供更现代、更高效的数据开发体验。", url: "https://github.com/geek-fun/sqlkit"}'></Product>
<Product :product='{name: "ServerlessInsight", logo: "/serverlessinsight.png",preview: "/serverlessinsight-preview.png", description: "开源、无厂商锁定的 Serverless 基础设施与代码框架，支持阿里云、腾讯云、火山引擎等平台，打造一站式应用开发能力。", url: "https://serverlessinsight.com/"}'></Product>
<Product :product='{name: "serverless-adapter", logo: "/serverless-adapter.svg",preview: "/serverless-adapter-preview.svg", description: "面向 Serverless 场景的 Web 框架适配器，支持 Express、Koa 运行在阿里云函数计算、腾讯云 SCF 和火山引擎 veFaaS 等平台。", url: "https://github.com/geek-fun/serverless-adapter"}'></Product>
<Product :product='{name: "jest-search", logo: "/jest-search.png",preview: "/jest-search-preview.png", description: "面向搜索场景测试的 Jest 工具，可在本地快速拉起 Elasticsearch、OpenSearch 和 ZincSearch，提升集成测试效率与稳定性。", url: "https://github.com/geek-fun/jest-search"}'></Product>
</div>

## 俱乐部成员
<TeamMembers></TeamMembers>
