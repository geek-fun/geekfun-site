---
title: "DocKit DynamoDB 管理与指标 - 随时掌控您的表"
description: "DocKit 现在允许您直接从桌面管理 DynamoDB 表并监控关键指标。浏览表、查看容量、跟踪项目数量和管理索引 — 全部免费。"
head:
  - - meta
    - name: keywords
      content: DynamoDB管理GUI, DynamoDB指标桌面, DynamoDB表管理工具, DynamoDB监控工具, 免费DynamoDB GUI, DocKit DynamoDB管理, DynamoDB容量监控, DynamoDB索引管理, 开源DynamoDB客户端
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/blog/dockit-dynamodb-manage-metrics
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/dockit-dynamodb-manage-metrics
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/dockit-dynamodb-manage-metrics
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/dockit-dynamodb-manage-metrics
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "DocKit DynamoDB 管理与指标 - 随时掌控您的表",
        "description": "DocKit 现在允许您直接从桌面管理 DynamoDB 表并监控关键指标。浏览表、查看容量、跟踪项目数量和管理索引 — 全部免费。",
        "image": "https://www.geekfun.club/dockit-dynamodb-manage.png",
        "author": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "url": "https://www.geekfun.club"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GEEKFUN",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.geekfun.club/geekfun.png"
          }
        },
        "datePublished": "2025-03-04",
        "dateModified": "2026-04-08",
        "inLanguage": "zh-CN",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.geekfun.club/zh/blog/dockit-dynamodb-manage-metrics"
        },
        "keywords": ["DocKit", "DynamoDB管理", "监控指标", "表管理"],
        "articleSection": "DocKit Features"
      }
---

# DocKit DynamoDB 管理与指标 - 随时掌控您的表

**DynamoDB** 是一个强大的全托管 NoSQL 数据库 — 但管理它一直需要使用多个工具。AWS 控制台基于浏览器且速度缓慢。AWS CLI 需要每个操作都有精确的语法知识。Dynobase 等商业工具需要月度订阅费。**DocKit 的 DynamoDB 管理和指标面板**为您提供浏览、管理和监控 DynamoDB 表的原生桌面体验 — 完全免费。

## DynamoDB 管理的挑战

DynamoDB 被设计为轻松扩展，但操作可见性并非开箱即用。团队经常遇到痛点：

- **AWS 控制台限制**：Web 界面功能齐全但速度缓慢，需要持续的互联网访问，并且对批量操作的支持有限。
- **没有原生桌面工具**：直到最近，每个免费的 DynamoDB 管理工具都是基于浏览器或仅限 CLI。
- **分散的指标**：容量指标、项目数量和存储数据分散在 DynamoDB 控制台和 CloudWatch 之间 — 需要多个浏览器标签才能获得完整视图。
- **无多环境工作流**：在 AWS 控制台中切换开发、预发布和生产账户意味着反复登录和退出，或维护多个浏览器配置文件。

DocKit 通过提供用于 DynamoDB 表管理和指标的**统一桌面面板**来解决所有这些问题 — 在 macOS、Windows 和 Linux 上原生运行。

## DocKit 的 DynamoDB 管理面板涵盖什么

DocKit 中的管理面板全面覆盖日常 DynamoDB 操作：

- **表浏览**：一目了然地查看您账户和区域中的所有表。
- **创建表**：直接通过 GUI 创建新表，向导引导您完成键架构、计费模式和容量设置。
- **删除表**：通过 GUI 安全删除表，带确认提示。
- **表详情**：查看表状态、创建日期、计费模式和键架构。
- **索引管理**：无需在 AWS 控制台中深挖，即可检查全局二级索引（GSI）和本地二级索引（LSI）。
- **容量监控**：跟踪预置读/写容量单位和按需使用指标。

所有这些都在单个应用程序中可用，从 DocKit 的侧边栏管理到多个 AWS 账户和区域的连接。

## 浏览表

当您打开 DocKit 并选择 DynamoDB 连接时，左侧边栏会显示连接账户和区域中的所有表。您可以：

- 使用搜索框**按名称过滤表**。
- **单击表**立即打开它并开始查询。
- **右键单击表**访问管理操作：查看详情、创建或删除。

对于跨多个表工作的团队，DocKit 的侧边栏按字母顺序组织表并提供实时过滤，即使是有数百个表的账户也可以轻松导航。

## 创建和删除表

### 创建表

单击 DynamoDB 连接面板中的**新建表**按钮打开表创建向导：

1. 输入**表名**。
2. 定义**分区键** — 名称和类型（String、Number 或 Binary）。
3. 可选地添加**排序键**。
4. 选择**计费模式**：预置或按需。
5. 对于预置模式，设置**读写容量单位**（RCU/WCU）。
6. 单击**创建**。表已创建并立即在侧边栏中可用。

### 删除表

右键单击侧边栏中的任何表并选择**删除表**。DocKit 显示带有表名的确认对话框以防止意外删除。此操作不可逆，因此 DocKit 要求您输入表名进行确认。

## 查看表指标

单击表视图中的**指标**标签，查看该表的实时操作数据：

### 项目数量和存储大小

- **项目数量**：表中项目的总数。请注意，这是 DynamoDB 报告的估计值，大约每 6 小时更新一次。
- **表大小**：表消耗的存储空间（字节）。用于跟踪随时间的增长和估算成本。

### 读/写容量

对于**预置**表：
- 当前**读取容量单位（RCU）**：读取的预置吞吐量。
- 当前**写入容量单位（WCU）**：写入的预置吞吐量。
- **自动扩展状态**：是否启用自动扩展以及当前的最小/最大设置。

对于**按需**表：
- DocKit 显示表的计费模式，并注明容量自动扩展。

### 容量模式

DocKit 显示表是否处于**预置**或**按需**（按请求付费）计费模式。您还可以看到：

- 计费模式上次更改的时间。
- 是否应用了**自动扩展策略**。

## 索引管理

DynamoDB 索引对于查询性能至关重要，但由于 AWS 控制台使它们难以浏览，它们经常被忽视。DocKit 的**索引标签**提供了清晰的概览：

### 全局二级索引（GSI）

对于每个 GSI，DocKit 显示：
- **索引名称**
- **分区键**和**排序键**（如果适用）
- **投影类型**：ALL、KEYS_ONLY 或 INCLUDE
- **投影属性**（用于 INCLUDE 投影）
- **索引状态**：ACTIVE、CREATING、UPDATING 或 DELETING
- **项目数量**和**索引大小**（近似值）
- **预置吞吐量**（用于预置计费模式表）

### 本地二级索引（LSI）

LSI 类似地显示，包括其分区键（与表的分区键相同）、排序键和投影详情。

在一个视图中将索引信息与表数据放在一起，消除了开发者通常在 DynamoDB 控制台标签之间切换的上下文。

## DocKit 与 AWS 控制台的 DynamoDB 管理对比

| 功能 | DocKit | AWS 控制台 |
|------|--------|-----------|
| **平台** | 桌面（Mac/Win/Linux） | Web 浏览器 |
| **多账户** | ✅ 侧边栏切换 | ❌ 登录/退出 |
| **表浏览** | ✅ 快速、可过滤 | ✅ 较慢、分页 |
| **创建表** | ✅ 引导向导 | ✅ 多步骤表单 |
| **删除表** | ✅ 带确认 | ✅ 带确认 |
| **查看项目数量** | ✅ | ✅ |
| **查看存储大小** | ✅ | ✅ |
| **查看 GSI/LSI 详情** | ✅ 一键查看 | ✅ 深藏在标签中 |
| **容量指标** | ✅ | ✅（+ CloudWatch） |
| **离线工作** | ✅（DynamoDB Local） | ❌ |
| **价格** | 免费 | 免费 |
| **开源** | ✅ | ❌ |

## 连接到多个 AWS 账户

DocKit 支持同时管理多个 AWS 账户和区域的 DynamoDB。通过连接管理器，您可以配置：

- **AWS 配置文件**：使用来自 `~/.aws/credentials` 或 `~/.aws/config` 的凭证。
- **访问密钥 + 密钥**：直接输入服务账户的凭证。
- **区域**：选择 DynamoDB 可用的任何 AWS 区域。
- **DynamoDB Local**：连接到本地运行的 DynamoDB 实例进行开发。

每个配置的连接都出现在侧边栏中。只需单击即可在生产、预发布和本地环境之间切换 — 无需浏览器登录。

## 开始使用

准备好完全掌控您的 DynamoDB 表了吗？

1. **[下载 DocKit](/zh/download)** — macOS、Windows 和 Linux 免费使用。
2. 按照**[连接到服务器指南](/zh/docs/dockit/connect-to-server)**配置您的 DynamoDB 连接。
3. 打开 **DynamoDB 管理与指标**面板，开始浏览表和监控指标。
4. 查看完整的**[DynamoDB 管理与指标文档](/zh/docs/dockit/dynamodb-manage-metrics)**获取完整参考。

DocKit 是**100% 免费且开源的**（Apache 2.0）。没有订阅、没有功能限制、没有数据离开您的桌面。[立即下载](/zh/download)，以零成本体验专业级 DynamoDB 管理。
