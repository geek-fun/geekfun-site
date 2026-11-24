---
title: "適用於 macOS、Windows 和 Linux 的 MySQL GUI 用戶端 | SqlKit"
description: "用內建的 MySQL 驅動程式連線，查看資料表並確認目前的資料庫和版本。"
---

# 適用於 macOS、Windows 和 Linux 的 MySQL GUI 用戶端

在 **連線管理 → 新增連線** 選擇 **MySQL**。填入主機、連接埠（通常是 `3306`）、帳號與密碼。若要在登入時開啟指定的資料庫，可一併填入資料庫名稱。伺服器要求使用 TLS 時，請在 **進階** 設定。

測試並儲存連線後，在 **查詢** 確認目前的資料庫與伺服器版本。

```sql
SELECT DATABASE() AS active_database, VERSION() AS server_version;
```

若 `active_database` 為 `NULL`，在側邊欄先選擇資料庫。若出現拒絕存取的訊息，請管理員檢查 MySQL 所辨識的連線來源以及帳號權限。連線到 MariaDB 時，請在[連線設定](/zh-TW/docs/sqlkit/connect-to-database)選擇 **MariaDB**。
