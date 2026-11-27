---
title: "Data Studio Agent | Servidor MCP para bases de datos"
description: "Data Studio Agent es un servidor MCP de código abierto para consultar bases de datos con Claude Code, Cursor y otros agentes de programación. Los agentes pueden inspeccionar el esquema, ejecutar consultas y explicar qué hicieron."
layout: product
showBody: true
titleTemplate: false
head:
  - - script
    - type: application/ld+json
    - |
      {"@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Data Studio Agent", "alternateName": ["data-studio-mcp", "Data Studio MCP Server"], "description": "Data Studio Agent es un servidor MCP de código abierto para consultar bases de datos con Claude Code, Cursor y otros agentes de programación.", "url": "https://www.geekfun.club/es/products/data-studio-agent/", "inLanguage": "es", "applicationCategory": "DeveloperApplication", "operatingSystem": "macOS, Windows, Linux", "offers": {"@type": "Offer", "name": "Community", "price": "0", "priceCurrency": "USD", "url": "https://www.geekfun.club/es/pricing"}, "downloadUrl": "https://www.npmjs.com/package/@geek-fun/data-studio-mcp", "author": {"@type": "Organization", "name": "GEEKFUN", "url": "https://www.geekfun.club"}, "license": "https://github.com/geek-fun/data-studio-agent/blob/master/LICENSE", "sameAs": ["https://github.com/geek-fun/data-studio-agent", "https://www.npmjs.com/package/@geek-fun/data-studio-mcp"]}
hero:
  name: Data Studio Agent
  headline: "Servidor MCP para bases de datos"
  tagline: "Data Studio Agent es un servidor MCP de código abierto para consultar bases de datos con Claude Code, Cursor y otros agentes de programación. Los agentes pueden inspeccionar el esquema, ejecutar consultas y explicar qué hicieron."
  actions:
    - text: "Ver opciones de instalación"
      link: /es/download#developer-tools
      theme: brand
install:
  title: "Instalación"
  note: "Instala y abre DocKit o SqlKit, configura una conexión y activa la suscripción a GEEKFUN Data Studio Ultimate. El servidor detecta automáticamente las aplicaciones en ejecución."
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

Conéctate a bases de datos SQL con SqlKit y a fuentes NoSQL como Elasticsearch, OpenSearch, MongoDB y DynamoDB con DocKit. El servidor se ejecuta localmente y usa acceso de solo lectura por defecto.

[Guía de configuración en inglés](/docs/data-studio-agent/quick-start)
