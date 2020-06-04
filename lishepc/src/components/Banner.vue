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
    new Swiper("." + this.swiperName, {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        type: this.paginationType,
				clickable:true
      },
      autoplay: true,
      effect: this.effectType
    });
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
	//   opacity: 1;
	  background: red
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
