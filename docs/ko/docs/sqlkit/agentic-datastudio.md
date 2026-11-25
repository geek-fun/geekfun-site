---
title: SqlKit에서 Agentic Data Studio 사용하기
description: SqlKit에 모델을 추가하고 Data Studio에 데이터베이스를 연결해 스키마를 확인하거나 SQL 초안을 작성합니다.
---

# SqlKit에서 Agentic Data Studio 사용하기

Agentic Data Studio는 SqlKit에 내장된 AI 작업 공간입니다. 저장된 연결을 대화에 추가할 수 있습니다. 현재 쿼리에 관해 질문하려면 쿼리 화면에서 AI 도우미를 엽니다. 두 기능 모두 Ultimate가 필요합니다.

[MCP 설정](/ko/docs/sqlkit/mcp-bridge)

## 모델 공급자 설정 {#configure-a-provider}

**설정 → LLM → 공급자 추가**를 엽니다. 클라우드 공급자 프리셋과 API 키를 사용하거나 Ollama, LM Studio 같은 로컬 엔드포인트를 지정합니다. 로컬 모델은 서버를 실행한 후 테스트합니다.

공급자를 저장한 뒤 **테스트**, **모델 동기화**를 실행합니다. 모델 목록을 받을 수 없으면 공급자 설정에 모델 ID를 직접 입력합니다.

## 데이터 소스를 추가하고 첫 대화 시작 {#first-conversation}

연결을 저장하고 테스트한 후 **Data Studio**에서 **새 세션**을 엽니다. 데이터 소스에 저장된 연결을 추가하고 모델을 선택합니다. 처음에는 개발용 데이터베이스와 **묻기** 모드를 사용하고 연결에 읽기 권한이 있는지 확인하세요.

예를 들어 “주문 테이블과 날짜 열을 찾고 월별 주문 수를 집계하는 SQL을 작성해 줘. 실행은 하지 마.”라고 요청합니다. 생성된 SQL은 편집기에서 검토한 뒤 실행하세요.

[데이터베이스에 연결](/ko/docs/sqlkit/connect-to-database) · [AI 권한](/ko/docs/sqlkit/ai-permissions)

<DocsFigure src="/sqlkit-data-studio-ui.png" alt="SQL 초안을 보여 주는 SqlKit Data Studio" caption="Data Studio는 연결한 데이터베이스의 스키마를 바탕으로 SQL을 작성할 수 있습니다." :width="1440" :height="935" />

## 쿼리 옆에서 AI 도우미 사용 {#assistant}

**쿼리** 작업 공간 상단에서 **AI 어시스턴트**를 열고 현재 SQL이나 오류에 대해 질문합니다. 클라우드 모델에는 프롬프트와 관련 스키마 또는 쿼리 결과가 전달될 수 있습니다.

## 설정 문제 확인 {#troubleshoot}

모델이 보이지 않으면 공급자가 활성화되어 있고 모델이 등록되어 있는지 확인하세요. 소스가 표시되지 않으면 연결을 저장하고 테스트하세요. 작업이 거부되면 연결과 대화의 AI 권한을 확인하세요.
