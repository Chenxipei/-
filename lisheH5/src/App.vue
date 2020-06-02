<template>
  <div id="app">
    <tabbar></tabbar>
    <div>
      <keep-alive>
        <router-view v-if="$route.meta.$keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.$keepAlive"></router-view>
    </div>
  </div>
</template>
<script>
import tabbar from './views/tabbar' 
export default {
  name:"app",
  components:{
    tabbar
  }
};
</script>
<style scope lang="less">
// 基础样式
@import url("./assets/css/base.less");
// 字体样式
@import url("./assets/font/iconfont.css");
</style>
