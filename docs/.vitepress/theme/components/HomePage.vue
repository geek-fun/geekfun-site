<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { getLocalizedSitePath } from '../../site-navigation'
import HeroBlind from './HeroBlind.vue'
import ValueIcon from './ValueIcon.vue'
import { getHomeCopy } from './home-copy'

const { lang } = useData()

const products = [
  { id: 'dockit', name: 'DocKit', logo: '/dockit.png', preview: '/hero-slice-image/dockit-image.png', url: '/products/dockit/' },
  { id: 'sqlkit', name: 'SqlKit', logo: '/sqlkit.png', preview: '/hero-slice-image/sqlkit-image.png', url: '/products/sqlkit/' },
  { id: 'agent', name: 'Data Studio Agent', logo: '/data-studio-agent.svg', preview: '/hero-slice-image/data-studio-agent-terminal.svg', url: '/products/data-studio-agent/' },
  { id: 'insight', name: 'ServerlessInsight', logo: '/serverlessinsight.png', preview: '/serverlessinsight-preview.png', url: 'https://serverlessinsight.com/' },
  { id: 'adapter', name: 'serverless-adapter', logo: '/serverless-adapter.svg', preview: '/serverless-adapter-preview.svg', url: 'https://github.com/geek-fun/serverless-adapter' },
  { id: 'jest', name: 'jest-search', logo: '/jest-search.png', preview: '/jest-search-preview.png', url: 'https://github.com/geek-fun/jest-search' },
] as const
const featureIcons = ['impact', 'transparent', 'lasting'] as const
const localLink = (path: string): string => withBase(getLocalizedSitePath(path, lang.value))

const content = computed(() => {
  const copy = getHomeCopy(lang.value)
  return {
    announcement: {
      badge: copy.badge,
      text: copy.announcement,
      linkText: copy.learnMore + ' →',
      link: localLink('/products/data-studio-agent/'),
    },
    hero: {
      name: copy.name,
      subtitle: copy.subtitle,
      tagline: copy.tagline,
      primaryAction: copy.productsLabel,
      primaryLink: localLink('/download'),
      secondaryAction: 'GitHub',
      secondaryLink: 'https://github.com/geek-fun',
    },
    sections: { products: copy.productsLabel, values: copy.values, team: copy.team },
    products: products.map(({ id, url, ...product }) => ({
      ...product,
      description: copy.products[id],
      url: url.startsWith('/') ? localLink(url) : url,
    })),
    features: featureIcons.map((icon) => ({ ...copy.features[icon], icon })),
  }
})
</script>

<template>
  <main class="homepage">
    <!-- Announcement Banner -->
    <div class="announcement-bar">
      <div class="container">
        <span class="badge">{{ content.announcement.badge }}</span>
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
    <section id="products" class="products-section" :aria-label="content.sections.products">
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
