<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import DocsBadge from './DocsBadge.vue'
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
</script>

<template>
  <div
    class="docs-card"
    :class="{ 'docs-card--interactive': Boolean(href) }"
  >
    <div class="docs-card__header">
      <span v-if="icon" class="docs-card__icon" aria-hidden="true">
        <DocsIcon :name="icon" :size="17" />
      </span>
      <a
        v-if="resolvedHref"
        class="docs-card__title docs-card__link"
        :href="resolvedHref"
        :target="external ? '_blank' : undefined"
        :rel="external ? 'noopener noreferrer' : undefined"
      >
        {{ title }}
      </a>
      <span v-else class="docs-card__title">{{ title }}</span>
      <DocsBadge
        v-if="badge"
        :variant="badgeVariant ?? 'default'"
        class="docs-card__badge"
      >
        {{ badge }}
      </DocsBadge>
      <span v-if="href" class="docs-card__arrow" aria-hidden="true">
        <DocsIcon name="arrow-right" :size="15" />
      </span>
    </div>
    <p v-if="description" class="docs-card__desc">{{ description }}</p>
    <div v-else-if="$slots.default" class="docs-card__desc">
      <slot />
    </div>
  </div>
</template>
