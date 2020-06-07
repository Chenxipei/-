<template>

	<!-- <div id="app">
		<head-nav v-if="$route.path=='/login'||$route.path=='/register'"></head-nav>
		<top-Head></top-Head>
		<headnav></headnav>
		<router-view></router-view>
		 <goodList></goodList>
		<foot></foot>
	</div> -->

 <div id="app">

    <top-Head></top-Head>
    <head-nav></head-nav>
	<router-view></router-view>
    <foot></foot>
  </div>
</template>
<script>
import topHead from "./components/topHead";
import headNav from "_c/headNav.vue";
import foot from "./components/footer";
export default {
  name: "app",
  components: {
    headNav,
    topHead,
    foot

}}
</script>

<style lang="less">

	@import url("./assets/css/base.less");

	#app {
		min-width: 1200px;
	}

	body {
		background: #f0f0f0;
	}
</style>

