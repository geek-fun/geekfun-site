---
title: 使用 DocKit 访问和管理本地 DynamoDB
description: 学习如何将 DocKit 连接至 DynamoDB Local、使用可视化查询构建器或 PartiQL 编辑器查询表、通过管理面板管理表，以及导入/导出数据用于本地开发。
head:
  - - meta
    - name: keywords
      content: DynamoDB Local GUI, 管理 DynamoDB Local, DocKit DynamoDB Local, DynamoDB Local 导入导出, DynamoDB Local 表管理, DynamoDB Local GUI 客户端, 本地访问 DynamoDB, 离线 DynamoDB 开发, DocKit DynamoDB, PartiQL DynamoDB Local
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/blog/query-dynamodb-locally
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/query-dynamodb-locally
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/query-dynamodb-locally
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/query-dynamodb-locally
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "使用 DocKit 访问和管理本地 DynamoDB",
        "description": "学习如何将 DocKit 连接至 DynamoDB Local、使用可视化查询构建器或 PartiQL 编辑器查询表、通过管理面板管理表，以及导入/导出数据用于本地开发。",
        "image": "https://www.geekfun.club/dockit-connection-dynamodblocal.png",
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
        "dateModified": "2026-05-05",
        "inLanguage": "zh-CN",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.geekfun.club/zh/blog/query-dynamodb-locally"
        },
        "keywords": ["DynamoDB Local", "DynamoDB Local GUI", "DocKit", "管理 DynamoDB Local", "DynamoDB 导入导出", "DynamoDB Local 表管理", "本地开发"],
        "articleSection": "Database Development"
      }
---

# 使用 DocKit 访问和管理本地 DynamoDB

对于用 DynamoDB 的开发者来说，DynamoDB Local 不会陌生——本地跑一个和云上行为一致的端点，免去 AWS 费用和网络延迟。但把端点跑起来只是第一步，接下来的日常交互才是大头：CLI 当然能用，可每次看着原始 JSON、手动拼查询参数、还老忘加 `--endpoint-url`，搞多了确实闹心。**DocKit** 用一个桌面客户端把这些全替你做了——浏览表、写 PartiQL、内联查数据、导入导出管理测试数据。这篇文章把这些串起来讲一遍。

## 快速开始：将 DocKit 连接至 DynamoDB Local

DynamoDB Local 启动后，在 DocKit 中按以下步骤连接：

![DocKit DynamoDB Local 连接界面](/dockit-connection-dynamodblocal.png)

1. 打开 DocKit
2. 点击右下角 **+** 图标，选择 DynamoDB 添加连接
3. 输入连接名称（如 `my-dynamodb-local`），然后点击 **Local** 标签页进行本地连接配置
4. 端点默认为 `http://localhost:8000`，可根据本地服务器配置自行修改
5. DocKit 会加载服务器上的所有表，你也可以选择只关注特定的表
6. 点击 **确认** — 即可开始查询。✅

如需查看完整的本地环境搭建步骤，请参阅 **[如何在本地搭建 DynamoDB Local](/zh/blog/setup-dynamodb-local)**。

## 使用 DocKit 查询 DynamoDB Local

DocKit 提供**可视化查询构建器**和 **PartiQL 编辑器**两种方式。可视化查询构建器支持交互式数据访问，适合不熟悉 CLI 或 SQL 的用户（完全合理）。对于习惯 SQL 的用户——尤其是 DBA——PartiQL 编辑器提供智能自动补全和带自动分页的整洁结果表格。

选哪种方式没有标准答案，跟着感觉走就好。

### 可视化查询构建器

![DocKit DynamoDB 可视化查询构建器截图](/dockit-dynamodb-visual-query-builder.png)

### PartiQL 编辑器

DocKit 的 PartiQL 编辑器在本地和云端 DynamoDB 上行为完全一致：

![DocKit DynamoDB PartiQL 编辑器截图](/dockit-dynamodb-sql-editor.png)

常用编辑器快捷键（`Cmd+Enter` 执行、`Cmd+I` 格式化、`Cmd+Space` 自动补全）在此处同样适用。查看[完整快捷键参考](/zh/docs/dockit/shortcut)了解所有可用快捷键。

## 使用 DocKit 管理 DynamoDB Local

连接成功后，DocKit 提供完整的本地 DynamoDB 管理界面——日常操作无需 CLI。

### 表管理面板

管理面板工具栏让你一览并管理本地实例上的所有表：

![DocKit DynamoDB 本地管理面板截图](/dockit-dynamodb-manage-local.png)

- **浏览表** — 查看所有表的键结构、计费模式和数据量
- **创建表** — 通过引导式表单定义分区键、排序键和 GSI，无需编写 JSON 或 CLI 命令
- **删除表** — 右键任意表即可立即删除
- **查看表详情** — 内联查看完整元数据、属性定义和索引配置

### 导入与导出数据

本地开发中，团队经常写一些临时的 seed 脚本来灌数据——脚本躺在某个人的本地目录里，换个环境就挂，别人也不知道怎么跑。DocKit 的导入/导出面板直接从 GUI 搞定表备份、环境迁移和测试数据共享，省去这些麻烦。

![DocKit DynamoDB 导入导出截图](/dockit-dynamodb-import-export.png)

**从本地 DynamoDB 导出数据：**

1. 点击导航栏中的 **Import/Export** 图标，打开导入/导出面板
2. 选择 **Export**，跳转至导出面板
3. 按步骤指引选择源连接和表、Schema 与结构、以及目标输出（含导出文件类型和路径）
4. 点击 **Start Export** 启动任务，可在 Task Manager 中查看所有运行中的任务及历史记录

导出的数据可按需轻松导入到任意目标 DynamoDB 表。

**向本地 DynamoDB 导入数据：**

1. 在同一导入/导出面板中，点击 **Import**
2. 按指引选择目标连接和 DynamoDB 表
3. 上传 Schema（仅在同时导入并建表时需要）和数据文件
4. 点击 **Start Import** 启动任务

### 数据浏览与编辑

DocKit 将数据项渲染为带内联 JSON 展开的格式化表格，比原始 CLI 输出更容易发现数据结构问题：

![DocKit DynamoDB 编辑数据项截图](/dockit-dynamodb-edit-item.png)

- **内联编辑** — 双击任意字段即可原地修改
- **删除数据项** — 选中一行或多行，一键删除
- **复制为 JSON** — 将任意数据项复制到剪贴板，用于测试或文档

## 差异：本地 vs. 云端 DynamoDB

### 本地不可用的功能

❌ **DynamoDB Streams**：无流处理
❌ **全局表**：无多区域复制
❌ **时间点恢复**：无备份
❌ **Auto Scaling**：无容量管理
❌ **CloudWatch 指标**：无监控
❌ **IAM 身份验证**：始终使用占位凭证

### 行为差异

⚠️ **最终一致性**：本地始终是强一致性
⚠️ **容量单位**：被忽略（无限流）
⚠️ **数据持久化**：取决于配置（内存模式 vs. 文件模式）

**建议：** 99% 的开发使用本地，在预发布环境中验证生产行为。

## 总结

DynamoDB Local 本身只是一个端点。DocKit 让它感觉像一个真正的开发环境。可视化构建器或 PartiQL 查询、导入/导出做数据管理、不碰 CLI 直接看表结构——全在一个桌面应用里完成。

如果你还没搭好 DynamoDB Local，先看 **[如何在本地搭建 DynamoDB Local](/zh/blog/setup-dynamodb-local)**。搭好之后，[下载 DocKit](/zh/download)，一分钟内完成连接。

## 了解更多

- **[如何在本地搭建 DynamoDB Local](/zh/blog/setup-dynamodb-local)** — 完整本地环境搭建指南
- **[使用 DocKit 管理 DynamoDB 表](/zh/blog/dynamodb-gui-client)** — DocKit DynamoDB 功能概览
- **[下载 DocKit](/zh/download)** — 立即开始

*最后更新：2026 年 5 月*
