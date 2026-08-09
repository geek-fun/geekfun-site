---
layout: product
title: Data Studio Agent. Your DBA. – Talk to your databases in plain language
description: Data Studio Agent. Your DBA. An open-source MCP server that lets AI coding agents talk to your databases in plain language, securely. It understands your schema, runs queries, and walks you through what it did. Your 24/7 database engineer. Supports 70+ SQL databases via SqlKit and NoSQL via DocKit.
ogImage: https://www.geekfun.club/og/master-en.png
head:
  - - meta
    - name: keywords
      content: MCP server, Model Context Protocol, database MCP, AI agent database, Claude Code database, Cursor database, MCP database server, data-studio-agent, data-studio-mcp, agentic database, SQL MCP, NoSQL MCP, PostgreSQL MCP, Elasticsearch MCP, MongoDB MCP, DynamoDB MCP, open source MCP
  - - link
    - rel: canonical
      href: https://www.geekfun.club/products/data-studio-agent/
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
        "alternateName": ["data-studio-mcp", "Data Studio MCP Server", "database MCP server", "AI database assistant"],
        "description": "Data Studio Agent. Your DBA. An open-source MCP server that lets AI coding agents talk to your databases in plain language, securely. It understands your schema, runs queries, and walks you through what it did. Supports 70+ SQL databases via SqlKit and NoSQL via DocKit.",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "macOS, Windows, Linux",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "featureList": [
          "MCP server for AI coding agents",
          "SQL access via SqlKit (70+ databases)",
          "NoSQL access via DocKit",
          "PostgreSQL, MySQL, SQL Server, Oracle, SQLite, DuckDB, ClickHouse, Snowflake, BigQuery",
          "Elasticsearch, OpenSearch, MongoDB, DynamoDB",
          "Claude Code, Cursor, Windsurf, OpenCode, Codex support",
          "Local-first, 127.0.0.1 only",
          "Read-safe tools",
          "Credentials never leave your machine"
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
  name: Data Studio Agent.
  headline: Your DBA.
  tagline: Talk to your databases in plain language. Your agent understands your schema, runs the query, and walks you through what it did. Your 24/7 database engineer.

install:
  eyebrow: "Quick Start"
  title: "Get started in one command"
  note: "Requires DocKit and/or SqlKit installed, running, and connected to a database. The server auto-discovers running backends."
  tabs:
    - label: Codex
      icon: /agent-logos/codex-logo.png
      command: "codex mcp add data-studio -- npx -y @geek-fun/data-studio-mcp"
    - label: Claude Code
      icon: /agent-logos/claude-code-logo.png
      command: "claude mcp add --transport stdio data-studio -- npx -y @geek-fun/data-studio-mcp"
    - label: Cursor
      icon: /agent-logos/cursor-logo.png
      command: "// .cursor/mcp.json (project) or ~/.cursor/mcp.json (global)\n{\n  \"mcpServers\": {\n    \"data-studio\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@geek-fun/data-studio-mcp\"]\n    }\n  }\n}"
    - label: Windsurf
      icon: /agent-logos/windsurf-logo.png
      command: "// ~/.codeium/windsurf/mcp_config.json\n{\n  \"mcpServers\": {\n    \"data-studio\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@geek-fun/data-studio-mcp\"]\n    }\n  }\n}"
    - label: OpenCode
      icon: /agent-logos/opencode-logo.png
      command: "// opencode.json (project) or ~/.config/opencode/opencode.json (global)\n{\n  \"$schema\": \"https://opencode.ai/config.json\",\n  \"mcp\": {\n    \"data-studio\": {\n      \"type\": \"local\",\n      \"command\": [\"npx\", \"-y\", \"@geek-fun/data-studio-mcp\"],\n      \"enabled\": true\n    }\n  }\n}"



ecosystem:
  eyebrow: "Ecosystem"
  title: "One MCP server, 70+ databases"
  subtitle: "Works with every major AI coding agent"
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
  eyebrow: "See it in action"
  title: "Talk to your databases in plain language"
  subtitle: "Tell your agent what you need. It reads your schema, runs the query through DocKit or SqlKit, and walks you through what it did, all from your existing AI coding tool."
  highlights:
    - "Any database, 70+ SQL & NoSQL"
    - "Any AI agent with any LLM"
    - "Any OS: macOS · Windows · Linux"
  items:
    - title: "Ask for data in MongoDB"
      body: "No query language required. Describe the data you want and the agent finds the collection, builds the query, and returns the documents, showing its work at every step."
      visual: terminal
      terminal:
        title: "Claude Code · data-studio"
        messages:
          - role: user
            text: "Find all users older than 30 in MongoDB"
          - role: agent
            text: "Reading the schema of the users collection…"
          - role: tool
            name: "data_studio__mongo__find"
            detail: "db.users.find({ age: { $gt: 30 } }).limit(10)"
          - role: result
            text: "12 documents returned\n\n{ \"_id\": \"67f2a1…\", \"name\": \"Ada Lovelace\", \"age\": 42 }\n{ \"_id\": \"67f2a1…\", \"name\": \"Grace Hopper\", \"age\": 51 }\n{ \"_id\": \"67f2a1…\", \"name\": \"Katherine Johnson\", \"age\": 63 }"
          - role: agent
            text: "Found 12 users older than 30. Here are the first three. Want me to filter by city or sort by age?"
      align: left

    - title: "List tables in PostgreSQL"
      body: "Ask which tables your PostgreSQL database has and the agent answers from the live schema. No need to memorize names or dig through pg_catalog."
      visual: terminal
      terminal:
        title: "OpenCode · data-studio"
        messages:
          - role: user
            text: "List all tables in my PostgreSQL database"
          - role: agent
            text: "Reading the schema of your connected database…"
          - role: tool
            name: "data_studio__sqlkit__list_tables"
            detail: "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name"
          - role: result
            text: "14 tables\n\norders · customers · products · order_items\npayments · shipments · reviews · inventory\nusers · sessions · carts · coupons\ndiscounts · audit_logs"
          - role: agent
            text: "Your public schema has 14 tables. Want me to describe any of them?"
      align: left

    - title: "Search Elasticsearch without the DSL"
      body: "Describe the documents you're after and the agent translates it into the right query, across indices, mappings, and aggregations, through DocKit's bridge."
      visual: terminal
      terminal:
        title: "Windsurf · data-studio"
        messages:
          - role: user
            text: "Show me the last 10 orders from Elasticsearch"
          - role: agent
            text: "Checking the orders* indices…"
          - role: tool
            name: "data_studio__es__search"
            detail: "GET /orders*/_search  sort: [created_at desc]  size: 10"
          - role: result
            text: "10 hits in 18ms\n\n{ \"_source\": { \"order_id\": \"ORD-8291\", \"total\": 149.50, \"created_at\": \"2026-08-07T14:02:11Z\" } }\n{ \"_source\": { \"order_id\": \"ORD-8290\", \"total\": 89.00, \"created_at\": \"2026-08-07T13:41:08Z\" } }"
          - role: agent
            text: "Here are the 10 most recent orders from the orders* indices."
      align: left

architecture:
  eyebrow: "How it works"
  title: "Every database, every tool, one config"
  subtitle: "Ask your databases in plain language. Tell your agent what you need, it reads schemas, writes queries, and returns results. One MCP server config routes to the right backend across SQL and NoSQL, local and cloud, without per-database glue code."

features:
  eyebrow: "Why Data Studio Agent"
  title: "Core capabilities"
  items:
    - { title: "One MCP server for your whole stack", body: "A single npm package routes to both SqlKit (SQL) and DocKit (NoSQL) bridges over localhost. No per-database glue code. Register one MCP server, query everything.", icon: "database" }
    - { title: "Plain-language database work", body: "No more writing every JOIN by hand or digging through CLI output. Ask for what you need and the agent executes verified queries against your real schemas.", icon: "sparkles" }
    - { title: "Always-on diagnostics", body: "Every tool reports backend availability and permission state. If a database app isn't running or an operation is gated, the agent gets an actionable message, not a silent failure.", icon: "search" }
    - { title: "Built on the apps you trust", body: "All database drivers, SSH tunnels, and connection management live in DocKit and SqlKit. The MCP server is a thin routing layer that auto-discovers running backends.", icon: "layers" }

tools:
  eyebrow: "What your agent can do"
  title: "Every tool your agent needs, one config"
  subtitle: "One MCP server exposes a focused toolset per backend. Your agent reads schemas, runs queries, and gets actionable diagnostics. No more, no less."
  groups:
    - name: "SQL · SqlKit"
      prefix: "data_studio__sql_"
      tools:
        - { name: "execute", desc: "Run a SQL statement against a connected database. Read or write depending on the permission mode.", access: "Read-Write" }
        - { name: "list_tables", desc: "List tables and views in the connected database.", access: "Read" }
        - { name: "describe_table", desc: "Show columns, types, and constraints for a table.", access: "Read" }
        - { name: "explain", desc: "Run EXPLAIN to diagnose slow queries.", access: "Read" }
    - name: "Elasticsearch · DocKit"
      prefix: "data_studio__es_"
      tools:
        - { name: "search", desc: "Query documents across one or more indices.", access: "Read-Write" }
        - { name: "list_indices", desc: "List available indices and their health.", access: "Read" }
        - { name: "get_mapping", desc: "Inspect the mapping of an index before querying.", access: "Read" }
    - name: "MongoDB · DocKit"
      prefix: "data_studio__mongo_"
      tools:
        - { name: "find", desc: "Query documents with filters and projections.", access: "Read-Write" }
        - { name: "list_collections", desc: "List collections in the connected database.", access: "Read" }
        - { name: "insert", desc: "Insert one or more documents into a collection.", access: "Full" }
    - name: "DynamoDB · DocKit"
      prefix: "data_studio__dynamo_"
      tools:
        - { name: "query", desc: "Query items by partition key and optional sort key.", access: "Read-Write" }
        - { name: "list_tables", desc: "List tables in the connected AWS region.", access: "Read" }
        - { name: "scan", desc: "Scan items across a table, filtered server-side.", access: "Read-Write" }

security:
  eyebrow: "Enterprise-grade security"
  title: "Built for security-first teams"
  items:
    - title: "Credentials never leave the apps"
      body: "The LLM only ever sees an opaque connection_id. Real credentials are resolved inside DocKit/SqlKit and never cross the MCP boundary. Your passwords and keys stay on your machine, in your app."
      icon: "lock"
    - title: "ID-based resource access"
      body: "Agents access databases strictly by connection ID, never by embedding credentials in prompts or tool arguments. There is no path for the model to obtain or exfiltrate connection secrets."
      icon: "id"
    - title: "Three-tier permission model"
      body: "Read Only / Data Read-Write / Full Access modes gate every capability by risk level. Plus per-connection overrides: mark any connection read-only, or allowlist specific actions."
      icon: "shield"
    - title: "Explicit user confirmation"
      body: "Destructive operations (DELETE, DROP, TRUNCATE) surface as Ask in the policy. The client prompts the user for explicit confirmation before anything destructive runs."
      icon: "check"
    - title: "Action-level statement classification"
      body: "SQL is parsed and classified by statement kind (Read / Write / Delete / DDL) before execution. Write-only tools reject DELETE statements, and delete tools reject DDL."
      icon: "alert"
    - title: "Local-only bridge"
      body: "The bridge binds to 127.0.0.1 exclusively, unreachable from other machines. A thin routing layer with no server to host and no API keys to manage."
      icon: "local"
  permissionModes:
    - name: "Read Only"
      tag: "Default"
      desc: "The safest mode. The agent can explore and read, never modify."
      allows:
        - "Explore schemas, tables, and indices"
        - "Run SELECT queries and searches"
        - "Inspect query plans with EXPLAIN"
      blocks:
        - "INSERT, UPDATE, DELETE statements"
        - "DDL (CREATE, ALTER, DROP)"
    - name: "Data Read/Write"
      tag: "Recommended"
      desc: "Let the agent work with your data. Writes allowed, structure protected."
      allows:
        - "Everything in Read Only"
        - "INSERT and UPDATE statements"
        - "Index management"
      blocks:
        - "DELETE, TRUNCATE statements"
        - "DDL on tables and views"
    - name: "Full Access"
      tag: "Power user"
      desc: "Every capability unlocked. Destructive operations still require your confirmation."
      allows:
        - "Everything in Data Read/Write"
        - "DELETE, DROP, TRUNCATE with Ask"
        - "Connection-level overrides and allowlists"
      blocks:
        - "Nothing, but destructive ops always surface as Ask"


cta:
  title: "Give your coding agent access to your data"
  body: "Install the MCP server, point it at DocKit and SqlKit, and start asking questions in plain language. Free, open source, Apache 2.0."
  actions:
    - { text: "Get Started", link: "https://www.npmjs.com/package/@geek-fun/data-studio-mcp", theme: "brand", external: true }
    - { text: "View on GitHub", link: "https://github.com/geek-fun/data-studio-agent", theme: "alt", external: true }
---
