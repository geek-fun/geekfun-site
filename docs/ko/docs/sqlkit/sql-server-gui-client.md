---
title: "macOS, Windows, Linux용 Microsoft SQL Server GUI 클라이언트 | SqlKit"
description: "SqlKit에서 인스턴스의 TCP 포트와 SQL Server 로그인으로 연결한 뒤 T-SQL을 실행합니다."
---

# macOS, Windows, Linux용 Microsoft SQL Server GUI 클라이언트

**연결 → 새 연결 추가**에서 **SQL Server**를 선택합니다. 호스트, TCP 포트, 데이터베이스 이름, SQL Server 로그인과 비밀번호를 입력합니다. 기본 인스턴스는 흔히 `1433`을 사용합니다. 명명된 인스턴스에 연결한다면 실제 TCP 포트를 관리자에게 확인합니다.

**고급**에서 암호화 옵션을 설정하고 연결을 테스트해 저장합니다. **쿼리**에서 데이터베이스와 로그인을 확인합니다.

```sql
SELECT DB_NAME() AS active_database, SUSER_SNAME() AS login_name;
```

`dbo` 또는 애플리케이션 스키마를 펼치면 테이블이 표시됩니다. 연결이 시간 초과되면 인스턴스에서 TCP/IP가 켜져 있고 해당 포트에 접근할 수 있는지 확인합니다. 인증서 오류라면 서버 이름과 CA를 점검합니다. [연결 가이드](/ko/docs/sqlkit/connect-to-database)
