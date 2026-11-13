---
layout: product
title: DocKit — MongoDB, Elasticsearch, OpenSearch, DynamoDB용 Agentic NoSQL 데스크톱 GUI
description: 'DocKit은 MongoDB, Elasticsearch, OpenSearch, DynamoDB, EasySearch를 위한 오픈 소스 Agentic NoSQL 데스크톱 GUI입니다. 데이터 AI 에이전트가 자연어로 쿼리를 작성하고, 스키마를 검사하고, 데이터를 관리합니다 — 프라이버시 우선, 로컬 실행. Community 에디션은 무료·오픈 소스이며, AI 에이전트는 유료 Ultimate 구독에 포함됩니다.'
ogImage: https://www.geekfun.club/og/dockit-en.png
head:
  - - meta
    - name: keywords
      content: mongodb gui 클라이언트, mongodb 데스크톱 클라이언트, elasticsearch gui 클라이언트, opensearch gui 클라이언트, dynamodb gui 클라이언트, nosql gui 클라이언트, nosql 데스크톱 gui, AI 데이터베이스 클라이언트, AI 네이티브 NoSQL GUI, DynamoDB AI 어시스턴트, Elasticsearch AI, OpenSearch AI, 자연어 쿼리, DocKit, NoSQL GUI 클라이언트, DynamoDB GUI, Elasticsearch GUI, OpenSearch GUI, MongoDB GUI, 데이터베이스 클라이언트, Dynobase 대안, Kibana 대안, 오픈 소스 데이터베이스 도구, PartiQL 편집기, 데스크톱 데이터베이스 클라이언트, Mac 데이터베이스 클라이언트, Windows 데이터베이스 클라이언트, Linux 데이터베이스 클라이언트, Agentic Data Studio, EasySearch
  - - link
    - rel: canonical
      href: https://www.geekfun.club/ko/products/dockit/
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/products/dockit/
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/products/dockit/
  - - link
    - rel: alternate
      hreflang: ko
      href: https://www.geekfun.club/ko/products/dockit/
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/products/dockit/
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "DocKit",
        "alternateName": ["MongoDB GUI 클라이언트", "Elasticsearch GUI 클라이언트", "OpenSearch GUI 클라이언트", "DynamoDB GUI 클라이언트", "EasySearch GUI 클라이언트", "NoSQL GUI 클라이언트", "NoSQL 데스크톱 GUI", "Agentic Data Studio"],
        "description": "MongoDB, Elasticsearch, OpenSearch, DynamoDB, EasySearch용 오픈 소스 데스크톱 GUI 클라이언트. 내장 AI 어시스턴트로 자연어에서 데이터베이스 쿼리를 생성합니다. 자연어 데이터베이스 인터랙션을 위한 Agentic Data Studio. 빠르고, 로컬 우선이며, Apache 2.0.",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD"
        },
        "featureList": [
          "AI 기반 쿼리 생성",
          "Agentic Data Studio",
          "자연어를 SQL/PartiQL/MQL로 변환",
          "OpenAI, Anthropic 및 DeepSeek 통합",
          "MongoDB GUI 클라이언트",
          "Elasticsearch GUI 클라이언트",
          "OpenSearch GUI 클라이언트",
          "DynamoDB GUI 클라이언트",
          "EasySearch GUI 클라이언트",
          "PartiQL 편집기",
          "MongoDB 쿼리 편집기",
          "시각적 쿼리 빌더",
          "쿼리 기록 영구 저장",
          "다중 데이터베이스 지원",
          "데이터 가져오기/내보내기",
          "가져오기/내보내기 마법사",
          "백그라운드 작업 관리자",
          "로컬 파일 브라우저",
          "AWS SSO 인증",
          "ES|QL 자동 완성",
          "클러스터 관리",
          "Monaco 편집기",
          "테이블 수명 주기 관리"
        ],
        "screenshot": "https://www.geekfun.club/dockit-client-ui.png",
        "downloadUrl": "https://www.geekfun.club/download",
        "softwareVersion": "1.4.0",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "license": "https://github.com/geek-fun/dockit/blob/main/LICENSE",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "1096",
          "bestRating": "5",
          "worstRating": "1"
        },
        "sameAs": [
          "https://github.com/geek-fun/dockit",
          "https://www.geekfun.club/products/dockit/"
        ]
      }

hero:
  name: DocKit
  headline: "NoSQL 데이터베이스 GUI 클라이언트"
  animatedText: "Agentic"
  tagline: "데이터베이스를 관리하는 오픈 소스 데이터 AI 에이전트입니다. MongoDB, Elasticsearch, OpenSearch, DynamoDB, EasySearch에 연결하고 — 필요한 것을 자연어로 설명하세요. 에이전트가 쿼리를 작성하고, 스키마를 검사하고, 문서를 업데이트하고 결과를 반환합니다. 프라이버시 우선, 로컬 실행, Apache 2.0."
  logo: /dockit.png
  screenshot: /dockit-client-ui.png
  actions:
    - text: 무료 체험 시작
      link: https://console.geekfun.club/subscribe?intent=trial
      theme: brand
      external: true
    - text: 다운로드
      link: /ko/download
      theme: alt

databases:
  title: "모던 NoSQL 네이티브 지원"
  items:
    - { name: MongoDB, logo: /db-mongodb.svg, link: /products/dockit/mongodb-gui-client }
    - { name: DynamoDB, logo: /db-dynamodb.svg, link: /products/dockit/dynamodb-gui-client }
    - { name: Elasticsearch, logo: /db-elasticsearch.svg, link: /products/dockit/elasticsearch-gui-client }
    - { name: OpenSearch, logo: /db-opensearch.png, link: /products/dockit/opensearch-gui-client }
    - { name: EasySearch, logo: /db-easysearch.svg }

showcase:
  - title: "Agentic Data Studio"
    body: "자연어로 데이터베이스와 대화하세요. DocKit의 데이터 AI 에이전트가 쿼리를 작성하고, 스키마를 검사하고, 인덱스를 생성하고, 문서를 업데이트하고 결과를 반환합니다 — 소스별 권한 설정과 파괴적 작업을 위한 안전 게이트를 갖추고 있습니다. '지난주 $500을 초과하는 주문 찾아줘'라고 물으면 최적화된 쿼리를 즉시 받을 수 있습니다. OpenAI, Anthropic, DeepSeek를 지원하며, Ollama와 LM Studio로 완전한 오프라인 사용도 가능합니다."
    image: /dockit-gui-client-demo.gif
    align: left
  - title: "다중 데이터베이스 데이터 관리"
    body: "하나의 인터페이스에서 MongoDB, DynamoDB, Elasticsearch, OpenSearch, EasySearch를 관리하세요. 클러스터 상태를 모니터링하고, 인덱스를 관리하고, 메트릭을 추적하고, 내장된 가져오기, 내보내기, 백업 기능으로 데이터베이스 간에 데이터를 이동할 수 있습니다."
    image: /dockit-multi-database-manage-demo.gif
    align: right
  - title: "가져오기 및 백업"
    body: "대화형 인터페이스를 통해 데이터를 내보내고 복원하세요. 소스와 대상을 선택하고, 필드를 시각적으로 매핑하고, 포함할 필드를 고르면 나머지는 DocKit이 처리합니다 — 모든 작업은 실시간 진행률과 함께 백그라운드 작업으로 실행됩니다. JSON, CSV, JSONL을 지원합니다."
    image: /dockit-import-export-demo.gif
    align: left
  - title: "로컬 우선 프라이버시"
    body: "탭을 새로 고칠 때 작업 내용이 사라지는 브라우저 기반 도구에 지치셨나요? DocKit은 데스크톱 앱으로 실행됩니다 — 자격 증명, 쿼리, LLM 설정이 클라우드 의존 없이 사용자의 머신에 유지됩니다. 쿼리 기록은 세션 간에 유지됩니다. Ollama와 LM Studio로 완전한 오프라인 사용이 가능합니다."
    image: /dockit-query-history.png
    align: right

features:
  - { title: "Agentic Data Studio", body: "자연어로 데이터베이스와 대화하세요. 데이터 AI 에이전트가 쿼리를 작성하고, 스키마를 검사하고, 인덱스를 생성하고, 문서를 업데이트합니다 — 소스별 권한 설정과 파괴적 작업을 위한 안전 게이트를 갖추고 있습니다.", icon: "sparkles" }
  - { title: "데스크톱급 편집기", body: "Monaco Editor가 쿼리에 VS Code의 강력한 기능을 제공합니다 — 이미 익숙한 구문 강조, 자동 완성, 포맷팅, 키보드 단축키를 지원합니다.", icon: "edit" }
  - { title: "로컬 우선 프라이버시", body: "자격 증명, 쿼리, LLM 설정이 로컬에 저장됩니다. 쿼리 기록이 자동으로 추적됩니다. Ollama와 LM Studio로 완전한 오프라인 사용이 가능합니다.", icon: "history" }
  - { title: "다중 데이터베이스 지원", body: "하나의 통합 인터페이스에서 MongoDB, DynamoDB, Elasticsearch, OpenSearch, EasySearch를 관리하세요. 데이터베이스 간에 즉시 전환할 수 있습니다.", icon: "database" }
  - { title: "가져오기 및 내보내기", body: "JSON, CSV, JSONL 지원으로 대용량 데이터셋을 손쉽게 이동하세요. 배치 작업이 수백만 건의 레코드를 안정적으로 처리합니다.", icon: "import" }
  - { title: "클러스터 관리", body: "노드 상태 모니터링, 샤드 관리, 인덱스 추적, 별칭 제어 — 모든 기능이 내장된 시각적 클러스터 도구로 제공됩니다.", icon: "cluster" }
  - { title: "백그라운드 작업", body: "가져오기, 내보내기 등 오래 실행되는 작업이 실시간 진행률과 상태 추적과 함께 백그라운드 작업으로 실행됩니다. 작업이 실행되는 동안에도 DocKit을 계속 사용할 수 있습니다.", icon: "layers" }
  - { title: "파일 브라우저", body: "로컬 쿼리 파일(.search, .partiql, .mongo)을 앱 내에서 직접 탐색, 생성, 정리하세요. 이름, 날짜 또는 크기별 정렬을 지원하며 파일을 편집기 탭으로 엽니다.", icon: "search" }
  - { title: "쿼리 기록", body: "모든 쿼리가 자동으로 기록됩니다. 연결당 500개 항목과 별표/북마크를 지원합니다. 이전 쿼리를 복사, 다시 불러오기 또는 재실행할 수 있습니다.", icon: "history" }

platforms:
  title: "모든 플랫폼에서 사용 가능"
  items:
    - { name: macOS, logo: /platform/platform-macos.svg }
    - { name: Windows, logo: /platform/platform-windows.svg }
    - { name: Linux, logo: /platform/platform-linux.svg }

cta:
  title: "데이터베이스 관리, AI 네이티브"
  body: "복잡한 쿼리 문법과 씨름하지 마세요. DocKit의 AI 어시스턴트와 Agentic Data Studio가 번거로운 작업을 처리하도록 맡기고, 데이터에 집중하세요."
  actions:
    - { text: "무료 체험 시작", link: "https://console.geekfun.club/subscribe?intent=trial", theme: "brand", external: true }
    - { text: "다운로드", link: "/ko/download", theme: "alt" }
    - { text: "SqlKit 사용해 보기 →", link: "/products/sqlkit/", theme: "alt" }
---

## 다중 데이터베이스 팀이 DocKit을 선택하는 이유

대부분의 팀은 하나의 NoSQL 데이터베이스만 사용하지 않습니다. 검색용 Elasticsearch와 키-값 워크로드용 DynamoDB를 함께 운영하는 팀은 보통 두 가지 별도 도구가 필요합니다 — 한쪽에는 Kibana/Elasticvue, 다른 쪽에는 Dynobase/NoSQL Workbench를 사용하는 방식이죠. DocKit은 이 세 가지를 하나의 데스크톱 앱에서 모두 지원합니다.

| | DocKit | Kibana | Elasticvue | Dynobase | NoSQL Workbench |
|---|---|---|---|---|---|---|
| **MongoDB** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Elasticsearch** | ✅ | ✅ | ✅ | ❌ | ❌ |
| **OpenSearch** | ✅ | ❌ | ✅ | ❌ | ❌ |
| **EasySearch** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **DynamoDB** | ✅ | ❌ | ❌ | ✅ | ✅ |
| **AI 어시스턴트** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Agentic Data Studio** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **데스크톱 네이티브** | ✅ | ❌ | 부분 지원 | ✅ | ✅ |
| **오픈 소스** | ✅ Apache 2.0 | 혼합 | ✅ MIT | ❌ | ❌ |
| **가격** | Community: 무료 · Ultimate $9.9/월 | 무료 | 무료 | $12–30/월 | 무료 |

## Elasticsearch GUI 클라이언트

DocKit은 쿼리 편집기에서 실질적인 시간을 보내는 엔지니어를 위해 만들어진 온전한 기능의 **Elasticsearch GUI 클라이언트**입니다. Kibana의 Dev Tools 탭을 대체하는 Monaco 기반 편집기는 JSON5 문법, 인라인 주석, 실시간 mapping 기반 필드 자동 완성, AI 지원 쿼리 생성을 지원합니다. 차세대 Elasticsearch 쿼리 언어를 위한 ES|QL 자동 완성도 내장되어 있습니다.

로컬, 자체 호스팅, 클라우드 등 어떤 Elasticsearch 클러스터에도 Basic Auth 또는 API Key로 연결할 수 있습니다. 인덱스를 탐색하고, mapping과 별칭을 관리하고, 샤드 수준의 상세 지표(문서 수, 저장소, fielddata, 쿼리 캐시, 색인 속도, 병합 통계, 세그먼트)와 함께 클러스터와 샤드 상태를 모니터링하며, JSON, CSV, JSONL(bulk 형식)로 데이터를 가져오고 내보낼 수 있습니다. 참조용으로 120개 이상의 Elasticsearch 및 OpenSearch API 엔드포인트 문법 카탈로그를 제공합니다. 쿼리는 로컬 파일로 유지되므로 앱을 닫아도 잃어버리는 것이 없습니다.

→ [Elasticsearch GUI 클라이언트 상세 소개](/products/dockit/elasticsearch-gui-client)

## OpenSearch GUI 클라이언트

DocKit은 일상적인 쿼리 작업을 위한 오픈 소스 **OpenSearch GUI 클라이언트**이자 OpenSearch Dashboards의 데스크톱 대안입니다. 2초 이내에 실행되고, 약 150 MB의 RAM을 사용하며, 모든 것을 로컬에 저장합니다 — Dashboards 인스턴스가 필요 없습니다.

동일한 Monaco 편집기, AI 어시스턴트, 클러스터 관리, 가져오기/내보내기 기능이 AWS OpenSearch Service 클러스터를 포함해 OpenSearch 1.x, 2.x, 3.x에서 동일하게 작동합니다.

→ [OpenSearch GUI 클라이언트 상세 소개](/products/dockit/opensearch-gui-client)

## DynamoDB GUI 클라이언트

DocKit은 일상적인 테이블 작업에서 AWS 콘솔을 대체하는 오픈 소스 **DynamoDB GUI 클라이언트**입니다. 스키마 인식 자동 완성을 갖춘 PartiQL 편집기, 13개 이상의 필터 연산자를 지원하는 시각적 쿼리 빌더, 인라인 아이템 CRUD, 페이지 크기를 설정할 수 있는 페이지네이션, 그리고 전체 테이블 수명 주기 관리 — GSI/LSI 생성, TTL, 스트림, PITR, 암호화, CloudWatch 지표, 테이블 비우기 — 를 제공합니다. 실제 속성 이름이 컨텍스트로 주입되는 AI 기반 쿼리 생성과 JSON, CSV 가져오기/내보내기를 지원합니다.

DynamoDB Local을 이용한 로컬 개발, AWS 프로파일, SSO, 액세스 키, 그리고 모든 리전에서의 IAM 역할 인증을 지원합니다.

→ [DynamoDB GUI 클라이언트 상세 소개](/products/dockit/dynamodb-gui-client)

## MongoDB GUI 클라이언트

DocKit은 자동 완성과 결과 포맷팅을 갖춘 온전한 기능의 쿼리 편집기를 제공하는 오픈 소스 **MongoDB GUI 클라이언트**입니다. 페이지네이션과 인라인 CRUD 작업으로 문서를 탐색할 수 있습니다. Manage 뷰는 컬렉션 수준의 인프라 탐색 기능을 제공합니다 — 인덱스, 저장소 통계, 메타데이터를 한눈에 확인할 수 있습니다.

인증, TLS, 레플리카 셋(replica set) 구성으로 연결할 수 있습니다. 효율적인 배치 작업을 위한 벌크 쓰기(bulk write)를 지원합니다. 연결별로 유지되는 별표/북마크 즐겨찾기 기능의 쿼리 기록을 제공합니다. JSON, CSV, JSONL로 컬렉션을 가져오고 내보낼 수 있습니다.

→ [MongoDB GUI 클라이언트 문서](/docs/dockit/connect-to-server)

## EasySearch 지원

DocKit은 Elasticsearch 및 OpenSearch와 함께 전용 연결 유형으로 **EasySearch**를 기본 지원합니다. EasySearch는 독립적인 설정과 아이콘으로 OpenSearch에서 분리되어 있어, 하나의 인터페이스에서 모든 검색 엔진을 손쉽게 관리할 수 있습니다.

## Agentic Data Studio

DocKit의 **Agentic Data Studio**를 사용하면 자연어로 데이터베이스와 상호작용할 수 있습니다. 필요한 것을 설명하면 — 에이전트가 쿼리를 작성하고, 스키마를 검사하고, 문서를 업데이트하고, 레코드를 삭제하고, 인덱스를 생성하고 결과를 반환합니다. 모든 작업은 안전 기능이 내장된 검증된 도구를 통해 실행됩니다: 소스별 세분화된 권한, 파괴적 작업 전에 명시적 확인을 요구하는 보안 게이트, 그리고 연결 시크릿을 LLM에 노출하지 않는 자격 증명 안전 아키텍처. OpenAI, Anthropic, DeepSeek를 지원하며, Ollama와 LM Studio로 완전한 오프라인 사용도 가능합니다.

→ [Agentic Data Studio 가이드](/docs/dockit/agentic-datastudio)

## 자주 묻는 질문

**DocKit은 오프라인에서 작동하나요?**
네. 모든 연결, 쿼리, 기록은 로컬에 저장됩니다. AI 어시스턴트와 Agentic Data Studio는 프롬프트를 보낼 때만 인터넷 연결이 필요합니다.

**DocKit은 MongoDB를 지원하나요?**
네. DocKit은 연결 관리, 자동 완성 기능을 갖춘 쿼리 편집기, 인라인 CRUD가 가능한 문서 브라우저, 인덱스와 컬렉션 메타데이터용 Manage 뷰, 벌크 쓰기, 별표/북마크를 지원하는 쿼리 기록, 가져오기/내보내기를 갖춰 MongoDB를 완전히 지원합니다. EasySearch도 전용 연결 유형으로 지원합니다.

**웹 버전이 있나요?**
아니요. DocKit은 macOS, Windows, Linux용 데스크톱 애플리케이션입니다. 이는 의도된 설계입니다 — 로컬 우선 저장, 클라우드 의존 없음, 로그인 불필요.

**Elasticsearch와 OpenSearch 호환성은 어떤가요?**
DocKit은 연결된 엔진을 자동으로 감지하고 그에 맞게 API 호출을 조정합니다. 동일한 연결 폼을 두 엔진 모두에 사용할 수 있습니다.

**DocKit은 오픈 소스인가요?**
네 — Apache 2.0 라이선스입니다. 전체 소스는 [github.com/geek-fun/dockit](https://github.com/geek-fun/dockit)에 있습니다.

**유료 플랜이 있나요?**
네. Community 에디션은 계속 무료·오픈 소스로 제공되며, 유료 Ultimate 구독($9.9/월 또는 $99/년, 7일 무료 체험)으로 AI 에이전트, MCP, 클러스터 관리 등의 고급 기능을 사용할 수 있습니다.

**SQL 데이터베이스도 지원하나요?**
DocKit은 NoSQL 데이터베이스 전용으로 만들어졌습니다. PostgreSQL, MySQL, SQL Server, SQLite 지원이 필요하다면 같은 팀이 만든 오픈 소스 SQL 데스크톱 클라이언트인 [**SqlKit**](/products/sqlkit/)을 확인해 보세요.
