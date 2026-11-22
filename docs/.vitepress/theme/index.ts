import DefaultTheme from 'vitepress/theme';
import {inBrowser, useData} from "vitepress";
import './style.scss';
import './editorial.scss';
import './components/blog/blog.scss';
import './components/docs/docs.scss';
import {Fragment, watchEffect, h} from "vue";
import TeamMembers from './components/team-members.vue';
import Footer from "./components/Footer.vue";
import DownloadPage from "./components/DownloadPage.vue";
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";
import PricingPage from "./components/PricingPage.vue";
import ProductsMegaMenu from "./components/ProductsMegaMenu.vue";
import ProductsMobileNav from "./components/ProductsMobileNav.vue";
import NavAuthActions from "./components/NavAuthActions.vue";
import ProductLayout from "./components/product/ProductLayout.vue";
import NotFoundContent from "./components/NotFoundContent.vue";
import BlogArticleHeader from "./components/blog/BlogArticleHeader.vue";
import DocsBreadcrumb from "./components/docs/DocsBreadcrumb.vue";
import { isBlogArticle } from "../blog";
import { getDocsProductId } from "../docs-navigation";

const oneYearFromNow = () => new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();

export default {
    extends: DefaultTheme,
    Layout: () => {
        const {frontmatter, page} = useData()
        const isProduct = frontmatter.value.layout === 'product'
        const pagePath = page.value.relativePath
        const isArticle = isBlogArticle(pagePath)
        const isBlogIndex = /^(zh\/)?blog\.md$/.test(pagePath)
        const isDocsIndex = /^(zh\/)?docs\.md$/.test(pagePath)
        const docsProductId = getDocsProductId(pagePath)
        const slots: Record<string, () => unknown> = {
            'nav-bar-content-after': () => [
                h(ProductsMegaMenu),
                h(NavAuthActions, {variant: 'bar'})
            ],
            'nav-screen-content-after': () => [
                h(ProductsMobileNav),
                h(NavAuthActions, {variant: 'screen'})
            ]
        }
        if (isProduct) {
            slots['doc-before'] = () => h(ProductLayout)
        } else if (docsProductId) {
            slots['doc-before'] = () => h(DocsBreadcrumb, { productId: docsProductId })
        }
        if (!docsProductId) {
            slots['layout-bottom'] = () => h(Footer)
        }
        const layout = h(DefaultTheme.Layout, {
            class: {
                'editorial-page': isArticle || isBlogIndex || isDocsIndex || docsProductId,
                'editorial-index-page': isBlogIndex || isDocsIndex,
                'blog-page': isArticle || isBlogIndex,
                'blog-article-page': isArticle,
                'docs-guide-page': docsProductId,
            }
        }, slots)
        return h(Fragment, null, [layout, docsProductId ? h(Footer) : null])
    },
    setup() {
        const {lang} = useData()
        watchEffect(() => {
            if (inBrowser) {
                document.cookie = `nf_lang=${lang.value}; expires=${oneYearFromNow()}; path=/`
            }
        })
        if (inBrowser) {
            // Record an explicit language choice when the user switches locale
            // through the nav language menu, so the system-language auto-detection
            // (config.mts head script) never overrides a manual choice.
            document.addEventListener('pointerdown', (e) => {
                const target = e.target as HTMLElement | null
                const link = target?.closest?.('a') as HTMLAnchorElement | null
                if (!link?.href) return
                if (!link.closest('.VPNavBarTranslations, .VPNavScreenTranslations')) return
                let url: URL
                try {
                    url = new URL(link.href, location.href)
                } catch {
                    return
                }
                if (url.origin !== location.origin) return
                // VitePress's VPLink already navigates on pointerdown, so read
                // the FROM locale from the URL at this moment (pre-navigation).
                const toZh = url.pathname.startsWith('/zh/') || url.pathname === '/zh'
                const fromZh = location.pathname.startsWith('/zh/') || location.pathname === '/zh'
                if (toZh !== fromZh) {
                    try {
                        localStorage.setItem('gf-lang', toZh ? 'zh' : 'en')
                    } catch {
                        /* storage unavailable — auto-detection keeps working */
                    }
                }
            }, true)
        }
    },
    enhanceApp({app}) {
        // register your custom global components
        app.component('product', ProductLayout);
        app.component('TeamMembers', TeamMembers);
        app.component('DownloadPage', DownloadPage);
        app.component('HomePage', HomePage);
        app.component('AboutPage', AboutPage);
        app.component('PricingPage', PricingPage);
        app.component('NotFoundContent', NotFoundContent);
        app.component('BlogArticleHeader', BlogArticleHeader);
    }
}
