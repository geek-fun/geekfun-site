<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { blogDateFormatter } from '../../../blog'
import { getLocalizedEditorialCopy } from '../editorial-copy'
import { data } from './releases.data.mts'

const { lang } = useData()
const copy = computed(() => getLocalizedEditorialCopy(lang.value))
const formatter = computed(() => blogDateFormatter(lang.value))
</script>

<template>
  <section v-if="copy" class="localized-news">
    <h1>{{ copy.news }}</h1>
    <p>{{ copy.newsDesc }}</p>
    <p>{{ copy.newsSource }}</p>
    <ul>
      <li v-for="release in data" :key="release.url">
        <a :href="withBase(release.url)" lang="en" hreflang="en">{{ release.title }}</a>
        <time v-if="release.date" :datetime="release.date">{{ formatter.format(new Date(release.date)) }}</time>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.localized-news time {
  display: block;
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
}
</style>
