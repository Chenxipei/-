<template>
  <div class="top-head">
    <div class="head-nav">
      <div class="nav-top">
        <ul class="navList">
          <li>
            <span v-show="user==null" >
              <!-- <a href="#" class="line">登录</a> -->
              <router-link  to="/login">登录</router-link>
              <span class="xiegang">/</span>
              <!-- <a href="#">注册</a> -->
              <router-link to="/register">注册</router-link>
            </span>
            <span v-show="user!=null">
              <router-link to="/member">{{this.user}}</router-link>
              <span class="xiegang">/</span>
              <a href="" @click="clearLg">退出登录</a>
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
              <img src="../assets/imgs/index/share.png" alt />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "topHead",
  data:function(){
    return{
      user:null,
    }
  },
  mounted(){
    this.user = sessionStorage.getItem('phone')
   console.log(this.user)
  },
  methods: {
    clearLg(){
      this.user=null
      sessionStorage.clear()
    },
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
            width: 8px;
            height: 8px;
            display: inline-block;
            vertical-align: baseline;
            transform: rotate(180deg);
            background-image: url(../assets/imgs/index/top_ic_fold.png);
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
</style>
