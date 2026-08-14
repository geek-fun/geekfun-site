<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

type HeroData = {
  name: string
  subtitle: string
  tagline: string
  primaryAction?: string
  primaryLink?: string
  secondaryAction?: string
  secondaryLink?: string
}

type BlindProduct = {
  name: string
  logo: string
  preview: string
  description: string
  url: string
}

const props = defineProps<{
  hero: HeroData
  products: BlindProduct[]
}>()

// ── Blind cycle state ──────────────────────────────────────────────────
const flipped = ref(false)
const paused = ref(false)
const reducedMotion = ref(false)

const FRONT_MS = 6000 // how long the front (studio content) stays before flipping
const BACK_MS = 10000 // how long the back (project panels) stays before flipping back
const FLIP_MS = 900 // single panel flip duration
const STAGGER_MS = 70 // cascade delay between panels

let phaseTimer: ReturnType<typeof setTimeout> | null = null
let mql: MediaQueryList | null = null

const totalStagger = () => (props.products.length - 1) * STAGGER_MS

/** Cascade follows a wave: opening left→right, closing right→left, so the
 *  blind sweeps in one direction then sweeps back — visually continuous. */
const delayFor = (i: number) => {
  const n = props.products.length
  return (flipped.value ? n - 1 - i : i) * STAGGER_MS
}

function clearTimer() {
  if (phaseTimer) {
    clearTimeout(phaseTimer)
    phaseTimer = null
  }
}

function schedule() {
  clearTimer()
  if (paused.value || reducedMotion.value) return
  const hold = flipped.value ? BACK_MS : FRONT_MS
  phaseTimer = setTimeout(() => {
    flipped.value = !flipped.value
    // wait for the staggered flip animation to fully finish before the next hold
    phaseTimer = setTimeout(schedule, FLIP_MS + totalStagger())
  }, hold)
}

function onPause() {
  paused.value = true
  clearTimer()
}

function onResume() {
  paused.value = false
  schedule()
}

function syncMotion() {
  reducedMotion.value = mql?.matches ?? false
  if (reducedMotion.value) {
    clearTimer()
    flipped.value = false
  } else {
    schedule()
  }
}

onMounted(() => {
  mql = window.matchMedia('(prefers-reduced-motion: reduce)')
  syncMotion()
  mql.addEventListener('change', syncMotion)
})

onBeforeUnmount(() => {
  clearTimer()
  mql?.removeEventListener('change', syncMotion)
})
</script>

<template>
  <section
    class="hero-blind"
    aria-label="Open Source Studio — featured projects"
    @mouseenter="onPause"
    @mouseleave="onResume"
    @focusin="onPause"
    @focusout="onResume"
  >
    <!-- Front: the studio content, layered behind the blind panels so the
         flip turns the project panels into the foreground. -->
    <div class="hero-front">
      <h1 class="hero-headline">
        <span class="hero-brand-text">{{ hero.name }}</span>
        <span class="subtitle">{{ hero.subtitle }}</span>
      </h1>
      <p class="hero-tagline">{{ hero.tagline }}</p>
      <div v-if="hero.primaryAction || hero.secondaryAction" class="hero-actions">
        <a
          v-if="hero.primaryAction"
          :href="hero.primaryLink"
          class="gf-btn gf-btn-primary"
        >{{ hero.primaryAction }}</a>
        <a
          v-if="hero.secondaryAction"
          :href="hero.secondaryLink"
          class="gf-btn gf-btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >{{ hero.secondaryAction }}</a>
      </div>
    </div>

    <!-- The 6 vertical panels — a venetian blind over the studio content.
         Front face: transparent (studio content shows through). Back face:
         the project image + title + description. -->
    <div class="blind-stage" :class="{ flipped }">
      <a
        v-for="(p, i) in products"
        :key="p.name"
        class="blind-panel"
        :href="p.url"
        :target="p.url.startsWith('http') ? '_blank' : undefined"
        :rel="p.url.startsWith('http') ? 'noopener noreferrer' : undefined"
        :tabindex="flipped ? 0 : -1"
        :aria-hidden="!flipped"
        :aria-label="p.name"
        :style="{ '--flip-delay': delayFor(i) + 'ms' }"
      >
        <div class="blind-inner">
          <div class="blind-face blind-front" aria-hidden="true"></div>
          <div class="blind-face blind-back">
            <img :src="p.preview" :alt="''" class="blind-back-img" loading="lazy" />
            <div class="blind-back-scrim" aria-hidden="true"></div>
            <div class="blind-back-info">
              <img :src="p.logo" :alt="p.name + ' logo'" class="blind-back-logo" />
              <h3 class="blind-back-name">{{ p.name }}</h3>
              <p class="blind-back-desc">{{ p.description }}</p>
            </div>
          </div>
        </div>
      </a>
    </div>

    <!-- Mobile fallback: compact product list (the blind needs desktop width) -->
    <div class="hero-blind-mobile">
      <a
        v-for="p in products"
        :key="p.name"
        :href="p.url"
        :target="p.url.startsWith('http') ? '_blank' : undefined"
        :rel="p.url.startsWith('http') ? 'noopener noreferrer' : undefined"
        class="hero-blind-mobile-item"
      >
        <img :src="p.logo" :alt="p.name + ' logo'" class="hero-blind-mobile-logo" />
        <span class="hero-blind-mobile-name">{{ p.name }}</span>
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero-blind {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: clamp(460px, 62vh, 600px);
  padding: 96px 0 112px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: -10%;
    width: 60%;
    height: 80%;
    transform: translateY(-50%);
    background: radial-gradient(ellipse at center, rgba(248, 155, 64, 0.08) 0%, transparent 60%);
    z-index: 0;
    pointer-events: none;
    filter: blur(40px);
  }

  @media (max-width: 768px) {
    padding: 72px 0 64px;
    min-height: auto;
  }
}

/* ── Front studio content ─────────────────────────────────────────────── */
.hero-front {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 880px;
  padding: 0 24px;
}

.hero-headline {
  font-size: 3.5rem;
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.04em;
  margin: 0 0 var(--space-lg, 1.5rem);
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  gap: 0.75rem;

  @media (max-width: 640px) {
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
    margin: 0 0 var(--space-md);
  }

  @media (min-width: 1440px) {
    font-size: 4.25rem;
  }

  @media (min-width: 1920px) {
    font-size: 5rem;
  }
}

.hero-brand-text {
  color: var(--gf-c-brand-display);
  font-weight: 800;
  letter-spacing: -0.045em;
}

.subtitle {
  color: var(--vp-c-text-2);
  font-weight: 500;
  font-size: 1.25rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-top: 0;
  opacity: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.hero-tagline {
  font-size: 1.375rem;
  line-height: 1.45;
  color: var(--vp-c-text-2);
  margin: 0 0 var(--space-lg, 1.5rem);
  max-width: 640px;
  font-weight: 400;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 1.0625rem;
    margin: 0 0 var(--space-md, 1rem);
  }

  @media (min-width: 1440px) {
    font-size: 1.5rem;
    max-width: 720px;
  }
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin: 0 0 var(--space-lg, 1.5rem);

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 320px;
  }
}

/* ── The blind: 6 vertical flip panels ───────────────────────────────── */
.blind-stage {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  perspective: 1600px;
}

.blind-panel {
  position: relative;
  transform-style: preserve-3d;
  transition-delay: var(--flip-delay, 0ms);
  pointer-events: none;
}

.blind-stage.flipped .blind-panel {
  pointer-events: auto;
}

.blind-inner {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  transition: transform 900ms cubic-bezier(0.65, 0.05, 0.36, 1);
  transition-delay: inherit;
}

.blind-stage.flipped .blind-inner {
  transform: rotateY(180deg);
}

.blind-face {
  position: absolute;
  inset: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.blind-front {
  background: rgba(255, 255, 255, 0.02);
  border-right: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
}

.blind-panel:last-child .blind-front {
  border-right: none;
}

.blind-back {
  transform: rotateY(180deg);
  overflow: hidden;
  background: var(--vp-c-bg-alt);
}

.blind-back-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.blind-panel:hover .blind-back-img {
  transform: scale(1.05);
}

.blind-back-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(12, 12, 15, 0.92) 0%,
    rgba(12, 12, 15, 0.4) 45%,
    rgba(12, 12, 15, 0.08) 70%
  );
}

.blind-back-info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 16px 14px 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  color: #fff;
}

.blind-back-logo {
  width: 26px;
  height: 26px;
  object-fit: contain;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.16);
  padding: 3px;
  margin-bottom: 2px;
}

.blind-back-name {
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0;
  color: #fff;
}

.blind-back-desc {
  font-size: 0.72rem;
  line-height: 1.5;
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ── Mobile fallback ──────────────────────────────────────────────────── */
.hero-blind-mobile {
  display: none;
}

@media (max-width: 768px) {
  .blind-stage {
    display: none;
  }

  .hero-blind-mobile {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    width: 100%;
    max-width: 560px;
    margin-top: 40px;
    padding: 0 24px;
  }

  .hero-blind-mobile-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 14px;
    border-radius: 12px;
    background-color: var(--gf-c-bg-card, var(--vp-c-bg-soft));
    border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
    text-decoration: none;
    color: var(--vp-c-text-1);
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
      border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: translateY(-2px);
      border-color: var(--gf-c-border-hover, var(--vp-c-brand-1));
    }
  }

  .hero-blind-mobile-logo {
    width: 28px;
    height: 28px;
    object-fit: contain;
    border-radius: 6px;
  }

  .hero-blind-mobile-name {
    font-size: 0.875rem;
    font-weight: 600;
  }
}

@media (prefers-reduced-motion: reduce) {
  .blind-inner {
    transition: none;
  }
}
</style>
