---
title: "在 SqlKit 連線到 SQL 資料庫"
description: "設定主機、連接埠、登入資料與 TLS，測試連線後開啟 SQL 編輯器。"
---

# 在 SqlKit 連線到 SQL 資料庫

1. 開啟 **連線管理**，選擇 **新增連線**。輸入連線名稱並選擇資料庫類型。
2. 在 **基本** 輸入伺服器資料或選擇本機檔案。若伺服器要求 TLS，請在 **進階** 設定。
3. 按 **測試連線**，成功後按 **儲存**。在連線卡片上按 **連線**，接著開啟 **查詢**。

| 資料庫 | 常用連接埠或檔案 |
| --- | --- |
| [MySQL](/zh-TW/docs/sqlkit/mysql-gui-client) | `3306` |
| [PostgreSQL](/zh-TW/docs/sqlkit/postgresql-gui-client) | `5432`，另填資料庫名稱 |
| [SQL Server](/zh-TW/docs/sqlkit/sql-server-gui-client) | 預設執行個體通常為 `1433` |
| [Oracle Database](/zh-TW/docs/sqlkit/oracle-gui-client) | 基本連線通常為 `1521`，另填服務名稱或 SID |
| [SQLite](/zh-TW/docs/sqlkit/sqlite-gui-client) | 本機資料庫檔案路徑 |

請以伺服器實際設定的連接埠為準。測試 JDBC 連線時，SqlKit 會檢查 Java、JDBC 橋接元件和驅動程式，並嘗試下載缺少的項目。若下載失敗，打開 **設定 → JRE 與驅動程式** 檢查。

連線逾時時，先確認電腦能連到指定的主機和連接埠。如果登入失敗，檢查登入資料及資料庫權限。遇到 TLS 憑證錯誤時，向管理員確認伺服器名稱及該信任哪個 CA。連線成功後，可以[執行唯讀查詢](/zh-TW/docs/sqlkit/query-editor)確認資料庫能回傳結果。
