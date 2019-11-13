<template>
  <div class="tags">
    <a v-for="(item,i) in tagsList" :key="i" :href="item.link" target="_blank">
      <el-tag :type="setTagsType(i)">{{item.desc}}</el-tag>
    </a>
  </div>
</template>
<script>
export default {
  name: 'HomeTags',
  data () {
    return {
      tagsList: [
        { link: 'https://cn.vuejs.org', desc: 'Vue.js' },
        { link: 'https://developers.weixin.qq.com/miniprogram/dev/framework', desc: '微信小程序' },
        { link: 'https://www.bootcss.com', desc: 'Bootstrap' },
        { link: 'https://element.eleme.cn', desc: 'Element' },
        { link: 'https://www.echartsjs.com', desc: 'echartsjs' },
        { link: 'http://electron.atom.io/', desc: 'Electron' },
        { link: 'https://uniapp.dcloud.io', desc: 'uni-app' },
        { link: 'https://www.iconfont.cn', desc: 'Iconfont-阿里巴巴矢量图标库' },
        { link: 'http://cordova.axuer.com', desc: 'Cordova' },
        { link: 'https://spring.io/projects/spring-boot/', desc: 'Spring Boot' },
        { link: 'http://dubbo.apache.org/', desc: 'DUBBO' },
        { link: 'http://www.laruence.com/manual/index.html', desc: 'Yaf' },
        { link: 'https://lumen.laravel-china.org/', desc: 'Lumen.' },
        { link: 'https://redis.io/', desc: 'Redis' },
        { link: 'https://www.mysql.com/', desc: 'MySQL' },
        { link: 'https://git-scm.com/', desc: 'git' },
        { link: 'http://www.docker.com/', desc: 'Docker' },
        { link: 'https://www.kubernetes.org.cn/k8s', desc: 'k8s' }
      ]
    }
  },
  methods: {
    setTagsType (i) {
      console.log(i)
      if (i % 5 === 1) {
        return 'success'
      } else if (i % 5 === 2) {
        return 'info'
      } else if (i % 5 === 3) {
        return 'warning'
      } else if (i % 5 === 4) {
        return 'danger'
      } else {
        return ''
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.tags
  width 90%
  padding 20px 0
  max-width 1560px
  margin auto
  .el-tag
    margin 0 10px 10px 0
</style>
