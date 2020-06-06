import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {

    path:'/',
    redirect:"/home",
  },
  {
    path:'/classify',
    component:()=>import('../views/Classify/classify.vue')
  },
  {
    path:'/good_detail',
    component:()=>import('../views/Classify/good_detail.vue')
  },
	{
		path:"/home",
		component:()=>import("@/views/home/Home.vue")
	},
	{
		path:"/shopList",
		meta:{
			
		},
		component:()=>import("@/views/shopList/shopList.vue")
	}
,
  {
    path:"/login",
    component:()=>import("../views/login/login.vue")
  },
  {
    path:"/register",
    component:()=>import("../views/login/register.vue")
  }
,
  {
    path:"/cart",
    component:()=>import("../views/cart/index.vue")
  }
]
const router = new VueRouter({
  mode:"history",
  routes
})

export default router
