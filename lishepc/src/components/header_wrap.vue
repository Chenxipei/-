 <template>
  <div class="register_header_wrap">
    <div class="register_header mauto clearfix">
      <div class="ls_vip_logo fl">
        <router-link to="/home">
          <img src="../assets/imgs/login/logo_two.png" alt />
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
  </div>
</template>
<script>
export default {
  name: "header_wrap"
};
</script>

<style lang="less">
.register_header_wrap {
  .register_header {
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
      a:hover{
          color: red;
          transition: 0.2s;
      }
    }
  }
}
</style>
