<template>
<<<<<<< HEAD
  <div id="app">
    <!-- <head-nav v-if="$route.path!='/login'&&$route.path!='/register'"></head-nav> -->
    <top-Head ></top-Head>
    <head-search v-if="$route.path!='/cart'"></head-search>
    <headnav v-if="$route.path!='/cart'"></headnav>
    <router-view></router-view>
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

    <top-Head></top-Head>

    <head-nav></head-nav>
		<router-view></router-view>

    <goodList></goodList>
>>>>>>> c4a8bf1fc1fe66c43f379af6444e8588b1e7c5aa
    <foot></foot>
  </div>
</template>
<script>
<<<<<<< HEAD
import headnav from "_c/headNav.vue";
import topHead from "./components/topHead";
import headSearch from "./components/headSearch";
=======
import topHead from "./components/topHead";
import goodList from "./views/productList/goodList";
import headNav from "_c/headNav.vue";
>>>>>>> c4a8bf1fc1fe66c43f379af6444e8588b1e7c5aa
import foot from "./components/footer";
export default {
  name: "app",
  components: {
<<<<<<< HEAD
    headnav,
    topHead,
    headSearch,
    foot
  }
};
=======
    headNav,
    topHead,
    foot,
    goodList

}}
>>>>>>> c4a8bf1fc1fe66c43f379af6444e8588b1e7c5aa
</script>

<style lang="less">
<<<<<<< HEAD
@import url("./assets/css/base.less");

#app {
  min-width: 1200px;
}

=======

	@import url("./assets/css/base.less");
  
	#app {
		min-width: 1200px;
	}

	body {
		background: #f0f0f0;
	}
>>>>>>> c4a8bf1fc1fe66c43f379af6444e8588b1e7c5aa
</style>

