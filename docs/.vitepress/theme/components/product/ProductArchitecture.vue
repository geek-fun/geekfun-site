<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Reveal from '../Reveal.vue'

type ArchitectureData = {
  eyebrow?: string
  title?: string
  subtitle?: string
  queries?: string[]
}

defineProps<{ architecture: ArchitectureData }>()

const container = ref<HTMLElement | null>(null)
const inView = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  const el = container.value
  if (!el) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          inView.value = true
        } else {
          // Reset so the pulses replay on re-entry
          inView.value = false
        }
      })
    },
    { threshold: 0.2 }
  )
  observer.observe(el)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <section class="architecture-section">
    <div class="container">
      <Reveal>
        <div class="architecture-header">
          <span v-if="architecture.eyebrow" class="architecture-eyebrow">{{ architecture.eyebrow }}</span>
          <h2 v-if="architecture.title" class="architecture-title">{{ architecture.title }}</h2>
          <p v-if="architecture.subtitle" class="architecture-subtitle">{{ architecture.subtitle }}</p>
        </div>
      </Reveal>

      <Reveal :delay="120">
        <div
          ref="container"
          class="arch-flow"
          :class="{ 'in-view': inView }"
          role="img"
          aria-label="Data Studio Agent architecture: AI coding agent to MCP server to DocKit and SqlKit bridges to your databases"
        >
          <!-- ══ Stage 1: AI Coding Agent (text only) ══ -->
          <div class="arch-node arch-agent">
            <div class="arch-agent-title">AI Coding Agent</div>
            <div class="arch-agent-tools">Claude Code · Cursor · Windsurf · OpenCode · Codex</div>
          </div>

          <!-- connector + pulse lane (spine) -->
          <div class="arch-connector" aria-hidden="true">
            <span class="arch-pulse arch-pulse--spine"></span>
            <span class="arch-label">MCP stdio protocol</span>
          </div>

          <!-- ══ Stage 2: MCP server (npm package) — centered ══ -->
          <div class="arch-node arch-mcp">
            <img class="arch-icon arch-icon--mcp" src="/data-studio-agent.svg" alt="Data Studio Agent" loading="lazy" />
            <div class="arch-node-title">@geek-fun/data-studio-mcp</div>
            <div class="arch-node-sub">npm package · thin routing layer</div>
          </div>

          <!-- split connector + branch pulse lanes -->
          <div class="arch-connector arch-connector--split" aria-hidden="true">
            <span class="arch-pulse arch-pulse--left"></span>
            <span class="arch-pulse arch-pulse--right"></span>
            <span class="arch-label">HTTP · 127.0.0.1 only</span>
          </div>

          <!-- ══ Stage 3: bridges (two-up) ══ -->
          <div class="arch-bridges">
            <div class="arch-node arch-bridge">
              <div class="arch-bridge-head">
                <img class="arch-icon arch-icon--product" src="/dockit.png" alt="DocKit" loading="lazy" />
                <div class="arch-bridge-copy">
                  <div class="arch-node-title">dockit</div>
                  <div class="arch-node-sub">NoSQL bridge · :9120</div>
                </div>
              </div>
              <div class="arch-bridge-dbs">Elasticsearch · MongoDB · DynamoDB · OpenSearch</div>
            </div>

            <div class="arch-node arch-bridge">
              <div class="arch-bridge-head">
                <img class="arch-icon arch-icon--product" src="/sqlkit.png" alt="SqlKit" loading="lazy" />
                <div class="arch-bridge-copy">
                  <div class="arch-node-title">sqlkit</div>
                  <div class="arch-node-sub">SQL bridge · :9121</div>
                </div>
              </div>
              <div class="arch-bridge-dbs">PostgreSQL · MySQL · SQL Server · SQLite</div>
            </div>
          </div>

          <!-- final connector + pulse lanes -->
          <div class="arch-connector arch-connector--final" aria-hidden="true">
            <span class="arch-pulse arch-pulse--left"></span>
            <span class="arch-pulse arch-pulse--right"></span>
            <span class="arch-label">drivers · SSH tunnels (inside the apps)</span>
          </div>

          <!-- ══ Stage 4: databases ══ -->
          <div class="arch-node arch-databases">
            <div class="arch-icon-strip">
              <span class="arch-icon-tile">
                <img class="arch-icon arch-icon--db" src="/db-mongodb.svg" alt="MongoDB" loading="lazy" />
                <span class="arch-icon-name">MongoDB</span>
              </span>
              <span class="arch-icon-tile">
                <img class="arch-icon arch-icon--db" src="/db-postgresql.png" alt="PostgreSQL" loading="lazy" />
                <span class="arch-icon-name">PostgreSQL</span>
              </span>
              <span class="arch-icon-tile">
                <img class="arch-icon arch-icon--db" src="/db-mysql.png" alt="MySQL" loading="lazy" />
                <span class="arch-icon-name">MySQL</span>
              </span>
              <span class="arch-icon-tile">
                <img class="arch-icon arch-icon--db" src="/db-sqlite.png" alt="SQLite" loading="lazy" />
                <span class="arch-icon-name">SQLite</span>
              </span>
            </div>
            <div class="arch-databases-copy">
              <div class="arch-node-title">Your databases — credentials never leave the desktop apps</div>
              <div class="arch-node-sub">Read-safe by default · Full Access surfaces destructive ops as Ask</div>
            </div>
          </div>

          <!-- ══ Query examples ══ -->
          <Reveal v-if="architecture.queries && architecture.queries.length" :delay="200" class="arch-queries-wrap">
            <div class="arch-queries">
              <span v-for="q in architecture.queries" :key="q" class="arch-query">{{ q }}</span>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;

  @media (min-width: 1440px) {
    max-width: 1080px;
    padding: 0 48px;
  }
}

.architecture-section {
  padding: 48px 0;
  background-color: var(--vp-c-bg);
  border-top: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  border-bottom: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));

  @media (max-width: 768px) {
    padding: 32px 0;
  }
}

.architecture-header {
  text-align: center;
  margin-bottom: 24px;
}

.architecture-eyebrow {
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--vp-c-brand-1);
  margin-bottom: 6px;
}

.architecture-title {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
  margin: 0 0 6px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.375rem;
  }
}

.architecture-subtitle {
  font-size: 0.9375rem;
  line-height: 1.55;
  color: var(--vp-c-text-2);
  margin: 0 auto;
  max-width: 62ch;
}

/* ══ Flow layout: a clean vertical pipeline, no outer container frame ══ */
.arch-flow {
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

/* ══ Nodes ══ */
.arch-node {
  background-color: var(--gf-c-bg-card, var(--vp-c-bg));
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  border-radius: 14px;
  padding: 14px 20px;
  transition: border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  .in-view & {
    animation: node-glow 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
  }
}

.arch-node-title {
  font-size: 1.0625rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
  line-height: 1.35;
}

.arch-node-sub {
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

/* ── AI Coding Agent: title on top, supported tools as plain text below ── */
.arch-agent {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
}

.arch-agent-tools {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

/* ── MCP server: fully centered column ── */
.arch-mcp {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;

  .arch-icon--mcp {
    margin-bottom: 2px;
  }
}

/* ── Bridges: icon + name + sub on one line, dbs on their own line ── */
.arch-bridge {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.arch-bridge-head {
  display: flex;
  align-items: center;
  gap: 12px;
}

.arch-bridge-copy {
  min-width: 0;
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;

  .arch-node-title,
  .arch-node-sub {
    display: inline;
  }

  .arch-node-sub {
    color: var(--vp-c-text-2);
  }
}

.arch-bridge-dbs {
  font-size: 0.8125rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  border-top: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  padding-top: 10px;
  white-space: nowrap;
  overflow-x: auto;

  /* On narrow layouts let the database list wrap instead of widening the card */
  @media (max-width: 640px) {
    white-space: normal;
    overflow-x: visible;
  }
}

/* ── Databases: icon row with names, then copy ── */
.arch-databases {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
}

.arch-databases-copy {
  max-width: 100%;
  white-space: nowrap;

  @media (max-width: 640px) {
    white-space: normal;
  }
}

/* ── Query examples strip under the flow ── */
.arch-queries-wrap {
  margin-top: 16px;
}

.arch-queries {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.arch-query {
  font-family: var(--vp-font-family-mono);
  font-size: 0.8125rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  border-radius: 999px;
  padding: 4px 12px;
  white-space: nowrap;
}

/* ══ Icon normalization: every icon is a fixed-size, rounded, bordered
   tile so wildly different source logos render uniformly ══ */
.arch-icon {
  flex-shrink: 0;
  object-fit: contain;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  border-radius: 10px;
  padding: 4px;
}

/* All product icons share one size — the MCP package logo is the same
   tile as DocKit / SqlKit so nothing reads visually larger */
.arch-icon--mcp,
.arch-icon--product {
  width: 40px;
  height: 40px;
}

.arch-icon--db {
  width: 28px;
  height: 28px;
}

/* Icon tile = icon + name stacked */
.arch-icon-tile {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.arch-icon-name {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}

.arch-icon-strip {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

/* ══ Connectors with traveling pulses ══ */
.arch-connector {
  position: relative;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.arch-connector::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  transform: translateX(-50%);
  background: linear-gradient(
    to bottom,
    var(--gf-c-border-subtle, var(--vp-c-divider)),
    var(--gf-c-border-hover, var(--vp-c-brand-1))
  );
}

.arch-connector--split::before {
  background: linear-gradient(
    to bottom,
    var(--gf-c-border-subtle, var(--vp-c-divider)),
    var(--gf-c-border-hover, var(--vp-c-brand-1))
  );
}

.arch-connector--split::after,
.arch-connector--final::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 12.5%;
  right: 12.5%;
  height: 2px;
  transform: translateY(-50%);
  background: linear-gradient(
    to right,
    var(--gf-c-border-subtle, var(--vp-c-divider)),
    var(--gf-c-border-hover, var(--vp-c-brand-1))
  );
}

.arch-label {
  position: relative;
  z-index: 1;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg);
  padding: 2px 10px;
  border-radius: 999px;
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
}

/* ══ Pulses (the query in flight) — CSS offset-path, slow & small ══
   Each pulse is absolutely positioned at the flow center (left:50%).
   - spine: travels straight down (the MCP → split segment)
   - branch: travels an L — out to the bridge lane, then down — so the
     query visibly fans out toward each product card */
.arch-pulse {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  box-shadow: 0 0 10px var(--vp-c-brand-soft, rgba(248, 155, 64, 0.4));
  opacity: 0;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
}

.arch-pulse--spine {
  offset-path: path('M 0 0 L 0 30');
}

/* branch lanes sit at the bridge centers: ±25% of the flow width.
   The path runs horizontally out from the split point, then down. */
.arch-connector--split .arch-pulse--left,
.arch-connector--final .arch-pulse--left {
  offset-path: path('M 0 0 L -170 0 L -170 30');
}

.arch-connector--split .arch-pulse--right,
.arch-connector--final .arch-pulse--right {
  offset-path: path('M 0 0 L 170 0 L 170 30');
}

.in-view .arch-pulse--spine {
  animation:
    pulse-travel 2.8s linear infinite,
    pulse-fade 2.8s linear infinite;
}

.in-view .arch-connector--split .arch-pulse--left,
.in-view .arch-connector--split .arch-pulse--right,
.in-view .arch-connector--final .arch-pulse--left,
.in-view .arch-connector--final .arch-pulse--right {
  animation:
    pulse-travel 2.8s 1.5s linear infinite,
    pulse-fade 2.8s 1.5s linear infinite;
}

/* ══ Bridges two-up ══ */
.arch-bridges {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

.arch-databases .arch-node-inner {
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;

  .arch-node-copy {
    width: 100%;
  }
}

/* ══ Keyframes ══ */
@keyframes pulse-travel {
  from {
    offset-distance: 0%;
  }
  to {
    offset-distance: 100%;
  }
}

@keyframes pulse-fade {
  0%,
  8% {
    opacity: 0;
  }
  18%,
  82% {
    opacity: 0.9;
  }
  100% {
    opacity: 0;
  }
}

@keyframes node-glow {
  0%,
  55% {
    filter: drop-shadow(0 0 0 rgba(248, 155, 64, 0));
  }
  100% {
    filter: drop-shadow(0 0 14px rgba(248, 155, 64, 0.3));
  }
}

/* ══ Reduced motion: static, no pulses ══ */
@media (prefers-reduced-motion: reduce) {
  .arch-pulse,
  .in-view .arch-pulse {
    animation: none;
    opacity: 0;
  }
  .in-view .arch-node {
    animation: none;
  }
}

/* ══ Browsers without offset-path: hide travel dots, keep the flow ══ */
@supports not (offset-path: path('M 0 0')) {
  .arch-pulse,
  .in-view .arch-pulse {
    opacity: 0 !important;
    animation: none !important;
  }
}
</style>
