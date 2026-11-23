---
title: "SqlKit에서 첫 SQL 쿼리 실행하기"
description: "SQL 편집기에서 읽기 전용 쿼리를 실행하고 결과를 확인하거나 CSV와 JSON으로 내보냅니다."
---

# SqlKit에서 첫 SQL 쿼리 실행하기

[데이터베이스에 연결](/ko/docs/sqlkit/connect-to-database)한 다음 **쿼리**를 열고 **새 쿼리**를 클릭합니다. 편집기 도구 모음에 표시된 연결과 데이터베이스를 확인하고 다음을 입력합니다.

```sql
SELECT 1 AS connection_check;
```

Oracle에서는 `SELECT 1 AS connection_check FROM dual;`을 사용합니다. **실행**을 클릭한 뒤 결과 패널에 `1`이 표시되는지 확인합니다.

특정 SQL만 실행하려면 해당 텍스트를 선택하고 macOS에서 `⌘ + Enter`, Windows 또는 Linux에서 `Ctrl + Enter`를 누릅니다. 선택 영역이 없으면 커서가 위치한 문을 실행합니다. 도구 모음의 **실행**은 편집기 전체 내용을 실행합니다.

객체 트리에서 테이블을 두 번 클릭하면 행을 볼 수 있습니다. 결과 패널의 내보내기 기능은 반환된 행을 CSV 또는 JSON으로 저장합니다. SQL 파일 저장에는 `⌘ + S` 또는 `Ctrl + S`를 사용합니다. [단축키 더 보기](/ko/docs/sqlkit/keyboard-shortcuts)
