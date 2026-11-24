---
title: "SqlKit에서 SQL 데이터베이스에 연결하기"
description: "호스트, 포트, 로그인 정보와 TLS를 설정하고 연결을 테스트합니다."
---

# SqlKit에서 SQL 데이터베이스에 연결하기

1. **연결**에서 **새 연결 추가**를 클릭합니다. 연결 이름과 데이터베이스 유형을 정합니다.
2. **기본**에 서버 정보를 입력합니다. SQLite는 파일을 선택합니다. TLS는 **고급**에서 서버에 맞게 설정합니다.
3. **연결 테스트**가 성공하면 **저장**합니다. 저장한 카드에서 **연결**을 클릭하고 **쿼리**를 엽니다.

| 데이터베이스 | 일반적인 포트 또는 파일 |
| --- | --- |
| [MySQL](/ko/docs/sqlkit/mysql-gui-client) | `3306` |
| [PostgreSQL](/ko/docs/sqlkit/postgresql-gui-client) | `5432` 및 데이터베이스 이름 |
| [SQL Server](/ko/docs/sqlkit/sql-server-gui-client) | 기본 인스턴스는 대개 `1433` |
| [Oracle Database](/ko/docs/sqlkit/oracle-gui-client) | 기본 연결은 대개 `1521`과 서비스 이름 또는 SID |
| [SQLite](/ko/docs/sqlkit/sqlite-gui-client) | 로컬 데이터베이스 파일 경로 |

서버가 표와 다른 포트를 사용하면 서버에 설정된 값을 입력합니다. JDBC 연결을 테스트할 때 SqlKit은 Java와 드라이버를 확인하고 필요한 구성 요소를 다운로드합니다. 다운로드에 실패하면 **설정 → JRE 및 드라이버**를 확인합니다.

시간 초과가 발생하면 호스트와 포트에 접근할 수 있는지 확인합니다. 인증 오류라면 대상 데이터베이스 권한을 확인하고, TLS 오류라면 서버 이름과 신뢰할 CA를 점검합니다. 연결에 성공하면 [읽기 전용 쿼리](/ko/docs/sqlkit/query-editor)를 실행합니다.
