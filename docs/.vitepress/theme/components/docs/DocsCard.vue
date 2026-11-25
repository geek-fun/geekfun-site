<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import DocsIcon, { type DocsIconName } from './DocsIcon.vue'

const props = defineProps<{
  title: string
  description?: string
  href?: string
  badge?: string
  badgeVariant?: 'default' | 'ultimate' | 'community'
  icon?: DocsIconName
  external?: boolean
}>()

const resolvedHref = computed(() => {
  if (!props.href) return undefined
  if (props.external || /^https?:\/\//.test(props.href)) return props.href
  return withBase(props.href)
})

const badgeIcon = computed<DocsIconName | undefined>(() => {
  if (props.badgeVariant === 'ultimate') return 'sparkles'
  if (props.badgeVariant === 'community') return 'check'
  return undefined
})
</script>

<template>
  <component
    :is="href ? 'a' : 'div'"
    class="docs-card"
    :class="{ 'docs-card--interactive': Boolean(href) }"
    :href="resolvedHref"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <div class="docs-card__header">
      <span v-if="icon" class="docs-card__icon" aria-hidden="true">
        <DocsIcon :name="icon" :size="17" />
      </span>
      <span class="docs-card__title">{{ title }}</span>
      <span v-if="badge" class="docs-badge" :class="`docs-badge--${badgeVariant ?? 'default'}`">
        <DocsIcon v-if="badgeIcon" :name="badgeIcon" :size="11" />
        {{ badge }}
      </span>
      <span v-if="href" class="docs-card__arrow" aria-hidden="true">
        <DocsIcon name="arrow-right" :size="15" />
      </span>
    </div>
    <p v-if="description" class="docs-card__desc">{{ description }}</p>
    <div v-else-if="$slots.default" class="docs-card__desc">
      <slot />
    </div>
  </component>
</template>
