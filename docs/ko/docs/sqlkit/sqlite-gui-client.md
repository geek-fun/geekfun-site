---
title: "SQLite GUI 클라이언트 및 로컬 데이터베이스 브라우저 | SqlKit"
description: "SqlKit에서 SQLite 파일을 열어 테이블과 뷰를 확인하고 SQL을 실행합니다."
---

# SQLite GUI 클라이언트 및 로컬 데이터베이스 브라우저

**연결 → 새 연결 추가**에서 **SQLite**를 선택합니다. 기존 파일은 **열기...**를, 새 파일은 **새로 만들기...**를 사용합니다. 저장 후 **연결**을 누릅니다.

**쿼리**에서 객체 트리를 펼치거나 다음 SQL로 테이블과 뷰를 확인합니다.

```sql
SELECT type, name
FROM sqlite_schema
WHERE type IN ('table', 'view')
ORDER BY type, name;
```

새 파일에는 사용자 테이블이 없습니다. 기존 테이블이 보이지 않으면 연결에 지정한 파일 경로를 확인합니다. SQLCipher로 암호화된 파일은 **SQLCipher**를 선택하고 암호화 키를 입력합니다. [SQL 편집기 가이드](/ko/docs/sqlkit/query-editor)
