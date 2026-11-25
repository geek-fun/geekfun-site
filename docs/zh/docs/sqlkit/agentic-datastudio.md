---
title: 配置 SqlKit Agentic Data Studio 与 AI 助手
description: 在 SqlKit 中配置云端或本地模型，向 Data Studio 会话添加数据库连接，并让 AI 助手查看表结构和起草 SQL。
---

# 在 SqlKit 中使用 Agentic Data Studio

Agentic Data Studio 是 SqlKit 的应用内 AI 工作区。打开 **Data Studio**，即可在会话中使用一个或多个已保存的数据库连接。若要就当前连接提问，可在**查询**工作区打开 **AI 助手**。两项功能均需要 SqlKit 旗舰版。

如果要在 Codex、Claude Code、Cursor 等编程工具中使用 SqlKit 连接，请查看 [MCP 配置](/zh/docs/sqlkit/mcp-bridge)。

## 配置模型服务商 {#configure-a-provider}

1. 打开**设置 → LLMs → 添加提供商**。
2. 使用云端模型时，选择服务商预设并输入 API 密钥。使用自托管模型时，选择 Ollama、LM Studio 或兼容的自定义服务商，核对服务地址，并在测试前启动本地模型服务。
3. 保存提供商，在列表中测试连接并同步模型。如果服务商不提供模型列表，可以在编辑提供商时手动输入模型 ID。
4. 打开 **Data Studio**，在会话中选择已启用的模型。

| 服务商 | 需要核对的配置 |
| --- | --- |
| OpenAI、Anthropic 等云端服务 | 使用对应预设和账号的 API 密钥，确认该密钥有权使用目标模型。 |
| Ollama | 启动 Ollama 并确认模型可用。SqlKit 预设地址为 `http://127.0.0.1:11434`。 |
| LM Studio | 加载模型并启动本地 API 服务。SqlKit 预设地址为 `http://127.0.0.1:1234/v1`。 |
| 自定义端点 | 填写提供商的服务地址，选择与服务协议匹配的 API 兼容类型。 |

## 添加连接并开始会话 {#first-conversation}

1. [添加并测试数据库连接](/zh/docs/sqlkit/connect-to-database)。第一次使用时可选择开发库或只读账号。
2. 在 **Data Studio** 中新建会话，然后选择**添加数据源**。选中已保存的连接并连接。初次使用时，先添加一个数据源，便于确认查询目标。
3. 核对数据源的 [AI 权限](/zh/docs/sqlkit/ai-permissions)，选择模型，将会话保持在**询问**模式。
4. 从表结构问题开始，例如「找出记录订单的表及其日期列，帮我起草按月统计订单量的 SQL，先别执行」。
5. 核对助手使用的表名和列名，再到**查询**工作区检查 SQL 后自行运行。

<DocsFigure src="/sqlkit-data-studio-ui.png" alt="SqlKit Data Studio 展示数据库结构、模型选择和生成的 SQL" caption="Data Studio 可读取已添加连接的结构并起草 SQL。会话中会显示正在使用的模型和数据源。" :width="1440" :height="935" />

## 在查询旁打开 AI 助手 {#assistant}

在**查询**工作区选择连接，再从顶部工具栏打开 **AI 助手**。可以请它解释当前 SQL、分析报错或提出修改建议。侧栏使用当前连接的 AI 权限，Data Studio 则保留会话中单独添加的数据源和聊天记录。

## 排查配置问题 {#troubleshoot}

| 现象 | 检查项 |
| --- | --- |
| 没有模型可选 | 在**设置 → LLMs** 中启用提供商，同步模型或手动输入模型 ID。 |
| 提供商连接测试失败 | 核对服务地址和 API 密钥。若使用本地服务，确认服务已启动且模型可用。 |
| Data Studio 没有可用的数据源 | 先在**连接管理**中保存并测试数据库连接。 |
| 助手提示操作被拒绝 | 查看连接及当前会话的 [AI 权限](/zh/docs/sqlkit/ai-permissions)。 |

使用云端模型时，提示词和相关表结构或查询结果可能会发给模型服务商。若要求推理留在本机，请使用本地模型。
