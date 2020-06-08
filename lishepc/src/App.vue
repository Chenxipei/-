<template>
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
=======
=======
>>>>>>> 46667d54ebc03a69c1585f536b10e2be051a7073
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
<<<<<<< HEAD
=======
>>>>>>> e9936d3503d75fc6f6163c484325e199b2170fd3
>>>>>>> 156c8efdcfb26ed31b019eff6a7c303719860570
>>>>>>> 46667d54ebc03a69c1585f536b10e2be051a7073
</script>

<style lang="less">
<<<<<<< HEAD
=======
@import url("./assets/css/base.less");
<<<<<<< HEAD
=======
=======
>>>>>>> 46667d54ebc03a69c1585f536b10e2be051a7073
	@import url("./assets/css/base.less");

	#app {
		min-width: 1200px;
	}
<<<<<<< HEAD
=======
>>>>>>> e9936d3503d75fc6f6163c484325e199b2170fd3
>>>>>>> 156c8efdcfb26ed31b019eff6a7c303719860570
>>>>>>> 46667d54ebc03a69c1585f536b10e2be051a7073
</style>
