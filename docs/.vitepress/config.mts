import {defineConfig, type HeadConfig} from 'vitepress'
import {blogDate, isBlogArticle, type BlogFrontmatter} from './blog'
import {getDocsSidebar} from './docs-navigation'
import {getLocalizedDocs, localizedDocs} from './docs-locales'
import {getPricingSchemas} from './pricing-schema'
import {getSiteNavigation} from './site-navigation'
import {DATA_STUDIO_AGENT_VERSION, DOCKIT_VERSION, SQLKIT_VERSION} from './theme/version'

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

// Omitting VitePress locale labels disables its path-based language switcher.
const languages = [
    {prefix: '', lang: 'en', label: 'English'},
    {prefix: 'zh/', lang: 'zh', label: '简体中文'},
    ...Object.entries(localizedDocs).map(([lang, {language}]) => ({prefix: `${lang}/`, lang, label: language})),
];

function getPagePath(page: string): string {
    return '/' + page.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '');
}

function getPageUrl(page: string) {
    return new URL(getPagePath(page), siteUrl).href;
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
const localizedTheme = (lang: keyof typeof localizedDocs) => {
    const copy = localizedDocs[lang];
    return {
        ...sharedThemeConfig,
        siteTitle: 'GEEKFUN',
        nav: getSiteNavigation(lang),
        sidebar: getDocsSidebar(lang),
        outline: {label: copy.outline},
        sidebarMenuLabel: copy.sidebar,
        docFooter: {prev: copy.previous, next: copy.next},
    };
};
const titlePt = 'GEEKFUN | Comunidade de Software Sustentável';
const titleJa = 'GEEKFUN | 持続可能なソフトウェアコミュニティ';
const titleKo = 'GEEKFUN | 지속 가능한 소프트웨어 커뮤니티';
const titleEs = 'GEEKFUN | Comunidad de Software Sostenible';
const descEn = 'GEEKFUN builds open-source desktop database tools. SqlKit is a SQL GUI for PostgreSQL, MySQL, SQL Server, and Oracle. DocKit is a GUI for MongoDB, Elasticsearch, OpenSearch, DynamoDB, and EasySearch.';
const descZh = '极客范提供开源桌面数据库工具。SqlKit 支持 PostgreSQL、MySQL、SQL Server 和 Oracle，DocKit 支持 MongoDB、Elasticsearch、OpenSearch、DynamoDB 和 EasySearch。';
const descPt = 'A GEEKFUN é uma comunidade de código aberto que desenvolve software sustentável. O DocKit é uma interface gráfica para MongoDB, Elasticsearch, OpenSearch e DynamoDB. O SqlKit é um cliente SQL para PostgreSQL, MySQL, SQL Server, Oracle, SQLite e outros bancos de dados.';
const descJa = 'GEEKFUN は持続可能なソフトウェアを開発するオープンソースコミュニティです。DocKit は MongoDB、Elasticsearch、OpenSearch、DynamoDB 向けの GUI です。SqlKit は PostgreSQL、MySQL、SQL Server、Oracle、SQLite などに対応する SQL クライアントです。';
const descKo = 'GEEKFUN은 지속 가능한 소프트웨어를 만드는 오픈소스 커뮤니티입니다. DocKit은 MongoDB, Elasticsearch, OpenSearch, DynamoDB용 GUI입니다. SqlKit은 PostgreSQL, MySQL, SQL Server, Oracle, SQLite 등을 지원하는 SQL 클라이언트입니다.';
const descEs = 'GEEKFUN es una comunidad de código abierto que desarrolla software sostenible. DocKit es una interfaz gráfica para MongoDB, Elasticsearch, OpenSearch y DynamoDB. SqlKit es un cliente SQL para PostgreSQL, MySQL, SQL Server, Oracle, SQLite y otras bases de datos.';

const organizationJsonLdEn = JSON.stringify({
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
});
const localizedHead: HeadConfig[] = [
    ['link', {rel: 'icon', href: icon}],
    ['script', {type: 'application/ld+json'}, organizationJsonLdEn],
];

export default defineConfig({
    lastUpdated: true,
    cleanUrls: true,
    outDir: '../dist',
    cacheDir: '../cache',
    head: gaHead,
    markdown: {
        image: {
            lazyLoading: true
        },
        config(md) {
            // Keep the Markdown heading and its anchor available to local search and the article outline.
            for (const rule of ['heading_open', 'heading_close'] as const) {
                const renderHeading = md.renderer.rules[rule];
                md.renderer.rules[rule] = (tokens, index, options, env, renderer) => {
                    const heading = renderHeading?.(tokens, index, options, env, renderer)
                        ?? renderer.renderToken(tokens, index, options);
                    if (tokens[index].tag !== 'h1' || !isBlogArticle(env.relativePath ?? '')
                        || tokens.findIndex((token) => token.type === rule && token.tag === 'h1') !== index) {
                        return heading;
                    }
                    return rule === 'heading_open'
                        ? `<BlogArticleHeader>\n${heading}`
                        : `${heading}</BlogArticleHeader>\n`;
                };
            }
        }
    },
    locales: {
        root: {
            title: titleEn,
            titleTemplate: ':title | GEEKFUN',
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
                ['script', {type: 'application/ld+json'}, organizationJsonLdEn],
            ],
            themeConfig: {
                ...sharedThemeConfig,
                siteTitle: 'GEEKFUN',
                sidebar: getDocsSidebar('en'),
                nav: getSiteNavigation('en'),
            }
        },
        zh: {
            lang: 'zh',
            title: titleZh,
            titleTemplate: ':title | 极客范',
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
                outline: {label: '本页内容'},
                returnToTopLabel: '返回顶部',
                sidebar: getDocsSidebar('zh'),
                sidebarMenuLabel: '文档目录',
                nav: getSiteNavigation('zh'),
            }
        },
        'pt-BR': {
            lang: 'pt-BR',
            title: titlePt,
            titleTemplate: ':title | GEEKFUN',
            description: descPt,
            head: localizedHead,
            themeConfig: localizedTheme('pt-BR'),
        },
        ja: {
            lang: 'ja',
            title: titleJa,
            titleTemplate: ':title | GEEKFUN',
            description: descJa,
            head: localizedHead,
            themeConfig: localizedTheme('ja'),
        },
        ko: {
            lang: 'ko',
            title: titleKo,
            titleTemplate: ':title | GEEKFUN',
            description: descKo,
            head: localizedHead,
            themeConfig: localizedTheme('ko'),
        },
        es: {
            lang: 'es',
            title: titleEs,
            titleTemplate: ':title | GEEKFUN',
            description: descEs,
            head: localizedHead,
            themeConfig: localizedTheme('es'),
        },
    },
    sitemap: {
        hostname: 'https://www.geekfun.club',
        transformItems(items) {
            return items
                .filter((item) => item.url !== '404' && item.url !== '/404')
                .map((item) => {
                    if (!item.links || item.links.length < 2) return item;
                    const english = item.links.find((link) => link.lang === 'en');
                    if (!english || item.links.some((link) => link.lang === 'x-default')) return item;
                    return {
                        ...item,
                        links: [...item.links, {lang: 'x-default', url: english.url}],
                    };
                });
        }
    },
    transformPageData(pageData, {siteConfig}) {
        const {relativePath} = pageData;
        let {frontmatter, titleTemplate} = pageData;
        const pages = new Set(siteConfig.pages.map((page) => siteConfig.rewrites.map[page] || page));
        if (!pages.has(relativePath)) return;

        const prefix = languages.find(({prefix}) => prefix && relativePath.startsWith(prefix))?.prefix ?? '';
        const lang = prefix ? prefix.slice(0, -1) : 'en';
        const path = relativePath.slice(prefix.length);
        const pageUrl = getPageUrl(relativePath);
        const languageLinks = languages
            .filter(({prefix}) => pages.has(prefix + path))
            .map(({prefix, lang, label}) => ({lang, label, href: getPagePath(prefix + path)}));

        let head: HeadConfig[] = (frontmatter.head ?? []).filter(([tag, attributes]: HeadConfig) =>
            tag !== 'link' || attributes.rel !== 'alternate' || !attributes.hreflang
        );
        if (languageLinks.length > 1) {
            for (const {lang, href} of languageLinks) {
                head.push(['link', {rel: 'alternate', hreflang: lang, href: new URL(href, siteUrl).href}]);
            }
            const english = languageLinks.find(({lang}) => lang === 'en');
            if (english) {
                head.push(['link', {rel: 'alternate', hreflang: 'x-default', href: new URL(english.href, siteUrl).href}]);
            }
        }

        const hasCanonical = head.some(([tag, attrs]) => tag === 'link' && attrs.rel === 'canonical');
        if (!hasCanonical) head.push(['link', {rel: 'canonical', href: pageUrl}]);

        if (
            titleTemplate === undefined &&
            typeof frontmatter.title === 'string' &&
            (/geekfun|极客范/i.test(frontmatter.title) || frontmatter.title.includes('|'))
        ) {
            titleTemplate = false;
        }

        const guide = path.match(/^docs\/(sqlkit|dockit)\/.*\.md$/)?.[1];
        const productSection = guide ?? path.match(/^products\/(sqlkit|dockit)\/.*\.md$/)?.[1];
        if (productSection) {
            const imageLanguage = lang === 'zh' ? 'zh' : 'en';
            const app = productSection === 'sqlkit' ? 'SqlKit' : 'DocKit';
            const nextFrontmatter = {...frontmatter};
            if (guide && titleTemplate === undefined) {
                titleTemplate = false;
            }
            if (!nextFrontmatter.ogImage) {
                nextFrontmatter.ogImage = `${siteUrl}/og/${productSection}-${imageLanguage}.png`;
            }
            if (!nextFrontmatter.ogImageAlt) {
                nextFrontmatter.ogImageAlt = getLocalizedDocs(lang)
                    ? nextFrontmatter.title
                    : imageLanguage === 'zh' ? `${app} 桌面数据库客户端` : `${app} desktop database client`;
            }
            frontmatter = nextFrontmatter;
        }

        const product = relativePath.match(/(^|\/)products\/(dockit|sqlkit|data-studio-agent)\/index\.md$/)?.[2];
        if (product) {
            const apps = {
                sqlkit: {name: 'SqlKit', version: SQLKIT_VERSION},
                dockit: {name: 'DocKit', version: DOCKIT_VERSION},
                'data-studio-agent': {name: 'Data Studio Agent', version: DATA_STUDIO_AGENT_VERSION},
            } as const;
            const app = apps[product as keyof typeof apps];
            head = head.map((entry): HeadConfig => {
                const [tag, attributes, content] = entry;
                if (tag !== 'script' || attributes.type !== 'application/ld+json' || typeof content !== 'string') return entry;

                const schema = JSON.parse(content);
                if (schema['@type'] !== 'SoftwareApplication' || schema.name !== app.name) return entry;
                return [tag, attributes, JSON.stringify({...schema, softwareVersion: app.version})];
            });
        }

        if (path === 'pricing.md') {
            for (const schema of getPricingSchemas(lang, pageUrl)) {
                head.push(['script', {type: 'application/ld+json'}, JSON.stringify(schema)]);
            }
        }

        if (getPageType(relativePath) === 'article') {
            const hasArticleSchema = head.some(([tag, attributes, content]) => {
                if (tag !== 'script' || attributes.type !== 'application/ld+json' || typeof content !== 'string') return false;
                try {
                    const type = JSON.parse(content)['@type'];
                    return typeof type === 'string' && /^(?:Article|BlogPosting|NewsArticle|TechArticle)$/.test(type);
                } catch {
                    return false;
                }
            });
            if (!hasArticleSchema) {
                const isBlog = isBlogArticle(relativePath);
                const isZh = lang === 'zh';
                const pubDate = blogDate(frontmatter.date);
                const coverSrc = (frontmatter as BlogFrontmatter).cover?.src;
                const imageUrl = coverSrc
                    ? new URL(coverSrc, siteUrl).href
                    : frontmatter.ogImage ?? (isZh ? ogImageZh : ogImageEn);
                const articleSchema: Record<string, unknown> = {
                    '@context': 'https://schema.org',
                    '@type': isBlog ? 'BlogPosting' : 'Article',
                    headline: frontmatter.title,
                    description: frontmatter.description,
                    image: imageUrl,
                    inLanguage: lang,
                    author: {
                        '@type': 'Organization',
                        name: isZh ? siteNameZh : siteNameEn,
                        url: siteUrl,
                    },
                    publisher: {
                        '@type': 'Organization',
                        name: isZh ? siteNameZh : siteNameEn,
                        logo: {
                            '@type': 'ImageObject',
                            url: `${siteUrl}${logo}`,
                        },
                    },
                    mainEntityOfPage: {
                        '@type': 'WebPage',
                        '@id': pageUrl,
                    },
                };
                if (pubDate) {
                    articleSchema.datePublished = pubDate;
                    articleSchema.dateModified = pubDate;
                }
                head.push(['script', {type: 'application/ld+json'}, JSON.stringify(articleSchema)]);
            }
        }

        return {titleTemplate, frontmatter: {...frontmatter, head, languageLinks}};
    },
    transformHead({page, title, description, pageData}) {
        const isZhPage = page.startsWith('zh/');
        const pageUrl = getPageUrl(page);
        const siteName = isZhPage ? siteNameZh : siteNameEn;
        const masterOg = isZhPage ? ogImageZh : ogImageEn;
        const blogPost: BlogFrontmatter | undefined = isBlogArticle(page) ? pageData?.frontmatter : undefined;
        const cover = blogPost?.cover;
        const ogImageUrl = cover?.src ? new URL(cover.src, siteUrl).href : pageData?.frontmatter?.ogImage ?? masterOg;
        const pageType = getPageType(page);
        const ogImageAlt = cover?.alt ?? pageData?.frontmatter?.ogImageAlt ?? (isZhPage ? '极客范 - 可持续的开源软件社区' : 'GEEKFUN - Sustainable Open Source Community');
        const openGraphLocales: Record<string, string> = {
            en: 'en_US', zh: 'zh_CN', 'pt-BR': 'pt_BR', ja: 'ja_JP', ko: 'ko_KR', es: 'es_ES',
        };
        const ogLocale = openGraphLocales[page.split('/')[0]] ?? 'en_US';

        const head: HeadConfig[] = [
            ['meta', {property: 'og:title', content: title}],
            ['meta', {property: 'og:description', content: description}],
            ['meta', {property: 'og:image', content: ogImageUrl}],
            ['meta', {property: 'og:image:width', content: '1200'}],
            ['meta', {property: 'og:image:height', content: cover?.src ? String(cover.height ?? 675) : '630'}],
            ['meta', {property: 'og:image:alt', content: ogImageAlt}],
            ['meta', {property: 'og:url', content: pageUrl}],
            ['meta', {property: 'og:site_name', content: siteName}],
            ['meta', {property: 'og:type', content: pageType}],
            ['meta', {property: 'og:locale', content: ogLocale}],
            ['meta', {name: 'twitter:card', content: 'summary_large_image'}],
            ['meta', {name: 'twitter:title', content: title}],
            ['meta', {name: 'twitter:description', content: description}],
            ['meta', {name: 'twitter:image', content: ogImageUrl}],
        ];

        for (const {lang} of pageData?.frontmatter.languageLinks ?? []) {
            const alternate = openGraphLocales[lang];
            if (alternate && alternate !== ogLocale) {
                head.push(['meta', {property: 'og:locale:alternate', content: alternate}]);
            }
        }

        if (pageType === 'article') {
            const pubDate = blogPost ? blogDate(blogPost.date) : pageData?.frontmatter?.date;
            if (pubDate) {
                head.push(['meta', {property: 'article:published_time', content: pubDate}]);
                head.push(['meta', {property: 'article:modified_time', content: pubDate}]);
            }
            head.push(['meta', {property: 'article:author', content: 'https://www.geekfun.club'}]);
            if (blogPost) {
                for (const tag of blogPost.tags?.length ? blogPost.tags : ['blog']) {
                    head.push(['meta', {property: 'article:tag', content: tag}]);
                }
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
