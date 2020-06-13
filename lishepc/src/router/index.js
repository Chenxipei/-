import Vue from 'vue'
import VueRouter from 'vue-router'
import { getStore } from "@/lib/store";

Vue.use(VueRouter)

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
		path: "/shopList/familyLife",
		component: () => import("../views/productList/goodList.vue")
	},

	{
		path: '/classify',
		component: () => import('../views/Classify/classify.vue')
	},
	{
		path: '/member',
		component: () => import('../views/mine/member.vue'),
		children:[
			{path: 'myorder',
			component: () => import('../views/mine/myorder.vue')}
		]
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
		path: '/total',
		component: () => import("../views/settlement/settlement.vue")
	},
	{
		path: "/payment",
		component: () => import("../views/payment/payment.vue")
	},
	{
		path: "/member",
		component: () => import("../views/mine/member.vue"),
		children:[
			{
				path:"myorder",
				component: () => import("../views/mine/myorder.vue")
			}
		]
	}
]
const router = new VueRouter({
	mode: "history",
	routes
})

router.beforeEach((to, from, next) => {
  const userInfo = getStore({name:"userInfo"})
  if (!userInfo && (to.path === "/cart"||to.path === "/myorder"||to.path === "/total"||to.path==="/payment"||to.path==="/member"||to.path==="/member/myorder")) {
    // 未登录且要跳转的页面是购物车页
    next({
      path: "/login" // 跳转到登录页
    })
  } else if (!userInfo && to.path === "/login") {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else if (userInfo && to.path === "/login") {
    // 已登录且要跳转的页面是登录页
    next({
      path:"/home" // 跳转到homeName页
    })
  }else{
	  next()
  }
})
router.afterEach(to => {
	window.scrollTo(0, 0)
})
export default router
