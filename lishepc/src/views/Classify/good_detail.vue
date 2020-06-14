<template>
  <div id="main-info">
    <div class="w">
      <div class="detail">
        <div class="details_left">
          <div class="preview_big">
            <img :src="count" alt />
          </div>
          <div class="preview_small">
            <img @mouseover="setcurr(j)" v-for="(i,j) in shopobj.url" :key="j" :src="i" alt />
          </div>
        </div>
        <div class="details_middle">
          <div class="goods_name">{{shopobj.title}}</div>
          <div class="product_data_content">
            <div class="data_content content_price">
              <div class="detail_left">
                <span class="details_title">单价</span>:
              </div>
              <div class="detail_right">
                <span>{{shopobj.newprice}}</span>
                <s>{{shopobj.oldprice}}</s>
              </div>
            </div>
            <div class="data_content content_discount">
              <div class="detail_left">
                <span class="details_title">促销信息</span>:
              </div>
              <div class="detail_right">
                <span>店铺满{{shopobj.discount}}积分包邮</span>
              </div>
            </div>
          </div>
          <div class="address_content_wrap">
            <div class="data_content content_shopname">
              <div class="detail_left">
                <span class="details_title">店铺</span>:
              </div>
              <div class="detail_right">
                <span>{{shopobj.shopname}}</span>
              </div>
            </div>
            <div class="data_content content_distpicker">
              <div class="detail_left">
                <span class="details_title">配送至</span>:
              </div>
              <div class="detail_right">
                <v-distpicker></v-distpicker>
                <p>
                  <span>23:59前下单</span>，预计48小时内发货， 受全国道路交通影响，您的订单以快递实际派送为准，请您耐心等待
                </p>
              </div>
            </div>
            <div class="data_content content_color">
              <div class="detail_left">
                <span class="details_title">{{shopobj.specification}}</span>:
              </div>
              <div class="detail_right">
                <span
                  @click="coloractive=j"
                  :class="{active:coloractive==j}"
                  v-for="(i,j) in shopobj.color"
                  :key="j"
                >{{i}}</span>
              </div>
            </div>
            <div class="data_content content_btn">
              <div class="detail_left">
                <div class="btn">
                  <input type="text" readonly v-model="num" />
                  <p>
                    <span class="hasbor" @click="num++">+</span>
                    <span @click="num>1?(num--):num">-</span>
                  </p>
                </div>
              </div>
              <div class="detail_right">
                <div>
                  <button class="buy">立即购买</button>
                </div>
                <div>
                  <button class="car" @click="addCart()">加入购物车</button>
                </div>
                <div>
                  <button class="enshrine">
                    <p>☆</p>

                    <span>收藏</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="data_content content_tishi">
              <div class="detail_left">
                <span class="details_title">温馨提示</span>
              </div>
              <div class="detail_right">
                <span>支持七天无理由退货</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="futto">
      <div class="w">
        <img src="../../assets/imgs/index/shopbigpro.png" alt />
      </div>
    </div>
    <!-- 回到顶部 -->
    <Totop></Totop>
    <fixedNav></fixedNav>
  </div>
</template>
<script>
import VDistpicker from "v-distpicker";
import Totop from "../../components/Totop.vue";
import fixedNav from "../../components/fixedNav.vue";
import { getStore } from "@/lib/store";
export default {
  data() {
    return {
      shopobj: "",
      count: 0, //大图
      num: 1, //商品数
      coloractive: 0,
      shopobj_urlArr: [],
      shopobj_url: ""
    };
  },
  mounted() {
    this.getShopExplain(this.$router.currentRoute.query.itemld);
  },
  methods: {
    addCart() {
      let userInfo = getStore({ name: "phone" });
      if (!userInfo) {
        this.$router.push("/login");
      } else {
        let goodsItem = {
          cover: this.shopobj.url[0],
          name: this.shopobj.title,
          attr: `${this.shopobj.specification}：${
            this.shopobj.color[this.coloractive]
          }`,
          price: this.shopobj.newprice,
          num: this.num,
        };
        this.$message.success("添加购物车成功")
        this.$store.commit("addCart", goodsItem);
      }
    },
    getShopExplain(id) {
      this.$axios.get("./data/shopExplain.json").then(res => {
        res.data.shoplist.forEach(i => {
          if (i.itemld == id) {
            this.shopobj = i;
            this.count = this.shopobj.url[0];
            this.shopobj_urlArr = this.shopobj.url;
            console.log(this.shopobj_urlArr[2]);
            this.shopobj_url = this.shopobj_urlArr[0];
          }
        });
      });
    },
    // 设置大图片
    setcurr(val) {
      this.count = this.shopobj.url[val];
    }
  },
  components: { VDistpicker, Totop, fixedNav }
};
</script>
<style scoped lang='less'>
.futto {
  width: 100%;
  background: #f0f0f0;
  img {
    margin-top: 30px;
  }
}
* {
  margin: 0;
  padding: 0;
}
.data_content {
  display: flex;
  .detail_left {
    padding-left: 20px;
    width: 100px;
    color: #666666;
    .details_title {
      width: 80%;
      display: inline-block;
      text-align-last: justify;
      text-align: justify;
      text-justify: distribute-all-lines;
      margin-right: 5px;
    }
  }
  .detail_right {
    flex: 1;
  }
}
#main-info {
  width: 100%;
  background: #ffffff;
  margin: 15px 0;
  .w {
    width: 1200px;
    margin: 0 auto;
    .detail {
      display: flex;
      padding-bottom: 80px;
      .details_left {
        display: flex;
        .preview_big {
          width: 460px;
          height: 460px;
          border: 1px solid #cccccc;
        }
        .preview_small {
          width: 80px;
          height: 100%;
          img {
            margin-bottom: 12px;
            border: 1px solid #cccccc;
          }
          img:hover {
            border: 1px solid red;
          }
          margin-left: 20px;
        }
      }
      .details_middle {
        padding-left: 50px;
        .goods_name {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 30px;
        }
        .product_data_content {
          background: #f0f0f0;
          padding: 20px 0;
          .content_price {
            margin-bottom: 20px;
            .detail_right {
              span {
                color: #ff3737;
                font-size: 22px;
                margin-right: 10px;
              }
              s {
                color: #666666;
              }
            }
          }
          .content_discount {
            .detail_right {
              color: #ff3737;
            }
          }
        }
        .address_content_wrap {
          // background: pink;..
          margin-top: 30px;
          .content_shopname {
            margin-bottom: 10px;
            .detail_right {
              span {
                border: 1px solid #ff3737;
                color: #ff3737;
                padding: 2px 10px;
              }
            }
          }
          .content_color {
            margin-bottom: 20px;
            .detail_right {
              display: flex;
              flex-wrap: wrap;
              span {
                border: 1px solid #7f667f;
                color: #7f667f;
                padding: 2px 10px;
                margin-right: 10px;
                margin-bottom: 10px;
              }
              span:hover {
                border: 2px solid #ff3737;
                color: #ff3737;
                padding: 1px 9px;
              }
              .active {
                border: 2px solid #ff3737;
                color: #ff3737;
                padding: 1px 9px;
              }
            }
          }
          .content_distpicker {
            margin-bottom: 30px;
            .detail_left {
              padding-top: 5px;
            }
            .detail_right {
              .distpicker-address-wrapper {
                margin-bottom: 10px;
                select {
                  height: 25px;
                }
              }
              p {
                color: #666666;
                span {
                  color: red;
                }
              }
            }
          }
          .content_btn {
            .detail_left {
              .btn {
                border: 1px solid #c0c0c0;
                width: 50px;
                height: 50px;
                display: flex;
                input {
                  width: 32px;
                  // flex:auto;
                  height: 100%;
                  border: 0;
                  text-align: center;
                }
                p {
                  width: 18px;
                  span {
                    display: block;
                    width: 100%;
                    height: 50%;
                    text-align: center;
                    line-height: 25px;
                    border-left: 1px solid #c0c0c0;
                    background: #f3f3f3;
                    cursor: pointer;
                  }
                  .hasbor {
                    border-bottom: 1px solid #c0c0c0;
                  }
                }
              }
            }
            .detail_right {
              margin-bottom: 20px;
              display: flex;
              button {
                border: none;
                background: transparent;
                height: 50px;
                border-radius: 5px;
                padding: 0 10px;
                margin-right: 10px;
              }
              .buy {
                background: #f55053;
                color: #ffffff;
                font-size: 18px;
              }
              .car {
                border: 1px solid #f55053;
                color: #f55053;
                font-size: 18px;
                padding: 0 20px;
              }
              .enshrine {
                border: 1px solid #c0c0c0;
                color: #b39999;
              }
            }
          }
          .content_tishi {
            color: #666666;
          }
        }
      }
    }
  }
}
</style>