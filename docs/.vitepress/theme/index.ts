import DefaultTheme from 'vitepress/theme';
import {inBrowser, useData} from "vitepress";
import './style.scss';
import {watchEffect, h} from "vue";
import TeamMembers from './components/team-members.vue';
import Product from "./components/product.vue";
import Footer from "./components/Footer.vue";
import DownloadPage from "./components/DownloadPage.vue";
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";
import ProductsMegaMenu from "./components/ProductsMegaMenu.vue";
import ProductsMobileNav from "./components/ProductsMobileNav.vue";
import ProductLayout from "./components/product/ProductLayout.vue";

const oneYearFromNow = () => new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();

export default {
    extends: DefaultTheme,
    Layout: () => {
        const {frontmatter} = useData()
        const isProduct = frontmatter.value.layout === 'product'
        const slots: Record<string, () => unknown> = {
            'layout-bottom': () => h(Footer),
            'nav-bar-content-after': () => h(ProductsMegaMenu),
            'nav-screen-content-after': () => h(ProductsMobileNav)
        }
        if (isProduct) {
            slots['doc-before'] = () => h(ProductLayout)
        }
        return h(DefaultTheme.Layout, null, slots)
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
        // register your custom global components
        app.component('product', ProductLayout);
        app.component('TeamMembers', TeamMembers);
        app.component('Product', Product);
        app.component('DownloadPage', DownloadPage);
        app.component('HomePage', HomePage);
        app.component('AboutPage', AboutPage);
    }
}
