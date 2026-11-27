<script setup lang="ts">
withDefaults(defineProps<{
  cols?: 2 | 3
}>(), {
  cols: 2,
})
</script>

<template>
  <div class="docs-card-grid" :class="`docs-card-grid--cols-${cols}`">
    <slot />
  </div>
</template>
