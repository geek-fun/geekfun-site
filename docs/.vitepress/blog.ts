export interface BlogCover {
  src: string
  alt: string
  thumbnail?: string
  height?: number
}

export interface BlogFrontmatter {
  title?: string
  cardTitle?: string
  description?: string
  summary?: string
  date?: string | Date
  tags?: string[]
  cover?: BlogCover
  featured?: boolean
}

export interface BlogPost extends BlogFrontmatter {
  url: string
  title: string
  date?: string
}

export const isBlogArticle = (path: string): boolean => /^(zh\/)?blog\/[^/]+\.md$/.test(path)

export const blogDate = (value?: string | Date): string | undefined => {
  const date = typeof value === 'string' ? new Date(value) : value
  return date && Number.isFinite(date.getTime()) ? date.toISOString().slice(0, 10) : undefined
}

export const blogDateFormatter = (language: string): Intl.DateTimeFormat =>
  new Intl.DateTimeFormat(language, { dateStyle: 'medium', timeZone: 'UTC' })

export const blogCover = (cover: BlogCover | undefined, isZh: boolean): BlogCover =>
  cover?.src
    ? cover
    : { src: isZh ? '/og/master-zh.png' : '/og/master-en.png', alt: '' }
