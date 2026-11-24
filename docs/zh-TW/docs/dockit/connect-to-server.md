---
title: "在 DocKit 連線到資料庫"
description: "在 DocKit 新增並測試 Elasticsearch、OpenSearch、EasySearch、MongoDB 或 DynamoDB 連線。"
---

# 在 DocKit 連線到資料庫

按 **+**，選擇資料庫類型。

- **Elasticsearch、OpenSearch、EasySearch。** 輸入含 `http://` 或 `https://` 的伺服器網址和連接埠（常用 `9200`）。依伺服器設定選擇基本驗證或 API 金鑰。使用 HTTPS 時請保留憑證驗證。
- **MongoDB。** 輸入主機與連接埠，或貼上服務商提供的 URI。若使用 SCRAM，請確認存放使用者憑證的驗證資料庫（常見為 `admin`）。
- **DynamoDB。** 選擇連線模式。使用存取金鑰時要填區域、金鑰 ID 與祕密存取金鑰。AWS Profile、SSO 和 Assume Role 需要 Ultimate。DynamoDB Local 可使用 `http://localhost:8000` 和測試用認證資料。

按 **測試連線**。成功後按 **確認**，再從側邊欄開啟儲存的連線。若遇到權限錯誤，請確認帳號可以讀取目標索引、集合或資料表。

接著[執行搜尋查詢](/zh-TW/docs/dockit/search-editor)，或查閱[遠端連線設定（英文）](/docs/dockit/remote-connections)。
