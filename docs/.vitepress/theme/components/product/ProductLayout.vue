<script setup lang="ts">
import { useData } from 'vitepress'
import ProductHero from './ProductHero.vue'
import ProductShowcase from './ProductShowcase.vue'
import ProductFeatures from './ProductFeatures.vue'
import ProductSecurity from './ProductSecurity.vue'
import ProductCTA from './ProductCTA.vue'
import ProductInstall from './ProductInstall.vue'
import ProductEcosystem from './ProductEcosystem.vue'

const { frontmatter } = useData()
</script>

<template>
  <div class="product-layout">
    <ProductHero v-if="frontmatter.hero" :hero="frontmatter.hero" />
    <ProductInstall v-if="frontmatter.install" :install="frontmatter.install" />
    <ProductEcosystem v-if="frontmatter.ecosystem" :ecosystem="frontmatter.ecosystem" />
    <ProductShowcase v-if="frontmatter.showcase" :showcase="frontmatter.showcase" />
    <ProductFeatures v-if="frontmatter.features" :features="frontmatter.features" />
    <ProductSecurity v-if="frontmatter.security" :security="frontmatter.security" />
    <div class="product-doc">
      <Content class="vp-doc" />
    </div>
    <ProductCTA v-if="frontmatter.cta" :cta="frontmatter.cta" />
  </div>
</template>

<style scoped lang="scss">
.product-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.product-doc {
  max-width: 880px;
  margin: 0 auto;
  padding: 0 24px 96px;

  @media (min-width: 1440px) {
    max-width: 960px;
    padding: 0 48px 112px;
  }
}
</style>
