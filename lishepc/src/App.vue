<template>
  <div id="app">
<<<<<<< HEAD
    <top-Head v-if="$route.path!='/login'&&$route.path!='/register'&&$route.path!='/payment'"></top-Head>
    <head-search
      v-if="$route.path!='/total'&&$route.path!='/login'&&$route.path!='/register'&&$route.path!='/cart'&&$route.path!='/payment'"
    ></head-search>
    <head-nav
      v-if="$route.path!='/login'&&$route.path!='/register'&&$route.path!='/total'&&$route.path!='/cart'&&$route.path!='/payment'&&$route.path!='/member'"
=======
    <top-Head v-if="$route.path!='/login'&&$route.path!='/register'&&$route.path!='/member'&&$route.path !='/member/myorder'"></top-Head>
    <head-search
      v-if="$route.path!='/total'&&$route.path!='/login'&&$route.path!='/register'&&$route.path!='/cart'&&$route.path!='/member'&&$route.path !='/member/myorder'"
    ></head-search>
    <head-nav
      v-if="$route.path!='/login'&&$route.path!='/register'&&$route.path!='/total'&&$route.path!='/cart'&&$route.path!='/member'&&$route.path !='/member/myorder'"
>>>>>>> 429ecc28dba902828bdfc701b457fbafd97c85dc
    ></head-nav>
    <router-view></router-view>
    <foot v-if="$route.path!='/login'&&$route.path!='/register'&&$route.path!='/member'&&$route.path !='/member/myorder'"></foot>
  </div>
</template>

<script>
import headNav from "_c/headNav.vue";
import headSearch from "./components/headSearch";
import topHead from "./components/topHead";
import foot from "./components/footer";
export default {
  name: "app",
  components: {
    headNav,
    topHead,
    foot,
    headSearch
  }
};
</script>

<style lang="less">
@import url("./assets/css/base.less");

#app {
  min-width: 1200px;
}
</style>
