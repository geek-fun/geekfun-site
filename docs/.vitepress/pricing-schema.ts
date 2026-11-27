import { pricingEs } from './theme/components/pricing-es'
import { pricingJa } from './theme/components/pricing-ja'
import { pricingKo } from './theme/components/pricing-ko'
import { pricingPt } from './theme/components/pricing-pt'

type FaqItem = { question: string; answer: string }
type PricingFaqSource = {
  payment: { waffo: string }
  items: FaqItem[]
}

const enFaq: PricingFaqSource = {
  payment: {
    waffo:
      'We accept all major credit cards (Visa, MasterCard, American Express). Payments are processed by Waffo (Waffo.com Limited), our Merchant of Record: Waffo is the legal seller of record for the transaction and handles payment collection, tax compliance, invoices, and refunds.',
  },
  items: [
    {
      question: "What's included in GEEKFUN Data Studio?",
      answer:
        'GEEKFUN Data Studio includes DocKit (NoSQL database GUI for Elasticsearch, OpenSearch, DynamoDB), SqlKit (SQL database GUI for PostgreSQL, MySQL, MSSQL, etc.), and Data Studio MCP (an MCP server that lets AI coding agents like Claude Code and Cursor securely access your databases). One subscription gives you access to all premium features across all three tools.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer:
        'Yes, you can cancel your subscription at any time. Because we offer a 7-day free trial before any payment is due, payments are non-refundable once charged. After cancellation you keep access to all paid features until the end of the current billing period. See our Refund Policy for details.',
    },
    {
      question: 'How does the AI Assistant work?',
      answer:
        'The AI Assistant is available in both DocKit and SqlKit for Ultimate users, with custom agent & LLM configuration (bring your own model quota). It helps with query optimization, data analysis, and troubleshooting.',
    },
    { question: 'What payment methods do you accept?', answer: '' },
    {
      question: 'Is my data secure?',
      answer:
        'Absolutely. We use industry-standard encryption and security practices. Your database credentials and data never leave your machine.',
    },
    {
      question: 'When will Enterprise plan be available?',
      answer:
        'We\'re working on the Enterprise plan and expect to launch it soon. Click "Notify When Available" to be notified when it\'s ready.',
    },
  ],
}

const zhFaq: PricingFaqSource = {
  payment: {
    waffo:
      '我们接受所有主要信用卡（Visa、MasterCard、American Express）。款项由 Waffo（Waffo.com Limited，我们的 Merchant of Record，登记卖方）处理：Waffo 是该交易法律意义上的卖方，负责收款、税务合规、开票与退款。',
  },
  items: [
    {
      question: 'GEEKFUN Data Studio 包含哪些内容？',
      answer:
        'GEEKFUN Data Studio 包括 DocKit（用于 Elasticsearch、OpenSearch、DynamoDB 的 NoSQL 数据库 GUI）、SqlKit（用于 PostgreSQL、MySQL、MSSQL 等的 SQL 数据库 GUI）和 Data Studio MCP（让 Claude Code、Cursor 等 AI 编程智能体安全访问数据库的 MCP 服务器）。一个订阅即可获得三款工具的所有高级功能。',
    },
    {
      question: '我可以随时取消订阅吗？',
      answer:
        '是的，您可以随时取消订阅。由于付款前我们提供 7 天免费试用，付款完成后所有款项均不予退款。取消后您可继续使用全部付费功能至当前计费周期结束。详情请参阅退款政策。',
    },
    {
      question: 'AI 助手如何工作？',
      answer:
        '旗舰版可在 DocKit 和 SqlKit 中使用 AI 助手，支持自定义 Agent 与 LLM 配置（自带模型额度）。AI 助手可帮助您进行查询优化、数据分析和故障排除。',
    },
    { question: '你们接受哪些支付方式？', answer: '' },
    {
      question: '我的数据安全吗？',
      answer:
        '绝对安全。我们使用行业标准加密和安全实践。您的数据库凭据和数据永远不会离开您的设备。',
    },
    {
      question: '企业版什么时候推出？',
      answer: '我们正在开发企业版，预计很快推出。点击"有货时通知我"获取推出通知。',
    },
  ],
}

const faqByLocale: Record<string, PricingFaqSource> = {
  en: enFaq,
  zh: zhFaq,
  es: pricingEs.faq,
  ja: pricingJa.faq,
  ko: pricingKo.faq,
  'pt-BR': pricingPt.faq,
}

type OfferLabels = {
  description: string
  community: string
  ultimateMonthly: string
  ultimateYearly: string
}

const offerLabelsByLocale: Record<string, OfferLabels> = {
  en: {
    description:
      'GEEKFUN Data Studio bundles DocKit (NoSQL GUI), SqlKit (SQL GUI), and Data Studio Agent (MCP server) under one subscription.',
    community: 'Community (Free forever)',
    ultimateMonthly: 'Ultimate Monthly',
    ultimateYearly: 'Ultimate Yearly',
  },
  zh: {
    description:
      'GEEKFUN Data Studio 包含 DocKit（NoSQL GUI）、SqlKit（SQL GUI）与 Data Studio Agent（MCP 服务器），一个订阅通用三款工具。',
    community: '社区版（永久免费）',
    ultimateMonthly: '旗舰版月付',
    ultimateYearly: '旗舰版年付',
  },
  es: {
    description:
      'GEEKFUN Data Studio reúne DocKit (GUI NoSQL), SqlKit (GUI SQL) y Data Studio Agent (servidor MCP) en una sola suscripción.',
    community: 'Community (Gratis para siempre)',
    ultimateMonthly: 'Ultimate Mensual',
    ultimateYearly: 'Ultimate Anual',
  },
  ja: {
    description:
      'GEEKFUN Data Studio は DocKit（NoSQL GUI）、SqlKit（SQL GUI）、Data Studio Agent（MCP サーバー）を 1 つのサブスクリプションで利用できます。',
    community: 'Community（永久無料）',
    ultimateMonthly: 'Ultimate 月払い',
    ultimateYearly: 'Ultimate 年払い',
  },
  ko: {
    description:
      'GEEKFUN Data Studio는 DocKit(NoSQL GUI), SqlKit(SQL GUI), Data Studio Agent(MCP 서버)를 하나의 구독으로 제공합니다.',
    community: 'Community(영구 무료)',
    ultimateMonthly: 'Ultimate 월간',
    ultimateYearly: 'Ultimate 연간',
  },
  'pt-BR': {
    description:
      'O GEEKFUN Data Studio reúne DocKit (GUI NoSQL), SqlKit (GUI SQL) e Data Studio Agent (servidor MCP) em uma única assinatura.',
    community: 'Community (Grátis para sempre)',
    ultimateMonthly: 'Ultimate Mensal',
    ultimateYearly: 'Ultimate Anual',
  },
}

export const getPricingSchemas = (lang: string, pageUrl: string): Record<string, unknown>[] => {
  const faq = faqByLocale[lang] ?? enFaq
  const labels = offerLabelsByLocale[lang] ?? offerLabelsByLocale.en

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'GEEKFUN Data Studio',
    description: labels.description,
    url: pageUrl,
    inLanguage: lang,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'macOS, Windows, Linux',
    author: {
      '@type': 'Organization',
      name: 'GEEKFUN',
      url: 'https://www.geekfun.club',
    },
    offers: [
      {
        '@type': 'Offer',
        name: labels.community,
        price: '0',
        priceCurrency: 'USD',
        url: pageUrl,
      },
      {
        '@type': 'Offer',
        name: labels.ultimateMonthly,
        price: '9.90',
        priceCurrency: 'USD',
        url: pageUrl,
      },
      {
        '@type': 'Offer',
        name: labels.ultimateYearly,
        price: '99.00',
        priceCurrency: 'USD',
        url: pageUrl,
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: faq.items.map((item, index) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: index === 3 ? faq.payment.waffo : item.answer,
      },
    })),
  }

  return [softwareSchema, faqSchema]
}
