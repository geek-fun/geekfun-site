---
title: DocKit Query DSL 编辑器 | Elasticsearch、OpenSearch 和 EasySearch
description: 在 DocKit 中执行 Query DSL 请求，使用基于索引映射的自动补全，查看和导出结果，并复用请求。
---

# 使用搜索查询编辑器

DocKit 的搜索编辑器可以向 [Elasticsearch、OpenSearch 和 EasySearch](/zh/docs/dockit/connect-to-server) 发送 REST 请求。可以搜索索引或查看映射，结果面板会显示服务器的响应。编辑器支持 Query DSL、JSON5 输入和注释。

## 运行只读请求

选中连接后打开搜索编辑器。将下面的 `orders` 替换为有权读取的索引。将光标放到请求内，按 macOS 的 `⌘ + Enter` 或 Windows、Linux 的 `Ctrl + Enter`。也可以点击请求旁的运行按钮。

```http
POST /orders/_search
{
  "size": 10,
  "query": { "match_all": {} }
}
```

每条请求从新的一行开始，先写 HTTP 方法和路径。如果有请求体，就写在下面。逐条运行前，先确认选中了哪个连接。

## 编写和查看请求

- 使用自动补全查找 REST 接口和索引映射中的字段。如果系统没有占用快捷键，可按 `⌘ + Space` 或 `Ctrl + Space` 手动打开补全。
- 按 `⌘ + I` 或 `Ctrl + I` 格式化当前请求。可通过请求旁的菜单复制为 cURL，分享前请先检查复制的内容。
- 在结果面板查看响应，通过其中的复制和导出按钮保存返回数据。要将整个索引导出为文件，请打开[导入与导出](/zh/docs/dockit/import-export)。
- 将请求保存为 `.search` 文件，或从[查询历史](/zh/docs/dockit/query-history)重新打开。切换请求的操作见[快捷键](/zh/docs/dockit/shortcut)。

集群健康、节点、分片、别名和模板等操作见[集群管理](/zh/docs/dockit/manage-elasticsearch-cluster)。管理工作区需要旗舰版。
