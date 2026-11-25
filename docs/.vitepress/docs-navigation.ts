import { getLocalizedDocs, getUnprefixedDocsPath } from './docs-locales'

type Guide = [path: string, en: string, zh: string]

type GroupIcon = 'rocket' | 'plug' | 'code' | 'sparkles' | 'database' | 'book' | 'settings' | 'layers' | 'wrench' | 'terminal' | 'shield' | 'zap'

type GuideGroup = {
  en: string
  zh: string
  icon: GroupIcon
  guides: Guide[]
}

type HighlightTag = {
  icon: GroupIcon
  en: string
  zh: string
}

type EcosystemLogo = {
  name: string
  src: string
}

type DocProduct = {
  id: string
  name: string
  logo: string
  badgeIcon: GroupIcon
  badge: { en: string, zh: string }
  ecosystemLogos: EcosystemLogo[]
  ecosystemExtraCount?: number
  summary: { en: string, zh: string }
  highlights: HighlightTag[]
  quickStartPath: string
  quickStartLabel: { en: string, zh: string }
  groups: GuideGroup[]
}

const products: DocProduct[] = [
  {
    id: 'sqlkit',
    name: 'SqlKit',
    logo: '/sqlkit.png',
    badgeIcon: 'database',
    badge: { en: '68+ SQL engines', zh: '68+ SQL 引擎' },
    ecosystemLogos: [
      { name: 'PostgreSQL', src: '/db-logos/postgresql-logo.svg' },
      { name: 'MySQL', src: '/db-logos/mysql-logo.svg' },
      { name: 'SQL Server', src: '/db-logos/sqlserver-logo.svg' },
      { name: 'Oracle', src: '/db-logos/oracle-logo.svg' },
      { name: 'SQLite', src: '/db-logos/sqlite-logo.svg' },
      { name: 'DuckDB', src: '/db-logos/duckdb-logo.svg' },
      { name: 'ClickHouse', src: '/db-logos/clickhouse-logo.svg' },
      { name: 'Snowflake', src: '/db-logos/snowflake-logo.svg' },
    ],
    ecosystemExtraCount: 60,
    summary: {
      en: 'Open-source desktop SQL client for 68+ databases with Monaco SQL editor, visual EXPLAIN plans, ER diagrams, bulk transfer, Agentic Data Studio, and MCP.',
      zh: '开源桌面 SQL 客户端，支持 68+ 数据库，集成 Monaco SQL 编辑器、可视化执行计划、ER 图、批量导入导出、Agentic Data Studio 与 MCP。',
    },
    highlights: [
      { icon: 'zap', en: 'Native Rust + JDBC', zh: '原生 Rust + JDBC' },
      { icon: 'code', en: 'Monaco & EXPLAIN', zh: 'Monaco 与执行计划' },
      { icon: 'layers', en: 'ER Diagrams & Transfer', zh: 'ER 图与批量传输' },
      { icon: 'sparkles', en: 'AI & MCP', zh: 'AI 与 MCP' },
    ],
    quickStartPath: 'installation',
    quickStartLabel: { en: 'Install guide', zh: '安装指南' },
    groups: [
      {
        en: 'Getting started', zh: '快速开始', icon: 'rocket',
        guides: [
          ['installation', 'Installation & setup', '安装与首次启动'],
          ['capabilities', 'Feature tour & editions', '功能概览与版本'],
        ],
      },
      {
        en: 'Connections & drivers', zh: '连接与驱动', icon: 'plug',
        guides: [
          ['connect-to-database', 'Connections, TLS & recovery', '连接数据库、TLS 与重连'],
          ['supported-databases', 'Supported databases & JDBC', '支持的数据库与 JDBC 驱动'],
          ['ssh-tunnel', 'SSH tunnels & jump chains', 'SSH 隧道与多跳堡垒机'],
        ],
      },
      {
        en: 'SQL, data & schema', zh: 'SQL、数据与结构', icon: 'code',
        guides: [
          ['query-editor', 'SQL editor, plans & history', 'SQL 编辑器、执行计划与历史'],
          ['table-browser', 'Data grid & table browser', '数据表格与行编辑'],
          ['schema-and-er-diagrams', 'Schema browser, DDL & ER diagrams', '结构浏览、建表与 ER 图'],
          ['import-export', 'Bulk import & export (Transfer)', '批量导入与导出（传输）'],
        ],
      },
      {
        en: 'AI, MCP & safety', zh: 'AI、MCP 与安全', icon: 'sparkles',
        guides: [
          ['agentic-datastudio', 'Agentic Data Studio', 'Agentic Data Studio'],
          ['mcp-bridge', 'MCP bridge & coding agents', 'MCP 桥接与编程智能体'],
          ['ai-permissions', 'AI permissions & safety model', 'AI 权限与安全模型'],
        ],
      },
      {
        en: 'Database guides', zh: '数据库指南', icon: 'database',
        guides: [
          ['postgresql-gui-client', 'PostgreSQL & PG-compatible', 'PostgreSQL 及兼容生态'],
          ['mysql-gui-client', 'MySQL & MySQL-compatible', 'MySQL 及兼容生态'],
          ['sql-server-gui-client', 'Microsoft SQL Server', 'Microsoft SQL Server'],
          ['oracle-gui-client', 'Oracle Database', 'Oracle Database'],
          ['sqlite-gui-client', 'SQLite, SQLCipher & DuckDB', 'SQLite、SQLCipher 与 DuckDB'],
        ],
      },
      {
        en: 'Reference', zh: '参考', icon: 'book',
        guides: [
          ['settings-and-preferences', 'Settings, themes & updates', '设置、主题与自动更新'],
          ['keyboard-shortcuts', 'Keyboard shortcuts', '快捷键'],
        ],
      },
    ],
  },
  {
    id: 'dockit',
    name: 'DocKit',
    logo: '/dockit.png',
    badgeIcon: 'layers',
    badge: { en: 'NoSQL GUI + AI', zh: 'NoSQL 客户端 + AI' },
    ecosystemLogos: [
      { name: 'MongoDB', src: '/db-mongodb.svg' },
      { name: 'Elasticsearch', src: '/db-elasticsearch.svg' },
      { name: 'OpenSearch', src: '/db-opensearch.png' },
      { name: 'DynamoDB', src: '/db-dynamodb.svg' },
      { name: 'EasySearch', src: '/db-easysearch.svg' },
    ],
    summary: {
      en: 'Desktop NoSQL client for MongoDB, DynamoDB, Elasticsearch, OpenSearch, and EasySearch.',
      zh: '桌面 NoSQL 客户端，支持 MongoDB、DynamoDB、Elasticsearch、OpenSearch 和 EasySearch。',
    },
    highlights: [
      { icon: 'database', en: 'MongoDB & DynamoDB', zh: 'MongoDB 与 DynamoDB' },
      { icon: 'code', en: 'Elasticsearch & OpenSearch', zh: 'Elasticsearch 与 OpenSearch' },
      { icon: 'layers', en: 'Cluster & Metrics', zh: '集群与指标管理' },
      { icon: 'sparkles', en: 'AI & MCP', zh: 'AI 与 MCP' },
    ],
    quickStartPath: 'installation',
    quickStartLabel: { en: 'Install guide', zh: '安装指南' },
    groups: [
      {
        en: 'Setup and access', zh: '设置与访问权限', icon: 'settings',
        guides: [
          ['installation', 'Installation', '安装指南'],
          ['connect-to-server', 'Connect to a database', '连接数据库'],
          ['remote-connections', 'SSH tunnels and system proxy', 'SSH 隧道和系统代理'],
          ['shortcut', 'Keyboard shortcuts', '快捷键'],
          ['settings', 'Settings', '设置'],
          ['ai-permissions', 'AI permissions', 'AI 权限'],
          ['mcp-bridge', 'Local MCP bridge', '本地 MCP 桥接'],
        ],
      },
      {
        en: 'Data workflows', zh: '数据操作', icon: 'layers',
        guides: [
          ['search-editor', 'Search query editor', '搜索查询编辑器'],
          ['mongodb-workspace', 'MongoDB queries and documents', 'MongoDB 查询与文档'],
          ['dynamodb-query-editor', 'DynamoDB Query Builder and PartiQL', 'DynamoDB 查询构建器与 PartiQL'],
          ['agentic-datastudio', 'Agentic Data Studio', 'Agentic Data Studio'],
          ['import-export', 'Import and export', '导入与导出'],
          ['query-history', 'Query history', '查询历史'],
          ['manage-elasticsearch-cluster', 'Manage Elasticsearch clusters', '管理 Elasticsearch 集群'],
          ['dynamodb-manage-metrics', 'DynamoDB tables and metrics', 'DynamoDB 表与指标'],
        ],
      },
    ],
  },
  {
    id: 'data-studio-agent',
    name: 'Data Studio Agent',
    logo: '/data-studio-agent.svg',
    badgeIcon: 'terminal',
    badge: { en: 'MCP Server', zh: 'MCP 服务端' },
    ecosystemLogos: [
      { name: 'Claude Code', src: '/agent-logos/claude-code-logo.png' },
      { name: 'OpenAI Codex', src: '/agent-logos/codex-logo.png' },
      { name: 'Cursor', src: '/agent-logos/cursor-logo.png' },
      { name: 'Windsurf', src: '/agent-logos/windsurf-logo.png' },
      { name: 'OpenCode', src: '/agent-logos/opencode-logo.png' },
      { name: 'GitHub Copilot', src: '/agent-logos/github-copilot-logo.png' },
      { name: 'Antigravity', src: '/agent-logos/antigravity-logo.png' },
      { name: 'Cline', src: '/agent-logos/cline-logo.png' },
    ],
    ecosystemExtraCount: 6,
    summary: {
      en: 'Connect coding agents to your databases through MCP, SqlKit, and DocKit.',
      zh: '通过 MCP、SqlKit 和 DocKit 将编程智能体连接到数据库。',
    },
    highlights: [
      { icon: 'terminal', en: 'Claude Code & Codex', zh: 'Claude Code 与 Codex' },
      { icon: 'plug', en: 'Cursor & Stdio MCP', zh: 'Cursor 与 Stdio MCP' },
      { icon: 'shield', en: 'AST Safety Guard', zh: 'AST 安全防护' },
    ],
    quickStartPath: 'quick-start',
    quickStartLabel: { en: 'Quick start', zh: '快速开始' },
    groups: [
      {
        en: 'Setup', zh: '安装配置', icon: 'rocket',
        guides: [['quick-start', 'Quick start', '快速开始']],
      },
      {
        en: 'Reference', zh: '参考', icon: 'wrench',
        guides: [
          ['tools', 'Tool reference', '工具参考'],
          ['safety', 'Safety', '安全'],
        ],
      },
    ],
  },
]

export const getDocsProducts = (lang: string) => {
  const isZh = lang === 'zh'
  const locale = isZh ? 'zh' : 'en'
  const copy = getLocalizedDocs(lang)
  const base = isZh || copy ? `/${lang}/docs` : '/docs'
  const translatedTitles: Record<string, string> | undefined = copy && {
    capabilities: copy.guides.capabilities,
    installation: copy.guides.installation,
    'connect-to-database': copy.guides.connection,
    'connect-to-server': copy.guides.connection,
    'query-editor': copy.guides.sqlEditor,
    'keyboard-shortcuts': copy.guides.shortcuts,
    'postgresql-gui-client': copy.guides.postgresql,
    'mysql-gui-client': copy.guides.mysql,
    'sql-server-gui-client': copy.guides.sqlServer,
    'oracle-gui-client': copy.guides.oracle,
    'sqlite-gui-client': copy.guides.sqlite,
    shortcut: copy.guides.shortcuts,
    'search-editor': copy.guides.search,
    'mongodb-workspace': copy.guides.mongo,
    'dynamodb-query-editor': copy.guides.dynamo,
  }
  const sqlkitAiTitles: Record<string, string> | undefined = copy && {
    'agentic-datastudio': 'Agentic Data Studio',
    'mcp-bridge': copy.guides.mcpSetup,
    'ai-permissions': copy.guides.aiPermissions,
  }

  return products.filter(({ id }) => !copy || id !== 'data-studio-agent').map(({ id, name, logo, badgeIcon, badge, ecosystemLogos, ecosystemExtraCount, summary, highlights, quickStartPath, quickStartLabel, groups }) => {
    const link = `${base}/${id}/`
    const groupTitles = id === 'sqlkit' ? copy?.sqlkitGroups : copy?.dockitGroups
    const mappedGroups = groups.map((group, index) => ({
      text: groupTitles?.[index] ?? group[locale],
      icon: group.icon,
      items: group.guides.map(([path, en, zh]) => {
        const translation = translatedTitles?.[path] ?? (id === 'sqlkit' ? sqlkitAiTitles?.[path] : undefined)
        if (copy && !translation) {
          return { text: `${en} (${copy.fallback})`, link: `/docs/${id}/${path}` }
        }
        return { text: translation ?? (isZh ? zh : en), link: link + path }
      }),
    }))
    return {
      id, name, logo, link, badgeIcon,
      badge: badge[locale],
      ecosystemLogos,
      ecosystemExtraCount,
      highlights: highlights.map(({ icon, en, zh }) => ({ icon, label: isZh ? zh : en })),
      quickStartLink: link + quickStartPath,
      quickStartLabel: copy ? copy.guides.installation : quickStartLabel[locale],
      guideCount: mappedGroups.reduce((total, group) => total + group.items.length, 0),
      summary: copy ? (id === 'sqlkit' ? copy.sqlkit : copy.dockit) : summary[locale],
      groups: mappedGroups,
    }
  })
}

export const getDocsSidebar = (lang: string) => Object.fromEntries(
  getDocsProducts(lang).map(({ name, link, groups }) => [link, [
    {
      text: name,
      items: [{ text: getLocalizedDocs(lang)?.overview ?? (lang === 'zh' ? '概览' : 'Overview'), link }, ...groups[0].items],
    },
    ...groups.slice(1),
  ]]),
)

export const getDocsProductId = (pagePath: string): string | undefined => {
  const path = getUnprefixedDocsPath(pagePath)
  if (path === 'products/dockit/docs.md') return 'dockit'
  return products.find(({ id }) => path.startsWith(`docs/${id}/`))?.id
}
