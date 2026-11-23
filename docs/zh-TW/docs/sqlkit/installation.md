---
title: "在 macOS、Windows 或 Linux 安裝 SqlKit"
description: "選擇符合電腦作業系統的 SqlKit 安裝檔，完成安裝後建立第一個連線。"
---

# 在 macOS、Windows 或 Linux 安裝 SqlKit

在 [SqlKit 下載頁面（英文）](/download#sqlkit) 選擇安裝檔。macOS 安裝檔支援 Apple Silicon 和 Intel，Windows 和 Linux 套件為 x64 版本。

## macOS

開啟 `.dmg` 檔案，把 SqlKit 拖到「應用程式」資料夾。複製完成後，從該資料夾啟動應用程式。

## Windows

執行 `.exe` 或 `.msi` 安裝檔，依畫面指示完成安裝，再從「開始」功能表開啟 SqlKit。

## Linux

- Debian 和 Ubuntu 使用 `.deb` 套件。在下載目錄執行 `sudo apt install ./package.deb`。
- Fedora 使用 `.rpm` 套件。執行 `sudo dnf install ./package.rpm`。
- 使用 AppImage 時，先執行 `chmod +x ./app.AppImage` 賦予執行權限，再開啟檔案。

請把指令中的檔名換成實際下載的檔名。

## 第一次啟動

開啟 **連線管理**，[新增資料庫連線](/zh-TW/docs/sqlkit/connect-to-database)。MySQL、PostgreSQL、SQL Server 和 SQLite 都有內建驅動程式。測試 Oracle 連線時，SqlKit 也會檢查 Java 和 JDBC 元件。
