<template>
  <div id="app">

    <!-- <head-nav v-if="$route.path=='/login'||$route.path=='/register'"></head-nav> -->
    <router-view></router-view>

    <top-Head></top-Head>
    <foot></foot>

    <head-nav></head-nav>

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

<script>
import topHead from './components/topHead'
import foot from './components/footer'
export default {
  nam:'app',
  components:{
    topHead,
    foot
  }
}
</script>

