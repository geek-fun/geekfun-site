<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import DocsIcon from './DocsIcon.vue'
import DocsIconStack, { type StackLogo } from './DocsIconStack.vue'

type FlowVariant = 'mcp-bridge' | 'ssh-tunnel' | 'ai-safety' | 'multi-driver'

const props = withDefaults(defineProps<{
  variant?: FlowVariant
}>(), {
  variant: 'mcp-bridge',
})

const { lang } = useData()
const isZh = computed(() => lang.value === 'zh')

const agentLogos: StackLogo[] = [
  { name: 'Claude Code', src: '/agent-logos/claude-code-logo.png' },
  { name: 'Codex', src: '/agent-logos/codex-logo.png' },
  { name: 'Cursor', src: '/agent-logos/cursor-logo.png' },
  { name: 'Windsurf', src: '/agent-logos/windsurf-logo.png' },
]

const databaseLogos: StackLogo[] = [
  { name: 'PostgreSQL', src: '/db-logos/postgresql-logo.svg' },
  { name: 'MySQL', src: '/db-logos/mysql-logo.svg' },
  { name: 'SQL Server', src: '/db-logos/sqlserver-logo.svg' },
  { name: 'Oracle', src: '/db-logos/oracle-logo.svg' },
]

const nativeDbLogos: StackLogo[] = [
  { name: 'PostgreSQL', src: '/db-logos/postgresql-logo.svg' },
  { name: 'MySQL', src: '/db-logos/mysql-logo.svg' },
  { name: 'SQL Server', src: '/db-logos/sqlserver-logo.svg' },
  { name: 'SQLite', src: '/db-logos/sqlite-logo.svg' },
  { name: 'ClickHouse', src: '/db-logos/clickhouse-logo.svg' },
]

const jdbcDbLogos: StackLogo[] = [
  { name: 'Oracle', src: '/db-logos/oracle-logo.svg' },
  { name: 'DuckDB', src: '/db-logos/duckdb-logo.svg' },
  { name: 'Snowflake', src: '/db-logos/snowflake-logo.svg' },
  { name: 'BigQuery', src: '/db-logos/bigquery-logo.svg' },
  { name: 'Cassandra', src: '/db-logos/cassandra-logo.svg' },
]

const mcpCopy = computed(() =>
  isZh.value
    ? {
        ariaLabel: 'SqlKit MCP 桥接架构数据流图',
        boundaryTitle: '本机运行边界 · 127.0.0.1',
        boundaryBadge: '凭据不离开 SqlKit',
        agentTitle: '编程智能体',
        agentSubtitle: 'Claude Code · Codex · Cursor · Windsurf · OpenCode',
        agentStackLabel: '支持的编程智能体',
        edge1Protocol: 'stdio MCP',
        edge1Detail: '本机 stdin / stdout JSON-RPC',
        mcpTitle: 'Data Studio Agent',
        mcpSubtitle: 'npx @geek-fun/data-studio-mcp',
        mcpBadge: '本地路由',
        edge2Protocol: 'localhost HTTP',
        edge2Detail: '仅监听 127.0.0.1 本机回环',
        bridgeTitle: 'SqlKit MCP 桥接',
        bridgeSubtitle: '单连接 AI 权限策略 · SQL AST 与 CQL 写防护',
        bridgeBadge: '权限 + AST 防护',
        edge3Protocol: '原生 / SSH / JDBC',
        edge3Detail: '加密 TLS 与本地数据库驱动',
        dbTitle: '目标数据库',
        dbSubtitle: '本地、云端或私有 VPC，支持 68+ SQL 引擎',
        dbStackLabel: '支持的 SQL 数据库引擎',
        caption: 'Data Studio Agent 在本机以 stdio 模式运行，经由 SqlKit 内嵌 MCP 桥接完成权限与 AST 校验后再访问目标数据库。',
      }
    : {
        ariaLabel: 'SqlKit MCP Bridge architecture flow diagram',
        boundaryTitle: 'LOCAL MACHINE · 127.0.0.1',
        boundaryBadge: 'Credentials stay in SqlKit',
        agentTitle: 'Coding Agent',
        agentSubtitle: 'Claude Code · Codex · Cursor · Windsurf · OpenCode',
        agentStackLabel: 'Supported coding agents',
        edge1Protocol: 'stdio MCP',
        edge1Detail: 'Local stdin / stdout JSON-RPC',
        mcpTitle: 'Data Studio Agent',
        mcpSubtitle: 'npx @geek-fun/data-studio-mcp',
        mcpBadge: 'Stdio Router',
        edge2Protocol: 'localhost HTTP',
        edge2Detail: '127.0.0.1 loopback only',
        bridgeTitle: 'SqlKit MCP Bridge',
        bridgeSubtitle: 'Per-connection AI policy · SQL AST & CQL guard',
        bridgeBadge: 'Policy + AST Guard',
        edge3Protocol: 'Native / SSH / JDBC',
        edge3Detail: 'Encrypted TLS & local drivers',
        dbTitle: 'Your Database',
        dbSubtitle: 'Local, cloud, or private VPC across 68+ SQL engines',
        dbStackLabel: 'Supported SQL database engines',
        caption: 'Data Studio Agent runs locally over stdio and routes every database tool call through SqlKit\'s embedded MCP Bridge for policy and AST checks.',
      },
)

const sshCopy = computed(() =>
  isZh.value
    ? {
        ariaLabel: 'SqlKit SSH 多跳隧道与系统代理链路图',
        clientTitle: '本机 SqlKit',
        clientSubtitle: '本地回环端口 127.0.0.1:<随机空闲端口>',
        clientBadge: '客户端',
        edge1Protocol: '可选第 0 跳',
        edge1Detail: '系统 HTTP CONNECT 代理（自动检测）',
        chainTitle: 'SSH-2 加密跳板链路',
        chainBadge: '10s 超时 · 30s 保活',
        hop1Title: '堡垒机 1（SSH）',
        hop1Subtitle: '可复用 SSH 配置 · 密码、私钥或 SSH Agent 认证',
        hop1Badge: '第 1 跳',
        edge2Protocol: '多跳链路转发',
        edge2Detail: '支持拖拽排序 · 自动解析 ~/.ssh/config',
        hop2Title: '堡垒机 2 … N（可选）',
        hop2Subtitle: '按顺序串联更多跳板机进入受限私有子网',
        hop2Badge: '第 N 跳',
        edge3Protocol: '内网 TCP / TLS 转发',
        edge3Detail: '按最后一跳视角连接数据库主机与端口',
        dbTitle: '内网目标数据库',
        dbSubtitle: '私有 VPC、企业内网或堡垒机本机端口',
        dbStackLabel: '目标数据库引擎',
        caption: 'SqlKit 通过本地回环端口与可复用多跳 SSH 链路建立加密转发，可选经由操作系统 HTTP CONNECT 代理发起第一跳。',
      }
    : {
        ariaLabel: 'SqlKit SSH multi-hop tunnel and system proxy flow diagram',
        clientTitle: 'SqlKit on Your Machine',
        clientSubtitle: 'Local loopback listener 127.0.0.1:<ephemeral port>',
        clientBadge: 'Client',
        edge1Protocol: 'Optional Hop 0',
        edge1Detail: 'OS System Proxy (http:// CONNECT)',
        chainTitle: 'ENCRYPTED SSH-2 JUMP CHAIN',
        chainBadge: '10s timeout · 30s keepalive',
        hop1Title: 'Bastion 1 (SSH)',
        hop1Subtitle: 'Reusable SSH profile · Password, Private Key, or SSH Agent',
        hop1Badge: 'Hop 1',
        edge2Protocol: 'Multi-hop Forwarding',
        edge2Detail: 'Drag-and-drop order · ~/.ssh/config alias resolution',
        hop2Title: 'Bastion 2 … N (Optional)',
        hop2Subtitle: 'Chain additional jump hosts into restricted private subnets',
        hop2Badge: 'Hop N',
        edge3Protocol: 'Internal TCP / TLS',
        edge3Detail: 'Target host & port as reachable from the final bastion',
        dbTitle: 'Private Database',
        dbSubtitle: 'Private VPC, corporate subnet, or bastion localhost',
        dbStackLabel: 'Target database engines',
        caption: 'SqlKit binds a local loopback port and forwards database traffic through single or multi-hop SSH bastions, optionally chaining through the OS HTTP CONNECT proxy on hop 0.',
      },
)

const aiSafetyCopy = computed(() =>
  isZh.value
    ? {
        ariaLabel: 'SqlKit AI 与 MCP 五层安全校验流程图',
        inputTitle: 'AI / MCP 工具调用请求',
        inputSubtitle: 'Data Studio · 查询页 AI 助手 · 外部 MCP 客户端',
        inputStackLabel: '发起调用的客户端',
        edge1Protocol: '按风险拆分工具',
        edge1Detail: 'execute_query / execute_write / execute_delete / execute_ddl / DBA',
        boundaryTitle: 'FAIL-CLOSED 默认拒绝安全管道',
        boundaryBadge: '策略缺失即拒绝',
        gate1Title: '1. 单连接策略与会话收紧',
        gate1Subtitle: '单连接覆写 → 系统默认策略 → 拒绝；会话级只能缩窄不能放宽',
        gate1Badge: '5 维权限',
        edge2Protocol: '权限判定通过',
        edge2Detail: 'Read · Create · Update · Delete · Manage',
        gate2Title: '2. SQL AST 与 CQL 写隔离',
        gate2Subtitle: 'sqlparser 语法树拦截只读工具内夹带的写语句与修改型 CTE',
        gate2Badge: 'AST 防护',
        edge3Protocol: '提权 / 破坏性门禁',
        edge3Detail: 'Ask / Auto 审批模式与会话级记忆规则',
        gate3Title: '3. 交互确认卡审批',
        gate3Subtitle: '仅允许本次 · 总是允许 · 拒绝 · 总是拒绝 · 取消',
        gate3Badge: 'Ask / Auto',
        edge4Protocol: '仅以保存账号执行',
        edge4Detail: '数据库密码、SSH 私钥与 TLS 证书永不发往 LLM',
        dbTitle: '数据库服务端账号授权',
        dbSubtitle: '最终由连接中配置的数据库用户角色与 GRANT 权限兜底',
        dbBadge: '最小权限兜底',
        caption: '所有内置 AI 与外部 MCP 调用均经过同一套默认拒绝策略链、AST 读写隔离与确认审批，最后受数据库账号自身权限约束。',
      }
    : {
        ariaLabel: 'SqlKit five-layer AI and MCP safety pipeline diagram',
        inputTitle: 'Incoming AI / MCP Tool Call',
        inputSubtitle: 'Agentic Data Studio · Queries AI Sidebar · External MCP Clients',
        inputStackLabel: 'AI and MCP callers',
        edge1Protocol: 'Risk-separated Tool',
        edge1Detail: 'execute_query / execute_write / execute_delete / execute_ddl / DBA',
        boundaryTitle: 'FAIL-CLOSED SAFETY PIPELINE',
        boundaryBadge: 'Deny on missing policy',
        gate1Title: '1. Connection & Session Policy',
        gate1Subtitle: 'Connection override → System default → Deny; session can only narrow',
        gate1Badge: '5 Actions',
        edge2Protocol: 'Action Permitted',
        edge2Detail: 'Read · Create · Update · Delete · Manage',
        gate2Title: '2. SQL AST & CQL Write Guard',
        gate2Subtitle: 'sqlparser blocks writes and modifying CTEs inside read-only tools',
        gate2Badge: 'AST Guard',
        edge3Protocol: 'Risk-tier Approval',
        edge3Detail: 'Ask / Auto mode & saved session rules',
        gate3Title: '3. Interactive Approval Card',
        gate3Subtitle: 'Allow Once · Allow Always · Deny · Deny Always · Cancel',
        gate3Badge: 'Ask / Auto',
        edge4Protocol: 'Saved DB Login Only',
        edge4Detail: 'Passwords, SSH keys & TLS certs are never sent to LLMs',
        dbTitle: 'Database Server Grants',
        dbSubtitle: 'Final enforcement by the database user role configured on the connection',
        dbBadge: 'Least Privilege',
        caption: 'Every in-app AI and external MCP request passes through the same fail-closed policy chain, AST write guard, approval step, and database-level grants.',
      },
)

const multiDriverCopy = computed(() =>
  isZh.value
    ? {
        ariaLabel: 'SqlKit 多驱动双通道架构图',
        coreTitle: 'SqlKit 桌面内核（Rust + Tauri v2）',
        coreSubtitle: '统一管理 68 种数据库配置、SSL/TLS、SSH 隧道、SQL 方言与 AI 权限',
        coreBadge: '68+ 引擎',
        splitLabel: '按数据库协议自动路由适配器',
        nativeEyebrow: '内置原生 Rust · 零外部依赖',
        nativeCount: '41 种引擎',
        nativeRows: [
          { tag: 'TCP / 文件 (5)', desc: 'PostgreSQL、MySQL、SQL Server、SQLite、SQLCipher' },
          { tag: '兼容协议 (31)', desc: '18 种 PG 兼容 + 13 种 MySQL 兼容（CockroachDB、TiDB、MariaDB…）' },
          { tag: 'HTTP SQL (5)', desc: 'ClickHouse、Turso、QuestDB、Databend、rqlite' },
        ],
        nativeStackLabel: '内置原生引擎示例',
        jdbcEyebrow: '按需 JDBC 桥接 · 自动安装管理',
        jdbcCount: '27 种引擎',
        jdbcRuntimeTitle: '受管 JRE 25 + Java JDBC 桥接进程',
        jdbcRuntimeDesc: 'stdin/stdout JSON-RPC 通信 · HikariCP 连接池 · 首次连接自动拉取驱动 JAR',
        jdbcEnginesTitle: '27 种企业级与云数仓引擎',
        jdbcEnginesDesc: 'Oracle、DuckDB、Snowflake、BigQuery、Cassandra、ScyllaDB、SAP HANA、DB2、DM8…',
        jdbcStackLabel: 'JDBC 桥接引擎示例',
        caption: '核心 41 种引擎直接由原生 Rust 驱动运行，无需 Java；其余 27 种引擎通过自动管理的 JRE 25 与 JDBC 桥接子进程按需加载。',
      }
    : {
        ariaLabel: 'SqlKit multi-driver architecture diagram',
        coreTitle: 'SqlKit Desktop Core (Rust + Tauri v2)',
        coreSubtitle: 'Unified workspace for 68 profiles, SSL/TLS, SSH tunnels, SQL dialects & AI policies',
        coreBadge: '68+ Engines',
        splitLabel: 'Routes each connection to its protocol adapter',
        nativeEyebrow: 'BUILT-IN RUST · ZERO JAVA REQUIRED',
        nativeCount: '41 engines',
        nativeRows: [
          { tag: 'TCP & File (5)', desc: 'PostgreSQL, MySQL, SQL Server, SQLite, SQLCipher' },
          { tag: 'Wire-compat (31)', desc: '18 PG-wire + 13 MySQL-wire (CockroachDB, TiDB, MariaDB, Redshift…)' },
          { tag: 'HTTP SQL (5)', desc: 'ClickHouse, Turso, QuestDB, Databend, rqlite' },
        ],
        nativeStackLabel: 'Built-in Rust database engines',
        jdbcEyebrow: 'ON-DEMAND JDBC BRIDGE · AUTO-MANAGED',
        jdbcCount: '27 engines',
        jdbcRuntimeTitle: 'Managed JRE 25 + Java JDBC Bridge',
        jdbcRuntimeDesc: 'stdin/stdout JSON-RPC · HikariCP pools · auto-downloads driver JARs on first test',
        jdbcEnginesTitle: '27 Enterprise & Cloud Engines',
        jdbcEnginesDesc: 'Oracle, DuckDB, Snowflake, BigQuery, Cassandra, ScyllaDB, SAP HANA, DB2, DM8…',
        jdbcStackLabel: 'JDBC Bridge database engines',
        caption: '41 core engines run natively in Rust with zero external runtime; 27 enterprise and analytical engines load on demand through a managed JRE 25 and JDBC Bridge subprocess.',
      },
)
</script>

<template>
  <figure
    v-if="props.variant === 'mcp-bridge'"
    class="docs-flow docs-flow--mcp"
    :aria-label="mcpCopy.ariaLabel"
  >
    <div class="docs-flow__canvas">
      <div class="docs-flow__boundary">
        <div class="docs-flow__boundary-bar">
          <span class="docs-flow__boundary-title">
            <span class="docs-flow__beacon" aria-hidden="true"></span>
            {{ mcpCopy.boundaryTitle }}
          </span>
          <span class="docs-flow__boundary-pill">
            <DocsIcon name="lock" :size="12" />
            {{ mcpCopy.boundaryBadge }}
          </span>
        </div>

        <div class="docs-flow__node docs-flow__node--violet docs-flow__node--step-1">
          <div class="docs-flow__visual docs-flow__visual--icon docs-flow__visual--icon-violet">
            <DocsIcon name="terminal" :size="19" />
          </div>
          <div class="docs-flow__body">
            <div class="docs-flow__title">{{ mcpCopy.agentTitle }}</div>
            <div class="docs-flow__subtitle">{{ mcpCopy.agentSubtitle }}</div>
          </div>
          <div class="docs-flow__aside">
            <DocsIconStack
              :items="agentLogos"
              :max="4"
              :extra-count="10"
              size="sm"
              :aria-label="mcpCopy.agentStackLabel"
            />
          </div>
        </div>

        <div class="docs-flow__edge docs-flow__edge--step-1" aria-hidden="true">
          <div class="docs-flow__rail">
            <svg viewBox="0 0 24 42" fill="none">
              <line x1="12" y1="0" x2="12" y2="36" class="docs-flow__wire-bg" />
              <line x1="12" y1="0" x2="12" y2="36" class="docs-flow__wire-dash" />
              <path d="M7.5 31.5L12 37L16.5 31.5" class="docs-flow__arrow" />
            </svg>
            <span class="docs-flow__pulse"></span>
          </div>
          <div class="docs-flow__edge-meta">
            <span class="docs-flow__protocol">{{ mcpCopy.edge1Protocol }}</span>
            <span class="docs-flow__edge-detail">{{ mcpCopy.edge1Detail }}</span>
          </div>
        </div>

        <div class="docs-flow__node docs-flow__node--amber docs-flow__node--step-2">
          <div class="docs-flow__visual docs-flow__visual--logo docs-flow__visual--vector">
            <img :src="withBase('/data-studio-agent.svg')" alt="" width="24" height="24" />
          </div>
          <div class="docs-flow__body">
            <div class="docs-flow__title">{{ mcpCopy.mcpTitle }}</div>
            <div class="docs-flow__subtitle docs-flow__subtitle--mono">{{ mcpCopy.mcpSubtitle }}</div>
          </div>
          <div class="docs-flow__aside">
            <span class="docs-flow__chip docs-flow__chip--amber">{{ mcpCopy.mcpBadge }}</span>
          </div>
        </div>

        <div class="docs-flow__edge docs-flow__edge--step-2" aria-hidden="true">
          <div class="docs-flow__rail">
            <svg viewBox="0 0 24 42" fill="none">
              <line x1="12" y1="0" x2="12" y2="36" class="docs-flow__wire-bg" />
              <line x1="12" y1="0" x2="12" y2="36" class="docs-flow__wire-dash" />
              <path d="M7.5 31.5L12 37L16.5 31.5" class="docs-flow__arrow" />
            </svg>
            <span class="docs-flow__pulse"></span>
          </div>
          <div class="docs-flow__edge-meta">
            <span class="docs-flow__protocol">{{ mcpCopy.edge2Protocol }}</span>
            <span class="docs-flow__edge-detail">{{ mcpCopy.edge2Detail }}</span>
          </div>
        </div>

        <div class="docs-flow__node docs-flow__node--blue docs-flow__node--step-3">
          <div class="docs-flow__visual docs-flow__visual--logo">
            <img :src="withBase('/sqlkit.png')" alt="" width="40" height="40" />
          </div>
          <div class="docs-flow__body">
            <div class="docs-flow__title">{{ mcpCopy.bridgeTitle }}</div>
            <div class="docs-flow__subtitle">{{ mcpCopy.bridgeSubtitle }}</div>
          </div>
          <div class="docs-flow__aside">
            <span class="docs-flow__chip docs-flow__chip--blue">
              <DocsIcon name="shield" :size="12" />
              {{ mcpCopy.bridgeBadge }}
            </span>
          </div>
        </div>
      </div>

      <div class="docs-flow__edge docs-flow__edge--step-3 docs-flow__edge--outbound" aria-hidden="true">
        <div class="docs-flow__rail">
          <svg viewBox="0 0 24 44" fill="none">
            <line x1="12" y1="0" x2="12" y2="38" class="docs-flow__wire-bg" />
            <line x1="12" y1="0" x2="12" y2="38" class="docs-flow__wire-dash docs-flow__wire-dash--emerald" />
            <path d="M7.5 33.5L12 39L16.5 33.5" class="docs-flow__arrow docs-flow__arrow--emerald" />
          </svg>
          <span class="docs-flow__pulse docs-flow__pulse--emerald"></span>
        </div>
        <div class="docs-flow__edge-meta">
          <span class="docs-flow__protocol docs-flow__protocol--emerald">{{ mcpCopy.edge3Protocol }}</span>
          <span class="docs-flow__edge-detail">{{ mcpCopy.edge3Detail }}</span>
        </div>
      </div>

      <div class="docs-flow__node docs-flow__node--emerald docs-flow__node--target docs-flow__node--step-4">
        <div class="docs-flow__visual docs-flow__visual--icon docs-flow__visual--icon-emerald">
          <DocsIcon name="database" :size="19" />
        </div>
        <div class="docs-flow__body">
          <div class="docs-flow__title">{{ mcpCopy.dbTitle }}</div>
          <div class="docs-flow__subtitle">{{ mcpCopy.dbSubtitle }}</div>
        </div>
        <div class="docs-flow__aside">
          <DocsIconStack
            :items="databaseLogos"
            :max="4"
            :extra-count="64"
            size="sm"
            :aria-label="mcpCopy.dbStackLabel"
          />
        </div>
      </div>
    </div>

    <figcaption class="docs-flow__caption">{{ mcpCopy.caption }}</figcaption>
  </figure>

  <figure
    v-else-if="props.variant === 'ssh-tunnel'"
    class="docs-flow docs-flow--ssh"
    :aria-label="sshCopy.ariaLabel"
  >
    <div class="docs-flow__canvas">
      <div class="docs-flow__node docs-flow__node--blue docs-flow__node--outer docs-flow__node--step-1">
        <div class="docs-flow__visual docs-flow__visual--logo">
          <img :src="withBase('/sqlkit.png')" alt="" width="40" height="40" />
        </div>
        <div class="docs-flow__body">
          <div class="docs-flow__title">{{ sshCopy.clientTitle }}</div>
          <div class="docs-flow__subtitle docs-flow__subtitle--mono">{{ sshCopy.clientSubtitle }}</div>
        </div>
        <div class="docs-flow__aside">
          <span class="docs-flow__chip docs-flow__chip--blue">{{ sshCopy.clientBadge }}</span>
        </div>
      </div>

      <div class="docs-flow__edge docs-flow__edge--step-1 docs-flow__edge--outbound" aria-hidden="true">
        <div class="docs-flow__rail">
          <svg viewBox="0 0 24 44" fill="none">
            <line x1="12" y1="0" x2="12" y2="38" class="docs-flow__wire-bg" />
            <line x1="12" y1="0" x2="12" y2="38" class="docs-flow__wire-dash" />
            <path d="M7.5 33.5L12 39L16.5 33.5" class="docs-flow__arrow" />
          </svg>
          <span class="docs-flow__pulse"></span>
        </div>
        <div class="docs-flow__edge-meta">
          <span class="docs-flow__protocol docs-flow__protocol--dashed">{{ sshCopy.edge1Protocol }}</span>
          <span class="docs-flow__edge-detail">{{ sshCopy.edge1Detail }}</span>
        </div>
      </div>

      <div class="docs-flow__boundary docs-flow__boundary--ssh">
        <div class="docs-flow__boundary-bar">
          <span class="docs-flow__boundary-title">
            <span class="docs-flow__beacon" aria-hidden="true"></span>
            {{ sshCopy.chainTitle }}
          </span>
          <span class="docs-flow__boundary-pill">
            <DocsIcon name="lock" :size="12" />
            {{ sshCopy.chainBadge }}
          </span>
        </div>

        <div class="docs-flow__node docs-flow__node--violet docs-flow__node--step-2">
          <div class="docs-flow__visual docs-flow__visual--icon docs-flow__visual--icon-violet">
            <DocsIcon name="server" :size="19" />
          </div>
          <div class="docs-flow__body">
            <div class="docs-flow__title">{{ sshCopy.hop1Title }}</div>
            <div class="docs-flow__subtitle">{{ sshCopy.hop1Subtitle }}</div>
          </div>
          <div class="docs-flow__aside">
            <span class="docs-flow__chip docs-flow__chip--violet">{{ sshCopy.hop1Badge }}</span>
          </div>
        </div>

        <div class="docs-flow__edge docs-flow__edge--step-2" aria-hidden="true">
          <div class="docs-flow__rail">
            <svg viewBox="0 0 24 42" fill="none">
              <line x1="12" y1="0" x2="12" y2="36" class="docs-flow__wire-bg" />
              <line x1="12" y1="0" x2="12" y2="36" class="docs-flow__wire-dash" />
              <path d="M7.5 31.5L12 37L16.5 31.5" class="docs-flow__arrow" />
            </svg>
            <span class="docs-flow__pulse"></span>
          </div>
          <div class="docs-flow__edge-meta">
            <span class="docs-flow__protocol">{{ sshCopy.edge2Protocol }}</span>
            <span class="docs-flow__edge-detail">{{ sshCopy.edge2Detail }}</span>
          </div>
        </div>

        <div class="docs-flow__node docs-flow__node--amber docs-flow__node--optional docs-flow__node--step-3">
          <div class="docs-flow__visual docs-flow__visual--icon docs-flow__visual--icon-amber">
            <DocsIcon name="layers" :size="19" />
          </div>
          <div class="docs-flow__body">
            <div class="docs-flow__title">{{ sshCopy.hop2Title }}</div>
            <div class="docs-flow__subtitle">{{ sshCopy.hop2Subtitle }}</div>
          </div>
          <div class="docs-flow__aside">
            <span class="docs-flow__chip docs-flow__chip--amber">{{ sshCopy.hop2Badge }}</span>
          </div>
        </div>
      </div>

      <div class="docs-flow__edge docs-flow__edge--step-3 docs-flow__edge--outbound" aria-hidden="true">
        <div class="docs-flow__rail">
          <svg viewBox="0 0 24 44" fill="none">
            <line x1="12" y1="0" x2="12" y2="38" class="docs-flow__wire-bg" />
            <line x1="12" y1="0" x2="12" y2="38" class="docs-flow__wire-dash docs-flow__wire-dash--emerald" />
            <path d="M7.5 33.5L12 39L16.5 33.5" class="docs-flow__arrow docs-flow__arrow--emerald" />
          </svg>
          <span class="docs-flow__pulse docs-flow__pulse--emerald"></span>
        </div>
        <div class="docs-flow__edge-meta">
          <span class="docs-flow__protocol docs-flow__protocol--emerald">{{ sshCopy.edge3Protocol }}</span>
          <span class="docs-flow__edge-detail">{{ sshCopy.edge3Detail }}</span>
        </div>
      </div>

      <div class="docs-flow__node docs-flow__node--emerald docs-flow__node--target docs-flow__node--step-4">
        <div class="docs-flow__visual docs-flow__visual--icon docs-flow__visual--icon-emerald">
          <DocsIcon name="database" :size="19" />
        </div>
        <div class="docs-flow__body">
          <div class="docs-flow__title">{{ sshCopy.dbTitle }}</div>
          <div class="docs-flow__subtitle">{{ sshCopy.dbSubtitle }}</div>
        </div>
        <div class="docs-flow__aside">
          <DocsIconStack
            :items="databaseLogos"
            :max="4"
            :extra-count="64"
            size="sm"
            :aria-label="sshCopy.dbStackLabel"
          />
        </div>
      </div>
    </div>

    <figcaption class="docs-flow__caption">{{ sshCopy.caption }}</figcaption>
  </figure>

  <figure
    v-else-if="props.variant === 'ai-safety'"
    class="docs-flow docs-flow--safety docs-flow--five"
    :aria-label="aiSafetyCopy.ariaLabel"
  >
    <div class="docs-flow__canvas">
      <div class="docs-flow__node docs-flow__node--violet docs-flow__node--outer docs-flow__node--step-1">
        <div class="docs-flow__visual docs-flow__visual--icon docs-flow__visual--icon-violet">
          <DocsIcon name="sparkles" :size="19" />
        </div>
        <div class="docs-flow__body">
          <div class="docs-flow__title">{{ aiSafetyCopy.inputTitle }}</div>
          <div class="docs-flow__subtitle">{{ aiSafetyCopy.inputSubtitle }}</div>
        </div>
        <div class="docs-flow__aside">
          <DocsIconStack
            :items="agentLogos"
            :max="4"
            :extra-count="10"
            size="sm"
            :aria-label="aiSafetyCopy.inputStackLabel"
          />
        </div>
      </div>

      <div class="docs-flow__edge docs-flow__edge--step-1 docs-flow__edge--outbound" aria-hidden="true">
        <div class="docs-flow__rail">
          <svg viewBox="0 0 24 44" fill="none">
            <line x1="12" y1="0" x2="12" y2="38" class="docs-flow__wire-bg" />
            <line x1="12" y1="0" x2="12" y2="38" class="docs-flow__wire-dash" />
            <path d="M7.5 33.5L12 39L16.5 33.5" class="docs-flow__arrow" />
          </svg>
          <span class="docs-flow__pulse"></span>
        </div>
        <div class="docs-flow__edge-meta">
          <span class="docs-flow__protocol">{{ aiSafetyCopy.edge1Protocol }}</span>
          <span class="docs-flow__edge-detail">{{ aiSafetyCopy.edge1Detail }}</span>
        </div>
      </div>

      <div class="docs-flow__boundary">
        <div class="docs-flow__boundary-bar">
          <span class="docs-flow__boundary-title">
            <span class="docs-flow__beacon" aria-hidden="true"></span>
            {{ aiSafetyCopy.boundaryTitle }}
          </span>
          <span class="docs-flow__boundary-pill">
            <DocsIcon name="shield" :size="12" />
            {{ aiSafetyCopy.boundaryBadge }}
          </span>
        </div>

        <div class="docs-flow__node docs-flow__node--blue docs-flow__node--step-2">
          <div class="docs-flow__visual docs-flow__visual--icon docs-flow__visual--icon-blue">
            <DocsIcon name="shield" :size="19" />
          </div>
          <div class="docs-flow__body">
            <div class="docs-flow__title">{{ aiSafetyCopy.gate1Title }}</div>
            <div class="docs-flow__subtitle">{{ aiSafetyCopy.gate1Subtitle }}</div>
          </div>
          <div class="docs-flow__aside">
            <span class="docs-flow__chip docs-flow__chip--blue">{{ aiSafetyCopy.gate1Badge }}</span>
          </div>
        </div>

        <div class="docs-flow__edge docs-flow__edge--step-2" aria-hidden="true">
          <div class="docs-flow__rail">
            <svg viewBox="0 0 24 42" fill="none">
              <line x1="12" y1="0" x2="12" y2="36" class="docs-flow__wire-bg" />
              <line x1="12" y1="0" x2="12" y2="36" class="docs-flow__wire-dash" />
              <path d="M7.5 31.5L12 37L16.5 31.5" class="docs-flow__arrow" />
            </svg>
            <span class="docs-flow__pulse"></span>
          </div>
          <div class="docs-flow__edge-meta">
            <span class="docs-flow__protocol">{{ aiSafetyCopy.edge2Protocol }}</span>
            <span class="docs-flow__edge-detail">{{ aiSafetyCopy.edge2Detail }}</span>
          </div>
        </div>

        <div class="docs-flow__node docs-flow__node--amber docs-flow__node--step-3">
          <div class="docs-flow__visual docs-flow__visual--icon docs-flow__visual--icon-amber">
            <DocsIcon name="code" :size="19" />
          </div>
          <div class="docs-flow__body">
            <div class="docs-flow__title">{{ aiSafetyCopy.gate2Title }}</div>
            <div class="docs-flow__subtitle">{{ aiSafetyCopy.gate2Subtitle }}</div>
          </div>
          <div class="docs-flow__aside">
            <span class="docs-flow__chip docs-flow__chip--amber">{{ aiSafetyCopy.gate2Badge }}</span>
          </div>
        </div>

        <div class="docs-flow__edge docs-flow__edge--step-3" aria-hidden="true">
          <div class="docs-flow__rail">
            <svg viewBox="0 0 24 42" fill="none">
              <line x1="12" y1="0" x2="12" y2="36" class="docs-flow__wire-bg" />
              <line x1="12" y1="0" x2="12" y2="36" class="docs-flow__wire-dash" />
              <path d="M7.5 31.5L12 37L16.5 31.5" class="docs-flow__arrow" />
            </svg>
            <span class="docs-flow__pulse"></span>
          </div>
          <div class="docs-flow__edge-meta">
            <span class="docs-flow__protocol">{{ aiSafetyCopy.edge3Protocol }}</span>
            <span class="docs-flow__edge-detail">{{ aiSafetyCopy.edge3Detail }}</span>
          </div>
        </div>

        <div class="docs-flow__node docs-flow__node--violet docs-flow__node--step-4">
          <div class="docs-flow__visual docs-flow__visual--icon docs-flow__visual--icon-violet">
            <DocsIcon name="check" :size="19" />
          </div>
          <div class="docs-flow__body">
            <div class="docs-flow__title">{{ aiSafetyCopy.gate3Title }}</div>
            <div class="docs-flow__subtitle">{{ aiSafetyCopy.gate3Subtitle }}</div>
          </div>
          <div class="docs-flow__aside">
            <span class="docs-flow__chip docs-flow__chip--violet">{{ aiSafetyCopy.gate3Badge }}</span>
          </div>
        </div>
      </div>

      <div class="docs-flow__edge docs-flow__edge--step-4 docs-flow__edge--outbound" aria-hidden="true">
        <div class="docs-flow__rail">
          <svg viewBox="0 0 24 44" fill="none">
            <line x1="12" y1="0" x2="12" y2="38" class="docs-flow__wire-bg" />
            <line x1="12" y1="0" x2="12" y2="38" class="docs-flow__wire-dash docs-flow__wire-dash--emerald" />
            <path d="M7.5 33.5L12 39L16.5 33.5" class="docs-flow__arrow docs-flow__arrow--emerald" />
          </svg>
          <span class="docs-flow__pulse docs-flow__pulse--emerald"></span>
        </div>
        <div class="docs-flow__edge-meta">
          <span class="docs-flow__protocol docs-flow__protocol--emerald">{{ aiSafetyCopy.edge4Protocol }}</span>
          <span class="docs-flow__edge-detail">{{ aiSafetyCopy.edge4Detail }}</span>
        </div>
      </div>

      <div class="docs-flow__node docs-flow__node--emerald docs-flow__node--target docs-flow__node--step-5">
        <div class="docs-flow__visual docs-flow__visual--icon docs-flow__visual--icon-emerald">
          <DocsIcon name="database" :size="19" />
        </div>
        <div class="docs-flow__body">
          <div class="docs-flow__title">{{ aiSafetyCopy.dbTitle }}</div>
          <div class="docs-flow__subtitle">{{ aiSafetyCopy.dbSubtitle }}</div>
        </div>
        <div class="docs-flow__aside">
          <span class="docs-flow__chip docs-flow__chip--emerald">
            <DocsIcon name="lock" :size="12" />
            {{ aiSafetyCopy.dbBadge }}
          </span>
        </div>
      </div>
    </div>

    <figcaption class="docs-flow__caption">{{ aiSafetyCopy.caption }}</figcaption>
  </figure>

  <figure
    v-else
    class="docs-flow docs-flow--drivers"
    :aria-label="multiDriverCopy.ariaLabel"
  >
    <div class="docs-flow__canvas">
      <div class="docs-flow__node docs-flow__node--blue docs-flow__node--step-1">
        <div class="docs-flow__visual docs-flow__visual--logo">
          <img :src="withBase('/sqlkit.png')" alt="" width="40" height="40" />
        </div>
        <div class="docs-flow__body">
          <div class="docs-flow__title">{{ multiDriverCopy.coreTitle }}</div>
          <div class="docs-flow__subtitle">{{ multiDriverCopy.coreSubtitle }}</div>
        </div>
        <div class="docs-flow__aside">
          <span class="docs-flow__chip docs-flow__chip--blue">{{ multiDriverCopy.coreBadge }}</span>
        </div>
      </div>

      <div class="docs-flow__split" aria-hidden="true">
        <svg viewBox="0 0 400 44" preserveAspectRatio="none" fill="none">
          <path d="M200 0 V18 H100 V40" vector-effect="non-scaling-stroke" class="docs-flow__wire-bg" />
          <path d="M200 0 V18 H300 V40" vector-effect="non-scaling-stroke" class="docs-flow__wire-bg" />
          <path d="M200 0 V18 H100 V40" vector-effect="non-scaling-stroke" class="docs-flow__wire-dash" />
          <path d="M200 0 V18 H300 V40" vector-effect="non-scaling-stroke" class="docs-flow__wire-dash docs-flow__wire-dash--violet" />
        </svg>
        <span class="docs-flow__split-label">{{ multiDriverCopy.splitLabel }}</span>
      </div>

      <div class="docs-flow__branches">
        <div class="docs-flow__branch docs-flow__branch--native">
          <div class="docs-flow__branch-head">
            <span class="docs-flow__branch-eyebrow docs-flow__branch-eyebrow--blue">
              <DocsIcon name="zap" :size="12" />
              {{ multiDriverCopy.nativeEyebrow }}
            </span>
            <span class="docs-flow__chip docs-flow__chip--blue">{{ multiDriverCopy.nativeCount }}</span>
          </div>

          <div class="docs-flow__tiers">
            <div v-for="row in multiDriverCopy.nativeRows" :key="row.tag" class="docs-flow__tier">
              <span class="docs-flow__tier-tag">{{ row.tag }}</span>
              <span class="docs-flow__tier-desc">{{ row.desc }}</span>
            </div>
          </div>

          <div class="docs-flow__branch-footer">
            <DocsIconStack
              :items="nativeDbLogos"
              :max="5"
              :extra-count="36"
              size="sm"
              :aria-label="multiDriverCopy.nativeStackLabel"
            />
          </div>
        </div>

        <div class="docs-flow__branch docs-flow__branch--jdbc">
          <div class="docs-flow__branch-head">
            <span class="docs-flow__branch-eyebrow docs-flow__branch-eyebrow--violet">
              <DocsIcon name="layers" :size="12" />
              {{ multiDriverCopy.jdbcEyebrow }}
            </span>
            <span class="docs-flow__chip docs-flow__chip--violet">{{ multiDriverCopy.jdbcCount }}</span>
          </div>

          <div class="docs-flow__jdbc-stack">
            <div class="docs-flow__tier docs-flow__tier--runtime">
              <span class="docs-flow__tier-tag docs-flow__tier-tag--violet">{{ multiDriverCopy.jdbcRuntimeTitle }}</span>
              <span class="docs-flow__tier-desc">{{ multiDriverCopy.jdbcRuntimeDesc }}</span>
            </div>

            <div class="docs-flow__mini-connector" aria-hidden="true">
              <svg viewBox="0 0 24 22" fill="none">
                <line x1="12" y1="0" x2="12" y2="17" class="docs-flow__wire-bg" />
                <line x1="12" y1="0" x2="12" y2="17" class="docs-flow__wire-dash docs-flow__wire-dash--violet" />
                <path d="M8.5 14L12 18L15.5 14" class="docs-flow__arrow docs-flow__arrow--violet" />
              </svg>
            </div>

            <div class="docs-flow__tier">
              <span class="docs-flow__tier-tag">{{ multiDriverCopy.jdbcEnginesTitle }}</span>
              <span class="docs-flow__tier-desc">{{ multiDriverCopy.jdbcEnginesDesc }}</span>
            </div>
          </div>

          <div class="docs-flow__branch-footer">
            <DocsIconStack
              :items="jdbcDbLogos"
              :max="5"
              :extra-count="22"
              size="sm"
              :aria-label="multiDriverCopy.jdbcStackLabel"
            />
          </div>
        </div>
      </div>
    </div>

    <figcaption class="docs-flow__caption">{{ multiDriverCopy.caption }}</figcaption>
  </figure>
</template>
