<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { blogDate, blogDateFormatter, type BlogFrontmatter } from '../../../blog'
import BlogCover from './BlogCover.vue'

const { frontmatter, lang } = useData()
const article = computed((): BlogFrontmatter => frontmatter.value)
const isZh = computed(() => lang.value.startsWith('zh'))
const date = computed(() => blogDate(article.value.date))
const formattedDate = computed(() => date.value && blogDateFormatter(lang.value).format(new Date(date.value)))
</script>

<template>
  <header class="blog-article-header">
    <a class="blog-article-back" :href="withBase(isZh ? '/zh/blog#all-articles' : '/blog#all-articles')">
      <span class="editorial-arrow editorial-arrow--back" aria-hidden="true"></span>
      {{ isZh ? '全部文章' : 'All articles' }}
    </a>
    <slot />
    <p v-if="article.summary || article.description" class="blog-article-deck">
      {{ article.summary ?? article.description }}
    </p>
    <div class="blog-article-meta">
      <span class="blog-article-author">{{ isZh ? '极客范' : 'GEEKFUN' }}</span>
      <time v-if="date" :datetime="date">{{ formattedDate }}</time>
      <ul v-if="article.tags?.length" class="blog-tags" :aria-label="isZh ? '标签' : 'Tags'">
        <li v-for="tag in article.tags" :key="tag">{{ tag }}</li>
      </ul>
    </div>
    <BlogCover :cover="article.cover" variant="article" />
  </header>
</template>
