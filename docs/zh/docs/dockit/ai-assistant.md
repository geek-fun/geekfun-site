---
title: DocKit AI 助手 - 使用多种 AI 提供商生成查询
description: 配置 DocKit AI 助手和 Agentic Data Studio，从自然语言生成 MongoDB、Elasticsearch、OpenSearch 和 DynamoDB 查询。设置 OpenAI、Anthropic 或 DeepSeek 提供商，自定义提示词，提升工作效率。
head:
  - - meta
    - name: keywords
      content: DocKit AI 助手, Elasticsearch AI, DynamoDB AI, OpenAI 数据库查询, Anthropic 数据库助手, DeepSeek 数据库助手, AI 查询生成, 自然语言转 SQL, NoSQL AI 助手, Ollama, LM Studio, Data Studio, 数据工作室
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

DocKit 支持多种 AI 提供商 —— 包括云端和本地：

| 提供商 | 兼容方式 | 适用场景 |
|--------|----------|----------|
| **OpenAI** | OpenAI API | 通用场景，质量最佳 |
| **Anthropic** | Anthropic API | 高级推理（Claude 模型） |
| **DeepSeek** | OpenAI 兼容 | 经济实惠，代码专精 |
| **OpenRouter** | OpenAI 兼容 | 通过一个 API 访问 200+ 模型 |
| **Google Gemini** | OpenAI 兼容 | 性价比高，超大上下文 |
| **Grok** | OpenAI 兼容 | 替代提供商 |
| **Mistral** | OpenAI 兼容 | 高效开源模型 |
| **Azure OpenAI** | OpenAI 兼容 | 企业级 Azure 部署 |
| **Ollama** | 本地运行 | 完全离线，本地模型 |
| **LM Studio** | 本地运行 | 完全离线，本地模型 |
| **自定义 OpenAI 兼容** | OpenAI 兼容 | 任意 OpenAI 兼容接口 |
| **自定义 Anthropic 兼容** | Anthropic API | 任意 Anthropic 兼容接口 |

在 **设置 → 提供商** 面板管理所有提供商的凭据、API 密钥、代理设置和模型目录。提供商在 AI 助手和 Data Studio 之间共享 —— 一次添加，处处使用。

## 添加提供商

1. 打开 **设置** → **提供商** 标签页
2. 点击 **添加提供商** 并选择类型
3. 配置：

| 字段 | 说明 |
|------|------|
| **显示名称** | 此提供商的友好标签 |
| **基础 URL** | API 端点 URL（标准提供商预填） |
| **API Key** | 您的 API 密钥或令牌 |
| **代理** | HTTP 代理 URL（可选） |

4. 点击 **测试连接** 验证
5. 点击 **保存**

DocKit 会自动发现提供商支持的模型。您可以将模型路由到特定功能（AI 助手、Data Studio、侧边栏助手）。

### 获取 API Key

- **OpenAI**：访问 [platform.openai.com](https://platform.openai.com) → API Keys
- **Anthropic**：访问 [console.anthropic.com](https://console.anthropic.com) → API Keys
- **DeepSeek**：访问 [platform.deepseek.com](https://platform.deepseek.com) → API Keys
- **OpenRouter**：访问 [openrouter.ai](https://openrouter.ai) → Keys
- **Ollama/LM Studio**：本地运行 —— 无需 API Key

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