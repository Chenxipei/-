<template>
  <div class="h5tabbar">
    <van-tabbar
      safe-area-inset-bottom
      route
      active-color="#ff7779"
      inactive-color="#000000"
      :z-index="10"
    >
      <van-tabbar-item :to="item.path" v-for="(item, i) in list" :key="i">
        <span>{{item.name}}</span>
        <img
          slot="icon"
          :slot-scope="item"
          :src="item.path===$route.path ? item.activePic : item.pic"
        />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "tabbar",
  data() {
    return {
      active: 0,
      icon: {
        normal: "https://m.lishe.cn/static/images/nav_bt_home_nor.png",
        active: "https://m.lishe.cn/static/images/nav_bt_home_sel.png"
      },
      list: [
        {
          name: "首页",
          path: "/home",
          pic: "https://m.lishe.cn/static/images/nav_bt_home_nor.png",
          activePic: "https://m.lishe.cn/static/images/nav_bt_home_sel.png"
        },
        {
          name: "分类",
          path: "/sort",
          pic: "https://m.lishe.cn/static/images/nav_bt_cln_nor.png",
          activePic: "https://m.lishe.cn/static/images/nav_bt_cln_sel.png"
        },
        {
          name: "购物车",
          path: "/cart",
          pic: "https://m.lishe.cn/static/images/nav_bt_shp_nor.png",
          activePic: "https://m.lishe.cn/static/images/nav_bt_shp_sel.png"
        },
        {
          name: "我的",
          path: "/personal",
          pic: "https://m.lishe.cn/static/images/nav_bt_por_nor.png",
          activePic: "https://m.lishe.cn/static/images/nav_bt_por_sel.png"
        },
        
      ]
    };
  }
};
</script>
<style lang="less">
</style>
