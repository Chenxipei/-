<template>
  <!-- 	<div id="main-info">
		<div class="w">
			<div class="detail">
				<div class="details_left">
  <div class="preview_big">-->
  <!-- <img :src="shopobj_url" alt /> -->
  <!-- 	</div>
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
								<span class="details_title">颜色</span>:
							</div>
							<div class="detail_right">
								<span v-for="(i,j) in shopobj.color" :key="j">{{i}}</span>
							</div>
						</div>
						<div class="data_content content_btn">
							<div class="detail_left">
								<div class="btn">
									<input type="text" v-model="num" />
									<p>
										<a href="#" class="hasbor" @click="num++">+</a>

										<a href="#" @click="num>1?(num--):num">-</a>
									</p>
								</div>
							</div>
							<div class="detail_right">
								<div>
									<button class="buy">立即购买</button>

								</div>
								<div>
									<button class="car">加入购物车</button>

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
				<img src="../../assets/imgs/index/shopbigpro.png" alt="">
			</div>
  </div>-->

  <div id="main-info">
    <div class="w">
      <div class="detail">
        <div class="details_left">
          <div class="preview_big">
            <img :src="shopobj_url" alt />
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
              </div>
            </div>
            <div class="data_content content_color">
              <div class="detail_left">
                <span class="details_title">颜色</span>:
              </div>
              <div class="detail_right">
                <span v-for="(i,j) in shopobj.color" :key="j">{{i}}</span>
              </div>
            </div>
            <div class="data_content">
              <div class="detail_left">1</div>
              <div class="detail_right"></div>
            </div>
            <div class="data_content">
              <div class="detail_left">
                <span class="details_title">温馨提示</span>
              </div>
              <div class="detail_right">
                <span>支持七天无理由退货</span>
              </div>
            </div>
            <div>
              <p>菜单</p>
              <!-- <input type="text"> -->
              <button @click="addCart()">加入购物车</button>
              <!-- <v-distpicker v-show="isShowProvince" :class="{'disabled-select': dialogStatus=='update'}" :province="temp.addressprovince" :city="temp.addresscity" :area="temp.address__dist" @selected="onSelected"></v-distpicker> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 回到顶部 -->
    <Totop></Totop>
  </div>
</template>
<script>
// import VDistpicker from 'v-distpicker'
import VDistpicker from "v-distpicker";
import Totop from "../../components/Totop.vue";
export default {
  data() {
    return {
      shopobj: {},
      count: 0,
      num: 1,
      shopobj_urlArr: [],
      shopobj_url: ""
    };
  },
  mounted() {
    this.getShopExplain(this.$router.currentRoute.query.itemld);
  },
  methods: {
    addCart() {
      let goods = {
        cover:this.shopobj.url[0],
        name: this.shopobj.title,
        attr: "口味：奶茶*1+鲜奶*1+酸奶*1",
        price: "100积分",
        num: 1
      };
    },
    getShopExplain(id) {
      this.$axios.get("./data/shopExplain.json").then(res => {
        this.shopobj = res.data.shoplist[id];
        this.shopobj_urlArr = this.shopobj.url;
        console.log(this.shopobj_urlArr[2]);
        this.shopobj_url = this.shopobj_urlArr[0];
      });
    },
    setcurr(val) {
      console.log(val);
      let a = 10;
      a = a > 2 ? a-- : a++;
      this.count = val;
      console.log(this.shopobj_urlArr[val]);
      this.shopobj_url = this.shopobj_urlArr[val];
    }
  },
  components: {
    VDistpicker,
    Totop
  }
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
    // background: skyblue;
    color: #666666;

    .details_title {
      width: 80%;
      //   background: pink;
      display: inline-block;
      text-align-last: justify;
      text-align: justify;
      text-justify: distribute-all-lines;
      margin-right: 5px;
    }
  }
}

#main-info {
  width: 100%;
  // height: 560px;
  background: #ffffff;
  margin: 10px 0;

  .w {
    width: 1200px;
    margin: 0 auto;

    .detail {
      display: flex;
      padding-top: 20px;

      .details_left {
        display: flex;

        .preview_big {
          width: 460px;
          height: 460px;
          border: 1px solid #cccccc;

          //   background: pink;
        }

        .preview_small {
          width: 80px;
          height: 100%;

          //   background: skyblue
          img {
            margin-bottom: 20px;
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
              span {
                border: 2px solid #ff3737;
                color: #ff3737;
                padding: 2px 10px;
                margin-right: 10px;
              }
            }
          }

          .content_distpicker {
            // background: pink;
            margin-bottom: 30px;

            .detail_left {
              padding-top: 12px;
            }

            .detail_right {
              .distpicker-address-wrapper {
                margin-bottom: 10px;

                select {
                  height: 10px !important;
                }
              }

              p {
                span {
                  color: red;
                }
              }
            }
          }

          .content_btn {
            // box-sizing: border-box;
            .detail_left {
              .btn {
                border: 1px solid #c0c0c0;
                width: 60px;
                height: 50px;
                display: flex;

                input {
                  width: 35px;
                  // flex:auto;
                  height: 100%;
                  border: 0;
                  text-align: center;
                }

                p {
                  width: 25px;

                  a {
                    display: block;
                    width: 100%;
                    height: 50%;
                    text-align: center;
                    line-height: 25px;
                    border-left: 1px solid #c0c0c0;
                    background: #f3f3f3;
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
=======
// import VDistpicker from 'v-distpicker'
import VDistpicker from "v-distpicker";
export default {
  data() {
    return {
      shopobj: "",
      count: 0,//大图
      num: 1,//商品数
      coloractive:0,
      ceshi:''
    };
  },
  mounted() {
    this.getShopExplain(this.$router.currentRoute.query.itemld);
  },
  methods: {
    getShopExplain(id) {
      // console.log(id);
      this.$axios.get("./data/shopExplain.json").then(res => {
        // console.log(res.data.shoplist[id]);
        this.shopobj = res.data.shoplist[id];
        this.ceshi = res.data.shoplist[id].url[0]
      });
    },
// 设置大图片
    setcurr(val) {
     this.ceshi = this.shopobj.url[val]
    }
  },
  components: { VDistpicker }
};
</script>
<style scoped lang='less'>
* {
  margin: 0;
  padding: 0;
}
.data_content {
  display: flex;
  .detail_left {
    padding-left: 20px;
    width: 100px;
    // background: skyblue;
    color: #666666;

    .details_title {
      width: 80%;
      //   background: pink;
      display: inline-block;
      text-align-last: justify;
      text-align: justify;
      text-justify: distribute-all-lines;
      margin-right: 5px;
    }
  }
}
#main-info {
  width: 100%;
  height: 560px;
  background: #ffffff;
  margin: 10px 0;
  .w {
    width: 1200px;
    margin: 0 auto;

    .detail {
      display: flex;
      padding-top: 20px;
      .details_left {
        display: flex;
        .preview_big {
          width: 460px;
          height: 460px;
          border: 1px solid #cccccc;

          //   background: pink;
        }
        .preview_small {
          width: 80px;
          height: 100%;
          //   background: skyblue
          img {
            margin-bottom: 20px;
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
              span {
                border: 2px solid #ff3737;
                color: #ff3737;
                padding: 2px 10px;
                margin-right: 10px;
              }
            }
          }
          .content_distpicker {
            background: pink;
          }
        }
      }
    }
  }
}
</style>
>>>>>>> c7d3631650f483431e5375b6618b579be767375b
