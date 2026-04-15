<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useData } from 'vitepress'

type DownloadCategoryId = 'database-clients' | 'serverless-infrastructure' | 'developer-tools'

type BinaryAsset = {
  name: string
  tail: string
}

type PlatformGroup = {
  platform: string
  binaries: BinaryAsset[]
}

type ProductAction = {
  label: string
  href: string
  external?: boolean
  kind: 'primary' | 'secondary'
}

type DownloadProduct = {
  name: string
  logo: string
  description: string
  category: DownloadCategoryId
  actions: ProductAction[]
  installCommand?: string
  installLabel?: string
  releaseHref?: string
  platformGroups?: PlatformGroup[]
}

type CategoryContent = {
  id: DownloadCategoryId
  label: string
  eyebrow: string
  title: string
  description: string
}

type DownloadContent = {
  pageLabel: string
  pageDescription: string
  tabsLabel: string
  categories: CategoryContent[]
  products: DownloadProduct[]
  installCommandLabel: string
  docKitPlatformsTitle: string
  docKitPlatformsDescription: string
  openReleaseLabel: string
  downloadsLoading: string
  downloadsError: string
}

type ReleaseAsset = {
  name: string
  url: string
}

const availablePlatform: PlatformGroup[] = [
  {
    platform: 'macOS',
    binaries: [{ name: 'Universal (Intel + M1/M2)', tail: 'universal.dmg' }]
  },
  {
    platform: 'Windows',
    binaries: [{ name: 'Installer (.exe)', tail: 'x64-setup.exe' }]
  },
  {
    platform: 'Linux',
    binaries: [
      { name: 'Debian/Ubuntu (.deb)', tail: 'amd64.deb' },
      { name: 'Portable (.AppImage)', tail: 'amd64.AppImage' }
    ]
  }
]

const { lang } = useData()

const activeCategory = ref<DownloadCategoryId>('database-clients')
const releaseAssets = ref<ReleaseAsset[]>([])
const releasesLoading = ref(false)
const releasesError = ref(false)

const content = computed<DownloadContent>(() => {
  const isZh = lang.value === 'zh'

  return {
    pageLabel: isZh ? '下载中心' : 'Downloads',
    pageDescription: isZh
      ? '获取产品安装包、命令行工具与桌面客户端。'
      : 'Get installers, CLI tools, and desktop apps for our products.',
    tabsLabel: isZh ? '产品分类' : 'Product Categories',
    categories: [
      {
        id: 'database-clients',
        label: isZh ? '数据库客户端' : 'Database Clients',
        eyebrow: isZh ? '桌面应用' : 'Desktop Apps',
        title: isZh ? '可视化管理与查询数据库' : 'Manage and query databases visually',
        description: isZh
          ? '支持 Elasticsearch、DynamoDB、PostgreSQL 等多种数据库。'
          : 'Works with Elasticsearch, DynamoDB, PostgreSQL, and more.'
      },
      {
        id: 'serverless-infrastructure',
        label: isZh ? 'Serverless 工具' : 'Serverless Tools',
        eyebrow: isZh ? '云部署' : 'Cloud Deploy',
        title: isZh ? '构建与部署 Serverless 应用' : 'Build and deploy serverless applications',
        description: isZh
          ? '适配主流云平台，简化部署流程。'
          : 'Adapts to major cloud platforms for streamlined deployment.'
      },
      {
        id: 'developer-tools',
        label: isZh ? '开发工具' : 'Dev Tools',
        eyebrow: isZh ? '库与测试' : 'Libraries & Testing',
        title: isZh ? '提升本地开发与测试效率' : 'Speed up local development and testing',
        description: isZh
          ? '提供安装命令与集成所需的核心链接。'
          : 'Install commands and essential integration links.'
      }
    ],
    products: [
      {
        name: 'DocKit',
        logo: '/dockit.png',
        description: isZh
          ? 'NoSQL 数据库桌面客户端，支持 Elasticsearch、OpenSearch、DynamoDB。'
          : 'Desktop client for NoSQL databases: Elasticsearch, OpenSearch, DynamoDB.',
        category: 'database-clients',
        actions: [
          { label: isZh ? '了解更多' : 'Learn More', href: isZh ? '/zh/products/dockit/' : '/products/dockit/', kind: 'primary' },
          { label: 'GitHub', href: 'https://github.com/geek-fun/dockit', external: true, kind: 'secondary' }
        ],
        releaseHref: 'https://github.com/geek-fun/dockit/releases',
        platformGroups: availablePlatform
      },
      {
        name: 'SqlKit',
        logo: '/sqlkit.png',
        description: isZh
          ? 'SQL 数据库桌面客户端，支持 PostgreSQL、MySQL、SQL Server、SQLite。'
          : 'Desktop client for SQL databases: PostgreSQL, MySQL, SQL Server, SQLite.',
        category: 'database-clients',
        actions: [{ label: 'GitHub', href: 'https://github.com/geek-fun/sqlkit', external: true, kind: 'primary' }]
      },
      {
        name: 'ServerlessInsight',
        logo: '/serverlessinsight.png',
        description: isZh
          ? '多云 Serverless 应用部署平台。'
          : 'Multi-cloud serverless deployment platform.',
        category: 'serverless-infrastructure',
        installCommand: 'npm install -g @geek-fun/serverlessinsight',
        installLabel: isZh ? '安装 CLI' : 'Install CLI',
        actions: [
          { label: isZh ? '文档' : 'Docs', href: 'https://serverlessinsight.geekfun.club', external: true, kind: 'primary' },
          { label: 'GitHub', href: 'https://github.com/geek-fun/serverlessinsight', external: true, kind: 'secondary' }
        ]
      },
      {
        name: 'serverless-adapter',
        logo: '/serverless-adapter.svg',
        description: isZh
          ? 'Express/Koa 应用转 Serverless 的适配器。'
          : 'Adapter to run Express/Koa apps on serverless.',
        category: 'serverless-infrastructure',
        installCommand: 'npm i @geek-fun/serverless-adapter',
        installLabel: isZh ? '安装' : 'Install',
        actions: [
          { label: 'npm', href: 'https://www.npmjs.org/package/@geek-fun/serverless-adapter', external: true, kind: 'primary' },
          { label: 'GitHub', href: 'https://github.com/geek-fun/serverless-adapter', external: true, kind: 'secondary' }
        ]
      },
      {
        name: 'jest-search',
        logo: '/jest-search.png',
        description: isZh
          ? 'Elasticsearch/OpenSearch 本地集成测试工具。'
          : 'Local integration testing for Elasticsearch/OpenSearch.',
        category: 'developer-tools',
        installCommand: 'npm install --save-dev @geek-fun/jest-search',
        installLabel: isZh ? '安装依赖' : 'Install',
        actions: [
          { label: 'npm', href: 'https://www.npmjs.com/package/@geek-fun/jest-search', external: true, kind: 'primary' },
          { label: 'GitHub', href: 'https://github.com/geek-fun/jest-search', external: true, kind: 'secondary' }
        ]
      }
    ],
    installCommandLabel: isZh ? '安装命令' : 'Install',
    docKitPlatformsTitle: isZh ? '下载桌面应用' : 'Download Desktop App',
    docKitPlatformsDescription: isZh
      ? '选择你的操作系统，或查看所有历史版本。'
      : 'Choose your operating system, or browse all versions.',
    openReleaseLabel: isZh ? '查看所有版本' : 'All Versions',
    downloadsLoading: isZh ? '获取最新版本…' : 'Fetching latest release…',
    downloadsError: isZh ? '获取失败，请直接访问 Releases 页面。' : 'Failed to load. Visit the Releases page directly.'
  }
})

const categories = computed(() => content.value.categories)
const activeCategoryContent = computed(() => categories.value.find((item) => item.id === activeCategory.value) ?? categories.value[0])
const filteredProducts = computed(() => content.value.products.filter((product) => product.category === activeCategory.value))

const getLatestLinks = async (): Promise<ReleaseAsset[]> => {
  const response = await fetch('https://api.github.com/repos/geek-fun/dockit/releases/latest')
  const data = await response.json()

  if (!response.ok || !Array.isArray(data.assets)) {
    throw new Error('Unable to fetch releases')
  }

  return data.assets.map((item: { name: string; browser_download_url: string }) => ({
    name: item.name,
    url: item.browser_download_url
  }))
}

const loadReleaseAssets = async () => {
  releasesLoading.value = true
  releasesError.value = false

  try {
    releaseAssets.value = await getLatestLinks()
  } catch {
    releasesError.value = true
  } finally {
    releasesLoading.value = false
  }
}

const openExternal = (href: string) => {
  if (typeof window !== 'undefined') {
    window.open(href, '_blank', 'noopener,noreferrer')
  }
}

const downloadBinary = (binaryTail: string) => {
  const matchedAsset = releaseAssets.value.find((item) => item.name.endsWith(binaryTail))

  if (matchedAsset) {
    openExternal(matchedAsset.url)
  }
}

onMounted(() => {
  void loadReleaseAssets()
})
</script>

<template>
  <div class="download-page">
    <section class="download-browser">
      <div class="container">
        <div class="download-browser__intro">
          <div class="section-header section-header--start">
            <span class="section-label">{{ content.pageLabel }}</span>
          </div>
          <p class="download-browser__intro-copy">{{ content.pageDescription }}</p>
        </div>

        <div class="download-tabs-shell">
          <div class="download-tabs" role="tablist" :aria-label="content.tabsLabel">
            <button
              v-for="category in categories"
              :key="category.id"
              type="button"
              class="download-tab"
              :class="{ 'download-tab--active': activeCategory === category.id }"
              role="tab"
              :aria-selected="activeCategory === category.id"
              @click="activeCategory = category.id"
            >
              <span class="download-tab__eyebrow">{{ category.eyebrow }}</span>
              <span class="download-tab__label">{{ category.label }}</span>
            </button>
          </div>
        </div>

        <div class="download-panel">
          <div class="download-panel__header">
            <div>
              <p class="download-panel__eyebrow">{{ activeCategoryContent.eyebrow }}</p>
              <h2 class="download-panel__title">{{ activeCategoryContent.title }}</h2>
            </div>
            <p class="download-panel__description">{{ activeCategoryContent.description }}</p>
          </div>

          <div class="download-grid">
            <article v-for="product in filteredProducts" :key="product.name" class="download-card">
              <div class="download-card__header">
                <div class="download-card__logo-shell">
                  <img :src="product.logo" :alt="`${product.name} logo`" class="download-card__logo" width="30" height="30" />
                </div>
                <h3 class="download-card__title">{{ product.name }}</h3>
              </div>

              <p class="download-card__description">{{ product.description }}</p>

              <div v-if="product.installCommand" class="download-install-block">
                <span class="download-install-block__label">{{ product.installLabel ?? content.installCommandLabel }}</span>
                <code class="download-install-block__code">{{ product.installCommand }}</code>
              </div>

              <div v-if="product.platformGroups" class="download-platforms">
                <div class="download-platforms__header">
                  <div class="download-platforms__copy">
                    <h4>{{ content.docKitPlatformsTitle }}</h4>
                    <p>{{ content.docKitPlatformsDescription }}</p>
                  </div>

                  <a
                    :href="product.releaseHref"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="gf-btn gf-btn-secondary download-platforms__release-button"
                  >
                    {{ content.openReleaseLabel }}
                  </a>
                </div>

                <p v-if="releasesLoading" class="download-platforms__meta">{{ content.downloadsLoading }}</p>
                <div v-else-if="releasesError" class="download-platforms__fallback">
                  <p class="download-platforms__meta download-platforms__meta--error">{{ content.downloadsError }}</p>
                </div>

                <div v-else class="download-platforms__grid">
                  <div v-for="group in product.platformGroups" :key="group.platform" class="download-platforms__group">
                    <h5>{{ group.platform }}</h5>
                    <div class="download-platforms__buttons">
                      <button
                        v-for="binary in group.binaries"
                        :key="binary.tail"
                        type="button"
                        class="download-platform-button"
                        @click="downloadBinary(binary.tail)"
                      >
                        <span>{{ binary.name }}</span>
                        <span aria-hidden="true">↓</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="download-card__actions">
                <a
                  v-for="action in product.actions"
                  :key="`${product.name}-${action.label}`"
                  :href="action.href"
                  :target="action.external ? '_blank' : undefined"
                  :rel="action.external ? 'noopener noreferrer' : undefined"
                  class="gf-btn"
                  :class="action.kind === 'primary' ? 'gf-btn-primary' : 'gf-btn-secondary'"
                >
                  {{ action.label }}
                </a>

                <a
                  v-if="product.releaseHref && !product.platformGroups"
                  :href="product.releaseHref"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="download-card__link download-card__link--muted"
                >
                  {{ content.openReleaseLabel }}
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.download-page {
  width: 100%;
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

  @media (min-width: 1920px) {
    max-width: 1536px;
    padding: 0 64px;
  }
}

.section-header {
  display: flex;
  justify-content: center;
  margin-bottom: 0;
}

.section-header--start {
  justify-content: flex-start;

  .section-label::before {
    display: none;
  }

  @media (max-width: 1024px) {
    justify-content: center;

    .section-label::before {
      display: block;
    }
  }
}

.section-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--vp-c-brand-1);
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 24px;
    height: 1px;
    opacity: 0.35;
    background: var(--vp-c-brand-soft);
  }
}

.download-browser {
  padding: 80px 0 120px;

  @media (min-width: 1440px) {
    padding: 100px 0 140px;
  }
}

.download-browser__intro {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 420px);
  gap: 24px;
  align-items: end;
  margin-bottom: 20px;
}

.download-browser__intro-copy {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.download-tabs-shell {
  margin-bottom: 24px;
  padding: 8px;
  border-radius: 28px;
  background: color-mix(in srgb, var(--vp-c-bg-alt) 88%, transparent 12%);
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.download-tabs {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.download-tab {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  gap: 4px;
  padding: 14px 18px;
  border: 1px solid transparent;
  border-radius: 20px;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  text-align: left;
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), background 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: var(--vp-c-text-1);
    border-color: var(--gf-c-border-subtle, var(--vp-c-divider));
    background: rgba(255, 255, 255, 0.018);
  }
}

.download-tab--active {
  color: var(--vp-c-text-1);
  background: var(--gf-c-bg-card, var(--vp-c-bg));
  border-color: var(--gf-c-border-hover, var(--vp-c-brand-1));
  box-shadow: var(--vp-shadow-1);

  &::after {
    content: '';
    position: absolute;
    left: 18px;
    right: 18px;
    bottom: 8px;
    height: 1px;
    background: var(--gf-gradient-accent-line);
    opacity: 0.9;
  }
}

.download-tab__label {
  font-size: 1rem;
  font-weight: 700;
}

.download-tab__eyebrow {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: inherit;
  opacity: 0.72;
}

.download-panel {
  position: relative;
  padding: 32px;
  border-radius: 32px;
  background: var(--gf-c-bg-card, var(--vp-c-bg));
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  box-shadow: var(--vp-shadow-2);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0 0 auto;
    height: 1px;
    background: var(--gf-gradient-panel-accent);
    pointer-events: none;
  }
}

.download-panel__header {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 420px);
  gap: 32px;
  align-items: end;
  margin-bottom: 32px;
}

.download-panel__eyebrow {
  margin: 0 0 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
}

.download-panel__title {
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.download-panel__description {
  margin: 0;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.download-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.download-card {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 26px;
  border-radius: 26px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0)), var(--vp-c-bg);
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.28s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
    border-color: var(--gf-c-border-hover, var(--vp-c-brand-1));
    box-shadow: var(--vp-shadow-1);
  }
}

.download-card__header {
  display: flex;
  align-items: center;
  gap: 16px;
}

.download-card__logo-shell {
  width: 52px;
  height: 52px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: var(--gf-c-bg-card, var(--vp-c-bg));
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  box-shadow: var(--vp-shadow-1);
}

.download-card__logo {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.download-card__title {
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.3;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.download-card__description,
.download-platforms__copy p,
.download-platforms__meta {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.download-install-block,
.download-platforms {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.download-install-block__label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
  opacity: 0.7;
}

.download-install-block__code {
  display: block;
  padding: 0.875rem 1rem;
  border-radius: 0.875rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  color: var(--vp-c-text-1);
  font-size: 0.8125rem;
  line-height: 1.6;
  overflow-x: auto;
}

.download-platforms__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
}

.download-platforms__copy h4 {
  margin: 0 0 0.25rem;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.download-platforms__release-button {
  flex-shrink: 0;
}

.download-platforms__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
}

.download-platforms__group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h5 {
    margin: 0 0 0.25rem;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--vp-c-text-2);
    opacity: 0.7;
  }
}

.download-platforms__buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.download-platform-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.625rem;
  width: 100%;
  min-height: 44px;
  padding: 0.75rem 1rem;
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  border-radius: 1rem;
  background: var(--gf-c-bg-card, var(--vp-c-bg));
  color: var(--vp-c-text-1);
  font-size: 0.8125rem;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: var(--gf-c-border-hover, var(--vp-c-brand-1));
    box-shadow: var(--vp-shadow-1);
  }
}

.download-platforms__meta--error {
  color: var(--vp-c-text-1);
}

.download-platforms__fallback {
  padding-top: 4px;
}

.download-card__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
}

.download-card__link {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.25s ease, opacity 0.25s ease;

  &:hover {
    color: var(--vp-c-brand-1);
  }
}

.download-card__link--muted {
  opacity: 0.72;
}

@media (max-width: 1024px) {
  .download-browser__intro,
  .download-panel__header,
  .download-grid {
    grid-template-columns: 1fr;
  }

  .download-platforms__header {
    flex-direction: column;
    align-items: stretch;
  }
}

@media (max-width: 768px) {
  .download-tabs,
  .download-platforms__grid {
    grid-template-columns: 1fr;
  }

  .download-panel,
  .download-card {
    padding: 22px;
    border-radius: 24px;
  }
}
</style>
