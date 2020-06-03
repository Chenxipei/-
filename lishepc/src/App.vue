<template>
  <div id="app">
    <head-nav></head-nav>
		<router-view></router-view>
  </div>
</template>
<script>
  import headNav from '_c/headNav.vue'
  export default {
    name:"app",
    components:{
      headNav
    }
  }
</script>
<style lang="less">
@import url("./assets/css/base.less");
</style>
