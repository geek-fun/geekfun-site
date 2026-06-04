---
title: DocKit 1.1 — Agentic Data Studio、MongoDB 与 EasySearch
description: DocKit v1.1 发布，新增 MongoDB 和 EasySearch 支持、Agentic Data Studio 含 28+ 代理工具、12 种 AI 提供商、AWS SSO、完整 DynamoDB 表生命周期管理、导入导出向导等。v1.0 以来最大更新。
date: 2026-06-04
head:
  - - meta
    - name: keywords
      content: DocKit 1.1, DocKit MongoDB, Agentic Data Studio, AI 数据库代理, NoSQL GUI, EasySearch, DynamoDB 表生命周期, 导入导出向导, AWS SSO, MongoDB GUI 客户端
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/blog/introducing-dockit-v1
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/introducing-dockit-v1
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/introducing-dockit-v1
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/introducing-dockit-v1
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "DocKit 1.1 — Agentic Data Studio、MongoDB 与 EasySearch",
        "description": "DocKit v1.1 发布，新增 MongoDB 和 EasySearch 支持、Agentic Data Studio 含 28+ 代理工具、12 种 AI 提供商、AWS SSO、完整 DynamoDB 表生命周期管理、导入导出向导等。",
        "image": "https://www.geekfun.club/dockit-client-ui.png",
        "author": {
          "@type": "Organization",
          "name": "极客范",
          "url": "https://www.geekfun.club"
        },
        "publisher": {
          "@type": "Organization",
          "name": "极客范",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.geekfun.club/geekfun.png"
          }
        },
        "datePublished": "2026-06-04",
        "dateModified": "2026-06-04",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.geekfun.club/zh/blog/introducing-dockit-v1"
        },
        "keywords": ["DocKit", "MongoDB GUI", "Agentic Data Studio", "NoSQL", "Elasticsearch 客户端", "DynamoDB 工具", "AI 代理", "开源"],
        "articleSection": "产品发布"
      }
---

# DocKit 1.1 — Agentic Data Studio、MongoDB 与 EasySearch

> MongoDB 支持。EasySearch 支持。Agentic Data Studio 含 28+ 代理工具。12 种 AI 提供商。完整 DynamoDB 表生命周期。AWS SSO。导入导出向导。后台任务。文件浏览器。

v1.0 打下了稳定的基础。v1.1 让它成为你离不开的数据库客户端——因为这里的每一个功能都来自对人们实际工作方式的观察。

## MongoDB 来了

呼声最高的功能。MongoDB 已完全接入：支持 SCRAM 认证、URI 直通和无认证三种连接方式。TLS 开关、副本集 URI、认证来源配置一应俱全。

查询编辑器支持 find、aggregate、insert、update 和 delete 操作，结果格式化显示。管理视图提供集合统计、索引管理、服务器状态、副本集健康和分片集群信息。

MongoDB 不是后加的插件。它与所有其他数据库共享相同的查询历史、导入导出和 Agentic Data Studio 基础设施。

## Agentic Data Studio

v1.1 最大的变化。v1.0 的 AI 助手只是一个查询生成器。Data Studio 是一个自主代理，用自然语言与数据库对话——它能写查询、检查表结构、更新文档、删除记录、创建索引，覆盖 MongoDB、DynamoDB、Elasticsearch、OpenSearch 和 EasySearch。

**28+ 工具**按数据库类型组织，每个工具有内置风险等级：安全（只读）、升高（创建/更新）、破坏性（删除）。每个工具需要匹配的权限才能运行。

权限模式让你决定代理的自主程度：
- **询问模式**：每个非只读工具执行前提示允许或拒绝
- **自动模式**：会话有足够权限时自动执行

按源权限——每个附加数据库有独立的读取/创建/更新/删除控制。确认规则可自动允许安全操作或完全阻止危险操作。

**12+ AI 提供商**——OpenAI、Anthropic、DeepSeek、OpenRouter、Google Gemini、Grok、Mistral、Azure OpenAI、Ollama、LM Studio，以及自定义端点。可为 Data Studio 和侧边栏助手分别路由不同的模型。

代理在迭代循环中运行，配有可配置的预算（最大迭代次数、运行时间、Token）。长对话自动压缩以管理 Token 用量。完整结果保存在本地——只有截断的摘要发送给 LLM。

## 12 种 AI 提供商

v1.0 只有 OpenAI 和 DeepSeek。v1.1 新增 Anthropic、OpenRouter、Google Gemini、Grok、Mistral、Azure OpenAI、Ollama 和 LM Studio。每个提供商可配置自己的 API Key、基础 URL 和代理。DocKit 自动发现可用模型并允许路由到特定功能。

侧边栏助手是一个轻量级聊天面板，可从应用任意位置调用。它与 Data Studio 共享提供商，但以单轮问答方式运行。

## DynamoDB 完整生命周期

表管理现在覆盖完整生命周期：4 步创建向导（基本信息、容量、索引与流、确认），修改计费模式、表类、Auto Scaling、GSI/LSI、TTL、Point-in-Time Recovery、流、加密（AWS 自有密钥/KMS/CMK）、删除保护和标签。CloudWatch 指标——读写容量使用率、节流事件、已消耗 RCU/WCU——直接在应用内查看。清空和删除操作配有安全保护。

可视化查询构建器支持 13+ 种过滤运算符，覆盖分区键、排序键和 GSI 查询。PartiQL 编辑器配 Monaco 语法高亮。支持行内 CRUD 操作。

## AWS SSO 和 Profile 认证

DynamoDB 连接现在支持 AWS IAM Identity Center（SSO）设备授权流程和缓存会话。AWS Profile 认证从 `~/.aws/credentials` 和 `~/.aws/config` 读取凭证，支持源角色链、SSO 配置文件和 MFA 设置。

## 导入导出向导

旧版单对话框导入导出已升级为多步向导。选择数据源和范围，查看带字段映射（匹配/新增/排除）的 schema，选择输出格式和目标，然后作为后台任务执行，实时显示进度。元数据导出会生成 `metadata.json` 文件，方便无缝重新导入。支持 JSON、CSV、JSONL 和 Elasticsearch Bulk 格式。

后台任务在任务管理器面板中运行——启动导入，切换到查询，检查进度。无需等待。

## EasySearch 支持

EasySearch 加入 Elasticsearch 和 OpenSearch 成为受支持的搜索引擎。同样的代理工具、同样的导入导出、同样的查询编辑器。三者共享 16 个代理工具，涵盖搜索、文档 CRUD、索引管理、别名操作和字段映射。

## Elasticsearch 集群管理，更加深入

分片视图现在暴露分片级详细指标：文档数、存储大小、完成情况、字段数据、查询缓存、查询速率、索引统计、合并状态、刷新/冲洗指标、段信息和建议操作。模板管理覆盖可组合索引模板、组件模板和传统模板。别名管理支持创建、原子切换和删除操作。

ES|QL 补全已内置，与现有的语法驱动补全引擎并存。

## 带收藏的查询历史

MongoDB、DynamoDB、Elasticsearch、OpenSearch 和 EasySearch 的每个查询都自动记录。星标收藏重要查询。按路径、方法、内容或连接搜索。展开任意条目查看完整详情。可配置历史容量（最多 1000 条）。

## 文件浏览器

直接在应用内浏览、创建和组织本地查询文件（`.search`、`.partiql`、`.mongo`）。以编辑器标签页形式打开文件。按名称、日期或大小排序。

## 其他变化

- **MongoDB 连接**支持 SCRAM、URI 和无认证模式。认证来源和认证机制可配置。TLS 开关。
- **MongoDB 集合操作**——创建、删除、重命名、克隆、清空。索引管理支持升序、降序、文本、哈希、2dsphere 类型。唯一、稀疏和 TTL 约束。
- **MongoDB 副本集监控**——成员、主/从/仲裁节点、复制延迟。
- **MongoDB 分片集群状态**。
- **MongoDB 服务器状态和数据库/集合统计**。
- **MongoDB 行内文档 CRUD**，支持 JSON、表格和树状视图。
- **连接克隆**——一键复制任意连接。
- **Elasticsearch 和 OpenSearch 的可组合模板支持**。

## 数据对比

| 指标 | v1.0 | v1.1 |
|------|------|------|
| 支持的数据库 | 3 | 5 |
| AI 提供商 | 2 | 12+ |
| 代理工具 | — | 28+ |
| 连接认证方式 | 4 | 9 |
| 查询历史条目 | 500 | 1000 |
| 导入格式 | 3 | 4 |
| 语言 | 2 | 2 |

---

DocKit 采用 Apache 2.0 许可。免费开源版本功能完整——无功能限制、无注册门槛、无遥测。

[下载 DocKit 1.1](/zh/products/dockit/) 支持 macOS、Windows 和 Linux。

[查看 GitHub 仓库](https://github.com/geek-fun/dockit)。

[阅读完整更新日志](https://github.com/geek-fun/dockit/blob/main/CHANGELOG.md)。
