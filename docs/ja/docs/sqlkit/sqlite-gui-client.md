---
title: "SQLite ファイルを開ける GUI クライアント | SqlKit"
description: "SqlKit でローカルの SQLite ファイルを開き、テーブルやビューを表示します。"
---

# SQLite ファイルを開ける GUI クライアント

**接続 → 新規接続を追加**から **SQLite** を選びます。**開く...**で既存のファイルを選ぶか、**新規...**で新しいファイルの保存先を指定します。保存して**接続**します。

**クエリ**のオブジェクトツリーでテーブルを開くか、次の SQL でテーブルとビューを確認します。

```sql
SELECT type, name
FROM sqlite_schema
WHERE type IN ('table', 'view')
ORDER BY type, name;
```

テーブルがない場合は、接続先のファイルパスを確認します。新しく作成したファイルには、まだユーザーテーブルがありません。暗号化されたデータベースでは **SQLCipher** を選び、暗号化キーを入力します。[SQL エディター](/ja/docs/sqlkit/query-editor)
