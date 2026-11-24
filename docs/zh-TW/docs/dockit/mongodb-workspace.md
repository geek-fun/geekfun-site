---
title: "在 DocKit 查詢 MongoDB 文件"
description: "在 MongoDB 編輯器執行 find，查看結果中的巢狀物件與陣列。"
---

# 在 DocKit 查詢 MongoDB 文件

[連線到資料庫](./connect-to-server)

在編輯器工具列選擇資料庫。將 `orders` 換成有權限讀取的集合名稱。

```javascript
db.orders.find({ status: "open" }).limit(20)
```

按執行按鈕，或在 macOS 按 `⌘ + Enter`、Windows 與 Linux 按 `Ctrl + Enter`。

在結果面板切換到樹狀或 JSON 檢視，可查看巢狀物件與陣列。如果結果未完整回傳，可在匯出前縮小篩選條件或調整投影。
