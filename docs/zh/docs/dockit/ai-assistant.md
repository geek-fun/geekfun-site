---
title: DocKit AI 助手 - 使用 OpenAI 和 DeepSeek 生成查询
description: 配置 DocKit AI 助手，从自然语言生成 Elasticsearch、OpenSearch 和 DynamoDB 查询。设置 OpenAI 或 DeepSeek 提供商，自定义提示词，提升工作效率。
head:
  - - meta
    - name: keywords
      content: DocKit AI 助手, Elasticsearch AI, DynamoDB AI, OpenAI 数据库查询, DeepSeek 数据库助手, AI 查询生成, 自然语言转 SQL, NoSQL AI 助手
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/docs/dockit/ai-assistant
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/docs/dockit/ai-assistant
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/docs/dockit/ai-assistant
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/docs/dockit/ai-assistant
---

# DocKit AI 助手

DocKit 的 AI 助手帮助您从自然语言描述生成复杂的数据库查询。无需记忆 Elasticsearch DSL 语法或 PartiQL 结构，只需描述需求，让 AI 编写查询。

## AI 助手能做什么

- **生成 Elasticsearch/OpenSearch 查询**：搜索 DSL、聚合、过滤
- **生成 DynamoDB PartiQL**：SELECT、INSERT、UPDATE、DELETE 语句
- **解释查询语法**：询问"这个查询做什么？"获取解释
- **优化查询**：获取查询改进建议
- **调试错误**：粘贴错误消息获取故障排除帮助

## 支持的提供商

DocKit 支持两个 AI 提供商：

| 提供商 | 模型 | 适用场景 |
|--------|------|----------|
| **OpenAI** | GPT-4, GPT-4o, GPT-3.5 | 通用场景，质量最佳 |
| **DeepSeek** | DeepSeek Chat, DeepSeek Coder | 经济实惠，代码专精 |

## 配置 OpenAI

1. 打开 **设置** → **AI 助手** 标签页
2. 选择 **OpenAI** 标签页
3. 填写：

| 字段 | 说明 | 示例 |
|------|------|------|
| **模型** | OpenAI 模型名称 | `gpt-4o`, `gpt-4`, `gpt-3.5-turbo` |
| **API Key** | 您的 OpenAI API 密钥 | `sk-proj-...` |
| **提示词** | 自定义系统提示词（可选） | 见下文 |
| **代理** | HTTP 代理 URL（可选） | `http://127.0.0.1:7890` |

4. 点击 **保存并启用**

### 获取 OpenAI API Key

1. 访问 [platform.openai.com](https://platform.openai.com)
2. 登录或创建账户
3. 导航到 **API Keys** → **Create new secret key**
4. 复制密钥（以 `sk-` 开头）
5. 粘贴到 DocKit

**注意**：OpenAI 需要付费。GPT-4 约 $0.03/千 tokens。GPT-3.5-turbo 更便宜（约 $0.002/千 tokens）。

## 配置 DeepSeek

1. 打开 **设置** → **AI 助手** 标签页
2. 选择 **DeepSeek** 标签页
3. 填写：

| 字段 | 说明 | 示例 |
|------|------|------|
| **模型** | DeepSeek 模型名称 | `deepseek-chat`, `deepseek-coder` |
| **API Key** | 您的 DeepSeek API 密钥 | 从 DeepSeek 平台获取 |
| **提示词** | 自定义系统提示词（可选） | 见下文 |
| **代理** | HTTP 代理 URL（可选） | `http://127.0.0.1:7890` |

4. 点击 **保存并启用**

### 获取 DeepSeek API Key

1. 访问 [platform.deepseek.com](https://platform.deepseek.com)
2. 登录或创建账户
3. 导航到 **API Keys**
4. 创建并复制您的密钥
5. 粘贴到 DocKit

**注意**：DeepSeek 比 OpenAI 更经济。`deepseek-coder` 专门优化用于代码生成任务。

## 自定义提示词

**提示词**字段让您自定义 AI 如何响应。默认提示词已针对数据库查询优化，但您可以定制。

### 默认提示词行为

DocKit 自动注入：
- **索引/表名**：当前索引或表的上下文
- **Schema/映射**：字段名和类型
- **数据库类型**：Elasticsearch、OpenSearch 或 DynamoDB

此上下文帮助 AI 生成匹配实际数据结构的准确查询。

### 自定义提示词示例

```
你是一个数据库专家。为 Elasticsearch/DynamoDB 生成查询。
- 只使用提供的 schema 中的字段
- 在展示代码前解释查询
- 相关时建议优化
```

**提示**：保持提示词简洁。长提示词消耗更多 tokens 并降低响应速度。

## 代理配置

如果您在防火墙后或需要通过代理路由请求：

1. 输入代理 URL：`http://127.0.0.1:7890`
2. 格式：`http://host:port`
3. 支持 HTTP 和 HTTPS 代理

常见代理工具：
- **Clash**：默认端口 7890
- **V2Ray**：多种端口
- **企业代理**：查看您的网络设置

## 使用 AI 助手

配置完成后，从编辑器访问助手：

1. 点击工具栏中的 **AI 图标** (✨)
2. 或按您平台的键盘快捷键
3. 用自然语言输入问题
4. 按 Enter 发送

### 示例查询

**Elasticsearch：**
```
"查找过去 7 天内注册的所有用户"
"按地区聚合销售额并计算平均价格"
"搜索包含 'laptop' 的产品并按价格排序"
```

**DynamoDB：**
```
"获取用户 ID 'user-123' 的所有订单"
"查找状态等于 'pending' 的项目"
"更新用户 'alice' 的邮箱字段"
```

AI 会返回：
1. 生成的查询代码
2. 简要说明
3. 任何建议或警告

### 应用生成的查询

AI 生成查询后：

1. 在聊天面板中查看代码
2. 点击 **复制到编辑器** 将其插入查询文件
3. 根需要编辑（调整字段名、添加过滤条件）
4. 用 `Cmd+Enter`（或 `Ctrl+Enter`）执行

## 隐私与数据处理

**DocKit 发送给 AI 提供商的内容：**
- ✅ 您的文本提示词（自然语言问题）
- ✅ 当前索引/表名
- ✅ Schema/映射（字段名和类型）
- ❌ 您的实际数据（从不发送数据库内容）
- ❌ 凭证（从不发送 API 密钥或密码）

**数据保留：**
- OpenAI/DeepSeek 可能保留提示词 30 天（查看其政策）
- DocKit 不在会话后本地存储您的提示词

**最佳实践：**
- 不要在提示词中粘贴敏感数据值
- 询问生产数据时使用通用示例
- 在生产环境执行前审查生成的查询

## 故障排除

### API Key 无效

**错误**：`Invalid API key` 或 `Unauthorized`

**解决方案**：
1. 验证密钥正确（无额外空格）
2. 检查密钥是否过期
3. 确保有足够的额度/配额
4. 尝试重新生成密钥

### 连接失败

**错误**：`Network error` 或 `Timeout`

**解决方案**：
1. 检查网络连接
2. 如在防火墙后，配置代理
3. 验证 API 端点可访问
4. 检查 OpenAI/DeepSeek 服务是否正常运行

### 响应质量差

**问题**：AI 生成不正确或不具体的查询

**解决方案**：
1. 切换到更好的模型（用 GPT-4 而非 GPT-3.5）
2. 在提示词中更具体（包含字段名）
3. 如自动注入失败，手动添加 schema 上下文
4. 使用 `deepseek-coder` 处理代码任务

### 速率限制

**错误**：`Rate limit exceeded`

**解决方案**：
1. 等待几秒后重试
2. 减少提示词频率
3. 升级 OpenAI/DeepSeek 计划以获得更高限制

## 切换提供商

在 OpenAI 和 DeepSeek 之间切换：

1. 打开 **设置** → **AI 助手**
2. 配置两个提供商（可同时设置）
3. 只有**一个**可以同时启用
4. 在首选提供商上点击 **保存并启用**

启用的提供商处理所有 AI 请求，直到您切换。

## 禁用 AI 助手

关闭 AI 功能：

1. 打开 **设置** → **AI 助手**
2. 在活动提供商上点击 **重置**
3. 或清空 API Key 字段

禁用时，工具栏中的 AI 图标显示为灰色。

## 成本管理

AI 查询消耗 tokens。估算成本：

| 提供商 | 模型 | 每 1K tokens 成本 | 典型查询成本 |
|--------|------|------------------|--------------|
| OpenAI | GPT-4o | $0.005 | ~$0.01-0.02 |
| OpenAI | GPT-4 | $0.03 | ~$0.05-0.10 |
| OpenAI | GPT-3.5-turbo | $0.002 | ~$0.003-0.005 |
| DeepSeek | deepseek-chat | $0.001 | ~$0.002 |
| DeepSeek | deepseek-coder | $0.002 | ~$0.003 |

**降低成本的建议：**
- 常规查询使用 GPT-3.5-turbo 或 DeepSeek
- 复杂查询需要深度推理时使用 GPT-4
- 保持提示词简洁（更短的提示词 = 更少 tokens）
- 在保存文件中缓存常见查询模式

## 下一步

- **[设置指南](/zh/docs/dockit/settings)** — 配置其他 DocKit 选项
- **[Elasticsearch 集群管理](/zh/docs/dockit/manage-elasticsearch-cluster)** — 管理索引
- **[DynamoDB GUI 客户端](/zh/products/dockit/dynamodb-gui-client)** — DynamoDB 功能与 PartiQL