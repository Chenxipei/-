import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:"/home"
  },
  {
    path:"/login",
    component:()=>import("../views/login/login.vue")
  },
  {
    path:"/register",
    component:()=>import("../views/login/register.vue")
  }
]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router
