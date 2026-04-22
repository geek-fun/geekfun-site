---
title: 使用 DocKit GUI 连接到数据库服务器
description: DocKit 作为一个 NoSQL GUI 客户端，支持多种数据库，包括 Elasticsearch、OpenSearch、DynamoDB 以及更多即将支持的数据库。本文档概述了如何使用 DocKit 连接到数据库服务器。
head:
   - - meta
     - name: keywords
       content: DocKit, Elasticsearch GUI 客户端, 连接 Elasticsearch 服务器, Elasticsearch 连接指南, Elasticsearch 管理工具, Elasticsearch 桌面客户端, Elasticsearch 数据管理, Elasticsearch 数据分析, Elasticsearch 数据可视化, Elasticsearch 查询工具, Elasticsearch 跨平台客户端, Elasticsearch 开源客户端, Elasticsearch Mac 客户端, Elasticsearch Windows 客户端, Elasticsearch Linux 客户端, Elasticsearch AI 驱动搜索, Elasticsearch 多服务器支持, Elasticsearch API key 认证, Elasticsearch SSL
   - - link
     - rel: canonical
       href: https://www.geekfun.club/zh/docs/dockit/connect-to-server
   - - link
     - rel: alternate
       hreflang: en
       href: https://www.geekfun.club/docs/dockit/connect-to-server
   - - link
     - rel: alternate
       hreflang: zh
       href: https://www.geekfun.club/zh/docs/dockit/connect-to-server
   - - link
     - rel: alternate
       hreflang: x-default
       href: https://www.geekfun.club/docs/dockit/connect-to-server
---

# 使用 DocKit 桌面客户端连接到数据库服务器

DocKit 作为一个 NoSQL GUI 桌面客户端，支持多种数据库，包括 [Elasticsearch](https://www.elastic.co)、OpenSearch、[DynamoDB](https://aws.amazon.com/dynamodb/) 以及更多即将支持的数据库。本文档概述了如何使用 DocKit 连接到数据库服务器。

## 安装并打开 DocKit

您可以在[安装指南](/zh/docs/dockit/installation)中找到有关如何安装和打开 DocKit 的详细说明。

## 连接到 Elasticsearch 服务器

打开 DocKit 后，点击 `+ 新建连接` 按钮以添加新连接，然后您可以输入 Elasticsearch 服务器信息，包括连接名称、主机、端口和认证信息。
![mac 连接到 Elasticsearch 服务器](/mac-connect-to-server.png)

### 基础连接字段

| 字段 | 必填 | 说明 |
|------|------|------|
| **名称** | 是 | 连接显示名称（如 "生产环境 ES"） |
| **主机** | 是 | 服务器 URL，包含协议（`http://` 或 `https://`） |
| **端口** | 是 | 服务器端口（默认：9200） |
| **索引名称** | 否 | 用户权限有限时指定特定索引 |

### 认证方式

DocKit 支持 Elasticsearch 的两种认证方式：

#### 基础认证

选择 **Basic** 标签页并输入：
- **用户名**：Elasticsearch 用户名
- **密码**：用户密码

适用于：
- 自托管 Elasticsearch
- 开发环境
- 简单认证设置

#### API Key 认证

选择 **API Key** 标签页并输入：
- **API Key**：Elasticsearch API 密钥（粘贴完整密钥）

适用于：
- Elasticsearch Cloud 部署
- 生产环境
- 无需更改密码即可轮换凭证

**在 Elasticsearch 中创建 API Key：**

```json
POST /_security/api_key
{
  "name": "dockit-client",
  "role_descriptors": {
    "dockit-role": {
      "index": [
        { "names": ["*"], "privileges": ["read", "write"] }
      ]
    }
  }
}
```

响应包含的 API 密钥可粘贴到 DocKit。

### SSL 证书验证

DocKit 默认验证 `https://` 连接的 SSL 证书。

**切换 SSL 验证：**
- 点击主机字段旁边的 🔒（锁）图标
- 🔒 **锁定** = SSL 验证已启用（推荐）
- 🔓 **解锁** = SSL 验证已禁用

**何时禁用 SSL：**
- 开发环境中的自签名证书
- 不在公共 CA 链中的内部证书
- 仅限测试环境

**警告**：生产环境连接切勿禁用 SSL 验证 —— 这会使凭证暴露于拦截风险。

### 查询参数

添加自定义查询参数，将附加到所有请求：

| 示例 | 用途 |
|------|------|
| `pretty=true` | 格式化 JSON 响应 |
| `timeout=30s` | 设置请求超时 |
| `preference=_local` | 将请求路由到本地节点 |

格式：key=value 对，用 `&` 分隔

## 连接到 OpenSearch 服务器

OpenSearch 连接与 Elasticsearch 完全相同。使用：
- 主机：`http://your-opensearch:9200`
- 端口：9200（默认）
- 相同认证选项（Basic、API Key）

DocKit 从集群信息自动检测 OpenSearch 与 Elasticsearch。

## 连接到 DynamoDB

选择 **DynamoDB** 作为数据库类型并配置：

### AWS DynamoDB（生产环境）

| 字段 | 说明 |
|------|------|
| **区域** | AWS 区域（如 `us-east-1`） |
| **Access Key ID** | AWS 访问密钥 |
| **Secret Access Key** | AWS 秘密密钥 |

凭证可以是：
- **IAM 用户凭证**：长期密钥
- **临时凭证**：来自 STS AssumeRole
- **环境凭证**：使用 `.env` 或 AWS 配置

### DynamoDB Local（开发环境）

连接到本地 DynamoDB 进行离线开发：

| 字段 | 值 |
|------|-----|
| **Endpoint** | `http://localhost:8000` |
| **区域** | 任意值（如 `us-east-1`） |
| **Access Key** | 任意值（如 `local`） |
| **Secret Key** | 任意值（如 `local`） |

详见[本地查询 DynamoDB 指南](/zh/blog/query-dynamodb-locally)。

## 测试连接

点击 **测试连接** 在保存前验证连通性。

**要求：**
- 至少需要 `view_index_metadata` 权限
- 用户无 `*` 索引访问权限时需指定索引名

**常见错误：**

| 错误 | 解决方案 |
|------|----------|
| `Connection refused` | 检查主机/端口，确认服务器运行 |
| `Unauthorized` | 验证凭证，检查 API key 有效性 |
| `SSL handshake failed` | 启用 SSL 验证或修复证书 |
| `Index not found` | 指定有效索引名 |

## 保存连接

点击 **确认** 保存连接。连接会：
- 加密并存储在本地
- 在侧边栏显示便于快速访问
- 应用重启后依然保留

## 管理多个连接

DocKit 支持保存多个连接：

- **排序**：点击列标题按名称、类型、日期排序
- **筛选**：在连接面板中按名称搜索
- **快速切换**：点击侧边栏中的任意连接
- **编辑**：右键 → 编辑以修改设置
- **删除**：右键 → 删除以移除

## 连接安全最佳实践

1. **生产环境使用 API keys** —— 易于轮换，可审计使用
2. **启用 SSL** —— 生产环境切勿禁用
3. **最小权限** —— 只授予必需的索引权限
4. **分离连接** —— 开发/预发布/生产使用不同凭证
5. **轮换凭证** —— 定期更新密钥和密码

## 下一步

- **[Elasticsearch 集群管理](/zh/docs/dockit/manage-elasticsearch-cluster)** —— 监控索引和节点
- **[导入导出](/zh/docs/dockit/import-export)** —— 数据导入导出
- **[查询历史](/zh/docs/dockit/query-history)** —— 访问历史查询
