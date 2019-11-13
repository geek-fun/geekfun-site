<template>
  <div class="project">
    <el-row class="project-row">
      <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6" class="project-box-col">
        <el-card>
          <el-image :src="url" :preview-src-list="srcList" class="col-image"></el-image>
          <div class="col-title-link">
            <a href="" target="_blank">译起玩</a>
          </div>
          <div class="col-desc">首个专注于东南亚学&译服务平台</div>
          <div class="col-rate">
            <div class="col-rate-desc">满意度</div>
            <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
          </div>
          <div class="col-time">
            开始时间 - 结束时间
          </div>
          <!-- <div class="col-detail-btn"> -->
          <router-link to="" class="col-detail-btn">详情</router-link>
          <!-- </div> -->
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="pagination-col">
        <el-pagination
          :hide-on-single-page="true"
          :pager-count="showNumberPage"
          background
          layout="prev, pager, next"
          :total="80">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Project',
  data () {
    return {
      showNumberPage: 4, // 分页显示的按钮页数
      value: 4.8,
      url: require('@/assets/img/project/yiqiwan.jpg')
    }
  },
  methods: {
    setpagerCount () {
      let num = Math.floor((window.innerWidth - 300) / 30)
      this.showNumberPage = num > 10 ? 10 : num
      console.log(this.showNumberPage)
    }
  },
  mounted () {
    this.setpagerCount()
    window.onresize = () => {
      this.setpagerCount()
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~css/theme.styl'
.project
  padding 50px 0
  .project-row
    .project-box-col
      margin-bottom 40px
      padding 0 10px
      .col-image
        height 200px
        width 100%
      .col-title-link
        padding 14px 0
        margin-bottom 20px
        font-size 18px
        text-align center
        color $blueColor
      .col-title-link:hover
        text-decoration underline
      .col-time,
      .col-rate,
      .col-desc,
      .col-detail-btn
        line-height 26px
        padding 5px 10px
      .col-time
        color #888
      .col-rate
        display flex
        .col-rate-desc
          margin-right 6px
      .col-detail-btn
        display inline-block
        width 100%
        margin-top 20px
        border-top 1px solid #ddd
        text-align center
        color $blueColor
    .pagination-col
      .el-pagination
        text-align center
.el-rate >>> .el-rate__icon,
.el-rate >>> .el-rate__decimal
  height 26px
  line-height 26px
.project-box-col >>> .el-card__body
  padding 0
@media screen and (max-width: 768px) {

}
@media screen and (min-width: 769px) {
  .project-row {
    width 90%
    margin auto
  }
}
</style>
