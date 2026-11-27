<template>
  <div class="geekfun-pricing-page">
    <!-- Hero -->
    <section id="overview" class="hero">
      <div class="hero-inner animate-fade-in">
        <h1>{{ t.hero.title1 }}</h1>
        <p class="hero-subtitle">
          {{ t.hero.subtitle1 }} <span class="dot">·</span> {{ t.hero.subtitle2 }}
        </p>
        <p class="hero-plans-subtitle">{{ t.plans.subtitle }}</p>
        <div class="hero-logos">
          <a :href="localePath('/products/dockit/')" class="hero-logo" aria-label="DocKit">
            <img src="/pricing/dockit-logo.png" alt="DocKit" />
          </a>
          <a :href="localePath('/products/sqlkit/')" class="hero-logo" aria-label="SqlKit">
            <img src="/pricing/sqlkit-logo.png" alt="SqlKit" />
          </a>
          <a
            :href="localePath('/products/data-studio-agent/')"
            class="hero-logo"
            aria-label="Data Studio Agent"
          >
            <img src="/data-studio-agent.svg" alt="Data Studio Agent" />
          </a>
        </div>
      </div>
    </section>

    <!-- Plans -->
    <section id="pricing" class="plans-section">
      <div class="section-inner">
        <h2 class="section-title">{{ t.plans.title }}</h2>

        <div class="billing-toggle">
          <span class="toggle-label" :class="{ active: !isYearly }">{{ t.billing.monthly }}</span>
          <button
            class="switch"
            role="switch"
            :aria-label="t.billing.yearly"
            :aria-checked="isYearly"
            :class="{ checked: isYearly }"
            @click="toggleBilling"
          >
            <span class="switch-knob" />
          </button>
          <span class="toggle-label" :class="{ active: isYearly }">{{ t.billing.yearly }}</span>
          <span class="save-badge">{{ t.billing.save }}</span>
        </div>

        <div class="plans-grid">
          <!-- Community -->
          <article class="plan-card" @mousemove="handleCardPointerMove">
            <h3 class="plan-title">{{ t.community.title }}</h3>
            <p class="plan-desc">{{ t.community.description }}</p>
            <div class="plan-price-block">
              <div class="plan-price-row">
                <span class="plan-price">{{ t.community.price }}</span>
                <span class="plan-price-unit">{{ t.community.priceUnit }}</span>
              </div>
            </div>
            <ul class="plan-features">
              <li v-for="feature in t.community.features" :key="feature">
                <svg class="check" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
            <a class="plan-cta secondary" :href="localePath('/download')">
              {{ t.community.cta }}
            </a>
          </article>

          <!-- Ultimate -->
          <article class="plan-card featured" @mousemove="handleCardPointerMove">
            <span class="popular-badge">{{ t.ultimate.badge }}</span>
            <h3 class="plan-title">{{ t.ultimate.title }}</h3>
            <p class="plan-desc">{{ t.ultimate.description }}</p>
            <div class="plan-price-block">
              <div class="plan-price-row">
                <span class="plan-price">
                  <Transition name="price-swap" mode="out-in">
                    <span :key="displayPrice" class="price-swap-inner">{{ displayPrice }}</span>
                  </Transition>
                </span>
                <span class="plan-price-unit">
                  <Transition name="price-swap" mode="out-in">
                    <span :key="priceUnit" class="price-swap-inner">{{ priceUnit }}</span>
                  </Transition>
                </span>
              </div>
              <div class="plan-alt">
                <Transition name="price-swap" mode="out-in">
                  <span :key="altOption" class="price-swap-inner">{{ altOption }}</span>
                </Transition>
              </div>
            </div>
            <ul class="plan-features">
              <li v-for="feature in t.ultimate.features" :key="feature">
                <svg class="check" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
            <a
              class="plan-cta primary"
              :href="subscribeUrl"
              target="_blank"
              rel="noopener"
            >
              <svg class="rocket" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
              {{ t.ultimate.cta }}
            </a>
          </article>

          <!-- Enterprise -->
          <article class="plan-card" @mousemove="handleCardPointerMove">
            <h3 class="plan-title">{{ t.enterprise.title }}</h3>
            <p class="plan-desc">{{ t.enterprise.description }}</p>
            <div class="plan-price-block">
              <div class="plan-price-row">
                <span class="plan-price enterprise-price">{{ t.enterprise.price }}</span>
              </div>
            </div>
            <ul class="plan-features">
              <li v-for="feature in t.enterprise.features" :key="feature">
                <svg class="check" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
            <div class="enterprise-cta-wrap">
              <button class="plan-cta secondary as-button" @click="notifyEnterprise">
                {{ t.enterprise.cta }}
              </button>
              <Transition name="fade-slide">
                <p v-if="enterpriseNotifyOpen" class="notify-message">
                  {{ t.enterprise.notifyMessage }}
                </p>
              </Transition>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Trial -->
    <section id="trial" class="trial-section">
      <div class="trial-inner" @mousemove="handleCardPointerMove">
        <h2>{{ t.trial.title }}</h2>
        <p class="trial-desc">{{ t.trial.description }}</p>
        <ul class="trial-perks">
          <li v-for="perk in t.trial.perks" :key="perk">
            <svg class="check small" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            {{ perk }}
          </li>
        </ul>
        <a
          class="trial-cta"
          :href="trialUrl"
          target="_blank"
          rel="noopener"
        >
          <svg class="rocket" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
          {{ t.trial.cta }}
        </a>
      </div>
    </section>

    <!-- Compare -->
    <section id="compare" class="compare-section">
      <div class="section-inner">
        <h2 class="section-title">{{ t.compare.title }}</h2>
        <p class="section-subtitle">{{ t.compare.subtitle }}</p>
        <div class="compare-table-wrap">
          <table class="compare-table">
            <colgroup>
              <col class="w40" />
              <col class="w20" />
              <col class="w20" />
              <col class="w20" />
            </colgroup>
            <thead>
              <tr>
                <th class="sticky-col"></th>
                <th
                  v-for="col in compareColumns"
                  :key="col.key"
                  class="plan-col"
                  :class="{ highlighted: col.highlighted }"
                >
                  {{ col.label }}
                </th>
              </tr>
            </thead>
            <tbody>
              <template v-for="category in compareCategories" :key="category.key">
                <tr class="category-row">
                  <td :colspan="4" class="sticky-col category-cell">
                    {{ categoryLabel(category) }}
                  </td>
                </tr>
                <tr v-for="row in category.rows" :key="row.key">
                  <td class="sticky-col feature-cell">{{ rowLabel(row) }}</td>
                  <td
                    v-for="col in compareColumns"
                    :key="col.key"
                    class="value-cell"
                    :class="{ highlighted: col.highlighted }"
                  >
                    <template v-if="getCell(row, col.key) === true">
                      <svg class="check center" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </template>
                    <span v-else-if="getCell(row, col.key) === false" class="value-dash">{{
                      t.compare.unavailable
                    }}</span>
                    <span v-else class="value-text">{{ cellLabel(getCell(row, col.key)) }}</span>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="faq-section">
      <div class="faq-inner">
        <h2 class="section-title">{{ t.faq.title }}</h2>
        <div class="faq-list">
          <details
            v-for="(item, index) in faqItems"
            :key="index"
            class="faq-item"
            @mousemove="handleCardPointerMove"
          >
            <summary>
              <span>{{ item.question }}</span>
              <span class="faq-arrow" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5.5 7.75L10 12.25l4.5-4.5" />
                </svg>
              </span>
            </summary>
            <p>{{ item.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="features-section">
      <div class="section-inner">
        <h2 class="section-title features-title">{{ t.features.title }}</h2>

        <div class="feature-row">
          <div class="feature-copy">
            <a :href="localePath('/products/dockit/')" class="feature-logo-link">
              <img src="/pricing/dockit-logo.png" alt="DocKit" class="feature-logo" />
              <h3>{{ t.features.dockit.title }}</h3>
            </a>
            <p class="feature-desc">{{ t.features.dockit.description }}</p>
            <ul class="feature-list">
              <li v-for="feature in t.features.dockit.features" :key="feature">
                <svg class="check" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual" @mousemove="handleCardPointerMove">
            <img src="/pricing/dockit-screenshot.png" :alt="t.features.dockit.screenshotAlt" />
          </div>
        </div>

        <div class="feature-row reverse">
          <div class="feature-visual" @mousemove="handleCardPointerMove">
            <img src="/pricing/sqlkit-screenshot.png" alt="SqlKit" />
          </div>
          <div class="feature-copy">
            <a :href="localePath('/products/sqlkit/')" class="feature-logo-link">
              <img src="/pricing/sqlkit-logo.png" alt="SqlKit" class="feature-logo" />
              <h3>{{ t.features.sqlkit.title }}</h3>
            </a>
            <p class="feature-desc">{{ t.features.sqlkit.description }}</p>
            <ul class="feature-list">
              <li v-for="feature in t.features.sqlkit.features" :key="feature">
                <svg class="check" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="feature-row">
          <div class="feature-copy">
            <a :href="localePath('/products/data-studio-agent/')" class="feature-logo-link">
              <img src="/data-studio-agent.svg" alt="Data Studio MCP" class="feature-logo" />
              <h3>{{ t.features.agent.title }}</h3>
            </a>
            <p class="feature-desc">{{ t.features.agent.description }}</p>
            <ul class="feature-list">
              <li v-for="feature in t.features.agent.features" :key="feature">
                <svg class="check" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
          <div class="feature-visual" @mousemove="handleCardPointerMove">
            <img src="/pricing/data-studio-agent-terminal.svg" alt="Data Studio Agent" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useData, withBase } from 'vitepress'
import { getLocalizedSitePath } from '../../site-navigation'
import { pricingEs } from './pricing-es'
import { pricingJa } from './pricing-ja'
import { pricingKo } from './pricing-ko'
import { pricingPt } from './pricing-pt'

const { lang } = useData()

type Currency = 'USD' | 'CNY'
type CardProvider = 'creem' | 'waffo'

const ultimatePrices = {
  USD: { monthly: 9.9, yearly: 99 },
  CNY: { monthly: 19.9, yearly: 199 }
} satisfies Record<Currency, { monthly: number; yearly: number }>

const PAYMENT_CONFIG_API = 'https://geekfun-api.wentsen.com/api/v1/payments/provider'
const enabledCurrencies = ref<Currency[]>(['USD'])
const cardProvider = ref<CardProvider>('waffo')

onMounted(async () => {
  try {
    const response = await fetch(PAYMENT_CONFIG_API, { cache: 'no-store' })
    const payload = await response.json()
    const map: Partial<Record<Currency, string>> = payload?.data?.currencies ?? {}
    const list = Object.keys(map).filter(
      (currency): currency is Currency => currency === 'USD' || currency === 'CNY'
    )
    if (list.length) enabledCurrencies.value = list
    if (map.USD === 'creem' || map.USD === 'waffo') cardProvider.value = map.USD
  } catch {
    // keep defaults: USD-only, Waffo
  }
})

const translations = {
  en: {
    hero: {
      title1: 'GEEKFUN Data Studio',
      subtitle1: 'Unified management for NoSQL & SQL databases',
      subtitle2: 'Intelligent, efficient, and user-friendly'
    },
    features: {
      title: 'Meet your powerful database tools.',
      dockit: {
        title: 'DocKit',
        description: 'Professional NoSQL database GUI client for modern data platforms.',
        screenshotAlt: 'Screenshot of the DocKit interface',
        features: [
          'Multi-datasource support: Elasticsearch, OpenSearch, DynamoDB',
          'DynamoDB Local: Local connection and testing',
          'PartiQL Editor: Advanced query composition',
          'UI Query Builder: Visual query composition',
          'Cluster Management: Monitor nodes, shards, indices, templates'
        ]
      },
      sqlkit: {
        title: 'SqlKit',
        description: 'Professional SQL database GUI client for relational databases.',
        features: [
          'Multi-database support: PostgreSQL, MySQL, MSSQL, and more',
          'Database Management: Manage databases, tables, schemas',
          'SQL Editor: Advanced query editor with syntax highlighting',
          'Query History: Track and reuse your queries',
          'Persist SQL: Save queries to files for version control'
        ]
      },
      agent: {
        title: 'Data Studio MCP',
        description:
          'The MCP server that lets your AI coding agent securely access all your databases.',
        features: [
          'MCP Server: Plug and play with Claude Code, Cursor, OpenCode & any MCP client',
          'Connect to SQL databases through SqlKit',
          'NoSQL Bridge: Elasticsearch, OpenSearch, MongoDB, DynamoDB',
          'Local-first: Data never leaves your machine, enterprise-grade security',
          'Bring Your Own Model: Any LLM, no vendor lock-in'
        ]
      }
    },
    plans: {
      title: 'Choose Your Plan',
      subtitle: 'One subscription. All tools. Unlimited possibilities.'
    },
    billing: {
      monthly: 'Monthly',
      yearly: 'Yearly',
      perMonth: '/month',
      perYear: '/year',
      save: 'Save 17%'
    },
    community: {
      title: 'Community',
      description: 'Free and open source',
      price: 'Free',
      priceUnit: 'forever',
      features: [
        'All core DocKit & SqlKit features',
        'Unlimited database connections',
        'Result export (CSV / JSON)',
        'Community support',
        'Self-hosting option'
      ],
      cta: 'Download'
    },
    ultimate: {
      title: 'Ultimate',
      description: 'For power users and professionals',
      badge: 'POPULAR',
      yearlyOption: 'Or {price}/year (save 17%)',
      monthlyOption: 'Or {price}/month',
      features: [
        'Everything in Community',
        'AI Assistant: Custom agent & LLM configuration across DocKit & SqlKit',
        'DocKit Import/Export: Data migration made easy',
        'All DocKit features: NoSQL GUI, monitoring, PartiQL',
        'All SqlKit features: SQL editor, multi-database, history',
        'Priority support'
      ],
      cta: 'Subscribe'
    },
    trial: {
      title: 'Try Before You Buy',
      description: "Haven't tried Ultimate yet? Start a free 7-day trial, anytime.",
      perks: [
        'All Ultimate features for 7 days',
        'No credit card required',
        'Custom agent & LLM configuration',
        'Ends automatically, never charged'
      ],
      cta: 'Start Free Trial'
    },
    enterprise: {
      title: 'Enterprise',
      description: 'For teams and organizations',
      price: 'Coming Soon',
      features: [
        'Everything in Ultimate',
        'Team management',
        'SSO & SAML',
        'Dedicated support',
        'Custom integrations'
      ],
      cta: 'Notify When Available',
      notifyMessage:
        'Contact support@geekfun.club and we will notify you when the Enterprise plan is available.'
    },
    compare: {
      title: 'Compare Plans',
      subtitle: 'Compare features across plans to find the right fit for you.',
      columns: { community: 'Community', ultimate: 'Ultimate', enterprise: 'Enterprise' },
      categories: {
        core: 'Core Features',
        ai: 'Data Studio Agent (AI Assistant + MCP)',
        advanced: 'Advanced Features',
        migration: 'Data Migration',
        sync: 'Cloud Sync',
        collaboration: 'Collaboration & Security (Enterprise)',
        support: 'Support'
      },
      rows: {
        unlimitedConnections: 'Unlimited database connections',
        dataBrowseEdit: 'Data browsing & editing',
        sqlPartiqlEditor: 'SQL & PartiQL editor',
        queryHistoryLocal: 'Query history & saved queries (local)',
        dbTableManagement: 'Database & table management',
        resultExport: 'Result export (CSV / JSON / copy)',
        securityBaseline: 'Encrypted connections (SSL/TLS) & OS keychain credential storage',
        nl2sql: 'Natural language to SQL / PartiQL',
        aiExplainOptimize: 'AI explain & optimize SQL',
        aiFix: 'One-click AI SQL fix',
        mcpServers: 'MCP server for Claude Code, Cursor, OpenCode & any MCP client',
        mcpBridge: 'Database bridge for SqlKit and DocKit',
        aiQuota: 'AI request quota',
        clusterManagement: 'Cluster management & monitoring (nodes/shards/indices/templates)',
        erDashboards: 'ER diagrams & dashboards',
        visualQueryBuilder: 'Visual query builder',
        sshProxy: 'SSH tunnel & proxy',
        cloudCredentials: 'AWS SSO/IAM & enterprise database auth (LDAP / Kerberos / X.509)',
        scheduledTasks: 'Scheduled tasks & automation',
        batchImportExport: 'Batch import/export (CSV/JSON/XLSX)',
        millionRow: 'Million-row data migration',
        crossDeviceSync: 'Cross-device sync of history & saved queries',
        teamPermissions: 'Team members & permission management',
        sqlAudit: 'SQL audit',
        ssoSaml: 'SSO / SAML',
        sharedScripts: 'Shared SQL scripts & reports',
        communitySupport: 'Community support',
        prioritySupport: 'Priority support',
        dedicatedSupport: 'Dedicated support'
      },
      values: {
        aiQuotaUltimate: 'Bring your own LLM',
        aiQuotaEnterprise: 'BYO LLM + private deployment'
      },
      unavailable: '-'
    },
    faq: {
      title: 'Frequently Asked Questions',
      payment: {
        creem:
          'We accept all major credit cards (Visa, MasterCard, American Express). Payments are processed by Creem, our Merchant of Record: Creem is the legal seller of record for the transaction and handles payment collection, tax compliance, invoices, and refunds.',
        waffo:
          'We accept all major credit cards (Visa, MasterCard, American Express). Payments are processed by Waffo (Waffo.com Limited), our Merchant of Record: Waffo is the legal seller of record for the transaction and handles payment collection, tax compliance, invoices, and refunds.',
        alipay: 'CNY payments are processed through Alipay.'
      },
      items: [
        {
          question: "What's included in GEEKFUN Data Studio?",
          answer:
            'GEEKFUN Data Studio includes DocKit (NoSQL database GUI for Elasticsearch, OpenSearch, DynamoDB), SqlKit (SQL database GUI for PostgreSQL, MySQL, MSSQL, etc.), and Data Studio MCP (an MCP server that lets AI coding agents like Claude Code and Cursor securely access your databases). One subscription gives you access to all premium features across all three tools.'
        },
        {
          question: 'Can I cancel my subscription anytime?',
          answer:
            'Yes, you can cancel your subscription at any time. Because we offer a 7-day free trial before any payment is due, payments are non-refundable once charged. After cancellation you keep access to all paid features until the end of the current billing period. See our Refund Policy for details.'
        },
        {
          question: 'How does the AI Assistant work?',
          answer:
            'The AI Assistant is available in both DocKit and SqlKit for Ultimate users, with custom agent & LLM configuration (bring your own model quota). It helps with query optimization, data analysis, and troubleshooting.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: ''
        },
        {
          question: 'Is my data secure?',
          answer:
            'Absolutely. We use industry-standard encryption and security practices. Your database credentials and data never leave your machine.'
        },
        {
          question: 'When will Enterprise plan be available?',
          answer:
            "We're working on the Enterprise plan and expect to launch it soon. Click \"Notify When Available\" to be notified when it's ready."
        }
      ]
    }
  },
  zh: {
    hero: {
      title1: 'GEEKFUN Data Studio',
      subtitle1: 'NoSQL 和 SQL 数据库统一管理',
      subtitle2: '智能、高效、易用'
    },
    features: {
      title: '强大的数据库工具。',
      dockit: {
        title: 'DocKit',
        description: '面向现代数据平台的专业 NoSQL 数据库 GUI 客户端。',
        screenshotAlt: 'DocKit 界面截图',
        features: [
          '多数据源支持：Elasticsearch、OpenSearch、DynamoDB',
          'DynamoDB 本地：本地连接和测试',
          'PartiQL 编辑器：高级查询编写',
          '可视化查询构建器：可视化查询编写',
          '集群管理：监控节点、分片、索引、模板'
        ]
      },
      sqlkit: {
        title: 'SqlKit',
        description: '面向关系型数据库的专业 SQL 数据库 GUI 客户端。',
        features: [
          '多数据库支持：PostgreSQL、MySQL、MSSQL 等',
          '数据库管理：管理数据库、表、模式',
          'SQL 编辑器：带语法高亮的高级查询编辑器',
          '查询历史：跟踪和重用您的查询',
          'SQL 持久化：将查询保存到文件进行版本控制'
        ]
      },
      agent: {
        title: 'Data Studio MCP',
        description: '让 AI 编程智能体安全访问所有数据库的 MCP 服务器。',
        features: [
          'MCP 服务器：Claude Code、Cursor、OpenCode 等任意 MCP 客户端即插即用',
          '通过 SqlKit 连接 SQL 数据库',
          'NoSQL 桥接：Elasticsearch、OpenSearch、MongoDB、DynamoDB',
          '本地优先：数据不出本机，企业级安全',
          '自带模型：任意 LLM，无供应商锁定'
        ]
      }
    },
    plans: {
      title: '选择您的方案',
      subtitle: '一个订阅。所有工具。无限可能。'
    },
    billing: {
      monthly: '月付',
      yearly: '年付',
      perMonth: '/月',
      perYear: '/年',
      save: '省 17%'
    },
    community: {
      title: '社区版',
      description: '免费开源',
      price: '免费',
      priceUnit: '永久',
      features: ['DocKit 与 SqlKit 全部核心功能', '无限数据库连接', '结果集导出（CSV / JSON）', '社区支持', '自托管选项'],
      cta: '下载使用'
    },
    ultimate: {
      title: '旗舰版',
      description: '面向高级用户和专业人士',
      badge: '热门',
      yearlyOption: '或 {price}/年（省 17%）',
      monthlyOption: '或 {price}/月',
      features: [
        '社区版所有功能',
        'AI 助手：自定义 Agent 与 LLM 配置，支持 DocKit 和 SqlKit',
        'DocKit 导入/导出：轻松实现数据迁移',
        '所有 DocKit 功能：NoSQL GUI、监控、PartiQL',
        '所有 SqlKit 功能：SQL 编辑器、多数据库、历史记录',
        '优先支持'
      ],
      cta: '立即订阅'
    },
    trial: {
      title: '先试后买',
      description: '还没有体验过旗舰版？免费试用 7 天，随时开始。',
      perks: [
        '7 天旗舰版全功能',
        '无需信用卡',
        '自定义 Agent 与 LLM 配置',
        '试用结束自动停止，不扣费'
      ],
      cta: '开始免费试用'
    },
    enterprise: {
      title: '企业版',
      description: '面向团队和组织',
      price: '即将推出',
      features: ['旗舰版所有功能', '团队管理', 'SSO 和 SAML', '专属支持', '自定义集成'],
      cta: '有货时通知我',
      notifyMessage: '联系 support@geekfun.club，企业版推出时我们会通知您。'
    },
    compare: {
      title: '功能对比',
      subtitle: '对比各版本功能，选择最适合您的方案。',
      columns: { community: '社区版', ultimate: '旗舰版', enterprise: '企业版' },
      categories: {
        core: '基础功能',
        ai: 'Data Studio Agent（AI 助手 · MCP）',
        advanced: '高级功能',
        migration: '数据迁移',
        sync: '云同步',
        collaboration: '协作与安全（企业）',
        support: '支持'
      },
      rows: {
        unlimitedConnections: '无限数据库连接',
        dataBrowseEdit: '数据浏览与编辑',
        sqlPartiqlEditor: 'SQL / PartiQL 编辑器',
        queryHistoryLocal: '查询历史与已保存查询（本地）',
        dbTableManagement: '库表结构管理',
        resultExport: '结果集导出（CSV / JSON / 复制）',
        securityBaseline: 'SSL/TLS 加密连接与系统钥匙串凭据加密',
        nl2sql: '自然语言生成 SQL / PartiQL',
        aiExplainOptimize: 'AI 解释与优化 SQL',
        aiFix: 'AI 一键修复 SQL 错误',
        mcpServers: 'MCP 服务器（Claude Code、Cursor、OpenCode 等任意 MCP 客户端）',
        mcpBridge: 'SqlKit 和 DocKit 数据库桥接',
        aiQuota: 'AI 请求额度',
        clusterManagement: '集群管理与监控（节点/分片/索引/模板）',
        erDashboards: 'ER 图与数据大盘',
        visualQueryBuilder: '可视化查询构建器',
        sshProxy: 'SSH 隧道与代理',
        cloudCredentials: 'AWS SSO/IAM 与企业认证（LDAP / Kerberos / X.509）',
        scheduledTasks: '定时任务与自动化',
        batchImportExport: '批量导入/导出（CSV/JSON/XLSX）',
        millionRow: '百万行级数据迁移',
        crossDeviceSync: '查询历史/已保存查询跨设备同步',
        teamPermissions: '团队成员与权限管理',
        sqlAudit: 'SQL 审计',
        ssoSaml: 'SSO / SAML',
        sharedScripts: '共享 SQL 脚本与报表',
        communitySupport: '社区支持',
        prioritySupport: '优先支持',
        dedicatedSupport: '专属支持'
      },
      values: {
        aiQuotaUltimate: '自有 LLM 额度',
        aiQuotaEnterprise: '自有 LLM 额度 + 私有化部署'
      },
      unavailable: '—'
    },
    faq: {
      title: '常见问题',
      payment: {
        creem:
          '我们接受所有主要信用卡（Visa、MasterCard、American Express）。款项由 Creem（我们的 Merchant of Record，登记卖方）处理：Creem 是该交易法律意义上的卖方，负责收款、税务合规、开票与退款。',
        waffo:
          '我们接受所有主要信用卡（Visa、MasterCard、American Express）。款项由 Waffo（Waffo.com Limited，我们的 Merchant of Record，登记卖方）处理：Waffo 是该交易法律意义上的卖方，负责收款、税务合规、开票与退款。',
        alipay: '人民币（CNY）支付通过支付宝处理。'
      },
      items: [
        {
          question: 'GEEKFUN Data Studio 包含哪些内容？',
          answer:
            'GEEKFUN Data Studio 包括 DocKit（用于 Elasticsearch、OpenSearch、DynamoDB 的 NoSQL 数据库 GUI）、SqlKit（用于 PostgreSQL、MySQL、MSSQL 等的 SQL 数据库 GUI）和 Data Studio MCP（让 Claude Code、Cursor 等 AI 编程智能体安全访问数据库的 MCP 服务器）。一个订阅即可获得三款工具的所有高级功能。'
        },
        {
          question: '我可以随时取消订阅吗？',
          answer:
            '是的，您可以随时取消订阅。由于付款前我们提供 7 天免费试用，付款完成后所有款项均不予退款。取消后您可继续使用全部付费功能至当前计费周期结束。详情请参阅退款政策。'
        },
        {
          question: 'AI 助手如何工作？',
          answer:
            '旗舰版可在 DocKit 和 SqlKit 中使用 AI 助手，支持自定义 Agent 与 LLM 配置（自带模型额度）。AI 助手可帮助您进行查询优化、数据分析和故障排除。'
        },
        {
          question: '你们接受哪些支付方式？',
          answer: ''
        },
        {
          question: '我的数据安全吗？',
          answer:
            '绝对安全。我们使用行业标准加密和安全实践。您的数据库凭据和数据永远不会离开您的设备。'
        },
        {
          question: '企业版什么时候推出？',
          answer: '我们正在开发企业版，预计很快推出。点击"有货时通知我"获取推出通知。'
        }
      ]
    }
  }
}

const localizedPricing: Record<string, typeof translations.en> = {
  ...translations,
  'pt-BR': pricingPt,
  ja: pricingJa,
  ko: pricingKo,
  es: pricingEs,
}

const t = computed(() => localizedPricing[lang.value] ?? translations.en)
const localePath = (path: string): string => withBase(getLocalizedSitePath(path, lang.value))

// Prefer CNY on the Chinese page when checkout offers it.
const currentCurrency = computed<Currency>(() => {
  const preferred: Currency = lang.value === 'zh' ? 'CNY' : 'USD'
  return enabledCurrencies.value.includes(preferred)
    ? preferred
    : (enabledCurrencies.value[0] ?? 'USD')
})

function toggleBilling() {
  isYearly.value = !isYearly.value
}

const handleCardPointerMove = (event: MouseEvent) => {
  const card = event.currentTarget as HTMLElement | null
  if (!card) return
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--mx', `${event.clientX - rect.left}px`)
  card.style.setProperty('--my', `${event.clientY - rect.top}px`)
}

type CompareCell = boolean | string
interface CompareRow {
  key: string
  community: CompareCell
  ultimate: CompareCell
  enterprise: CompareCell
}
interface CompareCategory {
  key: string
  rows: CompareRow[]
}

const compareCategories: CompareCategory[] = [
  {
    key: 'core',
    rows: [
      { key: 'unlimitedConnections', community: true, ultimate: true, enterprise: true },
      { key: 'dataBrowseEdit', community: true, ultimate: true, enterprise: true },
      { key: 'sqlPartiqlEditor', community: true, ultimate: true, enterprise: true },
      { key: 'queryHistoryLocal', community: true, ultimate: true, enterprise: true },
      { key: 'dbTableManagement', community: true, ultimate: true, enterprise: true },
      { key: 'resultExport', community: true, ultimate: true, enterprise: true },
      { key: 'securityBaseline', community: true, ultimate: true, enterprise: true },
      { key: 'visualQueryBuilder', community: true, ultimate: true, enterprise: true }
    ]
  },
  {
    key: 'ai',
    rows: [
      { key: 'nl2sql', community: false, ultimate: true, enterprise: true },
      { key: 'aiExplainOptimize', community: false, ultimate: true, enterprise: true },
      { key: 'aiFix', community: false, ultimate: true, enterprise: true },
      { key: 'mcpServers', community: false, ultimate: true, enterprise: true },
      { key: 'mcpBridge', community: false, ultimate: true, enterprise: true },
      {
        key: 'aiQuota',
        community: false,
        ultimate: 'aiQuotaUltimate',
        enterprise: 'aiQuotaEnterprise'
      }
    ]
  },
  {
    key: 'advanced',
    rows: [
      { key: 'clusterManagement', community: false, ultimate: true, enterprise: true },
      { key: 'erDashboards', community: false, ultimate: true, enterprise: true },
      { key: 'sshProxy', community: false, ultimate: true, enterprise: true },
      { key: 'cloudCredentials', community: false, ultimate: true, enterprise: true },
      { key: 'scheduledTasks', community: false, ultimate: true, enterprise: true }
    ]
  },
  {
    key: 'migration',
    rows: [
      { key: 'batchImportExport', community: false, ultimate: true, enterprise: true },
      { key: 'millionRow', community: false, ultimate: true, enterprise: true }
    ]
  },
  {
    key: 'sync',
    rows: [{ key: 'crossDeviceSync', community: false, ultimate: true, enterprise: true }]
  },
  {
    key: 'collaboration',
    rows: [
      { key: 'teamPermissions', community: false, ultimate: false, enterprise: true },
      { key: 'sqlAudit', community: false, ultimate: false, enterprise: true },
      { key: 'ssoSaml', community: false, ultimate: false, enterprise: true },
      { key: 'sharedScripts', community: false, ultimate: false, enterprise: true }
    ]
  },
  {
    key: 'support',
    rows: [
      { key: 'communitySupport', community: true, ultimate: true, enterprise: true },
      { key: 'prioritySupport', community: false, ultimate: true, enterprise: true },
      { key: 'dedicatedSupport', community: false, ultimate: false, enterprise: true }
    ]
  }
]

const compareColumns = computed(() => [
  { key: 'community', label: t.value.compare.columns.community },
  { key: 'ultimate', label: t.value.compare.columns.ultimate, highlighted: true },
  { key: 'enterprise', label: t.value.compare.columns.enterprise }
])

const rowLabel = (row: CompareRow): string =>
  t.value.compare.rows[row.key as keyof typeof t.value.compare.rows]
const categoryLabel = (category: CompareCategory): string =>
  t.value.compare.categories[category.key as keyof typeof t.value.compare.categories]
const cellLabel = (cell: CompareCell): string =>
  t.value.compare.values[cell as keyof typeof t.value.compare.values] ?? String(cell)
const getCell = (row: CompareRow, plan: string): CompareCell =>
  row[plan as 'community' | 'ultimate' | 'enterprise']

// Billing state — same defaults as the console pricing page
const isYearly = ref(true)

const formattedPrices = computed(() => {
  const currency = currentCurrency.value
  const formatter = new Intl.NumberFormat(lang.value, {
    style: 'currency',
    currency,
    currencyDisplay: 'code'
  })
  const { monthly, yearly } = ultimatePrices[currency]
  return { monthly: formatter.format(monthly), yearly: formatter.format(yearly) }
})

const displayPrice = computed(() => formattedPrices.value[isYearly.value ? 'yearly' : 'monthly'])
const priceUnit = computed(() => (isYearly.value ? t.value.billing.perYear : t.value.billing.perMonth))
// Yearly view shows the monthly alternative, monthly view shows the yearly one — same as console
const altOption = computed(() =>
  isYearly.value
    ? t.value.ultimate.monthlyOption.replace('{price}', formattedPrices.value.monthly)
    : t.value.ultimate.yearlyOption.replace('{price}', formattedPrices.value.yearly)
)

// Deep links into the console: /subscribe checks the login/subscription state
// and continues to payment (or the 7-day trial) on its own
const CONSOLE_ORIGIN = 'https://console.geekfun.club'
const subscribeUrl = computed(
  () =>
    `${CONSOLE_ORIGIN}/subscribe?plan=${isYearly.value ? 'YEARLY' : 'MONTHLY'}&currency=${currentCurrency.value}`
)
const trialUrl = `${CONSOLE_ORIGIN}/subscribe?intent=trial`

const enterpriseNotifyOpen = ref(false)
function notifyEnterprise() {
  enterpriseNotifyOpen.value = !enterpriseNotifyOpen.value
}

const paymentMethods = computed(() => {
  const { payment } = t.value.faq
  const currencies = enabledCurrencies.value
  return [
    currencies.includes('USD') ? payment[cardProvider.value] : '',
    currencies.includes('CNY') ? payment.alipay : ''
  ].filter(Boolean).join(' ')
})

const faqItems = computed(() =>
  t.value.faq.items.map((item, index) =>
    index === 3 ? { ...item, answer: paymentMethods.value } : item
  )
)
</script>

<style scoped lang="scss">
@mixin gf-luminous-border($ring-size: 260px, $sheen-size: 360px) {
  position: relative;

  /* 1px cursor-tracking luminous hairline border */
  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: radial-gradient(
      #{$ring-size} circle at var(--mx, 50%) var(--my, 0%),
      var(--gf-border-glow) 0%,
      var(--gf-border-glow-mid) 42%,
      transparent 74%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.36s var(--gf-ease);
  }

  /* Subtle ambient surface sheen */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(
      #{$sheen-size} circle at var(--mx, 50%) var(--my, 0%),
      var(--gf-surface-glow),
      transparent 70%
    );
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.36s var(--gf-ease);
  }
}

.geekfun-pricing-page {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  /* Same green as the console pricing page (tailwind --success: 160 84% 39%) */
  --gf-success: hsl(160, 84%, 39%);
  --gf-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --gf-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --gf-card-bg: var(--vp-c-bg);
  --gf-line: rgba(15, 23, 42, 0.085);
  --gf-line-soft: rgba(15, 23, 42, 0.055);
  --gf-line-hover: rgba(248, 155, 64, 0.38);
  --gf-line-featured: rgba(248, 155, 64, 0.36);
  --gf-border-glow: rgba(248, 155, 64, 0.88);
  --gf-border-glow-mid: rgba(248, 155, 64, 0.32);
  --gf-surface-glow: rgba(248, 155, 64, 0.045);
  --gf-card-shadow: 0 1px 2px rgba(15, 23, 42, 0.025), 0 8px 24px -18px rgba(15, 23, 42, 0.08);
  --gf-card-shadow-hover: 0 16px 36px -16px rgba(15, 23, 42, 0.13);
  --gf-featured-shadow: 0 10px 28px -16px rgba(248, 155, 64, 0.24), 0 1px 2px rgba(15, 23, 42, 0.03);
  --gf-featured-shadow-hover: 0 22px 46px -16px rgba(248, 155, 64, 0.30);
  --gf-row-hover: rgba(248, 155, 64, 0.045);
  --gf-row-hover-solid: color-mix(in srgb, var(--gf-card-bg) 95.5%, #f89b40 4.5%);
}

/* ---------- hero ---------- */
.hero {
  position: relative;
  padding: 3.5rem 1.5rem 4rem;
  text-align: center;
  background:
    radial-gradient(640px 260px at 50% 0%, color-mix(in srgb, var(--vp-c-brand-1) 9%, transparent), transparent 72%),
    var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--gf-line-soft);

  .hero-inner {
    max-width: 1024px;
    margin: 0 auto;

    &.animate-fade-in {
      animation: gf-fade-in 0.58s var(--gf-ease) both;
    }
  }

  h1 {
    font-size: 2.75rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    margin: 0 0 1rem;
    color: var(--vp-c-text-1);
  }

  .hero-subtitle {
    font-size: 1.125rem;
    color: var(--vp-c-text-2);
    margin: 0 0 0.5rem;

    .dot {
      margin: 0 0.5rem;
      opacity: 0.45;
    }
  }

  .hero-plans-subtitle {
    font-size: 1rem;
    font-weight: 500;
    margin: 0 0 2rem;
    color: var(--vp-c-text-1);
  }

  .hero-logos {
    display: flex;
    justify-content: center;
    gap: 1rem;

    .hero-logo {
      display: inline-flex;
      padding: 3px;
      border-radius: 0.875rem;
      border: 1px solid var(--gf-line);
      background: var(--gf-card-bg);
      box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
      transition:
        transform 0.34s var(--gf-ease),
        border-color 0.28s var(--gf-ease),
        box-shadow 0.34s var(--gf-ease);

      &:hover,
      &:focus-visible {
        transform: translateY(-3px) scale(1.04);
        border-color: var(--gf-line-hover);
        box-shadow: 0 10px 24px -10px color-mix(in srgb, var(--vp-c-brand-1) 36%, transparent);
      }

      img {
        width: 3.25rem;
        height: 3.25rem;
        object-fit: contain;
        border-radius: 0.625rem;
        display: block;
      }
    }
  }
}

@keyframes gf-fade-in {
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

/* ---------- shared ---------- */
.section-inner {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-title {
  font-size: 1.875rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  text-align: center;
  margin: 0 0 1rem;
  color: var(--vp-c-text-1);
}

.section-subtitle {
  text-align: center;
  color: var(--vp-c-text-2);
  margin: 0 0 2.5rem;
}

.check {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  color: var(--gf-success);
  transition: transform 0.24s var(--gf-spring);

  &.small {
    width: 1rem;
    height: 1rem;
  }

  &.center {
    margin: 0 auto;
    display: block;
  }
}

.rocket {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  transition: transform 0.34s var(--gf-spring);
}

.plan-cta.primary:hover .rocket,
.trial-cta:hover .rocket {
  transform: translate(2.5px, -2.5px) rotate(-6deg);
}

/* Price switch transition */
.price-swap-inner {
  display: inline-block;
}

.price-swap-enter-active,
.price-swap-leave-active {
  transition: opacity 0.2s var(--gf-ease), transform 0.2s var(--gf-ease);
}

.price-swap-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.price-swap-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.24s var(--gf-ease), transform 0.24s var(--gf-ease);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

/* ---------- plans ---------- */
.plans-section {
  padding: 2.75rem 0 6rem;

  .billing-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 3rem;

    .toggle-label {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--vp-c-text-2);
      transition: color 0.24s var(--gf-ease);

      &.active {
        color: var(--vp-c-brand-1);
        font-weight: 600;
      }
    }
  }

  .switch {
    width: 2.75rem;
    height: 1.5rem;
    border: 1px solid var(--gf-line);
    border-radius: 999px;
    background: var(--vp-c-bg-soft);
    position: relative;
    cursor: pointer;
    transition:
      background-color 0.28s var(--gf-ease),
      border-color 0.28s var(--gf-ease),
      box-shadow 0.28s var(--gf-ease),
      transform 0.16s var(--gf-ease);
    padding: 0;

    &:hover {
      border-color: var(--gf-line-hover);
    }

    &:active {
      transform: scale(0.96);
    }

    &:focus-visible {
      outline: 2px solid color-mix(in srgb, var(--vp-c-brand-1) 55%, transparent);
      outline-offset: 2px;
    }

    &.checked {
      background: var(--vp-c-brand-1);
      border-color: transparent;
      box-shadow: 0 2px 10px -2px color-mix(in srgb, var(--vp-c-brand-1) 50%, transparent);
    }

    .switch-knob {
      position: absolute;
      top: 0.125rem;
      left: 0.125rem;
      width: 1.125rem;
      height: 1.125rem;
      border-radius: 999px;
      background: #fff;
      box-shadow: 0 1px 3px rgba(15, 23, 42, 0.22);
      transition: transform 0.36s var(--gf-spring);
    }

    &.checked .switch-knob {
      transform: translateX(1.25rem);
    }
  }

  .save-badge {
    border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 24%, transparent);
    background: color-mix(in srgb, var(--vp-c-brand-1) 9%, transparent);
    color: var(--vp-c-brand-1);
    font-size: 0.72rem;
    font-weight: 650;
    padding: 0.15rem 0.55rem;
    border-radius: 999px;
  }
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
}

.plan-card {
  @include gf-luminous-border(260px, 360px);
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid var(--gf-line);
  border-radius: 1.125rem;
  padding: 1.75rem;
  background: var(--gf-card-bg);
  box-shadow: var(--gf-card-shadow);
  transition:
    transform 0.38s var(--gf-ease),
    border-color 0.32s var(--gf-ease),
    box-shadow 0.38s var(--gf-ease);
  animation: gf-fade-in 0.54s var(--gf-ease) both;

  &:nth-child(2) {
    animation-delay: 0.08s;
  }

  &:nth-child(3) {
    animation-delay: 0.16s;
  }

  &:hover,
  &:focus-within {
    transform: translateY(-4px);
    border-color: var(--gf-line-hover);
    box-shadow: var(--gf-card-shadow-hover);

    &::before,
    &::after {
      opacity: 1;
    }
  }

  &.featured {
    border: 1px solid var(--gf-line-featured);
    background:
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--vp-c-brand-1) 5.5%, transparent) 0%,
        transparent 34%
      ),
      var(--gf-card-bg);
    box-shadow: var(--gf-featured-shadow);

    &:hover,
    &:focus-within {
      transform: translateY(-5px);
      border-color: color-mix(in srgb, var(--vp-c-brand-1) 56%, transparent);
      box-shadow: var(--gf-featured-shadow-hover);
    }
  }

  .popular-badge {
    position: absolute;
    top: -0.6875rem;
    right: 1.25rem;
    z-index: 20;
    background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
    color: var(--vp-c-white);
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    padding: 0.18rem 0.68rem;
    border-radius: 999px;
    box-shadow: 0 4px 12px -2px color-mix(in srgb, var(--vp-c-brand-1) 48%, transparent);
  }

  .plan-title {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin: 0 0 0.25rem;
    color: var(--vp-c-text-1);
  }

  .plan-desc {
    font-size: 0.875rem;
    color: var(--vp-c-text-2);
    margin: 0 0 1.4rem;
  }

  .plan-price-block {
    min-height: 5.25rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1.15rem;
    border-bottom: 1px solid var(--gf-line-soft);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: 960px) {
      min-height: auto;
    }
  }

  .plan-price-row {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    column-gap: 0.5rem;

    .plan-price {
      font-size: 2.25rem;
      font-weight: 700;
      letter-spacing: -0.03em;
      line-height: 1.15;
      font-variant-numeric: tabular-nums;
      color: var(--vp-c-text-1);

      &.enterprise-price {
        font-size: 1.75rem;
      }
    }

    .plan-price-unit {
      font-size: 0.875rem;
      color: var(--vp-c-text-2);
    }
  }

  .plan-alt {
    font-size: 0.75rem;
    color: var(--vp-c-text-2);
    margin-top: 0.45rem;
    min-height: 1.125rem;
  }

  .plan-features {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem;
    flex: 1;

    li {
      display: flex;
      align-items: flex-start;
      font-size: 0.875rem;
      margin-bottom: 0.7rem;
      color: var(--vp-c-text-1);
      line-height: 1.55;

      .check {
        margin-right: 0.75rem;
        margin-top: 0.125rem;
      }

      &:hover .check {
        transform: scale(1.08);
      }
    }
  }

  .plan-cta {
    position: relative;
    z-index: 1;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.72rem 1.75rem;
    border-radius: 0.625rem;
    font-weight: 600;
    font-size: 0.9375rem;
    text-decoration: none;
    transition:
      transform 0.25s var(--gf-ease),
      background-color 0.25s var(--gf-ease),
      color 0.25s var(--gf-ease),
      border-color 0.25s var(--gf-ease),
      box-shadow 0.28s var(--gf-ease);

    &.primary {
      background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
      color: var(--vp-c-white);
      box-shadow: 0 4px 14px -4px color-mix(in srgb, var(--vp-c-brand-1) 52%, transparent);

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          110deg,
          transparent 25%,
          rgba(255, 255, 255, 0.24) 50%,
          transparent 75%
        );
        transform: translateX(-120%);
        transition: transform 0.65s var(--gf-ease);
      }

      &:hover {
        transform: translateY(-1px);
        color: var(--vp-c-white);
        box-shadow: 0 10px 24px -6px color-mix(in srgb, var(--vp-c-brand-1) 58%, transparent);

        &::after {
          transform: translateX(120%);
        }
      }

      &:active {
        transform: translateY(0) scale(0.99);
      }
    }

    &.secondary {
      border: 1px solid var(--gf-line);
      color: var(--vp-c-text-1);
      background: transparent;

      &:hover {
        transform: translateY(-1px);
        border-color: var(--gf-line-hover);
        color: var(--vp-c-brand-1);
        background: color-mix(in srgb, var(--vp-c-brand-1) 5%, transparent);
      }

      &:active {
        transform: translateY(0) scale(0.99);
      }
    }

    &.as-button {
      cursor: pointer;
      font-family: inherit;
    }
  }

  .enterprise-cta-wrap {
    position: relative;
    z-index: 1;
    width: 100%;

    .notify-message {
      margin: 0.75rem 0 0;
      width: 100%;
      border: 1px solid var(--gf-line);
      background: var(--vp-c-bg-soft);
      font-size: 0.875rem;
      border-radius: 0.5rem;
      padding: 0.75rem 1rem;
      color: var(--vp-c-text-1);
      line-height: 1.6;
    }
  }
}

/* ---------- trial ---------- */
.trial-section {
  padding: 2.5rem 1.5rem;
  text-align: center;
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--gf-line-soft);
  border-bottom: 1px solid var(--gf-line-soft);

  .trial-inner {
    @include gf-luminous-border(320px, 440px);
    max-width: 820px;
    margin: 0 auto;
    padding: 2.25rem 2rem;
    border-radius: 1.125rem;
    border: 1px solid var(--gf-line);
    background:
      radial-gradient(500px 180px at 50% 0%, color-mix(in srgb, var(--vp-c-brand-1) 8%, transparent), transparent 72%),
      var(--gf-card-bg);
    box-shadow: var(--gf-card-shadow);
    transition:
      transform 0.36s var(--gf-ease),
      border-color 0.3s var(--gf-ease),
      box-shadow 0.36s var(--gf-ease);

    &:hover,
    &:focus-within {
      transform: translateY(-2px);
      border-color: var(--gf-line-hover);
      box-shadow: var(--gf-card-shadow-hover);

      &::before,
      &::after {
        opacity: 1;
      }
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin: 0 0 0.5rem;
    color: var(--vp-c-text-1);
  }

  .trial-desc {
    color: var(--vp-c-text-2);
    margin: 0 0 1.25rem;
  }

  .trial-perks {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.65rem 1.5rem;
    padding: 0;
    margin: 0 0 1.75rem;

    li {
      display: flex;
      align-items: center;
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--vp-c-text-1);

      .check {
        margin-right: 0.45rem;
      }
    }
  }

  .trial-cta {
    position: relative;
    z-index: 1;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    padding: 0.72rem 2rem;
    border-radius: 0.625rem;
    background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
    color: var(--vp-c-white);
    font-weight: 600;
    font-size: 0.9375rem;
    text-decoration: none;
    box-shadow: 0 4px 14px -4px color-mix(in srgb, var(--vp-c-brand-1) 50%, transparent);
    transition: transform 0.25s var(--gf-ease), box-shadow 0.28s var(--gf-ease);

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        110deg,
        transparent 25%,
        rgba(255, 255, 255, 0.24) 50%,
        transparent 75%
      );
      transform: translateX(-120%);
      transition: transform 0.65s var(--gf-ease);
    }

    &:hover {
      transform: translateY(-1px);
      color: var(--vp-c-white);
      box-shadow: 0 10px 24px -6px color-mix(in srgb, var(--vp-c-brand-1) 58%, transparent);

      &::after {
        transform: translateX(120%);
      }
    }

    &:active {
      transform: translateY(0) scale(0.99);
    }
  }
}

/* ---------- compare ---------- */
.compare-section {
  padding: 5.5rem 0;

  .section-subtitle {
    margin-bottom: 2.5rem;
  }
}

.compare-table-wrap {
  overflow-x: auto;
  border: 1px solid var(--gf-line);
  border-radius: 1.125rem;
  background: var(--gf-card-bg);
  box-shadow: var(--gf-card-shadow);
  transition: border-color 0.32s var(--gf-ease), box-shadow 0.36s var(--gf-ease);

  &:hover {
    border-color: var(--gf-line-hover);
  }
}

.compare-table {
  width: 100%;
  min-width: 640px;
  font-size: 0.875rem;
  border-collapse: collapse;

  .w40 { width: 40%; }
  .w20 { width: 20%; }

  th,
  td {
    padding: 0.85rem 1.375rem;
  }

  thead tr {
    border-bottom: 1px solid var(--gf-line);

    th {
      font-weight: 650;
      text-align: center;
      color: var(--vp-c-text-1);

      &.plan-col.highlighted {
        color: var(--vp-c-brand-1);
        background: color-mix(in srgb, var(--vp-c-brand-1) 5%, transparent);
      }
    }
  }

  .category-row td {
    background: var(--vp-c-bg-soft);
    font-size: 0.72rem;
    font-weight: 650;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--vp-c-text-2);
    padding-block: 0.625rem;
    border-top: 1px solid var(--gf-line-soft);
    border-bottom: 1px solid var(--gf-line-soft);
  }

  tbody tr:not(.category-row) {
    border-bottom: 1px solid var(--gf-line-soft);
    transition: background-color 0.2s var(--gf-ease);

    &:hover {
      background: var(--gf-row-hover);

      .sticky-col {
        background: var(--gf-row-hover-solid);
        color: var(--vp-c-text-1);
        box-shadow: inset 2px 0 0 var(--vp-c-brand-1);
      }

      .check {
        transform: scale(1.1);
      }
    }

    &:last-child {
      border-bottom: none;
    }
  }

  .sticky-col {
    position: sticky;
    left: 0;
    background: var(--gf-card-bg);
    text-align: left;
    color: var(--vp-c-text-2);
    z-index: 1;
    transition:
      background-color 0.2s var(--gf-ease),
      color 0.2s var(--gf-ease),
      box-shadow 0.2s var(--gf-ease);
  }

  .category-row .sticky-col.category-cell {
    background: var(--vp-c-bg-soft);
  }

  .value-cell {
    text-align: center;
    vertical-align: middle;

    &.highlighted {
      background: color-mix(in srgb, var(--vp-c-brand-1) 3.5%, transparent);
    }

    .value-dash {
      color: var(--vp-c-text-3);
      opacity: 0.6;
    }

    .value-text {
      font-weight: 550;
      color: var(--vp-c-text-1);
    }
  }
}

/* ---------- faq ---------- */
.faq-section {
  padding: 5.5rem 1.5rem;
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--gf-line-soft);
  border-bottom: 1px solid var(--gf-line-soft);

  .faq-inner {
    max-width: 768px;
    margin: 0 auto;

    .section-title {
      margin-bottom: 2.5rem;
    }
  }

  .faq-list {
    display: flex;
    flex-direction: column;
    border-top: 1px solid var(--gf-line);
  }

  .faq-item {
    position: relative;
    border: none;
    border-bottom: 1px solid var(--gf-line);
    border-radius: 0;
    background: transparent;
    padding: 0;
    cursor: pointer;
    interpolate-size: allow-keywords;
    transition: border-color 0.28s var(--gf-ease);

    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -1px;
      height: 1px;
      background: radial-gradient(
        300px circle at var(--mx, 50%) 50%,
        var(--gf-border-glow) 0%,
        var(--gf-line-hover) 55%,
        transparent 85%
      );
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.32s var(--gf-ease);
    }

    &:hover {
      &::after {
        opacity: 1;
      }

      summary {
        color: var(--vp-c-brand-1);
      }
    }

    &[open] {
      border-bottom-color: color-mix(in srgb, var(--vp-c-brand-1) 36%, var(--gf-line));
    }

    &::details-content {
      block-size: 0;
      opacity: 0;
      overflow: hidden;
      transition:
        block-size 0.32s var(--gf-ease),
        opacity 0.26s var(--gf-ease),
        content-visibility 0.32s allow-discrete;
    }

    &[open]::details-content {
      block-size: auto;
      opacity: 1;
    }

    summary {
      position: relative;
      z-index: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding: 1.3rem 0;
      font-weight: 550;
      list-style: none;
      color: var(--vp-c-text-1);
      transition: color 0.22s var(--gf-ease);

      &::-webkit-details-marker {
        display: none;
      }
    }

    .faq-arrow {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      width: 1.25rem;
      height: 1.25rem;
      color: var(--vp-c-text-2);
      transition: transform 0.32s var(--gf-ease), color 0.22s var(--gf-ease);

      svg {
        width: 1.05rem;
        height: 1.05rem;
        display: block;
      }
    }

    &:hover .faq-arrow {
      color: var(--vp-c-brand-1);
    }

    &[open] .faq-arrow {
      transform: rotate(180deg);
      color: var(--vp-c-brand-1);
    }

    p {
      position: relative;
      z-index: 1;
      margin: 0;
      padding: 0 2rem 1.35rem 0;
      font-size: 0.875rem;
      color: var(--vp-c-text-2);
      line-height: 1.7;
    }
  }
}

/* ---------- features ---------- */
.features-section {
  padding: 5.5rem 0 2rem;

  .features-title {
    margin-bottom: 3.25rem;
  }
}

.feature-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.5rem;
  align-items: center;
  padding: 3.5rem 0;
  border-top: 1px solid var(--gf-line);

  &:last-child {
    border-bottom: 1px solid var(--gf-line);
  }

  &.reverse .feature-visual {
    order: -1;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2.5rem 0;

    &.reverse .feature-visual {
      order: 0;
    }
  }

  .feature-logo-link {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.25rem;
    text-decoration: none;

    .feature-logo {
      width: 3.5rem;
      height: 3.5rem;
      object-fit: contain;
      transition: transform 0.34s var(--gf-spring);
    }

    h3 {
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      margin: 0;
      color: var(--vp-c-text-1);
      transition: color 0.22s var(--gf-ease);
    }

    &:hover {
      .feature-logo {
        transform: translateY(-2px) scale(1.05);
      }

      h3 {
        color: var(--vp-c-brand-1);
      }
    }
  }

  .feature-desc {
    font-size: 1.0625rem;
    color: var(--vp-c-text-2);
    margin: 0 0 1.5rem;
    line-height: 1.7;
  }

  .feature-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: flex-start;
      margin-bottom: 0.7rem;

      .check {
        margin-right: 0.75rem;
        margin-top: 0.125rem;
      }

      &:hover .check {
        transform: scale(1.08);
      }

      span {
        font-size: 0.875rem;
        color: var(--vp-c-text-1);
        line-height: 1.6;
      }
    }
  }

  .feature-visual {
    @include gf-luminous-border(300px, 420px);
    border: 1px solid var(--gf-line);
    background: color-mix(in srgb, var(--vp-c-bg-soft) 45%, transparent);
    border-radius: 0.75rem;
    padding: 1.5rem;
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.32s var(--gf-ease);

    &:hover {
      border-color: var(--gf-line-hover);

      &::before,
      &::after {
        opacity: 1;
      }

      img {
        transform: scale(1.015);
      }
    }

    img {
      position: relative;
      z-index: 1;
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.44s var(--gf-ease);
    }
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .trial-section .trial-inner {
    padding: 1.75rem 1.25rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .geekfun-pricing-page {
    .hero-inner,
    .plan-card {
      animation: none;
    }

    .plan-card,
    .plan-card::before,
    .plan-card::after,
    .plan-cta,
    .plan-cta::after,
    .trial-cta,
    .trial-cta::after,
    .switch,
    .switch-knob,
    .rocket,
    .hero-logo,
    .check,
    .trial-inner,
    .trial-inner::before,
    .trial-inner::after,
    .compare-table-wrap,
    .compare-table tbody tr,
    .compare-table .sticky-col,
    .faq-item,
    .faq-item::after,
    .faq-item::details-content,
    .faq-item summary,
    .faq-arrow,
    .feature-visual,
    .feature-visual::before,
    .feature-visual::after,
    .feature-visual img,
    .feature-logo,
    .price-swap-enter-active,
    .price-swap-leave-active,
    .fade-slide-enter-active,
    .fade-slide-leave-active {
      transition: none;
    }
  }
}
</style>

<style lang="scss">
html.dark .geekfun-pricing-page {
  --gf-card-bg: #131316;
  --gf-line: rgba(255, 255, 255, 0.11);
  --gf-line-soft: rgba(255, 255, 255, 0.065);
  --gf-line-hover: rgba(251, 169, 90, 0.42);
  --gf-line-featured: rgba(251, 169, 90, 0.38);
  --gf-border-glow: rgba(251, 169, 90, 0.92);
  --gf-border-glow-mid: rgba(251, 169, 90, 0.34);
  --gf-surface-glow: rgba(251, 169, 90, 0.065);
  --gf-card-shadow: 0 1px 2px rgba(0, 0, 0, 0.32), 0 10px 28px -18px rgba(0, 0, 0, 0.65);
  --gf-card-shadow-hover: 0 20px 42px -14px rgba(0, 0, 0, 0.72);
  --gf-featured-shadow: 0 12px 32px -16px rgba(248, 155, 64, 0.24), 0 1px 3px rgba(0, 0, 0, 0.45);
  --gf-featured-shadow-hover: 0 24px 48px -16px rgba(248, 155, 64, 0.32);
  --gf-row-hover: rgba(251, 169, 90, 0.055);
  --gf-row-hover-solid: color-mix(in srgb, #131316 94.5%, #fba95a 5.5%);
}
</style>
