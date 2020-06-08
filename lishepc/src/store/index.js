import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     price:{
       min:'',
       max:'',
       count:0,
       classtou:{
        oneclass:'',
        twoclass:''
       }
     },
     cartData:[],
     addressData:[]
  },
  getters: {
    cartData: state => state.cartData,
    addressData:state => state.addressData
	},
  mutations: {
    addCart(state,goodsItem){
      console.log(goodsItem)
      state.cartData = [
        ...state.cartData,
        goodsItem
      ]
      console.log(state.cartData)
    },
    delCartData(state){
      state.cartData = []
    }
    
  },
  actions: {
  },
  modules: {
  }
})
