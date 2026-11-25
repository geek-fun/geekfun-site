---
title: "Data Studio Agent | Servidor MCP para bancos de dados"
description: "Data Studio Agent é um servidor MCP de código aberto para consultar bancos de dados com Claude Code, Cursor e outros agentes de programação. Os agentes podem inspecionar o esquema, executar consultas e explicar o que fizeram."
layout: product
showBody: true
titleTemplate: false
hero:
  name: Data Studio Agent
  headline: "Servidor MCP para bancos de dados"
  tagline: "Data Studio Agent é um servidor MCP de código aberto para consultar bancos de dados com Claude Code, Cursor e outros agentes de programação. Os agentes podem inspecionar o esquema, executar consultas e explicar o que fizeram."
  actions:
    - text: "Ver opções de instalação"
      link: /pt-BR/download#developer-tools
      theme: brand
install:
  title: "Instalação"
  note: "Instale e inicie o DocKit e/ou o SqlKit, configure uma conexão e ative a assinatura GEEKFUN Data Studio Ultimate. O servidor detecta automaticamente os aplicativos em execução."
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

Use o SqlKit para conectar bancos SQL e o DocKit para conectar fontes NoSQL, como Elasticsearch, OpenSearch, MongoDB e DynamoDB. O servidor funciona localmente e oferece acesso de leitura por padrão.

[Guia de configuração em inglês](/docs/data-studio-agent/quick-start)
