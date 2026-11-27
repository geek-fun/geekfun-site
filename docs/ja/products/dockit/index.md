---
layout: product
title: DocKit | MongoDB、Elasticsearch、OpenSearch、DynamoDB 向け Agentic NoSQL デスクトップ GUI
description: DocKit は MongoDB、Elasticsearch、OpenSearch、DynamoDB、EasySearch に対応したオープンソースの Agentic NoSQL デスクトップ GUI です。ローカル環境でプライバシーを守りながら、データ AI エージェントが自然言語でクエリを作成し、スキーマを調査し、データを管理します。Community エディションは無料かつオープンソースで、AI エージェントは有料の Ultimate サブスクリプションに含まれます。
ogImage: https://www.geekfun.club/og/dockit-en.png
head:
  - - meta
    - name: keywords
      content: mongodb gui クライアント, mongodb デスクトップクライアント, elasticsearch gui クライアント, opensearch gui クライアント, dynamodb gui クライアント, nosql gui クライアント, nosql デスクトップ gui, AI データベースクライアント, AI ネイティブ NoSQL GUI, DynamoDB AI アシスタント, Elasticsearch AI, OpenSearch AI, 自然言語クエリ, DocKit, NoSQL GUI クライアント, DynamoDB GUI, Elasticsearch GUI, OpenSearch GUI, MongoDB GUI, データベースクライアント, Dynobase 代替, Kibana 代替, オープンソースデータベースツール, PartiQL エディター, デスクトップデータベースクライアント, Mac データベースクライアント, Windows データベースクライアント, Linux データベースクライアント, Agentic Data Studio, EasySearch
  - - link
    - rel: canonical
      href: https://www.geekfun.club/ja/products/dockit/
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/products/dockit/
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/products/dockit/
  - - link
    - rel: alternate
      hreflang: ja
      href: https://www.geekfun.club/ja/products/dockit/
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/products/dockit/
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "DocKit",
        "alternateName": ["MongoDB GUI クライアント", "Elasticsearch GUI クライアント", "OpenSearch GUI クライアント", "DynamoDB GUI クライアント", "EasySearch GUI クライアント", "NoSQL GUI クライアント", "NoSQL デスクトップ GUI", "Agentic Data Studio"],
        "description": "MongoDB、Elasticsearch、OpenSearch、DynamoDB、EasySearch 向けのオープンソース（Apache 2.0）デスクトップ GUI クライアント。内蔵の AI アシスタントや Agentic Data Studio を使って自然言語でクエリを生成・実行でき、すべてのデータをローカルで管理します。",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD"
        },
        "featureList": [
          "AI によるクエリ生成",
          "Agentic Data Studio",
          "自然言語から SQL/PartiQL/MQL への変換",
          "OpenAI、Anthropic、DeepSeek 統合",
          "MongoDB GUI クライアント",
          "Elasticsearch GUI クライアント",
          "OpenSearch GUI クライアント",
          "DynamoDB GUI クライアント",
          "EasySearch GUI クライアント",
          "PartiQL エディター",
          "MongoDB クエリエディター",
          "ビジュアルクエリビルダー",
          "クエリ履歴の保存",
          "複数データベース対応",
          "データのインポート・エクスポート",
          "インポート・エクスポートウィザード",
          "バックグラウンドタスク管理",
          "ローカルファイルブラウザー",
          "AWS SSO 認証",
          "ES|QL 補完",
          "クラスター管理",
          "Monaco エディター",
          "テーブルライフサイクル管理"
        ],
        "screenshot": "https://www.geekfun.club/dockit-client-ui.png",
        "downloadUrl": "https://www.geekfun.club/download",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "license": "https://github.com/geek-fun/dockit/blob/main/LICENSE",
        "sameAs": [
          "https://github.com/geek-fun/dockit",
          "https://www.geekfun.club/products/dockit/"
        ]
      }

hero:
  name: DocKit
  headline: "NoSQL データベース GUI クライアント"
  animatedText: "Agentic"
  tagline: "無料でオープンソースの Community 版で MongoDB、Elasticsearch、OpenSearch、DynamoDB、EasySearch に接続できます。Ultimate 版は、自然言語でデータを扱うための Agentic Data Studio と MCP を提供します。"
  logo: /dockit.png
  screenshot: /dockit-client-ui.png
  actions:
    - text: 無料トライアルを開始
      link: https://console.geekfun.club/subscribe?intent=trial
      theme: brand
      external: true
    - text: ダウンロード
      link: /ja/download#dockit
      theme: alt

databases:
  title: "NoSQL データベースをネイティブサポート"
  items:
    - { name: MongoDB, logo: /db-mongodb.svg, link: /products/dockit/mongodb-gui-client }
    - { name: DynamoDB, logo: /db-dynamodb.svg, link: /products/dockit/dynamodb-gui-client }
    - { name: Elasticsearch, logo: /db-elasticsearch.svg, link: /products/dockit/elasticsearch-gui-client }
    - { name: OpenSearch, logo: /db-opensearch.png, link: /products/dockit/opensearch-gui-client }
    - { name: EasySearch, logo: /db-easysearch.svg }

showcase:
  - title: "Agentic Data Studio"
    body: "自然言語でデータベースを操作できます。DocKit のデータ AI エージェントは、データソースごとの権限設定と破壊的な操作向けの確認ゲートを適用したうえで、クエリの作成、スキーマの調査、インデックスの作成、ドキュメントの更新を行い結果を返します。たとえば「先週の $500 超の注文を探して」と入力すると、対応するクエリを生成します。OpenAI、Anthropic、DeepSeek に加え、Ollama と LM Studio を使えばオフラインでも利用できます。"
    image: /dockit-gui-client-demo.gif
    align: left
  - title: "複数データベースのデータ管理"
    body: "MongoDB、DynamoDB、Elasticsearch、OpenSearch、EasySearch を 1 つのインターフェースで管理できます。DynamoDB では、PartiQL の実行、12 種類のフィルター演算子を使ったクエリの作成、グローバルセカンダリインデックスの管理、ポイントインタイムリカバリ（PITR）の設定ができます。"
    image: /dockit-multi-database-manage-demo.gif
    align: right
  - title: "インポートとエクスポート"
    body: "対話的な画面でデータをインポート・エクスポートできます。ソースとターゲットを選び、フィールドをマッピングして対象フィールドを指定すると、処理はリアルタイムの進行状況付きでバックグラウンド実行されます。JSON、CSV、JSONL に対応しています。"
    image: /dockit-import-export-demo.gif
    align: left
  - title: "ローカルファーストのプライバシー"
    body: "DocKit はデスクトップアプリとして動作するため、ブラウザーのタブ更新で作業が消えることがありません。認証情報、クエリ、LLM 設定はクラウドを使わず自分のマシン上に保存され、クエリ履歴もセッションをまたいで残ります。Ollama と LM Studio を使えばオフラインでも動作します。"
    image: /dockit-query-history.png
    align: right

features:
  - { title: "Agentic Data Studio", body: "自然言語でデータベースを操作できます。データ AI エージェントは、データソースごとの権限設定と破壊的な操作に対する確認ゲートの下で、クエリ作成、スキーマ調査、インデックス作成、ドキュメント更新を行います。", icon: "sparkles" }
  - { title: "Monaco ベースのエディター", body: "VS Code と同じ Monaco Editor を採用し、構文ハイライト、自動補完、フォーマット、使い慣れたキーボードショートカットを利用できます。", icon: "edit" }
  - { title: "ローカルファーストのプライバシー", body: "認証情報、クエリ、LLM 設定をローカルに保存し、クエリ履歴を自動で記録します。Ollama と LM Studio を組み合わせればオフラインでも利用できます。", icon: "history" }
  - { title: "複数データベース対応", body: "MongoDB、DynamoDB、Elasticsearch、OpenSearch、EasySearch を 1 つの画面で管理し、接続先をすぐ切り替えられます。", icon: "database" }
  - { title: "インポートとエクスポート", body: "JSON、CSV、JSONL 形式で大規模データセットを入出力でき、バッチ処理で数百万件のレコードを扱えます。", icon: "import" }
  - { title: "クラスター管理", body: "内蔵のビジュアルクラスターツールで、ノードの状態監視、シャード管理、インデックス確認、エイリアス制御を行えます。", icon: "cluster" }
  - { title: "バックグラウンドタスク", body: "インポート、エクスポート、長時間に及ぶ操作は、リアルタイムの進行状況とステータス追跡付きのバックグラウンドタスクとして実行されます。タスクの実行中も DocKit を使い続けられます。", icon: "layers" }
  - { title: "ファイルブラウザー", body: "ローカルのクエリファイル（.search、.partiql、.mongo）をアプリ内で直接閲覧、作成、整理できます。名前、日付、サイズでの並べ替えに対応し、エディタータブとして開けます。", icon: "search" }
  - { title: "クエリ履歴", body: "実行したクエリは自動で記録され、接続ごとに最大 500 件まで保存できます。スターやブックマークを付け、過去のクエリをコピー、再読み込み、再実行できます。", icon: "history" }

platforms:
  title: "すべてのプラットフォームで利用可能"
  items:
    - { name: macOS, logo: /platform/platform-macos.svg }
    - { name: Windows, logo: /platform/platform-windows.svg }
    - { name: Linux, logo: /platform/platform-linux.svg }

cta:
  title: "AI 連携を備えたデータベース管理"
  body: "DocKit の AI アシスタントと Agentic Data Studio を使えば、複雑なクエリ構文の作成や定型作業の負担を減らせます。"
  actions:
    - { text: "無料トライアルを開始", link: "https://console.geekfun.club/subscribe?intent=trial", theme: "brand", external: true }
    - { text: "ダウンロード", link: "/ja/download#dockit", theme: "alt" }
    - { text: "SqlKit を試す", link: "/ja/products/sqlkit/", theme: "alt" }
    - { text: "ドキュメント", link: "/ja/docs/dockit/", theme: "alt" }
---

## 複数データベースを扱うチームに DocKit を選ぶ理由

多くのチームは複数の NoSQL データベースを併用しています。検索に Elasticsearch、キーバリュー処理に DynamoDB を使う場合、通常は前者向けに Kibana や Elasticvue、後者向けに Dynobase や NoSQL Workbench の 2 ツールが必要です。DocKit はこれらを 1 つのデスクトップアプリでまとめて扱えます。

| | DocKit | Kibana | Elasticvue | Dynobase | NoSQL Workbench |
|---|---|---|---|---|---|
| **MongoDB** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Elasticsearch** | ✅ | ✅ | ✅ | ❌ | ❌ |
| **OpenSearch** | ✅ | ❌ | ✅ | ❌ | ❌ |
| **EasySearch** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **DynamoDB** | ✅ | ❌ | ❌ | ✅ | ✅ |
| **AI アシスタント** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Agentic Data Studio** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **デスクトップネイティブ** | ✅ | ❌ | 一部対応 | ✅ | ✅ |
| **オープンソース** | ✅ Apache 2.0 | 混在 | ✅ MIT | ❌ | ❌ |
| **価格** | Community：無料 · Ultimate USD 9.90/月 | 無料 | 無料 | $12〜30/月 | 無料 |

## Elasticsearch GUI クライアント

DocKit は、日常的にクエリエディターを使うエンジニア向けの Elasticsearch GUI クライアントです。Kibana の Dev Tools タブの代わりに、JSON5 構文、行内コメント、ライブマッピングに基づくフィールド補完、AI 支援のクエリ生成を備えた Monaco ベースのエディターを利用できます。ES|QL の補完も内蔵しています。

Basic Auth または API Key で、ローカル、セルフホスト、クラウドの任意の Elasticsearch クラスターに接続できます。インデックスの閲覧、マッピングとエイリアスの管理、シャードレベルの詳細メトリクス（ドキュメント数、ストア、fielddata、クエリキャッシュ、インデックス作成レート、マージ統計、セグメント）によるクラスターとシャードの健全性の監視、JSON/CSV/JSONL（bulk 形式）でのデータのインポート/エクスポートに対応しています。120 以上の Elasticsearch と OpenSearch API エンドポイントを収録した文法カタログを参照できます。クエリはローカルファイルとして保存されるため、アプリを閉じても失われることはありません。

[Elasticsearch GUI クライアントの詳細](/products/dockit/elasticsearch-gui-client)

## OpenSearch GUI クライアント

DocKit はオープンソースの OpenSearch GUI クライアントで、日常のクエリ作業で OpenSearch Dashboards の代わりになるデスクトップアプリです。2 秒以内に起動し、RAM 使用量は約 150 MB で、データをすべてローカルに保存するため Dashboards インスタンスを必要としません。

同じ Monaco エディター、AI アシスタント、クラスター管理、インポート/エクスポート機能が、AWS OpenSearch Service クラスターを含む OpenSearch 1.x、2.x、3.x で同一の動作で利用できます。

[OpenSearch GUI クライアントの詳細](/products/dockit/opensearch-gui-client)

## DynamoDB GUI クライアント

DocKit はオープンソースの DynamoDB GUI クライアントで、日々のテーブル操作において AWS コンソールを置き換えます。スキーマを認識する自動補完を備えた PartiQL エディター、12 種類のフィルター演算子を備えたビジュアルクエリビルダー、インラインでのアイテム CRUD、ページサイズを設定できるページネーション、GSI の管理、LSI の確認、TTL、ストリーム、PITR、暗号化、CloudWatch メトリクス、テーブルのトランケートといった完全なテーブルライフサイクル管理を備えています。実際の属性名をコンテキストとして注入する AI によるクエリ生成と、JSON・CSV のインポート/エクスポートにも対応しています。

ローカル開発用の DynamoDB Local、AWS プロファイル、SSO、アクセスキー、あらゆるリージョンでの IAM ロール認証に対応しています。

[DynamoDB GUI クライアントの詳細](/products/dockit/dynamodb-gui-client)

## MongoDB GUI クライアント

DocKit は、自動補完と結果のフォーマットを備えたクエリエディターを搭載するオープンソースの MongoDB GUI クライアントです。ページネーションとインライン CRUD でドキュメントを閲覧でき、Manage ビューではコレクションのインデックス、ストレージ統計、メタデータを確認できます。

認証、TLS、レプリカセット構成での接続に対応しています。効率的なバッチ操作のためのバルク書き込みをサポートしています。クエリ履歴はスター/ブックマーク付きで、接続ごとに保存されます。コレクションは JSON、CSV、JSONL でインポート/エクスポートできます。

[MongoDB GUI クライアントのドキュメント](/ja/docs/dockit/connect-to-server)

## EasySearch サポート

DocKit は EasySearch を Elasticsearch や OpenSearch と並ぶ独立した接続タイプとしてネイティブサポートしています。OpenSearch とは別に設定とアイコンが用意されているため、複数の検索エンジンを 1 つの画面で管理できます。

## Agentic Data Studio

DocKit の Agentic Data Studio を使うと、自然言語でデータベースを操作できます。必要な内容を伝えると、エージェントがクエリの記述、スキーマ調査、ドキュメント更新、レコード削除、インデックス作成を実行して結果を返します。すべての操作は検証済みのツール経由で行われ、データソースごとの権限設定、破壊的な操作の前に明示的な確認を求めるセーフティゲート、接続シークレットを LLM に渡さない認証情報保護を組み込んでいます。OpenAI、Anthropic、DeepSeek に加え、Ollama と LM Studio を使えばオフラインでも利用できます。

[Agentic Data Studio ガイド (英語)](/docs/dockit/agentic-datastudio)

## よくある質問

**DocKit はオフラインで使えますか？**
はい。すべての接続情報、クエリ、履歴はローカルに保存されます。AI アシスタントと Agentic Data Studio は、プロンプトを送信する場合にのみインターネット接続が必要です。

**DocKit は MongoDB に対応していますか？**
はい。DocKit は MongoDB を完全にサポートしており、接続管理、自動補完付きのクエリエディター、インライン CRUD 対応のドキュメントブラウザー、インデックスとコレクションメタデータの Manage ビュー、バルク書き込み、スター/ブックマーク対応のクエリ履歴、インポート/エクスポートを利用できます。EasySearch も独立した接続タイプとしてサポートされています。

**Web 版はありますか？**
いいえ。DocKit は macOS、Windows、Linux 向けのデスクトップアプリケーションで、データをローカルに保存し、クラウドやログインを必要としない設計にしています。

**Elasticsearch と OpenSearch の互換性はどうですか？**
DocKit は接続先のエンジンを自動検出し、API 呼び出しをそれに応じて調整します。同じ接続フォームを両方に使えます。

**DocKit はオープンソースですか？**
はい、Apache 2.0 ライセンスです。完全なソースコードは [github.com/geek-fun/dockit](https://github.com/geek-fun/dockit) にあります。

**有料プランはありますか？**
はい。Community エディションは無料かつオープンソースのまま提供され、有料の Ultimate サブスクリプション（月額 USD 9.90 または年額 USD 99.00、7 日間の無料トライアル付き）で、AI エージェント、MCP、クラスター管理などの高度な機能が利用できます。

**SQL データベースにも対応していますか？**
DocKit は NoSQL データベース向けに特化して作られています。PostgreSQL、MySQL、SQL Server、SQLite のサポートが必要な場合は、同じチームが開発する姉妹製品のオープンソース SQL デスクトップクライアント [SqlKit](/products/sqlkit/) をご覧ください。
