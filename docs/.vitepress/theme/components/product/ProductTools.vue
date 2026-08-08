<script setup lang="ts">
import Reveal from '../Reveal.vue'

type ToolItem = {
  name: string
  desc: string
  access?: string
}

type ToolGroup = {
  name: string
  prefix: string
  accent?: string
  tools: ToolItem[]
}

type ToolsData = {
  eyebrow?: string
  title?: string
  subtitle?: string
  groups: ToolGroup[]
}

defineProps<{ tools: ToolsData }>()
</script>

<template>
  <section class="tools-section">
    <div class="container">
      <Reveal>
        <div class="tools-header">
          <span v-if="tools.eyebrow" class="tools-eyebrow">{{ tools.eyebrow }}</span>
          <h2 v-if="tools.title" class="tools-title">{{ tools.title }}</h2>
          <p v-if="tools.subtitle" class="tools-subtitle">{{ tools.subtitle }}</p>
        </div>
      </Reveal>

      <div class="tools-grid">
        <Reveal v-for="(group, i) in tools.groups" :key="group.name" :delay="i * 80">
          <div class="tool-group-card">
            <div class="group-header">
              <span
                class="group-dot"
                :style="group.accent ? { backgroundColor: group.accent } : undefined"
              ></span>
              <span class="group-name">{{ group.name }}</span>
              <span class="group-prefix">{{ group.prefix }}</span>
            </div>
            <div class="group-tools">
              <div
                v-for="(tool, ti) in group.tools"
                :key="tool.name"
                :class="['tool-row', { 'has-divider': ti > 0 }]"
              >
                <div class="tool-main">
                  <span class="tool-fullname">{{ group.prefix }}{{ tool.name }}</span>
                  <span v-if="tool.access" :class="['tool-badge', `badge-${tool.access.toLowerCase().replace(/[^a-z]/g, '')}`]">{{ tool.access }}</span>
                </div>
                <span class="tool-desc">{{ tool.desc }}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.tools-section {
  padding: 48px 0 64px;

  @media (max-width: 768px) {
    padding: 32px 0 48px;
  }
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

.tools-header {
  text-align: center;
  margin-bottom: 40px;
}

.tools-eyebrow {
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--vp-c-brand-1);
  margin-bottom: 8px;
}

.tools-title {
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

.tools-subtitle {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 12px auto 0;
  max-width: 56ch;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

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

.tool-group-card {
  padding: 28px;
  background-color: var(--gf-c-bg-card);
  border: 1px solid var(--gf-c-border-subtle);
  border-radius: 12px;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--gf-c-border-hover);
    box-shadow: 0 12px 24px var(--gf-c-glow), var(--vp-shadow-2);
  }
}

.group-header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
}

.group-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #f89b40;
  flex-shrink: 0;
}

.group-name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.group-prefix {
  font-family: ui-monospace, 'SF Mono', 'Cascadia Code', 'Segoe UI Mono', monospace;
  font-size: 0.8125rem;
  color: var(--vp-c-text-2);
  opacity: 0.7;
  width: 100%;
  margin-top: 2px;
}

.group-tools {
  display: flex;
  flex-direction: column;
}

.tool-row {
  padding: 14px 0;
  display: flex;
  flex-direction: column;
  gap: 6px;

  &.has-divider {
    border-top: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  }
}

.tool-main {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.tool-fullname {
  font-family: ui-monospace, 'SF Mono', 'Cascadia Code', 'Segoe UI Mono', monospace;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.tool-badge {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 2px 8px;
  border-radius: 999px;
  border: 1px solid;

  &.badge-read {
    color: #2ea043;
    background-color: rgba(46, 160, 67, 0.08);
    border-color: rgba(46, 160, 67, 0.2);
  }

  &.badge-readwrite {
    color: #f89b40;
    background-color: rgba(248, 155, 64, 0.08);
    border-color: rgba(248, 155, 64, 0.2);
  }

  &.badge-full {
    color: #f85149;
    background-color: rgba(248, 81, 73, 0.08);
    border-color: rgba(248, 81, 73, 0.2);
  }
}

.tool-desc {
  font-size: 0.8125rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}
</style>
