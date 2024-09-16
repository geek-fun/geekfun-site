---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "GEEK FUN"
  text: open-source community
  tagline: software community to build sustainable open source projects for the world
  image:
    src: geekfun.png
    alt: GEEK FUN logo
  actions:
    - theme: brand
      text: Download
      link: /download
    - theme: alt
      text: docs
      link: /docs

features:
  - title: Full featured editor
    details: Powered by monaco-editor the backbones of vscode, provide familiar editor environment for developers
  - title: Keep your connections
    details: Keep your Elasticsearch server connections in DocKit move the dependencies of dashboard tools
  - title: File persistence
    details: Save your ElasticSearch Query in your machine as file, never lost
  - title: Multi engines support
    details: Support Elasticsearch, OpenSearch, and more to come
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
