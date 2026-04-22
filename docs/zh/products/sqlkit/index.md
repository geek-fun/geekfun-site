---
layout: product
title: SqlKit – 开源 SQL 桌面客户端
description: SqlKit 是一款开源的 SQL 桌面 GUI 客户端，支持 PostgreSQL、MySQL、SQL Server 和 SQLite。极速、安全，专为开发者打造。
ogImage: https://www.geekfun.club/og/sqlkit-zh.png
head:
  - - meta
    - name: keywords
      content: SQL 客户端, 数据库客户端, PostgreSQL 客户端, MySQL 客户端, SQL Server 客户端, SQLite 客户端, 开源数据库工具, SqlKit, 桌面端 SQL 客户端, Mac SQL 客户端, Windows SQL 客户端, Linux SQL 客户端, 数据库管理, SQL 编辑器, Monaco SQL 编辑器
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/products/sqlkit/
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/products/sqlkit/
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/products/sqlkit/
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/products/sqlkit/
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "SqlKit",
        "description": "开源的 SQL 桌面客户端，支持 PostgreSQL、MySQL、SQL Server、SQLite 及主流 SQL 数据库。极速、安全，专为开发者打造。",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "featureList": [
          "多数据库支持",
          "PostgreSQL GUI 客户端",
          "MySQL GUI 客户端",
          "SQL Server GUI 客户端",
          "SQLite GUI 客户端",
          "基于 Monaco 的智能查询编辑器",
          "可视化表结构浏览",
          "数据导入与导出",
          "连接管理",
          "查询历史记录"
        ],
        "screenshot": "https://www.geekfun.club/sqlkit-client-ui.png",
        "downloadUrl": "https://www.geekfun.club/zh/download",
        "softwareVersion": "1.0.0",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "license": "https://github.com/geek-fun/sqlkit/blob/main/LICENSE"
      }
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "SqlKit",
        "description": "开源 SQL 桌面客户端，支持 PostgreSQL、MySQL、SQL Server 和 SQLite。具备智能查询编辑器、可视化表结构浏览和安全的连接管理功能。",
        "brand": {
          "@type": "Brand",
          "name": "GEEKFUN"
        },
        "category": "Database Software",
        "image": "https://www.geekfun.club/sqlkit.png",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2026-12-31"
        }
      }

hero:
  name: SqlKit
  headline: "为发布而生的 SQL 客户端。"
  tagline: "在统一、极速的桌面界面中管理 PostgreSQL、MySQL、SQL Server 和 SQLite。开源、安全，专为开发者打造。"
  logo: /sqlkit.png
  screenshot: /sqlkit-client-ui.png
  actions:
    - text: 下载
      link: /zh/download
      theme: brand
    - text: 访问 GitHub
      link: https://github.com/geek-fun/sqlkit
      theme: alt
      external: true

databases:
  title: "支持主流数据库"
  items:
    - { name: PostgreSQL, logo: /db-postgresql.png }
    - { name: MySQL, logo: /db-mysql.png }
    - { name: SQL Server, logo: /db-mssql.png }
    - { name: SQLite, logo: /db-sqlite.png }
    - { name: MariaDB, logo: /db-mariadb.png }

showcase:
  - title: "自信地编写查询"
    body: "基于 Monaco 构建的编辑器，提供语法高亮、上下文感知的自动补全以及 SQL 语句的自动格式化功能。"
    image: /sqlkit-client-ui.png
    align: left
  - title: "可视化地浏览与编辑"
    body: "通过直观的可视化界面浏览数据表、查看列信息和外键关系。甚至在网格中直接修改并更新数据。"
    image: /sqlkit-client-ui.png
    align: right
  - title: "流畅地迁移数据"
    body: "无缝导入和导出数据。支持处理 CSV、JSON 以及原生 SQL 文件，经过深度优化，能高效处理海量数据。"
    image: /sqlkit-client-ui.png
    align: left

features:
  - { title: "多数据库支持", body: "在统一的界面中连接并管理 PostgreSQL、MySQL、SQL Server、SQLite 和 MariaDB 等多种数据库。瞬间切换上下文，保持流畅的工作状态。", icon: "database" }
  - { title: "智能查询编辑器", body: "基于 Monaco 构建的编辑器，提供 VS Code 级别的生产力：语法高亮、上下文感知的自动补全以及自动格式化 SQL 语句。", icon: "code" }
  - { title: "可视化表结构浏览", body: "通过直观的可视化界面浏览数据表、查看列信息和外键关系。支持在网格中直接编辑和更新数据记录。", icon: "table" }
  - { title: "数据导入与导出", body: "无缝迁入和迁出数据。支持 CSV、JSON 以及原生 SQL 导出，经过深度优化，能高效处理超大数据集而不崩溃。", icon: "import" }
  - { title: "连接管理", body: "保存并对多个数据库连接进行分组管理。使用加密的本地存储保护您的凭据安全，实现一键快速连接。", icon: "lock" }
  - { title: "历史查询记录", body: "再也不会丢失复杂的查询语句。自动记录所有执行过的 SQL，让您可以随时搜索、修改并瞬间重新运行历史查询。", icon: "history" }

cta:
  title: "别再受限于你的数据库工具了"
  body: "立即下载 SqlKit，体验专为开发者设计的现代、极速的 SQL 客户端。"
  actions:
    - { text: "下载", link: "/zh/download", theme: "brand" }
    - { text: "访问 GitHub", link: "https://github.com/geek-fun/sqlkit", theme: "alt", external: true }
---
