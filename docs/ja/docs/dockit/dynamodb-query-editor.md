---
title: "DocKit で PartiQL を使って DynamoDB を検索する"
description: "クエリビルダーや PartiQL でパーティションキーを指定し、DynamoDB の項目を取得します。"
---

# DocKit で PartiQL を使って DynamoDB を検索する

[データベースへ接続](./connect-to-server)

ビジュアルエディターでテーブルまたはインデックスを選び、パーティションキーの値を指定します。ソートキーがあれば条件を追加できます。パーティションキーを指定しない場合はスキャンの警告が表示されます。

クエリをテキストで残すには PartiQL エディターを開きます。`Orders`、`customerId`、`example-customer` をテーブル名、パーティションキー名、検索したい値に置き換えます。

```sql
SELECT * FROM "Orders" WHERE "customerId" = 'example-customer';
```

実行ボタンを押すか、macOS では `⌘ + Enter`、Windows と Linux では `Ctrl + Enter` を押します。

結果パネルから次のページへ移動します。属性フィルターを使った場合は、現在のページに結果がなくても、後続のページに一致する項目があることがあります。
