<template>
	<div id="app">
		<top-Head v-if="$route.path!='/login'&&$route.path!='/register'&&$route.path!='/member'&&$route.path!='/member/myorder'"></top-Head>
		<headSearch v-if="$route.path!='/total'&&$route.path!='/login'&&$route.path!='/register'&&$route.path!='/cart'&&$route.path!='/member'&&$route.path!='/member/myorder'"></headSearch>
		<head-nav v-if="$route.path!='/login'&&$route.path!='/register'&&$route.path!='/total'&&$route.path!='/cart'&&$route.path!='/member'&&$route.path!='/member/myorder'"></head-nav>
		<router-view></router-view>
		<foot v-if="$route.path!='/login'&&$route.path!='/register'&&$route.path!='/member'&&$route.path!='/member/myorder'"></foot>
	</div>
</template>

<script>
	import topHead from "./components/topHead";
	import headSearch from './components/headSearch'
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
	};
</script>

<style lang="less">
	@import url("./assets/css/base.less");

	#app {
		min-width: 1200px;
	}
</style>
