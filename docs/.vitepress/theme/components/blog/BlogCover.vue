<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { blogCover, type BlogCover } from '../../../blog'

const props = defineProps<{
  cover?: BlogCover
  variant: 'featured' | 'card' | 'thumbnail' | 'article'
}>()

const { lang } = useData()
const image = computed(() => blogCover(props.cover, lang.value.startsWith('zh')))
const isPriority = computed(() => props.variant === 'featured' || props.variant === 'article')
const thumbnail = computed(() => props.variant === 'thumbnail' ? image.value.thumbnail : undefined)
</script>

<template>
  <div class="blog-cover" :class="'blog-cover--' + variant">
    <img
      :src="withBase(thumbnail ?? image.src)"
      :alt="variant === 'article' ? image.alt : ''"
      :width="thumbnail ? 320 : 1200"
      :height="thumbnail ? 180 : 675"
      :loading="isPriority ? 'eager' : 'lazy'"
      :fetchpriority="isPriority ? 'high' : undefined"
      decoding="async"
    >
  </div>
</template>

<style scoped>
.blog-cover {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
}

.blog-cover img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.blog-cover--thumbnail {
  border-radius: 6px;
}

.blog-cover--featured,
.blog-cover--article {
  border-radius: 12px;
}
</style>
