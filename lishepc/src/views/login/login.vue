<template>
  <div class="login" style="max-width: 1920px;margin: 0 auto;">
    <!-- 头部 -->
    <div class="login_header_wrap">
      <div class="login_header mauto clearfix">
        <div class="ls_vip_logo fl">
          <router-link to="/home">
            <img src="../../assets/imgs/login/logo_two.png" alt />
          </router-link>
        </div>

        <div class="mem_link fr">
          <a href>
            <span class="iconfont icon-phone"></span>
            400-833-0288
          </a>
        </div>
      </div>
    </div>
    <!-- 主体 -->
    <div class="main_wrap">
      <!-- 轮播图 -->
      <banner style="height: 500px;" swiperName="homeBanner">
        <div slot="swiper-con" class="swiper-slide" v-for="(item,index) in loginArr" :key="index">
          <img :src="item.url" alt />
        </div>
      </banner>
      <!-- 用户框 -->
      <div class="main_content">
        <div class="inp_wrap fr">
          <div class="login_register">
            <div class="tab_btn1">
              <ul class="tab_btn1_list">
                <li :class="{active:loginWay}" @click="tabYzm">验证码登录</li>
                <li :class="{active:loginWay==false}" @click="tabMm">密码登录</li>
              </ul>
              <div ref="red_step" class="red_step"></div>
            </div>
            <div class="content_wrap">
              <!-- 密码登录 -->
              <div class="login_con" v-show="loginWay==false">
                <div class="user_inp1">
                  <span class="user_inp_icon1"></span>
                  <input
                    class="ls_input"
                    type="text"
                    maxlength="11"
                    v-model="phone"
                    placeholder="请输入手机号"
                  />
                </div>
                <div class="user_inp2">
                  <span class="user_inp_icon3"></span>
                  <input class="ls_input" v-model="pass" type="password" placeholder="请输入密码" />
                </div>
                <div class="text_con1">
                  <label class="fl autoLogin" for>
                    <input type="checkbox" />自动登录
                  </label>
                  <span class="fr backPassword">忘记密码？</span>
                </div>
                <p ref="error_M" class="error_text">
                  <span>1</span>
                </p>
                <div class="user_btn" @click="logins">登录</div>
                <div class="jihuo">
                  <p>
                    <router-link to="/register">新用户注册</router-link>|
                    <router-link to="/register">积分卡兑换</router-link>
                  </p>
                </div>
              </div>

              <!-- 验证码登录 -->
              <div class="login_con" v-show="loginWay">
                <div class="user_inp1">
                  <span class="user_inp_icon1"></span>
                  <input
                    class="ls_input"
                    type="text"
                    maxlength="11"
                    v-model="phone"
                    placeholder="请输入手机号"
                  />
                </div>
                <div class="user_inp3">
                  <span class="user_inp_icon2"></span>
                  <input
                    class="ls_input"
                    type="text"
                    oninput="value=value.replace(/[^\d]/g, '')"
                    maxlength="6"
                    v-model="isCode"
                    placeholder="请输入验证码"
                  />
                  <button
                    class="send_btn send_1"
                    @click.prevent="getCode()"
                    :disabled="Dphone"
                    :class="{right_number:Dphone }"
                    v-text="computedTime>0?`重新获取${computedTime}s`:'获取验证码'"
                  >获取验证码</button>
                </div>
                <div class="text_con1">
                  <label class="fl autoLogin" for>
                    <input type="checkbox" />
                    <span>自动登录</span>
                  </label>
                  <span class="fr backPassword">忘记密码？</span>
                </div>
                <p ref="error_T" class="error_text">
                  <span>1</span>
                </p>
                <div class="user_btn" @click="checkCode">登录</div>
                <div class="jihuo">
                  <p>
                    <router-link to="/register">新用户注册</router-link>|
                    <router-link to="/register">积分卡兑换</router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 尾部 -->
    <div class="footerdimension mauto">
      <div class="footer_statement">
        <ul class="clearfix">
          <li>
            <img class="fl" src="../../assets/imgs/login/statement_1.png" alt />
            <div class="fl statement_text_pr">
              <p class="statement_title">七天无理由退换货</p>
              <p class="statement_text">为您提供售后无忧保障</p>
            </div>
          </li>
          <li>
            <img class="fl" src="../../assets/imgs/login/statement_2.png" alt />
            <div class="fl statement_text_pr">
              <p class="statement_title">99 元起包邮</p>
              <p class="statement_text">店铺 99 元起包邮</p>
            </div>
          </li>
          <li>
            <img class="fl" src="../../assets/imgs/login/statement_3.png" alt />
            <div class="fl statement_text_pr">
              <p class="statement_title">严格品质保障</p>
              <p class="statement_text">品质护航，购物无忧</p>
            </div>
          </li>
          <li>
            <img class="fl" src="../../assets/imgs/login/statement_4.png" alt />
            <div class="fl statement_text_pr">
              <p class="statement_title">400-833-0288</p>
              <p class="statement_text">周一至周日 9:00-22:00</p>
            </div>
          </li>
        </ul>
        <p class="copy_text">©2005-2020 礼舍网 版权所有 ICP备案证书号：粤ICP备15033641号-1 All rights Reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "../../components/Banner";
export default {
  name: "login",
  data() {
    return {
      loginWay: "true", //登录模式状态
      phone: "", //手机号
      pass: "", //密码
      Dphone: false, //发送验证码背景
      computedTime: 0, //倒计时
      ccode: "",
      isCode: "",
      loginArr: [
        { url: require("../../assets/imgs/login/login2.jpg") },
        { url: require("../../assets/imgs/login/login3.jpg") }
      ]
    };
  },
  computed: {
    Cphone() {
      return /^1\d{10}$/.test(this.phone);
    },
    Cpass() {
      return /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,20}$/.test(this.pass);
    }
  },
  methods: {
    tabYzm() {
      (this.loginWay = true), (this.$refs.red_step.style.left = "0");
    },
    tabMm() {
      (this.loginWay = false), (this.$refs.red_step.style.left = "175px");
    },
    // 密码登录
    logins() {
      if (this.phone == "") {
        this.$refs.error_M.innerHTML = "*请输入您的手机号！";
        return;
      } else if (this.Cphone == false) {
        this.$refs.error_M.innerHTML = "*手机号码格式不正确！";
        return;
      } else {
        this.$refs.error_M.innerHTML = "<span>1</span>";
        // return true
      }
      if (this.pass == "") {
        this.$refs.error_M.innerHTML = "*密码不能为空";
      } else if (this.Cpass == false) {
        this.$refs.error_M.innerHTML = "*密码需6~20位字母,数字和符号的组成";
      } else {
        this.$refs.error_M.innerHTML = " <span>1</span>";
        // return true
      }
      if (this.Cphone && this.Cpass) {
        this.$router.push({ path: "/home" });
      }
    },
    // 验证码登录
    getCode() {
      console.log("进入getcode");
      if (this.phone == "") {
        this.$refs.error_T.innerHTML = "*请输入您的手机号！";
        return;
      } else if (this.Cphone == false) {
        this.$refs.error_T.innerHTML = "*手机号码格式不正确！";
        return;
      } else {
        // console.log('进入倒计时')
        this.$refs.error_T.innerHTML = "<span>1</span>";
        this.generatedCode();
        console.log(this.ccode);
        this.Dphone = true;
        //点击已发送，当正在已发送的时候不需要再启动定时器
        if (this.computedTime == 0) {
          this.computedTime = 30;
          var IntervalId = setInterval(() => {
            this.computedTime--;
            if (this.computedTime <= 0) {
              clearInterval(IntervalId); //关闭定时器
              this.Dphone = false;
            }
          }, 1000);
        }
      }
    },
    // 随机验证码
    generatedCode() {
      const random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      let code = "";
      for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 9.9);
        code += random[index];
      }
      this.ccode = code;
    },
    // 判断验证码是否输入准确
    checkCode() {
      if (this.Cphone && this.ccode == this.isCode) {
        this.$router.push({ path: "/home" });
      } else {
        this.$refs.error_T.innerHTML = "*手机号或者验证码不正确";
      }
    }
  },
  components: {
    banner
  },
  mounted() {}
};
</script>

<style lang='less'>
.active {
  color: red;
}
/* 头部 */
.login {
  .login_header_wrap {
    .login_header {
      height: 100px;
      line-height: 100px;
      .ls_vip_logo {
        height: 100px;
        a {
          img {
            vertical-align: middle;
          }
        }
      }
      .mem_link {
        a {
          color: rgb(51, 51, 51);
          display: inline-block;
          height: 30px;
          line-height: 30px;
          color: #333333;
          font-size: 24px;
          span {
            font-size: 21px;
          }
        }
      }
    }
  }
  // 主体内容
  .main_wrap {
    position: relative;
    height: 500px;
    background-color: sandybrown;
    .main_content {
      width: 1200px;
      position: absolute;
      left: 50%;
      padding-top: 60px;
      z-index: 99;
      margin-left: -600px;
      // 表单盒子
      .inp_wrap {
        width: 350px;
        height: 360px;
        background: #fff;
        border-radius: 10px;
        .login_register {
          // 表单头部
          .tab_btn1 {
            position: relative;
            width: 100%;
            height: 60px;
            .tab_btn1_list {
              display: flex;
              text-align: center;
              li {
                flex: 1;
                height: 57px;
                line-height: 57px;
                font-size: 18px;
                cursor: pointer;
                border-bottom: 3px solid #dadada;
              }
              .active {
                color: red;
              }
            }
            .red_step {
              position: absolute;
              width: 175px;
              height: 3px;
              background-color: #f55053;
              left: 0;
              bottom: 3px;
              transition: 1s all ease;
            }
          }
          .content_wrap {
            .login_con {
              .user_inp1 {
                margin-top: 40px;
              }
              .user_inp3 {
                .send_btn {
                  position: absolute;
                  top: 9px;
                  right: 9px;
                  width: 86px;
                  height: 26px;
                  text-align: center;
                  cursor: pointer;
                  line-height: 26px;
                  color: #fff;
                  font-size: 12px;
                  background: #f55053;
                  border-radius: 5px;
                  border: 0;
                  outline: none;
                  transition: 0.3s;
                  -webkit-transition: 0.3s;
                }
                .right_number {
                  background: #cccccc;
                }
              }
              .text_con1 {
                height: 14px;
                line-height: 1;
                font-size: 12px;
                color: #666666;
                .autoLogin {
                  input {
                    vertical-align: -2px;
                    margin-right: 5px;
                  }
                }
              }
              // 登录按钮
              .user_btn {
                margin-top: 15px;
                width: 100%;
                height: 46px;
                background: #f55053;
                transition: 0.2s;
                -webkit-transition: 0.2s;
                text-align: center;
                line-height: 46px;
                color: #fff;
                font-size: 18px;
                border-radius: 5px;
                cursor: pointer;
              }
              // 积分兑换
              .jihuo {
                font-size: 12px;
                text-align: center;
                color: #666;
                margin-top: 10px;
                p {
                  a {
                    color: #666;
                    margin: 10px;
                    cursor: pointer;
                    &:hover {
                      color: #f55053;
                    }
                  }
                }
              }
              .ls_input {
                float: left;
                width: 225px;
                height: 44px;
                line-height: 44px;
                border: none;
                outline: none;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
  /* 底部 */
  .footer_statement {
    padding-top: 55px;
    ul {
      margin-bottom: 40px;
      li {
        .statement_text_pr {
          margin-left: 10px;
          height: 80px;
          width: 210px;
          overflow: hidden;
          .statement_title {
            font-size: 18px;
            color: #333333;
            font-weight: bold;
            margin-top: 14px;
          }
          .statement_text {
            font-size: 16px;
            color: #666;
            line-height: 30px;
          }
        }
      }
    }
    .copy_text {
      padding-bottom: 20px;
      color: #999999;
      font-size: 12px;
      text-align: center;
    }
  }
}
/* 主体 */
.login .content_wrap,
.back_inp {
  position: relative;
}
.main_wrap {
  position: relative;
}
.main_content {
  position: absolute;
  top: 10px;
  right: 0;
}
.login .user_inp_icon1,
.user_inp_icon2,
.user_inp_icon3,
.user_inp_icon4 {
  float: left;
  width: 41px;
  height: 44px;
}
// icon
.login .user_inp_icon1 {
  background: url(../../assets/imgs/icon/icon_phone.png) center center no-repeat;
}
.login .user_inp_icon2 {
  background: url(../../assets/imgs/icon/icon_secure.png) center center
    no-repeat;
}
.login .user_inp_icon3 {
  background: url(../../assets/imgs/icon/icon_password.png) center center
    no-repeat;
}
/* 验证码按钮 */
/* 自动登录/忘记密码 */
.login .text_con1 span,
.text_con1 label {
  cursor: pointer;
}
.login .text_con1 label:hover,
.text_con1 span:hover {
  color: red;
}
/* 登录按钮 */
.login .user_btn:hover,
.user_inp3 .send_btn:hover {
  background: #cc342d;
}
/* 最底下的新用户注册 */
.login .login_con,
.back_inp_con {
  width: 100%;
  position: absolute;
  top: 0;

  left: 0;
  padding: 0 40px;
  box-sizing: border-box;
  -ms-box-sizing: border-box;
  background: #fff;
  .error_text {
    margin-top: 15px;
    font-size: 14px;
    color: #fc4340;
    line-height: 1;
    span {
      color: white;
    }
  }
}
.login .login_con .user_inp1,
.user_inp2,
.user_inp3,
.user_inp4 {
  position: relative;
  margin-bottom: 10px;
  width: 270px;
  height: 46px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-sizing: border-box;
  -ms-box-sizing: border-box;
}
/* 红线 */
</style>