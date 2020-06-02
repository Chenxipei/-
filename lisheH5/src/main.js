import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// vant组件
import 'vant/lib/index.css'
import {
  Toast,
  Icon,
  Field,
  Button,
  Tabbar,
  Search,
  TabbarItem,
  Lazyload,
  Tab,
  Tabs,
  Progress,
  Loading,
  DropdownMenu,
  DropdownItem,
  Cell,
  CellGroup,
  Collapse,
  CollapseItem,
  Rate,
  ActionSheet,
  List,
  Popup,
  Overlay,
  Uploader,
  Radio,
  Sku,
  ShareSheet
} from 'vant'
Vue.use(Toast)
Vue.use(Icon)
Vue.use(Search)
Vue.use(Field)
Vue.use(Button)
Vue.use(Tabbar)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Lazyload)
Vue.use(Tab).use(Tabs)
Vue.use(Progress)
Vue.use(Loading)
Vue.use(DropdownMenu).use(DropdownItem)
Vue.use(Cell).use(CellGroup)
Vue.use(Collapse).use(CollapseItem)
Vue.use(Rate)
Vue.use(ActionSheet)
Vue.use(List)
Vue.use(Sku)
Vue.use(Popup)
Vue.use(Overlay)
Vue.use(Uploader)
Vue.use(Uploader)
Vue.use(Radio)
Vue.use(ShareSheet)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
