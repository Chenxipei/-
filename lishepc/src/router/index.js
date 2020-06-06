import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
<<<<<<< HEAD
    path: '',
    redirect: "/home"
=======

    path:'/',
    redirect:"/home",
>>>>>>> c4a8bf1fc1fe66c43f379af6444e8588b1e7c5aa
  },
  {
    path: "/cart",
    component: () => import("../views/cart/index.vue")
  },
<<<<<<< HEAD
=======
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
>>>>>>> c4a8bf1fc1fe66c43f379af6444e8588b1e7c5aa
  {
    path: '/classify',
    component: () => import('../views/Classify/classify.vue')
  },
  {
<<<<<<< HEAD
    path: "/home",
    component: () => import("@/views/home/Home.vue")
  },
  {
    path: "/shopList",
    meta: {

    },
    component: () => import("@/views/shopList/shopList.vue")
  },
=======
    path:"/register",
    component:()=>import("../views/login/register.vue")
  }
,
>>>>>>> c4a8bf1fc1fe66c43f379af6444e8588b1e7c5aa
  {
    path: "/login",
    component: () => import("../views/login/login.vue")
  },
  {
    path: "/register",
    component: () => import("../views/login/register.vue")
  }
<<<<<<< HEAD

=======
>>>>>>> c4a8bf1fc1fe66c43f379af6444e8588b1e7c5aa
]
const router = new VueRouter({
  mode: "history",
  routes
})

export default router
