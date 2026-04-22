<script setup lang="ts">
type DatabaseItem = {
  name: string
  logo: string
}

type DatabaseData = {
  title?: string
  items: DatabaseItem[]
}

defineProps<{ databases: DatabaseData }>()
</script>

<template>
  <section class="database-section">
    <div class="container">
      <div v-if="databases.title" class="database-header">
        <span class="database-title">{{ databases.title }}</span>
      </div>
      <div class="database-grid">
        <div v-for="item in databases.items" :key="item.name" class="database-item">
          <div class="database-chip">
            <img :src="item.logo" :alt="item.name" class="database-logo" />
          </div>
          <span class="database-name">{{ item.name }}</span>
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

.database-section {
  padding: 48px 0 96px;

  @media (max-width: 768px) {
    padding: 32px 0 64px;
  }
}

.database-header {
  text-align: center;
  margin-bottom: 32px;
}

.database-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  letter-spacing: 0.02em;
}

.database-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 20px;
  }
}

.database-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
}

.database-chip {
  width: 64px;
  height: 64px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--gf-c-border-subtle);
  padding: 10px;
  box-shadow: var(--vp-shadow-1);
  transition: box-shadow 0.2s ease, border-color 0.2s ease;

  .database-item:hover & {
    box-shadow: var(--vp-shadow-2);
    border-color: var(--gf-c-border-hover);
  }
}

.database-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.database-name {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  text-align: center;
}
</style>
