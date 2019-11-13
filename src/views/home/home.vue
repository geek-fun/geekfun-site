<template>
  <div class="home" v-loading="false">
    <div class="banner" :style="nodeBanner">
      <el-row>
        <el-col :span="24">信仰 梦 星空</el-col>
        <el-col :span="24" class="home-banner-lgname">
          <span ref="flicker">{{bannerName}}</span><span class="vertical-line" :class="{isActive:isShowLine}" ref="verticalLine"></span>
        </el-col>
        <el-col :span="24">不一样的青春，我们的未来不一Young。</el-col>
      </el-row>
    </div>
    <!-- 相关数据展示 -->
    <el-row class="content-box">
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" class="achievement-partner" v-for="(items, i) in achievementList" :key="i">
        <div class="achievement-partner-item">
          <div class="iconfont item-icon" :class="items.icon"></div>
          <div class="item-right-box">
            <div class="right-box-number">
              <countTo :prefix='items.title' :startVal='startVal' :endVal='items.number' :duration='duration' :suffix='items.unit'></countTo><!-- startVal 初始值 endVal 最终值 duration 需要滚动的时间 -->
            </div>
            <div class="right-box-desc" :title="items.desc">{{items.desc}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 业务范围 -->
    <HomeBusiness />
    <!-- 主要成员 -->
    <div class="team-box">
      <el-row class="team-box-row">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="home-team-box-title">主要成员</el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" class="team-box-col" v-for="(item, i) in mainNumberList" :key="i">
          <div class="team-info-list-img">
            <img :src="item.userImgUrl" alt="" class="list-user-img">
          </div>
          <div class="team-info-list-content">
            <div class="content-user-name">{{item.nickname}}</div>
            <div v-if="item.personalityLabel" class="content-user-desc">{{item.personalityLabel}}</div><!-- 个性签名 -->
            <div v-else class="content-user-nodesc">这是个狼人，什么都没留下...</div><!-- 个性签名 -->
            <div class="content-user-job">
              <el-tag v-for="tag in item.jobTags" :key="tag.id">{{tag.desc}}</el-tag>
            </div>
            <div class="content-user-link">
              <a v-if="item.externalLink[0].link" :href="item.externalLink[0].link" title="个人博客" target="_blank" class="iconfont icon-blog other-link"></a>
              <a v-if="item.externalLink[1].link" :href="item.externalLink[1].link" title="GitHub" target="_blank" class="iconfont icon-github other-link"></a>
              <a v-if="item.externalLink[2].link" :href="item.externalLink[2].link" title="CSSDN" target="_blank" class="iconfont icon-csdn other-link csdn"></a>
            </div>
            <div class="content-user-about">
              <router-link to="" class="user-about">about me</router-link>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="team-more-link">
          <router-link to="/family" class="router-link-a">more</router-link>
        </el-col>
      </el-row>
    </div>
    <!-- 技术栈 -->
    <HomeTabs />
  </div>
</template>
<script>
import countTo from 'vue-count-to'
import HomeBusiness from './components/business'
import HomeTabs from './components/tags'
export default {
  name: 'Home',
  components: {
    countTo,
    HomeBusiness,
    HomeTabs
  },
  data () {
    return {
      duration: 3000,
      // 初始值
      startVal: 0,
      // 最终值
      isShowLine: false,
      endFlicker: 0,
      nodeBanner: {
        backgroundImage: 'url(' + require('@/assets/img/banner.jpg') + ')'
      },
      bannerName: null,
      bannerNameStr: 'GeekFun 极客范',
      timer1: 0,
      timer2: 0,
      timeout: 0,
      // 成就列表
      achievementList: [
        {
          icon: 'icon-project',
          title: '',
          number: 4,
          unit: '个',
          desc: '所搭建成功的项目个数'
        },
        {
          icon: 'icon-member',
          title: '',
          number: 5,
          unit: '人',
          desc: '俱乐部常驻成员数'
        },
        {
          icon: 'icon-partner',
          title: '',
          number: 1,
          unit: '家',
          desc: '投资商、合作商'
        }
      ],
      // 主要成员展示列（三个）
      mainNumberList: [
        {
          userImgUrl: require('@/assets/img/team/Wee.jpg'), // 用户头像
          nickname: 'Wee©', // 昵称
          personalityLabel: '生活如此美好，而我且如此暴躁。', // 个性签名
          jobTags: [
            { d: 1, desc: '前端开发员' },
            { d: 2, desc: 'UI设计师' }
          ], // 职位标签
          externalLink: [
            { name: '个人博客', link: '' },
            { name: 'GitHub', link: 'https://github.com/VisionView' },
            { name: 'CSDN', link: 'https://blog.csdn.net/Vision_Pinna/' }
          ] // 外链 1、个人搭建的网站的链接 2、Github链接 3、码云链接 4、CSDN
          // 没有就空着  但是name是必须有的 link可以为空
        },
        {
          userImgUrl: require('@/assets/img/team/seven.jpg'), // 用户头像
          nickname: 'SEVEN', // 昵称
          personalityLabel: '好好学习, 天天向上', // 个性签名 可以为空
          jobTags: [
            { d: 1, desc: '前端开发员' }, // 不同ID对应不用职位
            { d: 3, desc: '后端开发员' }
          ], // 职位标签
          externalLink: [
            { name: '个人博客', link: 'http://seven.geekfun.club' },
            { name: 'GitHub', link: 'https://github.com/Blankll' },
            { name: 'CSDN', link: '' }
          ] // 外链 1、个人搭建的网站的链接 2、Github链接 3、码云链接 4、CSDN
          // 没有就空着  但是name是必须有的 link可以为空
        },
        {
          userImgUrl: require('@/assets/img/team/1.jpg'), // 用户头像
          nickname: 'Who are you?', // 昵称
          personalityLabel: '', // 个性签名 可以为空
          jobTags: [
            { d: 1, desc: '前端开发员' }
          ],
          externalLink: [
            { name: '个人博客', link: '' },
            { name: 'GitHub', link: '' },
            { name: 'CSDN', link: '' }
          ]
        }
      ]
    }
  },
  methods: {
    // 《减》
    flickerSpecialLess () {
      this.timer1 = setInterval(() => {
        this.bannerName = this.bannerNameStr.slice(0, this.endFlicker--)
      }, 200)
    },
    // 《加》
    flickerSpecialPlus () {
      this.endFlicker = 0
      this.timer2 = setInterval(() => {
        this.bannerName = this.bannerNameStr.slice(0, this.endFlicker++)
      }, 200)
    },
    // 清除所有的定时器和计时器
    clearAllTimeOrInterval () {
      clearTimeout(this.timeout)
      clearInterval(this.timer1)
      clearInterval(this.timer2)
    }
  },
  watch: {
    // 文字敲击效果
    endFlicker () {
      if (this.endFlicker > this.bannerNameStr.length) {
        this.clearAllTimeOrInterval()
        this.timeout = setTimeout(() => {
          this.flickerSpecialLess()
        }, 1000)
      }
      if (this.endFlicker < 0) {
        this.clearAllTimeOrInterval()
        this.timeout = setTimeout(() => {
          this.flickerSpecialPlus()
        }, 1000)
      }
    }
  },
  mounted () {
    this.flickerSpecialPlus()
    setInterval(() => {
      this.isShowLine = !this.isShowLine
    }, 500)
  }
}
</script>
<style lang="stylus" scoped>
@import '~css/theme.styl'
.home
  // height 100%
  .banner
    padding 150px 0
    margin-bottom 20px
    background-position center center
    background-repeat no-repeat
    background-size cover
    text-align center
    color #fff
    overflow hidden
    box-shadow 0 0 10px #ccc
    .home-banner-lgname
      height 40px
      margin 40px 0
      line-height 40px
      vertical-align middle
      text-align center
      .vertical-line
        display inline
        border-left 2px solid #fff
        visibility visible
      .isActive
        visibility hidden
  .achievement-partner
    padding 10px 0
  .content-box
    border-bottom 1px solid #ccc
    .achievement-partner
      height 120px
      padding 20px 0
      margin-bottom 20px
      // background-color red
      .achievement-partner-item
        display flex
        width 360px
        margin 0 auto
        .item-icon
          height 60px
          width 60px
          line-height 60px
          text-align center
          font-size 50px
          color $blueColor
      .item-right-box
        width 300px
        .right-box-number
          height 40px
          line-height 40px
          font-size 22px
          font-weight 600
          color $orangeColor
        .right-box-desc
          width 300px
          height 20px
          line-height 20px
          color #999
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
  .team-box
    width 100%
    background-color $blueColor
    .team-box-row
      .home-team-box-title
        color #fff
      .team-box-col
        padding 0 10px
        .team-info-list-img
          .list-user-img
            background-color #fff
        .team-info-list-content
          height 270px
          padding 86px 27px 27px
          border-radius 2px
          text-align center
          background #fff
          .content-user-name
            font-size 20px
          .content-user-nodesc,
          .content-user-desc
            height 72px
            line-height 24px
            overflow hidden
            text-overflow ellipsis
            display -webkit-box
            /* 几行后显示省略号 */
            -webkit-line-clamp 3
            -webkit-box-orient vertical
          .content-user-nodesc
            color #ccc
          .content-user-job
            height 42px
            overflow hidden
            .el-tag
              margin-bottom 10px
              margin-right 6px
            .el-tag:last-child
              margin-right 0
          .content-user-link
            height 28px
            line-height 28px
            .other-link
              display inline-block
              margin 0 5px
              font-size 24px
            .csdn
              color $csdnRedColor
          .content-user-about
            .user-about
              height 28px
              line-height 28px
              text-decoration underline
          .content-user-name,
          .content-user-desc,
          .content-user-job,
          .content-user-link
            margin-bottom 20px
      .team-more-link
        margin-top 50px
        text-align center
        color $orangeColor
        .router-link-a
          transition .5s
          padding 10px 30px
          border-radius 2px
          font-weight 600
          background-color #fff
        .router-link-a:hover
          padding 14px 50px
@media screen and (max-width: 768px) {
  .banner {
    height 200px
  }
  .home-banner-lgname {
    font-size 26px
  }
  .team-box {
    padding 50px 0
  }
  .team-box .team-box-row {
    width 100%
  }
  .team-box-col {
    margin-bottom 40px
    .team-info-list-img {
      margin-left calc(50% - 54px)
      margin-bottom -54px
      overflow hidden
      width 108px
      .list-user-img {
        width 100px
        height 100px
        border 4px solid #fff
        border-radius 65px
      }
    }
  }
}
@media screen and (min-width: 769px) {
  .home-banner-lgname {
    font-size 36px
  }
  .banner {
    height 300px
    -webkit-clip-path polygon(50% 0%, 100% 0, 100% 80%, 50% 100%, 0 80%, 0 0)
    clip-path polygon(50% 0%, 100% 0, 100% 80%, 50% 100%, 0 80%, 0 0)
  }
  .team-box {
    padding 80px 0
  }
  .team-box .team-box-row {
    width 90%
  }
  .team-box-col {
    .team-info-list-img {
      margin-left calc(50% - 69px)
      margin-bottom -69px
      overflow hidden
      width 138px
      .list-user-img {
        width 130px
        height 130px
        border 4px solid #fff
        border-radius 65px
      }
    }
  }
}
</style>
