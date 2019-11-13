<template>
  <div id="app">
    <router-view/>
    <el-backtop :visibility-height="500" :right="20" :bottom="20"></el-backtop>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
</style>
