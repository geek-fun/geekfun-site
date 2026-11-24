---
title: "macOS, Windows, Linux용 Oracle Database GUI 클라이언트 | SqlKit"
description: "서비스 이름, SID, TNS 별칭 또는 클라우드 월렛을 사용해 JDBC로 Oracle에 연결합니다."
---

# macOS, Windows, Linux용 Oracle Database GUI 클라이언트

**연결 → 새 연결 추가**에서 **Oracle**을 선택하고 관리자가 제공한 정보에 따라 연결 방식을 정합니다.

- **기본 연결.** 호스트, 리스너 포트(대개 `1521`), 서비스 이름 또는 SID를 입력합니다.
- **TNS.** `tnsnames.ora`가 있는 폴더와 TNS 별칭을 지정합니다.
- **클라우드 월렛.** 압축을 푼 월렛 폴더와 서비스 별칭을 선택합니다. 필요한 경우 월렛 비밀번호도 입력합니다.

Oracle 사용자 이름과 비밀번호를 입력하고 연결을 테스트합니다. Java나 JDBC 구성 요소를 내려받지 못하면 **설정 → JRE 및 드라이버**를 확인합니다.

**쿼리**에서 서비스와 스키마를 확인합니다.

```sql
SELECT SYS_CONTEXT('USERENV', 'SERVICE_NAME') AS service_name,
       SYS_CONTEXT('USERENV', 'CURRENT_SCHEMA') AS current_schema
FROM dual;
```

리스너가 서비스를 찾지 못하면 서비스 이름과 SID 중 올바른 식별 방식을 선택했는지 확인합니다. TNS 목록이 비었다면 `tnsnames.ora`가 있는 폴더를 다시 지정합니다. [SQL 편집기 가이드](/ko/docs/sqlkit/query-editor)
