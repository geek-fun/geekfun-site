<template>
  <div class="layout">
    <layout-head />
    <router-view/>
    <layout-foot />
  </div>
</template>
<script>
import LayoutHead from './components/head'
import LayoutFoot from './components/foot'
export default {
  name: 'Layout',
  components: {
    LayoutHead,
    LayoutFoot
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
.layout
  height 100%
//   min-width 300px
</style>
