<template>
  <div class="login">
    <!-- 头部 -->
    <div class="login_header_wrap">
      <div class="login_header mauto clearfix">
        <div class="ls_vip_logo fl">
          <a href>
            <img src="../../assets/imgs/login/logo_two.png" alt />
          </a>
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
      <!-- 用户框 -->
      <div class="main_content mauto clearfix">
        <div class="inp_wrap fr">
          <div class="login_register">
            <div class="tab_btn1">
              <ul class="tab_btn1_list">
                <li class="active">验证码登录</li>
                <li>密码登录</li>
              </ul>
              <div class="red_step"></div>
            </div>
            <div class="content_wrap">
              <!-- 密码登录 -->
              <!-- <div class="login_con">
                                <div class="user_inp1">
                                    <span class="user_inp_icon4"></span>
                                    <input class="ls_input" type="text" name="" id="" placeholder="请输入手机号">
                                </div>
                                <div class="user_inp2">
                                    <span class="user_inp_icon4"></span>
                                    <input class="ls_input" type="text" name="" id="" placeholder="请输入验证码">
                                   
                                </div>
                                <div class="text_con1">
                                    <label class="fl autoLogin" for="">
                                        <input type="checkbox">自动登录
                                    </label>
                                    <span class="fr backPassword">忘记密码？</span>
                                </div>
                                <div class="user_btn">登录</div>
                                <div class="jihuo">
                                    <p>
                                        <span class="activate_btn">新用户注册</span> |
                                        <span class="conversion">积分卡兑换</span>
                                    </p>
                                </div>
              </div>-->

              <!-- 验证码登录 -->
              <div class="login_con">
                <div class="user_inp1">
                  <span class="user_inp_icon1"></span>
                  <input class="ls_input" type="text" name id placeholder="请输入手机号" />
                </div>
                <div class="user_inp3">
                  <span class="user_inp_icon2"></span>
                  <input class="ls_input" type="text" name id placeholder="请输入验证码" />
                  <button class="send_btn send_1">获取验证码</button>
                </div>
                <div class="text_con1">
                  <label class="fl autoLogin" for>
                    <input type="checkbox" />自动登录
                  </label>
                  <span class="fr backPassword">忘记密码？</span>
                </div>
                <div class="user_btn">登录</div>
                <div class="jihuo">
                  <p>
                    <span class="activate_btn">新用户注册</span> |
                    <span class="conversion">积分卡兑换</span>
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
export default {
  name: "login",
  data() {
    return {
      loginArr: [
        { url: "../../assets/imgs/login/login2.jpg" },
        { url: "../../assets/imgs/login/login3.jpg" }
      ]
    };
  },
  mounted() {
    console.log(this.loginArr);
  }
};
</script>

<style lang='less'>
/* 头部 */
.login {
  .login_header_wrap {
    .login_header {
      height: 100px;
      line-height: 100px;
    }
  }
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
      span{
        font-size: 21px;
      }
    }
  }
  .main_wrap {
    height: 500px;
    background-color: sandybrown;
  }
  .main_content {
    padding-top: 60px;
  }
  .inp_wrap {
    width: 350px;
    height: 360px;
    background: #fff;
    border-radius: 10px;
  }
  .tab_btn1 {
    position: relative;
    width: 100%;
    height: 60px;
    .red_step {
      position: absolute;
      width: 175px;
      height: 3px;
      background-color: #f55053;
      left: 0;
      bottom: 0px;
    }
  }
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
  .login_con {
    .user_inp1 {
      margin-top: 40px;
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
  .user_btn {
    margin-top: 40px;
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
  .jihuo {
    font-size: 12px;
    text-align: center;
    color: #666;
    margin-top: 10px;
    p {
      span {
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
  .footer_statement {
    padding-top: 55px;
    ul {
      margin-bottom: 40px;
    }
  }
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
  .copy_text {
    padding-bottom: 20px;
    color: #999999;
    font-size: 12px;
    text-align: center;
  }
}
/* 主体 */
.login .content_wrap,
.back_inp {
  position: relative;
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
.login .user_inp_icon1{
  background: url(../../assets/imgs/icon/icon_phone.png) center center no-repeat;
}
.login .user_inp_icon2{
   background: url(../../assets/imgs/icon/icon_secure.png) center center no-repeat;
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
/* 尾部 */
</style>