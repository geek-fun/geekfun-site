import type { DefaultTheme } from 'vitepress/theme'
import { getLocalizedDocs } from './docs-locales'

type NavigationCopy = {
  home: string
  products: string
  download: string
  pricing: string
  blog: string
  news: string
}

const navigationCopy: Record<string, NavigationCopy> = {
  en: { home: 'Home', products: 'Products', download: 'Download', pricing: 'Pricing', blog: 'Blog', news: 'News' },
  zh: { home: '首页', products: '产品', download: '下载', pricing: '定价', blog: '博客', news: '新闻' },
  'pt-BR': { home: 'Início', products: 'Produtos', download: 'Download', pricing: 'Preços', blog: 'Blog', news: 'Notícias' },
  ja: { home: 'ホーム', products: '製品', download: 'ダウンロード', pricing: '料金', blog: 'ブログ', news: 'ニュース' },
  ko: { home: '홈', products: '제품', download: '다운로드', pricing: '가격', blog: '블로그', news: '소식' },
  es: { home: 'Inicio', products: 'Productos', download: 'Descargar', pricing: 'Precios', blog: 'Blog', news: 'Noticias' },
}

export const getNavigationCopy = (lang: string): NavigationCopy => navigationCopy[lang] ?? navigationCopy.en

const localizedPages = new Set([
  '/', '/download', '/pricing', '/docs', '/blog', '/news', '/about',
  '/products/dockit/', '/products/sqlkit/', '/products/data-studio-agent/',
])

export const getLocalizedSitePath = (path: string, lang: string): string => {
  const translated = lang === 'zh' || (getLocalizedDocs(lang) && localizedPages.has(path))
  return translated ? `/${lang}${path}` : path
}

export const getSiteNavigation = (lang: string): DefaultTheme.NavItem[] => {
  const copy = getNavigationCopy(lang)
  const localized = getLocalizedDocs(lang)
  const prefix = localized || lang === 'zh' ? `/${lang}` : ''

  return [
    { text: copy.home, link: `${prefix}/` },
    { component: 'SiteProductsMenu' },
    { text: copy.download, link: `${prefix}/download` },
    { text: copy.pricing, link: `${prefix}/pricing` },
    {
      text: localized?.title ?? (lang === 'zh' ? '文档' : 'Docs'),
      link: `${prefix}/docs`,
      activeMatch: `^${prefix}/docs(?:/|$)`,
    },
    { text: copy.blog, link: `${prefix}/blog`, activeMatch: `^${prefix}/blog(?:/|$)` },
    { text: copy.news, link: `${prefix}/news`, activeMatch: `^${prefix}/news(?:/|$)` },
  ]
}

type ProductLink = { linkEn: string; linkZh: string }

export const getProductNavLink = ({ linkEn, linkZh }: ProductLink, lang: string): string => {
  return lang === 'zh' ? linkZh : getLocalizedSitePath(linkEn, lang)
}
