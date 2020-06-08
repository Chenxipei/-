import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 156c8efdcfb26ed31b019eff6a7c303719860570
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 156c8efdcfb26ed31b019eff6a7c303719860570
    path:"/total",
    component: () => import("../views/settlement/settlement.vue")
  }
]
const router = new VueRouter({
  mode: "history",
  routes
=======
>>>>>>> 46667d54ebc03a69c1585f536b10e2be051a7073

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
		path:'/total',
		component:()=>import("../views/settlement/settlement.vue")
	},
	{
		path: "/payment",
		component: () => import("../views/payment/payment.vue")
	}
]
const router = new VueRouter({
	mode: "history",
	routes

})

export default router
