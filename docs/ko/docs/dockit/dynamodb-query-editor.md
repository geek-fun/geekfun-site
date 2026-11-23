---
title: "DocKit의 PartiQL 편집기에서 DynamoDB 조회하기"
description: "시각적 편집기 또는 PartiQL에서 파티션 키로 DynamoDB 항목을 읽습니다."
---

# DocKit의 PartiQL 편집기에서 DynamoDB 조회하기

[데이터베이스에 연결하기](./connect-to-server)

시각적 편집기에서 테이블이나 인덱스를 선택하고 파티션 키 값을 입력합니다. 정렬 키가 있다면 조건을 추가할 수 있습니다. 파티션 키가 없으면 스캔이 실행된다는 안내가 표시됩니다.

쿼리를 텍스트로 저장하려면 PartiQL 편집기를 엽니다. `Orders`, `customerId`, `example-customer`를 테이블 이름, 파티션 키, 조회할 값으로 바꿉니다.

```sql
SELECT * FROM "Orders" WHERE "customerId" = 'example-customer';
```

실행 버튼을 클릭하거나 macOS에서 `⌘ + Enter`, Windows 및 Linux에서 `Ctrl + Enter`를 누릅니다.

결과 패널에서 다음 페이지로 이동합니다. 속성 필터를 적용하면 현재 페이지가 비어 있어도 이후 페이지에서 항목을 찾을 수 있습니다.
