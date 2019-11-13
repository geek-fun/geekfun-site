<template>
  <div class="business">
    <el-row class="business-row">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="home-team-box-title">业务范围</el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6" class="business-col-item-box" v-for="(item, i) in businessList" :key="i">
        <el-card>
          <el-image :src="item.iconImg" class="item-icon-img">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <div class="item-title">{{item.title}}</div>
          <div class="item-tooltip-box">
            <el-tooltip placement="bottom">
              <div slot="content">{{item.desc}}</div>
              <div class="item-tooltip-desc">{{item.desc}}</div>
            </el-tooltip>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Business',
  data () {
    return {
      businessList: [
        {
          iconImg: require('@/assets/img/business/web.jpg'),
          title: 'WEB站点',
          desc: '包括电商类、播客类、门户网站、企业网站、行业网站等WEB站点前后端开发'
        },
        {
          iconImg: require('@/assets/img/business/weichat.jpg'),
          title: '微信小程序',
          desc: '电商类、门户类等微信小程序'
        },
        {
          iconImg: require('@/assets/img/business/haibao.jpg'),
          title: '混生APP定制开发',
          desc: '混生APP定制开发，应用技术成熟且功能全集，符合项目和客户需求'
        },
        {
          iconImg: require('@/assets/img/business/partners.jpg'),
          title: '其他业务合作',
          desc: '合作包括海报设计、技术辅导、项目制作合作以及项目承包等。'
        }
      ]
    }
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
@import '~css/theme.styl'
.business
  box-shadow 0 0 6px #e1e1e1
  background-color #fff
  .business-row
    max-width 1560px
    margin 0 auto
    // background-color red
    .home-team-box-title
      color #333
    .business-col-item-box
      padding 0 10px
      text-align center
      .item-icon-img
        height 170px
        border-bottom 1px solid #ccc
      .item-title
        line-height 40px
        font-size 18px
        font-weight 600
      .item-tooltip-box
        padding 0 20px
        height 180px
        .item-tooltip-desc
          line-height 30px
          font-size 14px
          color #666
          overflow hidden
          text-overflow ellipsis
          display -webkit-box
          /* 几行后显示省略号 */
          -webkit-line-clamp 4
          -webkit-box-orient vertical
.business-col-item-box >>> .el-card__body
  padding 0 0 20px 0
@media screen and (max-width: 768px) {
  .business {
    padding 50px 0
  }
  .business-col-item-box {
    margin-bottom 40px
  }
}
@media screen and (min-width: 769px) {
  .business {
    padding 80px 0
    .business-row {
      width 90%
    }
  }
}
</style>
