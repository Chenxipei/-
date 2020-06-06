<template>
  <div id="app">
    <!-- <head-nav v-if="$route.path!='/login'&&$route.path!='/register'"></head-nav> -->
    <top-Head ></top-Head>
    <head-search v-if="$route.path!='/cart'"></head-search>
    <headnav v-if="$route.path!='/cart'"></headnav>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>
<script>
import headnav from "_c/headNav.vue";
import topHead from "./components/topHead";
import headSearch from "./components/headSearch";
import foot from "./components/footer";
export default {
  name: "app",
  components: {
    headnav,
    topHead,
    headSearch,
    foot
  }
};
</script>
<style lang="less">
@import url("./assets/css/base.less");

#app {
  min-width: 1200px;
}

</style>

