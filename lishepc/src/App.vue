<template>
  <div id="app">
    <top-Head></top-Head>
    <head-nav></head-nav>
    <goodList></goodList>
    <foot></foot>
  </div>
</template>
<script>
import topHead from "./components/topHead";
import goodList from "./views/productList/goodList";
import headNav from "_c/headNav.vue";
import foot from "./components/footer";
export default {
  name: "app",
  components: {
    headNav,
    topHead,
    foot,
    goodList
  }
};
</script>
<style lang="less">
@import url("./assets/css/base.less");
</style>

