---
title: "DocKit をデータベースに接続する"
description: "DocKit で Elasticsearch、OpenSearch、EasySearch、MongoDB、DynamoDB に接続します。"
---

# DocKit をデータベースに接続する

**+** をクリックし、接続先の種類を選びます。

- **Elasticsearch、OpenSearch、EasySearch。** `http://` または `https://` から始まる URL とポート（通常 `9200`）を指定し、Basic 認証または API キーを設定します。HTTPS では証明書の検証を有効にしておきます。
- **MongoDB。** ホストとポートを入力するか、接続 URI を貼り付けます。SCRAM を使う場合は、認証先データベース（多くの場合 `admin`）も確認します。
- **DynamoDB。** 接続方法を選びます。アクセスキーを使う接続ではリージョン、アクセスキー ID、シークレットアクセスキーが必要です。AWS Profile、SSO、Assume Role は Ultimate が必要です。DynamoDB Local では `http://localhost:8000` とダミーの認証情報を使えます。

**接続テスト**を行い、成功したら**確認**を選びます。サイドバーから保存した接続を開いてください。権限エラーが出たら、対象のインデックス、コレクション、テーブルを読み取れる権限があるか確認します。

[検索クエリを実行する](/ja/docs/dockit/search-editor)か、必要に応じて[リモート接続のガイド（英語）](/docs/dockit/remote-connections)を参照してください。
