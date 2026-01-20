import DefaultTheme from 'vitepress/theme';
import {inBrowser, useData} from "vitepress";
import './style.scss';
import {watchEffect, h} from "vue";
import TeamMembers from './components/team-members.vue';
import Product from "./components/product.vue";
import Footer from "./components/Footer.vue";

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            'layout-bottom': () => h(Footer)
        })
    },
    setup() {
        const {lang} = useData()
        watchEffect(() => {
            if (inBrowser) {
                document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`
            }
        })
    },
    enhanceApp({app}) {
        // register your custom global components
        app.component('TeamMembers', TeamMembers);
        app.component('Product', Product);
    }
}

