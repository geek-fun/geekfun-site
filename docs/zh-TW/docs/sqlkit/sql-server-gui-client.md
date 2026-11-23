---
title: "適用於 macOS、Windows 和 Linux 的 SQL Server GUI 用戶端 | SqlKit"
description: "透過執行個體的 TCP 連接埠，用 SQL Server 登入資料連線並執行 T-SQL。"
---

# 適用於 macOS、Windows 和 Linux 的 SQL Server GUI 用戶端

在 **連線管理 → 新增連線** 選擇 **SQL Server**。填入主機、TCP 連接埠、資料庫名稱及 SQL Server 帳號密碼。預設執行個體常用 `1433`。具名執行個體可能設定其他連接埠，請向管理員確認。

在 **進階** 設定加密選項，測試並儲存。到 **查詢** 確認登入帳號與資料庫：

```sql
SELECT DB_NAME() AS active_database, SUSER_SNAME() AS login_name;
```

展開 `dbo` 或應用程式使用的結構描述來查看資料表。如果連線逾時，請確認伺服器已啟用 TCP/IP，而且你的電腦能連到該連接埠。憑證錯誤請先核對主機名稱與信任的 CA。[連線指南](/zh-TW/docs/sqlkit/connect-to-database)
