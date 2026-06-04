---
title: 使用 DocKit GUI 连接到数据库服务器
description: DocKit 作为一个 NoSQL GUI 客户端，支持多种数据库，包括 Elasticsearch、OpenSearch、DynamoDB、MongoDB 以及更多即将支持的数据库。本文档概述了如何使用 DocKit 连接到数据库服务器。
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

DocKit 支持连接 [Elasticsearch](https://www.elastic.co)、[OpenSearch](https://opensearch.org/)、[DynamoDB](https://aws.amazon.com/dynamodb/) 和 [MongoDB](https://www.mongodb.com)。每种数据库类型有自己的连接表单，操作方式一致。

## 安装并打开 DocKit

详细的安装和打开说明请参考[安装指南](/zh/docs/dockit/installation)。

## 连接到 Elasticsearch

点击 `+ 新建连接`，选择 Elasticsearch。填写连接名称、服务器主机（带 `http://` 或 `https://` 协议）和端口（默认 9200）。如果用户权限有限，可通过指定索引名称缩小访问范围。

![mac 连接到 Elasticsearch 服务器](/mac-connect-to-server.png)

DocKit 支持两种认证方式：

**基础认证** — 输入 Elasticsearch 用户名和密码。简单直接，适合自托管和开发环境。

**API Key 认证** — 粘贴完整的 Elasticsearch API 密钥。适合生产和云部署场景，因为密钥可以独立轮换而不影响用户账号。通过 Elasticsearch API 生成：

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

SSL 验证在 `https://` 连接下默认开启。点击主机字段旁的锁图标可关闭——开发环境使用自签名证书时很方便，但生产环境切勿禁用。

你还可以为每个请求附加自定义查询参数，比如 `pretty=true` 格式化 JSON 输出，`timeout=30s` 延长超时，或 `preference=_local` 路由到本地节点。格式为 `key=value` 对，用 `&` 分隔。

## 连接到 OpenSearch

OpenSearch 的连接方式与 Elasticsearch 完全一致——相同的主机和端口格式，相同的认证选项（基础认证和 API Key）。DocKit 会自动从集群信息中识别出 Elasticsearch 还是 OpenSearch。

## 连接到 DynamoDB

选择 DynamoDB 作为数据库类型。DocKit 支持四种认证方式：

**Access Key** — 标准方式。填写 AWS 区域、Access Key ID 和 Secret Access Key。支持 IAM 用户凭证、STS 临时凭证和环境变量。

**DynamoDB Local** — 离线开发。将 DocKit 指向 `http://localhost:8000`，区域和凭证可填任意值。设置方法见 [DynamoDB Local 指南](/zh/blog/query-dynamodb-locally)。

**SSO** — 使用 AWS IAM Identity Center。点击 **Start SSO Login** 在浏览器中完成认证，然后从已填充的列表中选择账户和角色。SSO 会话会被缓存，无需每次重新认证。

**Profile** — 从 `~/.aws/credentials` 和 `~/.aws/config` 读取凭证。从下拉菜单中选择配置文件，可选配置 IAM 角色扮演。支持标准配置文件、源角色链、基于 SSO 的配置文件和启用 MFA 的配置。

## 连接到 MongoDB

选择 MongoDB 作为数据库类型。DocKit 支持三种连接方式：

![连接到 MongoDB](/dockit-mongodb-connection-demo.gif)

**无认证** — 适用于本地开发环境。只需输入主机和端口，可选填默认数据库。

**SCRAM 认证** — 标准用户名/密码认证。输入主机、端口、用户名和密码。**Auth Source** 字段指定存放用户凭据的数据库（默认为 `admin`）。你还可以设置 **Auth Mechanism**（如 `SCRAM-SHA-256`）——留空时驱动会自动协商。

**URI 认证** — 粘贴完整的 MongoDB 连接字符串，适用于 Atlas 或副本集等高级配置。此模式直通 URI 不做任何修改。

三种模式均支持 **TLS**——启用后将 `?tls=true` 附加到连接 URI。本地开发使用自签名证书时可关闭。

## 测试连接

点击 **测试连接** 在保存前验证连通性。至少需要 `view_index_metadata` 权限。如果没有 `*` 索引访问权限，需指定索引名。

常见连接错误及解决方法：

| 错误 | 解决方法 |
|------|----------|
| `Connection refused` | 检查主机和端口，确认服务器运行 |
| `Unauthorized` | 核对凭证，检查 API Key 有效性 |
| `SSL handshake failed` | 启用 SSL 或修复证书 |
| `Index not found` | 提供有效的索引名 |

## 保存和管理连接

点击 **确认** 保存连接。连接会加密存储在本地，在侧边栏中显示以便快速访问，应用重启后依然保留。

管理多个连接：

- **排序** — 按名称、类型或创建日期排序，支持升序和降序
- **筛选** — 输入关键词按名称搜索连接
- **编辑** — 右键 → 编辑修改连接设置
- **克隆** — 右键 → 克隆复制现有连接
- **删除** — 右键 → 删除移除连接

## 安全最佳实践

- **生产环境使用 API Key** — 比用户密码更易轮换和审计
- **保持 SSL 开启** — 生产环境切勿禁用
- **最小权限** — 只授予工作流需要的索引权限
- **分离连接** — 开发、预发布和生产使用不同凭证
- **轮换凭证** — 定期更新密钥和密码

## 下一步

- **[Elasticsearch 集群管理](/zh/docs/dockit/manage-elasticsearch-cluster)** — 监控索引和节点
- **[导入导出](/zh/docs/dockit/import-export)** — 数据导入导出
- **[查询历史](/zh/docs/dockit/query-history)** — 访问历史查询
