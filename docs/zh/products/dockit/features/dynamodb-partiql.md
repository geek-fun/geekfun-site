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

**PartiQL 查询示例：**
```sql
SELECT * FROM ProductCatalog 
WHERE Category = 'Electronics' 
  AND Price BETWEEN 100 AND 500
ORDER BY Price DESC
```

无需复杂的 DynamoDB 查询表达式，您可以编写可读的类 SQL 语句。

## 为什么使用 PartiQL GUI？

### 🎯 优于 AWS 控制台
- **语法高亮**：彩色标记 SQL 关键字、字符串和运算符
- **自动补全**：智能建议表名、属性和关键字
- **查询格式化**：一键美化复杂查询
- **错误检测**：执行前实时语法验证

### ⚡ 提升开发效率
- **查询历史**：访问之前执行的 PartiQL 语句
- **键盘快捷键**：使用 `Cmd/Ctrl + Enter` 执行
- **多标签支持**：同时处理多个查询
- **保存查询**：本地持久化查询以便重用

## DocKit PartiQL 编辑器功能

### 📝 Monaco 驱动的编辑器
基于与 VS Code 相同的引擎：

- 完整的智能感知支持
- 括号匹配和自动闭合
- 多光标编辑
- 支持正则表达式的查找和替换
- 复杂查询的代码折叠

### 🔍 查询执行与结果

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

**结果显示：**
- 格式化的 JSON 输出
- 易于浏览的表格视图
- 导出结果为 JSON/CSV
- 复制单个项目或整个结果集

### 💾 本地优先设计

与基于云的工具不同，DocKit 将所有内容存储在本地：

- **查询文件**：保存为 `.partiql` 或 `.sql` 文件
- **连接配置**：加密的本地存储
- **无云同步**：您的查询永不离开您的设备
- **Git 友好**：将查询提交到版本控制

## 支持的 PartiQL 功能

DocKit 支持所有 DynamoDB PartiQL 操作：

| 操作 | 描述 | 示例 |
|-----------|-------------|---------|
| **SELECT** | 查询项目 | `SELECT * FROM Table WHERE id = ?` |
| **INSERT** | 添加新项目 | `INSERT INTO Table VALUE {...}` |
| **UPDATE** | 修改项目 | `UPDATE Table SET attr = ? WHERE id = ?` |
| **DELETE** | 删除项目 | `DELETE FROM Table WHERE id = ?` |
| **事务** | 原子操作 | 事务中的多个语句 |
| **批量操作** | 多个项目 | 批量 SELECT/INSERT/UPDATE |

### 高级查询示例

**使用 BETWEEN 过滤：**
```sql
SELECT * FROM Orders 
WHERE OrderDate BETWEEN '2024-01-01' AND '2024-12-31'
  AND TotalAmount > 100
```

**使用 IN 子句：**
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

DocKit 与 DynamoDB Local 无缝配合，用于离线开发：

1. **连接设置**：指向 `http://localhost:8000`
2. **相同功能**：PartiQL 编辑器工作方式相同
3. **无需 AWS 凭证**：无需 AWS 账户即可测试查询
4. **快速迭代**：在本地实例上即时执行查询

## PartiQL 编辑器工具对比

| 功能 | DocKit | AWS 控制台 | Dynobase |
|---------|--------|-------------|----------|
| **PartiQL 支持** | ✅ 完整 | ✅ 完整 | ✅ 完整 |
| **语法高亮** | ✅ VS Code 级别 | ⚠️ 基础 | ✅ 良好 |
| **自动补全** | ✅ 表 + 属性 | ❌ | ✅ 仅表 |
| **查询格式化** | ✅ | ❌ | ✅ |
| **本地存储** | ✅ 文件 | ❌ | ✅ 云同步 |
| **离线模式** | ✅ | ❌ | ⚠️ 有限 |
| **多标签查询** | ✅ | ❌ | ✅ |
| **费用** | 免费 | 免费（AWS 使用费） | $12-30/月 |

## DocKit 中开始使用 PartiQL

### 1. 安装 DocKit
从 [www.geekfun.club/download](/zh/download) 下载

### 2. 连接到 DynamoDB
- AWS 账户（带凭证）
- DynamoDB Local（localhost）
- 基于 IAM 角色的连接

### 3. 编写您的第一个查询
```sql
SELECT * FROM YourTableName LIMIT 10
```

### 4. 使用键盘快捷键执行
按 `Cmd + Enter` (Mac) 或 `Ctrl + Enter` (Windows/Linux)

## 为什么开发者选择 DocKit 的 PartiQL

> *"终于有了一个不像浏览器表单的 DynamoDB 编辑器。PartiQL 编辑器和我用过的任何 SQL 客户端一样好。"*
> — 使用 DocKit 进行微服务开发的开发者

### 主要优势：
- **免费且开源**：无订阅或试用限制
- **快速**：原生桌面应用，非 Web 基础
- **隐私**：查询保留在您的设备上
- **多引擎**：用于 DynamoDB、Elasticsearch、OpenSearch 的同一工具

## 了解更多

- **[DynamoDB GUI 客户端概述](/zh/blog/dynamodb-gui)** - 完整功能列表
- **[Dynobase 替代方案](/zh/products/dockit/dockit-vs-dynobase)** - 功能对比
- **[下载 DocKit](/zh/download)** - 适用于 Mac、Windows、Linux

---

**需要 PartiQL 语法帮助？**
查看 [AWS PartiQL 文档](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ql-reference.html)或使用 DocKit 的内置 AI 助手生成查询。
