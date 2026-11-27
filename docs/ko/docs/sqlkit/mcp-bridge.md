---
title: MCP로 코딩 에이전트를 SqlKit에 연결
description: SqlKit MCP 브리지를 실행하고 Codex, Claude Code 또는 Cursor에서 Data Studio Agent를 설정합니다.
---

# MCP로 코딩 에이전트를 SqlKit에 연결

Data Studio Agent는 외부 코딩 도구가 로컬에서 실행하는 MCP 서버입니다. SQL 요청을 SqlKit MCP 브리지로 전달하여 저장된 연결을 사용합니다. 브리지에는 Ultimate가 필요합니다.

[Agentic Data Studio](/ko/docs/sqlkit/agentic-datastudio)

## SqlKit 준비 {#prepare-sqlkit}

SqlKit을 열어 Ultimate로 로그인하고 테스트한 연결을 저장합니다. **설정 → MCP 브리지**에서 브리지가 실행 중인지 확인합니다. 필요하면 재시작하고 클라이언트를 사용하는 동안 SqlKit을 실행해 둡니다.

**기본 AI 권한**을 **읽기**로 설정하고 대상 연결도 읽기를 허용하는지 확인합니다. 클라이언트를 실행하는 컴퓨터에 Node.js 18 이상과 npm을 설치하고 `npx --version`으로 확인합니다.

[데이터베이스에 연결](/ko/docs/sqlkit/connect-to-database) · [AI 권한](/ko/docs/sqlkit/ai-permissions)

## Data Studio Agent 등록 {#register}

클라이언트에 맞는 탭을 선택합니다. Cursor에서는 프로젝트의 `.cursor/mcp.json` 또는 사용자 설정인 `~/.cursor/mcp.json`에 JSON을 추가합니다. 기존 `mcpServers`가 있으면 그 안에 항목만 추가합니다.

::: code-group

<!--@include: @/.vitepress/includes/data-studio-mcp.md#codex-->

<!--@include: @/.vitepress/includes/data-studio-mcp.md#claude-->

<!--@include: @/.vitepress/includes/data-studio-mcp.md#cursor-->

:::

[Data Studio Agent 빠른 시작(영어)](/docs/data-studio-agent/quick-start)

## 연결 확인 {#verify}

Codex에서는 `codex mcp list`, Claude Code에서는 `/mcp`, Cursor에서는 MCP 설정으로 등록을 확인합니다. 에이전트에 사용 가능한 SqlKit 연결을 확인하고 개발용 연결의 테이블을 읽기 전용으로 나열해 달라고 요청하세요.

<DocsFigure src="/blog/codex-data-studio/codex-data-studio-architecture-branded.png" alt="MCP 클라이언트 요청이 Data Studio Agent와 SqlKit을 거치는 흐름" caption="로컬 MCP 서버가 SqlKit 브리지로 SQL 요청을 전달합니다." :width="3600" :height="2160" />

## 연결 문제 해결 {#troubleshoot}

`npx`가 실행되지 않을 때는 클라이언트 환경에서 Node.js와 npm을 찾을 수 있는지 확인하고, SqlKit이 검색되지 않을 때는 같은 컴퓨터에서 앱과 브리지가 실행 중인지 점검하세요. 특정 연결만 목록에 없다면 해당 연결의 AI 권한을 확인합니다.
