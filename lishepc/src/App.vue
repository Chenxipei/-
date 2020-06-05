<template>
<<<<<<< HEAD
  <div id="app">
=======

	<!-- <div id="app">
		<head-nav v-if="$route.path=='/login'||$route.path=='/register'"></head-nav>
		<top-Head></top-Head>
		<headnav></headnav>
		<router-view></router-view>
		 <goodList></goodList>
		<foot></foot>
	</div> -->

 <div id="app">

>>>>>>> b951b7fd4cd2354b91771fc763f744a2185b7b4a
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
<<<<<<< HEAD
  }
};
=======

}}
>>>>>>> b951b7fd4cd2354b91771fc763f744a2185b7b4a
</script>

<style lang="less">
<<<<<<< HEAD
@import url("./assets/css/base.less");
=======

	@import url("./assets/css/base.less");

	#app {
		min-width: 1200px;
	}

	body {
		background: #f0f0f0;
	}
>>>>>>> b951b7fd4cd2354b91771fc763f744a2185b7b4a
</style>

