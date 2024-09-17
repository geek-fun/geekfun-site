<script setup>
import {VPTeamMembers} from 'vitepress/theme'

const members = [
  {
    avatar: '/team/seven.jpg',
    name: 'SEVEN',
    title: 'Creator',
    desc: '好好学习，天天向上',
    links: [
      {icon: 'github', link: 'https://github.com/Blankll'},
      {icon: 'twitter', link: 'https://x.com/Blankll31075'},
      {icon: 'youtube', link: 'https://www.youtube.com/@geekfun-club'}
    ]
  },
  {
    avatar: '/team/Wee.jpg',
    name: 'Wee©',
    title: 'Contributor',
    desc: '生活如此美好，而我且如此暴躁。',
    links: [
      {icon: 'github', link: 'https://github.com/VisionView'},
      {icon: 'blog', link: 'https://blog.csdn.net/Vision_Pinna/'}
    ]
  },
  {
    avatar: '/team/anne.png',
    name: 'AnnChord',
    title: 'Contributor',
    desc: 'Code to Build the Future',
    links: [
      {icon: 'github', link: 'https://github.com/AnnChord'},
    ]
  },
]
</script>
<template>
  <VPTeamMembers size="small" :members="members"/>
</template>
