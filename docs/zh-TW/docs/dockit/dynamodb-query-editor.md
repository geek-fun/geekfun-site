---
title: "在 DocKit 以 PartiQL 查詢 DynamoDB"
description: "使用視覺化查詢建構器或 PartiQL，依分割區索引鍵取得 DynamoDB 項目。"
---

# 在 DocKit 以 PartiQL 查詢 DynamoDB

[連線到資料庫](./connect-to-server)

在視覺化編輯器選擇資料表或索引，並輸入分割區索引鍵的值。有排序索引鍵時可加入條件。未指定分割區索引鍵時，編輯器會警告這次操作將執行掃描。

若想將查詢存成文字，請開啟 PartiQL 編輯器。將 `Orders`、`customerId` 和 `example-customer` 換成資料表、分割區索引鍵與要查詢的值。

```sql
SELECT * FROM "Orders" WHERE "customerId" = 'example-customer';
```

按執行按鈕，或在 macOS 按 `⌘ + Enter`、Windows 與 Linux 按 `Ctrl + Enter`。

在結果面板翻頁。使用屬性篩選時，即使這一頁沒有符合的項目，後續頁面仍可能有結果。
