---
title: "SqlKit 시작하기"
description: "SqlKit을 설치하고 SQL 데이터베이스에 연결해 첫 쿼리를 실행합니다."
---

# SqlKit 시작하기

SqlKit은 macOS, Windows, Linux에서 실행되는 오픈 소스 데스크톱 데이터베이스 클라이언트입니다. 서버에 연결하거나 로컬 파일을 열어 같은 화면에서 구조, SQL, 쿼리 결과를 확인할 수 있습니다.

<div class="docs-section-links">

- [SqlKit 설치](/ko/docs/sqlkit/installation)
- [SqlKit 기능](/ko/docs/sqlkit/capabilities)
- [지원 데이터베이스](#supported-databases)

</div>

<DocsFigure src="/sqlkit-sql-editor-ui.png" alt="SqlKit의 데이터베이스 개체 트리, SQL 편집기, 쿼리 결과" caption="쿼리 작업 공간에서 데이터베이스 구조, 편집기, 실행 결과를 함께 볼 수 있습니다." :width="3424" :height="2224" eager />

[앱을 설치](/ko/docs/sqlkit/installation)하고 [데이터베이스 연결을 추가](/ko/docs/sqlkit/connect-to-database)합니다. [읽기 전용 쿼리](/ko/docs/sqlkit/query-editor)로 접속을 확인한 뒤, 자주 쓰는 작업은 [키보드 단축키](/ko/docs/sqlkit/keyboard-shortcuts)로 실행할 수 있습니다.

## SqlKit이 지원하는 데이터베이스 {#supported-databases}

| 연결 방식 | 데이터베이스 |
| --- | --- |
| 기본 TCP 드라이버 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#tcp--> |
| 기본 로컬 파일 드라이버 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#local--> |
| MySQL 호환 드라이버 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#mysql--> |
| PostgreSQL 호환 드라이버 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#postgresql--> |
| JDBC 브리지 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#jdbc--> |
| HTTP 연결 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#http--> |

연결에 필요한 설정은 [지원 데이터베이스와 드라이버 안내(영어)](/docs/sqlkit/supported-databases)에서 확인할 수 있습니다.
