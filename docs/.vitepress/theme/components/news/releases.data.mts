import { createContentLoader } from 'vitepress'
import { blogDate } from '../../../blog'

type Release = { url: string; title: string; date?: string }

declare const data: Release[]
export { data }

export default createContentLoader<Release[]>('news/*.md', {
  transform: (pages) => pages.map(({ url, frontmatter }) => ({
    url,
    title: frontmatter.title,
    date: blogDate(frontmatter.date),
  })).sort((a, b) => (b.date ?? '').localeCompare(a.date ?? '') || a.url.localeCompare(b.url)),
})
