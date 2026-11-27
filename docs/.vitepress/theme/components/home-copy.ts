import { getNavigationCopy } from '../../site-navigation'

type HomeCopy = {
  name?: string
  badge: string
  announcement: string
  learnMore: string
  subtitle: string
  tagline: string
  values: string
  team: string
  products: Record<'dockit' | 'sqlkit' | 'agent' | 'insight' | 'adapter' | 'jest', string>
  features: Record<'impact' | 'transparent' | 'lasting', { title: string; details: string }>
}

const copy: Record<string, HomeCopy> = {
  en: {
    badge: 'New',
    announcement: 'Data Studio Agent. Your DBA. Talk to your databases in plain language.',
    learnMore: 'Learn more',
    subtitle: 'Open-Source Studio',
    tagline: 'Crafted for developers who ship. Sustained for the long term.',
    values: 'Values',
    team: 'Team Members',
    products: {
      dockit: 'Open-source desktop GUI client for MongoDB, Elasticsearch, OpenSearch, DynamoDB, and EasySearch, with Agentic Data Studio for natural-language queries. Query, manage, and migrate NoSQL data from one native app.',
      sqlkit: 'Open-source desktop SQL client for PostgreSQL, MySQL, SQL Server, Oracle, SQLite, and more. Use Agentic Data Studio to draft queries in plain language.',
      agent: 'Open-source MCP server that lets AI coding agents (Claude Code, Cursor, and more) query your databases in plain language via DocKit and SqlKit. Local-first and read-safe by default.',
      insight: 'Open-source, vendor-neutral serverless infrastructure platform for Alibaba Cloud, Tencent Cloud, and Volcengine.',
      adapter: 'Serverless adapter for Express and Koa across Alibaba Cloud Function Compute, Tencent SCF, and Volcengine veFaaS with automatic provider detection.',
      jest: 'Jest tool for search integration testing that starts local Elasticsearch, OpenSearch, and ZincSearch environments.',
    },
    features: {
      impact: { title: 'Built for daily work', details: 'We build tools for problems developers and teams run into at work.' },
      transparent: { title: 'Developed in public', details: 'Our projects are open source. Anyone can follow the roadmap, inspect the code, and contribute.' },
      lasting: { title: 'Built to last', details: 'We focus on performance, reliability, and long-term maintenance over short-lived trends.' },
    },
  },
  zh: {
    name: '极客范',
    badge: '新品',
    announcement: 'Data Studio Agent。你的 DBA。用自然语言和你的数据库对话。',
    learnMore: '了解更多',
    subtitle: '开源俱乐部',
    tagline: '为每天写代码的开发者，做长期维护的实用软件。',
    values: '价值观',
    team: '团队成员',
    products: {
      dockit: '开源 NoSQL 桌面客户端，支持 MongoDB、Elasticsearch、OpenSearch、DynamoDB 和 EasySearch，内置 Agentic Data Studio，可在本地查询、管理和迁移数据。',
      sqlkit: '开源 SQL 桌面客户端，支持 PostgreSQL、MySQL、SQL Server、Oracle、SQLite 等数据库。可以用自然语言描述需求，交给 Agentic Data Studio 起草 SQL。',
      agent: '开源的 MCP 服务器，让 Claude Code、Cursor 等 AI 编程工具通过 DocKit 和 SqlKit 直接查询数据库。本地运行，默认只读。',
      insight: '开源、无厂商锁定的 Serverless 基础设施与部署框架，支持阿里云、腾讯云和火山引擎。',
      adapter: '面向 Serverless 场景的 Web 框架适配器，支持 Express 和 Koa 运行在阿里云函数计算、腾讯云 SCF 与火山引擎 veFaaS 上。',
      jest: '面向搜索集成测试的 Jest 工具，可在本地快速启动 Elasticsearch、OpenSearch 和 ZincSearch 环境。',
    },
    features: {
      impact: { title: '解决实际问题', details: '我们做开发者和团队在日常工作中真正用得上的工具。' },
      transparent: { title: '公开开发', details: '项目全部开源，代码、进度和讨论公开可见，欢迎随时参与贡献。' },
      lasting: { title: '长期维护', details: '比起追逐短期热点，我们更看重性能、稳定性以及长期可维护性。' },
    },
  },
  'pt-BR': {
    badge: 'Novo',
    announcement: 'Use o Data Studio Agent para consultar seus bancos de dados em linguagem natural.',
    learnMore: 'Saiba mais',
    subtitle: 'Estúdio de código aberto',
    tagline: 'Ferramentas para o dia a dia de quem desenvolve software, feitas para durar.',
    values: 'Valores',
    team: 'Equipe',
    products: {
      dockit: 'Cliente NoSQL de código aberto para MongoDB, Elasticsearch, OpenSearch, DynamoDB e EasySearch. Consulte, gerencie e migre dados. Use o Agentic Data Studio para fazer consultas em linguagem natural.',
      sqlkit: 'Cliente SQL de código aberto para PostgreSQL, MySQL, SQL Server, Oracle, SQLite e outros bancos. Escreva consultas em linguagem natural com o Agentic Data Studio.',
      agent: 'Servidor MCP de código aberto que permite ao Claude Code, Cursor e outros agentes consultar seus bancos pelo DocKit e pelo SqlKit. Funciona localmente e usa acesso de leitura por padrão.',
      insight: 'Plataforma serverless de código aberto para publicar aplicações na Alibaba Cloud, Tencent Cloud e Volcengine sem depender de um único provedor.',
      adapter: 'Adaptador serverless para Express e Koa com detecção automática do provedor. Funciona com Alibaba Cloud Function Compute, Tencent SCF e Volcengine veFaaS.',
      jest: 'Ferramenta do Jest para testes de integração de busca. Inicia ambientes locais de Elasticsearch, OpenSearch e ZincSearch.',
    },
    features: {
      impact: { title: 'Utilidade na prática', details: 'Criamos ferramentas para resolver problemas que desenvolvedores e equipes encontram no trabalho.' },
      transparent: { title: 'Desenvolvimento aberto', details: 'Desenvolvemos em público para que outras pessoas possam acompanhar o trabalho e contribuir.' },
      lasting: { title: 'Feito para durar', details: 'Priorizamos desempenho, estabilidade e manutenção a longo prazo.' },
    },
  },
  ja: {
    badge: '新着',
    announcement: 'Data Studio Agent でデータベースを自然言語で検索できます。',
    learnMore: '詳しく見る',
    subtitle: 'オープンソーススタジオ',
    tagline: '開発者の日々の仕事を支える、長く使えるソフトウェアを作っています。',
    values: '大切にしていること',
    team: 'チーム',
    products: {
      dockit: 'MongoDB、Elasticsearch、OpenSearch、DynamoDB、EasySearch に対応するオープンソースの NoSQL デスクトップクライアントです。データの検索や管理、移行ができ、Agentic Data Studio では自然言語で検索できます。',
      sqlkit: 'PostgreSQL、MySQL、SQL Server、Oracle、SQLite などに対応するオープンソースの SQL デスクトップクライアントです。Agentic Data Studio を使って自然言語でクエリを作成できます。',
      agent: 'Claude Code や Cursor などから DocKit と SqlKit 経由でデータベースを検索できるオープンソースの MCP サーバーです。ローカルで動作し、標準では読み取り専用です。',
      insight: 'Alibaba Cloud、Tencent Cloud、Volcengine にアプリをデプロイできる、特定のクラウドに依存しないオープンソースのサーバーレス基盤です。',
      adapter: 'Express と Koa 向けのサーバーレスアダプターです。Alibaba Cloud Function Compute、Tencent SCF、Volcengine veFaaS を自動で判別します。',
      jest: 'Elasticsearch、OpenSearch、ZincSearch のローカル環境を起動して、検索の結合テストを実行するための Jest ツールです。',
    },
    features: {
      impact: { title: '開発現場の課題を解決', details: '開発者やチームが日々の仕事で直面する課題に役立つツールを作ります。' },
      transparent: { title: '公開の場で開発', details: '誰もが進捗を確認し、開発に参加できるように、作業を公開しています。' },
      lasting: { title: '長く使える設計', details: '性能や安定性を保ちながら、長期にわたって保守できるソフトウェアを目指します。' },
    },
  },
  ko: {
    badge: '신규',
    announcement: 'Data Studio Agent로 데이터베이스에 자연어로 질문하고 결과를 확인하세요.',
    learnMore: '자세히 보기',
    subtitle: '오픈 소스 스튜디오',
    tagline: '개발자의 일상에 보탬이 되고 오래 쓸 수 있는 소프트웨어를 만듭니다.',
    values: '우리가 중요하게 생각하는 것',
    team: '팀 소개',
    products: {
      dockit: 'MongoDB, Elasticsearch, OpenSearch, DynamoDB, EasySearch를 지원하는 오픈 소스 NoSQL 데스크톱 클라이언트입니다. 데이터를 조회하고 관리하거나 옮길 수 있으며, Agentic Data Studio에서 자연어로 쿼리할 수 있습니다.',
      sqlkit: 'PostgreSQL, MySQL, SQL Server, Oracle, SQLite 등을 지원하는 오픈 소스 SQL 데스크톱 클라이언트입니다. Agentic Data Studio에서 자연어로 쿼리를 작성할 수 있습니다.',
      agent: 'Claude Code, Cursor 등의 AI 코딩 에이전트에서 DocKit과 SqlKit을 통해 데이터베이스를 조회할 수 있게 해 주는 오픈 소스 MCP 서버입니다. 로컬에서 실행되며 기본 설정은 읽기 전용입니다.',
      insight: 'Alibaba Cloud, Tencent Cloud, Volcengine에 앱을 배포할 수 있는 오픈 소스 서버리스 플랫폼입니다. 특정 클라우드 제공업체에 종속되지 않습니다.',
      adapter: 'Express와 Koa용 서버리스 어댑터입니다. Alibaba Cloud Function Compute, Tencent SCF, Volcengine veFaaS를 자동으로 감지합니다.',
      jest: 'Elasticsearch, OpenSearch, ZincSearch를 로컬에서 시작해 검색 통합 테스트를 실행하는 Jest 도구입니다.',
    },
    features: {
      impact: { title: '실제 문제를 해결하는 도구', details: '개발자와 팀이 일하면서 자주 마주치는 문제를 해결하는 도구를 만듭니다.' },
      transparent: { title: '열린 개발', details: '누구나 개발 과정을 지켜보고 의견을 내거나 기여할 수 있도록 작업을 공개합니다.' },
      lasting: { title: '오래 쓸 수 있는 소프트웨어', details: '성능과 안정성을 유지하면서 오랫동안 유지보수할 수 있도록 설계합니다.' },
    },
  },
  es: {
    badge: 'Nuevo',
    announcement: 'Consulta tus bases de datos en lenguaje natural con Data Studio Agent.',
    learnMore: 'Más información',
    subtitle: 'Estudio de código abierto',
    tagline: 'Creamos herramientas para el trabajo diario de los desarrolladores y para que duren.',
    values: 'Valores',
    team: 'Equipo',
    products: {
      dockit: 'Cliente NoSQL de escritorio y de código abierto para MongoDB, Elasticsearch, OpenSearch, DynamoDB y EasySearch. Consulta, gestiona y migra datos. Usa Agentic Data Studio para hacer consultas en lenguaje natural.',
      sqlkit: 'Cliente SQL de escritorio y de código abierto para PostgreSQL, MySQL, SQL Server, Oracle, SQLite y otros motores. Escribe consultas en lenguaje natural con Agentic Data Studio.',
      agent: 'Servidor MCP de código abierto para que Claude Code, Cursor y otros agentes consulten tus bases de datos a través de DocKit y SqlKit. Se ejecuta localmente y usa acceso de solo lectura por defecto.',
      insight: 'Plataforma serverless de código abierto para desplegar aplicaciones en Alibaba Cloud, Tencent Cloud y Volcengine sin depender de un único proveedor.',
      adapter: 'Adaptador serverless para Express y Koa con detección automática del proveedor. Funciona en Alibaba Cloud Function Compute, Tencent SCF y Volcengine veFaaS.',
      jest: 'Herramienta de Jest para pruebas de integración de búsqueda. Inicia entornos locales de Elasticsearch, OpenSearch y ZincSearch.',
    },
    features: {
      impact: { title: 'Utilidad en el trabajo diario', details: 'Creamos herramientas que resuelven problemas que los desarrolladores y sus equipos encuentran al trabajar.' },
      transparent: { title: 'Desarrollo abierto', details: 'Trabajamos en público para que cualquiera pueda seguir el desarrollo y contribuir.' },
      lasting: { title: 'Hecho para durar', details: 'Priorizamos el rendimiento, la estabilidad y la facilidad de mantenimiento a largo plazo.' },
    },
  },
}

export const getHomeCopy = (lang: string) => {
  const home = copy[lang] ?? copy.en
  return { ...home, name: home.name ?? 'GEEKFUN', productsLabel: getNavigationCopy(lang).products }
}
