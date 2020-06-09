<template>
  <div class="register">
    <!-- 头部 -->
    <headerwrap></headerwrap>
    <!-- <div class="register_header_wrap">
      <div class="register_header mauto clearfix">
        <div class="ls_vip_logo fl">
          <router-link to="/home">
            <img src="../../assets/imgs/login/logo_two.png" alt />
          </router-link>
          <p class="register_titleText">欢迎注册</p>
        </div>
        <div class="mem_link fr">
          <a href>
            <span class="iconfont icon-phone"></span>
            400-833-0288
          </a>
        </div>
      </div>
    </div> -->
    <div class="main_wrap">
      <div class="mides">
        <div class="inp_wrap_pt clearfix">
          <img class="fl" src="../../assets/imgs/login/login_img_welcome.png" alt />

          <div class="inp_wrap fr">
            <h3>
              新用户注册
              <router-link class="fr" to="/login">返回登录>></router-link>
            </h3>
            <div class="register_con">
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
              <div class="user_inp3">
                <span class="user_inp_icon3"></span>
                <input class="ls_input" v-model="pass" type="password" placeholder="请设置密码,长度6-20位" />
              </div>
              <p ref="error_M" class="error_text">
                <span>1</span>
              </p>
              <div class="ls_text_wraing">
                <p>
                  <input type="checkbox" v-model="checkStatus" />
                  我已阅读并同意
                  <a href>《礼舍网服务协议》</a>
                </p>
                <span class="fr backPassword"></span>
              </div>
              <div class="user_btn" @click="checkCode">立即注册</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <copyright>
      
    </copyright>
    <div class="copyright mauto">
      <div class="footer_text">
        <p>© 2005-2020 礼舍网 版权所有，并保留所有权利。All rights Reserved</p>
        <p>ICP备案证书号:粤ICP备15033641号-1</p>
      </div>
    </div>
  </div>
</template>

<script>
import copyright from '../../components/copyright'
import headerwrap from '../../components/header_wrap'
export default {
  name: "register",
  components:{  
    copyright,headerwrap
  },  
  data() {
    return {
      phone: "", //手机号
      pass: "", //密码
      Dphone: false, //发送验证码背景
      computedTime: 0, //倒计时
      ccode: "", //六位随机数
      isCode: "", //输入的六位数验证码
      checkStatus: true
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
    // 验证码登录
    getCode() {
      // console.log("进入getcode");
      if (this.phone == "") {
        this.$refs.error_M.innerHTML = "*请输入您的手机号！";
        return;
      } else if (this.Cphone == false) {
        this.$refs.error_M.innerHTML = "*手机号码格式不正确！";
        return;
      } else {
        // console.log("进入倒计时");
        this.$refs.error_M.innerHTML = "<span>1</span>";
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
      // console.log("checkcode");

      // 验证手机
      if (this.phone == "") {
        this.$refs.error_M.innerHTML = "*请输入您的手机号！";
        return;
      } else if (this.Cphone == false) {
        this.$refs.error_M.innerHTML = "*手机号码格式不正确！";
        return;
      } else {
      }

      // 验证验证码
      if (this.isCode == "") {
        this.$refs.error_M.innerHTML = "*验证码不能为空";
        return;
      } else if (this.ccode == this.isCode) {
      } else {
        this.$refs.error_M.innerHTML = "*验证码不正确,请重输";
        return;
      }
      // 密码验证
      if (this.pass == "") {
        this.$refs.error_M.innerHTML = "*密码不能为空";
        return;
      } else if (this.Cpass == false) {
        this.$refs.error_M.innerHTML = "*密码必须是字母大写，字母小写，数字，特殊字符中任意两种组合，请重新设置！";
        return;
      } else if (this.checkStatus) {
        this.$refs.error_M.innerHTML = "<span>1</span>";
        this.$router.push({ path: "/home" });
      } else {
        this.$refs.error_M.innerHTML =
          "*请勾选“我已阅读并同意 《礼舍网服务协议》”！";
      }
    }
  }
};
</script>

<style lang='less'>
/* 头部 */
.register {
  background: #fff;
  .register_header_wrap {
    .register_header {
      height: 100px;
      line-height: 100px;
    }
  }
  .ls_vip_logo {
    height: 100px;
    a {
      display: inline-block;
      img {
        vertical-align: middle;
      }
    }
  }
  .main_wrap {
    background: #ededed;
    padding: 81px 0 150px;
    .inp_wrap {
      height: 390px;
      padding: 0 40px;
      box-sizing: border-box;
    }
  }
  .inp_wrap_pt {
    padding: 69px 0 45px;
    background: #fff;
    border-radius: 6px;
  }
  .inp_wrap {
    h3 {
      font-size: 18px;
      a {
        font-size: 12px;
        font-weight: 400;
        height: 24px;
        display: block;
        line-height: 30px;
        color: #666666;
      }
    }
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
  .user_btn {
    margin-top: 10px;
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
  .ls_text_wraing {
    padding-top: 15px;
    color: #666666;
    font-size: 12px;
    line-height: 1;
    text-align: left;
    input {
      vertical-align: -2px;
      cursor: pointer;
      margin-right: 5px;
    }
    a {
      color: #111111;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
.mem_link {
  a {
    color: #f55053;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    font-size: 24px;
    span {
      font-size: 21px;
    }
  }
}
.register_titleText {
  font-size: 18px;
  vertical-align: middle;
  display: inline-block;
  padding-left: 15px;
}
/* 主体 */
.login_con,
.back_inp_con {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 40px;
  box-sizing: border-box;
  -ms-box-sizing: border-box;
  background: #fff;
}
.register .user_inp_icon1 {
  background: url(../../assets/imgs/icon/icon_phone.png) center center no-repeat;
}
.register .user_inp_icon3 {
  background: url(../../assets/imgs/icon/icon_password.png) center center
    no-repeat;
}
.register .user_inp_icon2 {
  background: url(../../assets/imgs/icon/icon_secure.png) center center
    no-repeat;
}
.register .inp_wrap_pt {
  width: 800px;
  margin: 0 auto;
}
.register .user_inp_icon1,
.user_inp_icon2,
.user_inp_icon3,
.user_inp_icon4 {
  float: left;
  width: 41px;
  height: 44px;
}
.register_con .user_inp1,
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
.register_con {
  width: 270px;
  .user_inp1 {
    margin-top: 40px;
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
  .error_text {
    margin-top: 15px;
    font-size: 14px;
    color: #fc4340;
    span {
      color: white;
    }
  }
}
.register .user_btn:hover,
.user_inp3 .send_btn:hover {
  background: #cc342d;
}
/* 底部 */
// .copyright {
//   p {
//     height: 14px;
//     line-height: 14px;
//     margin-bottom: 10px;
//   }
//   .footer_text {
//     padding-top: 30px;
//     padding-bottom: 30px;
//     text-align: center;
//     font-size: 14px;
//     color: #666666;
//     width: 100%;
//   }
// }
</style>