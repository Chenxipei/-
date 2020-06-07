import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

<<<<<<< HEAD
const routes = [
  {
    path: '',
    redirect: "/home"
  },
  {
    path: "/cart",
    component: () => import("../views/cart/index.vue")
  },
  {
    path: '/good_detail',
    component: () => import('../views/Classify/good_detail.vue')
  },
  {
    path: "/home",
    component: () => import("@/views/home/Home.vue")
  },
  {
    path:"/shopList/familyLife",
    component: ()=> import("../views/productList/goodList.vue")
  },
  {
    path: "/shopList",

    component: () => import("@/views/shopList/shopList.vue")
  }
  ,
  {
    path: '/classify',
    component: () => import('../views/Classify/classify.vue')
  },
  {
    path: "/login",
    component: () => import("../views/login/login.vue")
  },
  {
    path: "/register",
    component: () => import("../views/login/register.vue")
  },
  {
    path: "/entry",
    component:() => import("../views/entry/entry.vue")
  }
=======
// 
// const routes = [{
// 
// 		path: '/',
// 		redirect: "/home",
// 	},
// 	{
// 		path: '/classify',
// 		component: () => import('../views/Classify/classify.vue')
// 	},
// 	{
// 		path: '/good_detail',
// 		component: () => import('../views/Classify/good_detail.vue')
// 	},
// 	{
// 		path: "/home",
// 		component: () => import("@/views/home/Home.vue")
// 	},
// 	{
// 		path: "/shopList",
// 		meta: {
// 
// 		},
// 		component: () => import("@/views/shopList/shopList.vue")
// 	},
// 	{
// 		path: "/login",
// 		component: () => import("../views/login/login.vue")
// 	},
// 	{
// 		path: "/register",
// 		component: () => import("../views/login/register.vue")
// 	},
// 	{
// 		path: "/cart",
// 		component: () => import("../views/cart/index.vue")
// 	},
// 	{
// 		path: "/myorder",
// 		component: () => import("../views/mine/myorder.vue")
// 	}
// ]
// const router = new VueRouter({
// 	mode: "history",
// 	routes

const routes = [{
		path: '',
		redirect: "/home"
	},
	{
		path: "/cart",
		component: () => import("../views/cart/index.vue")
	},
	{
		path: '/good_detail',
		component: () => import('../views/Classify/good_detail.vue')
	},
	{
		path: "/home",
		component: () => import("@/views/home/Home.vue")
	},
	{
		path: "/shopList/familyLife",
		component: () => import("../views/productList/goodList.vue")
	},
	{
		path: "/shopList",

		component: () => import("@/views/shopList/shopList.vue")
	},
	{
		path: '/classify',
		component: () => import('../views/Classify/classify.vue')
	},
	{
		path: "/login",
		component: () => import("../views/login/login.vue")
	},
	{
		path: "/register",
		component: () => import("../views/login/register.vue")
	},
	{
		path: '/good_detail',
		component: () => import('../views/Classify/good_detail.vue')
	},
>>>>>>> fe3805700c54554fb8185801bbd42e7a4d12dfee
]
const router = new VueRouter({
	mode: "history",
	routes

})

export default router
