---
title: "オープンソースの SQL GUI クライアント | SqlKit"
description: "MySQL、PostgreSQL、SQL Server、Oracle、SQLite などに接続し、テーブルの閲覧、SQL の実行、結果の出力ができます。macOS、Windows、Linux に対応。"
layout: product
showBody: true
titleTemplate: false
ogImage: https://www.geekfun.club/og/sqlkit-en.png
ogImageAlt: SqlKit
head:
  - - script
    - type: application/ld+json
    - |
      {"@context": "https://schema.org", "@type": "SoftwareApplication", "name": "SqlKit", "description": "MySQL、PostgreSQL、SQL Server、Oracle、SQLite などに接続し、テーブルの閲覧、SQL の実行、結果の出力ができます。macOS、Windows、Linux に対応。", "url": "https://www.geekfun.club/ja/products/sqlkit/", "applicationCategory": "DeveloperApplication", "operatingSystem": "macOS, Windows, Linux", "downloadUrl": "https://www.geekfun.club/ja/download#sqlkit", "screenshot": "https://www.geekfun.club/sqlkit-client-ui.png", "sameAs": "https://github.com/geek-fun/sqlkit", "offers": {"@type": "Offer", "name": "Community", "price": "0", "priceCurrency": "USD"}}
hero:
  name: SqlKit
  headline: "オープンソースの SQL GUI クライアント"
  tagline: "MySQL、PostgreSQL、SQL Server、Oracle、SQLite などに接続し、テーブルの閲覧、SQL の実行、結果の出力ができます。macOS、Windows、Linux に対応。"
  logo: /sqlkit.png
  screenshot: /sqlkit-client-ui.png
  actions:
    - text: "ダウンロード"
      link: "/ja/download#sqlkit"
      theme: brand
    - text: "ドキュメント"
      link: "/ja/docs/sqlkit/"
      theme: alt
---

## データベースに接続する

SqlKit は MySQL、PostgreSQL、SQL Server、SQLite のドライバーを内蔵しています。Oracle への接続には JDBC を使います。データベース別のガイドに、接続に必要な項目と確認用クエリをまとめています。

[MySQL](/ja/docs/sqlkit/mysql-gui-client) · [PostgreSQL](/ja/docs/sqlkit/postgresql-gui-client) · [SQL Server](/ja/docs/sqlkit/sql-server-gui-client) · [Oracle Database](/ja/docs/sqlkit/oracle-gui-client) · [SQLite](/ja/docs/sqlkit/sqlite-gui-client)

## SQL を書いて結果を保存する

[SqlKit をインストール](/ja/docs/sqlkit/installation)し、[接続を登録](/ja/docs/sqlkit/connect-to-database)したら、[SQL エディター](/ja/docs/sqlkit/query-editor)を開きます。オブジェクトツリーからテーブルの行を確認し、実行したクエリの結果を CSV や JSON に出力できます。SQL はファイルとして保存できます。ほかのエンジンについては[対応データベースとドライバー（英語）](/docs/sqlkit/supported-databases)を参照してください。
