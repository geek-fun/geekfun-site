<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { getDocsProducts } from '../../../docs-navigation'
import { getLocalizedDocs } from '../../../docs-locales'

const props = defineProps<{ productId: string }>()
const { lang, page } = useData()
const isZh = computed(() => lang.value === 'zh')
const copy = computed(() => getLocalizedDocs(lang.value))
const index = computed(() => (copy.value || isZh.value) ? `/${lang.value}/docs` : '/docs')
const product = computed(() => getDocsProducts(lang.value).find(({ id }) => id === props.productId))
const isOverview = computed(() => page.value.relativePath.endsWith('/index.md'))
</script>

<template>
  <nav v-if="product" class="docs-breadcrumb" :aria-label="copy?.breadcrumb ?? (isZh ? '面包屑导航' : 'Breadcrumb')">
    <a :href="withBase(index)">{{ copy?.title ?? (isZh ? '文档' : 'Documentation') }}</a>
    <span class="docs-breadcrumb-divider" aria-hidden="true"></span>
    <span v-if="isOverview" aria-current="page">{{ product.name }}</span>
    <a v-else :href="withBase(product.link)">{{ product.name }}</a>
  </nav>
</template>
