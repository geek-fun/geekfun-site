---
title: "在 DocKit 執行第一個搜尋查詢"
description: "對 Elasticsearch、OpenSearch 或 EasySearch 送出唯讀請求，並檢查伺服器回應。"
---

# 在 DocKit 執行第一個搜尋查詢

[連線到伺服器](/zh-TW/docs/dockit/connect-to-server)後，開啟該連線的搜尋編輯器。將 `orders` 換成帳號有權限讀取的索引名稱。

```http
POST /orders/_search
{
  "size": 10,
  "query": { "match_all": {} }
}
```

將游標移到請求內。macOS 按 `⌘ + Enter`，Windows 與 Linux 按 `Ctrl + Enter`。也可按請求旁的執行按鈕。範例最多回傳十筆結果。

每個請求的第一行寫 HTTP 方法和路徑，下一行再寫請求內容。如果編輯器裡有多個請求，執行前先確認目前的連線。可把要重複使用的請求存成 `.search` 檔案。

操作編輯器時可參考[快速鍵](/zh-TW/docs/dockit/shortcut)。其他查詢方式見 [MongoDB 查詢](./mongodb-workspace)與 [DynamoDB 的 PartiQL 查詢](./dynamodb-query-editor)。
