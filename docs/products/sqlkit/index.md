---
layout: product
title: SqlKit – Open-Source SQL Desktop Client
description: SqlKit is an open-source SQL desktop GUI client for PostgreSQL, MySQL, SQL Server, and SQLite. Fast, secure, and built for developers.
ogImage: https://www.geekfun.club/og/sqlkit-en.png
head:
  - - meta
    - name: keywords
      content: SQL client, database client, PostgreSQL GUI, MySQL GUI, SQL Server GUI, SQLite GUI, open source database tool, SqlKit, desktop SQL client, Mac SQL client, Windows SQL client, Linux SQL client, database management, SQL editor, Monaco SQL editor
  - - link
    - rel: canonical
      href: https://www.geekfun.club/products/sqlkit/
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
        "description": "Open-source SQL desktop client for PostgreSQL, MySQL, SQL Server, SQLite, and mainstream SQL databases. Fast, secure, and built for developers.",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "featureList": [
          "Multi-Database Support",
          "PostgreSQL GUI client",
          "MySQL GUI client",
          "SQL Server GUI client",
          "SQLite GUI client",
          "Smart Query Editor with Monaco",
          "Visual Table Browser",
          "Data Import and Export",
          "Connection Management",
          "Query History tracking"
        ],
        "screenshot": "https://www.geekfun.club/sqlkit-client-ui.png",
        "downloadUrl": "https://www.geekfun.club/download",
        "softwareVersion": "1.0.0",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "license": "https://github.com/geek-fun/sqlkit/blob/main/LICENSE"
      }

hero:
  name: SqlKit
  headline: "The SQL client built for shipping"
  tagline: "Manage PostgreSQL, MySQL, SQL Server, and SQLite from a unified, lightning-fast desktop interface. Open-source, secure, and built for developers."
  logo: /sqlkit.png
  screenshot: /sqlkit-client-ui.png
  actions:
    - text: Download
      link: /download
      theme: brand
    - text: View on GitHub
      link: https://github.com/geek-fun/sqlkit
      theme: alt
      external: true

databases:
  title: "Works with everything you query"
  items:
    - { name: PostgreSQL, logo: /db-postgresql.png }
    - { name: MySQL, logo: /db-mysql.png }
    - { name: SQL Server, logo: /db-mssql.png }
    - { name: SQLite, logo: /db-sqlite.png }
    - { name: MariaDB, logo: /db-mariadb.png }

showcase:
  - title: "Query with confidence"
    body: "Monaco-powered editing with syntax highlighting, context-aware autocomplete, and automatic query formatting."
    image: /sqlkit-client-ui.png
    align: left
  - title: "Browse and edit visually"
    body: "Browse tables, inspect columns, and navigate relationships with an intuitive visual interface. Edit records directly in the data grid."
    image: /sqlkit-client-ui.png
    align: right
  - title: "Move data without friction"
    body: "Move data in and out seamlessly. Support for CSV, JSON, and raw SQL dumps, engineered to handle large datasets efficiently without crashing."
    image: /sqlkit-client-ui.png
    align: left

features:
  - { title: "Multi-Database Support", body: "Connect to PostgreSQL, MySQL, SQL Server, SQLite, MariaDB, and more from one unified interface. Switch contexts instantly without losing your flow.", icon: "database" }
  - { title: "Smart Query Editor", body: "Monaco-powered editor delivers VS Code-level productivity with syntax highlighting, context-aware autocomplete, and automatic query formatting.", icon: "code" }
  - { title: "Visual Table Browser", body: "Browse tables, inspect columns, and navigate relationships with an intuitive visual interface. Edit records directly in the data grid.", icon: "table" }
  - { title: "Data Import & Export", body: "Move data in and out seamlessly. Support for CSV, JSON, and raw SQL dumps, engineered to handle large datasets efficiently without crashing.", icon: "import" }
  - { title: "Connection Management", body: "Save and organize multiple database connections. Keep your credentials secure with encrypted local storage and quick-connect profiles.", icon: "lock" }
  - { title: "Query History", body: "Never lose a complex query again. Automatic tracking of executed statements lets you search, modify, and re-run past queries instantly.", icon: "history" }

cta:
  title: "Stop fighting your database client"
  body: "Download SqlKit today and experience a modern, lightning-fast SQL client built for developers."
  actions:
    - { text: "Download", link: "/download", theme: "brand" }
    - { text: "View on GitHub", link: "https://github.com/geek-fun/sqlkit", theme: "alt", external: true }
---
