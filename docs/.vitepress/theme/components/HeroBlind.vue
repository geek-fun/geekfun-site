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
// Panels open ONE AT A TIME, left→right, ~5s apart: the first panel flips
// after the front hold, then each next panel follows roughly OPEN_GAP_MS
// later. All six rest open (back phase), then close right→left in a quick
// sweep, and the cycle repeats. Hover/focus pauses the clock. While a panel
// is closed (e.g. on the front face), clicking that column opens it right
// away to show that product's image + description — the pointer is already
// over the hero, so the clock stays paused until the user leaves.
const open = ref<boolean[]>(props.products.map(() => false))
type BlindPhase = 'front' | 'opening' | 'back' | 'closing'
const phase = ref<BlindPhase>('front')
const paused = ref(false)
const reducedMotion = ref(false)

const FRONT_MS = 6000 // studio content stays before the first panel opens
const OPEN_GAP_MS = 5000 // wait between each successive panel opening
const BACK_MS = 10000 // how long all six stay open before closing
const CLOSE_GAP_MS = 70 // quick right→left cascade when closing

let phaseTimer: ReturnType<typeof setTimeout> | null = null
let mql: MediaQueryList | null = null

function clearTimer() {
  if (phaseTimer) {
    clearTimeout(phaseTimer)
    phaseTimer = null
  }
}

/** Leftmost closed panel, or -1 when every panel is open. */
function nextClosedFromLeft() {
  return open.value.findIndex((isOpen) => !isOpen)
}

/** Rightmost open panel, or -1 when every panel is closed. */
function rightmostOpen() {
  for (let i = open.value.length - 1; i >= 0; i--) {
    if (open.value[i]) return i
  }
  return -1
}

/** Runs the current phase's action and schedules the next one. */
function step() {
  clearTimer()
  if (paused.value || reducedMotion.value) return

  switch (phase.value) {
    case 'front': {
      // hold the studio content, then open the first closed panel from the left
      phaseTimer = setTimeout(() => {
        const i = nextClosedFromLeft()
        if (i >= 0) {
          open.value[i] = true
          phase.value = 'opening'
        } else {
          phase.value = 'back'
        }
        step()
      }, FRONT_MS)
      break
    }

    case 'opening': {
      if (nextClosedFromLeft() >= 0) {
        phaseTimer = setTimeout(() => {
          const i = nextClosedFromLeft()
          if (i >= 0) open.value[i] = true
          step()
        }, OPEN_GAP_MS)
      } else {
        // every panel open — hold, then start closing from the right
        phase.value = 'back'
        phaseTimer = setTimeout(() => {
          phase.value = 'closing'
          step()
        }, BACK_MS)
      }
      break
    }

    case 'back': {
      phaseTimer = setTimeout(() => {
        phase.value = 'closing'
        step()
      }, BACK_MS)
      break
    }

    case 'closing': {
      if (rightmostOpen() >= 0) {
        phaseTimer = setTimeout(() => {
          const j = rightmostOpen()
          if (j >= 0) open.value[j] = false
          step()
        }, CLOSE_GAP_MS)
      } else {
        phase.value = 'front'
        step()
      }
      break
    }
  }
}

/** Clicking a closed panel flips that column open immediately (its own image
 *  and description); clicking an open panel follows the product link. The
 *  pointer is over the hero, so the cycle is already paused on hover — the
 *  revealed panel stays up until the user leaves. */
function onPanelClick(index: number, event: MouseEvent) {
  if (open.value[index]) return // open panel → normal navigation
  event.preventDefault()
  open.value[index] = true
}

function onPause() {
  paused.value = true
  clearTimer()
}

function onResume() {
  paused.value = false
  step()
}

function syncMotion() {
  reducedMotion.value = mql?.matches ?? false
  if (reducedMotion.value) {
    clearTimer()
    open.value = props.products.map(() => false)
    phase.value = 'front'
  } else {
    step()
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
         Each panel opens on its own clock, left→right ~5s apart. Front face:
         transparent (studio content shows through). Back face: the project
         image + title + description. -->
    <div class="blind-stage">
      <a
        v-for="(p, i) in products"
        :key="p.name"
        class="blind-panel"
        :class="{ 'is-open': open[i] }"
        :href="open[i] ? p.url : undefined"
        :target="p.url.startsWith('http') ? '_blank' : undefined"
        :rel="p.url.startsWith('http') ? 'noopener noreferrer' : undefined"
        :tabindex="open[i] ? 0 : -1"
        :aria-hidden="open[i] ? undefined : 'true'"
        :aria-label="open[i] ? p.name : `Show ${p.name} details`"
        @click="onPanelClick(i, $event)"
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
}

.blind-panel,
.blind-panel * {
  cursor: pointer;
}

.blind-inner {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  transition: transform 900ms cubic-bezier(0.65, 0.05, 0.36, 1);
}

.blind-panel.is-open .blind-inner {
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
  left: 2px;
  top: 12px;
  width: calc(100% - 4px);
  height: calc(100% - 12px);
  object-fit: cover;
  object-position: center 20%;
  border-radius: 8px;
  transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

/* Every panel's screenshot shares the same frame — a 12px reveal above,
   ~2px sides, flush to the bottom — so the six content blocks stay aligned. */

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

/* Visible keyboard focus on every panel; invisible to pointer users. */
.blind-panel:focus-visible {
  outline: 2px solid var(--gf-c-brand);
  outline-offset: -2px;
  z-index: 2;
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
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.16);
  padding: 3px;
  margin-bottom: 2px;
}

.blind-back-name {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0;
  color: #fff;
}

.blind-back-desc {
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
  color: rgba(255, 255, 255, 0.84);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ── Mobile fallback ──────────────────────────────────────────────────── */
.hero-blind-mobile {
  position: relative;
  z-index: 1;
  display: none;
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

  &:focus-visible {
    outline: 2px solid var(--gf-c-brand);
    outline-offset: 2px;
  }
}

.hero-blind-mobile-logo {
  width: 28px;
  height: 28px;
  object-fit: contain;
  border-radius: 8px;
}

.hero-blind-mobile-name {
  font-size: 0.875rem;
  font-weight: 600;
}

@media (max-width: 768px) {
  .blind-stage {
    display: none;
  }

  .hero-blind-mobile {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}

/* Reduced motion never gates content behind the flip: the stage stays
   static on its front face, so the product list takes its place at every
   width instead of vanishing on desktop. */
@media (prefers-reduced-motion: reduce) {
  .blind-stage {
    display: none;
  }

  .hero-blind-mobile {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .blind-inner {
    transition: none;
  }
}
</style>
