---
title: "DocKit 导入导出 - 跨 NoSQL 数据库无缝迁移数据"
description: "了解如何在 DocKit 中导入和导出数据 - 这是适用于 Elasticsearch、OpenSearch 和 DynamoDB 的免费开源 GUI 客户端。支持 JSON、CSV 和批量导入/导出。"
head:
  - - meta
    - name: keywords
      content: DocKit导入导出, Elasticsearch导入数据, Elasticsearch导出数据, DynamoDB导入导出, NoSQL数据迁移, Elasticsearch批量导入, JSON导出Elasticsearch, CSV导出DynamoDB, 开源数据迁移工具, DocKit数据传输
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/blog/import-export
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/blog/import-export
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/blog/import-export
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/blog/import-export
---

# DocKit 导入导出 - 跨 NoSQL 数据库无缝迁移数据

**数据可移植性**是任何严肃数据库工作流的基石。无论您是在集群之间迁移、为测试环境填充数据，还是在升级前创建备份，您都需要一种可靠的方式在 NoSQL 数据库中导入和导出数据，而无需编写自定义脚本或与云控制台博弈。**DocKit 的导入/导出功能**将这种能力直接内置在您的桌面客户端中 — 免费、开源，且完全在本地运行。

## 为什么数据可移植性很重要

现代开发团队在多种环境中工作：本地开发、预发布、预生产和生产环境。保持这些环境中数据的一致性 — 或将生产数据的代表性快照移动到较低环境中进行测试 — 是一项频繁且痛苦的任务。

**需要导入/导出的常见场景：**

- **集群迁移**：从 Elasticsearch 7 迁移到 Elasticsearch 8，或从自托管集群迁移到 Amazon OpenSearch Service 等托管云产品。
- **测试数据填充**：在 QA 冲刺前用真实数据填充预发布索引或 DynamoDB 表。
- **升级前备份**：在运行有风险的架构更改前导出完整的索引或表快照。
- **跨区域复制**：用现有数据集引导新区域。
- **数据共享**：以 JSON 或 CSV 等标准格式将数据集交给同事或客户。

没有专用的 GUI 工具，开发者通常求助于 `elasticdump`、自定义 Python 脚本，或结合 shell 管道的 `aws dynamodb scan` — 所有这些都需要本地工具设置、仔细的错误处理，以及对 API 格式的深入了解。DocKit 消除了这种摩擦。

## DocKit 支持哪些格式

DocKit 的导入/导出引擎支持三种广泛使用的数据格式：

| 格式 | 导入 | 导出 | 最适合 |
|------|------|------|--------|
| **JSON** | ✅ | ✅ | 人类可读、完整保真度的数据 |
| **CSV** | ✅ | ✅ | 电子表格工作流、扁平数据 |
| **Elasticsearch Bulk** | ✅ | ✅ | 大规模 ES/OpenSearch 迁移 |

**JSON** 保留嵌套对象、数组和所有原生数据类型。它是在 NoSQL 数据库之间往返传输数据最可靠的格式。

**CSV** 非常适合需要在电子表格中打开、与非工程师共享或导入分析工具的扁平数据。DocKit 在导入时自动处理列映射和类型转换。

**Elasticsearch Bulk 格式**使用原生 Elasticsearch `_bulk` API 格式 — 每行在操作/元数据 JSON 对象和源 JSON 对象之间交替。这种格式是将大量数据直接加载到 Elasticsearch 或 OpenSearch 的最快方式。

## 如何从 Elasticsearch / OpenSearch 导出数据

在 DocKit 中从 Elasticsearch 或 OpenSearch 导出索引是一个简单的过程：

1. **打开 DocKit** 并连接到您的 Elasticsearch 或 OpenSearch 集群。如需帮助，请参阅[连接指南](/zh/docs/dockit/connect-to-server)。
2. 在左侧边栏中，展开集群并选择要导出的**索引**。
3. 单击工具栏中的**导出**按钮（或右键单击索引并选择**导出**）。
4. 在导出对话框中，选择您的**输出格式**：JSON、CSV 或 Bulk。
5. 可选地应用**查询过滤器**以仅导出文档的一个子集 — 当您想导出符合特定条件的文档而不导出整个索引时非常有用。
6. 在本地文件系统上选择**输出路径**。
7. 单击**导出**。DocKit 从 Elasticsearch 流式传输数据并以所选格式写入磁盘。进度条显示已导出的文档数量。

**大型导出提示：**
- 对于拥有数百万文档的索引，使用 **Bulk 格式** — 它更快，需要更少的后处理。
- 当完整导出不切实际时，应用**日期范围过滤器**以仅导出最近的文档。
- DocKit 内部使用 Elasticsearch 的 scroll API，因此即使是非常大的索引也能可靠导出，不会触及内存限制。

## 如何从 DynamoDB 导出数据

导出 DynamoDB 表遵循类似的流程：

1. **打开 DocKit** 并连接到您的 AWS 账户或 DynamoDB Local 实例。有关 DynamoDB 特定设置，请参阅[连接指南](/zh/docs/dockit/connect-to-server)。
2. 在左侧边栏中，选择要导出的**表**。
3. 单击工具栏中的**导出**按钮。
4. 选择 **JSON** 或 **CSV** 作为输出格式。（Bulk 格式特定于 Elasticsearch，不适用于 DynamoDB。）
5. 可选地添加**过滤器表达式**以仅导出匹配的项目。
6. 选择**输出文件路径**。
7. 单击**导出**。DocKit 执行完整表扫描并将结果写入磁盘。

**DynamoDB 导出提示：**
- 对于具有**二级索引**的表，您可以选择基于 GSI 扫描而不是主键扫描来导出结果。
- 大型表受益于 DocKit 的**分页扫描**方法，避免了 DynamoDB 的每请求项目限制。
- 导出的 JSON 保留 DynamoDB 的原生属性类型（`S`、`N`、`BOOL`、`L`、`M` 等），因此数据可以准确地往返传输。

## 如何导入数据

### 导入到 Elasticsearch / OpenSearch

1. 在 DocKit 中，连接到**目标** Elasticsearch 或 OpenSearch 集群。
2. 选择或创建**目标索引**。
3. 单击工具栏中的**导入**按钮。
4. 选择文件系统上的**源文件**（JSON、CSV 或 Bulk 格式）。
5. DocKit 自动检测文件格式。对于 CSV 文件，**列映射对话框**允许您将 CSV 列映射到 Elasticsearch 字段名称和类型。
6. 配置**批次大小**（默认：每批 500 个文档）和**并发**设置以获得最佳吞吐量。
7. 单击**导入**。DocKit 使用 `_bulk` API 以指定的批次大小将数据发送到 Elasticsearch。实时进度指示器显示已导入的文档数量和任何错误。

### 导入到 DynamoDB

1. 在 DocKit 中，连接到**目标** AWS 账户。
2. 在侧边栏中选择**目标表**。
3. 单击**导入**按钮。
4. 选择您的**源文件**（JSON 或 CSV）。
5. 对于 CSV 导入，将列映射到 DynamoDB 属性名称并为每列选择属性类型。
6. 单击**导入**。DocKit 并行发送 `BatchWriteItem` 请求，遵守 DynamoDB 的速率限制。

**处理导入错误：**
- DocKit 将任何失败的项目（包括其主键和错误原因）记录到导入文件旁边的**错误日志文件**中。
- 您可以通过直接导入错误日志文件来重试失败的项目 — DocKit 识别其格式。

## 常见使用场景

### 在集群之间迁移

导入/导出最常见的使用场景是**集群迁移**。例如，从 Elasticsearch 7 升级到 Elasticsearch 8 而不进行就地滚动升级：

1. 以 Bulk 格式从旧集群导出所有索引。
2. 在 Elasticsearch 8 集群上使用所需的映射创建新索引。
3. 将导出的文件导入新集群。
4. 验证文档数量并抽查记录。
5. 将应用程序流量切换到新集群。

### 填充测试数据

QA 团队经常需要在预发布环境中使用真实数据。使用 DocKit：

1. 导出生产数据的样本（使用查询过滤器限制为非 PII 记录或匿名数据）。
2. 在 QA 冲刺前将其导入到预发布索引或 DynamoDB 表中。
3. 在每个发布周期前重新填充。

### 升级前备份

在任何有风险的操作前 — 映射更改、索引重构、主要版本升级 — 导出完整快照：

1. 将受影响的索引/表导出为 JSON。
2. 将导出文件存储在安全位置（S3、Git LFS 等）。
3. 继续操作。如果出现问题，导入备份以恢复。

### 与同事共享数据

将小型数据集导出为 JSON 或 CSV，并通过电子邮件、Slack 或您首选的渠道共享。接收者可以在几秒钟内将其导入到自己的 DocKit 实例中。

## DocKit 导入/导出与其他工具的比较

| 工具 | Elasticsearch | DynamoDB | GUI | 免费 |
|------|--------------|----------|-----|------|
| **DocKit** | ✅ | ✅ | ✅ | ✅ |
| elasticdump | ✅ | ❌ | ❌ | ✅ |
| AWS DMS | ✅ | ✅ | ✅ | ❌ |
| AWS 控制台 | ❌ | 有限 | ✅ | ✅ |
| 自定义脚本 | ✅ | ✅ | ❌ | ✅ |

DocKit 的优势在于**多数据库支持**、**图形界面**和**零成本**的组合。您不需要为 elasticdump 安装 Node.js，配置 AWS 数据库迁移服务，或编写和维护自定义代码。

## 开始使用

准备好使用 DocKit 开始移动数据了吗？

1. **[下载 DocKit](/zh/download)** — 适用于 macOS、Windows 和 Linux。
2. 按照**[导入/导出指南](/zh/docs/dockit/import-export)**获取分步说明。
3. 查看**[连接到服务器指南](/zh/docs/dockit/connect-to-server)**以设置您的数据库连接。

DocKit 是**100% 免费且开源的**（Apache 2.0）。没有订阅、没有功能限制、没有数据离开您的机器。[立即下载](/zh/download)，掌控您的 NoSQL 数据。
