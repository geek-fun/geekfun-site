---
title: SqlKit 기능 | SQL, AI, MCP
description: SqlKit의 연결 관리, SQL 편집기, ER 다이어그램, 데이터 전송, AI 도우미 및 MCP 기능과 사용 조건을 확인하세요.
---

# SqlKit 기능

SqlKit에서 데이터베이스에 연결하고, 테이블 구조를 확인하며, SQL을 실행해 결과를 저장할 수 있습니다. 각 작업은 해당 메뉴에서 시작하며, 일부 기능은 데이터베이스 드라이버나 Ultimate 요금제에 따라 지원 여부가 달라집니다.

<div class="docs-section-links">

- [SqlKit 설치](/ko/docs/sqlkit/installation)
- [지원 데이터베이스](/ko/docs/sqlkit/#supported-databases)
- [요금제 비교](/ko/pricing)

</div>

## 데이터베이스에 연결 {#connections}

**연결 → 새 연결 추가**에서 데이터베이스 유형을 선택한 뒤 서버 주소나 로컬 파일을 지정합니다. Oracle 등 JDBC 연결은 연결을 테스트할 때 Java 런타임과 드라이버를 확인합니다. Ultimate에서는 SSH 프로필을 재사용하거나 여러 배스천을 이어서 사용할 수 있습니다.

[연결 추가 및 테스트](/ko/docs/sqlkit/connect-to-database) · [SSH 터널 설정(영어)](/docs/sqlkit/ssh-tunnel)

<DocsFigure src="/sqlkit-client-ui.png" alt="SqlKit 연결 관리 화면에 표시된 저장된 데이터베이스 연결" caption="연결 카드에서 데이터베이스를 열거나 연결을 수정할 수 있습니다." :width="3424" :height="2224" />

## SQL 실행 및 실행 계획 확인 {#query}

**쿼리**에서 연결과 데이터베이스를 확인한 후 쿼리 탭을 엽니다. 테이블과 열 이름을 자동 완성하고 전체 스크립트, 선택 영역 또는 커서가 있는 문을 실행할 수 있습니다. 지원되는 데이터베이스에서는 **Explain**으로 실행 계획을 확인합니다. **Explain Analyze**는 문을 실행해 실제 소요 시간을 수집합니다.

[SQL 편집기와 결과](/ko/docs/sqlkit/query-editor) · [키보드 단축키](/ko/docs/sqlkit/keyboard-shortcuts)

<DocsFigure src="/sqlkit-sql-editor-ui.png" alt="SqlKit의 개체 트리, SQL 편집기, 쿼리 결과 그리드" caption="쿼리를 실행하면 편집기 아래에 결과가 표시됩니다." :width="3424" :height="2224" />

## 스키마와 테이블 관계 살펴보기 {#schema}

개체 트리에서 테이블을 고르고 **구조 보기**를 열어 열, 키, 인덱스를 확인합니다. Ultimate에서는 데이터베이스나 스키마 메뉴에서 ER 다이어그램을 열 수 있습니다. 데이터베이스가 제공하는 외래 키를 따라 관계를 확인하고, 테이블을 두 번 클릭해 데이터를 엽니다.

[테이블 구조와 데이터 보기(영어)](/docs/sqlkit/table-browser)

<DocsFigure src="/sqlkit-er-diagram-ui.png" alt="테이블과 외래 키 관계를 보여 주는 SqlKit ER 다이어그램" caption="ER 다이어그램에서 테이블 사이의 외래 키 관계를 확인할 수 있습니다." :width="3424" :height="2224" />

## 데이터 조회, 편집 및 전송 {#data}

테이블을 두 번 클릭해 행을 엽니다. 드라이버가 지원하면 필터링과 정렬을 사용할 수 있습니다. 행을 수정하기 전에 식별 값과 계정의 쓰기 권한을 확인하세요. 쿼리 결과를 CSV나 JSON으로 저장하고, Ultimate의 **전송**에서 파일을 가져오거나 테이블을 내보낼 수 있습니다.

[행 조회와 편집(영어)](/docs/sqlkit/table-browser) · [파일 가져오기와 내보내기(영어)](/docs/sqlkit/import-export)

<DocsFigure src="/sqlkit-data-view-table-ui.png" alt="필터와 행 작업이 있는 SqlKit 데이터 그리드" caption="데이터와 필터, 행 작업을 같은 탭에서 확인할 수 있습니다." :width="3424" :height="2224" />

## SqlKit에서 AI 사용 {#ai}

Ultimate의 Agentic Data Studio에 사용할 모델 서비스나 로컬 엔드포인트를 설정합니다. 연결된 스키마를 바탕으로 쿼리를 설명하거나 SQL 초안을 작성하도록 요청할 수 있습니다. 예를 들어 월별 보고서에 쓸 날짜 열을 찾은 뒤 생성된 SQL을 편집기에서 검토합니다.

[Agentic Data Studio 설정](/ko/docs/sqlkit/agentic-datastudio)

<DocsFigure src="/sqlkit-data-studio-ui.png" alt="스키마 정보와 생성된 SQL을 보여 주는 SqlKit AI 도우미" caption="도우미가 작성한 SQL을 편집기에서 검토한 뒤 실행할 수 있습니다." :width="1440" :height="935" />

## MCP로 코딩 에이전트 연결 {#mcp}

Ultimate에서 **설정 → MCP 브리지**를 켜고 코딩 도구에 Data Studio Agent를 등록합니다. 스키마 조회와 읽기 쿼리만 필요하면 읽기 권한부터 선택하세요. 쓰기를 허용하기 전에는 연결별 권한을 확인합니다. 데이터베이스 계정의 권한도 적용됩니다.

[MCP 설정](/ko/docs/sqlkit/mcp-bridge) · [AI 권한 설정](/ko/docs/sqlkit/ai-permissions)

## 데이터베이스 및 요금제별 사용 조건 {#requirements}

실행 계획, 행 편집, 표시되는 개체는 데이터베이스, 드라이버, 계정 권한에 따라 달라집니다. Cassandra와 ScyllaDB는 CQL을 사용합니다.

Community에서는 연결, 개체 탐색, SQL 실행과 저장, 결과의 CSV 및 JSON 내보내기를 지원합니다. Ultimate에는 SSH 터널, ER 다이어그램, 전송, AI 도우미, MCP Bridge가 포함됩니다.
