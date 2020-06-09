import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)




const routes = [
	{
		path: '/',
		component: () => import("@/views/home/Home.vue"),
		// redirect: "/home"
	},
	{
		path: "/cart",
		component: () => import("../views/cart/index.vue")
	},
// 	{
// 		path: '/good_detail',
// 		component: () => import('../views/Classify/good_detail.vue')
// 	},
	{
		path: "/home",
		component: () => import("@/views/home/Home.vue")
	},
	{
		path: "/goodList",
		component: () => import("../views/productList/goodList.vue")
	},
// 	{
// 		path: '/classify',
// 		component: () => import('../views/Classify/classify.vue')
// 	},
	{
		path: "/login",
		component: () => import("../views/login/login.vue")
	},
	{
		path: "/register",
		component: () => import("../views/login/register.vue")
	},
	
	{
		path: "/myorder",
		component: () => import("../views/mine/myorder.vue")
	},
	{
		path: "/payment",
		component: () => import("../views/payment/payment.vue")
	},
	{
		path: "/settlement",
		component: () => import("../views/settlement/settlement.vue")
	},
	{
		path: "/member",
		component: () => import("../views/mine/member.vue"),
		children:[
			{
				path: "myorder",
			component: () => import("../views/mine/myorder.vue")
			}
		]
	}
]
const router = new VueRouter({
	mode: "history",
	routes

})


// router.beforeEach((to, from, next) => {
//  console.log('to',to)
//  console.log('from',from)
//  console.log('next',next)
// })
export default router
