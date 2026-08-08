<script setup lang="ts">
import { ref, watch } from 'vue'
import { codeToHtml } from 'shiki'
import Reveal from '../Reveal.vue'

type InstallTab = {
  label: string
  command: string
  lang?: string
  icon?: string
}

type InstallData = {
  eyebrow?: string
  title?: string
  note?: string
  tabs: InstallTab[]
}

const props = defineProps<{ install: InstallData }>()

const activeIndex = ref(0)
const highlighted = ref<string[]>([])
const copied = ref(false)
let copyTimer: ReturnType<typeof setTimeout> | null = null

const detectLang = (label: string, command: string): string => {
  const labelLower = label.toLowerCase()
  if (labelLower === 'cursor' || labelLower === 'windsurf' || labelLower === 'opencode') return 'json'
  if (command.trimStart().startsWith('{')) return 'json'
  return 'bash'
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const highlightAll = async () => {
  const tabs = props.install.tabs ?? []
  const results = await Promise.all(
    tabs.map(async (tab) => {
      const lang = tab.lang ?? detectLang(tab.label, tab.command)
      try {
        const html = await codeToHtml(tab.command, {
          lang,
          themes: { light: 'github-light', dark: 'github-dark' },
        })
        // Shiki's codeToHtml emits `class="shiki ..."` without the vp-code
        // marker VitePress relies on to switch to the dark theme tokens.
        // Add it so `.dark .vp-code span { color: var(--shiki-dark) }` applies.
        return html.replace('<pre class="shiki', '<pre class="shiki vp-code')
      } catch {
        return `<pre><code>${escapeHtml(tab.command)}</code></pre>`
      }
    })
  )
  highlighted.value = results
}

const flashCopied = () => {
  copied.value = true
  if (copyTimer) clearTimeout(copyTimer)
  copyTimer = setTimeout(() => {
    copied.value = false
  }, 2000)
}

const copyCommand = async (command: string) => {
  try {
    await navigator.clipboard.writeText(command)
    flashCopied()
    return
  } catch {
    /* fall through to legacy fallback below */
  }

  // Legacy fallback for non-secure contexts / blocked clipboard API
  try {
    const ta = document.createElement('textarea')
    ta.value = command
    ta.setAttribute('readonly', '')
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    flashCopied()
  } catch {
    /* clipboard unavailable — ignore */
  }
}

/* Roving tabindex for the tab list: only the active tab is focusable,
   arrow keys move selection. Tab semantics stay complete per APG. */
const onTabKeydown = (e: KeyboardEvent) => {
  const tabs = props.install.tabs ?? []
  if (tabs.length < 2) return
  const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
  if (!dir) return
  e.preventDefault()
  const next = (activeIndex.value + dir + tabs.length) % tabs.length
  activeIndex.value = next
  const el = document.querySelector<HTMLButtonElement>(`.install-tab[data-index="${next}"]`)
  el?.focus()
}

watch(() => props.install, highlightAll, { immediate: true, deep: true })
</script>

<template>
  <section class="install-section">
    <div class="container">
      <Reveal>
        <div class="install-header">
          <span v-if="install.eyebrow" class="install-eyebrow">{{ install.eyebrow }}</span>
          <h2 v-if="install.title" class="install-title">{{ install.title }}</h2>
        </div>
      </Reveal>

      <Reveal :delay="120">
        <div class="install-tabs" role="tablist" :aria-label="install.title || 'Install'" @keydown="onTabKeydown">
        <button
          v-for="(tab, index) in install.tabs"
          :key="tab.label"
          :data-index="index"
          class="install-tab"
          :class="{ active: index === activeIndex }"
          :aria-selected="index === activeIndex"
          :tabindex="index === activeIndex ? 0 : -1"
          role="tab"
          :aria-controls="'install-panel'"
          :id="'install-tab-' + index"
          @click="activeIndex = index"
        >
          <img v-if="tab.icon" :src="tab.icon" :alt="''" class="install-tab-icon" loading="lazy" />
          {{ tab.label }}
        </button>
      </div>

      <div class="install-command" id="install-panel" role="tabpanel" :aria-labelledby="'install-tab-' + activeIndex" :aria-label="install.tabs[activeIndex].label + ' install command'">
        <div
          v-if="highlighted[activeIndex]"
          class="install-code"
          v-html="highlighted[activeIndex]"
        ></div>
        <pre v-else class="install-code"><code>{{ install.tabs[activeIndex].command }}</code></pre>
        <button
          class="install-copy"
          :class="{ copied }"
          :aria-label="copied ? 'Copied' : 'Copy ' + install.tabs[activeIndex].label + ' command'"
          @click="copyCommand(install.tabs[activeIndex].command)"
        >
          <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="9" y="9" width="13" height="13" rx="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </button>
      </div>

      <p v-if="install.note" class="install-note">{{ install.note }}</p>
      </Reveal>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  max-width: 880px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;

  @media (min-width: 1440px) {
    max-width: 960px;
    padding: 0 48px;
  }
}

.install-section {
  padding: 48px 0;
  background-color: var(--vp-c-bg-alt);
  border-top: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));

  @media (max-width: 768px) {
    padding: 32px 0;
  }
}

.install-header {
  text-align: center;
  margin-bottom: 40px;
}

.install-eyebrow {
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--vp-c-brand-1);
  margin-bottom: 8px;
}

.install-title {
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

.install-tabs {
  display: flex;
  gap: 4px;
  margin-bottom: 12px;
  padding: 4px;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  border-radius: 10px;
  overflow-x: auto;
}

.install-tab {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: max-content;
  min-height: 44px;
  padding: 8px 20px;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-2);
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;

  &.active {
    color: var(--vp-c-text-1);
    background-color: var(--vp-c-bg);
    box-shadow: var(--vp-shadow-1);
  }

  &:hover:not(.active) {
    color: var(--vp-c-text-1);
  }

  &:focus-visible {
    outline: 2px solid var(--vp-c-brand-1);
    outline-offset: 2px;
  }
}

.install-tab-icon {
  width: 16px;
  height: 16px;
  object-fit: contain;
  flex-shrink: 0;
}

.install-command {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 20px;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  border-radius: 10px;

  .install-code {
    flex: 1;
    min-width: 0;
    margin: 0;
    overflow-x: auto;
    background: transparent;
    padding: 0;
  }

  pre.install-code {
    font-family: var(--vp-font-family-mono);
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--vp-c-text-1);
    white-space: pre;
  }
}

.install-copy {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  color: var(--vp-c-text-2);
  background: transparent;
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  border-radius: 8px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: var(--vp-c-brand-1);
    border-color: var(--vp-c-brand-1);
  }

  &.copied {
    color: var(--gf-c-text-on-brand);
    background-color: var(--gf-c-btn-fill);
    border-color: var(--gf-c-btn-fill);
  }

  &:focus-visible {
    outline: 2px solid var(--vp-c-brand-1);
    outline-offset: 2px;
  }
}

.install-note {
  margin: 12px 0 0;
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  text-align: center;
}

:deep(.shiki) {
  background: transparent !important;
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.6;

  code {
    font-family: var(--vp-font-family-mono);
    white-space: pre;
    color: inherit;
  }

  /* Shiki's codeToHtml inlines the LIGHT theme color on each token span
     (`color:#6F42C1;--shiki-dark:#B392F0`). That inline color beats the
     stylesheet's `.dark .vp-code span` rule, so tokens stay dark-on-dark
     in dark mode. The actual override lives in the global style.scss
     (`.install-command .shiki span`) with !important to win. */
  span {
    color: var(--shiki-light, inherit);
  }
}
</style>
