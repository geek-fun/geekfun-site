import {defineConfig} from 'vitepress'

const icon = '/favicon.ico';
const sharedThemeConfig = {
    search: {
        provider: 'local'
    },
    logo: icon,
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
    locales: {
        root: {
            label: 'English',
            title: titleEn,
            lang: 'en',
            description: descEn,
            head: [
                ['link', {rel: 'icon', icon}],
                ['meta', {name: 'description', content: descEn}],
                ['meta', {
                    name: 'keywords',
                    content: 'geekfun, geek-fun, open source community, open source software, software sustainability, DocKit, serverless, serverless insight, serverless architecture, Elasticsearch, OpenSearch, ZincSearch, developer community, collaborative software development, sustainable software projects'
                }],
                ['meta', {property: 'og:title', content: titleEn}],
                ['meta', {property: 'og:description', content: descEn}],
                ['meta', {property: 'og:image', content: icon}],
                ['meta', {property: 'og:url', content: '/'}],
                ['meta', {property: 'og:site_name', content: titleEn}],
                ['meta', {name: 'twitter:card', content: icon}],
                ['meta', {name: 'twitter:title', content: titleEn}],
                ['meta', {name: 'twitter:description', content: titleEn}],
                ['meta', {name: 'twitter:image', content: icon}],
                ['meta', {name: 'baidu-site-verification', content: 'codeva-owQvVYl3h3'}],
                ['meta', {name: 'msvalidate.01', content: '56AE1305771756AAB07967736F936525'}],
                ['meta', {name: 'google-adsense-account', content: 'ca-pub-6086289782076652'}],
                ['script', {
                    async: '',
                    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6086289782076652',
                    crossorigin: 'anonymous'
                }],
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
                        link: '/products/',
                    },
                    {
                        text: 'Docs',
                        link: '/docs/',
                    },
                    {
                        text: 'News',
                        link: '/news/',
                    },
                    {
                        text: 'Blog',
                        link: '/blog/',
                    },
                    // {
                    //     text: 'Members',
                    //     link: '/members/',
                    // },
                    {
                        text: 'Donation',
                        link: '/donation/',
                    },
                    {
                        text: 'About',
                        link: '/about/',
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
                ['link', {rel: 'icon', icon}],
                ['meta', {name: 'description', content: descZh}],
                ['meta', {
                    name: 'keywords',
                    content: '极客范,极客乐园, geekfun, 开源社区, 开源软件, 软件可持续性, DocKit, serverless, serverless insight, 无服务器, serverless architecture, 无服务器架构, Elasticsearch, OpenSearch, ZincSearch, 开发者社区, 协作软件开发, 可持续软件项目'
                }],
                ['meta', {property: 'og:title', content: titleZh}],
                ['meta', {property: 'og:description', content: descZh}],
                ['meta', {property: 'og:image', content: icon}],
                ['meta', {property: 'og:url', content: '/'}],
                ['meta', {property: 'og:site_name', content: titleZh}],
                ['meta', {name: 'twitter:card', content: icon}],
                ['meta', {name: 'twitter:title', content: titleZh}],
                ['meta', {name: 'twitter:description', content: descZh}],
                ['meta', {name: 'twitter:image', content: icon}],
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
                        link: '/zh/products/',
                    },
                    {
                        text: '文档',
                        link: '/zh/docs/',
                    },
                    {
                        text: '新闻',
                        link: '/zh/news/',
                    },
                    {
                        text: '博客',
                        link: '/zh/blog/',
                    },
                    {
                        text: '捐赠',
                        link: '/zh/donation/',
                    },
                    {
                        text: '关于',
                        link: '/zh/about/',
                    }
                ]
            }
        },
    },
    sitemap: {
        hostname: 'https://www.geekfun.club'
    }
});
