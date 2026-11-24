---
title: "DocKit で MongoDB のドキュメントを検索する"
description: "MongoDB エディターで find を実行し、ネストした結果を確認します。"
---

# DocKit で MongoDB のドキュメントを検索する

[データベースへ接続](./connect-to-server)

エディターのツールバーでデータベースを選びます。`orders` を読み取り権限のあるコレクション名に置き換えます。

```javascript
db.orders.find({ status: "open" }).limit(20)
```

実行ボタンを押すか、macOS では `⌘ + Enter`、Windows と Linux では `Ctrl + Enter` を押します。

結果パネルのツリーまたは JSON 表示で、ネストしたオブジェクトや配列を確認できます。結果が途中で切れている場合は、エクスポート前にフィルターやプロジェクションを見直します。
