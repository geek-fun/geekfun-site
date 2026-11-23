<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { getDocsProducts } from '../../../docs-navigation'
import { getLocalizedDocs } from '../../../docs-locales'

const { lang } = useData()
const isZh = computed(() => lang.value === 'zh')
const copy = computed(() => getLocalizedDocs(lang.value))
const products = computed(() => getDocsProducts(lang.value))
</script>

<template>
  <div class="editorial-index docs-index">
    <header class="editorial-index-heading">
      <h1>{{ copy?.title ?? (isZh ? '文档' : 'Documentation') }}</h1>
      <p>{{ copy?.intro ?? (isZh
        ? '安装 SqlKit、DocKit 和 Data Studio Agent，了解如何连接和查询数据库。'
        : 'Installation, connection, and query guides for SqlKit, DocKit, and Data Studio Agent.') }}</p>
    </header>

    <section v-for="product in products" :key="product.id" class="docs-product" :aria-labelledby="product.id">
      <div class="docs-product-intro">
        <img :src="withBase(product.logo)" alt="" width="44" height="44" />
        <h2 :id="product.id">{{ product.name }}</h2>
        <p>{{ product.summary }}</p>
        <a class="docs-overview-link" :href="withBase(product.link)">
          {{ copy ? `${product.name} · ${copy.overview}` : isZh ? `${product.name} 概览` : `${product.name} overview` }}
          <span class="editorial-arrow" aria-hidden="true"></span>
        </a>
      </div>

      <div class="docs-product-guides">
        <div v-for="group in product.groups" :key="group.text" class="docs-guide-group">
          <h3>{{ group.text }}</h3>
          <ul role="list">
            <li v-for="guide in group.items" :key="guide.link">
              <a :href="withBase(guide.link)">{{ guide.text }}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
