<script setup lang="ts">
import { computed, nextTick, onUnmounted, reactive, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { copyText } from '../clipboard'
import DownloadPackagePicker from './DownloadPackagePicker.vue'
import { downloadCopy } from './download-copy'
import {
  appInstallers,
  appProductPage,
  appRepository,
  desktopApps,
  installerPlatforms,
  installTools,
  packageLabels,
  type DesktopApp,
  type DownloadLanguage,
  type InstallTool,
  type PackageType,
} from './download-data'

const { lang } = useData()
const language = computed<DownloadLanguage>(() =>
  Object.hasOwn(downloadCopy, lang.value) ? lang.value as DownloadLanguage : 'en',
)
const copy = computed(() => downloadCopy[language.value])
const apps = desktopApps.map((app) => ({
  app,
  repository: appRepository(app),
  installers: appInstallers(app),
}))
type Platform = typeof installerPlatforms[number]['id']
const defaultPackages: Record<Platform, PackageType> = { macos: 'dmg', windows: 'exe', linux: 'deb' }
const selectedPackages = reactive<Record<DesktopApp['id'], Record<Platform, PackageType>>>({
  dockit: { ...defaultPackages },
  sqlkit: { ...defaultPackages },
})
const categories = [
  { key: 'desktop', id: 'database-clients' },
  { key: 'serverless', id: 'serverless-tools' },
  { key: 'developer', id: 'developer-tools' },
] as const
type Category = typeof categories[number]['key']
const activeCategory = ref<Category>('desktop')
const tabs = ref<HTMLElement | null>(null)
const hasSwitchedCategory = ref(false)
const toolSections = categories.slice(1).map(({ key, id }) => ({
  key,
  id,
  tools: installTools.filter((tool) => tool.section === key),
}))
const packageNotes = computed(() => ({
  deb: 'Debian / Ubuntu',
  rpm: 'Fedora / RHEL',
  appImage: copy.value.portable,
}))

const selectCategory = async (category: Category): Promise<void> => {
  if (category === activeCategory.value) return

  const indicator = '[aria-selected="true"] .download-tab-indicator'
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const start = reduceMotion ? undefined : tabs.value?.querySelector(indicator)?.getBoundingClientRect()
  activeCategory.value = category
  hasSwitchedCategory.value = true
  if (!start?.width) return

  await nextTick()
  if (activeCategory.value !== category) return
  const selected = tabs.value?.querySelector<HTMLElement>(indicator)
  if (!selected) return

  selected.getAnimations().forEach((animation) => animation.cancel())
  const end = selected.getBoundingClientRect()
  if (!end.width || Math.abs(start.top - end.top) > 1) return

  selected.animate([
    { transform: `translateX(${start.left - end.left}px) scaleX(${start.width / end.width})` },
    { transform: 'none' },
  ], { duration: 220, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' })
}

const moveTab = (event: KeyboardEvent): void => {
  const current = categories.findIndex(({ key }) => key === activeCategory.value)
  let next: number

  switch (event.key) {
    case 'ArrowLeft':
      next = (current + categories.length - 1) % categories.length
      break
    case 'ArrowRight':
      next = (current + 1) % categories.length
      break
    case 'Home':
      next = 0
      break
    case 'End':
      next = categories.length - 1
      break
    default:
      return
  }

  event.preventDefault()
  void selectCategory(categories[next].key)
  tabs.value?.querySelector<HTMLButtonElement>(`#${categories[next].id}-tab`)?.focus()
}

const copyFeedback = ref<{ tool: InstallTool['id']; copied: boolean } | null>(null)
let currentCopy: symbol | null = null

const copyCommand = async (tool: InstallTool): Promise<void> => {
  const request = Symbol()
  currentCopy = request
  copyFeedback.value = null
  const copied = await copyText(tool.command)
  if (currentCopy === request) copyFeedback.value = { tool: tool.id, copied }
}

onUnmounted(() => {
  currentCopy = null
})
</script>

<template>
  <main class="download-page" :class="{ 'download-page--switched': hasSwitchedCategory }">
    <div class="download-ambience" aria-hidden="true"></div>

    <header class="download-heading">
      <h1>{{ copy.title }}</h1>
      <p>{{ copy.description }}</p>
    </header>

    <div ref="tabs" class="download-tabs" role="tablist" :aria-label="copy.categories" @keydown="moveTab">
      <button
        v-for="category in categories"
        :id="category.id + '-tab'"
        :key="category.id"
        type="button"
        role="tab"
        :aria-controls="category.id"
        :aria-selected="activeCategory === category.key"
        :tabindex="activeCategory === category.key ? 0 : -1"
        @click="selectCategory(category.key)"
      >
        {{ copy[category.key] }}
        <span class="download-tab-indicator" aria-hidden="true"></span>
      </button>
    </div>

    <section
      v-show="activeCategory === 'desktop'"
      id="database-clients"
      role="tabpanel"
      aria-labelledby="database-clients-tab"
    >
      <h2 class="download-sr-only">{{ copy.desktop }}</h2>
      <div class="download-apps">
        <article v-for="{ app, repository, installers } in apps" :id="app.id" :key="app.id" class="download-app">
          <header class="download-identity">
            <img :src="withBase(app.logo)" width="44" height="44" alt="">
            <div>
              <h3>{{ app.name }}</h3>
              <p>{{ copy.appType[app.id] }}</p>
            </div>
            <span class="download-version">v{{ app.version }}</span>
          </header>
          <p class="download-description">
            {{ app.id === 'dockit' ? 'MongoDB, Elasticsearch, OpenSearch, DynamoDB, EasySearch' : copy.sqlKitDescription }}
          </p>

          <table class="download-platforms" :aria-label="app.name">
            <colgroup>
              <col>
              <col class="download-package-column">
              <col class="download-action-column">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">{{ copy.platform }}</th>
                <th scope="col">{{ copy.packageType }}</th>
                <th scope="col"><span class="download-sr-only">{{ copy.download }}</span></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="platform in installerPlatforms" :key="platform.id" class="download-platform" :data-platform="platform.id">
                <th scope="row">
                  <div class="download-platform-name">
                    <img
                      class="download-platform-logo"
                      :src="withBase('/platform/platform-' + platform.id + '.svg')"
                      width="34"
                      height="34"
                      alt=""
                    >
                    <div>
                      <strong>{{ platform.name }}</strong>
                      <span>{{ platform.architecture || copy.appleArchitecture }}</span>
                    </div>
                  </div>
                </th>
                <td class="download-package-cell">
                  <DownloadPackagePicker
                    v-if="platform.packages.length > 1"
                    :id="`${app.id}-${platform.id}-packages`"
                    v-model="selectedPackages[app.id][platform.id]"
                    :label="`${app.name} · ${platform.name} · ${copy.packageType}`"
                    :options="platform.packages"
                    :notes="packageNotes"
                  />
                  <span v-else class="download-package-fixed">{{ packageLabels[platform.packages[0]] }}</span>
                </td>
                <td class="download-action-cell">
                  <a
                    class="download-binary"
                    :href="installers[selectedPackages[app.id][platform.id]]"
                    :aria-label="`${copy.download} ${app.name} · ${platform.name} · ${packageLabels[selectedPackages[app.id][platform.id]]}`"
                    :title="copy.download"
                  >
                    <span class="download-binary-icon" aria-hidden="true"></span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <footer class="download-links">
            <a :href="withBase(appProductPage(app, language))">{{ copy.learnMore }}</a>
            <a :href="repository" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a :href="repository + '/releases'" target="_blank" rel="noopener noreferrer">{{ copy.allVersions }}</a>
          </footer>
        </article>
      </div>
    </section>

    <section
      v-for="section in toolSections"
      v-show="activeCategory === section.key"
      :id="section.id"
      :key="section.id"
      role="tabpanel"
      :aria-labelledby="section.id + '-tab'"
    >
      <h2 class="download-sr-only">{{ copy[section.key] }}</h2>
      <div class="download-tools">
        <article v-for="tool in section.tools" :key="tool.id" class="download-tool">
          <header class="download-tool-identity">
            <img :src="withBase(tool.logo)" width="36" height="36" alt="">
            <div>
              <h3>{{ tool.name }}</h3>
              <p>{{ copy.toolDescriptions[tool.id] }}</p>
            </div>
          </header>
          <div class="download-command">
            <code>{{ tool.command }}</code>
            <button
              type="button"
              :aria-label="`${copy.copy} · ${tool.name}`"
              :data-copied="copyFeedback?.tool === tool.id && copyFeedback.copied"
              @click="copyCommand(tool)"
            >
              {{ copyFeedback?.tool === tool.id && copyFeedback.copied ? copy.copied : copy.copy }}
            </button>
          </div>
          <p v-if="copyFeedback?.tool === tool.id && !copyFeedback.copied" class="download-copy-error">
            {{ copy.copyFailed }}
          </p>
          <footer class="download-links">
            <a :href="tool.resource.href" target="_blank" rel="noopener noreferrer">
              {{ tool.resource.label === 'docs' ? copy.docs : 'npm' }}
            </a>
            <a :href="tool.repository" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a
              v-if="tool.id === 'dataStudioAgent'"
              :href="withBase(language === 'zh' ? '/zh/products/data-studio-agent/' : '/products/data-studio-agent/')"
            >{{ copy.product }}</a>
          </footer>
        </article>
      </div>
    </section>
    <p class="download-sr-only" role="status">
      {{ copyFeedback ? (copyFeedback.copied ? copy.copied : copy.copyFailed) : '' }}
    </p>
  </main>
</template>

<style scoped lang="scss">
.download-page {
  --download-focus: #914810;
  --download-line: color-mix(in srgb, var(--vp-c-text-1) 16%, transparent);
  --download-hover: color-mix(in srgb, var(--vp-c-text-1) 8%, transparent);
  --download-logo-bg: #f3f1ee;
  --download-gutter: clamp(16px, 4vw, 48px);
  --download-motion-quick: 140ms;
  --download-motion-standard: 220ms;
  --download-motion-ease: cubic-bezier(0.16, 1, 0.3, 1);

  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-columns:
    [full-start] minmax(var(--download-gutter), 1fr)
    [content-start] minmax(0, 1144px)
    [content-end] minmax(var(--download-gutter), 1fr) [full-end];
  padding-block: clamp(28px, 4.5vw, 56px) clamp(50px, 7vw, 88px);

  > :is(.download-heading, .download-tabs, [role='tabpanel']) {
    grid-column: content-start / content-end;
  }

  > [role='tabpanel'] {
    grid-row: 3;
  }

  :is(h1, h2, h3) {
    color: var(--vp-c-text-1);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.025em;
  }

  h1 {
    font-size: clamp(2.25rem, 5vw, 3.5rem);
    letter-spacing: -0.04em;
  }

  :is(a, button):focus-visible {
    outline: 2px solid var(--download-focus);
    outline-offset: 3px;
  }

  :is(section, article[id]) {
    scroll-margin-top: calc(var(--vp-nav-height) + 20px);
  }
}

:global(.dark .download-page) {
  --download-focus: #ffb16a;
  --download-logo-bg: #eeebe7;
}

.download-heading {
  grid-row: 1;

  p {
    margin-top: 8px;
    color: var(--vp-c-text-2);
    line-height: 1.55;
  }
}

.download-tabs {
  grid-row: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 0 22px;
  margin-block: 16px 22px;
  border-bottom: 1px solid var(--download-line);

  button {
    position: relative;
    min-height: 44px;
    padding: 6px 0;
    color: var(--vp-c-text-2);
    text-align: start;
    font-size: 0.9375rem;
    font-weight: 600;
    transition: color var(--download-motion-quick) var(--download-motion-ease);

    &:hover,
    &[aria-selected='true'] {
      color: var(--vp-c-text-1);
    }

    &[aria-selected='true'] .download-tab-indicator {
      opacity: 1;
    }
  }
}

.download-tab-indicator {
  position: absolute;
  inset: auto 0 0;
  border-bottom: 2px solid currentColor;
  opacity: 0;
  pointer-events: none;
  transform-origin: left;
}

.download-ambience {
  position: relative;
  grid-column: full-start / full-end;
  grid-row: 3;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  mask-image: linear-gradient(to bottom, transparent, #000 3%, #000 74%, transparent);

  &::before {
    position: absolute;
    inset: -3%;
    background-image:
      radial-gradient(ellipse 63% 82% at 12% 22%, var(--gf-glass-blob-amber-faint), transparent 80%),
      radial-gradient(ellipse 65% 83% at 88% 45%, var(--gf-glass-blob-purple-faint), transparent 80%);
    animation: download-glass-drift 4.4s cubic-bezier(0.22, 1, 0.36, 1) both;
    content: '';
  }
}

@keyframes download-glass-drift {
  from {
    transform: translate3d(-2%, 2%, 0);
    opacity: 0.76;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .download-page {
    --download-motion-quick: 0s;
    --download-motion-standard: 0s;
  }

  .download-ambience::before {
    animation: none;
  }
}

.download-apps,
.download-tools {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(14px, 2.5vw, 24px);
  margin-top: 14px;
}

.download-app,
.download-tool {
  position: relative;
  padding: clamp(14px, 2.6vw, 26px);
  background-color: var(--gf-glass-bg);
  -webkit-backdrop-filter: blur(var(--gf-glass-blur)) saturate(var(--gf-glass-saturate));
  backdrop-filter: blur(var(--gf-glass-blur)) saturate(var(--gf-glass-saturate));
  border: 1px solid var(--download-line);
  border-radius: 10px;
  transition: border-color var(--download-motion-standard) var(--download-motion-ease);

  &:hover {
    border-color: var(--gf-c-border-hover);
  }

  &:focus-within {
    z-index: 1;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .download-page--switched :is(.download-app, .download-tool) {
    animation: download-panel-enter var(--download-motion-standard) var(--download-motion-ease);
  }
}

@keyframes download-panel-enter {
  from {
    opacity: 0.76;
    transform: translateY(5px);
  }
}

.download-app {
  display: flex;
  flex-direction: column;
}

.download-identity,
.download-tool-identity {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 11px;

  img {
    display: block;
    object-fit: contain;
    border-radius: 8px;
  }

  p {
    color: var(--vp-c-text-2);
    font-size: 0.875rem;
    line-height: 1.4;
    margin-top: 3px;
  }
}

.download-identity h3 {
  font-size: 1.5rem;
}

.download-version {
  align-self: start;
  color: var(--vp-c-text-2);
  font-size: 0.8125rem;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.download-description {
  color: var(--vp-c-text-2);
  font-size: 0.9375rem;
  line-height: 1.5;
  margin: 12px 0 16px;
  min-height: 3em;
}

.download-platforms {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

  th,
  td {
    text-align: start;
    vertical-align: middle;
  }

  thead th {
    padding-bottom: 8px;
    border-bottom: 1px solid var(--download-line);
    color: var(--vp-c-text-2);
    font-size: 0.8125rem;
    font-weight: 600;
  }

  tbody :is(th, td) {
    padding-block: 7px;
  }
}

.download-package-column {
  width: 6.375rem;
}

.download-action-column {
  width: 3.5rem;
}

.download-platform-logo {
  width: 34px;
  height: 34px;
  padding: 7px;
  object-fit: contain;
  background: var(--download-logo-bg);
  border-radius: 7px;
}

.download-platform-name {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 9px;
  padding-inline-end: 6px;
  line-height: 1.35;

  strong,
  span {
    display: block;
  }

  strong {
    font-size: 0.9375rem;
    font-weight: 650;
  }

  span {
    color: var(--vp-c-text-2);
    font-size: 0.8125rem;
    font-weight: 400;
  }
}

.download-platform .download-package-cell {
  padding-inline-end: 9px;
}

.download-package-fixed {
  color: var(--vp-c-text-1);
  font-size: 0.875rem;
  font-weight: 600;
}

.download-platform .download-action-cell {
  text-align: end;
}

.download-binary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  color: var(--vp-c-text-1);
  border-radius: 6px;
  transition: background-color var(--download-motion-quick) var(--download-motion-ease);

  &:focus-visible {
    background-color: var(--download-hover);
  }

  @media (hover: hover) {
    &:hover {
      background-color: var(--download-hover);
    }
  }

  &:active {
    background-color: var(--download-line);
  }
}

.download-binary-icon {
  position: relative;
  width: 16px;
  height: 16px;
  border-bottom: 1.5px solid currentColor;

  &::before,
  &::after {
    position: absolute;
    left: 50%;
    content: '';
  }

  &::before {
    top: 0;
    height: 10px;
    border-left: 1.5px solid currentColor;
    transform: translateX(-50%);
  }

  &::after {
    top: 5px;
    width: 7px;
    height: 7px;
    border: solid currentColor;
    border-width: 0 1.5px 1.5px 0;
    transform: translateX(-50%) rotate(45deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .download-binary-icon {
    transition: transform var(--download-motion-quick) var(--download-motion-ease);
  }

  .download-binary:focus-visible .download-binary-icon {
    transform: translateY(2px);
  }

  @media (hover: hover) {
    .download-binary:hover .download-binary-icon {
      transform: translateY(2px);
    }
  }

  .download-binary:active .download-binary-icon {
    transform: translateY(2px) scale(0.9);
  }
}

.download-links a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  font-weight: 550;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.18em;
  }
}

.download-links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 18px;
  margin-top: auto;
  border-top: 1px solid var(--download-line);
}

.download-tool {
  min-width: 0;
}

.download-tool-identity {
  grid-template-columns: auto minmax(0, 1fr);

  h3 {
    font-size: 1.0625rem;
    overflow-wrap: anywhere;
  }
}

.download-command {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin: 12px 0 8px;
  padding-inline: 10px 4px;
  background: var(--download-hover);
  border-radius: 8px;

  code {
    min-width: 0;
    color: var(--vp-c-text-1);
    font: 0.8125rem/1.6 var(--vp-font-family-mono);
    overflow-wrap: anywhere;
  }

  button {
    flex: 0 0 auto;
    min-height: 44px;
    padding-inline: 8px;
    color: var(--vp-c-text-1);
    font-size: 0.8125rem;
    font-weight: 650;
    border-radius: 6px;
    transition: background-color var(--download-motion-quick) var(--download-motion-ease);

    @media (hover: hover) {
      &:hover {
        background-color: var(--download-hover);
      }
    }

    &:active,
    &[data-copied='true'] {
      background-color: var(--download-line);
    }
  }
}

.download-copy-error {
  margin-bottom: 8px;
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
}

.download-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

@media (max-width: 860px) {
  .download-apps {
    grid-template-columns: minmax(0, 1fr);
  }

  .download-description {
    min-height: 0;
  }
}

@media (max-width: 760px) {
  .download-tools {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 440px) {
  .download-package-column {
    width: 5.25rem;
  }

  .download-platform-name {
    gap: 6px;
  }

  .download-platform-logo {
    width: 28px;
    height: 28px;
    padding: 5px;
  }

  .download-platform .download-package-cell {
    padding-inline-end: 6px;
  }
}
</style>
