---
title: "適用於 macOS、Windows 和 Linux 的 Oracle Database GUI 用戶端 | SqlKit"
description: "以服務名稱、SID、TNS 別名或雲端錢包，透過 JDBC 連線到 Oracle。"
---

# 適用於 macOS、Windows 和 Linux 的 Oracle Database GUI 用戶端

在 **連線管理 → 新增連線** 選擇 **Oracle**，依管理員提供的資料選擇連線方式。

- **基本連線。** 輸入主機、監聽器連接埠（通常為 `1521`）、服務名稱或 SID。
- **TNS。** 選擇含 `tnsnames.ora` 的資料夾，然後選擇 TNS 別名。
- **雲端錢包。** 選擇已解壓縮的錢包資料夾和服務別名。必要時填寫錢包密碼。

輸入 Oracle 使用者名稱和密碼後測試連線。若 Java 或 JDBC 元件無法下載，請檢查 **設定 → JRE 與驅動程式**。

開啟 **查詢**，執行下列 SQL 可查看連線使用的服務和結構描述。

```sql
SELECT SYS_CONTEXT('USERENV', 'SERVICE_NAME') AS service_name,
       SYS_CONTEXT('USERENV', 'CURRENT_SCHEMA') AS current_schema
FROM dual;
```

如果監聽器找不到服務，請確認欄位使用的是服務名稱還是 SID。若沒有看到 TNS 別名，請確認選取的是包含 `tnsnames.ora` 的資料夾。[SQL 編輯器指南](/zh-TW/docs/sqlkit/query-editor)
