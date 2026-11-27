<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { getLocalizedSitePath } from '../../../site-navigation'
import DocsIcon, { type DocsIconName } from './DocsIcon.vue'

const props = withDefaults(defineProps<{
  variant?: 'default' | 'ultimate' | 'community' | 'native' | 'jdbc' | 'http' | 'warning'
  icon?: DocsIconName
  href?: string
  noIcon?: boolean
}>(), {
  variant: 'default',
  noIcon: false,
})

const { lang } = useData()

const resolvedHref = computed(() => {
  if (props.href) return withBase(props.href)
  if (props.variant === 'ultimate') {
    return withBase(getLocalizedSitePath('/pricing', lang.value))
  }
  return undefined
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
  <component
    :is="resolvedHref ? 'a' : 'span'"
    class="docs-badge"
    :class="[`docs-badge--${variant}`, { 'docs-badge--link': Boolean(resolvedHref) }]"
    :href="resolvedHref"
  >
    <DocsIcon v-if="resolvedIcon" :name="resolvedIcon" :size="11" />
    <slot />
  </component>
</template>
