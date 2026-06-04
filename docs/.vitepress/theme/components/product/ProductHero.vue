<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

type Action = {
  text: string
  link: string
  theme: 'brand' | 'alt'
  external?: boolean
}

type HeroData = {
  eyebrow: string
  name: string
  headline: string
  tagline: string
  logo?: string
  screenshot: string
  actions: Action[]
  animatedText?: string
}

const props = defineProps<{ hero: HeroData }>()

const displayed = ref('')
const cursorVisible = ref(true)
let interval: ReturnType<typeof setInterval> | null = null
let blinkInterval: ReturnType<typeof setInterval> | null = null

function startTypewriter() {
  const word = props.hero.animatedText || ''
  if (!word) return

  let i = 0
  let deleting = false

  function tick() {
    if (!deleting) {
      if (i < word.length) {
        i++
        displayed.value = word.slice(0, i)
      } else {
        clearInterval(interval!)
        setTimeout(() => {
          deleting = true
          interval = setInterval(tick, 180)
        }, 1000)
        return
      }
    } else {
      if (i > 0) {
        i--
        displayed.value = word.slice(0, i)
      } else {
        clearInterval(interval!)
        setTimeout(() => {
          deleting = false
          interval = setInterval(tick, 180)
        }, 800)
        return
      }
    }
  }

  interval = setInterval(tick, 180)
}

onMounted(() => {
  startTypewriter()
  blinkInterval = setInterval(() => {
    cursorVisible.value = !cursorVisible.value
  }, 500)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
  if (blinkInterval) clearInterval(blinkInterval)
})
</script>

<template>
  <section class="hero-section">
    <div class="container hero-container">
      <div class="hero-content">
        <div v-if="hero.eyebrow" class="hero-eyebrow">{{ hero.eyebrow }}</div>
        <h1 class="hero-headline">
          <span class="hero-brand-text">{{ hero.name }}</span>
          <span v-if="hero.name && hero.headline">&nbsp;</span>
          <span v-if="hero.animatedText" class="hero-type-wrapper">
            <span class="hero-type-mirror" aria-hidden="true">{{ hero.animatedText }}|</span>
            <span class="hero-type-content">
              <span class="hero-type-text">{{ displayed }}</span>
              <span class="hero-type-cursor" :class="{ 'cursor-hidden': !cursorVisible }">|</span>
            </span>
          </span>
          <span class="subtitle">{{ hero.headline }}</span>
        </h1>
        <p class="hero-tagline">{{ hero.tagline }}</p>
        <div v-if="hero.actions && hero.actions.length" class="hero-actions">
          <a
            v-for="action in hero.actions"
            :key="action.link"
            :href="action.link"
            :class="['gf-btn', action.theme === 'brand' ? 'gf-btn-primary' : 'gf-btn-secondary']"
            :target="action.external ? '_blank' : undefined"
            :rel="action.external ? 'noopener noreferrer' : undefined"
          >
            {{ action.text }}
          </a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="glow-bg"></div>
        <img :src="hero.screenshot" :alt="hero.name" class="hero-image" width="1280" height="720" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;

  @media (min-width: 1440px) {
    max-width: 1320px;
    padding: 0 48px;
  }

  @media (min-width: 1920px) {
    max-width: 1536px;
    padding: 0 64px;
  }
}

.hero-section {
  padding: 48px 0 32px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 32px 0 24px;
  }

  @media (min-width: 1440px) {
    padding: 64px 0 40px;
  }
}

.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
}

.hero-content {
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
}

.hero-eyebrow {
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 4px 12px;
  margin-bottom: 16px;
  border-radius: 999px;
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border: 1px solid var(--gf-c-border-subtle);
}

.hero-headline {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin: 0 0 var(--space-md, 16px);
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    white-space: normal;
  }

  @media (min-width: 1440px) {
    font-size: 3rem;
  }
}

.hero-brand-text {
  color: var(--vp-c-text-1);
  font-weight: 800;
}

.hero-type-wrapper {
  display: inline-block;
  position: relative;
  white-space: nowrap;
}

.hero-type-mirror {
  visibility: hidden;
  font-weight: 800;
  color: var(--vp-c-brand-1);
}

.hero-type-content {
  position: absolute;
  left: 0;
  top: 0;
  white-space: nowrap;
}

.hero-type-text {
  color: var(--vp-c-brand-1);
  font-weight: 800;
}

.hero-type-cursor {
  color: var(--vp-c-brand-1);
  font-weight: 300;
  margin-left: 1px;
  transition: opacity 0.1s;
}

.cursor-hidden {
  opacity: 0;
}

.subtitle {
  color: var(--vp-c-text-1);
}

.hero-tagline {
  font-size: 1rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  margin: 0 0 var(--space-xl, 32px);
  max-width: 820px;

  @media (max-width: 768px) {
    font-size: 0.9375rem;
    margin: 0 0 24px;
  }
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
}

.hero-visual {
  position: relative;
  width: 100%;
  max-width: 1040px;
  display: flex;
  justify-content: center;
  z-index: 1;
}

.glow-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 140%;
  height: 140%;
  transform: translate(-50%, -50%);
  background: radial-gradient(ellipse at center, rgba(248, 155, 64, 0.12) 0%, rgba(189, 52, 254, 0.1) 40%, transparent 70%);
  z-index: -1;
  pointer-events: none;
  filter: blur(40px);
}

.hero-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: var(--vp-shadow-3, 0 24px 48px rgba(0, 0, 0, 0.2));
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
}
</style>