---
title: "適用於 macOS、Windows 和 Linux 的 PostgreSQL GUI 用戶端 | SqlKit"
description: "使用 SqlKit 連線到 PostgreSQL，設定 TLS 並查看目前的資料庫與結構描述。"
---

# 適用於 macOS、Windows 和 Linux 的 PostgreSQL GUI 用戶端

在 **連線管理 → 新增連線** 選擇 **PostgreSQL**。填入主機、連接埠（通常是 `5432`）、資料庫名稱和角色的登入資料。若必須驗證伺服器憑證與主機名稱，可在 **進階** 選擇 **完整驗證** 並指定可信任的 CA。

測試並儲存後，在 **查詢** 執行：

```sql
SELECT current_database() AS active_database, current_schema() AS active_schema;
```

在物件樹展開 `public` 或所需的結構描述。資料表重名時，可在 SQL 使用 `reporting.orders` 這類完整名稱。若看不到資料表，請重新整理物件樹並確認角色有權限存取結構描述與資料表。[SQL 編輯器指南](/zh-TW/docs/sqlkit/query-editor)
