<template>
  <div id="main-info">
    <div class="w">
      <div class="detail">
        <div class="details_left">
          <div class="preview_big">
            <img :src="shopobj.url[count]" alt />
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
             
              <!-- <v-distpicker v-show="isShowProvince" :class="{'disabled-select': dialogStatus=='update'}" :province="temp.addressprovince" :city="temp.addresscity" :area="temp.address__dist" @selected="onSelected"></v-distpicker> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import VDistpicker from 'v-distpicker'
import VDistpicker from "v-distpicker";
export default {
  data() {
    return {
      shopobj: "",
      count: 0,
      
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
      });
    },
    setcurr(val) {
      console.log(val);
      this.count = val;
    },
     handleChange(value) {
        console.log(value);
      }
    // onSelected(data) {
    //   alert(data.province + ' | ' + data.city + ' | ' + data.area)
    //   console.log(data)
    // },
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
          .content_distpicker{
            background: pink;
          }
        }
      }
    }
  }
}
</style>