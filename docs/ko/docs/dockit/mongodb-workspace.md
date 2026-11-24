---
title: "DocKit에서 MongoDB 문서 조회하기"
description: "MongoDB 편집기에서 find 쿼리를 실행하고 중첩 객체와 배열을 확인합니다."
---

# DocKit에서 MongoDB 문서 조회하기

[데이터베이스에 연결하기](./connect-to-server)

편집기 도구 모음에서 데이터베이스를 선택합니다. `orders`를 읽을 수 있는 컬렉션 이름으로 바꿉니다.

```javascript
db.orders.find({ status: "open" }).limit(20)
```

실행 버튼을 클릭하거나 macOS에서 `⌘ + Enter`, Windows 및 Linux에서 `Ctrl + Enter`를 누릅니다.

결과 패널의 트리 또는 JSON 보기에서 중첩 객체와 배열을 확인합니다. 반환된 결과가 잘렸다면 내보내기 전에 필터나 프로젝션을 조정합니다.
