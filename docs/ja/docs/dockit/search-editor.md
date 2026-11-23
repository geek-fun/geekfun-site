---
title: "DocKit で最初の検索クエリを実行する"
description: "Elasticsearch、OpenSearch、EasySearch のインデックスに読み取り専用リクエストを送り、応答を確認します。"
---

# DocKit で最初の検索クエリを実行する

[接続したサーバー](/ja/docs/dockit/connect-to-server)の検索エディターを開きます。`orders` を読み取り可能なインデックス名に置き換えてください。

```http
POST /orders/_search
{
  "size": 10,
  "query": { "match_all": {} }
}
```

リクエストにカーソルを置き、macOS では `⌘ + Enter`、Windows や Linux では `Ctrl + Enter` を押します。リクエスト横の実行ボタンも使えます。この例では最大 10 件の結果が返ります。

各リクエストの先頭行に HTTP メソッドとパスを書き、その下に本文を置きます。複数のリクエストを並べる場合は、実行前に接続先を確認します。再利用するリクエストは `.search` ファイルで保存できます。

[ショートカット](/ja/docs/dockit/shortcut)、[DocKit で MongoDB のドキュメントを検索する](./mongodb-workspace)、[DocKit で PartiQL を使って DynamoDB を検索する](./dynamodb-query-editor)。
