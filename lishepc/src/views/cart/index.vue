<template>
  <div class="cartIndex">
    <header class="head">
      <div class="logo" @click="$router.puah('/home')">
        <img
          src="https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/uploadFromAdmin/2020-05-27/1590561641_90344.png"
          alt
        />
        <span>购物车</span>
      </div>
      <div class="search">
        <input type="text" placeholder="综合搜索 商品/品牌/店铺" />
        <a href="#">搜索</a>
      </div>
    </header>
    <add-address></add-address>
    <div class="cart">
      <div class="c-title">
        心意商城
        <span class="cart-num">{{cartData.length}}</span>
      </div>
      <div class="tab-title">
        <div>选择</div>
        <div class="goods">商品</div>
        <div class="goods-info">商品属性</div>
        <div>单价</div>
        <div>数量</div>
        <div>金额</div>
        <div>操作</div>
      </div>
      <div class="cart-box">
        <div class="none-goods" v-show="cartData.length==0">
          购物车空空如也，
          <router-link to="/home">快去选点东西吧</router-link>
        </div>
        <div class="tab-container" v-for="(item,i) in cartData" :key="i">
            <div class="selectAll">
              <i
                :class="item.selected?'el-icon-success':'el-icon-circle-check'"
                @click="changeSelectedStatus(i)"
              ></i>
            </div>
            <div class="goods-info">
              <img :src="item.cover" />
              <p>{{item.name}}</p>
            </div>
            <div class="goods-attr">{{item.attr}}</div>
            <div class="goods-price">{{item.price}}</div>
            <div class="goods-num">
              <el-input-number size="mini" :min="1" v-model="item.num"></el-input-number>
            </div>
            <div class="all-price">{{parseInt(item.price)*item.num}}</div>
            <div class="del">
              <a href="#" @click.prevent="delCartItem(i)">删除</a>
            </div>
        </div>
      </div>

      <div class="tab-total">
        <div class="total-left selectAll">
          <i @click="selectAllFn" :class="selectedAll?'el-icon-success':'el-icon-circle-check'"></i>
          <span class="selall">全选</span>
          <a href="#" class="del" @click.prevent="delCartData">删除</a>
        </div>
        <div class="total-right">
          <div class="all-num">
            <p>
              已选商品
              <span>{{allNum}}</span>件
            </p>
            <p>
              总价：
              <span>{{allPrice}}</span>
            </p>
          </div>
          <div class="total-btn" @click="goTotal()">去结算</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import addAddress from "./addAddress.vue";
import { mapGetters } from "vuex";
import { setStore } from "@/lib/store";
export default {
  data() {
    return {
      // selectedAll: true,
      // cartData: [
      //   {
      //     cover:
      //       "https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/itemPic/2020-06-03/1591163478_32704.jpg?x-oss-process=png/resize,w_100/quality,q_100/format,jpg",
      //     name: "果然萌 台湾风味免煮即食烧仙草3盒装",
      //     attr: "口味：奶茶*1+鲜奶*1+酸奶*1",
      //     price: "100积分",
      //     num: 1
      //   },
      //   {
      //     cover:
      //       "https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/itemPic/2020-06-03/1591163478_32704.jpg?x-oss-process=png/resize,w_100/quality,q_100/format,jpg",
      //     name: "果然萌 台湾风味免煮即食烧仙草3盒装",
      //     attr: "口味：奶茶*1+鲜奶*1+酸奶*1",
      //     price: "100积分",
      //     num: 2
      //   }
      // ]
    };
  },
  components: {
    addAddress
  },
  created() {
    // 初始化选中状态
    this.init_cart_data();
  },
  computed: {
    ...mapGetters(["cartData", "addressData"]),
    allPrice() {
      let all_price = 0;
      this.cartData.forEach(item => {
        if (item.selected) {
          let price = parseFloat(item.price) * item.num;
          all_price += price;
        }
      });
      return all_price;
    },
    selectedAll() {
      return this.cartData.every(item => item.selected == true);
    },
    allNum() {
      let all_num = 0;
      this.cartData.forEach(item => {
        if (item.selected) {
          all_num += item.num;
        }
      });
      return all_num;
    }
  },
  methods: {
    init_cart_data() {
      this.cartData.map(item => (item.selected = true));
      setStore({
        name: "cartData",
        content: this.cartData,
        type: ""
      });
    },
    changeSelectedStatus(i) {
      // console.log(this.cartData[i].selected)
      // this.cartData[i].selected = !this.cartData[i].selected
      // 在 vue 中是无法检测到根据索引值修改的数据变动的
      // 可以这样做
      this.cartData[i]["selected"] = !this.cartData[i]["selected"];
      this.cartData.__ob__.dep.notify();
      // this.$set(this.cartData[i], `selected`, false)
      // console.log(this.cartData)
      setStore({
        name: "cartData",
        content: this.cartData,
        type: ""
      });
    },
    selectAllFn() {
      if (this.selectedAll) {
        this.cartData.map(item => (item.selected = false));
      } else {
        this.cartData.map(item => (item.selected = true));
      }
      this.cartData.__ob__.dep.notify();
      // console.log(this.cartData)
      setStore({
        name: "cartData",
        content: this.cartData,
        type: ""
      });
    },
    delCartData() {
      this.$message.success("清空成功");
      this.$store.commit("delCartData");
    },
    delCartItem(i) {
      this.cartData.splice(i, 1);
      this.$message.success("删除商品成功");
      setStore({
        name: "cartData",
        content: this.cartData,
        type: ""
      });
    },
    goTotal() {
      if (this.addressData.length === 0) {
        this.$message.warning("请添加收货地址");
        return false;
      } else if (this.cartData.length === 0) {
        console.log(this.selectedAll);
        this.$message.warning("商品空空如也，快去选购吧");
        return false;
      } else if (parseInt(this.allPrice) == 0) {
        this.$message.warning("购物车还没有选择商品呢");
        return false;
      } else {
        let totalData = this.cartData.filter(item => {
          return item.selected;
        });
        // console.log(totalData)
        this.$store.commit("total", totalData);
        this.$router.push("/total");
      }
    }
  },
  // 去结算
  methods: {
    gototal(){
      this.$router.push("/settlement")
    }
  },
};
</script>

<style scoped lang='less'>
.my-address {
  font-size: 14px;
}
.table-edit + .table-edit {
  margin-left: 10px;
}
.selectAll {
  text-align: left !important;
  i {
    font-size: 25px;
    color: rgb(245, 80, 83);
    vertical-align: middle;
  }
}
.cart-box {
  .none-goods {
    text-align: center;
    margin: 50px 0;
  }
}
.cartIndex {
  width: 1000px;
  margin: 0 auto 100px;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    height: 120px;
    .logo {
      img {
        vertical-align: -13px;
      }
      span {
        font-size: 22px;
        margin-left: 20px;
      }
    }
    .search {
      height: 40px;
      width: 300px;
      overflow: hidden;
      border-radius: 20px;
      border: 2px solid rgb(245, 80, 83);
      input {
        height: 38px;
        width: 230px;
        outline: 0;
        border: 0;
        padding-left: 30px;
        font-size: 13px;
      }
      a {
        display: block;
        background: rgb(245, 80, 83);
        width: 66px;
        height: 38px;
        float: right;
        text-align: center;
        color: #fff;
        line-height: 38px;
      }
    }
  }

  .cart {
    .c-title {
      font-weight: 600;
      font-size: 18px;
      color: rgb(245, 80, 83);
      border-bottom: 1px solid rgb(245, 80, 83);
      width: 100px;
      padding-bottom: 10px;
      .cart-num {
        display: inline-block;
        width: 18px;
        height: 18px;
        text-align: center;
        line-height: 18px;
        background: rgb(245, 80, 83);
        color: #fff;
        font-weight: normal;
        font-size: 14px;
        border-radius: 15px;
      }
    }
    .tab-title {
      display: flex;
      justify-content: space-between;
      background: rgb(252, 252, 252);
      border: 1px solid #ddd;
      padding: 15px 10px;
      > div {
        &:nth-of-type(1) {
          padding-left: 15px;
          text-align: left !important;
        }
        flex: 1;
        text-align: center;
        &.goods {
          width: 250px;
          overflow: hidden;
          flex: none;
        }
      }
    }
    .tab-container {
      display: flex;
      padding-left: 15px;
      border-bottom: 1px solid #ddd;
      > div {
        flex: 1;
        text-align: center;
        font-size: 13px;
        color: #333;
        margin: 20px 0;
      }
      .goods-info {
        width: 250px;
        overflow: hidden;
        display: flex;
        flex: none;
        img {
          width: 80px;
          height: 80px;
        }
      }
      .goods-price {
        color: #000;
      }
      .all-price {
        color: rgb(245, 80, 83);
      }
    }
    .tab-total {
      margin-top: 30px;
      border: 1px solid #ddd;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 10px;
      font-size: 13px;
      span.selall {
        margin-left: 10px;
        margin-right: 30px;
      }
      .total-right {
        display: flex;
        align-items: center;
        .all-num {
          display: flex;
          margin-right: 30px;
          & p + p {
            margin-left: 30px;
          }
          span {
            font-weight: bold;
            color: rgb(245, 80, 83);
            font-size: 16px;
          }
        }
        .total-btn {
          font-weight: bold;
          height: 60px;
          line-height: 60px;
          width: 120px;
          text-align: center;
          font-size: 20px;
          color: #fff;
          cursor: pointer;
          background: rgb(245, 80, 83);
        }
      }
    }
  }
}
</style>