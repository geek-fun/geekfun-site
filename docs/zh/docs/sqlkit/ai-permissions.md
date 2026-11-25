---
title: AI 权限与安全模型 | SqlKit Data Studio 与 MCP
description: 全面了解 SqlKit 统一的 AI 权限策略链、5 维细粒度动作控制、sqlparser AST 与 CQL 写拦截、Ask/Auto 审批机制以及凭据隔离边界。
outline: [2, 3]
---

# AI 权限与安全模型

SqlKit 为所有 AI 入口——**Agentic Data Studio**、**查询页 AI 助手侧边栏**以及外部 **MCP 客户端**（Claude Code、Codex、Cursor）——实施**同一套统一的安全策略引擎**。调整默认与单连接 AI 策略需要 **SqlKit 旗舰版**。

## 五层纵深防护架构

SqlKit 并不依赖单一的“危险操作弹窗”，而是构建了五层独立防线：

1. **数据库账号权限（最终底线）**：所有查询均以连接中保存的数据库账号身份执行。为生产库配置只读数据库角色后，任何客户端配置都无法突破服务端授权。
2. **默认拒绝（Fail-Closed）策略链**：每次 AI/MCP 工具调用严格按顺序判定：
   ```text
   单连接显式规则（允许 / 拒绝）  ──►  系统默认 AI 权限  ──►  拒绝（Fail-Closed）
   ```
   若策略文件缺失或损坏，系统会直接拒绝放行。
3. **AST 级读写隔离（`sqlparser` + CQL 分类器）**：`sqlkit__execute_query` 在执行前会对 SQL 做完整语法树解析，连带**数据修改型 CTE**（如 `WITH updated AS (UPDATE ... RETURNING *) SELECT * FROM updated`）在内的写语句均无法混入只读通道；Cassandra/ScyllaDB 则通过专用 CQL 分类器完成同等隔离。
4. **按风险拆分的工具面**：只读查询（`execute_query`）、普通写入（`execute_write`）、删除（`execute_delete`）、结构变更（`execute_ddl`）与 DBA 管理工具（`kill_session`、`grant_privilege`、`revoke_privilege`）分属不同工具并绑定独立权限位。
5. **交互审批卡与凭据隔离**：交互式会话中破坏性操作强制人工审批；数据库密码、SSH 私钥与 TLS 私钥永远不会暴露给 LLM 或 `list_connections`。

## 配置默认与单连接权限 {#connection-permissions}

<DocsSteps>

### 设定系统默认策略

打开**设置 → MCP 桥接 → 默认 AI 权限**。日常开发建议设为**只读（Read）**并保存；所有选择**继承默认**的连接都会自动遵循该基线。

### 按连接覆写精细权限

在**连接管理**编辑目标连接，切换到**高级 → AI 权限**：
- 保持**继承默认**以跟随全局基线。
- 将敏感生产库设为**无访问（No Access）**使其对 Data Studio 和 MCP 完全不可见，或设为**只读**供安全排障。
- 选择**自定义（Custom）**，分别对 5 类操作独立设定**允许**、**拒绝**或**继承**。

### 在 Data Studio 会话内二次收紧

在 **Data Studio** 中点击已挂载数据源徽标，可针对当前对话进一步收紧权限。会话级限制只能**缩窄**、绝不能**放大**连接策略已拒绝的操作。

</DocsSteps>

### 权限预设与 5 维动作对照

| 权限预设 | 读取（Read） | 新增数据（Create） | 更新数据（Update） | 删除数据（Delete） | 结构与管理（Manage） | 典型场景 |
| --- | :---: | :---: | :---: | :---: | :---: | --- |
| **无访问（No access）** | ❌ | ❌ | ❌ | ❌ | ❌ | 核心生产库，彻底排除在 AI 与 MCP 之外 |
| **只读（Read）** | ✅ | ❌ | ❌ | ❌ | ❌ | 查表结构、写查询、`EXPLAIN` 与慢查询排查 |
| **读写数据（Read & modify data）** | ✅ | ✅ | ✅ | ✅ | ❌ | 测试/预发库造数与数据修正，禁止 DDL 与 DBA 管理 |
| **完全访问（Full access）** | ✅ | ✅ | ✅ | ✅ | ✅ | 本地临时开发库，全流程建表与结构实验 |
| **自定义（Custom）** | 自定义 | 自定义 | 自定义 | 自定义 | 自定义 | 精细组合（如仅允许读取+新增，禁止删除与 DDL） |

## 理解 Ask、Auto 与 MCP 审批机制 {#approvals}

对于已被连接策略**允许**的操作，执行前的确认流程按风险等级划分：

| 风险等级 | 对应工具与操作 | 应用内 **Ask** 模式 | 应用内 **Auto** 模式 | 外部 MCP 客户端 |
| --- | --- | --- | --- | --- |
| **安全（只读）** | `execute_query`、`list_tables`、`describe_table`、`explain_query`、`list_sessions`、`get_slow_queries` | 自动执行 | 自动执行 | 由客户端工具规则管理 |
| **提权（常规写入）** | `execute_write`（`INSERT` / `UPDATE` / `MERGE`） | 弹出确认卡 | 自动执行 | SqlKit 校验连接策略，客户端负责提示 |
| **破坏性（删除 / DDL / 管理）** | `execute_delete`（`DELETE` / `TRUNCATE`）、`execute_ddl`（`CREATE` / `ALTER` / `DROP`）、`kill_session`、`grant`/`revoke` | **强制弹窗确认** | **强制弹窗确认** *（除非匹配已保存规则）* | SqlKit 校验连接策略，客户端负责提示 |

### 确认卡选项（会话级记忆规则）

在 Data Studio 或 AI 助手侧边栏弹出确认卡时，你可以选择：
- **仅允许本次（Allow Once）** — 仅放行当前这一次调用
- **总是允许（Allow Always）** — 为当前会话保存一条匹配放行规则
- **拒绝（Deny）** — 拒绝本次执行并让智能体调整方案
- **总是拒绝（Deny Always）** — 本会话后续同类调用直接拦截
- **取消（Cancel）** — 立即中止当前推理轮次

::: warning 切换到 Auto 绝不会越权提权
将会话从 **Ask** 切到 **Auto** 仅仅跳过已授权**常规写入**的确认弹窗，永远无法绕过连接策略或会话限制中已拒绝的操作。
:::

## 审查并重试被拦截的操作 {#blocked-actions}

1. 在 Data Studio 被拦截的消息卡片上点击**查看权限（Review permissions）**，核对被拒的连接名称与具体操作类别。
2. 确认该操作确需在目标库放行后，调整对应连接的权限（例如通过**自定义**仅开放**新增**）或会话限制。
3. 保存更改后点击**重试请求（Retry request）**，SqlKit 会在执行前即时重新校验最新策略。

## 隐私与数据边界

- **凭据隔离**：密码、SSH 私钥与 TLS 私钥永远不会发送给大模型或 MCP 客户端。
- **工具输出**：已授权工具返回的元数据与结果行会发往你配置的模型（应用内 AI）或返回给调用方 MCP 客户端（由客户端决定如何发送给模型）。
- **离线敏感数据**：将敏感库设为**无访问**，或在 [Agentic Data Studio](/zh/docs/sqlkit/agentic-datastudio) 中配置 **Ollama** / **LM Studio** 以实现 100% 本地推理。

## 下一步

<DocsCardGrid :cols="2">
  <DocsCard title="Agentic Data Studio" description="配置云端或本地模型、自动压缩与单连接业务提示词。" href="/zh/docs/sqlkit/agentic-datastudio" badge="旗舰版" badge-variant="ultimate" icon="sparkles" />
  <DocsCard title="MCP 桥接配置" description="在 Claude Code、Codex 与 Cursor 中注册 Data Studio Agent。" href="/zh/docs/sqlkit/mcp-bridge" badge="旗舰版" badge-variant="ultimate" icon="terminal" />
</DocsCardGrid>
