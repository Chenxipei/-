<template>
  <div class="classify">
    <div class="header w">
      <zwhead :mylist="routerlist"></zwhead>
    </div>
    <div class="content w">
      <item :list="classifyjson"></item>
    </div>
    <div class="sidebar">
      <ul>
        <li v-for="(i,j) in sidebar" :key="j">
          <p @mouseover="sidebarshow=j" @mouseout="sidebarshow=-1">{{i.txt}}</p>
          <div v-show="sidebarshow==j&&j!=0">{{i.num}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import item from "../../components/item.vue";
import zwhead from "../../components/zwhead.vue";

// import headtabbar from "../../components/headtabbar.vue";

export default {
  components: {
    item,
    zwhead
    // headtabbar
  },
  data() {
    return {
      cmin: "",
      cmax: "",
      routerlist: {
        pinlai: {
          lists: [
            "全部",
            "恒源祥",
            "北极绒",
            "万事利",
            "富安娜",
            "多样屋",
            "金丝莉",
            "啄木鸟"
          ],
          list: [
            "全部",
            "恒源祥",
            "北极绒",
            "万事利",
            "富安娜",
            "多样屋",
            "金丝莉",
            "啄木鸟",
            "迪士尼",
            "LOVO",
            "维科",
            "小黄人",
            "洁丽雅",
            "花花公子",
            "洁玉",
            "水星",
            "金号",
            "罗莱LOVO",
            "施力普",
            "最生活",
            "艾莱依",
            "KENZO",
            "赛诺（SINOMAX）",
            "赛诺（SINOMAX）",
            "BOSS",
            "睡眠博士（AiSleep）",
            "慕思",
            "多喜爱/美眠康",
            "Alina莉娜睡宝",
            "我叫白小飞",
            "奥拉芙",
            "艾维I-WILL",
            "馨亭",
            "内野",
            "梦洁",
            "孚日",
            "朴眠",
            "梦洁美颂",
            "恒立",
            "舒适地带",
            "多喜爱 Dohia",
            "Purenlatex",
            "LT DUCK *SINCE1948*"
          ]
        },
        navList: [
          {
            title: "居家生活",
            // path: "/familyLife",
            list: [
              {
                name: "家纺床品"
              },
              {
                name: "百变穿搭"
              },
              {
                name: "电脑配件"
              },
              {
                name: "智能设备"
              },
              {
                name: "收纳用品"
              },
              {
                name: "生活日用"
              },
              {
                name: "文具耗材"
              },
              {
                name: "烹饪厨具"
              }
            ]
          },
          {
            title: "美食酒水",
            path: "/foodDrink",
            list: [
              {
                name: "名酒名茶"
              },
              {
                name: "休闲食品"
              },
              {
                name: "粮油调味"
              },
              {
                name: "生鲜蔬果"
              },
              {
                name: "饮料冲调"
              },
              {
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
        ],
        shop: ["综合排序", "销量", "价格", "上架时间"]
      },

      classifyjson: "",
      sidebarshow: 0,
      sidebar: [
        {
          txt: "a",
          num: "1"
        },
        {
          txt: "b",
          num: "2"
        },
        {
          txt: "c",
          num: "3"
        }
      ]
    };
  },
  mounted() {
    this.getclassify();
  },
  methods: {
    getclassify() {
      this.$axios.get("./data/classify.json").then(res => {
        console.log(res.data.recommend_one);
        this.classifyjson = res.data.recommend_one;
      });
    },
    setlist() {
      console.log(this.cmin, this.cmax);
      if (this.cmin >= 0 && this.cmax >= 0) {
        console.log("keyi");
      } else {
        console.log("输入错了");
      }
    }
  }
};
</script>
<style scoped lang='less' >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.w {
  width: 1200px;
  margin: 0 auto;
}

.header {
  background: #ffffff;
  padding: 0 20px;
  // margin-top: 20px;
  border-radius: 10px;
}
.sidebar {
  width: 40px;

  background: #ffffff;
  position: fixed;
  text-align: center;
  top: 20%;
  right: 50px;
  border-radius: 100px;

  ul {
    position: relative;
    li {
      height: 50px;
      margin: 0 5px;
      border-bottom: 1px solid #cccccc;
      p {
        background: pink;
      }
      div {
        position: absolute;
        left: -150px;
        background: skyblue;
        top: 10px;
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>