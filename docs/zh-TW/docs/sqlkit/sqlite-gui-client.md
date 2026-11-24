---
title: "SQLite GUI 用戶端與資料庫瀏覽器 | SqlKit"
description: "在 SqlKit 開啟本機 SQLite 檔案，查看資料表與檢視表，並執行 SQL。"
---

# SQLite GUI 用戶端與資料庫瀏覽器

在 **連線管理 → 新增連線** 選擇 **SQLite**。按 **開啟...** 選取現有資料庫，或按 **新增...** 指定新檔的路徑。儲存後按 **連線**。

可從 **查詢** 的物件樹開啟資料表，也可以用下列 SQL 列出資料表和檢視表。

```sql
SELECT type, name
FROM sqlite_schema
WHERE type IN ('table', 'view')
ORDER BY type, name;
```

新建的檔案沒有使用者資料表。若找不到既有的資料表，請確認連線是否指向正確的檔案。如果檔案使用 SQLCipher 加密，請選擇 **SQLCipher** 並輸入金鑰。[SQL 編輯器指南](/zh-TW/docs/sqlkit/query-editor)
