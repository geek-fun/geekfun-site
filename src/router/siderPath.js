// import Main from '@/views/common/main.vue'

export default [
  {
    path: '/home',
    name: '/home',
    meta: { name: '首页', icon: 'iconfont icon-home' },
    component: () => import('@/views/home/home.vue')
  },
  // {
  //   path: '/translateYi',
  //   name: '/translateYi',
  //   meta: { name: '译起玩', icon: 'iconfont icon-member', isLink: true },
  //   component: () => import('@/translateYi/baicizhan.html')
  // },
  {
    path: '/family',
    name: '/family',
    meta: { name: '伐木累', icon: 'iconfont icon-member' },
    component: () => import('@/views/family/family.vue')
  },
  {
    path: '/project',
    name: '/project',
    meta: { name: '实例', icon: 'iconfont icon-project' },
    component: () => import('@/views/project/project.vue')
  },
  {
    path: '/aboutus',
    name: '/aboutus',
    meta: { name: '关于', icon: 'iconfont icon-about' },
    component: () => import('@/views/aboutus/aboutus.vue')
  }
  // {
  //   path: '/home1',
  //   name: '/home1',
  //   meta: { name: '案例', icon: '' },
  //   component: Main,
  //   children: [
  //     {
  //       path: '/home2',
  //       name: '/home2',
  //       meta: { name: '案例' },
  //       component: () => import('@/views/family/family.vue')
  //     }
  //   ]
  // }
]
