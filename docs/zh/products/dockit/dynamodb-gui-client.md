---
title: DynamoDB GUI 客户端 — DocKit 桌面版 Mac / Windows / Linux
description: DocKit 是一款开源 DynamoDB GUI 客户端，提供 PartiQL 编辑器、AI 查询助手、可视化查询构建器、导入导出和本地化持久化存储。Dynobase 的开源替代方案。
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
---

# DynamoDB GUI 客户端

**DocKit** 是一款适用于 Mac、Windows 和 Linux 的开源桌面 **DynamoDB GUI 客户端**。它替代 AWS 控制台承担日常 DynamoDB 工作——PartiQL 编辑器、可视化查询构建器、AI 查询助手和导入导出功能，全部集成在一个原生应用中。

<div style="display:flex;gap:12px;margin:1.5rem 0">
  <a href="/zh/download" style="padding:10px 20px;background:var(--vp-c-brand-1);color:#fff;border-radius:6px;font-weight:600;text-decoration:none">下载</a>
  <a href="https://github.com/geek-fun/dockit" style="padding:10px 20px;border:1px solid var(--vp-c-border);border-radius:6px;font-weight:600;text-decoration:none" target="_blank" rel="noopener">在 GitHub 上查看</a>
</div>

## 为什么需要 DynamoDB GUI 客户端？

AWS 控制台能处理简单查询，但并非为开发工作而设计：单标签页导航、无查询历史、无离线模式，在小文本框中编写过滤表达式容易出错。DynamoDB 专用 GUI 客户端正是为解决这些痛点而生。

DocKit 还提供大多数 DynamoDB 客户端所没有的功能：**了解您表结构的 AI 助手**。用自然语言描述查询需求，立即得到可用的 PartiQL 语句。

## DocKit 中的 DynamoDB 功能

### PartiQL 编辑器

专为 DynamoDB PartiQL 设计的 Monaco 编辑器：

- PartiQL 语句的语法高亮和验证
- **Schema 感知自动补全** — 来自您实时表的表名、属性名和类型
- 多语句支持：在一个会话中运行多个查询
- `Cmd/Ctrl + Enter` 执行；结果在结构化表格视图中显示

![DocKit DynamoDB PartiQL 编辑器](/dockit-dynamodb-partiql-editor.png)

### 可视化查询构建器

不熟悉 PartiQL？可视化查询构建器让您：

- 从侧边栏选择表
- 通过表单字段设置分区键、排序键条件和过滤表达式
- 运行前预览生成的查询
- 切换到 PartiQL 视图查看（并编辑）底层语句

通过可视化方式构建的每个查询也会保存到查询历史中。

![DocKit DynamoDB 可视化查询构建器](/dockit-dynamodb-query-ui.png)

### AI 查询助手

用自然语言描述需求——"查找本周下单且总金额超过 500 的所有订单"——DocKit 将注入您的真实属性名和类型作为上下文，生成正确的 PartiQL 语句。支持 OpenAI 和 DeepSeek，使用您自己的 API 密钥。您的表数据始终不离开本机。

![DocKit AI 查询助手](/dockit-ai-assistant.png)

### 导入与导出

完整保真地导入导出 DynamoDB 数据：

- **JSON** — 保留所有 DynamoDB 类型（S、N、BOOL、L、M 等）
- **CSV** — 用于电子表格工作流和分析工具
- 使用 `BatchWriteItem` API 进行批量写入，自动限速和重试
- 基于游标分页导出大型表，无内存限制

![DocKit DynamoDB 导入与导出](/dockit-dynamodb-import-export.png)

### 查询历史

每条 PartiQL 语句和可视化查询均自动保存。支持搜索历史、重新执行或一键加载回编辑器。历史记录本地存储，按连接隔离。

![DocKit 查询历史](/dockit-query-history.png)

### 一个应用管理多个数据库

DocKit 同样支持在同一应用中使用 **Elasticsearch** 和 **OpenSearch**，无需切换工具即可在 DynamoDB 表、Elasticsearch 索引和 OpenSearch 集群之间自由切换。

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

## 常见问题

**DocKit 是 Dynobase 的替代方案吗？**
是的。DocKit 覆盖相同的核心工作流——浏览表、运行 PartiQL、导入导出数据——并额外提供 AI 助手和 Elasticsearch/OpenSearch 支持。且完全开源（Apache 2.0）。

**支持 DynamoDB Local 吗？**
支持。创建连接时将自定义端点设置为 `http://localhost:8000`。

**可以替代 NoSQL Workbench 吗？**
在查询开发和数据操作方面可以。NoSQL Workbench 有更强大的数据建模器。如果您进行大量数据建模，可以两者并用。

**AWS 凭据存储在哪里？**
加密存储在您的本地设备上，不会传输给包括 DocKit 维护者在内的任何第三方。

---

→ **[DocKit 完整功能概览](/zh/products/dockit/)** · [2026 年最佳 DynamoDB GUI 客户端](/zh/blog/best-dynamodb-gui-client-2026) · [导入导出指南](/zh/blog/dockit-import-export)
