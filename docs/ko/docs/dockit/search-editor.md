---
title: "DocKit에서 첫 검색 쿼리 실행하기"
description: "Elasticsearch, OpenSearch, EasySearch에 읽기 전용 요청을 보내고 응답을 확인합니다."
---

# DocKit에서 첫 검색 쿼리 실행하기

[서버에 연결](/ko/docs/dockit/connect-to-server)하고 해당 연결의 검색 편집기를 엽니다. `orders`를 읽을 권한이 있는 인덱스 이름으로 바꿉니다.

```http
POST /orders/_search
{
  "size": 10,
  "query": { "match_all": {} }
}
```

요청 안에 커서를 두고 macOS에서는 `⌘ + Enter`, Windows와 Linux에서는 `Ctrl + Enter`를 누릅니다. 요청 옆의 실행 버튼도 사용할 수 있습니다. 이 예제는 검색 결과를 최대 10개 반환합니다.

요청마다 새 줄에 HTTP 메서드와 경로를 적고 그 아래에 본문을 둡니다. 여러 요청을 작성했다면 실행 전에 활성 연결을 확인합니다. 다시 쓸 요청은 `.search` 파일로 저장할 수 있습니다.

[편집기 단축키](/ko/docs/dockit/shortcut)도 참고할 수 있습니다. 다른 데이터베이스를 사용한다면 [MongoDB 문서 조회](./mongodb-workspace) 또는 [PartiQL로 DynamoDB 조회](./dynamodb-query-editor) 가이드를 참고합니다.
