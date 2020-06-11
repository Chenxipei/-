<template>
  <div class="sellementHead">
    <div class="top">
      <div class="warp-left">
        <img src="../../assets/imgs/settlement/1590561641_90344.png" alt />
        <span>结算页</span>
      </div>
      <div class="warp-rigth">
        <el-steps :active="2" align-center>
          <el-step title="我的购物车"></el-step>
          <el-step title="填写核对订单信息"></el-step>
          <el-step title="成功提交订单"></el-step>
        </el-steps>
      </div>
    </div>
    <!-- 收货地址 -->
    <add-Address></add-Address>
    <div class="goodsList">
      <!-- 商品列表 -->
      <div class="wrap">
        <h4 class="clear title">确认订单信息</h4>
        <div class="commodity_head clear">
          <div class="commodity">店铺宝贝</div>
          <div class="comm_attr">商品属性</div>
          <div class="price">单价</div>
          <div class="quantity">数量</div>
          <div class="sum">优惠方式</div>
          <div class="controller">小计</div>
        </div>
      </div>
      <div class="shop_list_wrap">
        <div class="group_item" v-for="(item,i) in cartData" :key="i">
          <ul class="shopping_ul">
            <li>
              <a href="#">
                <img :src="item.cover" alt />
              </a>
              <span>{{item.name}}</span>
            </li>
            <li class="attr_con">
              <span>{{item.attr}}</span>
            </li>
            <li class="comm_price">
              <p class="skuCashPoint">{{item.price}}</p>
            </li>
            <li class="number">{{item.num}}</li>
            <li class="you">
              满1积分包邮
              <!-- <img src="../../assets/imgsrc/settlement/you.png" alt /> -->
            </li>
            <li class="sum_text">
              <p class="sum_price">{{parseInt(item.price)*item.num}}</p>
            </li>
          </ul>
          <p class="inv-note">
            <input type="text" placeholder=" 商品备注（所填内容建议已经和商家达成一致意见，85字以内）" />
          </p>
          <p class="bottom">
            <span>普通快递 运费：</span>
            <span>0积分</span>
            <span class="fr">
              总质量:0.25kg；店铺总计:
              <b>{{parseInt(item.price)*item.num}}</b>
            </span>
          </p>
        </div>
      </div>
      <!-- 优惠券 -->
      <div class="discounts">
        <h3>优惠券</h3>
        <div class="yhq">
          <select name="couponCode" id="coupon" type="select-one">
            <option value="0" selected="true" class="coupon">不使用优惠券</option>
          </select>
          <input type="text" placeholder="输入优惠码" />
          <span class="discounts_btn">兑换</span>
        </div>
      </div>
      <!-- 礼金余豆 -->
      <div class="gift_cards">
        <h3 class="gift_cards_title">礼金豆余额</h3>
        <p class="jindou">
          <span class="cards_deduction">无可用礼金豆余额</span>
          <el-switch v-model="value2" disabled></el-switch>
        </p>
      </div>
      <!-- 去结算 -->
      <div class="clearing">
        <div class="right_clearing">
          <div class="left_account">
            <h3>
              购物须知
              <span>（如下品类将不享受“7天无理由退货”政策）</span>
            </h3>
            <p>① 消费者定制商品；</p>
            <p>② 生鲜鲜活易腐商品；</p>
            <p>③ 在线下载或消费者拆封的音像制品、计算机软件等数字化商品；</p>
            <p>④ 食用类商品非食品本身问题，不接受退换；</p>
            <p>⑤ 奢侈品等贵重类商品；</p>
            <p>⑥ 个人护理、贴身类商品；</p>
            <p>⑦ 礼品卡等虚拟类商品；</p>
            <p>⑧ 婴童喂养用品；</p>
            <p>⑨ 跨境商品价格已含税费，且不支持退换货。</p>
          </div>
          <div class="right_account">
            <p>
              商品应付总计:
              <span class="price1">{{allPrice}}积分</span>
            </p>
            <p>
              应付总额:
              <span class="price2">
                {{allPrice}}
                <b>元</b>
              </span>
            </p>
            <p>
              寄送至:
              <span class="price3">{{addressData[0].address}}</span>
            </p>
            <p>
              收货人:
              <span class="price4">{{addressData[0].name}}</span>
            </p>
          </div>
        </div>
      </div>
      <!-- 底部按钮 -->
      <div class="bottom_cart">
        <span class="goback" @click="goCart()">
          <!-- <img src="../../assets/imgsrc/settlement/blue_back.png" alt /> -->
          返回购物车
        </span>
        <span class="dindan" @click="topayment()">提交订单</span>
      </div>
    </div>
  </div>
</template>
<script>
import addAddress from '../cart/addAddress.vue'
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      value2: false
    };
  },
  components:{
	addAddress
  },
  computed: {
    ...mapGetters(["addressData", "cartData"]),
    allPrice() {
      let all_price = 0;
      this.cartData.forEach(item => {
        if (item.selected) {
          let price = parseFloat(item.price) * item.num;
          all_price += price;
        }
      });
      return all_price;
    }
  },
  methods: {
    goCart() {
      this.$router.push("/cart");
    },
    topayment() {
      this.$router.push("/payment");
    }
  }
};
</script>
<style lang="less" scope>
.sellementHead {
  width: 1000px;
  margin: 0 auto;

  .top {
    display: flex;
    justify-content: space-between;
    height: 120px;
    align-items: center;

    .warp-left {
      span {
        font-size: 22px;
        height: 40px;
        line-height: 40px;
        padding-left: 15px;
      }
    }

    .warp-rigth {
      width: 600px;
      margin-right: -80px;
    }

    .el-step__title {
      font-size: 14px;
    }
  }

  .content_details {
    padding: 30px;

    .info_title .xinxi {
      font-size: 16px;
      color: #333;
      font-weight: bold;
      line-height: 16px;
    }

    .address_info {
      width: 1000px;
      border: 1px dotted #dadada;
      background-color: #fff;
      height: 72px;
      margin-top: 10px;

      .sl_ul {
        overflow: hidden;
        margin-right: 20px;
      }

      .username {
        width: 150px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid red;
        margin-top: 20px;
        margin-left: 20px;
      }
    }
  }
}

.my-address {
  font-size: 14px;
}

.my-address {
  .address-list {
    border: 1px dashed #ddd;
    padding: 5px 20px;

    .item {
      display: flex;
      font-size: 13px;
      margin: 15px 0;

      &:hover {
        background: rgb(255, 243, 243);

        .edit {
          display: block;
        }
      }

      > div + div {
        padding: 6px 0;
        margin: 0 10px;
      }

      > div {
        &.name-box {
          padding: 6px 0;
          width: 140px;
          position: relative;
          text-align: center;
          border: 1px solid #ff0000;
          overflow: hidden;

          .el-icon-check {
            position: absolute;
            right: -2px;
            bottom: -8px;
            color: #fff;
            background: rgb(245, 80, 83);
            width: 20px;
            height: 20px;
          }
        }
      }

      .edit {
        display: none;
      }
    }
  }

  .address-menu {
    display: flex;
    padding: 20px 0;
    justify-content: space-between;
    font-size: 13px;
  }
}

//商品列表

.wrap {
  h4 {
    padding: 20px 0;
    font-size: 16px;
    color: #333;
  }

  .commodity_head {
    display: flex;
    color: #666;
    font-size: 12px;
    height: 43px;
    line-height: 43px;
    text-align: center;
  }

  .commodity {
    width: 260px;
    border-bottom: 2px solid #bae0f3;
  }

  .comm_attr {
    width: 203px;
    border-bottom: 2px solid #ffd3d1;
  }

  .price {
    width: 114px;
    border-bottom: 2px solid #bae0f3;
  }

  .quantity {
    width: 115px;
    border-bottom: 2px solid #ffd3d1;
  }

  .sum {
    width: 170px;
    border-bottom: 2px solid #bae0f3;
  }

  .controller {
    width: 138px;
    border-bottom: 2px solid #ffd3d1;
  }
}

.group_item {
  width: 1000px;
  background: rgb(245, 253, 255);

  .shopping_ul {
    padding-top: 16px;
    padding-left: 10px;
    display: flex;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    li {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: center;
      font-size: 12px;
    }
    li:nth-of-type(1) {
      width: 260px;
    }
    li:nth-of-type(2) {
      width: 203px;
    }
    li:nth-of-type(3) {
      width: 114px;
    }
    li:nth-of-type(4) {
      width: 115px;
    }
    li:nth-of-type(5) {
      width: 170px;
    }
    li:nth-of-type(6) {
      width: 129px;
    }
    img {
      width: 65px;
      height: 65px;
      border: 1px solid #eee;
      margin-right: 10px;
    }
  }

  .inv-note {
    padding-left: 10px;
    padding-bottom: 10px;
    input {
      width: 40%;
      padding-left: 10px;
      font-size: 12px;
      height: 30px;
      line-height: 30px;
      border: 1px solid #dadada;
      margin-top: 10px;
      outline: none;
    }
  }
}

.bottom {
  padding: 10px 0;
  background: #fff;
  span {
    font-size: 12px;
    color: #666;
  }
}

.fr {
  b {
    color: rgb(245, 80, 83);
  }
}

// 优惠券
.discounts {
  margin-top: 30px;
  position: relative;

  h3 {
    font-size: 16px;
    color: #333;
    margin-bottom: 10px;
  }

  .yhq {
    overflow: hidden;

    #coupon {
      width: 180px;
      height: 30px;
      border: 1px solid #dadada;
      box-sizing: border-box;
      border-radius: 4px;
      padding-left: 10px;
      color: #666;
      outline: none;
      float: left;
      line-height: 30px;
      font-size: 14px;
    }

    input {
      line-height: 30px;
      height: 30px;
      width: 159px;
      float: left;
      margin-left: 20px;
      color: #666;
      padding-left: 10px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border: 1px solid #dadada;
      border-right: 0 !important;
      outline: none;
      font-size: 12px;
    }

    .discounts_btn {
      width: 50px;
      height: 30px;
      background: #f55053;
      color: #fff;
      text-align: center;
      line-height: 30px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      float: left;
      font-size: 12px;
      cursor: pointer;
      transition: 0.3s;
      -webkit-transition: 0.3s;
    }
  }
}

.gift_cards {
  align-items: center;
  margin-top: 20px;

  h3 {
    font-size: 16px;
  }

  .jindou {
    margin-top: 20px;
  }

  .el-switch__core {
    margin-left: 80px;
  }
}

// 去结算
.clearing {
  font-size: 12px;
  margin-top: 15px;
  line-height: 25px;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;

  .right_clearing {
    border: 1px solid #ff4c4c;
    overflow: hidden;
    padding: 20px;
    display: flex;
    justify-content: space-between;

    .left_account {
      float: left;
      overflow: hidden;
      width: 360px;

      h3 {
        font-size: 15px;
        color: #333;
      }

      p {
        color: #666;
      }

      span {
        color: #666;
        font-size: 12px;
        font-weight: 400;
      }
    }
  }

  .right_account {
    text-align: right;

    p {
      font-size: 16px;
      font-weight: 600;
    }

    .price1 {
      font-weight: normal;
      font-size: 12px;
    }

    .price2 {
      font-size: 24px;
      color: rgb(245, 80, 83);

      b {
        font-size: 14px;
      }
    }

    .price3 {
      font-weight: normal;
      font-size: 12px;
    }

    .price4 {
      font-weight: normal;
      font-size: 12px;
    }
  }
}

// 底部按钮
.bottom_cart {
  text-align: right;
  span {
    &:hover {
      cursor: pointer;
    }
  }
}

.goback img {
  margin-right: 5px;
  vertical-align: baseline;
}

.dindan {
  background: #ff4138;
  color: #fff;
  height: 40px;
  min-width: 195px;
  display: inline-block;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
}
</style>
