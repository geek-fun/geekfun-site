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
  pageEyebrow: string
  pageTitle: string
  pageDescription: string
  categories: CategoryContent[]
  products: DownloadProduct[]
  installCommandLabel: string
  platformsTitle: string
  platformsDescription: string
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
    binaries: [
      { name: 'Installer (.exe)', tail: 'x64-setup.exe' },
      { name: 'Installer (.msi)', tail: 'x64_en-US.msi' }
    ]
  },
  {
    platform: 'Linux',
    binaries: [
      { name: 'Debian/Ubuntu (.deb)', tail: 'amd64.deb' },
      { name: 'Red Hat/Fedora (.rpm)', tail: 'x86_64.rpm' },
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
    pageEyebrow: isZh ? '下载中心' : 'Downloads',
    pageTitle: isZh ? '获取我们的产品' : 'Get our products',
    pageDescription: isZh
      ? '桌面客户端、命令行工具与开发库，按需取用。'
      : 'Desktop apps, CLI tools, and libraries — pick what you need.',
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
    platformsTitle: isZh ? '下载桌面应用' : 'Download Desktop App',
    platformsDescription: isZh ? '选择平台，或查看所有历史版本。' : 'Choose your platform, or browse all versions.',
    openReleaseLabel: isZh ? '查看所有版本' : 'All Versions',
    downloadsLoading: isZh ? '获取最新版本…' : 'Fetching latest release…',
    downloadsError: isZh ? '获取失败，请直接访问 Releases 页面。' : 'Failed to load. Visit the Releases page directly.'
  }
})

const categories = computed(() => content.value.categories)
const activeCategory_ = computed(() => categories.value.find(c => c.id === activeCategory.value) ?? categories.value[0])
const filteredProducts = computed(() => content.value.products.filter(p => p.category === activeCategory.value))

const getLatestLinks = async (): Promise<ReleaseAsset[]> => {
  const response = await fetch('https://api.github.com/repos/geek-fun/dockit/releases/latest')
  const data = await response.json()
  if (!response.ok || !Array.isArray(data.assets)) throw new Error('Unable to fetch releases')
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
  if (typeof window !== 'undefined') window.open(href, '_blank', 'noopener,noreferrer')
}

const downloadBinary = (binaryTail: string) => {
  const matched = releaseAssets.value.find(item => item.name.endsWith(binaryTail))
  if (matched) openExternal(matched.url)
}

onMounted(() => { void loadReleaseAssets() })
</script>

<template>
  <div class="download-page">

    <!-- Page Header -->
    <section class="dl-hero">
      <div class="container">
        <div class="section-header section-header--start">
          <span class="section-label">{{ content.pageEyebrow }}</span>
        </div>
        <h1 class="dl-hero__title">{{ content.pageTitle }}</h1>
        <p class="dl-hero__description">{{ content.pageDescription }}</p>
      </div>
    </section>

    <!-- Category Tabs -->
    <div class="dl-tabs-bar">
      <div class="container">
        <nav class="dl-tabs" role="tablist" :aria-label="content.pageEyebrow">
          <button
            v-for="cat in categories"
            :key="cat.id"
            type="button"
            class="dl-tab"
            :class="{ 'dl-tab--active': activeCategory === cat.id }"
            role="tab"
            :aria-selected="activeCategory === cat.id"
            @click="activeCategory = cat.id"
          >
            {{ cat.label }}
          </button>
        </nav>
      </div>
    </div>

    <!-- Category Intro -->
    <section class="dl-category-intro">
      <div class="container">
        <p class="dl-category-intro__eyebrow">{{ activeCategory_.eyebrow }}</p>
        <h2 class="dl-category-intro__title">{{ activeCategory_.title }}</h2>
        <p class="dl-category-intro__description">{{ activeCategory_.description }}</p>
      </div>
    </section>

    <!-- Products -->
    <section class="dl-products">
      <div class="container">
        <div class="dl-products__list">
          <article
            v-for="product in filteredProducts"
            :key="product.name"
            class="dl-product"
          >
            <!-- Product identity -->
            <div class="dl-product__identity">
              <div class="dl-product__logo-wrap">
                <img :src="product.logo" :alt="`${product.name} logo`" class="dl-product__logo" width="28" height="28" />
              </div>
              <div>
                <h3 class="dl-product__name">{{ product.name }}</h3>
                <p class="dl-product__description">{{ product.description }}</p>
              </div>
            </div>

            <!-- Install command -->
            <div v-if="product.installCommand" class="dl-install">
              <span class="dl-install__label">{{ product.installLabel ?? content.installCommandLabel }}</span>
              <code class="dl-install__code">{{ product.installCommand }}</code>
            </div>

            <!-- Platform downloads (DocKit) -->
            <div v-if="product.platformGroups" class="dl-platforms">
              <div class="dl-platforms__header">
                <div>
                  <h4 class="dl-platforms__title">{{ content.platformsTitle }}</h4>
                  <p class="dl-platforms__sub">{{ content.platformsDescription }}</p>
                </div>
                <a
                  :href="product.releaseHref"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="gf-btn gf-btn-secondary"
                >{{ content.openReleaseLabel }}</a>
              </div>

              <p v-if="releasesLoading" class="dl-platforms__status">{{ content.downloadsLoading }}</p>
              <p v-else-if="releasesError" class="dl-platforms__status dl-platforms__status--error">{{ content.downloadsError }}</p>

              <div v-else class="dl-platforms__grid">
                <div class="dl-platforms__col">
                  <div
                    v-for="group in product.platformGroups.slice(0, 2)"
                    :key="group.platform"
                    class="dl-platform-group"
                  >
                    <h5 class="dl-platform-group__name">{{ group.platform }}</h5>
                    <div class="dl-platform-group__buttons">
                      <button
                        v-for="binary in group.binaries"
                        :key="binary.tail"
                        type="button"
                        class="gf-btn gf-btn-secondary dl-binary-btn"
                        @click="downloadBinary(binary.tail)"
                      >
                        <span>{{ binary.name }}</span>
                        <span class="dl-binary-btn__icon" aria-hidden="true">↓</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="dl-platforms__col">
                  <div
                    v-for="group in product.platformGroups.slice(2)"
                    :key="group.platform"
                    class="dl-platform-group"
                  >
                    <h5 class="dl-platform-group__name">{{ group.platform }}</h5>
                    <div class="dl-platform-group__buttons">
                      <button
                        v-for="binary in group.binaries"
                        :key="binary.tail"
                        type="button"
                        class="gf-btn gf-btn-secondary dl-binary-btn"
                        @click="downloadBinary(binary.tail)"
                      >
                        <span>{{ binary.name }}</span>
                        <span class="dl-binary-btn__icon" aria-hidden="true">↓</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="dl-product__actions">
              <a
                v-for="action in product.actions"
                :key="`${product.name}-${action.label}`"
                :href="action.href"
                :target="action.external ? '_blank' : undefined"
                :rel="action.external ? 'noopener noreferrer' : undefined"
                class="gf-btn"
                :class="action.kind === 'primary' ? 'gf-btn-primary' : 'gf-btn-secondary'"
              >{{ action.label }}</a>
            </div>
          </article>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped lang="scss">
/* ─── Layout ─────────────────────────────────────────────────────────────── */

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

/* ─── Section header (matches HomePage) ─────────────────────────────────── */

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
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--vp-c-brand-1);
  display: inline-flex;
  align-items: center;
  gap: 1rem;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 32px;
    height: 1px;
    opacity: 0.35;
    background: var(--vp-c-brand-soft);
  }
}

/* ─── Hero ───────────────────────────────────────────────────────────────── */

.dl-hero {
  padding: 80px 0 48px;

  @media (max-width: 768px) {
    padding: 56px 0 32px;
  }

  .section-header {
    margin-bottom: 24px;
  }
}

.dl-hero__title {
  margin: 0 0 var(--space-lg);
  font-size: clamp(2.25rem, 4vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: var(--vp-c-text-1);
}

.dl-hero__description {
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  max-width: 560px;
}

/* ─── Category Tabs ──────────────────────────────────────────────────────── */

.dl-tabs-bar {
  border-bottom: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  margin-bottom: 0;
}

.dl-tabs {
  display: flex;
  gap: 0;
}

.dl-tab {
  position: relative;
  padding: 14px 24px;
  background: transparent;
  border: none;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;

  &:hover {
    color: var(--vp-c-text-1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--vp-c-brand-1);
    opacity: 0;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.dl-tab--active {
  color: var(--vp-c-text-1);
  font-weight: 600;

  &::after {
    opacity: 1;
  }
}

/* ─── Category Intro ─────────────────────────────────────────────────────── */

.dl-category-intro {
  padding: 40px 0 32px;
  background-color: var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
}

.dl-category-intro__eyebrow {
  margin: 0 0 8px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
}

.dl-category-intro__title {
  margin: 0 0 12px;
  font-size: 1.375rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

.dl-category-intro__description {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  max-width: 600px;
}

/* ─── Products list ──────────────────────────────────────────────────────── */

.dl-products {
  padding: 48px 0 96px;

  @media (max-width: 768px) {
    padding: 32px 0 64px;
  }
}

.dl-products__list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* ─── Product card (matches value-card vocabulary from HomePage) ─────────── */

.dl-product {
  background-color: var(--gf-c-bg-card, var(--vp-c-bg));
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  border-radius: 12px;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  transition: border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: var(--gf-c-border-hover, var(--vp-c-brand-1));
    box-shadow: 0 8px 24px var(--gf-c-glow), var(--vp-shadow-1);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
}

/* ─── Product identity ───────────────────────────────────────────────────── */

.dl-product__identity {
  display: flex;
  align-items: flex-start;
  gap: var(--space-xl);

  @media (max-width: 640px) {
    gap: var(--space-lg);
  }
}

.dl-product__logo-wrap {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vp-c-bg);
  border-radius: 10px;
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-border));
}

.dl-product__logo {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.dl-product__name {
  margin: 0 0 6px;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

.dl-product__description {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

/* ─── Install block ──────────────────────────────────────────────────────── */

.dl-install {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.dl-install__label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
}

.dl-install__code {
  display: block;
  padding: 0.875rem 1rem;
  border-radius: 8px;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  color: var(--vp-c-text-1);
  font-size: 0.875rem;
  line-height: 1.6;
  overflow-x: auto;
}

/* ─── Platform downloads ─────────────────────────────────────────────────── */

.dl-platforms {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.dl-platforms__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-lg);

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
}

.dl-platforms__title {
  margin: 0 0 4px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.dl-platforms__sub {
  margin: 0;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.dl-platforms__status {
  margin: 0;
  font-size: 0.9375rem;
  color: var(--vp-c-text-2);
}

.dl-platforms__status--error {
  color: var(--vp-c-danger-1, var(--vp-c-text-1));
}

.dl-platforms__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-xl);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

.dl-platforms__col {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.dl-platform-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.dl-platform-group__name {
  margin: 0 0 8px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
}

.dl-platform-group__buttons {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.dl-binary-btn {
  justify-content: space-between;
  width: 100%;
  border-radius: 8px !important;
  min-height: 40px;
  padding: 0.625rem 1rem !important;
  font-size: 0.875rem !important;
}

.dl-binary-btn__icon {
  font-size: 0.8125rem;
  opacity: 0.6;
}

/* ─── Product actions ────────────────────────────────────────────────────── */

.dl-product__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

/* ─── Reduced motion ─────────────────────────────────────────────────────── */

@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
</style>
