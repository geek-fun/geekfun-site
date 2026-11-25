type EditorialCopy = {
  blog: string
  blogDesc: string
  featured: string
  latest: string
  all: string
  read: string
  tags: string
  count: string
  news: string
  newsDesc: string
  blogSource: string
  newsSource: string
}

const copy: Record<string, EditorialCopy> = {
  "pt-BR": {
    blog: "Blog",
    blogDesc: "Atualizações, guias técnicos e experiências do desenvolvimento de ferramentas de código aberto para bancos de dados.",
    featured: "Em destaque",
    latest: "Artigos recentes",
    all: "Todos os artigos",
    read: "Ler artigo",
    tags: "Assuntos",
    count: "artigos",
    news: "Notícias",
    newsDesc: "Versões e anúncios dos projetos do GEEKFUN.",
    blogSource: "Os artigos abaixo estão em inglês.",
    newsSource: "As notas e os anúncios abaixo estão em inglês.",
  },
  "ja": {
    blog: "ブログ",
    blogDesc: "オープンソースのデータベースツールに関する更新情報、技術ガイド、開発の記録です。",
    featured: "注目の記事",
    latest: "新着記事",
    all: "すべての記事",
    read: "記事を読む",
    tags: "タグ",
    count: "件",
    news: "ニュース",
    newsDesc: "GEEKFUN のリリース情報とプロジェクトからのお知らせです。",
    blogSource: "以下の記事は英語で掲載しています。",
    newsSource: "以下のリリースノートとお知らせは英語です。",
  },
  "ko": {
    blog: "블로그",
    blogDesc: "오픈 소스 데이터베이스 도구를 만들며 쌓은 경험과 기술 가이드, 제품 업데이트를 소개합니다.",
    featured: "추천 글",
    latest: "최신 글",
    all: "전체 글",
    read: "글 읽기",
    tags: "태그",
    count: "개 글",
    news: "소식",
    newsDesc: "GEEKFUN 프로젝트의 릴리스와 공지입니다.",
    blogSource: "아래 글의 본문은 영어로 제공됩니다.",
    newsSource: "아래 릴리스 노트와 공지는 영어로 제공됩니다.",
  },
  "es": {
    blog: "Blog",
    blogDesc: "Actualizaciones, guías técnicas y experiencias del desarrollo de herramientas de código abierto para bases de datos.",
    featured: "Destacado",
    latest: "Artículos recientes",
    all: "Todos los artículos",
    read: "Leer artículo",
    tags: "Etiquetas",
    count: "artículos",
    news: "Noticias",
    newsDesc: "Versiones y anuncios de los proyectos de GEEKFUN.",
    blogSource: "Los artículos de esta página están en inglés.",
    newsSource: "Las notas de versión y los anuncios de esta página están en inglés.",
  },
}

export const getLocalizedEditorialCopy = (lang: string): EditorialCopy | undefined => copy[lang]
