<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { blogDateFormatter } from '../../../blog'
import { getLocalizedEditorialCopy } from '../editorial-copy'
import BlogCover from './BlogCover.vue'
import { data } from './posts.data.mts'

const { lang } = useData()
const isZh = computed(() => lang.value.startsWith('zh'))
const localized = computed(() => getLocalizedEditorialCopy(lang.value))
const copy = computed(() => localized.value
  ? {
      title: localized.value.blog,
      description: localized.value.blogDesc,
      featured: localized.value.featured,
      latest: localized.value.latest,
      all: localized.value.all,
      count: (total: number) => `${total} ${localized.value?.count}`,
      read: localized.value.read,
      tags: localized.value.tags,
    }
  : isZh.value
  ? {
      title: '博客',
      description: '开源数据库工具的产品更新、技术指南和开发经验。',
      featured: '精选',
      latest: '最新文章',
      all: '全部文章',
      count: (total: number) => `共 ${total} 篇`,
      read: '阅读文章',
      tags: '标签',
    }
  : {
      title: 'Blog',
      description: 'Product updates, technical guides, and lessons from building open-source database tools.',
      featured: 'Featured',
      latest: 'Latest articles',
      all: 'All articles',
      count: (total: number) => `${total} ${total === 1 ? 'article' : 'articles'}`,
      read: 'Read article',
      tags: 'Tags',
    })

const posts = computed(() => data.filter(({ url }) => url.startsWith(isZh.value ? '/zh/blog/' : '/blog/')))
const featured = computed(() => posts.value.find((post) => post.featured) ?? posts.value[0])
const latest = computed(() => posts.value.filter((post) => post !== featured.value).slice(0, 3))
const formatter = computed(() => blogDateFormatter(lang.value))

const formatDate = (date: string): string => formatter.value.format(new Date(date))
</script>

<template>
  <div class="editorial-index blog-index">
    <header class="editorial-index-heading">
      <h1>{{ copy.title }}</h1>
      <p>{{ copy.description }}</p>
      <p v-if="localized">{{ localized.blogSource }}</p>
    </header>

    <article v-if="featured" class="blog-featured">
      <BlogCover :cover="featured.cover" variant="featured" />
      <div class="blog-featured-copy">
        <h2>
          <a class="blog-post-link" :href="withBase(featured.url)" :lang="localized ? 'en' : undefined" :hreflang="localized ? 'en' : undefined">{{ featured.cardTitle ?? featured.title }}</a>
        </h2>
        <p class="blog-post-meta">
          <span>{{ copy.featured }}</span>
          <time v-if="featured.date" :datetime="featured.date">{{ formatDate(featured.date) }}</time>
        </p>
        <p v-if="featured.summary || featured.description" class="blog-featured-summary">
          {{ featured.summary ?? featured.description }}
        </p>
        <ul v-if="featured.tags?.length" class="blog-tags" :aria-label="copy.tags">
          <li v-for="tag in featured.tags.slice(0, 2)" :key="tag">{{ tag }}</li>
        </ul>
        <p class="blog-featured-read" aria-hidden="true">
          {{ copy.read }} <span class="editorial-arrow"></span>
        </p>
      </div>
    </article>

    <section v-if="latest.length" class="blog-latest" aria-labelledby="latest-articles">
      <div class="blog-section-heading">
        <h2 id="latest-articles">{{ copy.latest }}</h2>
        <a class="blog-archive-link" href="#all-articles">
          {{ copy.all }} <span class="editorial-arrow editorial-arrow--down" aria-hidden="true"></span>
        </a>
      </div>
      <div class="blog-card-grid">
        <article v-for="post in latest" :key="post.url" class="blog-card">
          <BlogCover :cover="post.cover" variant="card" />
          <time v-if="post.date" :datetime="post.date">{{ formatDate(post.date) }}</time>
          <h3>
            <a class="blog-post-link" :href="withBase(post.url)" :lang="localized ? 'en' : undefined" :hreflang="localized ? 'en' : undefined">{{ post.cardTitle ?? post.title }}</a>
          </h3>
          <p v-if="post.summary || post.description" class="blog-card-summary">{{ post.summary ?? post.description }}</p>
          <ul v-if="post.tags?.length" class="blog-tags" :aria-label="copy.tags">
            <li v-for="tag in post.tags.slice(0, 2)" :key="tag">{{ tag }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section id="all-articles" class="blog-archive" aria-labelledby="all-articles-title">
      <div class="blog-section-heading">
        <h2 id="all-articles-title">{{ copy.all }}</h2>
        <p class="blog-archive-count">{{ copy.count(posts.length) }}</p>
      </div>
      <ol class="blog-archive-list" role="list">
        <li v-for="post in posts" :key="post.url" class="blog-archive-item">
          <BlogCover :cover="post.cover" variant="thumbnail" />
          <div class="blog-archive-details">
            <h3>
              <a class="blog-post-link" :href="withBase(post.url)" :lang="localized ? 'en' : undefined" :hreflang="localized ? 'en' : undefined">{{ post.title }}</a>
            </h3>
            <time v-if="post.date" :datetime="post.date">{{ formatDate(post.date) }}</time>
            <p v-if="post.summary || post.description" class="blog-archive-summary">
              {{ post.summary ?? post.description }}
            </p>
            <ul v-if="post.tags?.length" class="blog-archive-tags" :aria-label="copy.tags">
              <li v-for="tag in post.tags" :key="tag">{{ tag }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </section>
  </div>
</template>
