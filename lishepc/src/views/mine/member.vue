<template>
  <div class="member">
    <!-- 头部 -->
    <headSearch></headSearch>
    <div class="header_nav">
      <div class="mauto">
        <a href>商城首页</a>
      </div>
    </div>
    <!-- 主体 -->
    <div class="wrap content">
      <!-- 左侧导航 -->
      <div class="user_center">
        <a href>
          <div class="user_center_head">会员中心</div>
        </a>
        <div class="left_nav">
          <ul>
            <li class="left_nav_title">
              <span>我的交易</span>
            </li>
            <li>
              <!-- <a href>我的订单</a> -->
							<router-link to="/member/myorder">我的订单</router-link>
            </li>
            <li>
              <a href>活动订单</a>
            </li>
            <li>
              <a href>企采订单</a>
            </li>
            <li>
              <a href>取消订单记录</a>
            </li>
          </ul>
          <ul>
            <li class="left_nav_title">
              <span>我的服务</span>
            </li>
            <li>
              <a href>售后列表</a>
            </li>
            <li>
              <a href>正章干洗券/卡兑换</a>
            </li>
          </ul>
          <ul>
            <li class="left_nav_title">
              <span>我的收藏</span>
            </li>
            <li>
              <a href>收藏的店铺</a>
            </li>
            <li>
              <a href>收藏的商品</a>
            </li>
          </ul>
          <ul>
            <li class="left_nav_title">
              <span>我的信息</span>
            </li>
            <li>
              <a href>我的资产</a>
            </li>
            <li>
              <a href>积分卡兑换</a>
            </li>
            <li>
              <a href>收货地址管理</a>
            </li>
            <li>
              <a href>安全中心设置</a>
            </li>
            <li>
              <a href>我的意见反馈</a>
            </li>
            <li>
              <a href>我的企业/组织</a>
            </li>
          </ul>
          <ul>
            <li class="left_nav_title">
              <span>我的优惠</span>
            </li>
            <li>
              <a href>我的卡券</a>
            </li>
          </ul>
          <ul>
            <li class="left_nav_title">
              <span>我的消息</span>
            </li>
            <li>
              <a href>我的消息</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 右侧订单 -->
			<router-view></router-view>
      <div class="order_info" v-show="$route.path!=='/member/myorder'">
        <div class="right_wrap">
          <!-- 欢迎 -->
          <div class="welcome">
            您好,
            <span class="user_name">15220102322,</span> 欢迎进入会员中心
            <div class="user_level level1">普通会员</div>
          </div>
          <!-- 我的信息 -->
          <div class="my_wrap">
            <div class="basic_info">
              <p class="right_line">我的信息</p>
              <div class="head_and_info">
                <div class="user_head">
                  <!-- <img src="..user_head" alt /> -->
                </div>
                <div class="three_info">
                  <p>15220102432</p>
                  <p class="company_name">心意商城</p>
                  <p>15220102432</p>
                </div>
              </div>
            </div>
            <div class="money_distribute">
              <div>
                <p class="right_line">我的资产</p>
              </div>
              <!-- 饼图 -->
              <div id="main" style="width: 220px;height:220px;float: left;"></div>
              <div class="legend">
                <div class="general">
                  <span class="legend_icon" style="background-color: #fa6b67;"></span>
                  <span>礼舍积分</span>
                  <span style="color:red;">0</span>
                  <a href class="gotouse">
                    去消费
                    <span class="ltriAgl"></span>
                  </a>
                </div>
                <div class="general">
                  <span class="legend_icon" style="background-color: #ffe185;"></span>
                  <span>专享积分</span>
                  <span style="color:red;">0</span>
                  <a href class="gotouse">
                    去消费
                    <span class="ltriAgl"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- 为你推荐 -->
          <div class="right-top">
            <p class="right-title">为你推荐</p>
            <span class="favoriteManage">换一批</span>
          </div>

          <!-- 商品列表 -->
          <ul class="collected-goods">
            <li class="favorite-goods" v-for="(item,index) in memberGoods" :key="index">
              <a href class="goods-link">
                <img :src="item.url" class="fs-goodspic" alt />
                <p class="fs-goodsname">{{item.title}}</p>
                <p class="fs-goodsprice">{{item.price}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 回到顶部 -->
    <div class="toTop" v-show="btnFlag">
      <slot name="nav-float-l"></slot>
      <div class="zxkf">
        <a href="#">在线客服</a>
      </div>

      <div @click="backTop" class="totopbox">
        <i class="totop"></i>
      </div>
    </div>
    <!-- 底部 -->
    <div class="MemFooter">
      <div class="footer_content mauto">
        <div class="footer_statement">
          <ul class="footer_statement_list">
            <li>
              <img class="fl" src="../../assets/imgs/login/statement_1.png" alt />
              <div class="fl statement_text_pr">
                <h3 class="statement_title">消费保障</h3>
                <p class="statement_text">严格品质把关</p>
                <p>七天无理由退换货</p>
              </div>
            </li>
            <li>
              <img class="fl" src="../../assets/imgs/login/statement_2.png" alt />
              <div class="fl statement_text_pr">
                <h3 class="statement_title">品类齐全 正品行货</h3>
                <p class="statement_text">大牌特价 多仓直发</p>
                <p>极速配送 贴心无忧</p>
              </div>
            </li>
            <li>
              <img class="fl" src="../../assets/imgs/login/statement_3.png" alt />
              <div class="fl statement_text_pr">
                <h3 class="statement_title">星级服务</h3>
                <p class="statement_text">优质商品为您所选</p>
                <p>客服全程追踪服务</p>
              </div>
            </li>
            <li>
              <img class="fl" src="../../assets/imgs/login/statement_4.png" alt />
              <div class="fl statement_text_pr">
                <h3 class="statement_title">400-833-0288</h3>
                <p class="statement_text">周一至周五</p>
                <p>9:00-21:00</p>
              </div>
            </li>
          </ul>
          <ul class="footer_text">
            <li class="footer_textTitle">礼舍帮帮</li>
            <li>
              <a href>如何兑换积分卡</a>
            </li>
            <li>
              <a href>礼舍指南</a>
            </li>
            <li>
              <a href>常见问题</a>
            </li>
            <li>
              <a href>客户服务</a>
            </li>
          </ul>
          <ul class="footer_text">
            <li class="footer_textTitle">走进礼舍</li>
            <li>
              <a href>礼舍简介</a>
            </li>
            <li>
              <a href>礼舍服务</a>
            </li>
            <li>
              <a href>礼舍官网</a>
            </li>
          </ul>
          <ul class="footer_text">
            <li class="footer_textTitle">加入我们</li>
            <li>
              <a href>供应商入驻</a>
            </li>
            <li>
              <a href>企业入驻</a>
            </li>
            <li>
              <a href>合作伙伴</a>
            </li>
          </ul>
          <div class="footer_text">
            <div class="wx_guanzhu">
              <p>扫码关注微信公众号</p>
              <img src="../../assets/imgs/icon/footer_img_qrcode.png" alt />
              <p>优惠咨询抢先知</p>
            </div>
          </div>
        </div>
        <div class="footerbottom">
          <ul>
            <li>
              © 2005-2018 礼舍网 版权所有，并保留所有权利。 ICP备案证书号:
              <a href>粤ICP备15033641号-1</a>
            </li>
            <li>All rights Reserved.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headSearch from "../../components/headSearch.vue";
import footer from "../../components/footer.vue";
export default {
  name: "member",
  components: {
    headSearch
  },
  data: function() {
    return {
      btnFlag: false,
      memberGoods: [],
    };
  },
  mounted() {
    this.drawChart();
    window.addEventListener("scroll", this.scrollToTop);
    this.getHomeData();
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    //   饼图
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          left: "center"
        },

        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          left: "center",
          top: "bottom",
          data: ["rose1", "rose2"]
        },
        toolbox: {
          show: true
        },
        graphic: {
          type: "text",
          left: "center",
          top: "center",
          style: {
            text: "总额",
            textAlign: "center",
            fill: "#000",
            width: 30,
            height: 30,
            fontSize: 12
          }
        },
        series: [
          {
            type: "pie",
            radius: [40, 90],
            center: ["50%", "50%"],
            color: ["#fa6b67", "#ffe185"],
            roseType: "radius",
            label: {
              show: false
            },
            emphasis: {},
            label: {
              position: "inner",
              formatter: "0"
            },
            data: [
              { value: 10, name: "礼舍积分" },
              { value: 10, name: "专享积分" }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    getHomeData() {
      //   console.log("请求member商品");
      this.$axios
        .get("/data/memberGoods.json")
        .then(res => {
          //   console.log(res.data.memberList);
          this.memberGoods = res.data.memberList;
        })
        .catch(err => {
          console.log(err);
        });
    },
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 200) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    }
  }
};
</script>

<style lang='less'>
.member {
  background: #f0f0f0;
  .header_nav {
    width: 100%;
    height: 40px;
    background: #f55053;
    line-height: 40px;

    a {
      padding: 0 25px;
      color: white;
      display: inline-block;
      width: 150px;
      height: 40px;
      font-size: 14px;
      text-align: center;
    }
    a:hover {
      background: #e24a4c;
      color: white;
    }
  }
  .wrap {
    width: 1200px;
    height: 100%;
    margin: 20px auto 50px auto;
    overflow: hidden;
    // 左侧菜单
    .user_center {
      width: 208px;
      min-height: 640px;
      background-color: #fff;
      float: left;
      .user_center_head {
        height: 49px;
        padding-right: 60px;
        background-color: #f55053;
        color: #fff;
        font-size: 18px;
        text-align: right;
        line-height: 49px;
        background-image: url(../../assets/imgs/icon/user.png);
        background-repeat: no-repeat;
        background-position: 54px 15px;
      }
      .left_nav {
        background-color: #fff;
        padding-bottom: 20px;
        ul {
          margin-top: 30px;
          margin-left: 63px;
          .left_nav_title {
            font-size: 14px;
            color: #666;
            font-weight: bold;
            list-style: square;
          }
          li {
            list-style: none;
            margin-top: 15px;
            line-height: 14px;
            span {
              font-weight: 700;
              color: #000;
            }
            a {
              color: #666;
            }
            a:hover {
              color: #f55053;
            }
          }
        }
      }
    }
    // 右侧订单
    .order_info {
      float: left;
      width: 978px;
      height: auto;
      background-color: #fff;
      margin-left: 10px;
      color: #666;
      padding-bottom: 46px;
      .right_wrap {
        width: 920px;
        height: 100%;
        margin: 0 auto;
        clear: both;
        .welcome {
          margin: 20px 0 10px;
          font-size: 14px;
          .user_name {
            color: #333;
          }
          .user_level.level1 {
            background-position: 0 0;
          }
          .user_level {
            display: inline-block;
            height: 20px;
            line-height: 20px;
            padding-left: 25px;
            margin-left: 10px;
            background: url(../../assets/imgs/icon/user_level.png) no-repeat;
          }
        }
        .my_wrap {
          width: 938px;
          height: 298px;
          border: 1px solid #dadada;
          border-radius: 5px;
          .right_line {
            display: inline-block;
            padding-right: 10px;
            border-right: 3px solid #dadada;
          }
          .basic_info {
            display: inline-block;
            vertical-align: top;
            width: 340px;
            margin: 30px 0 0 15px;
            font-size: 14px;

            .head_and_info {
              margin-top: 55px;
              margin-left: 25px;
              padding: 30px 0;
              border-right: 1px dashed #dadada;
              .user_head {
                display: inline-block;
                vertical-align: top;
                width: 95px;
                height: 95px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .three_info {
                display: inline-block;
                vertical-align: top;
                line-height: 22px;
                width: 200px;
                margin: 14px 0 0 8px;
                p:first-child {
                  font-size: 24px;
                  margin-bottom: 8px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                .company_name {
                  height: 25px;
                  width: 140px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
            }
          }
          .money_distribute {
            display: inline-block;
            vertical-align: top;
            width: 510px;
            margin: 30px 0 0 30px;
            font-size: 14px;
            .legend {
              margin-top: 55px;
              margin-left: 220px;
              .general,
              .labor,
              .care {
                position: relative;
              }
              .general,
              .labor {
                margin-bottom: 45px;
              }
              .general {
                .legend_icon {
                  display: inline-block;
                  width: 23px;
                  height: 12px;
                  border-radius: 2px;
                  vertical-align: middle;
                  margin-left: 20px;
                  margin-right: 10px;
                }
              }
              .gotouse {
                font-size: 10px;
                color: #fff;
                background-color: #f55053;
                display: inline-block;
                padding: 2px 4px 3px;
                position: absolute;
                top: -12px;
                margin-left: 4px;
                .ltriAgl {
                  display: inline-block;
                  width: 0;
                  height: 0;
                  border-top: 4px solid #f55053;
                  border-right: 4px solid transparent;
                  position: absolute;
                  bottom: -4px;
                  left: 0;
                }
              }
            }
          }
        }
        // 为你推荐
        .right-top {
          .right-title {
            font-size: 16px;
            margin-top: 15px;
            padding-bottom: 10px;
            display: inline-block;
            font-weight: bold;
          }
          .favoriteManage {
            float: right;
            display: inline-block;
            margin-top: 15px;
            margin-right: 10px;
            cursor: pointer;
          }
          .favoriteManage:hover {
            color: #f55053;
            text-decoration: underline;
          }
        }
        .collected-goods {
          overflow: hidden;
          margin-top: 25px;
          .favorite-goods {
            width: 138px;
            border: 1px solid #dadada;
            height: 178px;
            float: left;
            margin-right: 13px;
            margin-bottom: 15px;
            position: relative;
            .goods-link {
              display: block;
              width: 100%;
              height: 100%;
              text-align: center;
              color: #666;
              font-size: 12px;
              .fs-goodspic {
                width: 138px;
                height: 137px;
                border-bottom: 1px solid #dadada;
                margin-right: 13px;
                margin-bottom: 5px;
                position: relative;
              }
              .fs-goodsname,
              .fs-goodsprice {
                padding: 0 5px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .fs-goodsprice {
                margin-top: 5px 0;
                color: #f55053;
              }
            }
          }
        }
      }
    }
  }
  //   回到顶部
  .toTop {
    width: 50px;
    height: 100px;
    z-index: 99;
    position: fixed;
    right: 100px;
    bottom: 100px;
    background: #fff;
    display: flex;
    text-align: center;
    flex-direction: column;
    font-size: 12px;
    color: #666;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #dcdcdc;
    .zxkf {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background: #ff4138;
      a {
        color: white;
      }
    }
    a {
      color: #666;
      margin: 15px 0;
    }

    > div {
      width: 50px;
      height: 50px;
      padding: 11px 13px;
      &:hover {
        cursor: pointer;
      }
    }

    .totopbox {
      &:hover i {
        background: url(../../assets/imgs/icon/sidebar_ic_top_hover.png) 1px 0
          no-repeat;
      }
      .totop {
        background: url(../../assets/imgs/icon/sidebar_ic_top_default.png) 1px 0
          no-repeat;
      }
    }

    i {
      display: inline-block;
      width: 35px;
      height: 35px;
    }
  }
  //   底部
  .MemFooter {
    background: white;
    .footer_content {
      width: 1200px;
      margin: 0 auto;
      height: 100%;
      padding-top: 70px;
      box-sizing: border-box;
      .footer_statement {
        height: 270px;
        border-bottom: 1px solid #e0e0e0;
        .footer_statement_list {
          width: 570px;
          overflow: hidden;
          float: left;
          li {
            width: 280px;
            height: 136px;
            float: left;
            .statement_text_pr {
              width: 185px;
              height: 90px;
              line-height: 30px;
              position: relative;
              top: -6px;
              margin-left: 15px;
              .statement_title {
                color: #333333;
                font-size: 18px;
              }
              p {
                color: #898989;
                font-size: 16px;
              }
            }
          }
        }
        .footer_text {
          width: 154px;
          float: left;
          height: 140px;
          border-left: 2px solid #dcdcdc;
          box-sizing: border-box;
          text-align: center;
          margin-top: 5px;
          padding-top: 15px;
          color: #898989;
          .footer_textTitle {
            font-size: 18px;
            margin-bottom: 25px;
          }
          li {
            line-height: 24px;
            a {
              color: #898989;
            }
            a:hover {
              color: red;
            }
          }
          .wx_guanzhu {
            font-size: 14px;
            color: #898989;
            text-align: center;
            position: relative;
            top: -25px;
            img {
              width: 105px;
              height: 105px;
              margin: 5px 0;
            }
          }
        }
      }
      .footerbottom {
        padding: 20px 0 40px;
        ul {
          margin-left: 50px;
          li {
            font-size: 12px;
            color: #999999;
            line-height: 18px;
            a {
              color: #999999;
            }
          }
        }
      }
    }
  }
}
</style>