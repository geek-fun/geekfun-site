---
title: "SqlKit を SQL データベースに接続する"
description: "ホスト、ポート、認証情報と TLS を設定し、SqlKit で接続をテストします。"
---

# SqlKit を SQL データベースに接続する

1. **接続**を開き、**新規接続を追加**を選びます。接続名とデータベースの種類を指定します。
2. **基本**でサーバー情報を入力します。SQLite の場合はファイルを選びます。TLS は**詳細**で設定します。
3. **接続テスト**に成功したら**保存**し、カードの**接続**をクリックします。続けて**クエリ**を開きます。

| データベース | 一般的なポートまたはファイル |
| --- | --- |
| [MySQL](/ja/docs/sqlkit/mysql-gui-client) | `3306` |
| [PostgreSQL](/ja/docs/sqlkit/postgresql-gui-client) | `5432` とデータベース名 |
| [SQL Server](/ja/docs/sqlkit/sql-server-gui-client) | 既定のインスタンスでは通常 `1433` |
| [Oracle Database](/ja/docs/sqlkit/oracle-gui-client) | 基本接続では通常 `1521`。サービス名または SID を指定 |
| [SQLite](/ja/docs/sqlkit/sqlite-gui-client) | ローカルファイルのパス |

ポートが異なる場合はサーバー側の値を使ってください。JDBC 接続のテスト時には Java とドライバーの有無を確認し、足りないコンポーネントの取得を試みます。取得できない場合は**設定 → JRE とドライバー**を確認してください。

タイムアウトする場合はホストとポートへのアクセスを確認します。認証エラーなら接続先データベースへの権限を、証明書エラーなら接続先のホスト名と信頼する CA を確認してください。接続後は[読み取り専用のクエリ](/ja/docs/sqlkit/query-editor)で動作を確かめます。
