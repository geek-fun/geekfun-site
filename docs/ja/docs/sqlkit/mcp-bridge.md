---
title: MCP でコーディングエージェントを SqlKit に接続する
description: SqlKit の MCP ブリッジを起動し、Data Studio Agent を Codex、Claude Code、Cursor に登録します。
---

# MCP でコーディングエージェントを SqlKit に接続する

Data Studio Agent は外部のコーディングツールが起動するローカル MCP サーバーです。SQL の要求は SqlKit の MCP ブリッジに渡され、保存済みの接続を使います。ブリッジには Ultimate が必要です。

[Agentic Data Studio](/ja/docs/sqlkit/agentic-datastudio)

## SqlKit を準備する {#prepare-sqlkit}

SqlKit を起動し、Ultimate でサインインして、テスト済みの接続を保存します。**設定 → MCPブリッジ**で稼働中であることを確認します。必要に応じて再起動し、接続中は SqlKit を開いたままにします。

**デフォルトの AI 権限**を**読み取り**に設定し、接続の設定でも読み取りを許可します。クライアントを実行するマシンに Node.js 18 以降と npm をインストールし、`npx --version` を確認します。

[データベースへの接続](/ja/docs/sqlkit/connect-to-database) · [AI のアクセス権限](/ja/docs/sqlkit/ai-permissions)

## Data Studio Agent を登録する {#register}

クライアントに対応する設定を選びます。Cursor ではプロジェクトの `.cursor/mcp.json`、またはユーザーの `~/.cursor/mcp.json` に追記します。既存の `mcpServers` があれば、その中に追加します。

::: code-group

<!--@include: @/.vitepress/includes/data-studio-mcp.md#codex-->

<!--@include: @/.vitepress/includes/data-studio-mcp.md#claude-->

<!--@include: @/.vitepress/includes/data-studio-mcp.md#cursor-->

:::

[Data Studio Agent のセットアップ（英語）](/docs/data-studio-agent/quick-start)

## 接続を確認する {#verify}

Codex は `codex mcp list`、Claude Code は `/mcp`、Cursor は MCP の設定画面で登録を確認します。利用できる SqlKit の接続を一覧表示し、開発用接続のテーブルを読み取りだけで列挙するよう依頼します。

<DocsFigure src="/blog/codex-data-studio/codex-data-studio-architecture-branded.png" alt="MCP クライアントから Data Studio Agent と SqlKit を経由してデータベースに接続する図" caption="Data Studio Agent はローカルで動作し、SqlKit のブリッジに SQL の要求を渡します。" :width="3600" :height="2160" />

## ブリッジの問題を調べる {#troubleshoot}

`npx` が起動しない場合は、クライアントから Node.js と npm が利用できるか確認します。SqlKit が見つからない場合は、同じマシンで SqlKit とブリッジが実行中か確認します。特定の接続が表示されない場合は、その接続の AI 権限を確認します。
