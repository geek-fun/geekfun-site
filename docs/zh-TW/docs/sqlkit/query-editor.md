---
title: "在 SqlKit 執行第一個 SQL 查詢"
description: "使用 SQL 編輯器測試連線、查看結果、儲存 SQL，並將回傳的資料列匯出成 CSV 或 JSON。"
---

# 在 SqlKit 執行第一個 SQL 查詢

[連線到資料庫](/zh-TW/docs/sqlkit/connect-to-database)後，開啟 **查詢** 並按 **新增查詢**。確認編輯器工具列顯示的是要使用的連線與資料庫，再輸入下列 SQL：

```sql
SELECT 1 AS connection_check;
```

Oracle 請改用 `SELECT 1 AS connection_check FROM dual;`。按 **執行**，在結果面板確認數值為 `1`。

若只要執行選取的 SQL，在 macOS 按 `⌘ + Enter`，在 Windows 或 Linux 按 `Ctrl + Enter`。未選取文字時，這組按鍵會執行游標所在的陳述式。工具列的 **執行** 會執行整份內容。

在物件樹點兩下資料表即可查看資料列。查詢結果可從面板匯出成 CSV 或 JSON。使用 `⌘ + S` 或 `Ctrl + S` 儲存 SQL。[查看編輯器快速鍵](/zh-TW/docs/sqlkit/keyboard-shortcuts)
