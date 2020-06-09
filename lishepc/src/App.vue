<template>
  <div id="app">
    <top-Head v-if="$route.path!='/login'&&$route.path!='/register'"></top-Head>
    <headSearch v-if="$route.path!='/total'&&$route.path!='/login'&&$route.path!='/register'&&$route.path!='/cart'"></headSearch>
    <head-nav v-if="$route.path!='/login'&&$route.path!='/register'&&$route.path!='/total'&&$route.path!='/cart'"></head-nav>
    <router-view></router-view>
    <foot  v-if="$route.path!='/login'&&$route.path!='/register'"></foot>
  </div>
</template>
<script>
	
	import headSearch from "./components/headSearch";
	import topHead from "./components/topHead";
	import headNav from "_c/headNav.vue";
	import foot from "./components/footer";
	export default {
		name: "app",
		components: {
			headNav,
			topHead,
			foot,
			headSearch

		}
	}
</script>
<style lang="less">
@import url("./assets/css/base.less");
	#app {
		min-width: 1200px;
	}
</style>
