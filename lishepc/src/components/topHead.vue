<template>
  <div class="top-head">
    <div class="head-nav">
      <div class="nav-top">
        <ul class="navList">
          <li>
            <span>
              <!-- <a href="#" class="line">登录</a> -->
              <router-link to="/login">登录</router-link>
              <span class="xiegang">/</span>
              <!-- <a href="#">注册</a> -->
              <router-link to="/register">注册</router-link>
            </span>
          </li>
          <li class="liShe">
            <a href="#">
              我的礼舍
              <i class="arrow"></i>
              <div class="lisheTerm">
                <ul class="liseUl">
                  <li>
                    <a href="#">我的订单</a>
                  </li>
                  <li>
                    <a href="#">我的消息</a>
                  </li>
                  <li>
                    <a href="#">我的卡券</a>
                  </li>
                  <li>
                    <a href="#">我的资产</a>
                  </li>
                </ul>
              </div>
            </a>
          </li>
          <li>
            <a href="#">积分卡兑换</a>
          </li>
          <li>
            <a href="#">在线客服</a>
          </li>
          <li>
            <a href="#">礼舍官网</a>
          </li>
          <li>
            <a href="#">礼舍企采</a>
          </li>
          <li>
            <a href="#">关于礼舍</a>
          </li>
          <li class="focus" @mouseover="showFollow" @mouseout="hideFollow">
            <a href="#">关注我们</a>
            <div class="follow" ref="follow">
              <img src="../../assets/img/index/share.png" alt />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="head-search">
      <div class="search">
        <div class="logo">
          <a href="#">
            <img src="../../assets/img/index/logo_two.png" alt />
          </a>
        </div>
        <div class="search-box">
          <input type="text" placeholder="八马茶叶" />
          <a href="#">
            <i class="searchIput"></i>
          </a>
        </div>
        <div class="cart">
          <a href="#">
            <img src="../../assets/img/index/cart.png" alt />
          </a>
          <p class="ShoppingCart">我的购物车</p>
          <span class="ling">0</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "topHead",
  methods: {
    showFollow() {
      this.$refs.follow.style.height = 480 + "px";
      this.$refs.follow.style.width = 280 + "px";
      this.$refs.follow.style.transition = "0.2s";
      this.$refs.follow.style.display = "block";
    },
    hideFollow() {
      this.$refs.follow.style.height = 0;
      this.$refs.follow.style.width = 280 + "px";
      this.$refs.follow.style.transition = "0.2s";
    }
  }
};
</script>



<style lang="less" scope>
.head-nav {
  height: 30px;
  background: rgb(51, 51, 51);

  .nav-top {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;

    .navList {
      display: flex;
      line-height: 30px;
      height: 30px;

      > li {
        font-size: 12px;
        padding: 0 18px;

        a {
          color: rgb(204, 204, 204);

          &:hover {
            color: rgb(255, 78, 76);
          }
        }

        .xiegang {
          color: rgb(204, 204, 204);
          margin: 0 15px;
        }

        &.liShe {
          position: relative;

          &:hover {
            background: #fff;

            .arrow {
              transform: rotate(360deg);
              transition: 0.3s;
            }

            .lisheTerm {
              display: block;
            }
          }

          .arrow {
            position: absolute;
            width: 8px;
            height: 8px;
            top: 50%;
            right: 5px;
            vertical-align: middle;
            transform: translateY(-50%) rotate(180deg);
            background-image: url(../../assets/img/index/top_ic_fold.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
          }

          .lisheTerm {
            position: absolute;
            width: 83px;
            top: 30px;
            display: none;
            left: 0;
            text-align: center;
            border: 1px solid #eee;
            background: #fff;
            z-index: 999;

            a {
              color: #333;
            }

            .liseUl a:hover {
              color: rgb(255, 78, 76);
            }
          }
        }

        &.focus {
          position: relative;

          .follow {
            position: absolute;

            left: -84px;
            display: none;
            overflow: hidden;
            z-index: 99;

            img {
              width: 250px;
              height: 350px;

              margin-left: -120px;
              height: 0;
              overflow: hidden;
              z-index: 999;

              img {
                border-radius: 6px;
              }
            }
          }
        }
      }
    }
  }
}
  .head-search {
    background: rgb(240, 240, 240);

    .search {
      width: 1200px;
      height: 120px;
      margin: 0 auto;
      position: relative;
      display: flex;
      align-items: center;

      .logo {
        width: 188px;
        height: 120px;
        display: flex;
        align-items: center;
        float: left;
      }

      .search-box {
        width: 520px;
        height: 40px;
        border: 2px solid rgb(255, 78, 76);
        border-radius: 20px;
        overflow: hidden;
        margin-left: 100px;
        position: relative;

        input {
          width: 520px;
          height: 40px;
          padding: 0 15px;
          font-size: 12px;
          border: none;
          outline: none;
          line-height: 40px;
        }

        a {
          width: 80px;
          height: 40px;
          display: inline-block;
          position: absolute;
          right: 0;
          top: -2px;
          border-radius: 20px;
          z-index: 999;
          background: rgb(255, 78, 76);

          .searchIput {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 16px;
            height: 16px;
            background-image: url(../../assets/img/index/search.png);
            background-size: cover;
            background-repeat: no-repeat;
            display: inline-block;
          }
        }
      }
    }

    .cart {
      display: flex;
      align-items: center;
      background-color: #fff;
      border: 1px solid #f3d6d6;
      border-radius: 20px;
      height: 40px;
      padding: 0 15px;
      margin-left: 20px;
      position: relative;
      cursor: pointer;

      .ShoppingCart {
        font-size: 12px;
        color: rgb(255, 78, 76);
        margin-left: 5px;
        margin-right: 5px;
      }

      .ling {
        border: 1px solid #f3d6d6;
        border-radius: 50%;
        background: rgb(255, 78, 76);
        color: #fff;
        width: 20px;
        height: 20px;
        line-height: 1.4;
        text-align: center;
        font-size: 13px;
      }
    }
  }

</style>
