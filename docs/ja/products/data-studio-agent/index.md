---
title: "Data Studio Agent | データベース向け MCP サーバー"
description: "Data Studio Agent は Claude Code や Cursor などからデータベースを検索できるオープンソースの MCP サーバーです。エージェントはスキーマを調べ、クエリを実行し、何をしたかを説明できます。"
layout: product
showBody: true
titleTemplate: false
hero:
  name: Data Studio Agent
  headline: "データベース向け MCP サーバー"
  tagline: "Data Studio Agent は Claude Code や Cursor などからデータベースを検索できるオープンソースの MCP サーバーです。エージェントはスキーマを調べ、クエリを実行し、何をしたかを説明できます。"
  actions:
    - text: "インストール方法を見る"
      link: /ja/download#developer-tools
      theme: brand
install:
  title: "インストール"
  note: "DocKit または SqlKit（必要なら両方）をインストールして起動し、データベースに接続します。有効な GEEKFUN Data Studio Ultimate の契約が必要です。サーバーは実行中のアプリを自動で検出します。"
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

SQL データベースには SqlKit で、Elasticsearch、OpenSearch、MongoDB、DynamoDB などの NoSQL データソースには DocKit で接続します。サーバーはローカルで動作し、デフォルトは読み取り専用です。

[セットアップガイド（英語）](/docs/data-studio-agent/quick-start)
