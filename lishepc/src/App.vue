<template>
  <div id="app">
    <!-- <head-nav v-if="$route.path=='/login'||$route.path=='/register'"></head-nav> -->
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
