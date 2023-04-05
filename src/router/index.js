import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout'
import siderPath from './siderPath.js'
import otherPath from './otherPath.js'
import Terms from '../views/terms/terms.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      meta: { name: 'layout' },
      redirect: '/home',
      component: Layout,
      children: siderPath
    }, {
      path: '/',
      name: 'layout',
      meta: { name: 'layout' },
      component: Layout,
      children: otherPath
    },
    {
      path: '/terms-conditions',
      name: 'terms-conditions',
      meta: { name: 'terms-conditions' },
      component: Terms
    }
  ]
})
