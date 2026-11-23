---
title: "macOS, Windows, Linux용 MySQL GUI 클라이언트 | SqlKit"
description: "SqlKit의 내장 드라이버로 MySQL에 연결하고 활성 데이터베이스와 서버 버전을 확인합니다."
---

# macOS, Windows, Linux용 MySQL GUI 클라이언트

**연결 → 새 연결 추가**에서 **MySQL**을 선택합니다. 호스트, 포트(보통 `3306`), 사용자 이름과 비밀번호를 입력합니다. 접속 시 열 데이터베이스도 지정할 수 있습니다. 서버가 TLS를 요구하면 **고급**에서 설정합니다.

테스트 후 연결을 저장하고 **쿼리**에서 다음 SQL을 실행합니다.

```sql
SELECT DATABASE() AS active_database, VERSION() AS server_version;
```

`active_database`가 `NULL`이면 사이드바에서 데이터베이스를 선택합니다. 액세스 거부 오류가 나면 MySQL이 확인하는 접속 호스트와 계정 권한을 관리자에게 문의합니다. MariaDB는 [연결 양식](/ko/docs/sqlkit/connect-to-database)에서 **MariaDB**를 선택합니다.
