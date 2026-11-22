---
title: 使用 DocKit 查询 DynamoDB | 可视化构建器与 PartiQL
description: 通过 DocKit 的 DynamoDB 可视化查询构建器或 PartiQL 编辑器查询分区键、翻阅结果和管理项目属性。
---

# 查询与编辑 DynamoDB 项目

[连接 DynamoDB 或 DynamoDB Local](/zh/docs/dockit/connect-to-server#连接到-dynamodb)后，先选择要查的表。在可视化构建器里填写键条件和属性筛选。如果想写一条能保存并重复使用的语句，就打开 PartiQL 编辑器。

## 使用可视化构建器

1. 在编辑器中选择目标表或索引。
2. 填写分区键值以执行键查询。如果所选表或索引有排序键，可添加排序键条件缩小范围。
3. 根据需要添加属性筛选，然后运行。没有填写分区键时，界面会提示将扫描数据。查询大表时，如果已知分区键，优先使用键条件。
4. 使用结果面板的翻页控件继续查看。DynamoDB 读取数据后才应用额外筛选，因此当前页返回较少项目时，后续页面仍可能有匹配项。

## 运行 PartiQL 语句

打开 PartiQL 编辑器。将下面的 `Orders`、`customerId` 和 `example-customer` 替换为实际的表名、分区键和键值。

```sql
SELECT * FROM "Orders" WHERE "customerId" = 'example-customer';
```

可从示例查询中选择模板，也可手动编写语句。点击运行按钮，或按 macOS 的 `⌘ + Enter` 或 Windows、Linux 的 `Ctrl + Enter`。此前执行的 PartiQL 和可视化查询可在[查询历史](/zh/docs/dockit/query-history)中查找。

## 创建或编辑项目

创建项目时填写必需的主键值，并为其他属性选择 DynamoDB 类型。编辑现有项目时，可修改非主键属性。可以在编辑器里按结构填写映射、列表和集合，也可以用 Base64 填写二进制属性。如果表里已经有相同主键的项目，创建时会提示冲突。

索引、TTL、流、持续备份和容量指标见 [DynamoDB 表管理](/zh/docs/dockit/dynamodb-manage-metrics)。文件操作见[导入与导出](/zh/docs/dockit/import-export)。
