---
title: "macOS・Windows・Linux に SqlKit をインストールする"
description: "SqlKit をダウンロードし、OS に合ったパッケージでインストールします。"
---

# macOS・Windows・Linux に SqlKit をインストールする

[ダウンロードページ](/ja/download#sqlkit) で SqlKit のインストーラーを選びます。macOS 版は Apple Silicon と Intel の両方に対応しています。Windows 版と Linux 版は x64 用です。

## macOS

`.dmg` ファイルを開き、SqlKit を「アプリケーション」フォルダーにドラッグします。コピーが終わったら、そのフォルダーから起動します。

## Windows

`.exe` または `.msi` のインストーラーを実行します。画面の指示に従い、インストール後にスタートメニューから SqlKit を起動します。

## Linux

- Debian や Ubuntu では、ダウンロードした `.deb` を `sudo apt install ./package.deb` でインストールします。
- Fedora では、`.rpm` を `sudo dnf install ./package.rpm` でインストールします。
- AppImage は `chmod +x ./app.AppImage` で実行権限を付けてから開きます。

コマンド内のファイル名は、ダウンロードしたファイルの名前に置き換えてください。

## 初回起動

**接続**を開き、[最初のデータベースを登録します](/ja/docs/sqlkit/connect-to-database)。MySQL、PostgreSQL、SQL Server、SQLite のドライバーは内蔵されています。Oracle の接続テストでは Java と JDBC の構成も確認されます。
