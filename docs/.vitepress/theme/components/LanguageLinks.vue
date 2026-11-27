<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { getLocalizedDocs, getUnprefixedDocsPath } from '../../docs-locales'
import VPMenu from 'vitepress/dist/client/theme-default/components/VPMenu.vue'

const props = defineProps<{ variant: 'bar' | 'screen' }>()

type LanguageLink = { lang: string; label: string; href: string }

const { frontmatter, hash, lang, page } = useData()
const closeScreen = inject<() => void>('close-screen')
const open = ref(false)
const trigger = ref<HTMLButtonElement | null>(null)
const links = computed<LanguageLink[]>(() => frontmatter.value.languageLinks ?? [])
const label = computed(() => getLocalizedDocs(lang.value)?.switchLanguage ?? (
  lang.value === 'zh' ? '切换语言' : 'Change language'
))
const targetHash = computed(() => getUnprefixedDocsPath(page.value.relativePath).startsWith('docs/') ? '' : hash.value)

function onTriggerClick(event: MouseEvent) {
  open.value = event.detail === 0 ? !open.value : true
}

function onFocusOut(event: FocusEvent) {
  const wrapper = event.currentTarget as HTMLElement
  if (!wrapper.contains(event.relatedTarget as Node | null)) open.value = false
}

function closeFromKeyboard() {
  open.value = false
  trigger.value?.focus()
}

function selectLanguage(event: MouseEvent) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

  if (props.variant === 'screen') closeScreen?.()
  else if (event.detail === 0) closeFromKeyboard()
  else open.value = false
}
</script>

<template>
  <div
    v-if="links.length > 1"
    :class="['site-language', variant]"
    @mouseenter="open = true"
    @mouseleave="open = false"
    @focusout="onFocusOut"
    @keydown.esc="closeFromKeyboard"
  >
    <button
      v-if="variant === 'bar'"
      ref="trigger"
      type="button"
      class="language-trigger"
      :aria-label="label"
      :aria-expanded="open"
      aria-controls="site-language-menu"
      @click="onTriggerClick"
    >
      <span class="vpi-languages" aria-hidden="true" />
      <span class="vpi-chevron-down" aria-hidden="true" />
    </button>
    <Transition name="language-menu">
      <component
        :is="variant === 'bar' ? VPMenu : 'div'"
        v-show="variant === 'screen' || open"
        :id="variant === 'bar' ? 'site-language-menu' : undefined"
        :class="{ 'language-popover': variant === 'bar' }"
        :inert="variant === 'bar' && !open ? true : undefined"
      >
        <nav :aria-label="label" class="language-options">
          <span v-if="variant === 'screen'" class="screen-label">{{ label }}</span>
          <template v-for="link in links" :key="link.lang">
            <span v-if="link.lang === lang" :lang="link.lang" aria-current="true" class="current">{{ link.label }}</span>
            <a
              v-else
              :href="withBase(link.href) + targetHash"
              :lang="link.lang"
              :hreflang="link.lang"
              @click="selectLanguage"
            >{{ link.label }}</a>
          </template>
        </nav>
      </component>
    </Transition>
  </div>
</template>

<style scoped>
.site-language.bar {
  display: none;
  position: relative;
}

@media (min-width: 1100px) {
  .site-language.bar {
    display: block;
  }
}

.language-trigger {
  display: flex;
  align-items: center;
  gap: 4px;
  height: var(--vp-nav-height);
  padding: 0 12px;
  color: var(--vp-c-text-1);
}

.language-trigger .vpi-chevron-down {
  font-size: 14px;
}

.language-popover {
  position: absolute;
  top: calc(var(--vp-nav-height) / 2 + 20px);
  right: 0;
}

.language-popover:is(.language-menu-enter-active, .language-menu-leave-active) {
  transition-property: opacity, transform;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

.language-popover.language-menu-leave-active {
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.language-menu-enter-from,
.language-menu-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

@media (prefers-reduced-motion: reduce) {
  .language-popover:is(.language-menu-enter-active, .language-menu-leave-active) {
    transition: none;
  }
}

.language-options {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 32px;
  white-space: nowrap;
}

.language-options a,
.language-options .current {
  padding: 0 12px;
  border-radius: 8px;
  color: var(--vp-c-text-1);
}

.language-options a:hover,
.language-options a:focus-visible {
  background: var(--vp-c-default-soft);
}

.language-options a:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: -2px;
}

.language-options .current {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);
  font-weight: 700;
  background: var(--vp-c-default-2);
}

.language-options .current::after {
  content: '';
  flex: none;
  width: 10px;
  height: 6px;
  border: solid currentColor;
  border-width: 0 0 2px 2px;
  transform: translateY(-1px) rotate(-45deg);
}

.screen .language-options {
  flex-flow: row wrap;
  align-items: center;
  padding: 12px 0;
  border-top: 1px solid var(--vp-c-divider);
}

.screen-label {
  flex-basis: 100%;
  font-weight: 600;
}
</style>
