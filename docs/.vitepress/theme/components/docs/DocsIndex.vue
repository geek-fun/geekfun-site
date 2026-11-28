<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { getDocsProducts } from '../../../docs-navigation'
import { getLocalizedDocs } from '../../../docs-locales'
import DocsIcon from './DocsIcon.vue'
import DocsIconStack from './DocsIconStack.vue'

const { lang } = useData()
const isZh = computed(() => lang.value === 'zh')
const copy = computed(() => getLocalizedDocs(lang.value))
const products = computed(() => getDocsProducts(lang.value))

const guidesLabel = (count: number) => {
  if (lang.value === 'zh') return `${count} 篇指南`
  if (lang.value === 'pt-BR') return `${count} guias`
  if (lang.value === 'ja') return `${count} 件のガイド`
  if (lang.value === 'ko') return `가이드 ${count}개`
  if (lang.value === 'es') return `${count} guías`
  return `${count} guides`
}

const eyebrowLabel = computed(() => {
  if (isZh.value) return 'GEEKFUN 文档中心'
  if (copy.value) return 'GEEKFUN'
  return 'GEEKFUN Docs'
})

const isVectorLogo = (logo: string) => logo.endsWith('.svg')
</script>

<template>
  <div class="docs-index-shell">
    <div class="docs-index-ambience" aria-hidden="true"></div>

    <div class="editorial-index docs-index">
      <header class="editorial-index-heading docs-index-hero">
        <div class="docs-index-hero__copy">
          <span class="docs-index-eyebrow">
            <DocsIcon name="book" :size="13" />
            {{ eyebrowLabel }}
          </span>
          <h1>{{ copy?.title ?? (isZh ? '文档' : 'Documentation') }}</h1>
          <p>{{ copy?.intro ?? (isZh
            ? '查阅 SqlKit、DocKit 与 Data Studio Agent 的完整安装、连接、查询、数据管理与 AI / MCP 文档。'
            : 'Complete guides for installing, connecting, querying, managing data, and configuring AI & MCP across SqlKit, DocKit, and Data Studio Agent.') }}</p>
        </div>

        <div class="docs-hub-cards" :class="{ 'docs-hub-cards--two': products.length === 2 }">
          <a
            v-for="product in products"
            :key="`jump-${product.id}`"
            class="docs-hub-card"
            :data-product="product.id"
            :href="withBase(product.link)"
          >
            <div class="docs-hub-card__top">
              <span class="docs-hub-card__logo" :class="{ 'docs-hub-card__logo--vector': isVectorLogo(product.logo) }">
                <img :src="withBase(product.logo)" alt="" width="40" height="40" />
              </span>
              <div class="docs-hub-card__meta">
                <span class="docs-hub-card__name">{{ product.name }}</span>
                <DocsIconStack
                  :items="product.ecosystemLogos"
                  :max="5"
                  :extra-count="product.ecosystemExtraCount"
                  size="sm"
                  :aria-label="product.badge"
                />
              </div>
              <span class="docs-hub-card__arrow" aria-hidden="true">
                <DocsIcon name="arrow-right" :size="16" />
              </span>
            </div>
            <p class="docs-hub-card__summary">{{ product.summary }}</p>
            <div class="docs-hub-card__footer">
              <span class="docs-hub-card__count">
                <DocsIcon name="file-text" :size="13" />
                {{ guidesLabel(product.guideCount) }}
              </span>
              <span class="docs-hub-card__cta">
                {{ copy ? copy.overview : isZh ? '进入文档' : 'Read overview' }}
                <DocsIcon name="arrow-right" :size="13" />
              </span>
            </div>
          </a>
        </div>
      </header>

      <section
        v-for="product in products"
        :key="product.id"
        class="docs-product"
        :data-product="product.id"
        :aria-labelledby="product.id"
      >
        <div class="docs-product-header">
          <div class="docs-product-top-row">
            <div class="docs-product-identity">
              <span class="docs-product-logo" :class="{ 'docs-product-logo--vector': isVectorLogo(product.logo) }">
                <img :src="withBase(product.logo)" alt="" width="44" height="44" />
              </span>
              <div class="docs-product-title-row">
                <h2 :id="product.id">{{ product.name }}</h2>
                <DocsIconStack
                  :items="product.ecosystemLogos"
                  :max="6"
                  :extra-count="product.ecosystemExtraCount"
                  size="md"
                  :aria-label="product.badge"
                />
              </div>
            </div>

            <div class="docs-product-buttons">
              <a class="docs-overview-link" :href="withBase(product.link)">
                <DocsIcon name="compass" :size="15" />
                <span>{{ copy ? copy.overview : isZh ? '产品概览' : 'Overview' }}</span>
                <DocsIcon name="arrow-right" :size="14" />
              </a>
              <a class="docs-secondary-btn" :href="withBase(product.quickStartLink)">
                <DocsIcon name="rocket" :size="14" />
                <span>{{ product.quickStartLabel }}</span>
              </a>
            </div>
          </div>

          <p class="docs-product-summary">{{ product.summary }}</p>

          <ul v-if="!copy" class="docs-product-highlights" role="list">
            <li v-for="tag in product.highlights" :key="tag.label">
              <DocsIcon :name="tag.icon" :size="13" />
              <span>{{ tag.label }}</span>
            </li>
          </ul>
        </div>

        <div
          class="docs-product-guides"
          :class="product.groups.length >= 3 ? 'docs-product-guides--three' : 'docs-product-guides--two'"
        >
          <div v-for="group in product.groups" :key="group.text" class="docs-guide-group">
            <div class="docs-guide-group__header">
              <span class="docs-guide-group__icon" aria-hidden="true">
                <DocsIcon :name="group.icon" :size="15" />
              </span>
              <h3>{{ group.text }}</h3>
              <span class="docs-guide-group__count">{{ group.items.length }}</span>
            </div>
            <ul role="list">
              <li v-for="guide in group.items" :key="guide.link">
                <a :href="withBase(guide.link)">
                  <span class="docs-guide-link-label">
                    <DocsIcon class="docs-guide-link-icon" name="file-text" :size="14" />
                    <span>{{ guide.text }}</span>
                  </span>
                  <span class="docs-guide-link-arrow" aria-hidden="true">
                    <DocsIcon name="arrow-right" :size="13" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
