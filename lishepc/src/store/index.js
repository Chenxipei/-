import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    price: {
      min: '',
      max: '',
      count: 0,
      classtou: {
        oneclass: '',
        twoclass: ''
      }
    },
    cartData:[
      
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
