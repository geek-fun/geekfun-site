---
title: "MySQL GUI クライアント | SqlKit"
description: "macOS、Windows、Linux の SqlKit から MySQL に接続し、利用中のデータベースを確認します。"
---

# MySQL GUI クライアント

SqlKit には MySQL ドライバーが内蔵されています。**接続 → 新規接続を追加**で **MySQL** を選び、ホスト、ポート（通常 `3306`）、ユーザー名、パスワードを入力します。接続時に選ぶデータベースも指定できます。TLS が必要な場合は**詳細**で設定します。

接続をテストして保存したら、**クエリ**で次を実行します。

```sql
SELECT DATABASE() AS active_database, VERSION() AS server_version;
```

`active_database` が `NULL` の場合は、サイドバーでデータベースを選びます。アクセスが拒否された場合は、サーバーから見た接続元ホストとユーザーの権限を管理者に確認してください。MariaDB の場合は[接続画面](/ja/docs/sqlkit/connect-to-database)で **MariaDB** を選びます。
