---
title: SQLite GUI 与数据库浏览器 | SqlKit 跨平台桌面客户端
description: 使用 SqlKit 打开本地 SQLite 文件，浏览表和视图、执行 SQL，并将查询结果导出为 CSV 或 JSON。
---

# SQLite GUI 与数据库浏览器

在 SqlKit 里直接打开 SQLite 文件，就能浏览表和视图，也能在 SQL 编辑器里查询数据。SqlKit 开源，支持 macOS、Windows 和 Linux。

## 打开 SQLite 文件

1. [安装 SqlKit](/zh/docs/sqlkit/installation)，打开**连接管理 → 添加新连接**。
2. 选择 **SQLite**，为连接命名，然后使用**打开**选择现有数据库文件。若要创建数据库，使用**新建**选择文件路径。
3. 保存后，选择**连接**。在**查询**中展开对象树，双击表即可查看数据。

## 列出文件中的表和视图

```sql
SELECT type, name
FROM sqlite_schema
WHERE type IN ('table', 'view')
ORDER BY type, name;
```

在**查询**中运行这条语句。如果原有的表没有出现，先检查连接里填的文件路径。如果你在别的路径新建了一个文件，里面暂时没有用户表。

SQLite 直接读取本地文件，无需填写服务器地址或 TCP 端口。如果文件使用 SQLCipher 加密，请选择 **SQLCipher** 并输入加密密钥。保存查询和导出 CSV 或 JSON 的操作见 [SQL 编辑器指南](/zh/docs/sqlkit/query-editor)。
