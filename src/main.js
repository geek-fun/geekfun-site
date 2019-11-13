import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
// 基本样式重置
import 'css/reset.css'
// element插件Ui样式部分重置
import 'css/elementUI.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

// 解决点击同一路由下报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
