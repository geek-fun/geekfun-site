---
title: SqlKit で Agentic Data Studio を使う
description: モデルを設定し、SqlKit の Data Studio や AI アシスタントでデータベースの構造を調べて SQL を作成します。
---

# SqlKit で Agentic Data Studio を使う

Agentic Data Studio は SqlKit 内の AI 作業画面です。保存済みの接続を会話に追加できます。現在のクエリについて質問するときは、クエリ画面から AI アシスタントを開きます。どちらも Ultimate が必要です。

[MCP の設定](/ja/docs/sqlkit/mcp-bridge)

## モデルを設定する {#configure-a-provider}

**設定 → LLM → プロバイダーを追加**を開きます。クラウドサービスのプリセットを選んで API キーを入力するか、Ollama や LM Studio などのローカルエンドポイントを設定します。ローカルサービスの場合は、モデルを起動してからテストします。

プロバイダーを保存し、**テスト**と**モデルを同期**を実行します。モデル一覧を取得できない場合は、プロバイダーの設定でモデル ID を入力します。

## データソースを追加して会話を始める {#first-conversation}

接続を保存してテストし、**Data Studio** で**新規セッション**を作成します。データソースを追加して保存済みの接続を選び、モデルを選択します。最初は開発用データベースと**確認**モードを使い、接続の読み取り権限を確認してください。

例えば「注文テーブルと日付列を調べ、月別件数を集計する SQL を実行せずに作成して」と尋ねます。提案された SQL をエディターで確認してから実行します。

[データベースへの接続](/ja/docs/sqlkit/connect-to-database) · [AI のアクセス権限](/ja/docs/sqlkit/ai-permissions)

<DocsFigure src="/sqlkit-data-studio-ui.png" alt="生成された SQL を表示する SqlKit の Data Studio" caption="接続したスキーマを基に SQL の案を作成できます。" :width="1440" :height="935" />

## クエリの横で AI に質問する {#assistant}

**クエリ**画面の上部から **AI アシスタント**を開くと、選択中の接続について質問できます。SQL の意味やエラーの原因を確認するのに使えます。クラウドモデルには、プロンプトや関連するスキーマ、クエリ結果が送られる場合があります。

## 設定を確認する {#troubleshoot}

モデルが見つからない場合は、プロバイダーが有効でモデルが登録されているか確認します。接続が表示されない場合は、接続を保存してテストしてください。処理が拒否された場合は、接続と会話の AI 権限を確認します。
