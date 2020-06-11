<template>
    <div class="head-search">
      <div class="search">
        <div class="logo">
          <router-link to="/home"><img src="../assets/imgs/index/logo_two.png" alt /></router-link>
        </div>
        <div class="search-box">
          <input type="text" placeholder="八马茶叶" />
          <a href="#">
            <i class="searchIput"></i>
          </a>
        </div>
        <div class="cart" @click="goCart()">
          <a href="#">
            <img src="../assets/imgs/index/cart.png" alt />
          </a>
          <p class="ShoppingCart">我的购物车</p>
          <span class="ling">{{$store.state.cartData.length}}</span>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  methods: {
    goCart(){
      this.$router.push("/cart")
    }
  },
};
</script>
<style lang="less" scope>
     .head-search {
    background: rgb(240, 240, 240);
    .search {
      width: 1200px;
      height: 120px;
      margin: 0 auto;
      position: relative;
      display: flex;
      align-items: center;

      .logo {
        width: 188px;
        height: 120px;
        display: flex;
        align-items: center;
        float: left;
      }

      .search-box {
        width: 520px;
        height: 40px;
        border: 2px solid rgb(255, 78, 76);
        border-radius: 20px;
        overflow: hidden;
        margin-left: 100px;
        position: relative;

        input {
          width: 520px;
          height: 40px;
          padding: 0 15px;
          font-size: 12px;
          border: none;
          outline: none;
          line-height: 40px;
        }

        a {
          width: 80px;
          height: 40px;
          display: inline-block;
          position: absolute;
          right: 0;
          top: -2px;
          border-radius: 20px;
          z-index: 999;
          background: rgb(255, 78, 76);

          .searchIput {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 16px;
            height: 16px;
            background-image: url(../assets/imgs/index/search.png);
            background-size: cover;
            background-repeat: no-repeat;
            display: inline-block;
          }
        }
      }
    }
    .cart {
      display: flex;
      align-items: center;
      background-color: #fff;
      border: 1px solid #f3d6d6;
      border-radius: 20px;
      height: 40px;
      padding: 0 15px;
      margin-left: 20px;
      position: relative;
      cursor: pointer;

      .ShoppingCart {
        font-size: 12px;
        color: rgb(255, 78, 76);
        margin-left: 5px;
        margin-right: 5px;
      }
      .ling {
        border: 1px solid #f3d6d6;
        border-radius: 50%;
        background: rgb(255, 78, 76);
        color: #fff;
        width: 20px;
        height: 20px;
        line-height: 1.4;
        text-align: center;
        font-size: 13px;
      }
    }
  }

</style>
