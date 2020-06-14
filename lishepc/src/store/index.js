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
    // 购物车数据
    cartData: getStore({ name: "cartData" }) || [],
    // 地址数据
    addressData: getStore({ name: "addressData" }) || [],
    // 结算数据
    totalData: getStore({ name: "totalData" }) || [],
    // 订单数据
    orderData:getStore({name:"orderData"}) || []
  },
  getters: {
    cartData: state => state.cartData,
    addressData: state => state.addressData,
    totalData: state => state.totalData,
    orderData:state => state.orderData
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
    total(state, totalData) {
      // console.log(totalData)
      state.totalData = [
        ...totalData
      ]
    },
    toPay(state) {
      
      state.totalData.map(item => item.payStatus = 0)
      state.totalData = [
        ...state.totalData
      ]
      let oldTotalData = getStore({ name: "totalData" }) || []
      state.orderData = [
        ...oldTotalData,
        ...state.totalData
      ]
      state.cartData = state.cartData.filter(item => {
        return item.selected != true
      })
      setStore({
        name: "totalData",
        content: state.totalData,
        type: ""
      })
      setStore({
        name: "orderData",
        content: state.orderData,
        type: ""
      })
      setStore({
        name: "cartData",
        content: state.cartData,
        type: ""
      })
    },
    pay(state) {
      // let oldTotalData = getStore({ name: "totalData" }) || []

      state.totalData.map(item => item.payStatus = 1)
      state.totalData = [
        // ...oldTotalData,
        ...state.totalData
      ]
      setStore({
        name: "totalData",
        content: state.totalData,
        type: ""
      })
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
