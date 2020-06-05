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
<<<<<<< HEAD

=======
>>>>>>> a58b3f8c129ed143f6f16f764dde52c94e062b4c
]
const router = new VueRouter({
  routes
})

export default router
