---
title: "DocKit 导入导出指南"
description: "使用 DocKit 从 Elasticsearch、OpenSearch 和 DynamoDB 导入和导出数据的分步指南。"
head:
  - - meta
    - name: keywords
      content: DocKit导入导出, 导出Elasticsearch数据, 导入DynamoDB数据, NoSQL数据迁移, DocKit数据指南
  - - meta
    - name: robots
      content: noindex, follow
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/docs/dockit/import-export
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/dockit/import-export
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/dockit/import-export
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/dockit/import-export
---

# DocKit 导入导出指南

DocKit 支持以 JSON、CSV 和 Elasticsearch Bulk 格式从 Elasticsearch、OpenSearch 和 DynamoDB 导入和导出数据。本指南涵盖两种操作的完整工作流程。

## 前提条件

在使用导入/导出功能之前，请确保您具备：

- 机器上已安装 DocKit。请参阅[安装指南](/zh/docs/dockit/installation)。
- 已配置到 Elasticsearch、OpenSearch 或 DynamoDB 实例的连接。请参阅[连接到服务器指南](/zh/docs/dockit/connect-to-server)。
- 导出文件有足够的磁盘空间（估算：与压缩的索引/表大小大致相同）。
- 源索引/表的读取权限，以及目标索引/表的写入权限。

## 从 Elasticsearch / OpenSearch 导出数据

### 步骤 1：打开索引

1. 启动 DocKit 并从侧边栏选择您的 Elasticsearch 或 OpenSearch 连接。
2. 展开连接查看索引列表。
3. 单击要导出的索引将其打开。

### 步骤 2：打开导出对话框

单击索引工具栏中的**导出**按钮，或右键单击侧边栏中的索引名称并选择**导出**。

### 步骤 3：配置导出选项

在导出对话框中：

- **格式**：从 **JSON**、**CSV** 或 **Elasticsearch Bulk** 中选择。
  - 使用 **JSON** 进行完整保真度的导出，保留嵌套对象。
  - 使用 **CSV** 处理需要在电子表格中打开的扁平数据。
  - 使用 **Elasticsearch Bulk** 可最快地重新导入到另一个 Elasticsearch/OpenSearch 集群。
- **查询过滤器**（可选）：输入 QDSL 查询，仅导出匹配的文档。留空则导出所有文档。
- **字段**（可选）：指定要包含的字段的逗号分隔列表。留空则导出所有字段。
- **输出文件**：在本地机器上选择目标文件路径。

### 步骤 4：运行导出

单击**导出**。DocKit 使用 scroll API 从 Elasticsearch 流式传输文档并写入输出文件。进度条显示：

- 迄今为止导出的文档数
- 文档总数（估计值）
- 已用时间

导出不支持断点续传：如果 DocKit 在导出中途关闭，重新运行相同的导出会从头开始，并覆盖已有的输出文件。

### 步骤 5：验证导出

导出完成后，DocKit 显示摘要：导出的文档总数、文件大小和已用时间。您可以在任何文本编辑器或电子表格应用程序中打开文件以验证内容。

## 从 DynamoDB 导出数据

### 步骤 1：打开表

1. 启动 DocKit 并选择您的 DynamoDB 连接。
2. 在侧边栏中，单击要导出的表。

### 步骤 2：打开导出对话框

单击表工具栏中的**导出**按钮，或右键单击表名称并选择**导出**。

### 步骤 3：配置导出选项

- **格式**：选择 **JSON** 或 **CSV**。（Bulk 格式特定于 Elasticsearch。）
- **过滤器表达式**（可选）：输入 DynamoDB 过滤器表达式，仅导出匹配的项目。
- **索引**（可选）：选择扫描主索引或全局二级索引。
- **输出文件**：选择目标文件路径。

### 步骤 4：运行导出

单击**导出**。DocKit 对表执行分页扫描并将结果写入输出文件。导出遵守 DynamoDB 的读取吞吐量限制以避免节流。

## 将数据导入 Elasticsearch / OpenSearch

### 步骤 1：准备目标索引

确保目标索引存在于您的 Elasticsearch/OpenSearch 集群中。如果不存在，请先通过 DocKit 或 Elasticsearch API 创建它。为获得最佳结果，请在导入前定义索引映射，以确保正确的字段类型。

### 步骤 2：打开导入对话框

在 DocKit 中选择目标索引，然后单击工具栏中的**导入**按钮，或右键单击索引并选择**导入**。

### 步骤 3：选择源文件

浏览到要导入的 JSON、CSV 或 Elasticsearch Bulk 文件。DocKit 根据文件扩展名和内容自动检测格式。

### 步骤 4：配置导入选项

- **批次大小**：每个 `_bulk` 请求发送的文档数。默认：500。在高吞吐量集群上增加以加快导入速度；如果出现超时错误则减少。
- **并发**：并行批量请求的数量。默认：2。
- **列映射**（仅 CSV）：将 CSV 列名映射到 Elasticsearch 字段名，并为每列选择字段类型。
- **跳过错误**：如果启用，DocKit 跳过索引失败的文档并将其记录到错误文件中。如果禁用，导入在第一个错误时停止。

### 步骤 5：运行导入

单击**导入**。DocKit 读取源文件并使用 `_bulk` API 将文档发送到 Elasticsearch。进度指示器显示已导入的文档、遇到的错误和已用时间。

### 步骤 6：查看错误日志

如果任何文档导入失败，DocKit 在源文件同一目录中创建错误日志文件（例如 `data.json.errors.json`）。错误日志中的每个条目包含原始文档和 Elasticsearch 错误消息。您可以通过直接导入错误日志文件来重试失败的文档。

## 将数据导入 DynamoDB

### 步骤 1：准备目标表

确保目标表存在于 DynamoDB 中。如果不存在，请通过 DocKit 的 [DynamoDB 管理面板](/zh/docs/dockit/dynamodb-manage-metrics)或 AWS 控制台创建它。

### 步骤 2：打开导入对话框

在 DocKit 中选择目标表，然后单击工具栏中的**导入**。

### 步骤 3：选择源文件

浏览到您的 JSON 或 CSV 文件。

### 步骤 4：配置导入选项

- **列映射**（仅 CSV）：将 CSV 列映射到 DynamoDB 属性名称，并为每列选择属性类型（S、N、BOOL、L、M 等）。
- **批次大小**：每个 `BatchWriteItem` 请求的项目数。默认：25（DynamoDB 最大值）。
- **跳过错误**：将失败的项目记录到错误文件并继续，而不是在第一个错误时停止。

### 步骤 5：运行导入

单击**导入**。DocKit 并行发送 `BatchWriteItem` 请求，遵守 DynamoDB 的速率限制。进度指示器显示已写入的项目和任何错误。

## 支持的格式

| 格式 | 导入 | 导出 | ES/OS | DynamoDB | 说明 |
|------|------|------|-------|----------|------|
| JSON | ✅ | ✅ | ✅ | ✅ | 完整保真度，支持嵌套对象 |
| CSV | ✅ | ✅ | ✅ | ✅ | 仅扁平数据；导入时需要列映射 |
| Elasticsearch Bulk | ✅ | ✅ | ✅ | ❌ | ES/OS 迁移最快 |

## 故障排除

### 导出失败，提示"scroll context missing"

当 Elasticsearch scroll 上下文在大型导出期间过期时会发生这种情况。DocKit 使用新的 scroll 上下文自动重试。如果频繁发生，请检查 Elasticsearch `scroll` 超时是否设置为至少 `5m`。

### 导入速度慢

- 将**批次大小**增加到每个请求 1000–2000 个文档。
- 将**并发**增加到 4–8 个并行请求。
- 确保目标集群不在高负载下运行。
- 对于 DynamoDB，检查表是否有足够的预置写入容量或处于按需模式。

### CSV 导入显示类型不正确

使用**列映射对话框**为每个 CSV 列明确设置类型。DocKit 对无法自动检测的列默认使用 String 类型。

### DynamoDB 导入因吞吐量超限而失败

降低批次大小或减少并发。或者，在导入前将 DynamoDB 表切换到**按需**计费模式以避免节流。

### 导出后找不到文件

检查您在导出对话框中指定的输出路径。如果路径包含不存在的目录，DocKit 将静默失败。确保在导出前所有父目录都存在。
