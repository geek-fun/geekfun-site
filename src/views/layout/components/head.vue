<template>
  <div class="header">
    <div class="layout-header" :style ="nodeSty">
      <div class="header-content">
        <div class="geek-logo">
          <!-- 34x34 54x54 -->
          <img src="@/assets/img/logo.png" alt="" class="logo-img">
        </div>
        <div class="max-menu-box">
          <el-menu mode="horizontal" :default-active="asideActive" :router="true">
            <template v-for="(items, index) in headerRouter">
              <el-submenu v-if="items.children" :index="items.name" :key="index">
                <template slot="title">{{items.meta.name}}</template>
                <el-menu-item v-for="(child, i) in items.children" :index="child.path" :key="i">
                  <a v-if="child.meta.isLink" :href="child.path" target="_blank">{{child.meta.name}}</a>
                  <span v-else>{{child.meta.name}}</span>
                </el-menu-item>
              </el-submenu>
              <template v-else>
                <el-menu-item v-if="items.meta.isLink" index="" :key="items.path" @click="routerLink(items.path)">{{items.meta.name}}</el-menu-item>
                <el-menu-item v-else :index="items.path" :key="items.path">{{items.meta.name}}</el-menu-item>
              </template>
              <!-- <template v-else>
                <a v-if="items.meta.isLink" :href="items.path" target="_blank">{{items.meta.name}}</a>
              </template> -->
            </template>
          </el-menu>
        </div>
        <!-- < 980px 显示的菜单按钮 -->
        <div class="blank-content"></div>
        <div class="el-icon-s-fold min-menu" @click="showDrawerClick"></div>
      </div>
    </div>
    <el-drawer title="导航 - GeekFun" :visible.sync="isShowDrawer" direction="rtl">
      <el-menu :default-active="asideActive" :router="true">
        <template v-for="(items, index) in headerRouter">
          <el-submenu v-if="items.children" :index="items.name" :key="index">
            <template slot="title">
              <i :class="items.meta.icon"></i>
              <span>{{items.meta.name}}</span>
            </template>
            <el-menu-item v-for="(child, i) in items.children" :index="child.path" :key="i">{{child.meta.name}}</el-menu-item>
          </el-submenu>
          <el-menu-item v-else :index="items.path" :key="items.path" @click="closeDrawerDialog">
            <i :class="items.meta.icon"></i>
            <span slot="title">{{items.meta.name}}</span>
          </el-menu-item>
        </template>
      </el-menu>
      <!-- :size="drawerSize" -->
    </el-drawer>
  </div>
</template>
<script>
import headerRouter from '@/router/siderPath.js'
export default {
  name: 'Header',
  data () {
    return {
      isShowDrawer: false,
      asideActive: null, // 设置页面刷新的时候的默认加载刷新前的路由
      headerRouter: headerRouter,
      drawerSize: '70%',
      nodeSty: {
        // backgroundImage: "url(" + require("@/assets/img/header.jpg") + ") ",
        // backgroundPosition: "center center",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
      }
    }
  },
  methods: {
    getPath () {
      let path = this.$route.path
      console.log(this.$route)
      this.asideActive = path
    },
    // 显示抽屉导航
    showDrawerClick () {
      this.isShowDrawer = true
    },
    // 点击导航列表的时候关闭抽屉
    closeDrawerDialog () {
      this.isShowDrawer = false
    },
    routerLink (url) {
      this.$router.push({ path: '/' })
      window.open(url, '_blank').location
    }
  },
  watch: {
    asideActive () {
    },
    '$route': 'getPath'
  },
  mounted () {
    this.getPath()
    window.onresize = () => {
      console.log(window.innerWidth)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~css/theme.styl'
.header
  width 100%
  z-index 999
  .layout-header
    position fixed
    width 100%
    z-index 999
    background-color $orangeColor
    .header-content
      display flex
      padding 0 10px
      max-width 90%
      margin auto
      .max-menu-box
        overflow hidden
        transition .5s
        background-color $orangeColor
        color #fff
        .el-menu
          float: right
          color #fff
          background-color $orangeColor
        .el-menu--horizontal>.el-menu-item.is-active,
        .el-menu--horizontal>.el-submenu.is-active >>> .el-submenu__title
          border-bottom-color $blueColor
          color #fff
        .el-menu--horizontal>.el-menu-item
          color #fff
        .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,
        .el-menu--horizontal>.el-submenu .el-submenu__title:hover,
        .el-submenu >>> .el-submenu__title:hover
          background-color rgba(255, 255, 255, .2)
          color #fff
        .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus
          background-color $orangeColor
          color #fff
        .el-submenu .el-submenu__title,
        .el-menu--horizontal>.el-submenu,
        .el-submenu >>> .el-submenu__title,
        .el-submenu >>> .el-submenu__title i
          color #fff
      .max-menu-box::after
        clear both
@media screen and (max-width: 768px) {
  .el-menu-item i {
    font-size 18px
    font-weight 600
    // color $orangeColor
  }
  .header,
  .layout-header,
  .header-content {
    transition .5s
    height 40px
  }
  .geek-logo {
    transition .5s
    height 24px
    padding 8px 0
  }
  .logo-img {
    transition .5s
    height 24px
  }
  .max-menu-box {
    display none
    transition .5s
  }
  .blank-content {
    flex 1
    transition .5s
  }
  .min-menu {
    display block
    font-size 30px
    padding-left 10px
    line-height 40px
    text-align center
    color #fff
    cursor pointer
  }
}
@media screen and (min-width: 769px) {
  .header,
  .layout-header,
  .header-content {
    transition .5s
    height 60px
  }
  .geek-logo {
    transition .5s
    height 34px
    padding 13px 0
  }
  .logo-img {
    transition .5s
    height 34px
  }
  .max-menu-box {
    flex 1
    float right
    transition .5s
    display block
  }
  .blank-content,
  .min-menu {
    display none
    transition .5s
  }
}
</style>
