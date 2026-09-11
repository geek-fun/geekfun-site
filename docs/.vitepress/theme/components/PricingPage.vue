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
            :aria-checked="isYearly"
            :class="{ checked: isYearly }"
            @click="toggleBilling"
          >
            <span class="switch-knob" />
          </button>
          <span class="toggle-label" :class="{ active: isYearly }">{{ t.billing.yearly }}</span>
          <span class="save-badge">{{ t.billing.save }}</span>
          <button
            class="currency-toggle"
            :aria-label="currentCurrency === 'USD' ? t.nav.switchToCny : t.nav.switchToUsd"
            @click="toggleCurrency"
          >
            <span
              class="flag flag-back"
              :style="{
                transform:
                  currentCurrency === 'USD' ? 'translate(6px, 4px)' : 'translate(-6px, 4px)',
                zIndex: 0
              }"
              >{{ orderedFlags[1] }}</span
            >
            <span class="flag flag-front">{{ orderedFlags[0] }}</span>
          </button>
        </div>

        <div class="plans-grid">
          <!-- Community -->
          <article class="plan-card">
            <h3 class="plan-title">{{ t.community.title }}</h3>
            <p class="plan-desc">{{ t.community.description }}</p>
            <div class="plan-price-row">
              <span class="plan-price">{{ t.community.price }}</span>
              <span class="plan-price-unit">{{ t.community.priceUnit }}</span>
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
          <article class="plan-card featured">
            <span class="popular-badge">{{ t.ultimate.badge }}</span>
            <h3 class="plan-title">{{ t.ultimate.title }}</h3>
            <p class="plan-desc">{{ t.ultimate.description }}</p>
            <div class="plan-price-row">
              <span class="plan-price">{{ displayPrice }}</span>
              <span class="plan-price-unit">{{ priceUnit }}</span>
            </div>
            <div class="plan-alt">
              <span>{{ altOption }}</span>
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
              href="https://console.geekfun.club/pricing"
              target="_blank"
              rel="noopener"
            >
              <svg class="rocket" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
              {{ t.ultimate.cta }}
            </a>
          </article>

          <!-- Enterprise -->
          <article class="plan-card">
            <h3 class="plan-title">{{ t.enterprise.title }}</h3>
            <p class="plan-desc">{{ t.enterprise.description }}</p>
            <div class="plan-price-row">
              <span class="plan-price enterprise-price">{{ t.enterprise.price }}</span>
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
              <p v-if="enterpriseNotifyOpen" class="notify-message">
                {{ t.enterprise.notifyMessage }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Trial -->
    <section id="trial" class="trial-section">
      <div class="trial-inner">
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
          href="https://console.geekfun.club/pricing"
          target="_blank"
          rel="noopener"
        >
          <svg class="rocket" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
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
          <details v-for="(item, index) in faqItems" :key="index" class="faq-item">
            <summary>
              <span>{{ item.question }}</span>
              <span class="faq-arrow" aria-hidden="true">▼</span>
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
          <div class="feature-visual">
            <img src="/pricing/dockit-screenshot.png" :alt="t.features.dockit.screenshotAlt" />
          </div>
        </div>

        <div class="feature-row reverse">
          <div class="feature-visual">
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
          <div class="feature-visual">
            <img src="/pricing/data-studio-agent-terminal.svg" alt="Data Studio Agent" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

// Keep the payment FAQ answer in sync with the enabled backend provider
// (wentsen/geekfun conf payment.provider — currently "waffo").
const ENABLED_PAYMENT_PROVIDER = 'waffo'

const translations = {
  en: {
    nav: {
      overview: 'Overview',
      pricing: 'Pricing',
      compare: 'Compare',
      faq: 'FAQ',
      features: 'Features',
      switchToCny: 'Switch to CNY',
      switchToUsd: 'Switch to USD'
    },
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
          'SQL Bridge: Access 70+ databases via SqlKit',
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
        nl2sql: 'Natural language to SQL / PartiQL',
        aiExplainOptimize: 'AI explain & optimize SQL',
        aiFix: 'One-click AI SQL fix',
        mcpServers: 'MCP server for Claude Code, Cursor, OpenCode & any MCP client',
        mcpBridge: 'SQL + NoSQL database bridge (SqlKit 70+ SQL DBs, DocKit NoSQL)',
        aiQuota: 'AI request quota',
        clusterManagement: 'Cluster management & monitoring (nodes/shards/indices/templates)',
        erDashboards: 'ER diagrams & dashboards',
        visualQueryBuilder: 'Advanced visual query builder',
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
          'We accept all major credit cards (Visa, MasterCard, American Express). Payments are processed by Creem, our Merchant of Record: Creem is the legal seller of record for the transaction and handles payment collection, tax compliance, invoices, and refunds. CNY payments are processed through Alipay.',
        waffo:
          'We accept all major credit cards (Visa, MasterCard, American Express). Payments are processed by Waffo (Waffo.com Limited), our Merchant of Record: Waffo is the legal seller of record for the transaction and handles payment collection, tax compliance, invoices, and refunds. CNY payments are processed through Alipay.'
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
    },
    prices: {
      USD: { monthly: '$9.9', yearly: '$99' },
      CNY: { monthly: '¥19.9', yearly: '¥199' }
    },
    flags: { USD: '🇺🇸', CNY: '🇨🇳' },
    compareValuesLabel: true
  },
  zh: {
    nav: {
      overview: '概览',
      pricing: '定价',
      compare: '对比',
      faq: '常见问题',
      features: '功能',
      switchToCny: '切换到人民币',
      switchToUsd: '切换到美元'
    },
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
          'SQL 桥接：通过 SqlKit 访问 70+ 数据库',
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
      features: ['DocKit 与 SqlKit 全部核心功能', '无限数据库连接', '社区支持', '自托管选项'],
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
        nl2sql: '自然语言生成 SQL / PartiQL',
        aiExplainOptimize: 'AI 解释与优化 SQL',
        aiFix: 'AI 一键修复 SQL 错误',
        mcpServers: 'MCP 服务器（Claude Code、Cursor、OpenCode 等任意 MCP 客户端）',
        mcpBridge: 'SQL + NoSQL 数据库桥接（SqlKit 70+ SQL 库、DocKit NoSQL）',
        aiQuota: 'AI 请求额度',
        clusterManagement: '集群管理与监控（节点/分片/索引/模板）',
        erDashboards: 'ER 图与数据大盘',
        visualQueryBuilder: '高级可视化查询构建器',
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
          '我们接受所有主要信用卡（Visa、MasterCard、American Express）。款项由 Creem（我们的 Merchant of Record，登记卖方）处理：Creem 是该交易法律意义上的卖方，负责收款、税务合规、开票与退款。人民币支付通过支付宝处理。',
        waffo:
          '我们接受所有主要信用卡（Visa、MasterCard、American Express）。款项由 Waffo（Waffo.com Limited，我们的 Merchant of Record，登记卖方）处理：Waffo 是该交易法律意义上的卖方，负责收款、税务合规、开票与退款。人民币支付通过支付宝处理。'
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
    },
    prices: {
      USD: { monthly: '$9.9', yearly: '$99' },
      CNY: { monthly: '¥19.9', yearly: '¥199' }
    },
    flags: { USD: '🇺🇸', CNY: '🇨🇳' }
  }
}

const t = computed(() => translations[lang.value as keyof typeof translations] || translations.en)
const localePath = (path: string) => (lang.value === 'zh' ? `/zh${path}` : path)

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
      { key: 'dbTableManagement', community: true, ultimate: true, enterprise: true }
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
      { key: 'visualQueryBuilder', community: false, ultimate: true, enterprise: true }
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
      { key: 'communitySupport', community: true, ultimate: false, enterprise: false },
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
const CURRENCY_STORAGE_KEY = 'gf-pricing-currency'

function storedCurrency(): 'USD' | 'CNY' | null {
  try {
    const stored = localStorage.getItem(CURRENCY_STORAGE_KEY)
    return stored === 'USD' || stored === 'CNY' ? stored : null
  } catch {
    return null
  }
}

const initialCurrency = (): 'USD' | 'CNY' => {
  if (lang.value === 'zh') return 'CNY'
  const stored = storedCurrency()
  if (stored) return stored
  let timezoneIsChina = false
  try {
    timezoneIsChina = Intl.DateTimeFormat().resolvedOptions().timeZone === 'Asia/Shanghai'
  } catch {}
  return timezoneIsChina ? 'CNY' : 'USD'
}

const currentCurrency = ref<'USD' | 'CNY'>(initialCurrency())

const flags = computed<Record<string, string>>(() => t.value.flags)
const orderedFlags = computed(() => {
  const selected = currentCurrency.value
  const other = selected === 'USD' ? 'CNY' : 'USD'
  return [flags.value[selected], flags.value[other]]
})

function toggleCurrency() {
  currentCurrency.value = currentCurrency.value === 'USD' ? 'CNY' : 'USD'
  try {
    localStorage.setItem(CURRENCY_STORAGE_KEY, currentCurrency.value)
  } catch {}
}

function toggleBilling() {
  isYearly.value = !isYearly.value
}

const displayPrice = computed(() => t.value.prices[currentCurrency.value][isYearly.value ? 'yearly' : 'monthly'])
const priceUnit = computed(() => (isYearly.value ? t.value.billing.perYear : t.value.billing.perMonth))
// Yearly view shows the monthly alternative, monthly view shows the yearly one — same as console
const altOption = computed(() =>
  isYearly.value
    ? t.value.ultimate.monthlyOption.replace('{price}', t.value.prices[currentCurrency.value].monthly)
    : t.value.ultimate.yearlyOption.replace('{price}', t.value.prices[currentCurrency.value].yearly)
)

const enterpriseNotifyOpen = ref(false)
function notifyEnterprise() {
  enterpriseNotifyOpen.value = !enterpriseNotifyOpen.value
}

// Payment FAQ answer follows the enabled MoR provider (see ENABLED_PAYMENT_PROVIDER)
const faqItems = computed(() =>
  t.value.faq.items.map((item, index) =>
    index === 3 ? { ...item, answer: t.value.faq.payment[ENABLED_PAYMENT_PROVIDER] } : item
  )
)
</script>

<style scoped lang="scss">
.geekfun-pricing-page {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  /* Same green as the console pricing page (tailwind --success: 160 84% 39%) */
  --gf-success: hsl(160, 84%, 39%);
}

/* ---------- hero ---------- */
.hero {
  padding: 3rem 1.5rem 4rem;
  text-align: center;
  background: var(--vp-c-bg-soft);

  .hero-inner {
    max-width: 1024px;
    margin: 0 auto;

    &.animate-fade-in {
      animation: gf-fade-in 0.5s ease-in;
    }
  }

  h1 {
    font-size: 2.75rem;
    font-weight: 700;
    margin: 0 0 1rem;
    color: var(--vp-c-text-1);
  }

  .hero-subtitle {
    font-size: 1.125rem;
    color: var(--vp-c-text-2);
    margin: 0 0 0.5rem;

    .dot {
      margin: 0 0.5rem;
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
      display: inline-block;
      transition: transform 0.2s ease;

      &:hover {
        transform: scale(1.1);
      }

      img {
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
        border-radius: 0.75rem;
        border: 1px solid var(--vp-c-divider);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
      }
    }
  }
}

@keyframes gf-fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
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
}

/* Rocket boost — same as console: shakes while the parent CTA is hovered */
@keyframes gf-rocket-shake {
  0%,
  100% {
    transform: translateX(0) scale(1);
  }

  25% {
    transform: translateX(-2px) scale(1.02);
  }

  75% {
    transform: translateX(2px) scale(1.02);
  }
}

.plan-cta.primary:hover .rocket {
  animation: gf-rocket-shake 0.3s ease-in-out infinite;
}

.currency-toggle {
  position: relative;
  width: 2.75rem;
  height: 2.25rem;
  font-size: 1.25rem;
  border: none;
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 0.75rem;

  &:hover {
    background: var(--vp-c-bg-soft);
  }

  .flag {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .flag-back {
    filter: grayscale(1);
    opacity: 0.4;
  }

  .flag-front {
    z-index: 10;
  }
}

/* ---------- plans ---------- */
.plans-section {
  padding: 2rem 0 6rem;

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

      &.active {
        color: var(--vp-c-brand-1);
      }
    }
  }

  .switch {
    width: 2.75rem;
    height: 1.5rem;
    border: none;
    border-radius: 999px;
    background: var(--vp-c-divider);
    position: relative;
    cursor: pointer;
    transition: background-color 0.2s ease;
    padding: 0;

    &.checked {
      background: var(--vp-c-brand-1);
    }

    .switch-knob {
      position: absolute;
      top: 0.1875rem;
      left: 0.1875rem;
      width: 1.125rem;
      height: 1.125rem;
      border-radius: 999px;
      background: #fff;
      transition: transform 0.2s ease;
    }

    &.checked .switch-knob {
      transform: translateX(1.25rem);
    }
  }

  .save-badge {
    background: color-mix(in srgb, var(--vp-c-brand-1) 12%, transparent);
    color: var(--vp-c-brand-1);
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.125rem 0.5rem;
    border-radius: 999px;
  }
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
}

.plan-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid var(--vp-c-divider);
  border-radius: 1rem;
  padding: 1.5rem;
  background: var(--vp-c-bg);

  &.featured {
    border: 2px solid var(--vp-c-brand-1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    /* rocket-card hover from the console pricing page */
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: translateY(-4px) scale(1.02);
      box-shadow:
        0 20px 40px -10px rgba(249, 115, 22, 0.3),
        0 0 40px rgba(239, 68, 68, 0.2);
      border-color: rgba(249, 115, 22, 0.3);
    }
  }

  .popular-badge {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    z-index: 20;
    background: var(--vp-c-brand-1);
    color: var(--vp-c-white);
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.125rem 0.625rem;
    border-radius: 999px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  .plan-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 0 0.25rem;
    color: var(--vp-c-text-1);
  }

  .plan-desc {
    font-size: 0.875rem;
    color: var(--vp-c-text-2);
    margin: 0 0 1.5rem;
  }

  .plan-price-row {
    margin-bottom: 1.5rem;
    display: flex;
    align-items: baseline;
    gap: 0.5rem;

    .plan-price {
      font-size: 2.25rem;
      font-weight: 700;
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
    margin: -1rem 0 1rem;
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
      margin-bottom: 0.75rem;
      color: var(--vp-c-text-1);
      line-height: 1.5;

      .check {
        margin-right: 0.75rem;
        margin-top: 0.125rem;
      }
    }
  }

  .plan-cta {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.75rem 2rem;
    border-radius: 0.625rem;
    font-weight: 600;
    font-size: 0.9375rem;
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
      background: transparent;

      &:hover {
        border-color: var(--vp-c-brand-1);
        color: var(--vp-c-brand-1);
      }
    }

    &.as-button {
      cursor: pointer;
      font-family: inherit;
    }
  }

  .enterprise-cta-wrap {
    width: 100%;

    .notify-message {
      margin: 0.75rem 0 0;
      width: 100%;
      border: 1px solid var(--vp-c-divider);
      background: var(--vp-c-bg-soft);
      font-size: 0.875rem;
      border-radius: 0.375rem;
      padding: 0.75rem 1rem;
      color: var(--vp-c-text-1);
      line-height: 1.6;
    }
  }
}

/* ---------- trial ---------- */
.trial-section {
  padding: 3rem 1.5rem;
  text-align: center;
  background: var(--vp-c-bg-soft);

  .trial-inner {
    max-width: 768px;
    margin: 0 auto;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
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
    gap: 0.5rem 1.75rem;
    padding: 0;
    margin: 0 0 1.75rem;

    li {
      display: flex;
      align-items: center;
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--vp-c-text-1);

      .check {
        margin-right: 0.5rem;
      }
    }
  }

  .trial-cta {
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 2rem;
    border-radius: 0.625rem;
    background: var(--vp-c-brand-1);
    color: var(--vp-c-white);
    font-weight: 600;
    font-size: 0.9375rem;
    text-decoration: none;
    transition: background-color 0.2s ease;

    &:hover {
      background: var(--vp-c-brand-2);
      color: var(--vp-c-white);
    }
  }
}

/* ---------- compare ---------- */
.compare-section {
  padding: 6rem 0;

  .section-subtitle {
    margin-bottom: 2.5rem;
  }
}

.compare-table-wrap {
  overflow-x: auto;
  border: 1px solid var(--vp-c-divider);
  border-radius: 1rem;
  background: var(--vp-c-bg);
  padding: 0.25rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
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
    padding: 1rem 1.5rem;
  }

  thead tr {
    border-bottom: 1px solid var(--vp-c-divider);

    th {
      font-weight: 600;
      text-align: center;
      color: var(--vp-c-text-2);

      &.plan-col.highlighted {
        background: color-mix(in srgb, var(--vp-c-brand-1) 6%, transparent);
      }
    }
  }

  .category-row td {
    background: var(--vp-c-bg-soft);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--vp-c-text-2);
    border-bottom: 1px solid var(--vp-c-divider);
  }

  tbody tr:not(.category-row) {
    border-bottom: 1px solid var(--vp-c-divider);

    &:last-child {
      border-bottom: none;
    }
  }

  .sticky-col {
    position: sticky;
    left: 0;
    background: var(--vp-c-bg);
    text-align: left;
    color: var(--vp-c-text-2);
    z-index: 1;
  }

  .category-row .sticky-col.category-cell {
    background: var(--vp-c-bg-soft);
  }

  .value-cell {
    text-align: center;

    &.highlighted {
      background: color-mix(in srgb, var(--vp-c-brand-1) 5%, transparent);
    }

    .value-dash {
      color: var(--vp-c-text-3);
    }

    .value-text {
      font-weight: 500;
      color: var(--vp-c-text-1);
    }
  }
}

/* ---------- faq ---------- */
.faq-section {
  padding: 6rem 1.5rem;
  background: var(--vp-c-bg-soft);

  .faq-inner {
    max-width: 768px;
    margin: 0 auto;

    .section-title {
      margin-bottom: 3rem;
    }
  }

  .faq-list {
    border-top: 1px solid var(--vp-c-divider);
    border-bottom: 1px solid var(--vp-c-divider);
  }

  .faq-item {
    padding: 1.25rem 0;
    cursor: pointer;
    border-bottom: 1px solid var(--vp-c-divider);

    &:last-child {
      border-bottom: none;
    }

    summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 500;
      list-style: none;
      color: var(--vp-c-text-1);

      &::-webkit-details-marker {
        display: none;
      }
    }

    .faq-arrow {
      color: var(--vp-c-text-2);
      transition: transform 0.2s ease;
    }

    &[open] .faq-arrow {
      transform: rotate(180deg);
    }

    p {
      margin: 0.75rem 0 0;
      font-size: 0.875rem;
      color: var(--vp-c-text-2);
      line-height: 1.7;
    }
  }
}

/* ---------- features ---------- */
.features-section {
  padding: 6rem 0;

  .features-title {
    margin-bottom: 4rem;
  }
}

.feature-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  align-items: center;
  margin-bottom: 6rem;

  &:last-child {
    margin-bottom: 0;
  }

  &.reverse .feature-visual {
    order: -1;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    &.reverse .feature-visual {
      order: 0;
    }
  }

  .feature-logo-link {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    text-decoration: none;

    .feature-logo {
      width: 4rem;
      height: 4rem;
      object-fit: contain;
      transition: transform 0.2s ease;
    }

    h3 {
      font-size: 1.875rem;
      font-weight: 700;
      margin: 0;
      color: var(--vp-c-text-1);
      transition: color 0.2s ease;
    }

    &:hover h3 {
      color: var(--vp-c-brand-1);
    }
  }

  .feature-desc {
    font-size: 1.125rem;
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
      margin-bottom: 0.75rem;

      .check {
        margin-right: 0.75rem;
        margin-top: 0.125rem;
      }

      span {
        font-size: 0.875rem;
        color: var(--vp-c-text-1);
        line-height: 1.6;
      }
    }
  }

  .feature-visual {
    background: linear-gradient(
      135deg,
      color-mix(in srgb, var(--vp-c-brand-1) 20%, transparent),
      color-mix(in srgb, var(--vp-c-bg-soft) 60%, transparent)
    );
    border-radius: 1.5rem;
    padding: 2rem;
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
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
}
</style>
