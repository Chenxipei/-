<template>
<<<<<<< HEAD
  <div id="app">
    <!-- <head-nav v-if="$route.path!='/login'&&$route.path!='/register'"></head-nav> -->
    <top-Head></top-Head>
    <head-search v-if="$route.path!='/cart'"></head-search>
    <headnav v-if="$route.path!='/cart'"></headnav>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>
<script>
import headnav from "_c/headNav.vue";
import headSearch from "./components/headSearch";
import topHead from "./components/topHead";
import goodList from "./views/productList/goodList";
import foot from "./components/footer";
export default {
  name: "app",
  mounted(){
    console.log(this)
  },
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

=======
	<div id="app">
		<!-- <head-nav v-if="$route.path!='/login'&&$route.path!='/register'"></head-nav> -->
		<top-Head></top-Head>
		<!--    <head-nav></head-nav> -->
		<head-search v-if="$route.path!='/cart'"></head-search>
		<headnav v-if="$route.path!='/cart'"></headnav>
		<router-view></router-view>
		<foot></foot>
	</div>
</template>
<script>
	import headnav from "_c/headNav.vue";
	import headSearch from "./components/headSearch";
	import topHead from "./components/topHead";

	import headNav from "_c/headNav.vue";
	import foot from "./components/footer";
	export default {
		name: "app",
		components: {
			headnav,
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
>>>>>>> fe3805700c54554fb8185801bbd42e7a4d12dfee
</style>
