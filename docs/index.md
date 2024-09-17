---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "GEEKFUN"
  text: open-source club
  tagline: software club to build sustainable open source software for the world
  image:
    src: geekfun.png
    alt: GEEK FUN logo
  actions:
    - theme: brand
      text: Quick Start
      link: /download
    - theme: alt
      text: GitHub
      link: https://github.com/geek-fun

features:
  - title: Value Driven
    details: We believe that software and services should deliver tangible value to both individuals and industries. By adhering to a value-oriented approach, we define and uphold key principles that focus on continuously driving meaningful outcomes and delivering long-term benefits.
  - title: Open Source
    details: Our commitment to open source is unwavering. We develop, iterate, and improve our software through transparent, collaborative processes that foster innovation and community-driven progress.
  - title: Software Sustainability
    details: We are dedicated to creating software that not only provides value but also prioritizes sustainability. Our goal is to develop solutions that contribute positively to the world while ensuring their long-term viability and impact.
---

## Products

<div style="display: flex;flex-wrap: wrap; justify-content: space-evenly;">
<Product :product='{name: "DocKit", logo: "/dockit.png",preview: "/dockit-client-ui.png", description: "A better NoSQL GUI client for Mac, Windows and Linux", url: "https://dockit.geekfun.club/"}'></Product>
<Product :product='{name: "AnyTerm", logo: "/anyterm.png",preview: "/anyterm-client-ui.png", description: "Supper lightweight SSH client and terminal for Mac, Windows and Linux", url: "https://github.com/geek-fun/AnyTerm"}'></Product>
<Product :product='{name: "ServerlessInsight", logo: "/serverlessinsight.png",preview: "/serverlessinsight-preview.png", description: "Full life cycle cross providers serverless application management for your fast-growing business.", url: "https://github.com/geek-fun/hostsless"}'></Product>
<Product :product='{name: "jest-search", logo: "/jest-search.png",preview: "/jest-search-preview.png", description: "Jest preset for running tests with local ElasticSearch, OpenSearch and ZincSearch.", url: "https://github.com/geek-fun/jest-search"}'></Product>
</div>

## Team Members
<TeamMembers></TeamMembers>
