import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:"",
    redirect:"/home"
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/sort",
    component:()=>import("../views/sort/index.vue")
  },
  {
    path:"/cart",
    component:()=>import("../views/cart/index.vue")
  },
  {
    path:"/personal",
    component:()=>import("../views/personal/index.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
