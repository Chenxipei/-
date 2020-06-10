<template>
  <div class="banner">
    <slot name="loginbox"></slot>
    <div class="swiper-container" :class="swiperName" ref="swiperName">
      <div class="swiper-wrapper">
        <slot name="swiper-con"></slot>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination" :class="paginationStyle"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  name: "banner",
  props: {
    paginationType: {
      type: String,
      default: "bullets"
    },
    swiperName: {
      type: String,
      default: ""
    },
    effectType: {
      type: String,
      default: "fade"
    },
    paginationStyle: {
      type: String,
      default: ""
    }
  },
  mounted() {
    var mySwiper = new Swiper("." + this.swiperName, {
      loop: true, // 循环模式选项
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        type: this.paginationType,
        clickable: true
      },
      autoplay: true,
      effect: this.effectType
    });
    for (let i = 0; i < mySwiper.pagination.bullets.length; i++) {
      console.log(mySwiper.pagination.bullets);
      mySwiper.pagination.bullets[i].onmouseover = function() {
        this.click();
      };
    }
  }
};
</script>

<style lang="less">
.banner {
  position: relative;
  .loginbox {
    position: absolute;
    width: 1200px;
    height: 300px;
    z-index: 5;
    left: 50%;
    transform: translateX(-50%);
  }
  .login {
    padding: 60px 10px;
    width: 300px;
    height: 400px;
    z-index: 10;
    top: 50px;
    position: relative;
    background: url(../assets/imgs/index/zhuanshuquanyi.png);
    opacity: 0.8;
    a {
      margin: 0 10px;
      display: inline-block;
      background: #fb6767;
      width: 120px;
      text-align: center;
      height: 30px;
      line-height: 30px;
      border-radius: 20px;
      img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
      span {
        color: #fff;
        margin-left: 3px;
      }
    }
  }
  .swiper-container {
    width: 100%;
    max-width: 1960px;
    height: 500px;
  }

  .swiper-container-cube {
    overflow: hidden;
  }

  .swiper-pagination-bullet {
    //   opacity: 1;
    background: red;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
  }

  .swiper-container-horizontal .right {
    // left: 250/100rem;
  }

  .swiper-container-horizontal .left {
    // left: -250/100rem;
  }

  .swiper-container-horizontal .bottom {
    top: auto;
    bottom: 0;
  }
}
</style>
