<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

import ValueIcon, { type ValueIconName } from './ValueIcon.vue'

const { lang } = useData()

type ValueCard = {
  title: string
  icon: ValueIconName
  details: string
}

type SupportCard = {
  title: string
  details: string
  action: string
  link?: string
  image?: string
  imageAlt?: string
}

type CommunityCard = {
  title: string
  details: string
  action: string
  link?: string
  image?: string
  imageAlt?: string
}

const content = computed(() => {
  const isZh = lang.value === 'zh'

  return {
    hero: {
      label: isZh ? '关于极客范' : 'About GEEKFUN',
      titleLead: isZh ? '打造' : 'Building',
      titleAccent: isZh ? '可持续' : 'Sustainable',
      titleTail: isZh ? '的开源软件' : 'Open Source Software',
      tagline: isZh
        ? '极客范是一个面向开发者的开源工作室，专注于构建真正有价值、可持续演进、能够长期服务社区的软件产品。'
        : 'GEEKFUN is a developer-first open-source studio building software that delivers real value, evolves sustainably, and serves the community for the long term.',
      primaryAction: isZh ? '查看产品' : 'Explore Products',
      primaryLink: isZh ? '/zh/download' : '/download',
      secondaryAction: isZh ? '支持我们' : 'Support Us',
      secondaryLink: '#support',
      quote: isZh
        ? '我们关注的不只是发布软件，而是构建能长期产生正向价值的工具与生态。'
        : 'We care about more than shipping software — we build tools and ecosystems designed to create compounding value over time.'
    },
    valuesLabel: isZh ? '我们的使命' : 'Our Mission',
    values: [
      {
        title: isZh ? '价值优先' : 'Value First',
        icon: 'value',
        details: isZh
          ? '我们构建的每一款产品都以真实开发场景为起点，专注解决高频、关键且长期存在的问题。'
          : 'Every product starts from real developer workflows and focuses on solving high-frequency, high-value, long-lived problems.'
      },
      {
        title: isZh ? '可持续演进' : 'Built to Evolve',
        icon: 'evolve',
        details: isZh
          ? '我们重视长期可维护性、可扩展性与稳定性，让软件能够在时间中持续成长，而不是快速过时。'
          : 'We optimize for maintainability, extensibility, and stability so our software can grow with time instead of aging out quickly.'
      },
      {
        title: isZh ? '社区共建' : 'Community Powered',
        icon: 'community',
        details: isZh
          ? '每一次反馈、贡献和支持，都会帮助我们持续打磨产品，并推动更健康的开源协作方式。'
          : 'Every contribution, piece of feedback, and show of support helps us refine our products and strengthen open collaboration.'
      }
    ] as ValueCard[],
    supportLabel: isZh ? '支持极客范' : 'Support GEEKFUN',
    supportIntro: isZh
      ? '如果极客范的开源项目对你有帮助，欢迎通过下面的方式支持我们，帮助我们持续构建长期主义的开发者工具。'
      : 'If GEEKFUN’s open-source projects help your team or workflow, support us below and help us keep building durable developer tools.',
    supportCards: [
      {
        title: isZh ? 'GitHub 赞助' : 'GitHub Sponsors',
        details: isZh
          ? '适合全球开发者和团队，以透明、持续的方式支持我们的开源工作。'
          : 'A simple way for global developers and teams to support our open-source work on an ongoing basis.',
        action: isZh ? '前往赞助' : 'Become a Sponsor',
        link: 'https://github.com/sponsors/geek-fun'
      },
      {
        title: isZh ? '微信赞助' : 'WeChat Sponsor',
        details: isZh
          ? '适合通过微信快速支持极客范，帮助我们持续投入产品研发与内容建设。'
          : 'A fast way to support GEEKFUN through WeChat and help fund product development and community content.',
        action: isZh ? '扫码支持' : 'Scan to Support',
        image: '/wechat_ponsor.jpg',
        imageAlt: isZh ? '微信赞助二维码' : 'WeChat sponsor QR code'
      }
    ] as SupportCard[],
    communityLabel: isZh ? '关注我们' : 'Connect With Us',
    communityIntro: isZh
      ? '关注我们的社区账号，获取产品更新、内容发布以及开源项目的最新进展。'
      : 'Follow our channels for product releases, engineering updates, and the latest progress across our open-source projects.',
    communityCards: isZh
      ? [
          {
            title: 'BiliBili',
            details: '关注极客范 BiliBili，获取视频内容与产品动态。',
            action: '访问主页',
            link: 'https://space.bilibili.com/3546393041963022'
          },
          {
            title: 'X / Twitter',
            details: '关注我们的实时动态、版本发布和开发者更新。',
            action: 'Follow on X',
            link: 'https://x.com/Blankll31075'
          },
          {
            title: '微信公众号',
            details: '扫码关注极客范公众号，接收中文内容与产品公告。',
            action: '扫码关注',
            image: '/wechat_official.png',
            imageAlt: '微信官方公众号二维码'
          }
        ]
      : [
          {
            title: 'YouTube',
            details: 'Watch product demos, walkthroughs, and developer-focused updates from GEEKFUN.',
            action: 'Visit YouTube',
            link: 'https://www.youtube.com/channel/UCx7Zig3NiJFeqe7CUkqvLYw'
          },
          {
            title: 'X / Twitter',
            details: 'Follow real-time release notes, product updates, and community signals.',
            action: 'Follow on X',
            link: 'https://x.com/Blankll31075'
          },
          {
            title: 'WeChat Official Account',
            details: 'Scan to follow GEEKFUN on WeChat for product news and community content.',
            action: 'Scan to Follow',
            image: '/wechat_official.png',
            imageAlt: 'WeChat official account QR code'
          }
        ] as CommunityCard[],
    closing: isZh
      ? '感谢每一位支持者、贡献者和用户。你们的参与，让可持续的开源软件成为真正可以长期发生的事情。'
      : 'To every supporter, contributor, and user: thank you. Your support makes sustainable open source possible in practice, not just in principle.'
  }
})
</script>

<template>
  <div class="about-page">
    <section class="hero-section">
      <div class="container hero-container">
        <div class="hero-copy">
          <div class="section-header section-header--start">
            <span class="section-label">{{ content.hero.label }}</span>
          </div>
          <h1 class="hero-title">
            {{ content.hero.titleLead }}
            <span class="hero-title-accent">{{ content.hero.titleAccent }}</span>
            <br />
            {{ content.hero.titleTail }}
          </h1>
          <p class="hero-tagline">{{ content.hero.tagline }}</p>
          <div class="hero-actions">
            <a :href="content.hero.primaryLink" class="gf-btn gf-btn-primary">{{ content.hero.primaryAction }}</a>
            <a :href="content.hero.secondaryLink" class="gf-btn gf-btn-secondary">{{ content.hero.secondaryAction }}</a>
          </div>
        </div>

        <div class="hero-panel">
          <div class="glow-bg"></div>
          <div class="hero-card">
            <img src="/geekfun.png" alt="GEEKFUN logo" class="hero-logo" width="112" height="112" />
            <p class="hero-quote">{{ content.hero.quote }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="values-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ content.valuesLabel }}</span>
        </div>
        <div class="values-grid">
          <article v-for="value in content.values" :key="value.title" class="value-card">
            <ValueIcon :name="value.icon" />
            <h2 class="value-title">{{ value.title }}</h2>
            <p class="value-details">{{ value.details }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="support" class="support-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ content.supportLabel }}</span>
        </div>
        <p class="section-intro">{{ content.supportIntro }}</p>
        <div class="support-grid">
          <article v-for="card in content.supportCards" :key="card.title" class="support-card">
            <div class="support-card__body">
              <h2 class="card-title">{{ card.title }}</h2>
              <p class="card-details">{{ card.details }}</p>
              <a
                v-if="card.link"
                :href="card.link"
                class="gf-btn gf-btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ card.action }}
              </a>
              <span v-else class="qr-caption">{{ card.action }}</span>
            </div>
<div v-if="card.image" class="qr-card">
               <img :src="card.image" :alt="card.imageAlt" class="qr-image" width="180" height="180" loading="lazy" />
             </div>
          </article>
        </div>
      </div>
    </section>

    <section class="community-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ content.communityLabel }}</span>
        </div>
        <p class="section-intro">{{ content.communityIntro }}</p>
        <div class="community-grid">
          <article v-for="card in content.communityCards" :key="card.title" class="community-card">
            <h2 class="card-title">{{ card.title }}</h2>
            <p class="card-details">{{ card.details }}</p>
<div v-if="card.image" class="qr-card qr-card--community">
               <img :src="card.image" :alt="card.imageAlt" class="qr-image qr-image--large" width="360" height="360" loading="lazy" />
             </div>
            <a
              v-else
              :href="card.link"
              class="gf-btn gf-btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ card.action }}
            </a>
          </article>
        </div>
        <p class="closing-copy">{{ content.closing }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.about-page {
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

.section-header {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
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

.section-intro {
  max-width: 760px;
  margin: 0 auto 2.5rem;
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  text-align: center;
}

.hero-section {
  padding: calc(var(--space-3xl) * 2.5) 0 calc(var(--space-3xl) * 2);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: calc(var(--space-3xl) * 1.5) 0 var(--space-3xl);
  }
}

.hero-container {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: 48px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

.hero-copy {
  position: relative;
  z-index: 1;
}

.hero-title {
  margin: 0 0 var(--space-md);
  font-size: 2.5rem;
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--vp-c-text-1);

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1440px) {
    font-size: 3rem;
  }
}

.hero-title-accent {
  color: var(--vp-c-brand-1);
  font-weight: 800;
}

.hero-tagline {
  max-width: 560px;
  margin: 0 0 var(--space-2xl);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);

  @media (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    font-size: 0.9375rem;
    margin-bottom: var(--space-xl);
  }
}

.hero-actions {
  display: flex;
  gap: 16px;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
}

.hero-panel {
  position: relative;
}

.glow-bg {
  position: absolute;
  inset: -12%;
  background: radial-gradient(ellipse at center, rgba(248, 155, 64, 0.12) 0%, rgba(189, 52, 254, 0.1) 42%, transparent 72%);
  filter: blur(40px);
  pointer-events: none;
}

.hero-card {
  position: relative;
  background: var(--gf-c-bg-card, var(--vp-c-bg));
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  border-radius: 24px;
  padding: 40px;
  box-shadow: var(--vp-shadow-3);
}

.hero-logo {
  width: 112px;
  height: 112px;
  object-fit: cover;
  border-radius: 24px;
  margin-bottom: 24px;
}

.hero-quote {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--vp-c-text-1);
  letter-spacing: -0.01em;
}

.values-section,
.community-section {
  background: var(--vp-c-bg-alt);
}

.values-section {
  padding: 80px 0;

  @media (min-width: 1440px) {
    padding: 100px 0;
  }
}

.support-section {
  padding: 100px 0;

  @media (min-width: 1440px) {
    padding: 120px 0;
  }
}

.community-section {
  padding: 80px 0 120px;

  @media (min-width: 1440px) {
    padding: 100px 0 140px;
  }
}

.values-grid,
.support-grid,
.community-grid {
  display: grid;
  gap: 24px;
}

.values-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.support-grid,
.community-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.value-card,
.support-card,
.community-card {
  position: relative;
  background: var(--gf-c-bg-card, var(--vp-c-bg));
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  border-radius: 20px;
  padding: 32px;
  overflow: hidden;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    border-color: var(--gf-c-border-hover, var(--vp-c-brand-1));
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.08);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: none;
    }
  }
}

.support-card,
.community-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
}

.value-title,
.card-title {
  margin: 0 0 0.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.3;
  color: var(--vp-c-text-1);
  letter-spacing: -0.01em;
}

.value-details,
.card-details,
.closing-copy,
.qr-caption {
  margin: 0;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.support-card__body {
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: flex-start;
}

.qr-card {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  background: var(--vp-c-bg);
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  border-radius: 18px;
}

.qr-card--community {
  width: 100%;
  max-width: 360px;
}

.qr-image {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
}

.qr-image--large {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.closing-copy {
  max-width: 900px;
  margin: 48px auto 0;
  text-align: center;
}

@media (max-width: 1024px) {
  .values-grid,
  .support-grid,
  .community-grid {
    grid-template-columns: 1fr;
  }

  .hero-card {
    max-width: 640px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .section-intro,
  .value-details,
  .card-details,
  .closing-copy,
  .qr-caption {
    font-size: 0.9375rem;
  }

  .hero-card,
  .value-card,
  .support-card,
  .community-card {
    padding: 1.5rem;
    border-radius: 1.125rem;
  }

  .hero-logo {
    width: 88px;
    height: 88px;
    border-radius: 1.125rem;
  }

  .hero-quote {
    font-size: 1.375rem;
  }

  .qr-image {
    width: 160px;
    height: 160px;
  }

  .qr-card--community {
    max-width: 100%;
  }
}
</style>
