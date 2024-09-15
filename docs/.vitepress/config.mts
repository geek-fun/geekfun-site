import {defineConfig} from "vitepress";

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
const descEn = 'GEEKFUN is a software community for opensource projects, our goal is to build sustainable open source projects for the world';
const descZh = '极客范是一个软件社区，致力于构建可持续的开源软件和服务';

export default defineConfig({
    lastUpdated: true,
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
                    content: 'geekfun, geek-fun opensource, Software, Community, Sustainable, World'
                }],
                ['meta', {property: 'og:title', content: titleEn}],
                ['meta', {property: 'og:description', content: descEn}],
                ['meta', {property: 'og:image', content: icon}],
                ['meta', {property: 'og:url', content: 'URL of the page'}],
                ['meta', {property: 'og:site_name', content: 'Name of the site'}],
                ['meta', {name: 'twitter:card', content: icon}],
                // ['meta', {name: 'twitter:site', content: '@twitterhandle'}],
                ['meta', {name: 'twitter:title', content: titleEn}],
                ['meta', {name: 'twitter:description', content: titleEn}],
                ['meta', {name: 'twitter:image', content: icon}],
            ],
            themeConfig: {
                ...sharedThemeConfig,
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
                ],
                footer: {
                    message: 'GEEKFUN is a software community for opensource projects, our goal is to build sustainable open source projects for the world',
                    copyright: 'Copyright © 2023-present <a href="https://github.com/geek-fun">geek-fun</a>'
                }
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
                    content: '极客范, geek-fun, 开源, 软件,开源软件, 开源社区，开源组织'
                }],
                ['meta', {property: 'og:title', content: titleZh}],
                ['meta', {property: 'og:description', content: descZh}],
                ['meta', {property: 'og:image', content: icon}],
                ['meta', {property: 'og:url', content: 'URL of the page'}],
                ['meta', {property: 'og:site_name', content: titleZh}],
                ['meta', {name: 'twitter:card', content: icon}],
                // ['meta', {name: 'twitter:site', content: '@twitterhandle'}],
                ['meta', {name: 'twitter:title', content: titleZh}],
                ['meta', {name: 'twitter:description', content: descZh}],
                ['meta', {name: 'twitter:image', content: icon}],
            ],
            themeConfig: {
                ...sharedThemeConfig,
                nav: [
                    {
                        text: '首页',
                        link: '/zh/',
                    },
                ],
                footer: {
                    message: '极客范是一个软件社区，致力于构建可持续的开源软件和服务',
                    copyright: 'Copyright © 2023-present <a href="https://github.com/geek-fun">geek-fun</a>'
                }
            }
        },
    },
});
