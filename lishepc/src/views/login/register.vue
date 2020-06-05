<template>
    <div class="register">
        <!-- 头部 -->
        <div class="register_header_wrap">
            <div class="register_header mauto clearfix">
                <div class="ls_vip_logo fl">
                    <a href="/home">
                        <img src="https://www.lishe.cn/common/images/logo_two.png" alt="">
                    </a>
                    <p class="register_titleText">欢迎注册</p>
                </div>
                <div class="mem_link fr">
                    <a href="">
                        <span class="icon-phone"></span>
                        400-833-0288
                    </a>
                </div>
            </div>
        </div>
        <div class="main_wrap">
            <div class="mauto">
                    <div class="inp_wrap_pt  clearfix">
                        <img class="fl" src="https://www.lishe.cn/sign/v2/images/login_img_welcome.png" alt="">
                        <div class="inp_wrap fr">
                            <h3>
                                新用户注册
                                <!-- <a class="fr" href="">返回登录>></a> -->
																<span class="fr"><router-link to="/login">返回登录>></router-link></span>
                            </h3>
                            <div class="register_con">
                                <div class="user_inp1">
                                    <span class="user_inp_icon4"></span>
                                    <input class="ls_input" type="text" name="" id="" placeholder="请输入手机号">
                                </div>
                                <div class="user_inp3">
                                    <span class="user_inp_icon4"></span>
                                    <input class="ls_input" type="text" name="" id="" placeholder="请输入验证码">
                                    <button class="send_btn send_1">获取验证码</button>
                                </div>
                                <div class="user_inp3">
                                    <span class="user_inp_icon4"></span>
                                    <input class="ls_input" type="text" name="" id="" placeholder="请设置密码,长度6-20位">
                                    
                                </div>
                                <div class="ls_text_wraing">
                                    <p>
                                        <input type="checkbox">我已阅读并同意
                                        <a href="">《礼舍网服务协议》</a>
                                    </p>
                                       
                                    <span class="fr backPassword"></span>
                                </div>
                                <div class="user_btn">立即注册</div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div class="footer mauto">
            <div class="footer_text">
                <p>© 2005-2020 礼舍网 版权所有，并保留所有权利。All rights Reserved</p>
                <p>ICP备案证书号:粤ICP备15033641号-1</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"register",
}
</script>

<style lang='less'>
    /* 头部 */
.register {
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
      a {
        font-size: 12px;
        font-weight: 400;
        height: 24px;
        display: block;
        line-height: 30px;
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
  }
  .user_btn {
    margin-top: 10px;
    width: 100%;
    height: 46px;
    background: #f55053;
    transition: .2s;
    -webkit-transition: .2s;
    text-align: center;
    line-height: 46px;
    color: #fff;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
  }
  .ls_text_wraing {
    padding-top: 30px;
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
  }
}
.register_titleText {
  font-size: 18px;
  vertical-align: middle;
  display: inline-block;
  padding-left: 15px;
}
/* 主体 */
.login_con, .back_inp_con {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 40px;
  box-sizing: border-box;
  -ms-box-sizing: border-box;
  background: #fff;
}
.register .user_inp_icon1, .user_inp_icon2, .user_inp_icon3, .user_inp_icon4 {
  float: left;
  width: 41px;
  height: 44px;
}
.register_con .user_inp1, .user_inp2, .user_inp3, .user_inp4 {
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
}
.register .user_btn:hover, .user_inp3 .send_btn:hover {
  background: #cc342d;
}
/* 底部 */
.footer {
  p {
    height: 14px;
    line-height: 14px;
    margin-bottom: 10px;
  }
}
.footer_text {
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  font-size: 14px;
  color: #666666;
  width: 100%;
}

</style>