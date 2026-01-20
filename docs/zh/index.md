---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "极客范"
  text: 开源俱乐部
  tagline: 致力于打造开放可持续的开源软件
  image:
    src: /geekfun.png
    alt: GEEK FUN logo
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
**DocKit v0.8 发布** - 现已全面支持 DynamoDB！[了解更多 →](/zh/news/dockit-v0-8-dynamodb-support.md)
:::

## 产品

<div style="display: flex;flex-wrap: wrap; justify-content: space-evenly;">
<Product :product='{name: "DocKit", logo: "/dockit.png",preview: "/dockit-client-ui.png", description: "一个更好的NoSQL可视化客户端，支持 Mac, Windows 和 Linux。", url: "https://dockit.geekfun.club/"}'></Product>
<Product :product='{name: "AnyTerm", logo: "/anyterm.png",preview: "/anyterm-client-ui.png", description: "轻量级SSH远程终端模拟器桌面客户端，支持Mac, Windows 和 Linux。", url: "https://github.com/geek-fun/AnyTerm"}'></Product>
<Product :product='{name: "ServerlessInsight", logo: "/serverlessinsight.png",preview: "/serverlessinsight-preview.png", description: "全生命周期的跨供应商Serverlss应用管理,为您的快速增长业务提供全流程敏捷实践。", url: "https://github.com/geek-fun/hostsless"}'></Product>
<Product :product='{name: "jest-search", logo: "/jest-search.png",preview: "/jest-search-preview.png", description: "进行集成测试的 Jest 预设,通过运行本地 ElasticSearch、OpenSearch 和 ZincSearch实现。", url: "https://github.com/geek-fun/jest-search"}'></Product>
</div>

## 俱乐部成员
<TeamMembers></TeamMembers>
