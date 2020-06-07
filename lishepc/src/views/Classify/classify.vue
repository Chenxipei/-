<template>
  <div class="classify">
    <div class="header w">
      <zwhead :mylist="routerlist">
        <div slot="pricefrom" class="price">
          价格区间：
          <input type="text" @input="inp" v-model="cmin" />
          <span>-</span>
          <input type="text" @input="inp" v-model="cmax" />
          <span class="btn" @click="setlist">
            <a href="#">确定</a>
          </span>
        </div>
      </zwhead>
    </div>
    <div class="content w">
      <item :list="classifyjson"></item>
    </div>
    <!-- <div class="sidebar">
      <ul>
        <li v-for="(i,j) in sidebar" :key="j">
          <p @mouseover="sidebarshow=j"  @mouseout="sidebarshow=-1">
            {{i.txt}}
            回去
          </p>
          <div v-show="sidebarshow==j&&j!=0">{{i.num}}</div>
        </li>
      </ul>
    </div> -->
		<Totop></Totop>
		<fixedNav></fixedNav>
  </div>
</template>
<script>
import item from "../../components/item.vue";
import zwhead from "../../components/zwhead.vue";
import Totop from '../../components/Totop.vue'
import fixedNav from '../../components/fixedNav.vue'
export default {
  components: {
    item,
    zwhead,
		Totop,
		fixedNav
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
            list: [
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
            title: "美妆个护",
            path: "",
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
                name: "文具耗材"
              },
              {
                name: "烹饪厨具"
              }
            ]
          },
          {
            title: "母婴亲子",
            path: "",
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
                name: "烹饪厨具"
              }
            ]
          },
          {
            title: "运动旅行",
            path: "",
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
              }
            ]
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
     window.addEventListener("scroll",this.showbtn,true);
  },
  // 监控路由
  computed: {
    aaa() {
      //  console.log('wo',this.$store.state.price.classtou.oneclass+''+this.$store.state.price.classtou.twoclass)
      return (
        this.$store.state.price.classtou.oneclass +
        "" +
        this.$store.state.price.classtou.twoclass
      );
    }
  },
  // 监控路由
  watch: {
    aaa: function(newval, oldval) {
      // console.log('he',newval,oldval);
      if (newval == "00") {
        // console.log('换家纺')
        this.$store.state.price.count = 0;
        this.getclassify();
      } else if (newval == "22") {
        // console.log('换智能')
        this.$store.state.price.count = 1;
        this.getclassify();
      }
    }
  },
  methods: {
    getclassify() {
      this.$axios.get("./data/classify.json").then(res => {
        let num = this.$store.state.price.count;
        this.classifyjson = res.data.recmmend[num].list;
      });
    },
    // 搜索功能
    setlist() {
      let arr = [];
      if (this.cmin != "" && this.cmax != "") {
        this.$store.state.price.min = +this.cmin;
        this.$store.state.price.max = +this.cmam;
        this.classifyjson.forEach(i => {
          if (+this.cmin <= i.score && +this.cmax >= i.score) {
            console.log(i.score);
            arr.push(i);
          }
        });
        this.classifyjson = arr;
      }
    },
    // 判断搜素数据是否有效
    inp(e) {
      if (parseInt(e.data) >= 0) {
      } else {
        this.cmin = "";
        this.cmax = "";
      }
    },
    // 回到顶部
    backtop() {
      var timer = setInterval(function() {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =osTop + ispeed;
        console.log('os',osTop)
        console.log('is',osTop)

        this.isTop = true;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 30);
    },
    showbtn() {
      let that = this;
      let scrollTop =window.pageYOffset ||document.documentElement.scrollTop || document.body.scrollTop;
     
      that.scrollTop = scrollTop;
    }
  }
};
</script>
<style scoped lang='less' >
.classify{
  background: #f0f0f0;
}
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