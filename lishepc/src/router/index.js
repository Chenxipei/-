import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [

  {
    path:'/',
    redirect:"/home",
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
]

const router = new VueRouter({
  routes
})

export default router
