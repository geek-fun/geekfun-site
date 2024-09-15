import DefaultTheme from 'vitepress/theme'
import {inBrowser, useData} from "vitepress";
import {watchEffect} from "vue";
import teamMembers from './components/team-members.vue';

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
        app.component('TeamMembers', teamMembers);
    }
}

