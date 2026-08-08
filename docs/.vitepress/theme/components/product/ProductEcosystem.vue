<script setup lang="ts">
type EcoItem = {
  name: string
  logo: string
}

type EcosystemData = {
  eyebrow?: string
  title?: string
  subtitle?: string
  agents: EcoItem[]
  databases: EcoItem[]
}

defineProps<{ ecosystem: EcosystemData }>()
</script>

<template>
  <section class="ecosystem-section">
    <div class="container">
      <div class="ecosystem-header">
        <span v-if="ecosystem.eyebrow" class="ecosystem-label">{{ ecosystem.eyebrow }}</span>
        <h2 v-if="ecosystem.title" class="ecosystem-title">{{ ecosystem.title }}</h2>
        <p v-if="ecosystem.subtitle" class="ecosystem-subtitle">{{ ecosystem.subtitle }}</p>
      </div>

      <div class="marquee-stage">
        <!-- Row 1: AI coding agents -->
        <div class="marquee-row">
          <div class="marquee-track marquee-track-agents">
            <template v-for="dup in 2" :key="dup">
              <div v-for="agent in ecosystem.agents" :key="agent.name + dup" class="marquee-item">
                <img :src="agent.logo" :alt="agent.name" class="marquee-logo" loading="lazy" />
                <span class="marquee-name">{{ agent.name }}</span>
              </div>
            </template>
          </div>
        </div>

        <!-- Row 2: databases (reverse direction) -->
        <div class="marquee-row marquee-row-reverse">
          <div class="marquee-track marquee-track-databases">
            <template v-for="dup in 2" :key="dup">
              <div v-for="db in ecosystem.databases" :key="db.name + dup" class="marquee-item">
                <img :src="db.logo" :alt="db.name" class="marquee-logo" loading="lazy" />
                <span class="marquee-name">{{ db.name }}</span>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
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

.ecosystem-section {
  padding: 0 0 72px;

  @media (max-width: 768px) {
    padding: 0 0 48px;
  }
}

.ecosystem-header {
  text-align: center;
  margin-bottom: 40px;
}

.ecosystem-label {
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--vp-c-brand-1);
  margin-bottom: 8px;
}

.ecosystem-title {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
  margin: 0 0 8px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.375rem;
  }
}

.ecosystem-subtitle {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  margin: 0;
}

.marquee-stage {
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent 0,
    #000 48px,
    #000 calc(100% - 48px),
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0,
    #000 48px,
    #000 calc(100% - 48px),
    transparent 100%
  );
}

.marquee-row {
  overflow: hidden;
  width: 100%;
}

.marquee-track {
  display: flex;
  gap: 12px;
  width: max-content;
  animation: marquee-scroll 60s linear infinite;
}

.marquee-track-agents {
  animation-duration: 40s;
}

.marquee-track-databases {
  animation-duration: 90s;
}

.marquee-row-reverse .marquee-track {
  animation-direction: reverse;
}

.marquee-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  border-radius: 10px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  flex-shrink: 0;
}

.marquee-logo {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.marquee-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  white-space: nowrap;
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
</style>
