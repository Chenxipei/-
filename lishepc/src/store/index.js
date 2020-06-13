import Vue from 'vue'
import Vuex from 'vuex'
import { setStore, getStore, validatenull } from '@/lib/store'
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
    cartData: getStore({ name: "cartData" }) || [],
    addressData: getStore({ name: "addressData" }) || []
  },
  getters: {
    cartData: state => state.cartData,
    addressData: state => state.addressData
  },
  mutations: {
    addCart(state, goodsItem) {
      // 判断添加的商品属性是否和购物车的商品属性一样,一样就给商品数量+1
      if (state.cartData.length > 0) {
        let pd = state.cartData.filter(item => {
          return item.name == goodsItem.name && item.attr == goodsItem.attr
        })
        // console.log(pd)
        if (pd && pd.length > 0) {
          pd[0].num += goodsItem.num
        } else {
          state.cartData.push(goodsItem)
        }
      } else {
        state.cartData.push(goodsItem)
      }
      setStore({
        name: "cartData",
        content: state.cartData,
        type: ""
      })
    },
    addAddress(state, addressItem) {
      if (!validatenull(addressItem)) {
        state.addressData = [
          ...addressItem
        ]
        setStore({
          name: "addressData",
          content: state.addressData,
          type: ""
        })
      }

    },
    delCartData(state) {
      state.cartData = []
      setStore({
        name: "cartData",
        content: state.cartData,
        type: ""
      })
    }

  },
  actions: {
  },
  modules: {
  }
})
