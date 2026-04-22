<script setup lang="ts">
type Action = {
  text: string
  link: string
  theme: 'brand' | 'alt'
  external?: boolean
}

type CTAData = {
  title: string
  body: string
  actions: Action[]
}

defineProps<{ cta: CTAData }>()
</script>

<template>
  <section class="cta-section">
    <div class="cta-background"></div>
    <div class="container cta-container">
      <h2 class="cta-title">{{ cta.title }}</h2>
      <p class="cta-body">{{ cta.body }}</p>
      <div v-if="cta.actions && cta.actions.length" class="cta-actions">
        <a
          v-for="action in cta.actions"
          :key="action.link"
          :href="action.link"
          :class="['gf-btn', action.theme === 'brand' ? 'gf-btn-primary' : 'gf-btn-secondary']"
          :target="action.external ? '_blank' : undefined"
          :rel="action.external ? 'noopener noreferrer' : undefined"
        >
          {{ action.text }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.cta-section {
  position: relative;
  padding: 96px 0;
  background-color: var(--vp-c-bg-alt);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 64px 0;
  }
}

.cta-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gf-gradient-brand-subtle);
  opacity: 0.5;
  pointer-events: none;
}

.container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;

  @media (min-width: 1440px) {
    max-width: 1320px;
    padding: 0 48px;
  }
}

.cta-container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.cta-title {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
  margin: 0 0 16px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
}

.cta-body {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 0 0 32px;
  max-width: 60ch;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 320px;
  }
}
</style>
