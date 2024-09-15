import { defineConfig, type DefaultTheme } from 'vitepress'

export const enConfig = defineConfig({
  lang: 'zh-Hans',
  description: '',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {
        text: 'Home',
        link: '/',
      },
    ]
  }
})
