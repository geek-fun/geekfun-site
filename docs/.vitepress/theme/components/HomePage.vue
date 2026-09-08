<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

import HeroBlind from './HeroBlind.vue'
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
	      text: isZh ? 'Data Studio Agent。你的 DBA。用自然语言和你的数据库对话。' : 'Data Studio Agent. Your DBA. Talk to your databases in plain language.',
	      linkText: isZh ? '了解更多 →' : 'Learn more →',
	      link: isZh ? '/zh/products/data-studio-agent/' : '/products/data-studio-agent/'
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
    },
    products: [
      {
        name: 'DocKit',
        logo: '/dockit.png',
        preview: '/hero-slice-image/dockit-image.png',
        description: isZh 
          ? '开源 NoSQL 桌面客户端，支持 MongoDB、Elasticsearch、OpenSearch、DynamoDB、EasySearch 等数据库，内置 Agentic Data Studio，致力于打造 AI Native 的新一代数据库管理工具。'
          : 'Open-source desktop GUI client for MongoDB, Elasticsearch, OpenSearch, DynamoDB, and EasySearch — with Agentic Data Studio for natural language database interaction. Query, manage, and migrate your NoSQL databases from a single native app.',
        url: isZh ? '/zh/products/dockit/' : '/products/dockit/'
      },
      {
        name: 'SqlKit',
        logo: '/sqlkit.png',
        preview: '/hero-slice-image/sqlkit-image.png',
        description: isZh
          ? '开源 SQL 桌面客户端，支持 50+ 种数据库（PostgreSQL、MySQL、SQL Server、Oracle、SQLite、DuckDB、ClickHouse 等），内置 AI 智能体，提供 Agentic Data Studio 自然语言查询体验。'
          : 'Open-source AI-powered SQL desktop client for 50+ databases (PostgreSQL, MySQL, SQL Server, Oracle, SQLite, DuckDB, ClickHouse, and more), with Agentic Data Studio for natural language querying.',
        url: isZh ? '/zh/products/sqlkit/' : '/products/sqlkit/'
      },
      {
        name: 'Data Studio Agent',
        logo: '/data-studio-agent.svg',
        preview: '/data-studio-agent-terminal.svg',
        description: isZh
          ? '开源的 MCP 服务器，让 Claude Code、Cursor 等 AI 编码代理通过 DocKit / SqlKit 直接用自然语言查询你的数据库。本地优先，默认只读安全。'
          : 'Open-source MCP server that lets AI coding agents (Claude Code, Cursor, and more) query your databases in plain language via DocKit & SqlKit. Local-first, read-safe by default.',
        url: isZh ? '/zh/products/data-studio-agent/' : '/products/data-studio-agent/'
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
</script>

<template>
  <main class="homepage">
    <!-- Announcement Banner -->
    <div class="announcement-bar">
      <div class="container">
        <span class="badge">New</span>
        <span class="text">{{ content.announcement.text }}</span>
        <a :href="content.announcement.link" class="link">{{ content.announcement.linkText }}</a>
      </div>
    </div>

    <!-- Hero: venetian-blind flip between studio content and the 6 projects -->
    <HeroBlind :hero="content.hero" :products="content.products" />

    <!-- Value Proposition Section -->
    <section class="values-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-label">{{ content.sections.values }}</h2>
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

    <!-- Products index: minimal icon + name strip -->
    <section class="products-section" :aria-label="content.sections.products">
      <div class="container">
        <div class="section-header">
          <h2 class="section-label">{{ content.sections.products }}</h2>
        </div>
        <ul class="product-list">
          <li v-for="p in content.products" :key="p.name">
            <a
              :href="p.url"
              :target="p.url.startsWith('http') ? '_blank' : undefined"
              :rel="p.url.startsWith('http') ? 'noopener noreferrer' : undefined"
              class="product-cell"
            >
              <img :src="p.logo" :alt="p.name + ' logo'" class="product-icon" loading="lazy" />
              <span class="product-name">{{ p.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-label">{{ content.sections.team }}</h2>
        </div>
        <TeamMembers />
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.homepage {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  /* Ambient color blobs at the very top of the page, behind the announcement
     bar — barely-there chroma so the glass bar reads as frosted without the
     gradient shouting over the page. */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 120px;
    background:
      radial-gradient(420px 180px at 18% 0%, var(--gf-glass-blob-amber-faint) 0%, transparent 70%),
      radial-gradient(460px 200px at 82% 0%, var(--gf-glass-blob-purple-faint) 0%, transparent 70%);
    z-index: 0;
    pointer-events: none;
  }
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

/* Announcement Banner — frosted glass: translucent fill + backdrop blur so the
   ambient blobs behind it bleed through. Sits above the homepage ::before glow. */
.announcement-bar {
  position: relative;
  z-index: 1;
  background-color: var(--gf-glass-bg);
  -webkit-backdrop-filter: blur(var(--gf-glass-blur)) saturate(var(--gf-glass-saturate));
  backdrop-filter: blur(var(--gf-glass-blur)) saturate(var(--gf-glass-saturate));
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
    background-color: var(--gf-c-btn-fill);
    color: var(--gf-c-text-on-brand);
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
  margin: 0;
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

/* Hero is rendered by the HeroBlind component — see HeroBlind.vue */

/* Products index — minimal icon + name grid. No card backgrounds, no
   descriptions, no separators. */
.products-section {
  padding: 80px 0;
  background-color: var(--vp-c-bg);

  @media (min-width: 1440px) {
    padding: 100px 0;
  }

  @media (min-width: 1920px) {
    padding: 120px 0;
  }
}

.product-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.product-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 30px 14px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-cell:hover {
  background-color: var(--vp-c-bg-soft);
}

.product-cell:focus-visible {
  outline: 2px solid var(--gf-c-brand);
  outline-offset: -2px;
}

.product-icon {
  width: 64px;
  height: 64px;
  object-fit: contain;
  flex: none;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-cell:hover .product-icon {
  transform: translateY(-3px);
}

.product-name {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-cell:hover .product-name {
  color: var(--gf-c-brand-display, #f89b40);
}

@media (max-width: 640px) {
  .product-cell {
    gap: 12px;
    padding: 24px 10px;
  }

  .product-icon {
    width: 52px;
    height: 52px;
  }

  .product-name {
    font-size: 0.9375rem;
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
