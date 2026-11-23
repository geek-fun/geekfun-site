---
title: "SqlKit で最初の SQL クエリを実行する"
description: "SQL エディターで接続を確認し、クエリを実行して結果を CSV や JSON に保存します。"
---

# SqlKit で最初の SQL クエリを実行する

[データベースに接続](/ja/docs/sqlkit/connect-to-database)したら、**クエリ**を開き、**新規クエリ**を選択します。ツールバーに表示される接続とデータベースを確認し、次を入力します。

```sql
SELECT 1 AS connection_check;
```

Oracle の場合は `SELECT 1 AS connection_check FROM dual;` を入力します。**実行**をクリックし、結果パネルに `1` が表示されることを確かめます。

SQL の一部を選択して、macOS では `⌘ + Enter`、Windows や Linux では `Ctrl + Enter` を押すと、その範囲だけを実行できます。未選択の場合はカーソル位置の文を実行します。ツールバーの**実行**はエディター全体が対象です。

オブジェクトツリーでテーブルをダブルクリックすると行を表示できます。結果パネルから CSV や JSON を出力できます。SQL の保存には `⌘ + S` または `Ctrl + S` を使います。[ほかのショートカット](/ja/docs/sqlkit/keyboard-shortcuts)
