<script setup lang="ts">
import { useData } from 'vitepress'

type DatabaseItem = {
  name: string
  logo: string
  link?: string
}

type DatabaseData = {
  title?: string
  items: DatabaseItem[]
}

const props = defineProps<{ databases: DatabaseData }>()
const { lang } = useData()

const resolveLink = (link: string) => {
  return lang.value === 'zh' ? `/zh${link}` : link
}
</script>

<template>
  <section class="database-section">
    <div class="container">
      <div v-if="databases.title" class="database-header">
        <span class="database-title">{{ databases.title }}</span>
      </div>
      <div class="database-grid">
        <a
          v-for="item in databases.items"
          :key="item.name"
          :href="item.link ? resolveLink(item.link) : undefined"
          class="database-item"
          :class="{ clickable: !!item.link }"
        >
          <div class="database-chip">
            <img :src="item.logo" :alt="item.name" class="database-logo" />
          </div>
          <span class="database-name">{{ item.name }}</span>
        </a>
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
  padding: 24px 0 48px;

  @media (max-width: 768px) {
    padding: 16px 0 32px;
  }
}

.database-header {
  text-align: center;
  margin-bottom: 20px;
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
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
  }
}

.database-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s ease;

  &.clickable {
    cursor: pointer;
    text-decoration: none;

    &:hover {
      transform: translateY(-2px);
    }
  }

  &:not(.clickable) {
    cursor: default;
  }
}

.database-chip {
  width: 56px;
  height: 56px;
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
