---
title: "PostgreSQL GUI クライアント | SqlKit"
description: "SqlKit で PostgreSQL に接続し、TLS と対象スキーマを確認します。macOS、Windows、Linux に対応しています。"
---

# PostgreSQL GUI クライアント

**接続 → 新規接続を追加**から **PostgreSQL** を選びます。ホスト、ポート（通常 `5432`）、データベース名、ロールの認証情報を入力します。CA とホスト名の両方を検証する場合は、**詳細**で **Verify Full** と適切な CA を指定します。

保存した接続を開き、**クエリ**で次を実行します。

```sql
SELECT current_database() AS active_database, current_schema() AS active_schema;
```

`public` などのスキーマをオブジェクトツリーで展開します。別のスキーマに同名のテーブルがある場合は `reporting.orders` のようにスキーマ名を付けます。テーブルが見えない場合は、ツリーを更新し、ロールが対象スキーマとテーブルを参照できるか確認してください。[SQL エディター](/ja/docs/sqlkit/query-editor)
