<template>
  <section class="geekfun-pricing">
    <div class="container">
      <header class="pricing-header">
        <p class="pricing-eyebrow">{{ t.eyebrow }}</p>
        <h1 class="pricing-title">{{ t.title }}</h1>
        <p class="pricing-subtitle">{{ t.subtitle }}</p>
      </header>

      <div class="plans">
        <article class="plan">
          <h2 class="plan-name">{{ t.community.name }}</h2>
          <p class="plan-price">$0</p>
          <p class="plan-tagline">{{ t.community.tagline }}</p>
          <ul class="plan-features">
            <li v-for="feature in t.community.features" :key="feature">{{ feature }}</li>
          </ul>
          <a class="plan-cta secondary" :href="localePath('/download')">{{ t.community.cta }}</a>
        </article>

        <article class="plan plan-featured">
          <span class="plan-badge">{{ t.ultimate.badge }}</span>
          <h2 class="plan-name">{{ t.ultimate.name }}</h2>
          <p class="plan-price">
            {{ t.currencySymbol }}{{ t.ultimate.monthly }}
            <span class="plan-period">/ {{ t.month }}</span>
          </p>
          <p class="plan-alt">
            {{ t.ultimate.yearlyAlt.replace('{price}', `${t.currencySymbol}${t.ultimate.yearly}`) }}
          </p>
          <p class="plan-cny">{{ t.ultimate.cnyNote }}</p>
          <ul class="plan-features">
            <li v-for="feature in t.ultimate.features" :key="feature">{{ feature }}</li>
          </ul>
          <a
            class="plan-cta primary"
            href="https://console.geekfun.club/pricing"
            target="_blank"
            rel="noopener"
            >{{ t.ultimate.cta }}</a
          >
        </article>
      </div>

      <div class="billing-notes">
        <h2 class="notes-title">{{ t.notes.title }}</h2>
        <ul>
          <li v-for="note in t.notes.items" :key="note">{{ note }}</li>
        </ul>
        <p class="billing-contact">
          {{ t.notes.contact }}
          <a href="mailto:support@geekfun.club">support@geekfun.club</a>
        </p>
      </div>

      <div class="legal-links">
        <a href="https://console.geekfun.club/legal/terms" target="_blank" rel="noopener">{{
          t.legal.terms
        }}</a>
        <span aria-hidden="true">·</span>
        <a href="https://console.geekfun.club/legal/privacy" target="_blank" rel="noopener">{{
          t.legal.privacy
        }}</a>
        <span aria-hidden="true">·</span>
        <a href="https://console.geekfun.club/legal/refund" target="_blank" rel="noopener">{{
          t.legal.refund
        }}</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const translations = {
  en: {
    eyebrow: 'Pricing',
    title: 'Simple, transparent pricing',
    subtitle:
      'Start with the free Community edition, or unlock all premium features with Data Studio Ultimate. Every paid plan begins with a 7-day free trial — no charge until the trial ends.',
    month: 'month',
    currencySymbol: '$',
    community: {
      name: 'Community',
      tagline: 'Free forever for local database work.',
      features: [
        'Unlimited connections',
        'Data browse & edit',
        'SQL & PartiQL editor',
        'Local query history',
        'Database & table management'
      ],
      cta: 'Download for free'
    },
    ultimate: {
      name: 'Data Studio Ultimate',
      badge: '7-day free trial',
      monthly: '9.9',
      yearly: '99',
      yearlyAlt: 'or {price}/year — 2 months free',
      cnyNote: 'Also available in CNY: ¥19.9/month · ¥199/year',
      features: [
        'Everything in Community',
        'AI assistant: NL2SQL, query explain / optimize / fix (bring your own model quota)',
        'MCP servers & MCP bridge for AI coding agents',
        'Cluster management',
        'ER diagrams & dashboards',
        'Visual query builder',
        'Batch import / export & million-row handling',
        'Cross-device sync',
        'Priority support'
      ],
      cta: 'Start 7-day free trial'
    },
    notes: {
      title: 'Billing, trial & cancellation',
      items: [
        'Every paid plan starts with a 7-day free trial. The trial ends automatically and never charges you.',
        'Subscriptions renew automatically at the end of each billing period until canceled.',
        'Cancel anytime from the Billing page of your account — you keep access until the end of the current billing period, and your subscription will not renew.',
        'Payments are processed by our Merchant of Record. We accept Visa / Mastercard, Apple Pay and Google Pay; CNY payments are processed through Alipay.'
      ],
      contact: 'Questions about billing? Contact'
    },
    legal: {
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      refund: 'Refund Policy'
    }
  },
  zh: {
    eyebrow: '定价',
    title: '简单透明的定价',
    subtitle:
      '从免费的社区版开始，或订阅旗舰版解锁全部高级功能。所有付费计划均含 7 天免费试用——试用结束前不会产生任何扣费。',
    month: '月',
    currencySymbol: '¥',
    community: {
      name: '社区版',
      tagline: '本地数据库工作，永久免费。',
      features: [
        '不限连接数',
        '数据浏览与编辑',
        'SQL / PartiQL 编辑器',
        '本地查询历史',
        '数据库与表管理'
      ],
      cta: '免费下载'
    },
    ultimate: {
      name: 'Data Studio 旗舰版',
      badge: '7 天免费试用',
      monthly: '19.9',
      yearly: '199',
      yearlyAlt: '或 {price}/年 —— 相当于每年省 2 个月',
      cnyNote: '同时支持美元支付：$9.9/月 · $99/年',
      features: [
        '包含社区版全部功能',
        'AI 助手：NL2SQL、查询解释 / 优化 / 修复（自带模型额度）',
        'MCP 服务器与 MCP Bridge，接入 AI 编程助手',
        '集群管理',
        'ER 图与仪表盘',
        '可视化查询构建',
        '批量导入 / 导出与百万级数据处理',
        '跨设备同步',
        '优先技术支持'
      ],
      cta: '开始 7 天免费试用'
    },
    notes: {
      title: '账单、试用与取消',
      items: [
        '所有付费计划均含 7 天免费试用，试用到期自动结束，不会产生任何扣费。',
        '订阅在每个计费周期结束时自动续费，直至被取消。',
        '您可以随时在账户的"账单"页面取消订阅——取消后可继续使用付费功能至当前计费周期结束，订阅不再续费。',
        '款项由我们的登记卖方（Merchant of Record）统一处理。支持 Visa / Mastercard、Apple Pay 和 Google Pay；人民币支付通过支付宝处理。'
      ],
      contact: '对账单有疑问？请联系'
    },
    legal: {
      terms: '服务协议',
      privacy: '隐私政策',
      refund: '退款政策'
    }
  }
}

const t = computed(() => {
  return translations[lang.value as keyof typeof translations] || translations.en
})

const localePath = (path: string) => {
  return lang.value === 'zh' ? `/zh${path}` : path
}
</script>

<style scoped lang="scss">
.geekfun-pricing {
  padding: 4rem 1.5rem 2rem;

  @media (min-width: 1440px) {
    padding: 5rem 3rem 2.5rem;
  }

  .container {
    max-width: 1152px;
    margin: 0 auto;
  }
}

.pricing-header {
  text-align: center;
  margin-bottom: 3.5rem;

  .pricing-eyebrow {
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--vp-c-brand-1);
    margin: 0 0 0.75rem;
  }

  .pricing-title {
    font-size: 2.25rem;
    line-height: 1.2;
    margin: 0 0 1rem;
    color: var(--vp-c-text-1);
  }

  .pricing-subtitle {
    max-width: 640px;
    margin: 0 auto;
    color: var(--vp-c-text-2);
    line-height: 1.7;
  }
}

.plans {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 880px;
  margin: 0 auto 3.5rem;
  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.plan {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 2rem;
  background: var(--vp-c-bg);

  &.plan-featured {
    border-color: var(--vp-c-brand-1);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  }

  .plan-badge {
    position: absolute;
    top: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    background: var(--vp-c-brand-1);
    color: var(--vp-c-white);
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.25rem 0.875rem;
    border-radius: 999px;
    white-space: nowrap;
  }

  .plan-name {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0 0 1rem;
    color: var(--vp-c-text-1);
  }

  .plan-price {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
    color: var(--vp-c-text-1);

    .plan-period {
      font-size: 1rem;
      font-weight: 400;
      color: var(--vp-c-text-2);
    }
  }

  .plan-tagline,
  .plan-alt,
  .plan-cny {
    color: var(--vp-c-text-2);
    font-size: 0.875rem;
    margin: 0.5rem 0 0;
    line-height: 1.6;
  }

  .plan-features {
    list-style: none;
    padding: 0;
    margin: 1.5rem 0 2rem;
    flex: 1;

    li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.625rem;
      font-size: 0.9375rem;
      color: var(--vp-c-text-1);
      line-height: 1.6;

      &::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--vp-c-brand-1);
        font-weight: 700;
      }
    }
  }

  .plan-cta {
    display: block;
    text-align: center;
    padding: 0.75rem 1.5rem;
    border-radius: 10px;
    font-weight: 600;
    text-decoration: none;
    transition:
      background-color 0.2s ease,
      color 0.2s ease,
      border-color 0.2s ease;

    &.primary {
      background: var(--vp-c-brand-1);
      color: var(--vp-c-white);

      &:hover {
        background: var(--vp-c-brand-2);
        color: var(--vp-c-white);
      }
    }

    &.secondary {
      border: 1px solid var(--vp-c-divider);
      color: var(--vp-c-text-1);

      &:hover {
        border-color: var(--vp-c-brand-1);
        color: var(--vp-c-brand-1);
      }
    }
  }
}

.billing-notes {
  max-width: 880px;
  margin: 0 auto 2.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 1.75rem 2rem;
  background: var(--vp-c-bg-soft);

  .notes-title {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 1rem;
    color: var(--vp-c-text-1);
  }

  ul {
    list-style: disc;
    padding-left: 1.25rem;
    margin: 0;

    li {
      font-size: 0.875rem;
      color: var(--vp-c-text-2);
      line-height: 1.7;
      margin-bottom: 0.5rem;
    }
  }

  .billing-contact {
    margin: 1rem 0 0;
    font-size: 0.875rem;
    color: var(--vp-c-text-2);

    a {
      color: var(--vp-c-brand-1);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.legal-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  a {
    color: var(--vp-c-text-2);
    font-size: 0.875rem;
    text-decoration: none;

    &:hover {
      color: var(--vp-c-brand-1);
      text-decoration: underline;
    }
  }

  span {
    color: var(--vp-c-text-3);
  }
}

@media (max-width: 768px) {
  .geekfun-pricing {
    .pricing-title {
      font-size: 1.75rem;
    }
  }
}
</style>
