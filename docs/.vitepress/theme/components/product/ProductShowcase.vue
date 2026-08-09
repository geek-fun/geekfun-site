<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import Reveal from '../Reveal.vue'

type TerminalMessage =
  | { role: 'user'; text: string }
  | { role: 'agent'; text: string }
  | { role: 'tool'; name: string; detail: string }
  | { role: 'result'; text: string }

type TerminalData = {
  title: string
  messages: TerminalMessage[]
}

type ShowcaseItem = {
  title: string
  body: string
  image?: string
  visual?: 'image' | 'terminal'
  terminal?: TerminalData
  align: 'left' | 'right'
}

type ShowcaseHeader = {
  eyebrow?: string
  title?: string
  subtitle?: string
}

// Accept both the legacy array shape (dockit/sqlkit) and the
// object shape with an optional header + items.
type ShowcaseData = ShowcaseItem[] | (ShowcaseHeader & { items: ShowcaseItem[] })

const props = defineProps<{ showcase: ShowcaseData }>()

const items = computed<ShowcaseItem[]>(() =>
  Array.isArray(props.showcase) ? props.showcase : props.showcase.items,
)

const header = computed<ShowcaseHeader | null>(() =>
  !Array.isArray(props.showcase) ? props.showcase : null,
)

// Tabbed mode: object-form showcase with at least one terminal item.
const useTabs = computed(
  () => !Array.isArray(props.showcase) && props.showcase.items.some((i) => i.visual === 'terminal'),
)

const activeIndex = ref(0)

// ── Playback state (tabbed terminal live conversation) ──────────────
const revealedCount = ref(0)
const typingChars = ref(0)
const typingRole = ref<'user' | 'agent' | 'tool' | 'result' | null>(null)
const thinkingActive = ref(false)
const executingActive = ref(false)
const reducedMotion = ref(false)
const hoverPaused = ref(false)
const isPlaying = ref(false)
const playbackComplete = ref(false)
const contentRef = ref<HTMLElement | null>(null)

let playbackToken = 0
let advanceTimer: ReturnType<typeof setTimeout> | null = null
const activeTimers = new Set<ReturnType<typeof setTimeout>>()
let sleepResolvers: Array<() => void> = []

// Timeline constants (ms)
const TYPING_MS_PER_CHAR = 28
const TYPING_MAX_MS = 2000
const AGENT_MS_PER_CHAR = 9
const TOOL_MS_PER_CHAR = 8
const RESULT_MS_PER_CHAR = 7
const THINKING_MS = 600
const EXECUTING_MS = 650
const HOLD_AFTER_PLAYBACK_MS = 1800

const currentMessages = computed<TerminalMessage[]>(
  () => items.value[activeIndex.value]?.terminal?.messages ?? [],
)

const getMessageState = (mi: number): 'hidden' | 'animating' | 'revealed' => {
  if (reducedMotion.value || playbackComplete.value) return 'revealed'
  if (!isPlaying.value) return 'hidden'
  if (mi < revealedCount.value) return 'revealed'
  if (mi === revealedCount.value) return 'animating'
  return 'hidden'
}

// ── Timer utilities ─────────────────────────────────────────────────
const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    const resolveFn = () => {
      clearTimeout(id)
      activeTimers.delete(id)
      const idx = sleepResolvers.indexOf(resolveFn)
      if (idx >= 0) sleepResolvers.splice(idx, 1)
      resolve()
    }
    const id = setTimeout(() => {
      activeTimers.delete(id)
      const idx = sleepResolvers.indexOf(resolveFn)
      if (idx >= 0) sleepResolvers.splice(idx, 1)
      resolve()
    }, ms)
    activeTimers.add(id)
    sleepResolvers.push(resolveFn)
  })
}

const clearAllTimers = () => {
  for (const id of activeTimers) {
    clearTimeout(id)
  }
  activeTimers.clear()
  sleepResolvers = []
}

const scrollToBottom = async () => {
  await nextTick()
  const el = contentRef.value
  if (el) {
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }
}

// ── Playback driver ─────────────────────────────────────────────────
const resetPlayback = () => {
  playbackToken++
  hoverPaused.value = false
  // Force-resolve any pending sleeps so the async chain can bail out
  for (const resolve of [...sleepResolvers]) {
    resolve()
  }
  clearAllTimers()
  cancelAdvance()
  revealedCount.value = 0
  typingChars.value = 0
  typingRole.value = null
  thinkingActive.value = false
  executingActive.value = false
  isPlaying.value = false
  playbackComplete.value = false
}

const playConversation = async () => {
  const token = ++playbackToken
  const messages = currentMessages.value

  if (!messages.length || reducedMotion.value) {
    revealedCount.value = messages.length
    isPlaying.value = false
    playbackComplete.value = true
    scheduleAdvance()
    return
  }

  isPlaying.value = true
  playbackComplete.value = false

  for (let i = 0; i < messages.length; i++) {
    if (token !== playbackToken) return

    // Pause between messages — wait while hovered
    while (hoverPaused.value && token === playbackToken) {
      await sleep(50)
    }
    if (token !== playbackToken) return

    revealedCount.value = i
    typingChars.value = 0
    typingRole.value = null
    thinkingActive.value = false
    executingActive.value = false

    const msg = messages[i]

    if (msg.role === 'user') {
      typingRole.value = 'user'
      const totalChars = msg.text.length
      const totalMs = Math.min(totalChars * TYPING_MS_PER_CHAR, TYPING_MAX_MS)
      const msPerChar = totalChars > 0 ? totalMs / totalChars : 0

      for (let c = 0; c <= totalChars; c++) {
        if (token !== playbackToken) return
        typingChars.value = c
        if (c < totalChars) {
          await sleep(msPerChar)
          // Pause check between characters
          while (hoverPaused.value && token === playbackToken) {
            await sleep(50)
          }
        }
      }
      typingRole.value = null
      await scrollToBottom()
    } else if (msg.role === 'agent') {
      thinkingActive.value = true
      await sleep(THINKING_MS)
      if (token !== playbackToken) return
      thinkingActive.value = false

      // Type agent text character by character
      typingRole.value = 'agent'
      const totalChars = msg.text.length
      for (let c = 0; c <= totalChars; c++) {
        if (token !== playbackToken) return
        typingChars.value = c
        if (c < totalChars) {
          await sleep(AGENT_MS_PER_CHAR)
          while (hoverPaused.value && token === playbackToken) {
            await sleep(50)
          }
        }
      }
      typingRole.value = null
      await scrollToBottom()
    } else if (msg.role === 'tool') {
      executingActive.value = true
      await sleep(EXECUTING_MS)
      if (token !== playbackToken) return
      executingActive.value = false

      // Type tool detail character by character
      if (msg.detail) {
        typingRole.value = 'tool'
        const totalChars = msg.detail.length
        for (let c = 0; c <= totalChars; c++) {
          if (token !== playbackToken) return
          typingChars.value = c
          if (c < totalChars) {
            await sleep(TOOL_MS_PER_CHAR)
            while (hoverPaused.value && token === playbackToken) {
              await sleep(50)
            }
          }
        }
        typingRole.value = null
      }
      await scrollToBottom()
    } else if (msg.role === 'result') {
      await scrollToBottom()

      // Type result text character by character
      typingRole.value = 'result'
      const totalChars = msg.text.length
      for (let c = 0; c <= totalChars; c++) {
        if (token !== playbackToken) return
        typingChars.value = c
        if (c < totalChars) {
          await sleep(RESULT_MS_PER_CHAR)
          while (hoverPaused.value && token === playbackToken) {
            await sleep(50)
          }
        }
      }
      typingRole.value = null
    }

    if (token !== playbackToken) return
  }

  revealedCount.value = messages.length
  isPlaying.value = false
  playbackComplete.value = true
  scheduleAdvance()
}

// ── Rotation (waits for playback to finish) ─────────────────────────
const cancelAdvance = () => {
  if (advanceTimer !== null) {
    clearTimeout(advanceTimer)
    advanceTimer = null
  }
}

const scheduleAdvance = () => {
  cancelAdvance()
  if (!useTabs.value || items.value.length < 2) return
  if (hoverPaused.value) return
  advanceTimer = setTimeout(() => {
    advanceTimer = null
    const next = (activeIndex.value + 1) % items.value.length
    selectTab(next)
  }, HOLD_AFTER_PLAYBACK_MS)
}

const selectTab = (i: number) => {
  resetPlayback()
  activeIndex.value = i
  playConversation()
}

const handleMouseEnter = () => {
  if (useTabs.value) {
    hoverPaused.value = true
    cancelAdvance()
  }
}

const handleMouseLeave = () => {
  if (useTabs.value) {
    hoverPaused.value = false
    if (playbackComplete.value) {
      scheduleAdvance()
    }
    // If still playing, the while-loop in playConversation resumes naturally
  }
}

onMounted(() => {
  if (useTabs.value) {
    if (typeof window !== 'undefined') {
      const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
      reducedMotion.value = mql.matches
      const handler = (e: MediaQueryListEvent) => {
        reducedMotion.value = e.matches
      }
      mql.addEventListener('change', handler)
    }
    playConversation()
  }
})

onBeforeUnmount(() => {
  resetPlayback()
})
</script>

<template>
  <div
    class="product-showcase"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div v-if="header && (header.eyebrow || header.title || header.subtitle)" class="showcase-header container">
      <Reveal>
        <span v-if="header.eyebrow" class="showcase-eyebrow">{{ header.eyebrow }}</span>
        <h2 v-if="header.title" class="showcase-heading">{{ header.title }}</h2>
        <p v-if="header.subtitle" class="showcase-subtitle">{{ header.subtitle }}</p>
      </Reveal>
    </div>

    <!-- Tabbed layout: object-form showcase with terminal items -->
    <div v-if="useTabs" class="showcase-tabs container">
      <div class="showcase-tabs-grid">
        <div role="tablist" aria-label="Showcase cases" class="tab-list">
          <button
            v-for="(item, i) in items"
            :key="item.title"
            role="tab"
            :aria-selected="i === activeIndex"
            :aria-controls="`showcase-panel-${i}`"
            :id="`showcase-tab-${i}`"
            :class="['tab-item', { 'is-active': i === activeIndex }]"
            @click="selectTab(i)"
          >
            <span class="tab-dot" aria-hidden="true"></span>
            <span class="tab-content">
              <span class="tab-title">{{ item.title }}</span>
              <span class="tab-sample">{{ item.body }}</span>
            </span>
          </button>
        </div>
        <div
          :id="`showcase-panel-${activeIndex}`"
          role="tabpanel"
          :aria-labelledby="`showcase-tab-${activeIndex}`"
          aria-live="off"
          class="tab-panel"
        >
          <Transition name="panel-fade" mode="out-in">
            <div :key="activeIndex" class="terminal-panel">
              <div class="terminal-titlebar">
                <div class="terminal-dots">
                  <span class="dot red"></span>
                  <span class="dot yellow"></span>
                  <span class="dot green"></span>
                </div>
                <span class="terminal-title">{{ items[activeIndex].terminal?.title }}</span>
              </div>
              <div ref="contentRef" :class="['terminal-content', { 'is-paused': hoverPaused }]">
                <template v-for="(msg, mi) in currentMessages" :key="mi">
                  <!-- USER: typewriter effect -->
                  <div
                    v-if="msg.role === 'user' && getMessageState(mi) !== 'hidden'"
                    class="terminal-msg terminal-msg-user"
                  >
                    <span class="msg-prompt">›</span>
                    <span class="msg-text-wrap">
                      <span class="msg-text">{{
                        getMessageState(mi) === 'animating'
                          ? msg.text.slice(0, typingChars)
                          : msg.text
                      }}</span>
                      <span
                        v-if="getMessageState(mi) === 'animating' && typingRole === 'user'"
                        class="typing-cursor"
                        aria-hidden="true"
                      >▌</span>
                    </span>
                  </div>
                  <!-- AGENT: thinking dots → typewriter text -->
                  <div
                    v-else-if="msg.role === 'agent' && getMessageState(mi) !== 'hidden'"
                    class="terminal-msg terminal-msg-agent"
                  >
                    <span class="msg-marker-line">
                      <span class="msg-marker">✦</span>
                      <span
                        v-if="getMessageState(mi) === 'animating' && thinkingActive"
                        class="thinking-dots"
                        aria-hidden="true"
                      >
                        <span class="dot-pulse"></span>
                        <span class="dot-pulse"></span>
                        <span class="dot-pulse"></span>
                      </span>
                    </span>
                    <span
                      v-if="
                        getMessageState(mi) === 'revealed' ||
                        (getMessageState(mi) === 'animating' && !thinkingActive && typingRole !== 'agent')
                      "
                      class="msg-text"
                    >{{ msg.text }}</span>
                    <span
                      v-if="getMessageState(mi) === 'animating' && typingRole === 'agent'"
                      class="msg-text-wrap"
                    >
                      <span class="msg-text">{{ msg.text.slice(0, typingChars) }}</span>
                      <span class="typing-cursor" aria-hidden="true">▌</span>
                    </span>
                  </div>
                  <!-- TOOL: spinner → typewriter detail -->
                  <div
                    v-else-if="msg.role === 'tool' && getMessageState(mi) !== 'hidden'"
                    class="terminal-msg terminal-msg-tool"
                  >
                    <span class="tool-name-line">
                      <span class="tool-name">{{ msg.name }}</span>
                      <span
                        v-if="getMessageState(mi) === 'animating' && executingActive"
                        class="tool-spinner"
                        aria-hidden="true"
                      >
                        <span class="spinner-arc"></span>
                      </span>
                    </span>
                    <span
                      v-if="
                        msg.detail &&
                          (getMessageState(mi) === 'revealed' ||
                            (getMessageState(mi) === 'animating' && !executingActive && typingRole !== 'tool'))
                      "
                      class="tool-detail"
                    >{{ msg.detail }}</span>
                    <span
                      v-if="msg.detail && getMessageState(mi) === 'animating' && typingRole === 'tool'"
                      class="tool-detail-wrap"
                    >
                      <span class="tool-detail">{{ msg.detail.slice(0, typingChars) }}</span>
                      <span class="typing-cursor" aria-hidden="true">▌</span>
                    </span>
                  </div>
                  <!-- RESULT: typewriter effect -->
                  <div
                    v-else-if="msg.role === 'result' && getMessageState(mi) !== 'hidden'"
                    class="terminal-msg terminal-msg-result"
                  >
                    <pre
                      v-if="
                        getMessageState(mi) === 'revealed' ||
                        (getMessageState(mi) === 'animating' && typingRole !== 'result')
                      "
                      class="result-block"
                    >{{ msg.text }}</pre>
                    <div
                      v-if="getMessageState(mi) === 'animating' && typingRole === 'result'"
                      class="result-typing-wrap"
                    >
                      <pre class="result-block">{{ msg.text.slice(0, typingChars) }}</pre>
                      <span class="typing-cursor" aria-hidden="true">▌</span>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>

    <!-- Legacy alternating sections (array-form or object-form without terminals) -->
    <template v-else>
      <section
        v-for="(item, index) in items"
        :key="item.title"
        :class="['showcase-section', index % 2 === 0 ? 'bg-default' : 'bg-alt']"
      >
        <div :class="['container', 'showcase-grid', item.align === 'right' ? 'align-right' : 'align-left']">
          <Reveal class="showcase-visual-wrap">
            <div class="showcase-visual">
              <template v-if="item.visual === 'terminal' && item.terminal">
                <div class="terminal-panel">
                  <div class="terminal-titlebar">
                    <div class="terminal-dots">
                      <span class="dot red"></span>
                      <span class="dot yellow"></span>
                      <span class="dot green"></span>
                    </div>
                    <span class="terminal-title">{{ item.terminal.title }}</span>
                  </div>
                  <div class="terminal-content">
                    <template v-for="(msg, mi) in item.terminal.messages" :key="mi">
                      <div v-if="msg.role === 'user'" class="terminal-msg terminal-msg-user">
                        <span class="msg-prompt">›</span>
                        <span class="msg-text">{{ msg.text }}</span>
                      </div>
                      <div v-else-if="msg.role === 'agent'" class="terminal-msg terminal-msg-agent">
                        <span class="msg-marker">✦</span>
                        <span class="msg-text">{{ msg.text }}</span>
                      </div>
                      <div v-else-if="msg.role === 'tool'" class="terminal-msg terminal-msg-tool">
                        <span class="tool-name">{{ msg.name }}</span>
                        <span v-if="msg.detail" class="tool-detail">{{ msg.detail }}</span>
                      </div>
                      <div v-else-if="msg.role === 'result'" class="terminal-msg terminal-msg-result">
                        <pre class="result-block">{{ msg.text }}</pre>
                      </div>
                    </template>
                  </div>
                </div>
              </template>
              <template v-else>
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="showcase-image"
                  :loading="index === 0 ? 'eager' : 'lazy'"
                  :fetchpriority="index === 0 ? 'high' : undefined"
                />
              </template>
            </div>
          </Reveal>
          <Reveal :delay="140" class="showcase-content-wrap">
            <div class="showcase-content">
              <h2 class="showcase-title">{{ item.title }}</h2>
              <p class="showcase-body">{{ item.body }}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </template>
  </div>
</template>

<style scoped lang="scss">
.product-showcase {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.showcase-section {
  padding: 48px 0;

  @media (max-width: 768px) {
    padding: 32px 0;
  }
}

.bg-default {
  background-color: var(--vp-c-bg);
}

.bg-alt {
  background-color: var(--vp-c-bg-alt);
}

.container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;

  @media (min-width: 1440px) {
    max-width: 1320px;
    padding: 0 48px;
  }
}

.showcase-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

/* Image left, copy right */
.align-left {
  .showcase-visual-wrap {
    order: 1;
    @media (max-width: 1024px) {
      order: 1;
    }
  }
  .showcase-content-wrap {
    order: 2;
    @media (max-width: 1024px) {
      order: 2;
    }
  }
}

/* Image right, copy left */
.align-right {
  .showcase-visual-wrap {
    order: 2;
    @media (max-width: 1024px) {
      order: 1; /* On mobile, image is always first */
    }
  }
  .showcase-content-wrap {
    order: 1;
    @media (max-width: 1024px) {
      order: 2;
    }
  }
}

.showcase-visual-wrap {
  min-width: 0;
}

.showcase-content-wrap {
  min-width: 0;
}

.showcase-visual {
  width: 100%;
}

.showcase-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: var(--vp-shadow-3, 0 16px 48px rgba(0, 0, 0, 0.12));
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
}

.showcase-content {
  display: flex;
  flex-direction: column;
}

.showcase-title {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0 0 1.25rem;
  color: var(--vp-c-text-1);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
}

.showcase-body {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  margin: 0;
  max-width: 48ch;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.terminal-panel {
  width: 100%;
  background-color: #161618;
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.24);
}

.terminal-titlebar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  background-color: #1a1a1d;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.terminal-dots {
  display: flex;
  align-items: center;
  gap: 6px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  opacity: 0.7;

  &.red {
    background-color: #ff5f57;
  }

  &.yellow {
    background-color: #febc2e;
  }

  &.green {
    background-color: #28c840;
  }
}

.terminal-title {
  font-family: ui-monospace, 'SF Mono', 'Cascadia Code', 'Segoe UI Mono', monospace;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  flex: 1;
  text-align: center;
}

.terminal-content {
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 420px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
}

.terminal-msg {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.terminal-msg-user {
  align-items: flex-end;

  .msg-prompt {
    font-family: ui-monospace, 'SF Mono', 'Cascadia Code', 'Segoe UI Mono', monospace;
    font-size: 0.875rem;
    color: #f89b40;
    font-weight: 600;
  }

  .msg-text {
    font-family: ui-monospace, 'SF Mono', 'Cascadia Code', 'Segoe UI Mono', monospace;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.92);
  }
}

.terminal-msg-agent {
  align-items: flex-start;

  .msg-marker {
    font-size: 0.875rem;
    color: #f89b40;
  }

  .msg-text {
    font-size: 0.875rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
  }
}

.terminal-msg-tool {
  align-items: flex-start;

  .tool-name {
    font-family: ui-monospace, 'SF Mono', 'Cascadia Code', 'Segoe UI Mono', monospace;
    font-size: 0.8125rem;
    color: #f89b40;
    font-weight: 500;
  }

  .tool-detail {
    font-family: ui-monospace, 'SF Mono', 'Cascadia Code', 'Segoe UI Mono', monospace;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.45);
  }
}

.terminal-msg-result {
  align-items: stretch;
}

.result-block {
  font-family: ui-monospace, 'SF Mono', 'Cascadia Code', 'Segoe UI Mono', monospace;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.85);
  background-color: #1f1f22;
  border-left: 2px solid #f89b40;
  border-radius: 4px;
  padding: 10px 14px;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
}

/* Optional section header (object-form showcase) */
.showcase-header {
  padding-top: 72px;
  padding-bottom: 8px;
  text-align: center;

  @media (max-width: 768px) {
    padding-top: 48px;
  }
}

.showcase-eyebrow {
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--vp-c-brand-1);
  margin-bottom: 8px;
}

.showcase-heading {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
  margin: 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.375rem;
  }
}

.showcase-subtitle {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 12px auto 0;
  max-width: 56ch;
}

/* ============================================================
 * Tabbed layout (object-form showcase with terminal items)
 * ============================================================ */

.showcase-tabs {
  padding-top: 48px;
  padding-bottom: 64px;

  @media (max-width: 768px) {
    padding-top: 24px;
    padding-bottom: 40px;
  }
}

.showcase-tabs-grid {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 32px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 280px 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

.tab-list {
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: row;
    overflow-x: auto;
    gap: 8px;
    padding-bottom: 4px;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}

.tab-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 14px 16px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  color: var(--vp-c-text-1);
  transition:
    background-color 0.2s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.2s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background-color: var(--vp-c-bg-alt);
  }

  &:focus-visible {
    outline: 2px solid #f89b40;
    outline-offset: 2px;
  }

  &.is-active {
    background-color: var(--gf-c-bg-card, var(--vp-c-bg));
    border-color: var(--gf-c-border-subtle, var(--vp-c-divider));
    border-left: 3px solid #f89b40;
    padding-left: 14px; /* compensate for thicker left border */
  }

  @media (max-width: 768px) {
    flex-shrink: 0;
    width: auto;
    max-width: 220px;
    padding: 10px 14px;
    gap: 10px;

    &.is-active {
      padding-left: 12px;
    }
  }
}

.tab-dot {
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-top: 6px;
  background-color: transparent;
  border: 1.5px solid var(--vp-c-text-3, rgba(144, 144, 160, 0.4));
  transition:
    background-color 0.24s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.24s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.24s cubic-bezier(0.16, 1, 0.3, 1);

  .is-active & {
    background-color: #f89b40;
    border-color: #f89b40;
    transform: scale(1.15);
  }
}

.tab-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  flex: 1;
}

.tab-title {
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1.3;
  color: var(--vp-c-text-1);
}

.tab-sample {
  font-family: ui-monospace, 'SF Mono', 'Cascadia Code', 'Segoe UI Mono', monospace;
  font-size: 0.75rem;
  line-height: 1.4;
  color: var(--vp-c-text-2);
  opacity: 0.75;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.tab-panel {
  min-width: 0;
}

/* Panel transition — opacity + translateY only, exponential ease-out */
.panel-fade-enter-active,
.panel-fade-leave-active {
  transition:
    opacity 0.24s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.24s cubic-bezier(0.16, 1, 0.3, 1);
}

.panel-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.panel-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* ── Live playback animation styles ─────────────────────────────── */

.msg-text-wrap {
  display: inline-flex;
  align-items: baseline;
}

.tool-detail-wrap {
  display: inline-flex;
  align-items: baseline;
}

.result-typing-wrap {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.typing-cursor {
  display: inline-block;
  color: #f89b40;
  font-weight: 400;
  margin-left: 1px;
  animation: cursor-blink 1s step-end infinite;
  will-change: opacity;
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.msg-marker-line {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.thinking-dots {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  margin-left: 2px;
}

.dot-pulse {
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #f89b40;
  animation: dot-pulse 1.2s ease-in-out infinite;
  will-change: opacity, transform;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }
}

@keyframes dot-pulse {
  0%, 80%, 100% {
    opacity: 0.25;
    transform: scale(0.75);
  }
  40% {
    opacity: 1;
    transform: scale(1);
  }
}

.tool-name-line {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.tool-spinner {
  display: inline-flex;
  align-items: center;
}

.spinner-arc {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1.5px solid rgba(248, 155, 64, 0.2);
  border-top-color: #f89b40;
  border-radius: 50%;
  animation: spinner-rotate 0.75s linear infinite;
  will-change: transform;
}

@keyframes spinner-rotate {
  to {
    transform: rotate(360deg);
  }
}

.msg-reveal-in {
  animation: msg-reveal-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes msg-reveal-in {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.result-block.msg-reveal-in {
  animation: result-reveal-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes result-reveal-in {
  from {
    opacity: 0;
    transform: translateY(8px);
    border-left-color: rgba(248, 155, 64, 0.3);
  }
  50% {
    border-left-color: #f89b40;
  }
  to {
    opacity: 1;
    transform: translateY(0);
    border-left-color: #f89b40;
  }
}

/* Freeze CSS animations when hover-paused */
.terminal-content.is-paused {
  .typing-cursor,
  .dot-pulse,
  .spinner-arc {
    animation-play-state: paused;
  }
}

@media (prefers-reduced-motion: reduce) {
  .panel-fade-enter-active,
  .panel-fade-leave-active {
    transition: opacity 0.16s ease;
  }
  .panel-fade-enter-from,
  .panel-fade-leave-to {
    transform: none;
  }

  .typing-cursor,
  .dot-pulse,
  .spinner-arc,
  .msg-reveal-in,
  .result-block.msg-reveal-in {
    animation: none;
  }

  .msg-reveal-in,
  .result-block.msg-reveal-in {
    opacity: 1;
    transform: none;
  }
}
</style>
