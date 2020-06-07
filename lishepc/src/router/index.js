import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


<<<<<<< HEAD
    path: '/',
    redirect: "/home",
  },
  {
    path: '/classify',
    component: () => import('../views/Classify/classify.vue')
  },
  {
    path: '/shopList/familyLife',
    component: () => import('../views/productList/goodList.vue')
  },
  {
    path: "/home",
    component: () => import("@/views/home/Home.vue")
  },
  {
    path: "/shopList",
    meta: {

    },
    component: () => import("@/views/shopList/shopList.vue")
  }
  ,
  {
    path: "/login",
    component: () => import("../views/login/login.vue")
  },
  {
    path: "/register",
    component: () => import("../views/login/register.vue")
  }
  ,
  {
    path: "/cart",
    component: () => import("../views/cart/index.vue")
  },
  {
    path:"/total",
    component: () => import("../views/settlement/settlement.vue")
  }
]
const router = new VueRouter({
  mode: "history",
  routes
=======

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
	
	{
		path: "/myorder",
		component: () => import("../views/mine/myorder.vue")
	},
	{
		path: "/payment",
		component: () => import("../views/payment/payment.vue")
	}
]
const router = new VueRouter({
	mode: "history",
	routes

>>>>>>> e9936d3503d75fc6f6163c484325e199b2170fd3
})

export default router
