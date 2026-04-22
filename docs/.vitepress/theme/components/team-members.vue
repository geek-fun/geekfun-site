<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'

const csdnIcon = {
  svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm-1.6 22.4H9.6V9.6h4.8v12.8zm8 0h-4.8V9.6h4.8v12.8z"/></svg>'
}

const members = [
  {
    avatar: '/team/seven.jpg',
    name: 'SEVEN',
    title: 'Creator',
    desc: '好好学习，天天向上',
    links: [
      { icon: 'github', link: 'https://github.com/Blankll' },
      { icon: 'x', link: 'https://x.com/Blankll31075' },
      { icon: 'youtube', link: 'https://www.youtube.com/@geekfun-club' }
    ]
  },
  {
    avatar: '/team/Wee.jpg',
    name: 'Wee©',
    title: 'Contributor',
    desc: '生活如此美好，而我且如此暴躁。',
    links: [
      { icon: 'github', link: 'https://github.com/VisionView' },
      { icon: csdnIcon, link: 'https://blog.csdn.net/Vision_Pinna/', ariaLabel: 'CSDN' }
    ]
  },
  {
    avatar: '/team/anne.png',
    name: 'AnnChord',
    title: 'Contributor',
    desc: 'Code to Build the Future',
    links: [
      { icon: 'github', link: 'https://github.com/AnnChord' }
    ]
  }
]
</script>

<template>
  <VPTeamMembers size="medium" :members="members" />
</template>
