import {defineConfig, type HeadConfig} from 'vitepress'

const icon = '/favicon.ico';
const logo = '/geekfun.png';
const ogImage = 'https://www.geekfun.club/og-image.png';
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
        // add x social links
        {icon: 'twitter', link: 'https://x.com/Blankll31075'},
        {icon: 'youtube', link: 'https://www.youtube.com/@geekfun-club'}
    ],
};
const titleEn = 'GEEKFUN | Sustainable Software Community';
const titleZh = '极客范 | 可持续的开源软件社区';
const descEn = 'GEEKFUN is an open-source community focused on building sustainable software solutions. We empower developers to collaborate on open-source projects like DocKit and explore serverless technologies, including Serverless Insight, Elasticsearch, OpenSearch, and more. Join us in shaping the future of open-source development!';
const descZh = '极客范是一个软件社区，致力于构建可持续的开源软件和服务';
const docsSidebarEn = [
    {
        text: 'Docs',
        items: [
            {text: 'DocKit overview', link: '/docs/dockit/'},
            {text: 'Installation', link: '/docs/dockit/installation'},
            {text: 'Connect to server', link: '/docs/dockit/connect-to-server'},
            {text: 'Shortcuts', link: '/docs/dockit/shortcut'},
            {text: 'Manage Elasticsearch cluster', link: '/docs/dockit/manage-elasticsearch-cluster'}
        ]
    }
];
const docsSidebarZh = [
    {
        text: '文档',
        items: [
            {text: 'DocKit 概览', link: '/zh/docs/dockit/'},
            {text: '安装指南', link: '/zh/docs/dockit/installation'},
            {text: '连接服务器', link: '/zh/docs/dockit/connect-to-server'},
            {text: '快捷键', link: '/zh/docs/dockit/shortcut'},
            {text: '管理 Elasticsearch 集群', link: '/zh/docs/dockit/manage-elasticsearch-cluster'}
        ]
    }
];

export default defineConfig({
    lastUpdated: true,
    cleanUrls: true,
    outDir: '../dist',
    cacheDir: '../cache',
    head: [...gaHead],
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
                    content: 'geekfun, geek-fun, open source community, open source software, software sustainability, DocKit, serverless, serverless insight, serverless architecture, Elasticsearch, OpenSearch, ZincSearch, developer community, collaborative software development, sustainable software projects'
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
                        "https://x.com/Blankll31075",
                        "https://www.youtube.com/@geekfun-club"
                    ]
                })],
            ],
            themeConfig: {
                ...sharedThemeConfig,
                siteTitle: 'GEEKFUN',
                sidebar: {
                    '/blog/': docsSidebarEn,
                    '/docs/': docsSidebarEn
                },
                nav: [
                    {
                        text: 'Home',
                        link: '/',
                    },
                     {
                         text: 'Products',
                         link: '/products',
                     },
                     {
                         text: 'Docs',
                         link: '/docs',
                     },
                     {
                         text: 'Download',
                         link: '/download',
                     },
                     {
                         text: 'News',
                         link: '/news',
                     },
                     {
                         text: 'Blog',
                         link: '/blog',
                     },
                     {
                         text: 'About',
                         link: '/about',
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
                    content: '极客范,极客乐园, geekfun, 开源社区, 开源软件, 软件可持续性, DocKit, serverless, serverless insight, 无服务器, serverless architecture, 无服务器架构, Elasticsearch, OpenSearch, ZincSearch, 开发者社区, 协作软件开发, 可持续软件项目'
                }],
                ['meta', {name: 'baidu-site-verification', content: 'codeva-owQvVYl3h3'}],
                ['meta', {name: 'msvalidate.01', content: '56AE1305771756AAB07967736F936525'}],
            ],
            themeConfig: {
                ...sharedThemeConfig,
                siteTitle: '极客范',
                sidebar: {
                    '/zh/blog/': docsSidebarZh,
                    '/zh/docs/': docsSidebarZh
                },
nav: [
                     {
                         text: '首页',
                         link: '/zh/',
                     },
                      {
                          text: '产品',
                          link: '/zh/products',
                      },
                      {
                          text: '文档',
                          link: '/zh/docs',
                      },
                      {
                          text: '下载',
                          link: '/zh/download',
                      },
                      {
                          text: '新闻',
                          link: '/zh/news',
                      },
                      {
                          text: '博客',
                          link: '/zh/blog',
                      },
                      {
                          text: '关于',
                          link: '/zh/about',
                      }
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
    transformHead({page, title, description}) {
        const isZhPage = page.startsWith('zh/');
        const pageUrl = getPageUrl(page);
        const siteName = isZhPage ? siteNameZh : siteNameEn;

        return [
            ['meta', {property: 'og:title', content: title}],
            ['meta', {property: 'og:description', content: description}],
            ['meta', {property: 'og:image', content: ogImage}],
            ['meta', {property: 'og:url', content: pageUrl}],
            ['meta', {property: 'og:site_name', content: siteName}],
            ['meta', {property: 'og:type', content: getPageType(page)}],
            ['meta', {property: 'og:locale', content: isZhPage ? 'zh_CN' : 'en_US'}],
            ['meta', {name: 'twitter:card', content: 'summary_large_image'}],
            ['meta', {name: 'twitter:title', content: title}],
            ['meta', {name: 'twitter:description', content: description}],
            ['meta', {name: 'twitter:image', content: ogImage}]
        ];
    },
    vite: {
        build: {
            chunkSizeWarningLimit: 1500
        }
    }
});
