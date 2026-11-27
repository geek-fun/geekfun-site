export type SiteLocale = 'en' | 'zh' | 'pt-BR' | 'ja' | 'ko' | 'es'

type LocalizedText = Record<SiteLocale, string>

export type ProductMenuItem = {
  name: string
  tagline: string
  logo: string
  linkEn: string
  linkZh: string
  external: boolean
}

export type ProductMenuGroup = {
  label: string
  items: ProductMenuItem[]
}

type ProductMenuItemSource = {
  name: string
  tagline: LocalizedText
  logo: string
  linkEn: string
  linkZh: string
  external: boolean
}

type ProductMenuGroupSource = {
  label: LocalizedText
  items: ProductMenuItemSource[]
}

const productMenuSource: ProductMenuGroupSource[] = [
  {
    label: {
      en: 'Database Clients',
      zh: '数据库客户端',
      'pt-BR': 'Clientes de banco de dados',
      ja: 'データベースクライアント',
      ko: '데이터베이스 클라이언트',
      es: 'Clientes de bases de datos',
    },
    items: [
      {
        name: 'DocKit',
        tagline: {
          en: 'NoSQL desktop client for MongoDB, Elasticsearch, OpenSearch, DynamoDB',
          zh: '面向 MongoDB、Elasticsearch、OpenSearch、DynamoDB 的 NoSQL 桌面客户端',
          'pt-BR': 'Cliente NoSQL desktop para MongoDB, Elasticsearch, OpenSearch e DynamoDB',
          ja: 'MongoDB、Elasticsearch、OpenSearch、DynamoDB 向け NoSQL デスクトップクライアント',
          ko: 'MongoDB, Elasticsearch, OpenSearch, DynamoDB용 NoSQL 데스크톱 클라이언트',
          es: 'Cliente NoSQL de escritorio para MongoDB, Elasticsearch, OpenSearch y DynamoDB',
        },
        logo: '/dockit.png',
        linkEn: '/products/dockit/',
        linkZh: '/zh/products/dockit/',
        external: false,
      },
      {
        name: 'SqlKit',
        tagline: {
          en: 'SQL desktop client for PostgreSQL, MySQL, SQL Server, Oracle, SQLite',
          zh: '面向 PostgreSQL、MySQL、SQL Server、Oracle、SQLite 的 SQL 桌面客户端',
          'pt-BR': 'Cliente SQL desktop para PostgreSQL, MySQL, SQL Server, Oracle e SQLite',
          ja: 'PostgreSQL、MySQL、SQL Server、Oracle、SQLite 向け SQL デスクトップクライアント',
          ko: 'PostgreSQL, MySQL, SQL Server, Oracle, SQLite용 SQL 데스크톱 클라이언트',
          es: 'Cliente SQL de escritorio para PostgreSQL, MySQL, SQL Server, Oracle y SQLite',
        },
        logo: '/sqlkit.png',
        linkEn: '/products/sqlkit/',
        linkZh: '/zh/products/sqlkit/',
        external: false,
      },
    ],
  },
  {
    label: {
      en: 'Infrastructure',
      zh: '基础设施',
      'pt-BR': 'Infraestrutura',
      ja: 'インフラストラクチャ',
      ko: '인프라',
      es: 'Infraestructura',
    },
    items: [
      {
        name: 'ServerlessInsight',
        tagline: {
          en: 'Serverless infrastructure platform and CLI',
          zh: 'Serverless 基础设施平台和 CLI',
          'pt-BR': 'Plataforma e CLI de infraestrutura serverless',
          ja: 'サーバーレスインフラストラクチャプラットフォームと CLI',
          ko: '서버리스 인프라 플랫폼 및 CLI',
          es: 'Plataforma y CLI de infraestructura serverless',
        },
        logo: '/serverlessinsight.png',
        linkEn: 'https://serverlessinsight.com/',
        linkZh: 'https://serverlessinsight.com/',
        external: true,
      },
      {
        name: 'serverless-adapter',
        tagline: {
          en: 'Serverless adapter for Express and Koa',
          zh: '面向 Express 与 Koa 的 Serverless 适配器',
          'pt-BR': 'Adaptador serverless para Express e Koa',
          ja: 'Express と Koa 向けサーバーレスアダプター',
          ko: 'Express 및 Koa용 서버리스 어댑터',
          es: 'Adaptador serverless para Express y Koa',
        },
        logo: '/serverless-adapter.svg',
        linkEn: 'https://github.com/geek-fun/serverless-adapter',
        linkZh: 'https://github.com/geek-fun/serverless-adapter',
        external: true,
      },
    ],
  },
  {
    label: {
      en: 'Developer Tools',
      zh: '开发者工具',
      'pt-BR': 'Ferramentas para desenvolvedores',
      ja: '開発者ツール',
      ko: '개발자 도구',
      es: 'Herramientas de desarrollo',
    },
    items: [
      {
        name: 'Data Studio Agent',
        tagline: {
          en: 'MCP server for AI agents to query your databases',
          zh: '让 AI 编码代理直接访问数据库的 MCP 服务器',
          'pt-BR': 'Servidor MCP para agentes de IA consultarem seus bancos de dados',
          ja: 'AI エージェントがデータベースを検索するための MCP サーバー',
          ko: 'AI 에이전트가 데이터베이스를 조회하는 MCP 서버',
          es: 'Servidor MCP para que los agentes de IA consulten tus bases de datos',
        },
        logo: '/data-studio-agent.svg',
        linkEn: '/products/data-studio-agent/',
        linkZh: '/zh/products/data-studio-agent/',
        external: false,
      },
      {
        name: 'jest-search',
        tagline: {
          en: 'Jest utility for search integration testing',
          zh: '用于搜索集成测试的 Jest 工具',
          'pt-BR': 'Utilitário Jest para testes de integração de busca',
          ja: '検索統合テスト向けの Jest ユーティリティ',
          ko: '검색 통합 테스트용 Jest 유틸리티',
          es: 'Utilidad Jest para pruebas de integración de búsqueda',
        },
        logo: '/jest-search.png',
        linkEn: 'https://github.com/geek-fun/jest-search',
        linkZh: 'https://github.com/geek-fun/jest-search',
        external: true,
      },
    ],
  },
]

const resolveLocale = (lang: string): SiteLocale =>
  lang in productMenuSource[0].label ? (lang as SiteLocale) : 'en'

export const getProductMenuGroups = (lang: string): ProductMenuGroup[] => {
  const locale = resolveLocale(lang)
  return productMenuSource.map((group) => ({
    label: group.label[locale],
    items: group.items.map(({ tagline, ...item }) => ({
      ...item,
      tagline: tagline[locale],
    })),
  }))
}
