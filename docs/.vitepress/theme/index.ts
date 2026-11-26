import DefaultTheme from 'vitepress/theme';
import {inBrowser, useData} from "vitepress";
import './style.scss';
import './editorial.scss';
import './components/blog/blog.scss';
import './components/docs/docs.scss';
import {Fragment, watchEffect, h, defineComponent} from "vue";
import TeamMembers from './components/team-members.vue';
import Footer from "./components/Footer.vue";
import DownloadPage from "./components/DownloadPage.vue";
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";
import PricingPage from "./components/PricingPage.vue";
import ProductsMegaMenu from "./components/ProductsMegaMenu.vue";
import ProductsMobileNav from "./components/ProductsMobileNav.vue";
import NavAuthActions from "./components/NavAuthActions.vue";
import LanguageLinks from "./components/LanguageLinks.vue";
import ProductLayout from "./components/product/ProductLayout.vue";
import NotFoundContent from "./components/NotFoundContent.vue";
import BlogArticleHeader from "./components/blog/BlogArticleHeader.vue";
import DocsBreadcrumb from "./components/docs/DocsBreadcrumb.vue";
import DocsFigure from "./components/docs/DocsFigure.vue";
import DocsCardGrid from "./components/docs/DocsCardGrid.vue";
import DocsCard from "./components/docs/DocsCard.vue";
import DocsBadge from "./components/docs/DocsBadge.vue";
import DocsSteps from "./components/docs/DocsSteps.vue";
import DocsPlatform from "./components/docs/DocsPlatform.vue";
import DocsFlowDiagram from "./components/docs/DocsFlowDiagram.vue";
import DocsCheck from "./components/docs/DocsCheck.vue";
import { isBlogArticle } from "../blog";
import { getDocsProductId } from "../docs-navigation";
import { getUnprefixedDocsPath } from "../docs-locales";

const oneYearFromNow = () => new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();

export default {
    extends: DefaultTheme,
    Layout: () => {
        const {frontmatter, page} = useData()
        const isProduct = frontmatter.value.layout === 'product'
        const pagePath = page.value.relativePath
        const isArticle = isBlogArticle(pagePath)
        const sitePath = getUnprefixedDocsPath(pagePath)
        const isBlogIndex = sitePath === 'blog.md'
        const isDocsIndex = sitePath === 'docs.md'
        const docsProductId = getDocsProductId(pagePath)
        const slots: Record<string, () => unknown> = {
            'nav-bar-content-after': () => [
                h(LanguageLinks, {variant: 'bar'}),
                h(NavAuthActions, {variant: 'bar'})
            ],
            'nav-screen-content-after': () => [
                h(LanguageLinks, {variant: 'screen'}),
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
                [`docs-product--${docsProductId}`]: Boolean(docsProductId),
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
    },
    enhanceApp({app}) {
        app.component('SiteProductsMenu', defineComponent({
            props: {screenMenu: Boolean},
            setup: (props) => () => h(props.screenMenu ? ProductsMobileNav : ProductsMegaMenu),
        }));
        // register your custom global components
        app.component('product', ProductLayout);
        app.component('TeamMembers', TeamMembers);
        app.component('DownloadPage', DownloadPage);
        app.component('HomePage', HomePage);
        app.component('AboutPage', AboutPage);
        app.component('PricingPage', PricingPage);
        app.component('NotFoundContent', NotFoundContent);
        app.component('BlogArticleHeader', BlogArticleHeader);
        app.component('DocsFigure', DocsFigure);
        app.component('DocsCardGrid', DocsCardGrid);
        app.component('DocsCard', DocsCard);
        app.component('DocsBadge', DocsBadge);
        app.component('DocsSteps', DocsSteps);
        app.component('DocsPlatform', DocsPlatform);
        app.component('DocsFlowDiagram', DocsFlowDiagram);
        app.component('DocsCheck', DocsCheck);
    }
}
