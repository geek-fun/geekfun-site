---
title: 在 DocKit 中查询与编辑 MongoDB 文档
description: 使用 DocKit 执行 MongoDB find 和聚合查询，查看嵌套结果，编辑或克隆文档，并管理集合与索引。
---

# 查询与编辑 MongoDB 文档

[连接 MongoDB](/zh/docs/dockit/connect-to-server#连接到-mongodb) 后，在编辑器工具栏选择目标数据库，再打开 MongoDB 编辑器。你可以直接输入 MongoDB 语句，也可以使用查找文档、运行聚合管道或写入数据的示例。

## 查找和查看文档

先用 `find` 取少量文档，看看集合里的数据。把 `orders` 换成你的集合名。

```javascript
db.orders.find({ status: "open" }).limit(20)
```

点击语句旁的运行按钮，或按 macOS 的 `⌘ + Enter` 或 Windows、Linux 的 `Ctrl + Enter`。结果面板提供表格、树形和 JSON 视图，可以查看普通字段、嵌套对象和数组。如果提示结果已截断，请缩小过滤范围或减少返回字段后再导出。

## 添加或编辑文档

如果结果对应一个集合，可以从工具栏往该集合插入文档。要编辑、克隆或删除返回的文档，请打开所在行的菜单。保存前确认当前数据库、集合和文档的 `_id`。克隆操作会打开一份新文档供你检查。

使用[查询历史](/zh/docs/dockit/query-history)查看过去的命令。通过结果工具栏复制或导出已返回的行，集合级文件操作见[导入与导出](/zh/docs/dockit/import-export#mongodb-支持)。

## 管理集合和索引

打开**管理**并选择数据库，查看集合、索引及存储统计信息。可以创建、重命名、克隆、清空或删除集合。清空集合会删除其中的文档，删除集合则会移除集合本身。管理工作区需要旗舰版，MongoDB 账号也需要相应权限。
