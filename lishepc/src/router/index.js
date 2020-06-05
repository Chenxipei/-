import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:"/home"
  },
  {
    path:"/cart",
    component:()=>import("../views/cart/index.vue")
  }
]
const router = new VueRouter({
  routes
})

export default router
