---
title: "在 DocKit 以 PartiQL 查詢 DynamoDB"
description: "使用視覺化查詢建構器或 PartiQL，依分割區索引鍵取得 DynamoDB 項目。"
---

# 在 DocKit 以 PartiQL 查詢 DynamoDB

[連線到資料庫](./connect-to-server)

在視覺化編輯器選擇資料表或索引，並輸入分割區索引鍵的值。有排序索引鍵時可加入條件。如果沒指定分割區索引鍵，編輯器會提示這次操作會掃描資料。

要把查詢存成文字，請開啟 PartiQL 編輯器。把 `Orders` 換成資料表名稱，再把 `customerId` 和 `example-customer` 分別換成分割區索引鍵的名稱和要查詢的值。

```sql
SELECT * FROM "Orders" WHERE "customerId" = 'example-customer';
```

按執行按鈕，或在 macOS 按 `⌘ + Enter`、Windows 與 Linux 按 `Ctrl + Enter`。

使用屬性篩選時，這一頁沒有符合的項目，後續頁面仍可能有結果。可以從結果面板繼續翻頁。
