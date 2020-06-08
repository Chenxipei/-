<template>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 156c8efdcfb26ed31b019eff6a7c303719860570
<div>
     <div class="head-search">
      <div class="search">
        <div class="logo">
          <a href="#">
            <img src="../assets/img/index/logo_two.png" alt />
<<<<<<< HEAD
=======
=======
>>>>>>> 46667d54ebc03a69c1585f536b10e2be051a7073
  <div class="head-search">
      <div class="search">
        <div class="logo">
          <a href="#">
            <img src="../../assets/img/index/logo_two.png" alt />
<<<<<<< HEAD
=======
>>>>>>> e9936d3503d75fc6f6163c484325e199b2170fd3
>>>>>>> 156c8efdcfb26ed31b019eff6a7c303719860570
>>>>>>> 46667d54ebc03a69c1585f536b10e2be051a7073
          </a>
        </div>
        <div class="search-box">
          <input type="text" placeholder="八马茶叶" />
          <a href="#">
            <i class="searchIput"></i>
          </a>
        </div>
        <div class="cart">
          <a href="#">
<<<<<<< HEAD
            <img src="../../assets/img/index/cart.png" alt />
=======
<<<<<<< HEAD
            <img src="../assets/img/index/cart.png" alt />
=======
<<<<<<< HEAD
            <img src="../assets/img/index/cart.png" alt />
=======
            <img src="../../assets/img/index/cart.png" alt />
>>>>>>> e9936d3503d75fc6f6163c484325e199b2170fd3
>>>>>>> 156c8efdcfb26ed31b019eff6a7c303719860570
>>>>>>> 46667d54ebc03a69c1585f536b10e2be051a7073
          </a>
          <p class="ShoppingCart">我的购物车</p>
          <span class="ling">{{$store.state.cartData.length}}</span>
        </div>
      </div>
    </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 156c8efdcfb26ed31b019eff6a7c303719860570
</div>
</template>
<script>
export default {
    
}
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
            background-image: url(../assets/img/index/search.png);
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

<<<<<<< HEAD
=======
=======
>>>>>>> 46667d54ebc03a69c1585f536b10e2be051a7073
</template>

<script>
export default {

}
</script>

<style scope lang='less'>
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
          background-image: url(../../assets/img/index/search.png);
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
<<<<<<< HEAD
=======
>>>>>>> e9936d3503d75fc6f6163c484325e199b2170fd3
>>>>>>> 156c8efdcfb26ed31b019eff6a7c303719860570
>>>>>>> 46667d54ebc03a69c1585f536b10e2be051a7073
</style>