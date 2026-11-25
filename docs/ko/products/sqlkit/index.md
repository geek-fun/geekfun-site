---
title: "오픈소스 SQL GUI 클라이언트 | SqlKit"
description: "macOS, Windows, Linux에서 MySQL, PostgreSQL, SQL Server, Oracle, SQLite 등의 테이블을 열고 SQL을 실행하며 결과를 내보낼 수 있습니다."
layout: product
showBody: true
titleTemplate: false
ogImage: https://www.geekfun.club/og/sqlkit-en.png
ogImageAlt: SqlKit
head:
  - - script
    - type: application/ld+json
    - |
      {"@context": "https://schema.org", "@type": "SoftwareApplication", "name": "SqlKit", "description": "macOS, Windows, Linux에서 MySQL, PostgreSQL, SQL Server, Oracle, SQLite 등의 테이블을 열고 SQL을 실행하며 결과를 내보낼 수 있습니다.", "url": "https://www.geekfun.club/ko/products/sqlkit/", "applicationCategory": "DeveloperApplication", "operatingSystem": "macOS, Windows, Linux", "downloadUrl": "https://www.geekfun.club/ko/download#sqlkit", "screenshot": "https://www.geekfun.club/sqlkit-client-ui.png", "sameAs": "https://github.com/geek-fun/sqlkit", "offers": {"@type": "Offer", "name": "Community", "price": "0", "priceCurrency": "USD"}}
hero:
  name: SqlKit
  headline: "오픈소스 SQL GUI 클라이언트"
  tagline: "macOS, Windows, Linux에서 MySQL, PostgreSQL, SQL Server, Oracle, SQLite 등의 테이블을 열고 SQL을 실행하며 결과를 내보낼 수 있습니다."
  logo: /sqlkit.png
  screenshot: /sqlkit-client-ui.png
  actions:
    - text: "다운로드"
      link: "/ko/download#sqlkit"
      theme: brand
    - text: "문서"
      link: "/ko/docs/sqlkit/"
      theme: alt
---

## 사용하는 데이터베이스에 연결하기

SqlKit은 MySQL, PostgreSQL, SQL Server, SQLite용 드라이버를 기본으로 제공하며 Oracle에는 JDBC로 연결합니다. 데이터베이스별 가이드에 연결할 때 입력할 값과 연결 테스트용 쿼리가 나와 있습니다.

[MySQL](/ko/docs/sqlkit/mysql-gui-client) · [PostgreSQL](/ko/docs/sqlkit/postgresql-gui-client) · [SQL Server](/ko/docs/sqlkit/sql-server-gui-client) · [Oracle Database](/ko/docs/sqlkit/oracle-gui-client) · [SQLite](/ko/docs/sqlkit/sqlite-gui-client)

## SQL 실행과 결과 내보내기

[SqlKit 기능 안내](/ko/docs/sqlkit/capabilities)에서 실제 화면과 함께 SQL 편집기, ER 다이어그램, 데이터 전송, AI, MCP 사용법을 확인하세요.

[SqlKit을 설치](/ko/docs/sqlkit/installation)하고 [연결을 추가](/ko/docs/sqlkit/connect-to-database)한 뒤 [SQL 편집기](/ko/docs/sqlkit/query-editor)를 엽니다. 테이블은 객체 트리에서 엽니다. 조회한 행을 CSV 또는 JSON으로 내보내고 SQL을 파일로 저장할 수 있습니다. 다른 엔진은 [지원 데이터베이스와 드라이버 목록(영어)](/docs/sqlkit/supported-databases)에서 확인합니다.
