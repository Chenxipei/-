<template>
  <div class="headNav">
    <div class="nav-list">
      <nav class="n-l-item"  v-for="(item,i) in navList" :key="i"   @mouseover="curr = i"    @mouseout="curr=-1" >
        <div class="n-l-name">
          <div class="n-l-n-item" :class="{'active':item.path==$route.path}"  @click="toShopList(item.path,i)" >
            {{item.title}}
            </div>
        </div>
        <div  class="n-l-list" v-show="curr==i&&item.list.length>0" @mouseover="curr = i"  @mouseout="curr=-1" >
          <div class="n-l-l-item" v-for="(l,i) in item.list" :key="i">
            <img :src="l.imgSrc" alt />
            <a href="#" @click="zwget(l.name)">{{l.name}}</a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "headNav",
  data() {
    return {
      curr: 0,
      navList: [
        {
          title: "首页",
          path: "/home",
          list: []
        },
        {
          title: "居家生活",
          path: "/shopList/familyLife",
          list: [
            {
              imgSrc:
                "https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/uploadFromAdmin/2020-05-18/1589802577_40857.jpg",
              name: "家纺床品"
            },
            {
              imgSrc:
                "https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/uploadFromAdmin/2020-05-18/1589805264_77279.jpg",
              name: "百变穿搭"
            },
            {
              imgSrc:
                "https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/uploadFromAdmin/2020-05-18/1589805306_21356.jpg",
              name: "电脑配件"
            },
            {
              imgSrc:
                "https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/uploadFromAdmin/2020-05-18/1589805330_71176.jpg",
              name: "智能设备"
            },
            {
              imgSrc:
                "https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/uploadFromAdmin/2020-05-18/1589805346_13999.jpg",
              name: "收纳用品"
            },
            {
              imgSrc:
                "https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/uploadFromAdmin/2020-05-18/1589805408_59011.jpg",
              name: "生活日用"
            },
            {
              imgSrc:
                "https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/uploadFromAdmin/2020-05-18/1589805455_76804.jpg",
              name: "文具耗材"
            },
            {
              imgSrc:
                "https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/uploadFromAdmin/2020-05-18/1589805472_14246.jpg",
              name: "烹饪厨具"
            }
          ]
        },
        {
          title: "美食酒水",
          path: "/shopList/foodDrink",
          list: [
            {
              imgSrc:
                "https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/uploadFromAdmin/2020-05-18/1589805946_77349.jpg",
              name: "名酒名茶"
            },
            {
              imgSrc:
                "https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/uploadFromAdmin/2020-05-18/1589805957_89001.jpg",
              name: "休闲食品"
            },
            {
              imgSrc:
                "https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/uploadFromAdmin/2020-05-18/1589805965_2621.jpg",
              name: "粮油调味"
            },
            {
              imgSrc:
                "https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/uploadFromAdmin/2020-05-18/1589805982_12528.jpg",
              name: "生鲜蔬果"
            },
            {
              imgSrc:
                "https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/uploadFromAdmin/2020-05-18/1589805982_12528.jpg",
              name: "饮料冲调"
            },
            {
              imgSrc:
                "https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/uploadFromAdmin/2020-05-18/1589806033_38530.jpg",
              name: "营养滋补"
            }
          ]
        },
        {
          title: "数码家电",
          path: "",
          list: []
        },
        {
          title: "美妆个护",
          path: "",
          list: []
        },
        {
          title: "母婴亲子",
          path: "",
          list: []
        },
        {
          title: "运动旅行",
          path: "",
          list: []
        },
        {
          title: "农友精选",
          path: "",
          list: []
        },
        {
          title: "为您精选",
          path: "",
          list: []
        },
        {
          title: "扶贫专区",
          path: "",
          list: []
        }
      ]
    };
  },
  methods: {
    zwget(val) {
      this.$router.push({
        path:"/classify",
        query:{
          val
        }
      });
    },
    toShopList(path) {
      if (!path) return;
      this.$router.push(path);
    },
    remote(path, i) {
      if (!path) return;
      console.log(path, this.$route.path, i);
      if (this.$route.path == path) {
        this.curr = i;
      }
    }
  }
};
</script>

<style scope lang='less'>
.headNav {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  background: rgb(240, 240, 240);
  .nav-list {
    display: flex;
    padding-top: 15px;
    .n-l-item {
			margin: 0 6px;
      .n-l-name {
        padding: 0 20px;
        .n-l-n-item {
          padding-bottom: 5px;
          font-weight: bold;
          font-size: 14px;
          cursor: pointer;
          &:hover {
            box-shadow: inset 0px -2px 0px rgb(255, 78, 76);
            color: rgb(255, 78, 76);
          }
          &.active {
            box-shadow: inset 0px -2px 0px rgb(255, 78, 76);
            color: rgb(255, 78, 76);
          }
        }
      }
    }
    .n-l-list {
			background: #fff;
      position: absolute;
      top: 37px;
      left: 0;
      width: 1200px;
      height: 480px;
      overflow: hidden;
      flex-wrap: wrap;
      border: 1px solid #ddd;
      padding: 15px;
      z-index: 999;
      .n-l-l-item {
        float: left;
        margin-right: 15px;
        img {
          vertical-align: middle;
          width: 50px;
          height: 50px;
        }
        a {
          font-size: 14px;
          color: #333;
          margin: 0 10px;
        }
      }
    }
  }
}
</style>