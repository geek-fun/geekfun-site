---
title: "SqlKit を使い始める"
description: "SqlKit をインストールし、SQL データベースに接続して最初のクエリを実行します。"
---

# SqlKit を使い始める

SqlKit は macOS、Windows、Linux 向けのオープンソースのデータベースクライアントです。サーバーに接続するかローカルファイルを開き、同じ画面で構造、SQL、クエリ結果を確認できます。

<div class="docs-section-links">

- [インストール](/ja/docs/sqlkit/installation)
- [SqlKit の機能](/ja/docs/sqlkit/capabilities)
- [対応データベース](#supported-databases)

</div>

<DocsFigure src="/sqlkit-sql-editor-ui.png" alt="SqlKit のオブジェクトツリー、SQL エディター、クエリ結果" caption="クエリの作業画面にデータベース構造、エディター、実行結果が並びます。" :width="3424" :height="2224" eager />

[インストール](/ja/docs/sqlkit/installation)後、[データベースに接続](/ja/docs/sqlkit/connect-to-database)します。[読み取り専用のクエリを実行](/ja/docs/sqlkit/query-editor)し、結果が返ることを確認しましょう。エディターの操作には[キーボードショートカット](/ja/docs/sqlkit/keyboard-shortcuts)を使えます。

## SqlKit が対応するデータベース {#supported-databases}

| 接続方式 | データベース |
| --- | --- |
| 組み込み TCP ドライバー | <!--@include: @/.vitepress/includes/sqlkit-databases.md#tcp--> |
| 組み込みローカルファイルドライバー | <!--@include: @/.vitepress/includes/sqlkit-databases.md#local--> |
| MySQL 互換ドライバー | <!--@include: @/.vitepress/includes/sqlkit-databases.md#mysql--> |
| PostgreSQL 互換ドライバー | <!--@include: @/.vitepress/includes/sqlkit-databases.md#postgresql--> |
| JDBC ブリッジ | <!--@include: @/.vitepress/includes/sqlkit-databases.md#jdbc--> |
| HTTP 接続 | <!--@include: @/.vitepress/includes/sqlkit-databases.md#http--> |

接続に必要な設定は[対応データベースとドライバー（英語）](/docs/sqlkit/supported-databases)を参照してください。
