<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { getDocsProducts } from '../../../docs-navigation'

const props = defineProps<{ productId: string }>()
const { lang, page } = useData()
const isZh = computed(() => lang.value === 'zh')
const product = computed(() => getDocsProducts(isZh.value).find(({ id }) => id === props.productId))
const isOverview = computed(() => page.value.relativePath.endsWith('/index.md'))
</script>

<template>
  <nav v-if="product" class="docs-breadcrumb" :aria-label="isZh ? '面包屑导航' : 'Breadcrumb'">
    <a :href="withBase(isZh ? '/zh/docs' : '/docs')">{{ isZh ? '文档' : 'Documentation' }}</a>
    <span class="docs-breadcrumb-divider" aria-hidden="true"></span>
    <span v-if="isOverview" aria-current="page">{{ product.name }}</span>
    <a v-else :href="withBase(product.link)">{{ product.name }}</a>
  </nav>
</template>
