---
title: "Data Studio Agent | 데이터베이스용 MCP 서버"
description: "Data Studio Agent는 Claude Code, Cursor 등의 코딩 에이전트에서 데이터베이스를 조회할 수 있게 해 주는 오픈 소스 MCP 서버입니다. 에이전트가 스키마를 확인하고 쿼리를 실행한 뒤 수행한 작업을 설명할 수 있습니다."
layout: product
showBody: true
titleTemplate: false
head:
  - - script
    - type: application/ld+json
    - |
      {"@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Data Studio Agent", "alternateName": ["data-studio-mcp", "Data Studio MCP Server"], "description": "Data Studio Agent는 Claude Code, Cursor 등의 코딩 에이전트에서 데이터베이스를 조회할 수 있게 해 주는 오픈 소스 MCP 서버입니다.", "url": "https://www.geekfun.club/ko/products/data-studio-agent/", "inLanguage": "ko", "applicationCategory": "DeveloperApplication", "operatingSystem": "macOS, Windows, Linux", "offers": {"@type": "Offer", "name": "Community", "price": "0", "priceCurrency": "USD", "url": "https://www.geekfun.club/ko/pricing"}, "downloadUrl": "https://www.npmjs.com/package/@geek-fun/data-studio-mcp", "author": {"@type": "Organization", "name": "GEEKFUN", "url": "https://www.geekfun.club"}, "license": "https://github.com/geek-fun/data-studio-agent/blob/master/LICENSE", "sameAs": ["https://github.com/geek-fun/data-studio-agent", "https://www.npmjs.com/package/@geek-fun/data-studio-mcp"]}
hero:
  name: Data Studio Agent
  headline: "데이터베이스용 MCP 서버"
  tagline: "Data Studio Agent는 Claude Code, Cursor 등의 코딩 에이전트에서 데이터베이스를 조회할 수 있게 해 주는 오픈 소스 MCP 서버입니다. 에이전트가 스키마를 확인하고 쿼리를 실행한 뒤 수행한 작업을 설명할 수 있습니다."
  actions:
    - text: "설치 방법 보기"
      link: /ko/download#developer-tools
      theme: brand
install:
  title: "설치"
  note: "DocKit 또는 SqlKit을 설치하고 실행한 뒤 데이터베이스에 연결하세요. 활성 GEEKFUN Data Studio Ultimate 구독이 필요합니다. 서버는 실행 중인 앱을 자동으로 감지합니다."
  tabs:
    - label: Codex
      icon: /agent-logos/codex-logo.png
      command: "codex mcp add data-studio -- npx -y @geek-fun/data-studio-mcp"
    - label: Claude Code
      icon: /agent-logos/claude-code-logo.png
      command: "claude mcp add --transport stdio data-studio -- npx -y @geek-fun/data-studio-mcp"
    - label: Cursor
      icon: /agent-logos/cursor-logo.png
      command: "// .cursor/mcp.json (project) or ~/.cursor/mcp.json (global)\n{\n  \"mcpServers\": {\n    \"data-studio\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@geek-fun/data-studio-mcp\"]\n    }\n  }\n}"
    - label: Windsurf
      icon: /agent-logos/windsurf-logo.png
      command: "// ~/.codeium/windsurf/mcp_config.json\n{\n  \"mcpServers\": {\n    \"data-studio\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@geek-fun/data-studio-mcp\"]\n    }\n  }\n}"
    - label: OpenCode
      icon: /agent-logos/opencode-logo.png
      command: "// opencode.json (project) or ~/.config/opencode/opencode.json (global)\n{\n  \"$schema\": \"https://opencode.ai/config.json\",\n  \"mcp\": {\n    \"data-studio\": {\n      \"type\": \"local\",\n      \"command\": [\"npx\", \"-y\", \"@geek-fun/data-studio-mcp\"],\n      \"enabled\": true\n    }\n  }\n}"
---

SQL 데이터베이스에는 SqlKit으로 연결합니다. Elasticsearch, OpenSearch, MongoDB, DynamoDB 같은 NoSQL 데이터 소스에는 DocKit을 사용합니다. 서버는 로컬에서 실행되며 기본 설정은 읽기 전용입니다.

[설정 가이드(영어)](/docs/data-studio-agent/quick-start)
