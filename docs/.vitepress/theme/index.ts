import DefaultTheme from 'vitepress/theme';
import {inBrowser, useData} from "vitepress";
import './style.scss';
import {watchEffect} from "vue";
import TeamMembers from './components/team-members.vue';
import Product from "./components/product.vue";

export default {
    ...DefaultTheme,
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

