<script setup lang="ts">
import { computed } from 'vue'
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

type FeatureData = {
  title: string
  icon: ValueIconName
  details: string
}

const content = computed(() => {
  const isZh = lang.value === 'zh'
  return {
    announcement: {
      text: isZh ? 'DocKit v0.9 已发布 — 全新 UI 设计、查询历史记录和完整 DynamoDB 支持现已上线。' : 'DocKit v0.9 is here — Experience the redesigned UI, advanced Query History, and full DynamoDB support.',
      linkText: isZh ? '查看详情 →' : 'Read the announcement →',
      link: isZh ? '/zh/news/dockit-v0-8-dynamodb-support' : '/news/dockit-v0-9-release'
    },
    hero: {
      name: isZh ? '极客范' : 'GEEKFUN',
      subtitle: isZh ? '开源工作室' : 'Open-Source Studio',
      tagline: isZh ? '为追求效率的开发者，精心打造可持续的开源工具。' : 'Crafting premium, sustainable open-source tools for developers who ship.',
      primaryAction: isZh ? '产品' : 'Products',
      primaryLink: isZh ? '/zh/products' : '/products',
      secondaryAction: 'GitHub',
      secondaryLink: 'https://github.com/geek-fun'
    },
    sections: {
      products: isZh ? '产品' : 'Products',
      values: isZh ? '价值观' : 'Values',
      team: isZh ? '团队成员' : 'Team Members'
    },
    products: [
      {
        name: 'DocKit',
        logo: '/dockit.png',
        preview: '/dockit-client-ui.png',
        description: isZh 
          ? '开源 NoSQL 桌面客户端，支持 Elasticsearch、OpenSearch、DynamoDB 等数据库，致力于打造 AI Native 的新一代数据库管理工具。'
          : 'Open-source NoSQL desktop client for Elasticsearch, OpenSearch, DynamoDB, and more, built for the next generation of AI Native database management.',
        url: isZh ? '/zh/products/dockit/' : '/products/dockit/'
      },
      {
        name: 'SqlKit',
        logo: '/sqlkit.png',
        preview: '/sqlkit-client-ui.png',
        description: isZh
          ? '开源 SQL 桌面客户端，支持 PostgreSQL、MySQL、SQL Server、SQLite 等主流数据库，提供更现代、更高效的数据开发体验。'
          : 'Open-source SQL desktop client for PostgreSQL, MySQL, SQL Server, SQLite, and other mainstream databases, designed for modern developer workflows.',
        url: 'https://github.com/geek-fun/sqlkit'
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
        title: isZh ? '持久可靠' : 'Built to Last',
        icon: 'lasting',
        details: isZh
          ? '我们优先追求可持续的软件工程，确保每款产品具备长期可靠性、卓越性能和持久影响力。'
          : 'We prioritize sustainable software engineering over fleeting trends. Our solutions are engineered to ensure long-term reliability, premium performance, and lasting impact.'
      }
    ] as FeatureData[]
  }
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
            <span class="gradient-text">{{ content.hero.name }}</span>
            <br />
            <span class="subtitle">{{ content.hero.subtitle }}</span>
          </h1>
          <p class="hero-tagline">{{ content.hero.tagline }}</p>
          <div class="hero-actions">
            <a :href="content.hero.primaryLink" class="gf-btn gf-btn-primary">{{ content.hero.primaryAction }}</a>
            <a :href="content.hero.secondaryLink" class="gf-btn gf-btn-secondary" target="_blank" rel="noopener noreferrer">{{ content.hero.secondaryAction }}</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="glow-bg"></div>
          <img src="/dockit-client-ui.png" alt="DocKit Client UI" class="hero-image" width="1280" height="720" />
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
  padding: 100px 0 80px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 64px 0 48px;
  }

  @media (min-width: 1440px) {
    padding: 120px 0 100px;
  }

  @media (min-width: 1920px) {
    padding: 140px 0 120px;
  }

  @media (min-width: 2560px) {
    padding: 180px 0 140px;
  }
}

.hero-container {
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 48px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }

  @media (min-width: 1920px) {
    gap: 64px;
  }

  @media (min-width: 2560px) {
    gap: 80px;
  }
}

.hero-content {
  z-index: 2;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1024px) {
    align-items: center;
  }
}

.hero-headline {
  font-size: 2.5rem;
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin: 0 0 1.25rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1440px) {
    font-size: 3rem;
  }
}

.gradient-text {
  color: var(--vp-c-brand-1);
  font-weight: 800;
}

.subtitle {
  color: var(--vp-c-text-1);
}

.hero-tagline {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 0 0 1.5rem;
  max-width: 480px;
  
  @media (max-width: 1024px) {
    max-width: 560px;
  }

  @media (max-width: 768px) {
    font-size: 0.9375rem;
  }

  @media (min-width: 1440px) {
    max-width: 520px;
  }
}

.hero-actions {
  display: flex;
  gap: 16px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
}

.hero-visual {
  position: relative;
  width: 100%;
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

  @media (min-width: 1920px) {
    border-radius: 16px;
  }

  @media (min-width: 2560px) {
    border-radius: 20px;
  }
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
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  @media (min-width: 1440px) {
    padding: 2rem;
    border-radius: 14px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--gf-gradient-brand-horizontal);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: var(--gf-c-border-hover, var(--vp-c-brand-1));
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    
    &::before {
      opacity: 1;
    }
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
</style>
