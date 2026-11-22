import type { DesktopApp, DownloadLanguage, InstallTool } from './download-data'

type DownloadCopy = {
  title: string
  description: string
  categories: string
  desktop: string
  serverless: string
  developer: string
  appType: Record<DesktopApp['id'], string>
  sqlKitDescription: string
  appleArchitecture: string
  platform: string
  packageType: string
  portable: string
  download: string
  learnMore: string
  allVersions: string
  docs: string
  product: string
  copy: string
  copied: string
  copyFailed: string
  toolDescriptions: Record<InstallTool['id'], string>
}

export const downloadCopy = {
  en: {
    title: 'Downloads',
    description: 'Desktop apps, command-line tools, and libraries.',
    categories: 'Download categories',
    desktop: 'Database clients',
    serverless: 'Serverless tools',
    developer: 'Developer tools',
    appType: { dockit: 'NoSQL client', sqlkit: 'SQL client' },
    sqlKitDescription: 'Connect to PostgreSQL, MySQL, SQL Server, Oracle, SQLite, and more.',
    appleArchitecture: 'Apple silicon & Intel',
    platform: 'Platform',
    packageType: 'Package',
    portable: 'Portable',
    download: 'Download',
    learnMore: 'Learn More',
    allVersions: 'All Versions',
    docs: 'Docs',
    product: 'Product',
    copy: 'Copy',
    copied: 'Copied',
    copyFailed: 'Select the command to copy it manually.',
    toolDescriptions: {
      serverlessInsight: 'Deploy serverless applications across cloud providers.',
      serverlessAdapter: 'Run Express and Koa apps on serverless platforms.',
      dataStudioAgent: 'Give your AI coding agent database access via MCP.',
      jestSearch: 'Run local Elasticsearch and OpenSearch integration tests with Jest.',
    },
  },
  zh: {
    title: '下载',
    description: '桌面应用、命令行工具和开发库。',
    categories: '下载分类',
    desktop: '数据库客户端',
    serverless: 'Serverless 工具',
    developer: '开发工具',
    appType: { dockit: 'NoSQL 客户端', sqlkit: 'SQL 客户端' },
    sqlKitDescription: '连接 PostgreSQL、MySQL、SQL Server、Oracle、SQLite 等数据库。',
    appleArchitecture: 'Apple 芯片与 Intel',
    platform: '平台',
    packageType: '安装包',
    portable: '便携版',
    download: '下载',
    learnMore: '了解更多',
    allVersions: '所有版本',
    docs: '文档',
    product: '产品页',
    copy: '复制',
    copied: '已复制',
    copyFailed: '请选择命令并手动复制。',
    toolDescriptions: {
      serverlessInsight: '在多个云平台上部署 Serverless 应用。',
      serverlessAdapter: '在 Serverless 平台上运行 Express 和 Koa 应用。',
      dataStudioAgent: '通过 MCP 让 AI 编程助手访问数据库。',
      jestSearch: '使用 Jest 在本地运行 Elasticsearch 和 OpenSearch 集成测试。',
    },
  },
  'pt-BR': {
    title: 'Downloads',
    description: 'Aplicativos para desktop, ferramentas de linha de comando e bibliotecas.',
    categories: 'Categorias de download',
    desktop: 'Clientes de banco de dados',
    serverless: 'Ferramentas serverless',
    developer: 'Ferramentas de desenvolvimento',
    appType: { dockit: 'Cliente NoSQL', sqlkit: 'Cliente SQL' },
    sqlKitDescription: 'Conecte-se a PostgreSQL, MySQL, SQL Server, Oracle, SQLite e outros bancos de dados.',
    appleArchitecture: 'Apple Silicon e Intel',
    platform: 'Plataforma',
    packageType: 'Pacote',
    portable: 'Portátil',
    download: 'Baixar',
    learnMore: 'Saiba mais',
    allVersions: 'Todas as versões',
    docs: 'Documentação',
    product: 'Produto',
    copy: 'Copiar',
    copied: 'Copiado',
    copyFailed: 'Selecione o comando para copiá-lo manualmente.',
    toolDescriptions: {
      serverlessInsight: 'Implante aplicativos serverless em vários provedores de nuvem.',
      serverlessAdapter: 'Execute aplicativos Express e Koa em plataformas serverless.',
      dataStudioAgent: 'Dê ao seu assistente de programação acesso a bancos de dados via MCP.',
      jestSearch: 'Execute testes de integração locais do Elasticsearch e do OpenSearch com Jest.',
    },
  },
  ja: {
    title: 'ダウンロード',
    description: 'デスクトップアプリ、コマンドラインツール、ライブラリ。',
    categories: 'ダウンロードのカテゴリ',
    desktop: 'データベースクライアント',
    serverless: 'サーバーレスツール',
    developer: '開発ツール',
    appType: { dockit: 'NoSQL クライアント', sqlkit: 'SQL クライアント' },
    sqlKitDescription: 'PostgreSQL、MySQL、SQL Server、Oracle、SQLite などに接続できます。',
    appleArchitecture: 'Apple シリコン・Intel',
    platform: 'プラットフォーム',
    packageType: 'パッケージ',
    portable: 'ポータブル版',
    download: 'ダウンロード',
    learnMore: '詳細を見る',
    allVersions: 'すべてのバージョン',
    docs: 'ドキュメント',
    product: '製品ページ',
    copy: 'コピー',
    copied: 'コピー済み',
    copyFailed: 'コマンドを選択して手動でコピーしてください。',
    toolDescriptions: {
      serverlessInsight: '複数のクラウドにサーバーレスアプリをデプロイできます。',
      serverlessAdapter: 'Express と Koa のアプリをサーバーレス環境で実行できます。',
      dataStudioAgent: 'MCP 経由で AI コーディングエージェントにデータベースへのアクセスを提供します。',
      jestSearch: 'Jest で Elasticsearch と OpenSearch の統合テストをローカルで実行できます。',
    },
  },
  ko: {
    title: '다운로드',
    description: '데스크톱 앱, 명령줄 도구, 라이브러리.',
    categories: '다운로드 카테고리',
    desktop: '데이터베이스 클라이언트',
    serverless: '서버리스 도구',
    developer: '개발자 도구',
    appType: { dockit: 'NoSQL 클라이언트', sqlkit: 'SQL 클라이언트' },
    sqlKitDescription: 'PostgreSQL, MySQL, SQL Server, Oracle, SQLite 등 여러 데이터베이스에 연결하세요.',
    appleArchitecture: 'Apple Silicon 및 Intel',
    platform: '플랫폼',
    packageType: '패키지',
    portable: '포터블',
    download: '다운로드',
    learnMore: '자세히 보기',
    allVersions: '모든 버전',
    docs: '문서',
    product: '제품 페이지',
    copy: '복사',
    copied: '복사됨',
    copyFailed: '명령을 선택해 직접 복사하세요.',
    toolDescriptions: {
      serverlessInsight: '여러 클라우드에 서버리스 애플리케이션을 배포합니다.',
      serverlessAdapter: '서버리스 플랫폼에서 Express와 Koa 앱을 실행합니다.',
      dataStudioAgent: 'AI 코딩 에이전트가 MCP로 데이터베이스에 접근할 수 있게 합니다.',
      jestSearch: 'Jest로 Elasticsearch와 OpenSearch 통합 테스트를 로컬에서 실행합니다.',
    },
  },
  es: {
    title: 'Descargas',
    description: 'Aplicaciones de escritorio, herramientas de línea de comandos y bibliotecas.',
    categories: 'Categorías de descarga',
    desktop: 'Clientes de bases de datos',
    serverless: 'Herramientas serverless',
    developer: 'Herramientas de desarrollo',
    appType: { dockit: 'Cliente NoSQL', sqlkit: 'Cliente SQL' },
    sqlKitDescription: 'Conéctate a PostgreSQL, MySQL, SQL Server, Oracle, SQLite y otras bases de datos.',
    appleArchitecture: 'Chip de Apple e Intel',
    platform: 'Plataforma',
    packageType: 'Paquete',
    portable: 'Portable',
    download: 'Descargar',
    learnMore: 'Más información',
    allVersions: 'Todas las versiones',
    docs: 'Documentación',
    product: 'Producto',
    copy: 'Copiar',
    copied: 'Copiado',
    copyFailed: 'Selecciona el comando para copiarlo manualmente.',
    toolDescriptions: {
      serverlessInsight: 'Despliega aplicaciones serverless en varios proveedores de nube.',
      serverlessAdapter: 'Ejecuta aplicaciones Express y Koa en plataformas serverless.',
      dataStudioAgent: 'Da a tu agente de programación con IA acceso a bases de datos mediante MCP.',
      jestSearch: 'Ejecuta pruebas de integración locales de Elasticsearch y OpenSearch con Jest.',
    },
  },
} satisfies Record<DownloadLanguage, DownloadCopy>
