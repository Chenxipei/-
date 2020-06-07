<template>
  <div id="app">
    <top-Head v-if="$route.path!='/login'&&$route.path!='/register'"></top-Head>
    <search v-if="$route.path!='/total'&&$route.path!='/login'&&$route.path!='/register'&&$route.path!='/cart'"></search>
    <head-nav v-if="$route.path!='/login'&&$route.path!='/register'&&$route.path!='/total'&&$route.path!='/cart'"></head-nav>
    <router-view></router-view>
    <foot  v-if="$route.path!='/login'&&$route.path!='/register'"></foot>
  </div>
</template>
<script>
import topHead from "./components/topHead";
import search from './components/headSearch'
// import goodList from "./views/productList/goodList";
import headNav from "_c/headNav.vue";
import foot from "./components/footer";
export default {
  name: "app",
  components: {
    headNav,
    topHead,
    foot,
    search
    // goodList
  }
};
</script>
<style lang="less">
@import url("./assets/css/base.less");
</style>

