---
title: "Microsoft SQL Server GUI クライアント | SqlKit"
description: "SQL Server の TCP ポートと SQL ログインを使って接続し、T-SQL でセッションを確認します。"
---

# Microsoft SQL Server GUI クライアント

**接続 → 新規接続を追加**で **SQL Server** を選び、ホスト、TCP ポート、データベース名、SQL Server のユーザー名とパスワードを入力します。既定のインスタンスでは通常 `1433` です。名前付きインスタンスの場合は実際に使用するポートを管理者に確認してください。

暗号化は**詳細**で設定します。接続をテストして保存し、**クエリ**で次を実行します。

```sql
SELECT DB_NAME() AS active_database, SUSER_SNAME() AS login_name;
```

テーブルは `dbo` またはアプリのスキーマの下に表示されます。タイムアウトする場合はサーバーで TCP/IP が有効か、ポートに到達できるかを確認します。[接続ガイド](/ja/docs/sqlkit/connect-to-database)
