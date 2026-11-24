---
title: "macOS・Windows・Linux に DocKit をインストールする"
description: "DocKit をダウンロードし、OS に合ったパッケージでインストールします。"
---

# macOS・Windows・Linux に DocKit をインストールする

[ダウンロードページ](/ja/download#dockit) で DocKit のインストーラーを選びます。macOS 版は Apple Silicon と Intel の両方に対応しています。Windows 版と Linux 版は x64 用です。

## macOS

`.dmg` ファイルを開き、DocKit を「アプリケーション」フォルダーにドラッグします。コピーが終わったら、そのフォルダーから起動します。

## Windows

`.exe` または `.msi` のインストーラーを実行します。画面の指示に従い、インストール後にスタートメニューから DocKit を起動します。

## Linux

- Debian や Ubuntu では、ダウンロードした `.deb` を `sudo apt install ./package.deb` でインストールします。
- Fedora では、`.rpm` を `sudo dnf install ./package.rpm` でインストールします。
- AppImage は `chmod +x ./app.AppImage` で実行権限を付けてから開きます。

コマンド内のファイル名は、ダウンロードしたファイルの名前に置き換えてください。

## 初回起動

**+** から[最初の接続を登録します](/ja/docs/dockit/connect-to-server)。ウィンドウを閉じても DocKit はバックグラウンドで動作し、進行中の転送も継続します。アプリを完全に終了するにはメニューバーまたはシステムトレイのメニューを使います。
