import {defineConfig, type HeadConfig} from 'vitepress'

const icon = '/favicon.ico';
const logo = '/geekfun.png';
const ogImageEn = 'https://www.geekfun.club/og/master-en.png';
const ogImageZh = 'https://www.geekfun.club/og/master-zh.png';
const siteUrl = 'https://www.geekfun.club';
const siteNameEn = 'GEEKFUN';
const siteNameZh = '极客范';
const gaHead: HeadConfig[] = [
    ['script', {async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-ZFVJ89KR9L'}],
    ['script', {}, `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-ZFVJ89KR9L');`]
];

// Auto-detect system language: if the visitor's OS/browser is Chinese and they
// haven't expressed a preference (localStorage `gf-lang`, set when they switch
// language in the nav menu), redirect the English (root) page to its /zh/
// equivalent. Injected into <head> on every page (dev + build) before the app
// mounts, so there is no flash of the wrong language. Note: this must live in
// the `head` array — `transformHead` only runs at build time, not in dev.
const langAutoDetectHead: HeadConfig[] = [['script', {}, `(function () {
  try {
    var path = location.pathname;
    var isZh = path.indexOf('/zh/') === 0 || path === '/zh';
    var pref = localStorage.getItem('gf-lang');
    if (pref === 'zh' && !isZh) {
      location.replace('/zh' + (path.length > 1 ? path : '/'));
      return;
    }
    if (pref) return;
    var nav = (navigator.language || (navigator.languages && navigator.languages[0]) || '').toLowerCase();
    if (nav.indexOf('zh') === 0 && !isZh) {
      location.replace('/zh' + (path.length > 1 ? path : '/'));
    }
  } catch (e) {}
})();`]];

function getPageUrl(page: string) {
    const normalizedPage = page.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '');
    return new URL(normalizedPage, `${siteUrl}/`).toString();
}

function getPageType(page: string) {
    return /^(zh\/)?(blog|news)\//.test(page) ? 'article' : 'website';
}

const sharedThemeConfig = {
    search: {
        provider: 'local' as const
    },
    logo,
    socialLinks: [
        {icon: 'github', link: 'https://github.com/geek-fun'},
        {icon: 'twitter', link: 'https://x.com/geekfun_club'},
        {icon: 'youtube', link: 'https://www.youtube.com/@geekfun-club'}
    ],
};
const titleEn = 'GEEKFUN | Sustainable Software Community';
const titleZh = '极客范 | 可持续的开源软件社区';
const titlePt = 'GEEKFUN | Comunidade de Software Sustentável';
const titleJa = 'GEEKFUN | 持続可能なソフトウェアコミュニティ';
const titleKo = 'GEEKFUN | 지속 가능한 소프트웨어 커뮤니티';
const titleEs = 'GEEKFUN | Comunidad de Software Sostenible';
const descEn = 'GEEKFUN is an open-source community focused on building sustainable software solutions. We empower developers to collaborate on open-source projects like DocKit (MongoDB, Elasticsearch, OpenSearch, DynamoDB, EasySearch GUI) and explore serverless technologies, including Serverless Insight, Elasticsearch, OpenSearch, and more. Join us in shaping the future of open-source development!';
const descZh = '极客范是一个软件社区，致力于构建可持续的开源软件和服务';
const descPt = 'GEEKFUN é uma comunidade open-source dedicada a construir soluções de software sustentáveis, com ferramentas como o DocKit (GUI para MongoDB, Elasticsearch, OpenSearch e DynamoDB) e o SqlKit (cliente SQL para mais de 50 bancos de dados).';
const descJa = 'GEEKFUN は、持続可能なソフトウェアの構築に取り組むオープンソースコミュニティです。DocKit(MongoDB、Elasticsearch、OpenSearch、DynamoDB 向け GUI)や SqlKit(50 以上のデータベースに対応する SQL クライアント)などのツールを提供しています。';
const descKo = 'GEEKFUN은 지속 가능한 소프트웨어 구축에 힘쓰는 오픈소스 커뮤니티입니다. DocKit(MongoDB, Elasticsearch, OpenSearch, DynamoDB GUI)과 SqlKit(50개 이상 데이터베이스용 SQL 클라이언트) 같은 도구를 제공합니다.';
const descEs = 'GEEKFUN es una comunidad open-source dedicada a construir software sostenible, con herramientas como DocKit (GUI para MongoDB, Elasticsearch, OpenSearch y DynamoDB) y SqlKit (cliente SQL para más de 50 bases de datos).';
const docsSidebarEn = [
    {
        text: 'DocKit',
        items: [
            {text: 'DocKit overview', link: '/docs/dockit/'},
            {text: 'Installation', link: '/docs/dockit/installation'},
            {text: 'Connect to server', link: '/docs/dockit/connect-to-server'},
            {text: 'Shortcuts', link: '/docs/dockit/shortcut'},
            {text: 'Manage Elasticsearch cluster', link: '/docs/dockit/manage-elasticsearch-cluster'},
            {text: 'Agentic Data Studio', link: '/docs/dockit/agentic-datastudio'}
        ]
    },
    {
        text: 'Data Studio Agent',
        items: [
            {text: 'Overview', link: '/docs/data-studio-agent/'},
            {text: 'Quick Start', link: '/docs/data-studio-agent/quick-start'},
            {text: 'Tool reference', link: '/docs/data-studio-agent/tools'},
            {text: 'Safety', link: '/docs/data-studio-agent/safety'}
        ]
    }
];
const docsSidebarZh = [
    {
        text: 'DocKit',
        items: [
            {text: 'DocKit 概览', link: '/zh/docs/dockit/'},
            {text: '安装指南', link: '/zh/docs/dockit/installation'},
            {text: '连接服务器', link: '/zh/docs/dockit/connect-to-server'},
            {text: '快捷键', link: '/zh/docs/dockit/shortcut'},
            {text: '管理 Elasticsearch 集群', link: '/zh/docs/dockit/manage-elasticsearch-cluster'},
            {text: 'Agentic Data Studio', link: '/zh/docs/dockit/agentic-datastudio'}
        ]
    },
    {
        text: 'Data Studio Agent',
        items: [
            {text: '概览', link: '/zh/docs/data-studio-agent/'},
            {text: '快速开始', link: '/zh/docs/data-studio-agent/quick-start'},
            {text: '工具参考', link: '/zh/docs/data-studio-agent/tools'},
            {text: '安全', link: '/zh/docs/data-studio-agent/safety'}
        ]
    }
];

export default defineConfig({
    lastUpdated: true,
    cleanUrls: true,
    outDir: '../dist',
    cacheDir: '../cache',
    head: [...gaHead, ...langAutoDetectHead],
    markdown: {
        image: {
            lazyLoading: true
        }
    },
    locales: {
        root: {
            label: 'English',
            title: titleEn,
            lang: 'en',
            description: descEn,
            head: [
                ['link', {rel: 'icon', href: icon}],
                ['meta', {
                    name: 'keywords',
                    content: 'geekfun, geek-fun, open source community, open source software, software sustainability, DocKit, MongoDB, serverless, serverless insight, serverless architecture, Elasticsearch, OpenSearch, EasySearch, ZincSearch, developer community, collaborative software development, sustainable software projects'
                }],
                ['meta', {name: 'baidu-site-verification', content: 'codeva-owQvVYl3h3'}],
                ['meta', {name: 'msvalidate.01', content: '56AE1305771756AAB07967736F936525'}],
                ['script', {type: 'application/ld+json'}, JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "GEEKFUN",
                    "url": "https://www.geekfun.club",
                    "logo": "https://www.geekfun.club/geekfun.png",
                    "sameAs": [
                        "https://github.com/geek-fun",
                        "https://x.com/geekfun_club",
                        "https://www.youtube.com/@geekfun-club"
                    ]
                })],
            ],
            themeConfig: {
                ...sharedThemeConfig,
                siteTitle: 'GEEKFUN',
                sidebar: {
                    '/docs/': docsSidebarEn
                },
nav: [
                     {
                         text: 'Home',
                         link: '/',
                     },
                     {
                         text: 'Download',
                         link: '/download',
                     },
                     {
                         text: 'Pricing',
                         link: '/pricing',
                     },
                     {
                         text: 'Docs',
                         link: '/docs',
                     },
                     {
                         text: 'Blog',
                         link: '/blog',
                     },
                     {
                         text: 'News',
                         link: '/news',
                     },
                 ]
            }
        },
        zh: {
            label: "简体中文",
            lang: 'zh',
            title: titleZh,
            description: descZh,
            head: [
                ['link', {rel: 'icon', href: icon}],
                ['meta', {
                    name: 'keywords',
                    content: '极客范,极客乐园, geekfun, 开源社区, 开源软件, 软件可持续性, DocKit, MongoDB, serverless, serverless insight, 无服务器, serverless architecture, 无服务器架构, Elasticsearch, OpenSearch, EasySearch, ZincSearch, 开发者社区, 协作软件开发, 可持续软件项目'
                }],
                ['meta', {name: 'baidu-site-verification', content: 'codeva-owQvVYl3h3'}],
                ['meta', {name: 'msvalidate.01', content: '56AE1305771756AAB07967736F936525'}],
                ['script', {type: 'application/ld+json'}, JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "极客范",
                    "alternateName": "GEEKFUN",
                    "url": "https://www.geekfun.club",
                    "logo": "https://www.geekfun.club/geekfun.png",
                    "sameAs": [
                        "https://github.com/geek-fun",
                        "https://x.com/geekfun_club",
                        "https://www.youtube.com/@geekfun-club"
                    ]
                })],
            ],
            themeConfig: {
                ...sharedThemeConfig,
                siteTitle: '极客范',
                sidebar: {
                    '/zh/docs/': docsSidebarZh
                },
nav: [
                      {
                          text: '首页',
                          link: '/zh/',
                      },
                      {
                          text: '下载',
                          link: '/zh/download',
                      },
                      {
                          text: '定价',
                          link: '/zh/pricing',
                      },
                      {
                          text: '文档',
                          link: '/zh/docs',
                      },
                      {
                          text: '博客',
                          link: '/zh/blog',
                      },
                      {
                          text: '新闻',
                          link: '/zh/news',
                      }
                 ]
            }
        },
        'pt-BR': {
            label: 'Português (BR)',
            lang: 'pt-BR',
            title: titlePt,
            description: descPt,
            head: [['link', {rel: 'icon', href: icon}]],
            themeConfig: {
                ...sharedThemeConfig,
                siteTitle: 'GEEKFUN',
                nav: [
                    {text: 'Download', link: '/pt-BR/download'},
                    {text: 'Preços', link: '/pt-BR/pricing'},
                    {text: 'DocKit', link: '/pt-BR/products/dockit/'},
                    {text: 'Docs', link: '/docs'},
                ]
            }
        },
        ja: {
            label: '日本語',
            lang: 'ja',
            title: titleJa,
            description: descJa,
            head: [['link', {rel: 'icon', href: icon}]],
            themeConfig: {
                ...sharedThemeConfig,
                siteTitle: 'GEEKFUN',
                nav: [
                    {text: 'ダウンロード', link: '/ja/download'},
                    {text: '料金', link: '/ja/pricing'},
                    {text: 'DocKit', link: '/ja/products/dockit/'},
                    {text: 'Docs', link: '/docs'},
                ]
            }
        },
        ko: {
            label: '한국어',
            lang: 'ko',
            title: titleKo,
            description: descKo,
            head: [['link', {rel: 'icon', href: icon}]],
            themeConfig: {
                ...sharedThemeConfig,
                siteTitle: 'GEEKFUN',
                nav: [
                    {text: '다운로드', link: '/ko/download'},
                    {text: '가격', link: '/ko/pricing'},
                    {text: 'DocKit', link: '/ko/products/dockit/'},
                    {text: 'Docs', link: '/docs'},
                ]
            }
        },
        es: {
            label: 'Español',
            lang: 'es',
            title: titleEs,
            description: descEs,
            head: [['link', {rel: 'icon', href: icon}]],
            themeConfig: {
                ...sharedThemeConfig,
                siteTitle: 'GEEKFUN',
                nav: [
                    {text: 'Descargar', link: '/es/download'},
                    {text: 'Precios', link: '/es/pricing'},
                    {text: 'DocKit', link: '/es/products/dockit/'},
                    {text: 'Docs', link: '/docs'},
                ]
            }
        },
    },
    sitemap: {
        hostname: 'https://www.geekfun.club',
        transformItems(items) {
            return items.filter((item) => item.url !== '404' && item.url !== '/404');
        }
    },
    transformHead({page, title, description, pageData}) {
        const isZhPage = page.startsWith('zh/');
        const pageUrl = getPageUrl(page);
        const siteName = isZhPage ? siteNameZh : siteNameEn;
        const masterOg = isZhPage ? ogImageZh : ogImageEn;
        const ogImageUrl = pageData?.frontmatter?.ogImage ?? masterOg;
        const pageType = getPageType(page);
        const ogImageAlt = isZhPage ? '极客范 - 可持续的开源软件社区' : 'GEEKFUN - Sustainable Open Source Community';
        const pageLocale = page.split('/')[0] ?? '';
        const ogLocale = ({zh: 'zh_CN', 'pt-BR': 'pt_BR', ja: 'ja_JP', ko: 'ko_KR', es: 'es_ES'} as Record<string, string>)[pageLocale] ?? 'en_US';
        const ogAlternateLocale = ogLocale === 'en_US' ? 'zh_CN' : 'en_US';

        const head: HeadConfig[] = [
            ['meta', {property: 'og:title', content: title}],
            ['meta', {property: 'og:description', content: description}],
            ['meta', {property: 'og:image', content: ogImageUrl}],
            ['meta', {property: 'og:image:width', content: '1200'}],
            ['meta', {property: 'og:image:height', content: '630'}],
            ['meta', {property: 'og:image:alt', content: ogImageAlt}],
            ['meta', {property: 'og:url', content: pageUrl}],
            ['meta', {property: 'og:site_name', content: siteName}],
            ['meta', {property: 'og:type', content: pageType}],
            ['meta', {property: 'og:locale', content: ogLocale}],
            ['meta', {property: 'og:locale:alternate', content: ogAlternateLocale}],
            ['meta', {name: 'twitter:card', content: 'summary_large_image'}],
            ['meta', {property: 'twitter:title', content: title}],
            ['meta', {property: 'twitter:description', content: description}],
            ['meta', {property: 'twitter:image', content: ogImageUrl}],
        ];

        if (pageType === 'article') {
            const pubDate = pageData?.frontmatter?.date;
            if (pubDate) {
                head.push(['meta', {property: 'article:published_time', content: pubDate}]);
                head.push(['meta', {property: 'article:modified_time', content: pubDate}]);
            }
            head.push(['meta', {property: 'article:author', content: 'https://www.geekfun.club'}]);
            if (page.startsWith('blog/') || page.startsWith('zh/blog/')) {
                head.push(['meta', {property: 'article:tag', content: 'blog'}]);
            } else if (page.startsWith('news/') || page.startsWith('zh/news/')) {
                head.push(['meta', {property: 'article:tag', content: 'release'}]);
            }
        }

        return head;
    },
    vite: {
        build: {
            chunkSizeWarningLimit: 1500
        }
    }
});
