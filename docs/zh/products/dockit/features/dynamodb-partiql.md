---
title: DynamoDB PartiQL GUI - SQL 风格查询的可视化编辑器
description: 使用 DocKit 的可视化编辑器执行 PartiQL 查询。语法高亮、自动补全和查询格式化，为 DynamoDB 提供类 SQL 查询体验。
sidebar: false
head:
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/products/dockit/features/dynamodb-partiql
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/products/dockit/features/dynamodb-partiql
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/products/dockit/features/dynamodb-partiql
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/products/dockit/features/dynamodb-partiql
---

# DynamoDB PartiQL GUI - 可视化查询编辑器

DocKit 为 DynamoDB 提供专业的 **PartiQL 编辑器**，将类 SQL 查询功能带入您的 NoSQL 工作流程，具备完整的语法高亮、自动补全和查询格式化功能。

## 什么是 DynamoDB 的 PartiQL？

PartiQL 是 AWS 为 DynamoDB 提供的 SQL 兼容查询语言。它允许您使用熟悉的 SQL 语法来查询、插入、更新和删除 DynamoDB 表中的数据。

```sql
SELECT * FROM ProductCatalog 
WHERE Category = 'Electronics' 
  AND Price BETWEEN 100 AND 500
ORDER BY Price DESC
```

无需复杂的 DynamoDB 查询表达式，您可以编写可读的类 SQL 语句。

## 编辑器功能

DocKit 的 PartiQL 编辑器基于与 VS Code 相同的 Monaco 引擎构建，支持：

- 语法高亮（SQL 关键字、字符串、运算符）
- 表名和属性的自动补全
- 一键查询格式化
- 执行前实时语法验证
- 括号匹配与多光标编辑
- 复杂查询的代码折叠

相比 AWS 控制台的基础编辑体验，这是一个更接近本地 SQL 客户端的工作流。

## 查询历史与快捷键

- 按 `Cmd/Ctrl + Enter` 执行查询
- 访问之前执行的 PartiQL 语句
- 多标签并行处理多个查询
- 查询保存为 `.partiql` 或 `.sql` 文件，Git 友好

## 查询执行与结果

```sql
-- 带过滤的查询
SELECT ProductName, Price, Category 
FROM ProductCatalog 
WHERE Category = 'Electronics'

-- 插入新项目
INSERT INTO ProductCatalog VALUE {
  'ProductId': '12345',
  'ProductName': 'Laptop',
  'Price': 999
}

-- 更新现有项目
UPDATE ProductCatalog 
SET Price = 899 
WHERE ProductId = '12345'

-- 删除项目
DELETE FROM ProductCatalog 
WHERE ProductId = '12345'
```

结果以格式化 JSON 或表格视图显示，支持导出为 JSON/CSV，也可以复制单个项目或整个结果集。

## 本地优先设计

DocKit 将所有内容存储在本地：连接配置使用加密的本地存储，查询文件保存在磁盘上，不经过任何云同步。您的查询永不离开您的设备。

## 支持的 PartiQL 操作

| 操作 | 描述 | 示例 |
|-----------|-------------|---------|
| SELECT | 查询项目 | `SELECT * FROM Table WHERE id = ?` |
| INSERT | 添加新项目 | `INSERT INTO Table VALUE {...}` |
| UPDATE | 修改项目 | `UPDATE Table SET attr = ? WHERE id = ?` |
| DELETE | 删除项目 | `DELETE FROM Table WHERE id = ?` |
| 事务 | 原子操作 | 事务中的多个语句 |
| 批量操作 | 多个项目 | 批量 SELECT/INSERT/UPDATE |

### 高级查询示例

**BETWEEN 过滤：**
```sql
SELECT * FROM Orders 
WHERE OrderDate BETWEEN '2024-01-01' AND '2024-12-31'
  AND TotalAmount > 100
```

**IN 子句：**
```sql
SELECT * FROM Users 
WHERE Status IN ('active', 'pending')
```

**投影（仅特定属性）：**
```sql
SELECT UserId, Email, CreatedAt 
FROM Users 
WHERE AccountType = 'premium'
```

**嵌套属性访问：**
```sql
SELECT OrderId, Customer.Name, Customer.Email 
FROM Orders 
WHERE Customer.Country = 'US'
```

## DynamoDB Local 支持

DocKit 与 DynamoDB Local 无缝配合，用于离线开发：将端点指向 `http://localhost:8000`，编辑器行为与连接 AWS 时完全相同，无需 AWS 凭证即可测试查询。

## PartiQL 编辑器工具对比

| 功能 | DocKit | AWS 控制台 | Dynobase |
|---------|--------|-------------|----------|
| PartiQL 支持 | ✅ 完整 | ✅ 完整 | ✅ 完整 |
| 语法高亮 | ✅ VS Code 级别 | ⚠️ 基础 | ✅ 良好 |
| 自动补全 | ✅ 表 + 属性 | ❌ | ✅ 仅表 |
| 查询格式化 | ✅ | ❌ | ✅ |
| 本地存储 | ✅ 文件 | ❌ | ✅ 云同步 |
| 离线模式 | ✅ | ❌ | ⚠️ 有限 |
| 多标签查询 | ✅ | ❌ | ✅ |
| 费用 | 开源（Apache 2.0） | 免费（AWS 使用费） | $12-30/月 |

## 开始使用

1. 从 [www.geekfun.club/download](/zh/download) 下载并安装 DocKit
2. 连接到 DynamoDB（AWS 凭证、IAM 角色，或 DynamoDB Local）
3. 在 PartiQL 编辑器中执行第一条查询：

```sql
SELECT * FROM YourTableName LIMIT 10
```

按 `Cmd + Enter` (Mac) 或 `Ctrl + Enter` (Windows/Linux) 执行。

## 了解更多

- **[DynamoDB GUI 客户端概述](/zh/blog/dynamodb-gui)** - 完整功能列表
- **[Dynobase 替代方案](/zh/products/dockit/dockit-vs-dynobase)** - 功能对比
- **[下载 DocKit](/zh/download)** - 适用于 Mac、Windows、Linux

如需 PartiQL 语法参考，请查阅 [AWS PartiQL 文档](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ql-reference.html)或使用 DocKit 内置的 AI 助手生成查询。
