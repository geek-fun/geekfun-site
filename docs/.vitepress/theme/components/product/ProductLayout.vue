<script setup lang="ts">
import { useData } from 'vitepress'
import ProductHero from './ProductHero.vue'
import ProductDatabaseGrid from './ProductDatabaseGrid.vue'
import ProductPlatformGrid from './ProductPlatformGrid.vue'
import ProductShowcase from './ProductShowcase.vue'
import ProductFeatures from './ProductFeatures.vue'
import ProductSecurity from './ProductSecurity.vue'
import ProductCTA from './ProductCTA.vue'
import ProductInstall from './ProductInstall.vue'
import ProductEcosystem from './ProductEcosystem.vue'
import ProductArchitecture from './ProductArchitecture.vue'
import ProductTools from './ProductTools.vue'

const { frontmatter } = useData()
</script>

<template>
  <main id="main-content" class="product-layout">
    <ProductHero v-if="frontmatter.hero" :hero="frontmatter.hero" />
    <ProductShowcase v-if="frontmatter.showcase" :showcase="frontmatter.showcase" />
    <ProductInstall v-if="frontmatter.install" :install="frontmatter.install" />
    <ProductEcosystem v-if="frontmatter.ecosystem" :ecosystem="frontmatter.ecosystem" />
    <ProductDatabaseGrid v-if="frontmatter.databases" :databases="frontmatter.databases" />
    <ProductArchitecture v-if="frontmatter.architecture" :architecture="frontmatter.architecture" />
    <ProductTools v-if="frontmatter.tools" :tools="frontmatter.tools" />
    <ProductFeatures v-if="frontmatter.features" :features="frontmatter.features" />
    <ProductSecurity v-if="frontmatter.security" :security="frontmatter.security" />
    <ProductPlatformGrid v-if="frontmatter.platforms" :platforms="frontmatter.platforms" />
    <ProductCTA v-if="frontmatter.cta" :cta="frontmatter.cta" />
  </main>
</template>

<style scoped lang="scss">
.product-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
