<script setup lang="ts">
type PlatformItem = {
  name: string
  logo: string
}

type PlatformData = {
  title?: string
  items: PlatformItem[]
}

defineProps<{ platforms: PlatformData }>()
</script>

<template>
  <section class="platform-section">
    <div class="container">
      <div v-if="platforms.title" class="platform-header">
        <span class="platform-title">{{ platforms.title }}</span>
      </div>
      <div class="platform-grid">
        <div v-for="item in platforms.items" :key="item.name" class="platform-item">
          <div class="platform-chip">
            <img :src="item.logo" :alt="item.name" class="platform-logo" />
          </div>
          <span class="platform-name">{{ item.name }}</span>
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

.platform-section {
  padding: 0 0 96px;

  @media (max-width: 768px) {
    padding: 0 0 64px;
  }
}

.platform-header {
  text-align: center;
  margin-bottom: 32px;
}

.platform-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  letter-spacing: 0.02em;
}

.platform-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 20px;
  }
}

.platform-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
}

.platform-chip {
  width: 64px;
  height: 64px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--gf-c-border-subtle);
  padding: 14px;
  box-shadow: var(--vp-shadow-1);
  transition: box-shadow 0.2s ease, border-color 0.2s ease;

  .platform-item:hover & {
    box-shadow: var(--vp-shadow-2);
    border-color: var(--gf-c-border-hover);
  }
}

.platform-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.platform-name {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  text-align: center;
}
</style>
