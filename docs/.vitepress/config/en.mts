import { defineConfig, type DefaultTheme } from 'vitepress'

export const enConfig = defineConfig({
  lang: 'zh-Hans',
  description: '',
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
      },
    ]
  }
})