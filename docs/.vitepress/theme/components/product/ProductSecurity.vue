<script setup lang="ts">
import { useData } from 'vitepress'
import Reveal from '../Reveal.vue'

type SecurityItem = {
  title: string
  body: string
  icon: string
}

type PermissionMode = {
  name: string
  tag?: string
  desc: string
  allows: string[]
  blocks: string[]
}

type SecurityData = {
  eyebrow?: string
  title?: string
  items: SecurityItem[]
  permissionModes?: PermissionMode[]
}

defineProps<{ security: SecurityData }>()

const { lang } = useData()

const getIcon = (name?: string) => {
  const icons: Record<string, string> = {
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>',
    id: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8" cy="10" r="2"/><path d="M5 18v-1a3 3 0 0 1 6 0v1"/><line x1="13" y1="9" x2="19" y2="9"/><line x1="13" y1="13" x2="19" y2="13"/><line x1="13" y1="17" x2="17" y2="17"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    local: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    alert: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>'
  }
  const path = name && icons[name] ? icons[name] : icons.shield
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`
}
</script>

<template>
  <section class="security-section">
    <div class="container">
      <Reveal>
        <div class="security-header">
          <span v-if="security.eyebrow" class="security-eyebrow">{{ security.eyebrow }}</span>
          <h2 v-if="security.title" class="security-title">{{ security.title }}</h2>
        </div>
      </Reveal>

      <div class="security-grid">
        <Reveal v-for="(item, i) in security.items" :key="item.title" :delay="i * 70">
          <div class="security-card">
            <div class="security-icon" v-html="getIcon(item.icon)"></div>
            <h3 class="security-card-title">{{ item.title }}</h3>
            <p class="security-card-body">{{ item.body }}</p>
          </div>
        </Reveal>
      </div>

      <template v-if="security.permissionModes && security.permissionModes.length">
        <Reveal>
          <h3 class="permission-heading">Permission modes</h3>
        </Reveal>
        <div class="permission-grid">
          <Reveal
            v-for="(mode, i) in security.permissionModes"
            :key="mode.name"
            :delay="i * 80"
          >
            <div :class="['permission-card', { 'is-featured': mode.tag === 'Default' || mode.name === 'Data Read/Write' }]">
              <div class="permission-card-header">
                <span class="permission-name">{{ mode.name }}</span>
                <span v-if="mode.tag" class="permission-tag">{{ mode.tag }}</span>
              </div>
              <p class="permission-desc">{{ mode.desc }}</p>
              <div class="permission-section">
                <span class="permission-label">Allows</span>
                <ul class="permission-list">
                  <li v-for="item in mode.allows" :key="item" class="list-item allow">
                    <span class="list-icon">✓</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
              <div v-if="mode.blocks && mode.blocks.length" class="permission-section">
                <span class="permission-label">Blocks</span>
                <ul class="permission-list">
                  <li v-for="item in mode.blocks" :key="item" class="list-item block">
                    <span class="list-icon">✕</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </template>
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

.security-section {
  padding: 72px 0;
  background-color: var(--vp-c-bg-alt);
  border-top: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  border-bottom: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));

  @media (max-width: 768px) {
    padding: 48px 0;
  }
}

.security-header {
  text-align: center;
  margin-bottom: 40px;
}

.security-eyebrow {
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--vp-c-brand-1);
  margin-bottom: 8px;
}

.security-title {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
  margin: 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.375rem;
  }
}

.security-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  :deep(.reveal) {
    display: flex;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

.security-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 24px;
  border-radius: 12px;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--vp-c-brand-1);
    box-shadow: var(--vp-shadow-1);
  }
}

.security-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);

  :deep(svg) {
    width: 22px;
    height: 22px;
  }
}

.security-card-title {
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0;
  letter-spacing: -0.01em;
}

.security-card-body {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 0;
}

.permission-heading {
  font-size: 1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 48px 0 16px;
  text-align: left;
}

.permission-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  :deep(.reveal) {
    display: flex;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

.permission-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  border-radius: 12px;
  width: 100%;

  &.is-featured {
    border-color: var(--vp-c-brand-1);
    box-shadow: inset 0 1px 0 0 var(--vp-c-brand-1);
  }
}

.permission-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.permission-name {
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.permission-tag {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
  padding: 2px 8px;
  border-radius: 999px;
}

.permission-desc {
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  margin: 0;
}

.permission-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.permission-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--vp-c-text-2);
}

.permission-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.list-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);

  &.allow .list-icon {
    color: #2ea043;
  }

  &.block .list-icon {
    color: #f85149;
  }
}

.list-icon {
  flex-shrink: 0;
  font-weight: 600;
}
</style>
