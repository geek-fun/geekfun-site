---
title: DynamoDB GUI 客户端 — DocKit 桌面版 Mac / Windows / Linux
description: DocKit 是一款开源 DynamoDB GUI 客户端，提供表生命周期管理、PartiQL 编辑器、AI 查询助手、可视化查询构建器、导入导出和本地化持久化存储。Dynobase 的开源替代方案。
sidebar: false
head:
  - - meta
    - name: keywords
      content: dynamodb gui客户端, dynamodb桌面客户端, dynamodb gui, dynobase替代方案, nosql workbench替代方案, dynamodb partiql编辑器, dynamodb查询工具, 开源dynamodb客户端, dynamodb mac客户端
  - - link
    - rel: canonical
      href: https://www.geekfun.club/products/dockit/dynamodb-gui-client
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/products/dockit/dynamodb-gui-client
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/products/dockit/dynamodb-gui-client
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/products/dockit/dynamodb-gui-client
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "DocKit",
        "alternateName": ["DynamoDB GUI 客户端", "Dynobase 替代方案"],
        "description": "开源桌面 DynamoDB GUI 客户端，支持 PartiQL 编辑器、AI 查询生成、可视化查询构建器、导入导出和本地化持久化存储。Dynobase 和 NoSQL Workbench 的免费替代方案。",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": { "@type": "Offer", "priceCurrency": "USD" },
        "downloadUrl": "https://www.geekfun.club/download",
        "author": { "@type": "Organization", "name": "GEEKFUN", "url": "https://www.geekfun.club" },
        "license": "https://github.com/geek-fun/dockit/blob/main/LICENSE",
        "sameAs": ["https://github.com/geek-fun/dockit"]
      }
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "DocKit 是 Dynobase 的替代方案吗？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "是的。DocKit 覆盖相同的核心工作流——浏览表、运行 PartiQL、导入导出数据——并额外提供 AI 助手和 Elasticsearch/OpenSearch 支持。且完全开源（Apache 2.0）。"
            }
          },
          {
            "@type": "Question",
            "name": "DocKit 支持 DynamoDB Local 吗？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "支持。创建连接时将自定义端点设置为 http://localhost:8000。"
            }
          },
          {
            "@type": "Question",
            "name": "可以替代 NoSQL Workbench 吗？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "在查询开发和数据操作方面可以。NoSQL Workbench 有更强大的数据建模器。如果需要进行大量数据建模，可以两者并用。"
            }
          },
          {
            "@type": "Question",
            "name": "AWS 凭据存储在哪里？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "存储在您的本地设备上，不会传输给包括 DocKit 维护者在内的任何第三方。"
            }
          },
          {
            "@type": "Question",
            "name": "DocKit 可以管理 DynamoDB 表吗？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "可以。DocKit 提供完整的表生命周期管理——4 步向导创建表、修改计费模式/索引/流/TTL/PITR/加密等配置、清空和删除表，并可直接在应用内查看 CloudWatch 监控指标。"
            }
          }
        ]
      }
---

# DynamoDB GUI 客户端

**DocKit** 是一款适用于 Mac、Windows 和 Linux 的开源桌面 **DynamoDB GUI 客户端**。它替代 AWS 控制台承担日常 DynamoDB 工作——PartiQL 编辑器、可视化查询构建器、AI 查询助手和导入导出功能，全部集成在一个原生应用中。

<div style="display:flex;gap:12px;margin:1.5rem 0">
  <a href="/zh/download" style="padding:10px 20px;background:var(--vp-c-brand-1);color:#fff;border-radius:6px;font-weight:600;text-decoration:none">下载</a>
  <a href="https://github.com/geek-fun/dockit" style="padding:10px 20px;border:1px solid var(--vp-c-border);border-radius:6px;font-weight:600;text-decoration:none" target="_blank" rel="noopener">在 GitHub 上查看</a>
</div>

## 为什么需要 DynamoDB GUI 客户端？

AWS 控制台能处理简单查询，但并非为开发工作而设计：单标签页导航、无查询历史、无离线模式，在小文本框中编写过滤表达式容易出错。DynamoDB 专用 GUI 客户端正是为解决这些痛点而生。

DocKit 还提供大多数 DynamoDB 客户端所没有的功能：**了解您表结构的 Data AI Agent**。用自然语言描述查询需求——Agent 读你的表结构，生成 PartiQL，直接在你的表上执行。

## 看 DocKit 的实际效果

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 2rem 0;">
  <iframe
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/UE1hDLXvxuo"
    title="DocKit DynamoDB GUI 客户端演示"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

## DocKit 中的 DynamoDB 功能

### PartiQL 编辑器

专为 DynamoDB PartiQL 设计的 Monaco 编辑器：

![DocKit DynamoDB PartiQL 编辑器](/dockit-dynamodb-partiql-editor.png)

- PartiQL 语句的语法高亮和验证
- **Schema 感知自动补全** — 来自您实时表的表名、属性名和类型
- 多语句支持：在一个会话中运行多个查询
- `Cmd/Ctrl + Enter` 执行；结果在结构化表格视图中显示

### 可视化查询构建器

不熟悉 PartiQL？可视化查询构建器让您：

![DocKit DynamoDB 可视化查询构建器](/dockit-dynamodb-query-ui.png)

- 从侧边栏选择表
- 通过表单字段设置分区键、排序键条件和过滤表达式
- 运行前预览生成的查询
- 切换到 PartiQL 视图查看（并编辑）底层语句

通过可视化方式构建的每个查询也会保存到查询历史中。

 ### Data AI Agent — Agentic Data Studio

侧边栏 AI 助手和 Agentic Data Studio 能读到你的连接、表结构、索引和查询历史。你提出需求时，它们从 DynamoDB 拉实时上下文，生成 PartiQL，然后通过验证过的工具直接在表上执行。

例如"查找上周超过 500 美元的订单"——Agent 读表结构，构造查询，执行，返回结果。读操作自动执行，写操作（更新、删除）需要你确认。凭据不会发给 LLM。

![DocKit AI 查询助手](/dockit-ai-assistant.png)

### 导入与导出

完整保真地导入导出 DynamoDB 数据：

![DocKit DynamoDB 导入与导出](/dockit-dynamodb-import-export.png)

- **JSON** — 保留所有 DynamoDB 类型（S、N、BOOL、L、M 等）
- **CSV** — 用于电子表格工作流和分析工具
- 使用 `BatchWriteItem` API 进行批量写入，自动限速和重试
- 基于游标分页导出大型表，无内存限制

### 查询历史

每条 PartiQL 语句和可视化查询均自动保存。支持搜索历史、重新执行或一键加载回编辑器。历史记录本地存储，按连接隔离。

![DocKit 查询历史](/dockit-query-history.png)

### 一个应用管理多个数据库

DocKit 同样支持在同一应用中使用 **Elasticsearch** 和 **OpenSearch**，无需切换工具即可在 DynamoDB 表、Elasticsearch 索引和 OpenSearch 集群之间自由切换。

<div style="display: flex; gap: 32px; align-items: center; justify-content: center; margin: 24px 0;">
  <div style="display: flex; align-items: center; gap: 10px;">
    <img src="/db-dynamodb.svg" alt="DynamoDB" style="width: 32px; height: 32px;" />
    <span>DynamoDB</span>
  </div>
  <div style="display: flex; align-items: center; gap: 10px;">
    <img src="/db-elasticsearch.svg" alt="Elasticsearch" style="width: 32px; height: 32px;" />
    <span>Elasticsearch</span>
  </div>
  <div style="display: flex; align-items: center; gap: 10px;">
    <img src="/db-opensearch.png" alt="OpenSearch" style="width: 32px; height: 32px;" />
    <span>OpenSearch</span>
  </div>
</div>

## 对比：DocKit 与其他 DynamoDB GUI 客户端

| | DocKit | AWS 控制台 | NoSQL Workbench | Dynobase |
|---|---|---|---|---|
| **平台** | 桌面（原生） | Web（浏览器） | 桌面 | 桌面 |
| **PartiQL 编辑器** | ✅ Monaco | ✅ 基础版 | ✅ | ✅ |
| **可视化查询构建器** | ✅ | 有限 | ✅ | ✅ |
| **AI 助手** | ✅ | ❌ | ❌ | ❌ |
| **查询历史** | ✅ 自动 | ❌ | ❌ | ✅ |
| **导入 / 导出** | ✅ JSON, CSV | 有限 | 有限 | ✅ |
| **离线模式** | ✅ | ❌ | ✅ | ✅ |
| **Elasticsearch 支持** | ✅ | ❌ | ❌ | ❌ |
| **开源协议** | ✅ Apache 2.0 | ❌ | ❌ | ❌ |
| **价格** | 社区版免费 | 免费 | 免费 | $12–30/月 |

## 快速开始

1. **[下载 DocKit](/zh/download)**（macOS Apple Silicon + Intel、Windows 或 Linux）
2. 打开 DocKit → 点击**新建连接** → 选择 DynamoDB
3. 输入 AWS 区域、Access Key ID 和 Secret Access Key（或使用 IAM 配置文件）
4. 点击**连接** — 您的表出现在侧边栏
5. 打开 **PartiQL 编辑器**或**可视化查询构建器**开始查询

连接 DynamoDB Local 时，将端点设置为 `http://localhost:8000`，凭据填写任意非空值即可。详见[连接指南](/zh/docs/dockit/connect-to-server)。

## 表管理

DocKit 在**管理**面板中提供完整的 DynamoDB 表生命周期管理功能。

### 查看表

浏览所有表及其关键元数据：项目数、表大小、状态、计费模式、分区键、排序键和索引数量。

### 创建表

通过 **4 步创建表向导**完成：

1. **基本信息** — 表名、分区键（类型可选字符串/二进制/数字）、排序键（可选）
2. **容量设置** — 按需或预置模式（RCU/WCU）
3. **索引与流** — 配置 GSI（键结构、投影类型、吞吐量）、LSI 和 DynamoDB Streams（键仅/新镜像/旧镜像/新旧镜像）
4. **确认** — 创建前概览所有设置

### 修改表

- **计费模式**：按需与预置模式间切换
- **表类**：Standard 或 Standard-IA（低频访问）
- **Auto Scaling**：配置读写容量的最小值/最大值/目标值
- **GSI 管理**：创建、更新吞吐量或删除全局二级索引
- **TTL**：启用/禁用生存时间，选择属性字段
- **Point-in-Time Recovery**：启用/禁用持续备份（PITR）
- **流**：启用/禁用/更改流视图类型
- **加密**：AWS 自有密钥、KMS 或客户托管 CMK
- **删除保护**：防止意外删除表
- **标签**：管理键值元数据标签

### 监控

直接在应用内查看过去 24 小时的 **CloudWatch 指标**：

- 读/写容量使用率
- 节流事件
- 已消耗的 RCU/WCU

### 高级操作

- **清空表**：删除所有项目，保留表结构和设置
- **删除表**：永久移除表和所有数据

## GSI 与 LSI

DocKit 支持创建、查看和删除索引。每个索引可查看：

- 索引名、类型（GSI/LSI）、状态（活跃/创建中/删除中/更新中）
- 键结构（分区键 + 可选排序键）
- 投影类型（ALL、KEYS_ONLY、INCLUDE）
- 吞吐量设置（仅预置模式）
- 项目数和存储空间

通过对话框在一个流程内完成键结构、投影和吞吐量的配置。

## PartiQL 查询模式

DocKit 的 DynamoDB 编辑器同时支持可视化查询构建器和 PartiQL SQL 编辑器。下面的实用模式展示了何时使用哪种方式。

### 基本表查询

以一个 `Orders` 表为例，`OrderId` 为分区键，`CreatedAt` 为排序键：

**按分区键查询** — 最高效的访问模式：

```sql
SELECT *
FROM "Orders"
WHERE "OrderId" = 'ORD#10001';
```

**按分区键和排序键条件查询** — 窄范围读取：

```sql
SELECT "OrderId", "CreatedAt", "Status", "Total"
FROM "Orders"
WHERE "OrderId" = 'ORD#10001'
  AND "CreatedAt" BETWEEN '2026-05-01T00:00:00Z' AND '2026-05-31T23:59:59Z';
```

**带过滤表达式的扫描** — 当访问模式未被建模为键时使用：

```sql
SELECT *
FROM "Orders"
WHERE "Status" = 'PENDING'
  AND "Total" >= 500;
```

如果 `Status` 和 `Total` 不是任何键的一部分，DynamoDB 必须扫描然后过滤。适用于小表或本地开发，但应避免在生产热路径中使用。

### GSI 查询

全局二级索引查询需要显式的索引提示。如果 `Orders` 有一个名为 `CustomerId-CreatedAt-index` 的 GSI：

```sql
SELECT "OrderId", "CustomerId", "CreatedAt", "Status", "Total"
FROM "Orders"."CustomerId-CreatedAt-index"
WHERE "CustomerId" = 'CUST#42'
  AND "CreatedAt" >= '2026-05-01T00:00:00Z';
```

DynamoDB 需要知道使用哪个存储路径。索引提示让它明确。

### 批量操作

PartiQL 非常适合维护任务——填充数据、修复记录或清理测试数据：

```sql
INSERT INTO "Orders" VALUE {
  'OrderId': 'ORD#10002',
  'CreatedAt': '2026-05-15T09:30:00Z',
  'CustomerId': 'CUST#42',
  'Status': 'PENDING',
  'Total': 149.99
};

UPDATE "Orders"
SET "Status" = 'PAID', "Total" = 159.99
WHERE "OrderId" = 'ORD#10002'
  AND "CreatedAt" = '2026-05-15T09:30:00Z';

DELETE FROM "Orders"
WHERE "OrderId" = 'ORD#10002'
  AND "CreatedAt" = '2026-05-15T09:30:00Z';
```

可以在一个会话中运行多条语句来完成维护任务。

### 可视化查询构建器操作示例

通过直观的 UI 表单构建 DynamoDB 查询——设置分区键、排序键条件和过滤条件，无需手写代码。

![DocKit DynamoDB 可视化查询构建器](/dockit-dynamodb-query-ui.png)

## 分页

查询结果支持分页浏览，可配置每页显示 10、25、50、100、200 或 300 条记录。支持在结果集间前后翻页。

## 行内 CRUD

在结果表中直接编辑项目：

- **新增**：通过属性编辑器添加新项目（支持类型选择：S、N、BOOL、L、M 等）
- **编辑**：直接在行内修改属性值
- **删除**：通过确认对话框删除项目

## 常见问题

**DocKit 是 Dynobase 的替代方案吗？**
是的。DocKit 覆盖相同的核心工作流——浏览表、运行 PartiQL、导入导出数据——并额外提供 AI 助手和 Elasticsearch/OpenSearch 支持。且完全开源（Apache 2.0）。

**支持 DynamoDB Local 吗？**
支持。创建连接时将自定义端点设置为 `http://localhost:8000`。

**可以替代 NoSQL Workbench 吗？**
在查询开发和数据操作方面可以。NoSQL Workbench 有更强大的数据建模器。如果您进行大量数据建模，可以两者并用。

**AWS 凭据存储在哪里？**
存储在您的本地设备上，不会传输给包括 DocKit 维护者在内的任何第三方。

**DocKit 可以管理 DynamoDB 表吗？**
可以。DocKit 提供完整的表生命周期管理——通过 4 步向导创建表、修改计费模式和索引/流/TTL/PITR/加密等配置、清空和删除表，并可直接在应用内查看 CloudWatch 监控指标。

---

→ **[DocKit 完整功能概览](/zh/products/dockit/)** · [2026 年最佳 DynamoDB GUI 客户端](/zh/blog/best-dynamodb-gui-client-2026) · [导入导出指南](/zh/blog/dockit-import-export)
