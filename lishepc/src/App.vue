<template>
  <div id="app">
<<<<<<< HEAD
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
=======
    <!-- <head-nav></head-nav> -->
    <router-view></router-view>
  </div>
</template>
<script>
import headNav from "_c/headNav.vue";
export default {
  name: "app",
  components: {
    headNav
>>>>>>> a58b3f8c129ed143f6f16f764dde52c94e062b4c
  }
};
</script>
<style lang="less">
@import url("./assets/css/base.less");
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> a58b3f8c129ed143f6f16f764dde52c94e062b4c
