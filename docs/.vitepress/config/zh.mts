import { defineConfig, type DefaultTheme } from 'vitepress'

export const zhConfig = defineConfig({
  lang: 'zh-Hans',
  description: '',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/zh/',
      },
    ]
  }
})