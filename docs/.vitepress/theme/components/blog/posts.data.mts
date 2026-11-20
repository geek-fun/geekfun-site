import { createContentLoader } from 'vitepress'
import { blogDate, type BlogPost } from '../../../blog'

declare const data: BlogPost[]
export { data }

export default createContentLoader<BlogPost[]>(['blog/*.md', 'zh/blog/*.md'], {
  transform: (posts) =>
    posts
      .map(({ url, frontmatter }) => ({
        url,
        title: frontmatter.title,
        cardTitle: frontmatter.cardTitle,
        description: frontmatter.description,
        summary: frontmatter.summary,
        date: blogDate(frontmatter.date),
        tags: frontmatter.tags,
        cover: frontmatter.cover,
        featured: frontmatter.featured,
      }))
      .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? '') || a.url.localeCompare(b.url)),
})
