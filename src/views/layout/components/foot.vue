<template>
  <div class="footer">
    <el-row class="footer-row">
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" class="footer-community">
        <div class="footer-community-title">GeekFun</div>
        <div class="list-item team-desc">GEEKFUN成立于2016年12月份，团队目前共有成员5人。成员都为信息学院学生。团队成员各取所长，分工明确。</div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="4" :xl="4" class="footer-community">
        <div class="footer-community-title">社区</div>
        <div class="list-item"><router-link to="">入驻GeekFun</router-link></div>
        <div class="list-item"><router-link to="">建议反馈</router-link></div>
        <div class="list-item"><router-link to="">特别鸣谢</router-link></div>
        <div class="list-item"><router-link to="">FAQ</router-link></div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="4" :xl="4" class="footer-community">
        <div class="footer-community-title">外链</div>
        <div class="list-item"><a href="https://trans.geekfun.club" target="_blank">译起玩</a></div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="footer-copy-right">版权所有 &copy; GeekFun.club 2016 - {{nowYear}}</el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      nowYear: 2019
    }
  },
  methods: {
    getNowYear () {
      let date = new Date()
      this.nowYear = date.getFullYear()
    }
  },
  mounted () {
    this.getNowYear()
  }
}
</script>
<style lang="stylus" scoped>
@import '~css/theme.styl'
.footer
  background-color $darkGrayColor
  color #f5f5f5
  .footer-row
    .footer-community
      line-height 30px
      .footer-community-title
        font-weight 600
        font-size 16px
      .footer-community-title::before
        content '-'
        margin-right 4px
      .list-item
        color #efefef
        margin-left 14px
        line-height 24px
        font-size 12px
      .team-desc
        margin-right 20px
    .footer-copy-right
      line-height 30px
@media screen and (max-width: 768px) {
  .footer {
    padding 20px
  }
}
@media screen and (min-width: 769px) {
  .footer {
    padding 50px 50px 20px
  }
}
</style>
