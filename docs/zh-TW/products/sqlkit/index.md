---
title: "開源 SQL 資料庫 GUI 用戶端 | SqlKit"
description: "在 macOS、Windows 和 Linux 使用 MySQL、PostgreSQL、SQL Server、Oracle、SQLite 等資料庫，瀏覽資料表、執行 SQL 並匯出結果。"
layout: product
showBody: true
titleTemplate: false
ogImage: https://www.geekfun.club/og/sqlkit-zh.png
ogImageAlt: SqlKit
head:
  - - script
    - type: application/ld+json
    - |
      {"@context": "https://schema.org", "@type": "SoftwareApplication", "name": "SqlKit", "description": "在 macOS、Windows 和 Linux 使用 MySQL、PostgreSQL、SQL Server、Oracle、SQLite 等資料庫，瀏覽資料表、執行 SQL 並匯出結果。", "url": "https://www.geekfun.club/zh-TW/products/sqlkit/", "applicationCategory": "DeveloperApplication", "operatingSystem": "macOS, Windows, Linux", "downloadUrl": "https://www.geekfun.club/download#sqlkit", "screenshot": "https://www.geekfun.club/sqlkit-client-ui.png", "sameAs": "https://github.com/geek-fun/sqlkit", "offers": {"@type": "Offer", "name": "Community", "price": "0", "priceCurrency": "USD"}}
hero:
  name: SqlKit
  headline: "開源 SQL 資料庫 GUI 用戶端"
  tagline: "在 macOS、Windows 和 Linux 使用 MySQL、PostgreSQL、SQL Server、Oracle、SQLite 等資料庫，瀏覽資料表、執行 SQL 並匯出結果。"
  logo: /sqlkit.png
  screenshot: /sqlkit-client-ui.png
  actions:
    - text: "下載 (英文)"
      link: "/download#sqlkit"
      theme: brand
    - text: "文件"
      link: "/zh-TW/docs/sqlkit/"
      theme: alt
---

## 連線到常用資料庫

SqlKit 內建 MySQL、PostgreSQL、SQL Server 與 SQLite 的驅動程式。連線到 Oracle 則使用 JDBC。以下指南會說明連線欄位、連接埠，以及如何確認目前的工作階段。

[MySQL](/zh-TW/docs/sqlkit/mysql-gui-client) · [PostgreSQL](/zh-TW/docs/sqlkit/postgresql-gui-client) · [SQL Server](/zh-TW/docs/sqlkit/sql-server-gui-client) · [Oracle Database](/zh-TW/docs/sqlkit/oracle-gui-client) · [SQLite](/zh-TW/docs/sqlkit/sqlite-gui-client)

## 執行 SQL 並儲存結果

[安裝 SqlKit](/zh-TW/docs/sqlkit/installation)、[建立連線](/zh-TW/docs/sqlkit/connect-to-database)，再開啟 [SQL 編輯器](/zh-TW/docs/sqlkit/query-editor)。你可以從物件樹開啟資料表、儲存 SQL 檔，並將查詢回傳的資料列匯出成 CSV 或 JSON。使用其他引擎時，請參閱[支援的資料庫與驅動程式（英文）](/docs/sqlkit/supported-databases)。
