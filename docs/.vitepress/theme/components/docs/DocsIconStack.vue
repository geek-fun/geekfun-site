<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

export type StackLogo = {
  name: string
  src: string
}

const props = withDefaults(defineProps<{
  items: StackLogo[]
  max?: number
  extraCount?: number
  size?: 'sm' | 'md'
  ariaLabel?: string
}>(), {
  size: 'md',
})

const visibleItems = computed(() =>
  props.max ? props.items.slice(0, props.max) : props.items,
)

const overflowCount = computed(() => {
  const hidden = props.items.length - visibleItems.value.length
  const total = (props.extraCount ?? 0) + Math.max(0, hidden)
  return total > 0 ? total : 0
})
</script>

<template>
  <div
    class="docs-icon-stack"
    :class="`docs-icon-stack--${size}`"
    role="group"
    :aria-label="ariaLabel"
  >
    <span
      v-for="item in visibleItems"
      :key="item.name"
      class="docs-icon-stack__item"
      :data-tooltip="size === 'md' ? item.name : undefined"
    >
      <img
        :src="withBase(item.src)"
        :alt="item.name"
        loading="lazy"
        decoding="async"
      />
    </span>
    <span
      v-if="overflowCount > 0"
      class="docs-icon-stack__more"
      :aria-label="`+${overflowCount} more`"
    >
      +{{ overflowCount }}
    </span>
  </div>
</template>
