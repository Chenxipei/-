import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'
import echarts from "echarts";

Vue.prototype.$echarts = echarts;
Vue.prototype.$axios=axios

Vue.config.productionTip = false
Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
