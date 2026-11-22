type Guide = [path: string, en: string, zh: string]

type GuideGroup = {
  en: string
  zh: string
  guides: Guide[]
}

type DocProduct = {
  id: string
  name: string
  logo: string
  summary: { en: string, zh: string }
  groups: GuideGroup[]
}

const products: DocProduct[] = [
  {
    id: 'sqlkit',
    name: 'SqlKit',
    logo: '/sqlkit.png',
    summary: {
      en: 'Desktop SQL client for MySQL, PostgreSQL, SQL Server, Oracle, SQLite, and more.',
      zh: '桌面 SQL 客户端，支持 MySQL、PostgreSQL、SQL Server、Oracle、SQLite 等数据库。',
    },
    groups: [
      {
        en: 'Setup and workflows', zh: '设置与常用操作',
        guides: [
          ['installation', 'Installation', '安装指南'],
          ['connect-to-database', 'Connect to a database', '连接数据库'],
          ['ssh-tunnel', 'SSH tunnels', 'SSH 隧道'],
          ['query-editor', 'SQL editor and results', 'SQL 编辑器与结果'],
          ['table-browser', 'Browse and edit table data', '浏览与编辑表数据'],
          ['import-export', 'Import and export files', '文件导入与导出'],
          ['keyboard-shortcuts', 'Keyboard shortcuts', '快捷键'],
        ],
      },
      {
        en: 'Database guides', zh: '数据库指南',
        guides: [
          ['supported-databases', 'Supported databases and drivers', '支持的数据库与驱动'],
          ['mysql-gui-client', 'MySQL', 'MySQL'],
          ['postgresql-gui-client', 'PostgreSQL', 'PostgreSQL'],
          ['sql-server-gui-client', 'SQL Server', 'SQL Server'],
          ['oracle-gui-client', 'Oracle', 'Oracle'],
          ['sqlite-gui-client', 'SQLite', 'SQLite'],
        ],
      },
    ],
  },
  {
    id: 'dockit',
    name: 'DocKit',
    logo: '/dockit.png',
    summary: {
      en: 'Desktop NoSQL client for MongoDB, DynamoDB, Elasticsearch, OpenSearch, and EasySearch.',
      zh: '桌面 NoSQL 客户端，支持 MongoDB、DynamoDB、Elasticsearch、OpenSearch 和 EasySearch。',
    },
    groups: [
      {
        en: 'Setup and access', zh: '设置与访问权限',
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
        en: 'Data workflows', zh: '数据操作',
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
    summary: {
      en: 'Connect coding agents to your databases through MCP, SqlKit, and DocKit.',
      zh: '通过 MCP、SqlKit 和 DocKit 将编程智能体连接到数据库。',
    },
    groups: [
      {
        en: 'Setup', zh: '安装配置',
        guides: [['quick-start', 'Quick start', '快速开始']],
      },
      {
        en: 'Reference', zh: '参考',
        guides: [
          ['tools', 'Tool reference', '工具参考'],
          ['safety', 'Safety', '安全'],
        ],
      },
    ],
  },
]

export const getDocsProducts = (isZh: boolean) => {
  const locale = isZh ? 'zh' : 'en'
  const base = isZh ? '/zh/docs' : '/docs'
  return products.map(({ id, name, logo, summary, groups }) => {
    const link = `${base}/${id}/`
    return {
      id, name, logo, link,
      summary: summary[locale],
      groups: groups.map(group => ({
        text: group[locale],
        items: group.guides.map(([path, en, zh]) => ({ text: isZh ? zh : en, link: link + path })),
      })),
    }
  })
}

export const getDocsSidebar = (isZh: boolean) => Object.fromEntries(
  getDocsProducts(isZh).map(({ name, link, groups }) => [link, [
    {
      text: name,
      items: [{ text: isZh ? '概览' : 'Overview', link }, ...groups[0].items],
    },
    ...groups.slice(1),
  ]]),
)

export const getDocsProductId = (pagePath: string): string | undefined => {
  const path = pagePath.replace(/^zh\//, '')
  if (path === 'products/dockit/docs.md') return 'dockit'
  return products.find(({ id }) => path.startsWith(`docs/${id}/`))?.id
}
