---
layout: product
title: Data Studio Agent。你的 DBA。– 用自然语言和数据库对话
description: Data Studio Agent。你的 DBA。一个开源的 MCP 服务器，让 AI 编程智能体用自然语言、安全地和你的数据库对话。它读懂你的 schema、执行查询、一步步讲给你听。你的 7×24 小时数据库工程师。通过 SqlKit 支持 70+ 种 SQL 数据库，通过 DocKit 支持 NoSQL。
ogImage: https://www.geekfun.club/og/master-zh.png
head:
  - - meta
    - name: keywords
      content: MCP 服务器, Model Context Protocol, 数据库 MCP, AI 代理访问数据库, Claude Code 数据库, Cursor 数据库, MCP 数据库服务器, data-studio-agent, data-studio-mcp, 智能数据库, SQL MCP, NoSQL MCP, PostgreSQL MCP, Elasticsearch MCP, MongoDB MCP, DynamoDB MCP, 开源 MCP
  - - link
    - rel: canonical
      href: https://www.geekfun.club/zh/products/data-studio-agent/
  - - link
    - rel: alternate
      hreflang: en
      href: https://www.geekfun.club/products/data-studio-agent/
  - - link
    - rel: alternate
      hreflang: zh
      href: https://www.geekfun.club/zh/products/data-studio-agent/
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://www.geekfun.club/products/data-studio-agent/
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Data Studio Agent",
        "alternateName": ["data-studio-mcp", "Data Studio MCP Server", "数据库 MCP 服务器", "AI 数据库助手"],
        "description": "Data Studio Agent。你的 DBA。一个开源的 MCP 服务器，让 AI 编程智能体用自然语言、安全地和你的数据库对话。它读懂你的 schema、执行查询、一步步讲给你听。通过 SqlKit 支持 70+ 种 SQL 数据库，通过 DocKit 支持 NoSQL。",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "macOS, Windows, Linux",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "featureList": [
          "面向 AI 编码代理的 MCP 服务器",
          "通过 SqlKit 访问 SQL 数据库（70+ 种）",
          "通过 DocKit 访问 NoSQL 数据库",
          "PostgreSQL、MySQL、SQL Server、Oracle、SQLite、DuckDB、ClickHouse、Snowflake、BigQuery",
          "Elasticsearch、OpenSearch、MongoDB、DynamoDB",
          "支持 Claude Code、Cursor、Windsurf、OpenCode、Codex",
          "本地优先，仅绑定 127.0.0.1",
          "只读安全工具",
          "凭据永不离开你的电脑"
        ],
        "downloadUrl": "https://www.npmjs.com/package/@geek-fun/data-studio-mcp",
        "softwareVersion": "0.1.0",
        "author": { "@type": "Organization", "name": "GEEKFUN", "url": "https://www.geekfun.club" },
        "license": "https://github.com/geek-fun/data-studio-agent/blob/master/LICENSE",
        "sameAs": [
          "https://github.com/geek-fun/data-studio-agent",
          "https://www.npmjs.com/package/@geek-fun/data-studio-mcp"
        ]
      }

hero:
  name: Data Studio Agent。
  headline: 你的 DBA。
  tagline: 用自然语言和你的数据库对话。你的智能体读懂你的 schema、执行查询，一步步讲给你听。你的 7×24 小时数据库工程师。

install:
  eyebrow: "快速开始"
  title: "一条命令开始使用"
  note: "需要先安装并启动 DocKit 和/或 SqlKit，并连接到数据库。服务器会自动发现正在运行的后端。"
  tabs:
    - label: Codex
      icon: /agent-logos/codex-logo.png
      command: "codex mcp add data-studio -- npx -y @geek-fun/data-studio-mcp"
    - label: Claude Code
      icon: /agent-logos/claude-code-logo.png
      command: "claude mcp add --transport stdio data-studio -- npx -y @geek-fun/data-studio-mcp"
    - label: Cursor
      icon: /agent-logos/cursor-logo.png
      command: "// .cursor/mcp.json（项目）或 ~/.cursor/mcp.json（全局）\n{\n  \"mcpServers\": {\n    \"data-studio\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@geek-fun/data-studio-mcp\"]\n    }\n  }\n}"
    - label: Windsurf
      icon: /agent-logos/windsurf-logo.png
      command: "// ~/.codeium/windsurf/mcp_config.json\n{\n  \"mcpServers\": {\n    \"data-studio\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@geek-fun/data-studio-mcp\"]\n    }\n  }\n}"
    - label: OpenCode
      icon: /agent-logos/opencode-logo.png
      command: "// opencode.json（项目）或 ~/.config/opencode/opencode.json（全局）\n{\n  \"$schema\": \"https://opencode.ai/config.json\",\n  \"mcp\": {\n    \"data-studio\": {\n      \"type\": \"local\",\n      \"command\": [\"npx\", \"-y\", \"@geek-fun/data-studio-mcp\"],\n      \"enabled\": true\n    }\n  }\n}"



ecosystem:
  eyebrow: "生态"
  title: "一个 MCP 服务器，70+ 种数据库"
  subtitle: "与所有主流 AI 编码代理兼容"
  agents:
    - { name: Claude Code, logo: /agent-logos/claude-code-logo.png }
    - { name: Cursor, logo: /agent-logos/cursor-logo.png }
    - { name: Windsurf, logo: /agent-logos/windsurf-logo.png }
    - { name: OpenCode, logo: /agent-logos/opencode-logo.png }
    - { name: Codex, logo: /agent-logos/codex-logo.png }
    - { name: Cline, logo: /agent-logos/cline-logo.png }
    - { name: Pi, logo: /agent-logos/pi-agent-logo.png }
    - { name: Qoder, logo: /agent-logos/qoder-logo.png }
    - { name: Trae, logo: /agent-logos/trae-logo.png }
    - { name: Kiro, logo: /agent-logos/kiro-logo.png }
    - { name: GitHub Copilot, logo: /agent-logos/github-copilot-logo.png }
    - { name: CodeBuddy, logo: /agent-logos/codebuddy.png }
    - { name: Antigravity, logo: /agent-logos/antigravity-logo.png }
    - { name: Grok Build, logo: /agent-logos/grok-build-logo.png }
  databases:
    - { name: MongoDB, logo: /db-mongodb.svg }
    - { name: Elasticsearch, logo: /db-elasticsearch.svg }
    - { name: OpenSearch, logo: /db-opensearch.png }
    - { name: DynamoDB, logo: /db-dynamodb.svg }
    - { name: EasySearch, logo: /db-easysearch.svg }
    - { name: Oracle, logo: /db-logos/oracle-logo.svg }
    - { name: MySQL, logo: /db-logos/mysql-logo.svg }
    - { name: SQL Server, logo: /db-logos/sqlserver-logo.svg }
    - { name: PostgreSQL, logo: /db-logos/postgresql-logo.svg }
    - { name: Snowflake, logo: /db-logos/snowflake-logo.svg }
    - { name: Databricks, logo: /db-logos/databricks-logo.svg }
    - { name: DB2, logo: /db-logos/db2-logo.svg }
    - { name: Cassandra, logo: /db-logos/cassandra-logo.svg }
    - { name: SQLite, logo: /db-logos/sqlite-logo.svg }
    - { name: MariaDB, logo: /db-logos/mariadb-logo.svg }
    - { name: Hive, logo: /db-logos/hive-logo.svg }
    - { name: Microsoft Access, logo: /db-logos/access-logo.svg }
    - { name: BigQuery, logo: /db-logos/bigquery-logo.svg }
    - { name: SAP HANA, logo: /db-logos/hana-logo.svg }
    - { name: Teradata, logo: /db-logos/teradata-logo.svg }
    - { name: ClickHouse, logo: /db-logos/clickhouse-logo.svg }
    - { name: Redshift, logo: /db-logos/redshift-logo.svg }
    - { name: Informix, logo: /db-logos/informix-logo.svg }
    - { name: DuckDB, logo: /db-logos/duckdb-logo.svg }
    - { name: Vertica, logo: /db-logos/vertica-logo.svg }
    - { name: H2, logo: /db-logos/h2-logo.svg }
    - { name: Trino, logo: /db-logos/trino-logo.svg }
    - { name: Presto, logo: /db-logos/presto-logo.svg }
    - { name: TimescaleDB, logo: /db-logos/timescaledb-logo.svg }
    - { name: CockroachDB, logo: /db-logos/cockroachdb-logo.svg }
    - { name: QuestDB, logo: /db-logos/questdb-logo.svg }
    - { name: InterSystems IRIS, logo: /db-logos/iris-logo.svg }
    - { name: YugabyteDB, logo: /db-logos/yugabytedb-logo.svg }
    - { name: Exasol, logo: /db-logos/exasol-logo.svg }
    - { name: Manticore Search, logo: /db-logos/manticore-logo.svg }
    - { name: TiDB, logo: /db-logos/tidb-logo.svg }
    - { name: PolarDB, logo: /db-logos/polardb-logo.svg }
    - { name: OceanBase, logo: /db-logos/oceanbase-logo.svg }
    - { name: GBase, logo: /db-logos/gbase-logo.svg }
    - { name: StarRocks, logo: /db-logos/starrocks-logo.svg }
    - { name: TDSQL, logo: /db-logos/tdsql-logo.svg }
    - { name: openGauss, logo: /db-logos/opengauss-logo.svg }
    - { name: Kylin, logo: /db-logos/kylin-logo.svg }
    - { name: KingbaseES, logo: /db-logos/kingbasees-logo.svg }
    - { name: Doris, logo: /db-logos/doris-logo.svg }
    - { name: Databend, logo: /db-logos/databend-logo.svg }
    - { name: DM8, logo: /db-logos/dm8-logo.svg }
    - { name: GoldenDB, logo: /db-logos/goldendb-logo.svg }
    - { name: GaussDB, logo: /db-logos/gaussdb-logo.svg }
    - { name: HighGo, logo: /db-logos/highgo-logo.svg }
    - { name: UXDB, logo: /db-logos/uxdb-logo.svg }
    - { name: Vastbase, logo: /db-logos/vastbase-logo.svg }
    - { name: YashanDB, logo: /db-logos/yashandb-logo.svg }
    - { name: Xugudb, logo: /db-logos/xugudb-logo.svg }
    - { name: SelectDB, logo: /db-logos/selectdb-logo.svg }

showcase:
  eyebrow: "实际体验"
  title: "用自然语言和数据库对话"
  subtitle: "告诉你的代理你需要什么。它读取 schema、通过 DocKit 或 SqlKit 执行查询，并逐步解释它做了什么，全部在你现有的 AI 编码工具里完成。"
  highlights:
    - "任意数据库，70+ SQL 与 NoSQL"
    - "任意 AI 代理，任意 LLM"
    - "任意系统：macOS · Windows · Linux"
  items:
    - title: "在 MongoDB 里找数据"
      body: "不需要写查询语言。描述你想要的数据，代理找到集合、构造查询、返回文档，每一步都展示它的工作过程。"
      visual: terminal
      terminal:
        title: "Claude Code · data-studio"
        messages:
          - role: user
            text: "找出 MongoDB 里所有大于 30 岁的用户"
          - role: agent
            text: "正在读取 users 集合的 schema……"
          - role: tool
            name: "data_studio__mongo__find"
            detail: "db.users.find({ age: { $gt: 30 } }).limit(10)"
          - role: result
            text: "12 documents returned\n\n{ \"_id\": \"67f2a1…\", \"name\": \"Ada Lovelace\", \"age\": 42 }\n{ \"_id\": \"67f2a1…\", \"name\": \"Grace Hopper\", \"age\": 51 }\n{ \"_id\": \"67f2a1…\", \"name\": \"Katherine Johnson\", \"age\": 63 }"
          - role: agent
            text: "找到 12 个大于 30 岁的用户。这是前三位。需要我按城市筛选或按年龄排序吗？"
      align: left

    - title: "列出 PostgreSQL 的表"
      body: "问一句你的 PostgreSQL 数据库有哪些表，代理根据实时 schema 回答。不用记表名，也不用翻 pg_catalog。"
      visual: terminal
      terminal:
        title: "OpenCode · data-studio"
        messages:
          - role: user
            text: "列出我 PostgreSQL 数据库里的所有表"
          - role: agent
            text: "正在读取已连接数据库的 schema……"
          - role: tool
            name: "data_studio__sqlkit__list_tables"
            detail: "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name"
          - role: result
            text: "14 tables\n\norders · customers · products · order_items\npayments · shipments · reviews · inventory\nusers · sessions · carts · coupons\ndiscounts · audit_logs"
          - role: agent
            text: "你的 public schema 有 14 张表。需要我介绍其中某一张吗？"
      align: left

    - title: "不用 DSL 搜索 Elasticsearch"
      body: "描述你想要的文档，代理通过 DocKit 的桥接把它翻译成正确的查询，跨索引、映射和聚合。"
      visual: terminal
      terminal:
        title: "Windsurf · data-studio"
        messages:
          - role: user
            text: "显示 Elasticsearch 最近的 10 条订单"
          - role: agent
            text: "正在检查 orders* 索引……"
          - role: tool
            name: "data_studio__es__search"
            detail: "GET /orders*/_search  sort: [created_at desc]  size: 10"
          - role: result
            text: "10 hits in 18ms\n\n{ \"_source\": { \"order_id\": \"ORD-8291\", \"total\": 149.50, \"created_at\": \"2026-08-07T14:02:11Z\" } }\n{ \"_source\": { \"order_id\": \"ORD-8290\", \"total\": 89.00, \"created_at\": \"2026-08-07T13:41:08Z\" } }"
          - role: agent
            text: "这是 orders* 索引里最近的 10 条订单。"
      align: left

architecture:
  eyebrow: "工作原理"
  title: "每个数据库、每个工具，一份配置"
  subtitle: "用自然语言访问你的数据库。告诉你的代理你需要什么，它读取 schema、编写查询并返回结果。一份 MCP 服务器配置在 SQL 与 NoSQL、本地与云端之间自动路由到正确的后端，无需为每种数据库写胶水代码。"

features:
  eyebrow: "为什么选择 Data Studio Agent"
  title: "核心能力"
  items:
    - { title: "一个 MCP 服务器覆盖整个数据栈", body: "一个 npm 包同时路由到 SqlKit（SQL）和 DocKit（NoSQL）的本地桥接。不需要为每种数据库写胶水代码，注册一个 MCP 服务器，查询一切。", icon: "database" }
    - { title: "自然语言搞定数据库操作", body: "不用再手写每条 JOIN、不用再翻 CLI 输出。说出你的需求，代理针对你的真实 schema 执行经过验证的查询。", icon: "sparkles" }
    - { title: "始终在线的诊断", body: "每个工具都会报告后端可用性和权限状态。如果数据库应用未运行或操作被门控，代理会得到可操作的提示，而不是静默失败。", icon: "search" }
    - { title: "构建在你信赖的应用之上", body: "所有数据库驱动、SSH 隧道和连接管理都在 DocKit 和 SqlKit 里。MCP 服务器只是一个薄路由层，自动发现正在运行的后端。", icon: "layers" }

tools:
  eyebrow: "你的代理能做什么"
  title: "一个配置，整套工具"
  subtitle: "一个 MCP 服务器为每个后端暴露一套聚焦的工具。你的代理读取 schema、执行查询、拿到可操作的诊断。不多也不少。"
  groups:
    - name: "SQL · SqlKit"
      prefix: "data_studio__sql_"
      tools:
        - { name: "execute", desc: "对已连接的数据库执行 SQL 语句。读写取决于权限模式。", access: "Read-Write" }
        - { name: "list_tables", desc: "列出已连接数据库中的表和视图。", access: "Read" }
        - { name: "describe_table", desc: "展示表的列、类型和约束。", access: "Read" }
        - { name: "explain", desc: "执行 EXPLAIN 诊断慢查询。", access: "Read" }
    - name: "Elasticsearch · DocKit"
      prefix: "data_studio__es_"
      tools:
        - { name: "search", desc: "跨一个或多个索引查询文档。", access: "Read-Write" }
        - { name: "list_indices", desc: "列出可用索引及其健康状态。", access: "Read" }
        - { name: "get_mapping", desc: "查询前检查索引的 mapping。", access: "Read" }
    - name: "MongoDB · DocKit"
      prefix: "data_studio__mongo_"
      tools:
        - { name: "find", desc: "用过滤条件和投影查询文档。", access: "Read-Write" }
        - { name: "list_collections", desc: "列出已连接数据库中的集合。", access: "Read" }
        - { name: "insert", desc: "向集合中插入一个或多个文档。", access: "Full" }
    - name: "DynamoDB · DocKit"
      prefix: "data_studio__dynamo_"
      tools:
        - { name: "query", desc: "按分区键和可选排序键查询条目。", access: "Read-Write" }
        - { name: "list_tables", desc: "列出已连接 AWS 区域中的表。", access: "Read" }
        - { name: "scan", desc: "扫描表中的条目，服务端过滤。", access: "Read-Write" }

security:
  eyebrow: "企业级安全"
  title: "为安全优先的团队而生"
  items:
    - title: "凭据永不离开应用"
      body: "LLM 只能看到一个不透明的 connection_id。真实凭据在 DocKit/SqlKit 内部解析，绝不跨越 MCP 边界。你的密码和密钥始终留在本机、留在应用里。"
      icon: "lock"
    - title: "基于 ID 的资源访问"
      body: "代理严格通过连接 ID 访问数据库。凭据不会出现在提示词或工具参数中，模型没有途径获取或泄露连接密钥。"
      icon: "id"
    - title: "三级权限模型"
      body: "只读 / 数据读写 / 完全访问三种模式按风险等级管控每个能力，外加连接级覆盖。你可以将任意连接标记为只读，或按操作白名单放行。"
      icon: "shield"
    - title: "显式用户确认"
      body: "破坏性操作（DELETE、DROP、TRUNCATE）在策略中标记为 Ask。客户端在执行任何破坏性操作前都会弹出显式确认。"
      icon: "check"
    - title: "操作级语句分类"
      body: "SQL 在执行前会按语句类型解析分类（读 / 写 / 删除 / DDL）。只写工具拒绝 DELETE 语句，删除工具拒绝 DDL。"
      icon: "alert"
    - title: "仅本地桥接"
      body: "桥接只绑定 127.0.0.1，其他机器无法访问。一个薄路由层，无需托管服务器、无需管理 API key。"
      icon: "local"
  permissionModes:
    - name: "只读"
      tag: "默认"
      desc: "最安全的模式。代理可以探索和读取，永远不能修改。"
      allows:
        - "探索 schema、表和索引"
        - "执行 SELECT 查询和搜索"
        - "用 EXPLAIN 检查查询计划"
      blocks:
        - "INSERT、UPDATE、DELETE 语句"
        - "DDL（CREATE、ALTER、DROP）"
    - name: "数据读写"
      tag: "推荐"
      desc: "让代理处理你的数据。允许写入，保护结构。"
      allows:
        - "只读模式的所有能力"
        - "INSERT 和 UPDATE 语句"
        - "索引管理"
      blocks:
        - "DELETE、TRUNCATE 语句"
        - "表和视图上的 DDL"
    - name: "完全访问"
      tag: "高级用户"
      desc: "解锁全部能力。破坏性操作仍需你的确认。"
      allows:
        - "数据读写模式的所有能力"
        - "DELETE、DROP、TRUNCATE（需 Ask 确认）"
        - "连接级覆盖和白名单"
      blocks:
        - "无，但破坏性操作始终以 Ask 呈现"


cta:
  title: "让编码代理访问你的数据"
  body: "安装 MCP 服务器，指向 DocKit 和 SqlKit，然后用自然语言开始提问。免费、开源、Apache 2.0。"
  actions:
    - { text: "开始使用", link: "https://www.npmjs.com/package/@geek-fun/data-studio-mcp", theme: "brand", external: true }
    - { text: "查看 GitHub", link: "https://github.com/geek-fun/data-studio-agent", theme: "alt", external: true }
---
