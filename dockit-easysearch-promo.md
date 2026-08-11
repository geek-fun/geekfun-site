# DocKit：专为 Easysearch 设计的 AI 原生桌面客户端，内置 Data AI Agent，支持 MCP

> 能连上 Easysearch 的工具不少。按搜索引擎的用法认真做的，不多。DocKit 算一个：内置 Data AI Agent，还支持 MCP，可以把你的 AI 编码代理直接接到数据库上。

连 Easysearch 通常两条路。要么上 Kibana 那套重组件，为了查个索引起一个完整实例，启动十几秒、内存 500MB 起步；要么用通用数据库客户端，Easysearch 只是几十种数据库里的一行兼容项，REST、Query DSL、SQL 挤在同一个编辑器里，用起来总觉得差口气。

DocKit 是第三条路：只做搜索引擎的桌面客户端，Easysearch 是原生独立连接类型，和 Elasticsearch、OpenSearch 并列。内置 Data AI Agent，支持 MCP。开源，免费。

- 官网：https://www.geekfun.club/products/dockit/
- GitHub：https://github.com/geek-fun/dockit

## Data AI Agent：用自然语言操作 Easysearch

先讲这个，它是 DocKit 跟传统客户端区别最大的地方。

Query DSL 不用手写，直接说需求：

> "列出集群里所有索引，按文档数从大到小排"

> "找出最近 24 小时 category 为 compatibility 的文档，按时间倒序取前 20 条"

> "看看 products 索引的 mapping，有没有 name 字段"

Agent 会读你集群的实时 mapping、索引状态和查询历史，把需求转成 Query DSL，通过校验过的工具直接在 Easysearch 上执行，结果直接返回。它给你的是执行结果，不是一段要你自己复制粘贴的代码。

对 Easysearch 能干的事：

- 读操作：搜索、取文档、列索引、看 mapping、查集群状态，自动执行，问了就答
- 写操作：增删改文档、建删索引、管理别名和字段映射，需要你确认
- 多步操作：Agentic Data Studio 把"看 schema、写查询、看结果、调整、再跑"放在一个界面里，上下文来自真实的数据库状态，不是聊天记录

安全是认真做的：连接凭据不会发给 LLM，Agent 只能看到一个 connection_id；破坏性操作有显式确认；可以按来源控制权限。AI 提供商支持 OpenAI、Anthropic、DeepSeek，也可以用 Ollama 或 LM Studio 完全本地运行，数据不出机器。

很多工具的 AI 是聊天框：你问一句，它回一段话，你再手动复制查询、粘贴、执行、把结果贴回去。数据库操作的节奏是秒级的，AI 不直接操作数据库，意义就少了一大半。

## MCP：把 Easysearch 接进你自己的 AI 工具链

Data AI Agent 是 DocKit 内置的 AI。MCP 是把它开放给外部工具：通过 Data Studio Agent 这个 MCP 服务器，Claude Code、Cursor、OpenCode、Codex 可以直接复用 DocKit 里保存的 Easysearch 连接。

```
Claude Code / Cursor / OpenCode / Codex
        │  MCP stdio
        ▼
@geek-fun/data-studio-mcp
        │  本地 HTTP（仅 127.0.0.1）
        ▼
    DocKit → Easysearch
```

注册一条命令：

```bash
claude mcp add --transport stdio data-studio -- npx -y @geek-fun/data-studio-mcp
```

之后排查问题，直接让代理"看看这个索引的 mapping 和最近的数据"就行，不用手动开工具复制粘贴。桥接只监听本机 127.0.0.1，凭据不出桌面应用，默认只读，DELETE/DROP 这类操作必须显式确认。

## 专为 Elasticsearch 设计，Easysearch 是原生一等公民

通用工具的设计起点是"什么都能连"，每个数据库只能分到通用外壳。DocKit 的设计起点是搜索引擎该怎么用，所以 Easysearch 拿到的是完整原生体验：

- 独立连接类型：有自己的图标和配置项，和 Elasticsearch、OpenSearch 并列，不是"以兼容模式连一下"
- 编辑器只认 Query DSL，不混 SQL。Monaco 引擎（VS Code 同款），JSON5 语法、行内注释、基于实时 mapping 的字段自动补全、一键格式化、Cmd/Ctrl + Enter 执行
- 文档操作是主流程：表格视图加 JSON 视图、行内编辑、筛选、分页

## 三步连接 Easysearch

1. 新建连接，数据库类型选 Easysearch（独立入口）
2. 填名称、主机、端口（常用 9200）、用户名密码。支持 Basic Auth、API Key、TLS/SSL 和代理，也可以直接粘贴连接 URL 自动解析
3. 测试通过后保存，左侧连接树直接列出可访问的索引

## 其他常用功能

- 集群管理：节点健康、分片分配、索引统计（文档数、存储、字段数据）、别名和模板、长任务监控，都是可视化界面，不用敲 _cat/indices
- 索引与文档：展开就能看索引结构和文档，表格里直接增删改，JSON 高亮
- 导入导出：JSON、CSV、JSONL，内部走 scroll API，千万级文档的索引也能导出
- 查询历史：自动保存，按连接隔离，存在本地，可搜索、可收藏
- 多集群：开发、测试、生产连接随便存，切换即时
- 轻量：启动不到 2 秒，内存约 150 MB，查询存本地文件，支持 Ollama 完全离线

## 和其他方案比

| | DocKit | DBX | Kibana | Elasticvue |
|---|---|---|---|---|
| Easysearch 支持方式 | 原生独立连接类型 | 70+ 数据库兼容项 | ❌ | 兼容模式 |
| 专为搜索引擎设计 | ✅ | ❌ 通用多库 | ✅ 但笨重 | ✅ |
| 编辑器 | Monaco + 纯 Query DSL | REST/DSL/SQL 混用 | Dev Tools 基础版 | 基础版 |
| mapping 实时补全 | ✅ | ❌ | ❌ | ❌ |
| Data AI Agent | ✅ 自然语言 → DSL，直接执行 | ❌ | ❌ | ❌ |
| MCP（AI 编码代理直连） | ✅ | 基础 | ❌ | ❌ |
| 集群管理 | ✅ 可视化 | 基础 | ✅ | 基础 |
| 启动/内存 | < 2s / ~150MB | 通用 | 10–30s / 500MB+ | < 5s |
| 查询持久化 | ✅ 本地文件 | 部分 | ✅ | ❌ |
| 开源 | ✅ Apache 2.0 | 闭源 | Mixed | ✅ MIT |
| 价格 | 免费 | 免费 | 免费 | 免费 |

## 版本兼容

基于标准 Elasticsearch REST API，支持 Elasticsearch 1.x 到 9.x。Easysearch 作为独立连接类型原生支持，引擎差异由客户端自动适配。遇到兼容性问题直接在 GitHub 提 issue。

## 下载

- **下载 DocKit**：https://www.geekfun.club/download
- **官网**：https://www.geekfun.club/products/dockit/
- **GitHub**：https://github.com/geek-fun/dockit

装好之后新建一个 Easysearch 连接，打开 Data AI Agent 问一句：

> "看看集群里有哪些索引，找出数据量最大的那个，再看一眼它的 mapping"
