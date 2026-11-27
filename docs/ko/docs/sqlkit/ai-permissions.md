---
title: SqlKit AI 권한 설정
description: Data Studio와 MCP의 기본 및 연결별 권한을 설정하고 묻기와 자동 모드를 확인합니다.
---

# SqlKit AI 권한 설정

SqlKit은 앱의 AI 도우미와 외부 MCP 클라이언트의 요청에 연결별 AI 권한을 적용합니다. 권한을 변경하려면 Ultimate가 필요합니다.

## 기본 권한 및 연결별 권한 {#connection-permissions}

**설정 → MCP 브리지 → 기본 AI 권한**을 엽니다. 스키마와 데이터 조회만 허용하려면 **읽기**를 선택하고 저장합니다.

저장된 연결을 편집하고 **고급 → AI 권한**을 엽니다. 기본값을 따르거나 **사용자 지정**에서 작업별 권한을 정합니다. Data Studio 대화는 연결이 허용한 범위에서 추가로 접근을 제한할 수 있습니다.

## 묻기, 자동 및 클라이언트 승인 {#approvals}

**묻기**에서는 허용된 쓰기 등의 작업을 수행하기 전에 확인합니다. **자동**에서는 허용된 일부 작업이 바로 실행됩니다. 파괴적 작업은 일치하는 저장된 확인 규칙이 없으면 두 모드에서 모두 확인합니다. MCP 클라이언트가 승인 화면을 관리하며 SqlKit과 데이터베이스의 권한은 그대로 적용됩니다.

## 차단된 작업 확인 {#blocked-actions}

Data Studio 메시지에서 **권한 검토**를 선택해 대상 연결과 작업을 확인합니다. 필요한 권한을 저장한 후 **요청 재시도**를 선택합니다. AI 작업에서 제외할 연결은 **접근 없음**으로 설정합니다.

[Agentic Data Studio](/ko/docs/sqlkit/agentic-datastudio) · [MCP 설정](/ko/docs/sqlkit/mcp-bridge)
