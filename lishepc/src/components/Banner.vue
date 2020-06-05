.<template>
  <div class="banner">
    <div class="swiper-container" :class="swiperName">
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
    console.log(this.paginationStyle);
    var mySwiper = new Swiper("." + this.swiperName, {
      loop: true, // 循环模式选项
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
      mySwiper.pagination.bullets[i].onmouseover = function() {
        this.click();
      };
    }
  }
};
</script>

<style lang="less">
.banner {
  .swiper-container {
    width: 100%;
    max-width: 1960px;
    height: 500px;
  }
  .swiper-container-cube {
    overflow: hidden;
  }
  .swiper-pagination-bullet {
    background: red;
  }
  .swiper-slide img {
    width: 100%;
    height: 100%;
  }
  .swiper-container-horizontal .bottom {
    top: auto;
    bottom: 0;
  }
}
</style>
