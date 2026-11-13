---
layout: product
title: DocKit — MongoDB、Elasticsearch、OpenSearch、DynamoDB 向け Agentic NoSQL デスクトップ GUI
description: DocKit は MongoDB、Elasticsearch、OpenSearch、DynamoDB、EasySearch に対応したオープンソースの Agentic NoSQL デスクトップ GUI です。データ AI エージェントが自然言語でクエリを記述し、スキーマを調査し、データを管理します — プライバシー第一、ローカル完結。Community エディションは無料かつオープンソース。AI エージェントは有料の Ultimate サブスクリプションの一部です。
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
        "description": "MongoDB、Elasticsearch、OpenSearch、DynamoDB、EasySearch 向けのオープンソースデスクトップ GUI クライアント。内蔵の AI アシスタントで自然言語からデータベースクエリを生成できます。自然言語でデータベースと対話できる Agentic Data Studio。高速、ローカルファースト、Apache 2.0。",
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
        "softwareVersion": "1.4.0",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "license": "https://github.com/geek-fun/dockit/blob/main/LICENSE",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "1096",
          "bestRating": "5",
          "worstRating": "1"
        },
        "sameAs": [
          "https://github.com/geek-fun/dockit",
          "https://www.geekfun.club/products/dockit/"
        ]
      }

hero:
  name: DocKit
  headline: "NoSQL データベース GUI クライアント"
  animatedText: "Agentic"
  tagline: "データベースを管理するオープンソースのデータ AI エージェント。MongoDB、Elasticsearch、OpenSearch、DynamoDB、EasySearch に接続し、必要なことを自然言語で伝えてください。エージェントがクエリを記述し、スキーマを調査し、ドキュメントを更新して結果を返します。プライバシー第一、ローカル完結、Apache 2.0。"
  logo: /dockit.png
  screenshot: /dockit-client-ui.png
  actions:
    - text: 無料トライアルを開始
      link: https://console.geekfun.club/subscribe?intent=trial
      theme: brand
      external: true
    - text: ダウンロード
      link: /ja/download
      theme: alt

databases:
  title: "最新の NoSQL をネイティブサポート"
  items:
    - { name: MongoDB, logo: /db-mongodb.svg, link: /products/dockit/mongodb-gui-client }
    - { name: DynamoDB, logo: /db-dynamodb.svg, link: /products/dockit/dynamodb-gui-client }
    - { name: Elasticsearch, logo: /db-elasticsearch.svg, link: /products/dockit/elasticsearch-gui-client }
    - { name: OpenSearch, logo: /db-opensearch.png, link: /products/dockit/opensearch-gui-client }
    - { name: EasySearch, logo: /db-easysearch.svg }

showcase:
  - title: "Agentic Data Studio"
    body: "自然言語でデータベースと対話できます。DocKit のデータ AI エージェントがクエリを記述し、スキーマを調査し、インデックスを作成し、ドキュメントを更新して結果を返します — データソースごとの権限設定と、破壊的な操作に対するセーフティゲートを備えています。「先週の $500 超の注文を探して」と尋ねるだけで、最適化されたクエリがすぐに返ってきます。OpenAI、Anthropic、DeepSeek に加え、Ollama と LM Studio による完全オフライン利用にも対応しています。"
    image: /dockit-gui-client-demo.gif
    align: left
  - title: "複数データベースのデータ管理"
    body: "MongoDB、DynamoDB、Elasticsearch、OpenSearch、EasySearch を 1 つのインターフェースで管理。クラスターの健全性を監視し、インデックスを管理し、メトリクスを追跡し、内蔵のインポート・エクスポート・バックアップ機能でデータベース間のデータ移動を行えます。"
    image: /dockit-multi-database-manage-demo.gif
    align: right
  - title: "インポートとバックアップ"
    body: "対話的なインターフェースでデータのエクスポートと復元ができます。ソースとターゲットを選び、フィールドを視覚的にマッピングし、含めるフィールドを選択すれば、あとは DocKit にお任せ — すべてバックグラウンドタスクとしてリアルタイムの進行状況付きで実行されます。JSON、CSV、JSONL に対応しています。"
    image: /dockit-import-export-demo.gif
    align: left
  - title: "ローカルファーストのプライバシー"
    body: "タブを更新するたびに作業が消えてしまうブラウザベースのツールにうんざりしていませんか？DocKit はデスクトップアプリとして動作します — 認証情報、クエリ、LLM 設定はすべてマシン上に保持され、クラウドに依存しません。クエリ履歴はセッションをまたいで保存されます。Ollama と LM Studio で完全オフライン対応です。"
    image: /dockit-query-history.png
    align: right

features:
  - { title: "Agentic Data Studio", body: "自然言語でデータベースと対話。データ AI エージェントがクエリを記述し、スキーマを調査し、インデックスを作成し、ドキュメントを更新します — データソースごとの権限設定と、破壊的な操作に対するセーフティゲートを備えています。", icon: "sparkles" }
  - { title: "デスクトップグレードのエディター", body: "Monaco Editor が VS Code の編集体験をクエリにもたらします — 構文ハイライト、自動補完、フォーマット、使い慣れたキーボードショートカット。", icon: "edit" }
  - { title: "ローカルファーストのプライバシー", body: "認証情報、クエリ、LLM 設定をローカルに保存。クエリ履歴を自動的に記録。Ollama と LM Studio で完全オフライン対応。", icon: "history" }
  - { title: "複数データベース対応", body: "MongoDB、DynamoDB、Elasticsearch、OpenSearch、EasySearch を 1 つの統合インターフェースで管理。データベース間を瞬時に切り替えられます。", icon: "database" }
  - { title: "インポートとエクスポート", body: "JSON、CSV、JSONL 対応で大規模なデータセットを入出力。バッチ操作で数百万件のレコードも確実に処理します。", icon: "import" }
  - { title: "クラスター管理", body: "ノードの健全性を監視し、シャードを管理し、インデックスを追跡し、エイリアスを制御 — すべて内蔵のビジュアルクラスターツールで行えます。", icon: "cluster" }
  - { title: "バックグラウンドタスク", body: "インポート、エクスポート、長時間に及ぶ操作は、リアルタイムの進行状況とステータス追跡付きのバックグラウンドタスクとして実行されます。タスクの実行中も DocKit を使い続けられます。", icon: "layers" }
  - { title: "ファイルブラウザー", body: "ローカルのクエリファイル（.search、.partiql、.mongo）をアプリ内で直接閲覧、作成、整理できます。名前、日付、サイズでの並べ替えに対応し、エディタータブとして開けます。", icon: "search" }
  - { title: "クエリ履歴", body: "すべてのクエリを自動記録。接続ごとに 500 件を保存し、スター/ブックマークに対応。過去のクエリをコピー、再読み込み、再実行できます。", icon: "history" }

platforms:
  title: "すべてのプラットフォームで利用可能"
  items:
    - { name: macOS, logo: /platform/platform-macos.svg }
    - { name: Windows, logo: /platform/platform-windows.svg }
    - { name: Linux, logo: /platform/platform-linux.svg }

cta:
  title: "データベース管理、AI ネイティブ"
  body: "複雑なクエリ構文との格闘はもう終わりにしましょう。定型作業は DocKit の AI アシスタントと Agentic Data Studio に任せて、データそのものに集中できます。"
  actions:
    - { text: "無料トライアルを開始", link: "https://console.geekfun.club/subscribe?intent=trial", theme: "brand", external: true }
    - { text: "ダウンロード", link: "/ja/download", theme: "alt" }
    - { text: "SqlKit を試す →", link: "/products/sqlkit/", theme: "alt" }
---

## 複数データベースを扱うチームに DocKit を選ぶ理由

多くのチームは、1 つの NoSQL データベースだけを使っていません。検索に Elasticsearch、キーバリュー処理に DynamoDB を使うチームは、通常 2 つの別々のツールが必要になります — 一方には Kibana/Elasticvue、もう一方には Dynobase/NoSQL Workbench です。DocKit はこの 3 つすべてを 1 つのデスクトップアプリでカバーします。

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
| **価格** | Community：無料 · Ultimate $9.9/月 | 無料 | 無料 | $12〜30/月 | 無料 |

## Elasticsearch GUI クライアント

DocKit は、クエリエディターで本格的に作業するエンジニアのために作られた、フル機能を備えた **Elasticsearch GUI クライアント**です。Kibana の Dev Tools タブを、JSON5 構文、行内コメント、ライブマッピングに基づくフィールド補完、AI 支援のクエリ生成に対応した Monaco ベースのエディターで置き換えます。次世代の Elasticsearch クエリ言語向けに、ES|QL 補完が内蔵されています。

Basic Auth または API Key で、ローカル、セルフホスト、クラウドの任意の Elasticsearch クラスターに接続できます。インデックスの閲覧、マッピングとエイリアスの管理、シャードレベルの詳細メトリクス（ドキュメント数、ストア、fielddata、クエリキャッシュ、インデックス作成レート、マージ統計、セグメント）によるクラスターとシャードの健全性の監視、JSON/CSV/JSONL（bulk 形式）でのデータのインポート/エクスポートに対応しています。120 以上の Elasticsearch と OpenSearch API エンドポイントを収録した文法カタログを参照できます。クエリはローカルファイルとして保存されるため、アプリを閉じても失われることはありません。

→ [Elasticsearch GUI クライアントの詳細](/products/dockit/elasticsearch-gui-client)

## OpenSearch GUI クライアント

DocKit はオープンソースの **OpenSearch GUI クライアント**であり、日常のクエリ作業における OpenSearch Dashboards のデスクトップ代替です。2 秒以内に起動し、RAM 使用量は約 150 MB、すべてのデータをローカルに保存します — Dashboards インスタンスは不要です。

同じ Monaco エディター、AI アシスタント、クラスター管理、インポート/エクスポート機能が、AWS OpenSearch Service クラスターを含む OpenSearch 1.x、2.x、3.x で同一の動作で利用できます。

→ [OpenSearch GUI クライアントの詳細](/products/dockit/opensearch-gui-client)

## DynamoDB GUI クライアント

DocKit はオープンソースの **DynamoDB GUI クライアント**で、日々のテーブル操作において AWS コンソールを置き換えます。スキーマを認識する自動補完を備えた PartiQL エディター、13 以上のフィルター演算子を備えたビジュアルクエリビルダー、インラインでのアイテム CRUD、ページサイズを設定できるページネーション、GSI/LSI の作成、TTL、ストリーム、PITR、暗号化、CloudWatch メトリクス、テーブルのトランケートといった完全なテーブルライフサイクル管理を備えています。実際の属性名をコンテキストとして注入する AI によるクエリ生成と、JSON・CSV のインポート/エクスポートにも対応しています。

ローカル開発用の DynamoDB Local、AWS プロファイル、SSO、アクセスキー、あらゆるリージョンでの IAM ロール認証に対応しています。

→ [DynamoDB GUI クライアントの詳細](/products/dockit/dynamodb-gui-client)

## MongoDB GUI クライアント

DocKit は、自動補完と結果のフォーマットを備えたフル機能のクエリエディターを搭載したオープンソースの **MongoDB GUI クライアント**です。ページネーションとインライン CRUD 操作でドキュメントを閲覧できます。Manage ビューでは、コレクションレベルのインフラ情報 — インデックス、ストレージ統計、メタデータ — をひと目で確認できます。

認証、TLS、レプリカセット構成での接続に対応しています。効率的なバッチ操作のためのバルク書き込みをサポートしています。クエリ履歴はスター/ブックマーク付きで、接続ごとに保存されます。コレクションは JSON、CSV、JSONL でインポート/エクスポートできます。

→ [MongoDB GUI クライアントのドキュメント](/docs/dockit/connect-to-server)

## EasySearch サポート

DocKit は **EasySearch** を、Elasticsearch や OpenSearch と並ぶ独立した接続タイプとしてネイティブサポートしています。EasySearch は OpenSearch から分離され、独立した設定とアイコンを持つため、すべての検索エンジンを 1 つのインターフェースから簡単に管理できます。

## Agentic Data Studio

DocKit の **Agentic Data Studio** により、自然言語でデータベースと対話できます。必要なことを伝えれば — エージェントがクエリを記述し、スキーマを調査し、ドキュメントを更新し、レコードを削除し、インデックスを作成して結果を返します。すべての操作は検証済みのツールを通じて実行され、きめ細かなデータソースごとの権限、破壊的な操作の前に明示的な確認を求めるセーフティゲート、接続シークレットを LLM に決して公開しない安全な認証情報アーキテクチャという保護機能が組み込まれています。OpenAI、Anthropic、DeepSeek に加え、Ollama と LM Studio による完全オフライン利用にも対応しています。

→ [Agentic Data Studio ガイド](/docs/dockit/agentic-datastudio)

## よくある質問

**DocKit はオフラインで使えますか？**
はい。すべての接続情報、クエリ、履歴はローカルに保存されます。AI アシスタントと Agentic Data Studio は、プロンプトを送信する場合にのみインターネット接続が必要です。

**DocKit は MongoDB に対応していますか？**
はい。DocKit は MongoDB を完全にサポートしており、接続管理、自動補完付きのクエリエディター、インライン CRUD 対応のドキュメントブラウザー、インデックスとコレクションメタデータの Manage ビュー、バルク書き込み、スター/ブックマーク対応のクエリ履歴、インポート/エクスポートを利用できます。EasySearch も独立した接続タイプとしてサポートされています。

**Web 版はありますか？**
いいえ。DocKit は macOS、Windows、Linux 向けのデスクトップアプリケーションです。これは意図的な設計です — ローカルファーストの保存、クラウド非依存、ログイン不要。

**Elasticsearch と OpenSearch の互換性はどうですか？**
DocKit は接続先のエンジンを自動検出し、API 呼び出しをそれに応じて調整します。同じ接続フォームを両方に使えます。

**DocKit はオープンソースですか？**
はい — Apache 2.0 ライセンスです。完全なソースコードは [github.com/geek-fun/dockit](https://github.com/geek-fun/dockit) にあります。

**有料プランはありますか？**
はい。Community エディションは無料かつオープンソースのまま提供され、有料の Ultimate サブスクリプション（月額 $9.9 または年額 $99、7 日間の無料トライアル付き）で、AI エージェント、MCP、クラスター管理などの高度な機能が利用できます。

**SQL データベースにも対応していますか？**
DocKit は NoSQL データベース向けに特化して作られています。PostgreSQL、MySQL、SQL Server、SQLite のサポートが必要な場合は、同じチームが開発する姉妹製品のオープンソース SQL デスクトップクライアント [**SqlKit**](/products/sqlkit/) をご覧ください。
