---
title: OpenSearch GUI 客户端 — DocKit 桌面版 Mac / Windows / Linux
description: DocKit 是一款开源 OpenSearch GUI 客户端，也是 OpenSearch Dashboards 的桌面替代方案。Monaco 编辑器、AI 查询助手、集群管理，本地化持久化存储。Apache 2.0 开源。
sidebar: false
head:
  - - meta
    - name: keywords
      content: opensearch gui客户端, opensearch桌面客户端, opensearch dashboards替代方案, aws opensearch客户端, opensearch查询工具, opensearch集群管理, 开源opensearch客户端, opensearch mac客户端
  - - link
    - rel: canonical
      href: https://www.geekfun.club/products/dockit/opensearch-gui-client
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/products/dockit/opensearch-gui-client
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/products/dockit/opensearch-gui-client
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/products/dockit/opensearch-gui-client
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "DocKit",
        "alternateName": "OpenSearch GUI 客户端",
        "description": "开源桌面 OpenSearch GUI 客户端，支持 AI 查询生成、Monaco 编辑器、集群管理和本地化持久化存储。适用于 Mac、Windows 和 Linux 的 OpenSearch Dashboards 替代方案。",
        "applicationCategory": "DatabaseApplication",
        "operatingSystem": "Windows, macOS, Linux",
        "offers": { "@type": "Offer", "priceCurrency": "USD" },
        "downloadUrl": "https://www.geekfun.club/download",
        "author": { "@type": "Organization", "name": "GEEKFUN", "url": "https://www.geekfun.club" },
        "license": "https://github.com/geek-fun/dockit/blob/main/LICENSE",
        "sameAs": ["https://github.com/geek-fun/dockit"]
      }
---

# OpenSearch GUI 客户端

**DocKit** 是一款适用于 Mac、Windows 和 Linux 的开源桌面 **OpenSearch GUI 客户端**。它替代 OpenSearch Dashboards 承担日常查询工作——启动更快、内存更低，查询作为本地文件存储，可直接提交到 Git。

<div style="display:flex;gap:12px;margin:1.5rem 0">
  <a href="/zh/download" style="padding:10px 20px;background:var(--vp-c-brand-1);color:#fff;border-radius:6px;font-weight:600;text-decoration:none">下载</a>
  <a href="https://github.com/geek-fun/dockit" style="padding:10px 20px;border:1px solid var(--vp-c-border);border-radius:6px;font-weight:600;text-decoration:none" target="_blank" rel="noopener">在 GitHub 上查看</a>
</div>

## 为什么需要 OpenSearch 桌面客户端？

OpenSearch Dashboards 是 OpenSearch 集群的标准 Web 界面。但在查询开发中，运行成本高昂——启动需要 10–30 秒，内存占用 500 MB 以上，还需要在集群旁边单独运行 Dashboards 实例。专用 OpenSearch GUI 客户端 2 秒内即可启动，内存仅约 150 MB，完全支持离线使用。

DocKit 专为那些大部分时间都在查询编辑器中工作、而非构建仪表板的工程师而设计。

## DocKit 中的 OpenSearch 功能

### 基于 Monaco 的查询编辑器

Dev Tools 编辑器基于 Monaco（VS Code 引擎）构建：

- **JSON5 语法** — 无需严格 JSON 双引号规则，支持 `//` 行内注释
- **字段和索引自动补全**，来自您的实时集群 mapping
- **语法高亮和验证**，适用于 OpenSearch Query DSL
- **自动格式化**，一键复制为 `curl` 命令
- `Cmd/Ctrl + Enter` 执行查询

### AI 查询助手

用自然语言输入需求——"查找上周超过 100 美元的所有订单"——DocKit 自动生成 OpenSearch DSL。AI 以您的真实索引 mapping 为上下文，确保查询中的字段名和类型与您的实际数据完全匹配。支持 OpenAI 和 DeepSeek，您的数据始终留在本地。

### 集群管理

浏览所有索引的实时健康状态、文档数量和存储统计信息。管理 mapping、settings、索引模板和别名。监控节点健康、分片分配和长时间运行的任务。

### 导入与导出

将整个索引导出为 JSON、CSV 或 JSONL（bulk API 格式）。导入数据文件时自动检测类型。使用 scroll API 可靠处理数千万条记录。

### 查询历史

每次执行的查询均自动保存到本地可搜索历史记录中，无需手动保存。支持一键复制、重新执行或加载回编辑器。

### 多集群支持

保存无限量连接配置，即时切换开发、测试和生产集群。支持 Basic Auth、API Key，以及本地开发的免认证模式。

## 对比：DocKit 与其他 OpenSearch GUI 客户端

| | DocKit | OpenSearch Dashboards | Elasticvue |
|---|---|---|---|
| **平台** | 桌面（原生） | Web（浏览器） | Web / 插件 |
| **启动时间** | < 2 秒 | 10–30 秒 | < 5 秒 |
| **内存** | ~150 MB | 500 MB+ | ~200 MB |
| **Dev Tools 编辑器** | ✅ Monaco + JSON5 | ✅ 基础版 | ✅ 基础版 |
| **AI 助手** | ✅ | ❌ | ❌ |
| **离线模式** | ✅ | ❌ | ❌ |
| **查询持久化** | ✅ 本地文件 | 有限 | ❌ |
| **DynamoDB 支持** | ✅ | ❌ | ❌ |
| **Elasticsearch 支持** | ✅ | ❌ | ✅ |
| **开源协议** | ✅ Apache 2.0 | ✅ Apache 2.0 | ✅ MIT |

## OpenSearch 版本兼容性

DocKit 使用标准 OpenSearch REST API，支持 **OpenSearch 1.x 至 3.x**，包括 AWS OpenSearch Service。自托管集群和托管云部署均可使用。如遇兼容性问题，欢迎[在 GitHub 上提交 issue](https://github.com/geek-fun/dockit/issues)。

## 快速开始

1. **[下载 DocKit](/zh/download)**（macOS Apple Silicon + Intel、Windows 或 Linux）
2. 打开 DocKit → 点击**新建连接** → 选择 OpenSearch
3. 输入主机地址、端口和凭据
4. 点击**连接** — 索引加载到侧边栏
5. 打开 **Dev Tools** 开始查询

详细配置请参阅[连接指南](/zh/docs/dockit/connect-to-server)。

## 常见问题

**DocKit 能替代 OpenSearch Dashboards 吗？**
在查询开发和索引管理方面，可以。在可视化、可观测性和安全管理方面，仍需要 Dashboards。许多团队两者并用。

**支持 AWS OpenSearch Service 吗？**
是的，通过 HTTPS 使用您的 IAM 凭据或 API 密钥进行连接即可。

**同样支持 Elasticsearch 吗？**
是的——DocKit 在同一应用中支持 Elasticsearch、OpenSearch 和 DynamoDB。请参阅 [Elasticsearch GUI 客户端页面](/zh/products/dockit/elasticsearch-gui-client)。

**凭据存储在哪里？**
加密存储在您的本地设备上，不会传输到任何地方。

---

→ **[DocKit 完整功能概览](/zh/products/dockit/)** · [OpenSearch GUI 深度解析](/zh/blog/opensearch-gui) · [Elasticsearch AI 助手](/zh/blog/elasticsearch-ai-assistant)
