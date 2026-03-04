---
title: "DocKit DynamoDB 管理与指标"
description: "了解如何使用 DocKit — 免费开源的 DynamoDB GUI 客户端 — 管理 DynamoDB 表并查看指标。"
head:
  - - meta
    - name: keywords
      content: DocKit DynamoDB管理, DynamoDB指标GUI, DynamoDB表管理, DynamoDB监控, DocKit DynamoDB文档
  - - meta
    - name: robots
      content: noindex, follow
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/docs/dockit/dynamodb-manage-metrics
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/dockit/dynamodb-manage-metrics
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/dockit/dynamodb-manage-metrics
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/dockit/dynamodb-manage-metrics
---

# DocKit DynamoDB 管理与指标

DocKit 提供内置的 DynamoDB 管理面板，用于浏览表、创建和删除表、查看表指标以及检查索引 — 所有这些都在原生桌面界面中完成。

## 概述

DocKit 中的 DynamoDB 管理与指标面板为您提供以下功能：

- 浏览连接 AWS 账户和区域中的所有表。
- 查看表详情：状态、创建日期、计费模式、键架构。
- 通过引导向导创建新表。
- 带确认提示的删除表。
- 查看表指标：项目数量、存储大小、预置容量。
- 检查全局二级索引（GSI）和本地二级索引（LSI）。
- 监控容量模式（预置与按需）和自动扩展状态。

## 连接到 DynamoDB

在使用管理面板之前，请在 DocKit 中配置 DynamoDB 连接。有关完整的设置说明，请参阅[连接到服务器指南](/zh/docs/dockit/connect-to-server)。

**支持的连接方式：**
- **AWS 配置文件**：使用来自 `~/.aws/credentials` 或 `~/.aws/config` 的凭证。
- **访问密钥 + 秘密密钥**：直接输入服务账户的凭证。
- **DynamoDB Local**：连接到本地运行的 DynamoDB 实例（例如 `http://localhost:8000`）。

配置完成后，单击侧边栏中的连接打开 DynamoDB 管理视图。

## 表管理

### 浏览表

当您打开 DynamoDB 连接时，DocKit 在侧边栏中显示连接账户和区域中的所有表。您可以：

- **按名称过滤**：在表列表上方的搜索框中输入，按名称过滤表。
- **打开表**：单击任何表名在主视图中打开它并开始查询。
- **查看表详情**：单击表视图中的**信息**标签，查看表的键架构、状态、创建日期和计费模式。

### 创建表

1. 在 DynamoDB 连接面板中，单击**新建表**按钮（或右键单击连接并选择**新建表**）。
2. 在创建表向导中：
   - 输入**表名**。
   - 定义**分区键**：输入属性名称并选择类型（String、Number 或 Binary）。
   - 可选地添加**排序键**：输入属性名称和类型。
   - 选择**计费模式**：预置或按需。
   - 对于预置模式，设置**读取容量单位（RCU）**和**写入容量单位（WCU）**。
3. 单击**创建表**。DocKit 创建表，一旦状态变为 ACTIVE（通常在几秒内），它就会出现在侧边栏中。

### 删除表

1. 右键单击侧边栏中的表名并选择**删除表**。
2. 出现确认对话框，显示表名。
3. 在确认输入框中输入表名进行确认。
4. 单击**删除**。表被删除并从侧边栏中移除。

**警告**：表删除是不可逆的。如果需要保留数据，请在删除前导出数据。

## 查看表指标

单击表视图中的**指标**标签，查看所选表的操作数据。

### 项目数量

**项目数量**显示表中项目的总数。此值是 DynamoDB 提供的估计值，大约每 6 小时更新一次。如需实时计数，请改用 `SELECT COUNT(*)` PartiQL 查询。

### 存储大小

**表大小**显示表消耗的总存储空间（字节，包括所有项目和索引）。此值也是大约每 6 小时更新的估计值。

### 预置容量

对于处于**预置**计费模式的表，DocKit 显示：

- **读取容量单位（RCU）**：当前预置的读取吞吐量（每秒最多 4 KB 项目的读取次数）。
- **写入容量单位（WCU）**：当前预置的写入吞吐量（每秒最多 1 KB 项目的写入次数）。
- **自动扩展**：读和/或写自动扩展是否启用，以及当前的最小和最大容量设置。

### 按需模式

对于处于**按需**计费模式的表，DocKit 确认计费模式，并注明容量会根据流量自动扩展。

## 索引管理

单击表视图中的**索引**标签查看表上定义的所有索引。

### 全局二级索引（GSI）

DocKit 显示每个 GSI 的以下信息：

| 字段 | 描述 |
|------|------|
| **索引名称** | GSI 名称 |
| **分区键** | GSI 分区键属性和类型 |
| **排序键** | GSI 排序键属性和类型（如果定义） |
| **投影** | ALL、KEYS_ONLY 或 INCLUDE |
| **投影属性** | 包含的属性列表（仅 INCLUDE 投影） |
| **状态** | ACTIVE、CREATING、UPDATING 或 DELETING |
| **项目数量** | 索引中项目的近似数量 |
| **索引大小** | 索引使用的近似存储空间 |
| **RCU / WCU** | 预置吞吐量（仅预置计费） |

### 本地二级索引（LSI）

DocKit 显示每个 LSI 的以下信息：

| 字段 | 描述 |
|------|------|
| **索引名称** | LSI 名称 |
| **排序键** | LSI 排序键属性和类型 |
| **投影** | ALL、KEYS_ONLY 或 INCLUDE |
| **投影属性** | 包含的属性列表（仅 INCLUDE 投影） |
| **项目数量** | 索引中项目的近似数量 |
| **索引大小** | 索引使用的近似存储空间 |

**注意**：LSI 与基础表共享读/写容量。在表创建后不能添加或删除 LSI。

## 容量模式监控

**容量**标签（或指标中的部分）显示：

- **计费模式**：预置或按需。
- **上次计费模式更改**：计费模式上次更改的时间戳。
- **自动扩展策略**：对于预置表，显示是否为读、写或两者都配置了自动扩展。
- **GSI 容量**：对于预置表，每个 GSI 可以有自己的 RCU/WCU 设置，在此处显示。

要更改计费模式或更新容量设置，请使用 AWS 控制台或 AWS CLI。DocKit 目前仅提供容量设置的只读可见性。
