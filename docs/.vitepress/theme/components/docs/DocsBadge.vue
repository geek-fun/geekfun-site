<script setup lang="ts">
import { computed } from 'vue'
import DocsIcon, { type DocsIconName } from './DocsIcon.vue'

const props = withDefaults(defineProps<{
  variant?: 'default' | 'ultimate' | 'community' | 'native' | 'jdbc' | 'http' | 'warning'
  icon?: DocsIconName
  noIcon?: boolean
}>(), {
  variant: 'default',
  noIcon: false,
})

const resolvedIcon = computed<DocsIconName | undefined>(() => {
  if (props.noIcon) return undefined
  if (props.icon) return props.icon
  switch (props.variant) {
    case 'ultimate':
      return 'sparkles'
    case 'community':
      return 'check'
    case 'native':
      return 'zap'
    case 'jdbc':
      return 'plug'
    case 'http':
      return 'globe'
    default:
      return undefined
  }
})
</script>

<template>
  <span class="docs-badge" :class="`docs-badge--${variant}`">
    <DocsIcon v-if="resolvedIcon" :name="resolvedIcon" :size="11" />
    <slot />
  </span>
</template>
