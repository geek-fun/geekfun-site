<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'

import ValueIcon, { type ValueIconName } from './ValueIcon.vue'

const { lang } = useData()

type ProductData = {
  name: string
  logo: string
  preview: string
  description: string
  url: string
}

type ProductStripItem = {
  name: string
  logo: string
  url: string
}

type FeatureData = {
  title: string
  icon: ValueIconName
  details: string
}

const content = computed(() => {
  const isZh = lang.value === 'zh'
  return {
    announcement: {
      text: isZh ? 'DocKit v1.0 正式发布 — 首个稳定版本现已上线，支持 DynamoDB、Elasticsearch 和 OpenSearch。' : 'DocKit v1.0 is here — the first stable release. AI-native NoSQL for DynamoDB, Elasticsearch, and OpenSearch.',
      linkText: isZh ? '查看详情 →' : 'Read the announcement →',
      link: isZh ? '/zh/news/dockit-v1-0-release' : '/news/dockit-v1-0-release'
    },
    hero: {
      name: isZh ? '极客范' : 'GEEKFUN',
      subtitle: isZh ? '开源俱乐部' : 'Open-Source Studio',
      tagline: isZh ? '致力于打造高效可持续的专业软件生态。' : 'Crafted for developers who ship. Sustained for the long term.',
      primaryAction: isZh ? '产品' : 'Products',
      primaryLink: isZh ? '/zh/download' : '/download',
      secondaryAction: 'GitHub',
      secondaryLink: 'https://github.com/geek-fun'
    },
    sections: {
      products: isZh ? '产品' : 'Products',
      values: isZh ? '价值观' : 'Values',
      team: isZh ? '团队成员' : 'Team Members',
      whatWeMake: isZh ? '我们的产品' : 'What we make'
    },
    productStrip: [
      {
        name: 'DocKit',
        logo: '/dockit.png',
        url: isZh ? '/zh/products/dockit/' : '/products/dockit/'
      },
      {
        name: 'SqlKit',
        logo: '/sqlkit.png',
        url: isZh ? '/zh/products/sqlkit/' : '/products/sqlkit/'
      },
      {
        name: 'ServerlessInsight',
        logo: '/serverlessinsight.png',
        url: 'https://serverlessinsight.com/'
      },
      {
        name: 'serverless-adapter',
        logo: '/serverless-adapter.svg',
        url: 'https://github.com/geek-fun/serverless-adapter'
      },
      {
        name: 'jest-search',
        logo: '/jest-search.png',
        url: 'https://github.com/geek-fun/jest-search'
      }
    ] as ProductStripItem[],
    products: [
      {
        name: 'DocKit',
        logo: '/dockit.png',
        preview: '/dockit-client-ui.png',
        description: isZh 
          ? '开源 NoSQL 桌面客户端，支持 Elasticsearch、OpenSearch、DynamoDB 等数据库，致力于打造 AI Native 的新一代数据库管理工具。'
          : 'Open-source desktop GUI client for Elasticsearch, OpenSearch, and DynamoDB — query, manage, and migrate your NoSQL databases from a single native app.',
        url: isZh ? '/zh/products/dockit/' : '/products/dockit/'
      },
      {
        name: 'SqlKit',
        logo: '/sqlkit.png',
        preview: '/sqlkit-client-ui.png',
        description: isZh
          ? '开源 SQL 桌面客户端，支持 PostgreSQL、MySQL、SQL Server、SQLite 等主流数据库，提供更现代、更高效的数据开发体验。'
          : 'Open-source SQL desktop client for PostgreSQL, MySQL, SQL Server, SQLite, and other mainstream databases, designed for modern developer workflows.',
        url: isZh ? '/zh/products/sqlkit/' : '/products/sqlkit/'
      },
      {
        name: 'ServerlessInsight',
        logo: '/serverlessinsight.png',
        preview: '/serverlessinsight-preview.png',
        description: isZh
          ? '开源、无厂商锁定的 Serverless 基础设施与代码框架，支持阿里云、腾讯云、火山引擎等平台，打造一站式应用开发能力。'
          : 'Open-source and vendor-neutral serverless infrastructure platform for Alibaba Cloud, Tencent Cloud, and Volcengine, with end-to-end application delivery capabilities.',
        url: 'https://serverlessinsight.com/'
      },
      {
        name: 'serverless-adapter',
        logo: '/serverless-adapter.svg',
        preview: '/serverless-adapter-preview.svg',
        description: isZh
          ? '面向 Serverless 场景的 Web 框架适配器，支持 Express、Koa 运行在阿里云函数计算、腾讯云 SCF 和火山引擎 veFaaS 等平台。'
          : 'Serverless adapter for Express and Koa across Alibaba Cloud Function Compute, Tencent SCF, and Volcengine veFaaS with automatic provider detection.',
        url: 'https://github.com/geek-fun/serverless-adapter'
      },
      {
        name: 'jest-search',
        logo: '/jest-search.png',
        preview: '/jest-search-preview.png',
        description: isZh
          ? '面向搜索场景测试的 Jest 工具，可在本地快速拉起 Elasticsearch、OpenSearch 和 ZincSearch，提升集成测试效率与稳定性。'
          : 'Jest tool for search integration testing that quickly boots local Elasticsearch, OpenSearch, and ZincSearch environments.',
        url: 'https://github.com/geek-fun/jest-search'
      }
    ] as ProductData[],
    features: [
      {
        title: isZh ? '价值驱动' : 'Driven by Impact',
        icon: 'impact',
        details: isZh
          ? '我们构建能为开发者和团队带来直接价值的软件，每一款工具都经过精心设计，解决真实问题，提升工作效率。'
          : 'We build software that delivers immediate, tangible value to developers and teams. Every tool is meticulously designed to solve real problems and elevate your workflow.'
      },
      {
        title: isZh ? '透明开放' : 'Radically Transparent',
        icon: 'transparent',
        details: isZh
          ? '我们对开源的承诺始终如一。所有工具在公开环境中构建、迭代和优化，推动协作共建的开发者生态。'
          : 'Our commitment to open source is absolute. We build, iterate, and refine our tools in public, fostering a collaborative ecosystem where developers thrive together.'
      },
      {
        title: isZh ? '持续可靠' : 'Built to Last',
        icon: 'lasting',
        details: isZh
          ? '我们优先追求可持续的软件工程，确保每款产品具备长期可靠性、卓越性能和持久影响力。'
          : 'We prioritize sustainable software engineering over fleeting trends. Our solutions are engineered to ensure long-term reliability, premium performance, and lasting impact.'
      }
    ] as FeatureData[]
  }
})

const activeIndex = ref(0)
let carouselTimer: ReturnType<typeof setInterval> | null = null

const startCarousel = () => {
  carouselTimer = setInterval(() => {
    if (content.value.products && content.value.products.length > 0) {
      activeIndex.value = (activeIndex.value + 1) % content.value.products.length
    }
  }, 5000)
}

const stopCarousel = () => {
  if (carouselTimer) {
    clearInterval(carouselTimer)
    carouselTimer = null
  }
}

const goToProduct = (index: number) => {
  activeIndex.value = index
  stopCarousel()
  startCarousel()
}

onMounted(() => {
  startCarousel()
})

onUnmounted(() => {
  stopCarousel()
})
</script>

<template>
  <div class="homepage">
    <!-- Announcement Banner -->
    <div class="announcement-bar">
      <div class="container">
        <span class="badge">New</span>
        <span class="text">{{ content.announcement.text }}</span>
        <a :href="content.announcement.link" class="link">{{ content.announcement.linkText }}</a>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container hero-container">
        <div class="hero-content">
          <h1 class="hero-headline">
            <span class="hero-brand-text">{{ content.hero.name }}</span>
            <span class="subtitle">{{ content.hero.subtitle }}</span>
          </h1>
          <p class="hero-tagline">{{ content.hero.tagline }}</p>
        </div>
      </div>
    </section>

    <!-- Product Carousel Section -->
    <section class="product-carousel-section" :aria-label="content.sections.whatWeMake">
      <div class="container carousel-container">
        <div class="carousel-viewport">
          <transition name="carousel-slide">
            <a
              :key="content.products[activeIndex].name"
              :href="content.products[activeIndex].url"
              class="carousel-item"
              :target="content.products[activeIndex].url.startsWith('http') ? '_blank' : undefined"
              :rel="content.products[activeIndex].url.startsWith('http') ? 'noopener noreferrer' : undefined"
            >
              <img :src="content.products[activeIndex].logo" :alt="content.products[activeIndex].name + ' logo'" class="carousel-icon" />
              <h3 class="carousel-name">{{ content.products[activeIndex].name }}</h3>
              <p class="carousel-description">{{ content.products[activeIndex].description }}</p>
            </a>
          </transition>
        </div>
        <div class="carousel-indicators" role="tablist">
          <button
            v-for="(_, index) in content.products"
            :key="index"
            class="indicator-dot"
            :class="{ active: index === activeIndex }"
            :aria-selected="index === activeIndex"
            :aria-label="`View product ${index + 1}`"
            role="tab"
            @click="goToProduct(index)"
          ></button>
        </div>
      </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="values-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ content.sections.values }}</span>
        </div>
        <div class="values-grid">
          <div v-for="feature in content.features" :key="feature.title" class="value-card">
            <ValueIcon :name="feature.icon" />
            <h3 class="value-title">{{ feature.title }}</h3>
            <p class="value-details">{{ feature.details }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Showcase Section -->
    <section class="products-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ content.sections.products }}</span>
        </div>
        <div class="products-grid">
          <Product 
            v-for="product in content.products" 
            :key="product.name" 
            :product="product" 
          />
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ content.sections.team }}</span>
        </div>
        <TeamMembers />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.homepage {
  display: flex;
  flex-direction: column;
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

  @media (min-width: 2560px) {
    max-width: 1800px;
    padding: 0 80px;
  }
}

/* Announcement Banner */
.announcement-bar {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-text-1);
  padding: 0.625rem 0;
  font-size: 0.8125rem;
  border-bottom: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .badge {
    background-color: var(--vp-c-brand-1);
    color: white;
    padding: 0.125rem 0.5rem;
    border-radius: 0.75rem;
    font-size: 0.6875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .text {
    font-weight: 500;
  }

  .link {
    color: var(--vp-c-brand-1);
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      color: var(--vp-c-brand-2);
    }
  }
}

/* Section Header (Linear style labels) */
.section-header {
  margin-bottom: 40px;
  display: flex;
  justify-content: center;

  @media (min-width: 1920px) {
    margin-bottom: 56px;
  }

  @media (min-width: 2560px) {
    margin-bottom: 64px;
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

  @media (min-width: 1440px) {
    gap: 1.25rem;
    &::before,
    &::after {
      width: 48px;
    }
  }
}

/* Hero Section */
.hero-section {
  padding: 120px 0 64px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 0 48px;
  }

  @media (min-width: 1440px) {
    padding: 140px 0 72px;
  }

  @media (min-width: 1920px) {
    padding: 160px 0 88px;
  }

  @media (min-width: 2560px) {
    padding: 200px 0 104px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: -10%;
    width: 60%;
    height: 80%;
    transform: translateY(-50%);
    background: radial-gradient(ellipse at center, rgba(248, 155, 64, 0.08) 0%, transparent 60%);
    z-index: -1;
    pointer-events: none;
    filter: blur(40px);
  }
}

.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 880px;
}

.hero-content {
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 1024px) {
    align-items: center;
  }
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
  color: var(--vp-c-brand-1);
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


/* Product Carousel */
.product-carousel-section {
  padding: 0 0 80px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 0 56px;
  }

  @media (min-width: 1440px) {
    padding: 0 0 96px;
  }
}

.carousel-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel-viewport {
  position: relative;
  width: 100%;
  max-width: 520px;
  min-height: 180px;
  margin: 0 auto 24px;
  overflow: hidden;
}

.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.carousel-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 16px;
}

.carousel-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 12px;
  color: var(--vp-c-text-1);
}

.carousel-description {
  font-size: 0.9375rem;
  color: var(--vp-c-text-2);
  margin: 0;
  max-width: 480px;
  line-height: 1.5;
}

.carousel-indicators {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.indicator-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--vp-c-text-3, rgba(128, 128, 128, 0.3));
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.3s cubic-bezier(0.22, 1, 0.36, 1);

  &.active {
    background-color: var(--vp-c-brand-1);
  }

  &:focus-visible {
    outline: 2px solid var(--vp-c-brand-1);
    outline-offset: 4px;
  }
}

/* Transition classes */
.carousel-slide-enter-active,
.carousel-slide-leave-active {
  transition: opacity 350ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 350ms cubic-bezier(0.22, 1, 0.36, 1);
}

.carousel-slide-enter-from {
  opacity: 0;
  transform: translateX(40px);
}

.carousel-slide-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

/* Values Section */
.values-section {
  padding: 80px 0;
  background-color: var(--vp-c-bg-alt);

  @media (min-width: 1440px) {
    padding: 100px 0;
  }

  @media (min-width: 1920px) {
    padding: 120px 0;
  }

  @media (min-width: 2560px) {
    padding: 140px 0;
  }
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1920px) {
    gap: 32px;
  }

  @media (min-width: 2560px) {
    gap: 40px;
  }
}

.value-card {
  background-color: var(--gf-c-bg-card, var(--vp-c-bg));
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  border-radius: 12px;
  padding: 1.75rem;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  @media (min-width: 1440px) {
    padding: 2rem;
    border-radius: 14px;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: var(--gf-c-border-hover, var(--vp-c-brand-1));
    box-shadow: 0 12px 24px var(--gf-c-glow), var(--vp-shadow-2);
  }
}

.value-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0 0 0.875rem;
  color: var(--vp-c-text-1);
  letter-spacing: -0.02em;
}

.value-details {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 0;
}

/* Products Section */
.products-section {
  padding: 100px 0;

  @media (min-width: 1440px) {
    padding: 120px 0;
  }

  @media (min-width: 1920px) {
    padding: 140px 0;
  }

  @media (min-width: 2560px) {
    padding: 160px 0;
  }
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  // Override product card's own flex-based sizing to fit the grid
  :deep(.product-card) {
    width: 100%;
    min-width: 0;
    margin: 0;
  }

  // Center the last card when it's alone on its row (odd count)
  :deep(.product-card:last-child:nth-child(odd)) {
    grid-column: 1 / -1;
    max-width: calc(50% - 16px);
    justify-self: center;
  }
  
  @media (max-width: 1024px) {
    gap: 24px;

    :deep(.product-card:last-child:nth-child(odd)) {
      max-width: calc(50% - 12px);
    }
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    :deep(.product-card:last-child:nth-child(odd)) {
      max-width: 100%;
    }
  }

  @media (min-width: 1920px) {
    gap: 40px;

    :deep(.product-card:last-child:nth-child(odd)) {
      max-width: calc(50% - 20px);
    }
  }

  @media (min-width: 2560px) {
    gap: 48px;

    :deep(.product-card:last-child:nth-child(odd)) {
      max-width: calc(50% - 24px);
    }
  }
}

/* Team Section */
.team-section {
  padding: 80px 0 120px;
  background-color: var(--vp-c-bg-alt);

  @media (min-width: 1440px) {
    padding: 100px 0 140px;
  }

  @media (min-width: 1920px) {
    padding: 120px 0 160px;
  }

  @media (min-width: 2560px) {
    padding: 140px 0 180px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    transform: none !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
