<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import VPFlyout from 'vitepress/dist/client/theme-default/components/VPFlyout.vue'

defineProps<{ variant: 'bar' | 'screen' }>()

type LanguageLink = { lang: string; label: string; href: string }

const { frontmatter, hash, lang } = useData()
const links = computed<LanguageLink[]>(() => frontmatter.value.languageLinks ?? [])
const labels: Record<string, string> = {
  zh: '切换语言',
  'pt-BR': 'Alterar idioma',
  ja: '言語を変更',
  ko: '언어 변경',
  es: 'Cambiar idioma',
}
const label = computed(() => labels[lang.value] ?? 'Change language')

function selectLanguage(language: string): void {
  try {
    localStorage.setItem('gf-lang', language)
  } catch {
    // Language links also work when storage is unavailable.
  }
}
</script>

<template>
  <component
    :is="variant === 'bar' ? VPFlyout : 'div'"
    v-if="links.length > 1"
    :class="['site-language', variant]"
    v-bind="variant === 'bar' ? { icon: 'vpi-languages', label } : {}"
  >
    <nav :aria-label="label" class="language-options">
      <span v-if="variant === 'screen'" class="screen-label">{{ label }}</span>
      <template v-for="link in links" :key="link.lang">
        <span v-if="link.lang === lang" :lang="link.lang" class="current">{{ link.label }}</span>
        <a
          v-else
          :href="withBase(link.href) + hash"
          :lang="link.lang"
          :hreflang="link.lang"
          @click="selectLanguage(link.lang)"
        >{{ link.label }}</a>
      </template>
    </nav>
  </component>
</template>

<style scoped>
.site-language.bar {
  display: none;
}

@media (min-width: 1024px) {
  .site-language.bar {
    display: block;
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
  border-radius: 6px;
}

.language-options a:hover,
.language-options a:focus-visible {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-default-soft);
}

.language-options .current {
  font-weight: 600;
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
