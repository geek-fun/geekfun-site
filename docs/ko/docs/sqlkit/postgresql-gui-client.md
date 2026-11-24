---
title: "macOS, Windows, Linux용 PostgreSQL GUI 클라이언트 | SqlKit"
description: "PostgreSQL에 연결해 TLS 인증서를 검증하고 현재 데이터베이스와 스키마를 확인합니다."
---

# macOS, Windows, Linux용 PostgreSQL GUI 클라이언트

**연결 → 새 연결 추가**에서 **PostgreSQL**을 선택합니다. 호스트, 포트(보통 `5432`), 데이터베이스 이름과 역할의 로그인 정보를 입력합니다. 인증서와 호스트 이름을 모두 검증해야 할 때는 **고급**에서 **전체 검증**을 선택하고 신뢰할 CA를 지정합니다.

연결을 테스트하고 저장한 뒤 **쿼리**에서 아래 SQL을 실행합니다.

```sql
SELECT current_database() AS active_database, current_schema() AS active_schema;
```

객체 트리에서 `public` 또는 필요한 스키마를 펼칩니다. 여러 스키마에 이름이 같은 테이블이 있으면 `reporting.orders`처럼 스키마 이름을 붙입니다. 테이블이 보이지 않으면 트리를 새로 고치고 역할에 해당 스키마와 테이블 권한이 있는지 확인합니다. [SQL 편집기 가이드](/ko/docs/sqlkit/query-editor)
