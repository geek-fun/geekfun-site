---
title: SqlKit の機能 | SQL, AI, MCP
description: SqlKit の接続、SQL 編集、ER 図、データ転送、AI アシスタント、MCP 連携の使い方と利用条件を紹介します。
---

# SqlKit の機能

SqlKit でデータベースに接続し、テーブルを調べ、SQL を実行して結果を保存できます。各機能の入口と、ドライバーやプランによる違いを紹介します。

<div class="docs-section-links">

- [インストール](/ja/docs/sqlkit/installation)
- [対応データベース](/ja/docs/sqlkit/#supported-databases)
- [料金プラン](/ja/pricing)

</div>

## データベースに接続する {#connections}

**接続 → 新規接続を追加** で接続先の種類を選び、サーバーのアドレスまたはローカルファイルを指定します。Oracle などの JDBC 接続では、接続テスト時に Java とドライバーが確認されます。Ultimate では、再利用できる SSH プロファイルや複数の踏み台を設定できます。

[接続の追加とテスト](/ja/docs/sqlkit/connect-to-database) · [SSH トンネル（英語）](/docs/sqlkit/ssh-tunnel)

<DocsFigure src="/sqlkit-client-ui.png" alt="SqlKit の接続管理画面に表示された保存済み接続" caption="接続カードから接続を開いたり、設定を編集したりできます。" :width="3424" :height="2224" />

## SQL を実行して実行計画を調べる {#query}

**クエリ** で接続先とデータベースを確認してからクエリタブを開きます。テーブル名や列名を補完し、スクリプト全体、選択範囲、またはカーソル位置の文を実行できます。対応するデータベースでは **Explain** で実行計画を確認できます。**Explain Analyze** は文を実行して実測値を取得します。

[SQL エディターと結果](/ja/docs/sqlkit/query-editor) · [キーボードショートカット](/ja/docs/sqlkit/keyboard-shortcuts)

<DocsFigure src="/sqlkit-sql-editor-ui.png" alt="SqlKit のオブジェクトツリー、SQL エディター、結果グリッド" caption="クエリを実行すると、結果がエディターの下に表示されます。" :width="3424" :height="2224" />

## スキーマとテーブルの関係を調べる {#schema}

オブジェクトツリーからテーブルを選び、**構造を表示** で列、キー、インデックスを確認します。Ultimate ではデータベースやスキーマのメニューから ER 図を開けます。図に表示される関係はデータベースが返す外部キーに基づき、テーブルをダブルクリックするとデータが開きます。

[テーブルの構造とデータ（英語）](/docs/sqlkit/table-browser)

<DocsFigure src="/sqlkit-er-diagram-ui.png" alt="SqlKit の ER 図に表示されたテーブルと外部キー" caption="ER 図でテーブル間の関係をたどれます。" :width="3424" :height="2224" />

## データを表示・編集・転送する {#data}

テーブルをダブルクリックして行を表示します。ドライバーが対応していれば絞り込みや並べ替えが可能です。行を編集する前に、その行を識別する値と書き込み権限を確認します。クエリ結果は CSV や JSON に保存でき、Ultimate の **転送** ではファイルの取り込みやテーブルの書き出しができます。

[行の表示と編集（英語）](/docs/sqlkit/table-browser) · [インポートとエクスポート（英語）](/docs/sqlkit/import-export)

<DocsFigure src="/sqlkit-data-view-table-ui.png" alt="フィルターと行操作を備えた SqlKit のテーブルグリッド" caption="行を確認しながらフィルターを適用できます。" :width="3424" :height="2224" />

## SqlKit 内で AI を使う {#ai}

Ultimate の Agentic Data Studio に、利用するモデルのサービスまたはローカルエンドポイントを設定します。接続先のスキーマを基に SQL を下書きできます。たとえば月次集計に使う日付列を尋ね、生成された SQL をエディターで確認してから実行します。

[Agentic Data Studio の設定](/ja/docs/sqlkit/agentic-datastudio)

<DocsFigure src="/sqlkit-data-studio-ui.png" alt="SqlKit の AI アシスタントが表示するスキーマ情報と生成した SQL" caption="アシスタントの下書きは SQL エディターで確認できます。" :width="1440" :height="935" />

## MCP でコーディングエージェントに接続する {#mcp}

Ultimate の **設定 → MCPブリッジ** を有効にし、コーディングツールに Data Studio Agent を登録します。スキーマの確認と読み取りクエリだけなら、まず読み取り権限を選択してください。書き込みを許可する前に接続ごとの設定を確認します。データベースアカウントの権限も適用されます。

[MCP の設定](/ja/docs/sqlkit/mcp-bridge) · [AI のアクセス権限](/ja/docs/sqlkit/ai-permissions)

## データベースとプランによる違い {#requirements}

実行計画、行編集、参照できるオブジェクトは、データベース、ドライバー、アカウント権限によって異なります。Cassandra と ScyllaDB では CQL を使用します。

Community では接続、オブジェクトの参照、SQL の実行・保存、クエリ結果の CSV・JSON 出力が利用できます。Ultimate では SSH トンネル、ER 図、転送、AI アシスタント、MCP Bridge が加わります。
