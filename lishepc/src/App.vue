<template>
	<div id="app">
		<!-- <head-nav v-if="$route.path=='/login'||$route.path=='/register'"></head-nav> -->
		<!-- <top-Head></top-Head> -->
		<!-- <headnav></headnav> -->
		<router-view></router-view>
		<!-- <foot></foot> -->
	</div>
</template>
<script>
	import headnav from '_c/headNav.vue'
		import topHead from './components/topHead'
	import foot from './components/footer'
	export default {
		name: "app",
		components: {
			headnav,topHead,
			foot
		}
	}
</script>
<style lang="less">
	@import url("./assets/css/base.less");
  
	#app {
		background: #f0f0f0;
	}
</style>

