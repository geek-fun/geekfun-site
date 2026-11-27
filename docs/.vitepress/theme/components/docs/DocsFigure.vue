<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps<{
  src: string
  alt: string
  caption: string
  width: number
  height: number
  eager?: boolean
}>()
</script>

<template>
  <figure class="docs-figure">
    <a :href="withBase(src)" target="_blank" rel="noopener">
      <img
        :src="withBase(src)"
        :alt="alt"
        :width="width"
        :height="height"
        :loading="eager ? 'eager' : 'lazy'"
        decoding="async"
      />
    </a>
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>
