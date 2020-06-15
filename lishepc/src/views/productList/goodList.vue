<template>
  <div class="content">
    <!-- 轮播图区域 -->
    <div class="banner-wrap">
      <el-carousel height="480px">
        <el-carousel-item v-for="(item,i) in carousel" :key="i">
          <img style="height:480px" :src="item.img" alt srcset />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--  详情列表1-->
    <div class="brand_title" v-for="(i,index) in good_list" :key="index" ref="brand_title">
      <h3 :class="{'cnxh-title':i.title=='猜您喜欢'}" ref="title">{{i.title}}</h3>
      <ul
        v-if="i.title!='精选店铺'"
        class="component-item"
        :class="{'yxyl':i.title=='优选有礼','cnxh':i.title=='猜您喜欢'}"
      >
        <li v-for="(item,index) in i.group_list" :key="index">
          <img :src="item.img_url" class="component_r_img" />
          <!-- 详情列表2 -->
          <div class="component_box" v-if="i.title=='优选有礼'">
            <p class="titel">{{item.txt_title}}</p>
            <p class="introduce">{{item.introduce}}</p>
            <p class="price">
              {{item.price}}
              <span>积分</span>
              <s>154.8分</s>
            </p>
            <div class="list_btn">
              <p class="RedeemNow">立即兑换 ></p>
              <img src="../../assets/imgs/details/cart_26.png" alt />
            </div>
          </div>
          <!-- 详情列表3 -->
          <div class="content_list" v-if="i.title=='猜您喜欢'">
            <p class="txt_title">{{item.txt_title}}</p>
            <p class="introduce">{{item.introduce}}</p>
            <p class="integral">
              {{item.integral}}
              <span>积分</span>
              <img src="../../assets/imgs/details/user_cart.png" alt />
            </p>
          </div>
        </li>
      </ul>
      <!-- 轮播图区域 -->
      <div v-else id="jxdp">
        <div class="swiper-container" ref="banner">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(banner,i) in i.group_list" :key="i">
              <img :src="banner.imgSrc" alt />
            </div>
          </div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="banner1">
      <img src="@/assets/imgs/details/1589262526_28974.png" alt />
    </div>
    <!-- 右侧导航 -->
    <Totop>
      <div class="nav-float-l" slot="nav-float-l">
        <div class="nav-float-l-top">
          <p>居家生活</p>
          <img src="../../assets/imgs/details/1591327317.jpg" alt />
        </div>
        <div class="nav_link" v-for="(item,i) in navTitle" :key="i" @click="goAssignBlock(i,50)">
          <p :class="{'active':i===navActive}">{{item}}</p>
        </div>
      </div>
    </Totop>
    <fixedNav></fixedNav>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
import Totop from "../../components/Totop.vue";
import fixedNav from "../../components/fixedNav.vue";
export default {
  name: "goodList",
  components: {
    Totop,
    fixedNav
  },
  data() {
    return {
      // 存在对象里面
      navActive: "",
      navTitle: ["精选大牌", "优选有礼", "猜您喜欢"],
      carousel: [
        {
          img:
            "https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/uploadFromAdmin/img/2020-05-19/1589884552_88364.jpg?x-oss-process=png/resize,w_1920/quality,q_80/format,jpg"
        },
        {
          img:
            "https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/uploadFromAdmin/img/2020-05-19/1589884586_34327.jpg?x-oss-process=png/resize,w_1920/quality,q_80/format,jpg"
        }
      ],
      good_list: [],
      banner_list: [],
      yxyl: []
    };
  },
  mounted() {
    this.getlist();
    window.onscroll = e => {
	  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	//   console.log(scrollTop)
	  let titleEl = Array.from(this.$refs.brand_title);
	//   console.log(titleEl)
      titleEl.forEach((item, i) => {
        if (scrollTop>= item.offsetTop) {
			console.log(item.offsetTop,i)
          this.navActive = i;
        }
      });
    };
  },
  methods: {
    getlist() {
      this.$axios.get("/data/goodsList.json").then(res => {
        // console.log("美女", res.data.group);
        this.good_list = res.data.group;
        this.banner_list = res.data.banner;
      });
    },
    goAssignBlock(el, speed) {
		console.log(el)
		console.log(this.$refs.brand_title[0].offsetHeight)
      let _this = this;
      let windowH = window.innerHeight; //浏览器窗口高度
      let h = this.$refs.brand_title[el].offsetHeight; //模块内容高度
      let t = this.$refs.brand_title[el].offsetTop; //模块相对于内容顶部的距离
      let top = t - (windowH - h) / 2; //需要滚动到的位置，若改为 t 则滚动到模块顶部位置，此处是滚动到模块相对于窗口垂直居中的位置
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; //滚动条距离顶部高度
      let currentTop = scrollTop; //默认滚动位置为当前滚动条位置，若改为0，则每次都会从顶部滚动到指定位置
      let requestId;
      //采用requestAnimationFrame，平滑动画
      function step() {
        //判断让滚动条向上滚还是向下滚
        if (scrollTop < top) {
          if (currentTop <= top) {
            //   window.scrollTo(x,y) y为上下滚动位置
            window.scrollTo(0, currentTop);
            requestId = window.requestAnimationFrame(step);
          } else {
            window.cancelAnimationFrame(requestId);
          }
          //向下滚动
          currentTop += speed;
        } else {
          if (top <= currentTop) {
            //注：此处 - speed 是解决居中时存在的问题，可自行设置或去掉
            window.scrollTo(0, currentTop - speed);
            requestId = window.requestAnimationFrame(step);
          } else {
            window.cancelAnimationFrame(requestId);
          }
          //向上滚动
          currentTop -= speed;
        }
      }
      window.requestAnimationFrame(step);
    }
  },
  watch: {}
};
</script>
<style lang="less" scoped>
.content {
  background: rgb(245, 245, 245);
  .brand_title {
    width: 1200px;
    margin: 0 auto;
    padding: 18px 0 0;
    h3 {
      font-size: 28px;
      color: #333;
      &.cnxh-title {
        text-align: center;
      }
    }
    .component-item {
      box-sizing: border-box;
      margin: 0 auto;
      padding-top: 28px;
      width: 1200px;
      overflow: hidden;
      .component_r_img {
        width: 600px;
        height: 379px;
        float: left;
        padding-bottom: 24px;
        cursor: pointer;
      }
      &.yxyl {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        cursor: pointer;
        li {
          width: 590px;
          height: 100%;
          padding: 13px 0 13px 13px;
          display: flex;
          justify-content: space-between;
          background: #fff;
          margin-bottom: 20px;
          &:nth-of-type(even) {
            margin-left: 20px;
          }
          .component_r_img {
            width: 255px;
            height: 255px;
            float: none;
          }
        }
      }
      &.cnxh {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        cursor: pointer;
        li {
          width: 19%;
          padding: 15px 19px;
          margin-bottom: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background: #fff;
          img {
            width: 190px;
            height: 190px;
          }
        }
      }
      .component_box {
        width: 293px;
        height: 255px;
        box-sizing: border-box;
        background: #fff;
        .titel {
          font-size: 24px;
          color: #2a2a2a;
          font-weight: bold;
          height: 56px;
          line-height: 28px;
          overflow: hidden;
        }
        .introduce {
          font-size: 15px;
          color: #686868;
          height: 60px;
          line-height: 20px;
          overflow: hidden;
          margin-top: 8px;
        }
        .price {
          color: #be4754;
          font-size: 42px;
          font-weight: bold;
          text-align: left;
          span {
            font-size: 18px;
          }
          s {
            color: #828282;
            font-size: 14px;
          }
        }
        .list_btn {
          display: flex;
          margin-top: 15px;
          .RedeemNow {
            width: 146px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 24px;
            background: #bd3b44;
            color: #fff;
            margin-right: 50px;
          }
        }
      }
      .content_list {
        .txt_title {
          font-size: 20px;
          color: #555;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          margin-bottom: 5px;
        }
        & .introduce {
          font-size: 14px;
          color: #666;
          width: 190px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          margin-bottom: 16px;
        }
        & .integral {
          font-size: 20px;
          color: #ff4e4c;
          line-height: 24px;
        }
        & .integral img {
          width: 18px;
          height: 18px;
          float: right;
          margin-top: 4px;
        }
      }
    }
  }
  .nav-float-l {
    // position: fixed;
    // right: 5%;
    // top: 200px;
    // z-index: 999;
    // width: 83px;
    text-align: center;
    background: white;
    color: #666;
    border-radius: 6px;
    .nav-float-l-top {
      color: #ff4c4e;
      font-size: 15px;
      padding: 10px;
      box-sizing: border-box;
      font-weight: bold;
      height: 65px;
    }
    .nav_link {
      p {
        &.active {
          background: rgb(255, 65, 56);
          border-radius: 5px;
          color: #fff;
        }
        color: #666;
        // width: 62px;
        height: 25px;
        font-size: 12px;
        line-height: 25px;
        display: block;
        text-align: center;
        // float: left;
        margin: 6px 0;
        // margin-left: 10px;
        // overflow: hidden;
        // 					white-space: nowrap;
        // 					text-overflow: ellipsis;
      }
    }
  }
}
</style>
