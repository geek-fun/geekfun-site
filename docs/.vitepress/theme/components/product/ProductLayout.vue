<script setup lang="ts">
import { useData } from 'vitepress'
import ProductHero from './ProductHero.vue'
import ProductDatabaseGrid from './ProductDatabaseGrid.vue'
import ProductPlatformGrid from './ProductPlatformGrid.vue'
import ProductShowcase from './ProductShowcase.vue'
import ProductFeatures from './ProductFeatures.vue'
import ProductCTA from './ProductCTA.vue'

const { frontmatter } = useData()
</script>

<template>
  <div class="product-layout">
    <ProductHero v-if="frontmatter.hero" :hero="frontmatter.hero" />
    <ProductDatabaseGrid v-if="frontmatter.databases" :databases="frontmatter.databases" />
    <ProductPlatformGrid v-if="frontmatter.platforms" :platforms="frontmatter.platforms" />
    <ProductShowcase v-if="frontmatter.showcase" :showcase="frontmatter.showcase" />
    <ProductFeatures v-if="frontmatter.features" :features="frontmatter.features" />
    <ProductCTA v-if="frontmatter.cta" :cta="frontmatter.cta" />
  </div>
</template>

<style scoped lang="scss">
.product-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
