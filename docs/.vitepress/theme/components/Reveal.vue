<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  delay?: number
  as?: string
}>(), {
  delay: 0,
  as: 'div',
})

const el = ref<HTMLElement | null>(null)
const hidden = ref(false)
let observer: IntersectionObserver | null = null
let raf = 0

onMounted(() => {
  const node = el.value
  if (!node) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  // Hide only after the browser has painted the default (visible) state, so
  // content is never lost if JS fails mid-run.
  raf = requestAnimationFrame(() => {
    hidden.value = true
  })

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          hidden.value = false
          observer?.disconnect()
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  )
  observer.observe(node)
})

onUnmounted(() => {
  observer?.disconnect()
  if (raf) cancelAnimationFrame(raf)
})
</script>

<template>
  <component
    :is="props.as"
    ref="el"
    class="reveal"
    :class="{ 'is-hidden': hidden }"
    :style="delay ? { '--reveal-delay': delay + 'ms' } : undefined"
  >
    <slot />
  </component>
</template>

<style scoped>
.reveal {
  transition:
    opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) var(--reveal-delay, 0ms),
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) var(--reveal-delay, 0ms);
  will-change: opacity, transform;
}

.is-hidden {
  opacity: 0;
  transform: translateY(24px);
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    transition: none;
  }
  .is-hidden {
    opacity: 1;
    transform: none;
  }
}
</style>
