import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    goodsData:[
      
    ]
  },
  // getters:{
  //   goodsData: state => state.goodsData
  // },
  mutations: {
    setCart(state,goods){
      state.goodsData = [
        
      ]
    }
  },
  actions: {
    
  },
  modules: {
  }
})
