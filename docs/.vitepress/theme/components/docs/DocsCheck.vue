<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

type CheckValue = 'yes' | 'no' | 'custom'

const props = withDefaults(defineProps<{
  value?: CheckValue
  label?: string
}>(), {
  value: 'yes',
})

const { lang } = useData()
const isZh = computed(() => lang.value === 'zh')

const ariaText = computed(() => {
  if (props.label) return props.label
  if (props.value === 'yes') return isZh.value ? '支持' : 'Yes'
  if (props.value === 'custom') return isZh.value ? '自定义' : 'Custom'
  return isZh.value ? '不支持' : 'No'
})
</script>

<template>
  <span
    class="docs-check"
    :class="`docs-check--${value}`"
    role="img"
    :aria-label="ariaText"
    :title="ariaText"
  >
    <span class="docs-check__icon" aria-hidden="true">
      <svg v-if="value === 'yes'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <svg v-else-if="value === 'custom'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
        <line x1="4" y1="8" x2="20" y2="8" />
        <line x1="4" y1="16" x2="20" y2="16" />
        <circle cx="9" cy="8" r="2.2" fill="currentColor" stroke="none" />
        <circle cx="15" cy="16" r="2.2" fill="currentColor" stroke="none" />
      </svg>
      <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
        <line x1="6" y1="12" x2="18" y2="12" />
      </svg>
    </span>
    <span v-if="label" class="docs-check__label">{{ label }}</span>
  </span>
</template>
