---
title: "DocKit에서 데이터베이스에 연결하기"
description: "DocKit에 Elasticsearch, OpenSearch, EasySearch, MongoDB, DynamoDB 연결을 추가하고 테스트합니다."
---

# DocKit에서 데이터베이스에 연결하기

**+**를 클릭하고 연결 유형을 선택합니다.

- **Elasticsearch, OpenSearch, EasySearch.** `http://` 또는 `https://`가 포함된 서버 URL과 포트(보통 `9200`)를 입력합니다. 서버 설정에 따라 기본 인증 또는 API 키 인증을 선택합니다. HTTPS에서는 인증서 검증을 유지합니다.
- **MongoDB.** 호스트와 포트를 입력하거나 연결 URI를 붙여넣습니다. SCRAM 인증을 사용한다면 사용자 인증 데이터베이스(흔히 `admin`)도 확인합니다.
- **DynamoDB.** 연결 모드를 선택합니다. 액세스 키를 쓸 때는 리전, 액세스 키 ID, 시크릿 액세스 키가 필요합니다. AWS Profile, SSO, Assume Role은 Ultimate가 필요합니다. DynamoDB Local은 `http://localhost:8000`에 임시 값을 사용해 연결할 수 있습니다.

**연결 테스트**를 클릭합니다. 성공하면 **확인**을 눌러 저장하고 사이드바에서 연결을 엽니다. 권한 오류가 나면 계정에 인덱스, 컬렉션, 테이블을 읽을 권한이 있는지 확인합니다.

[첫 검색 쿼리](/ko/docs/dockit/search-editor)를 실행하거나 [원격 연결 가이드(영어)](/docs/dockit/remote-connections)를 참조합니다.
