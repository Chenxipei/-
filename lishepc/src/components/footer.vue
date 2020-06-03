<template>
  <div class="footer">
    <div class="footer-box">
      <div class="footer_2_pr">
        <div class="footer_2_tips_quan">
          <p>全</p>
          <span>商品齐全 随心挑选</span>
        </div>
        <div class="footer_2_tips_quan">
          <p>优</p>
          <span>全球优品 万里挑一</span>
        </div>
        <div class="footer_2_tips_quan">
          <p>兑</p>
          <span>灵活兑换 购物无忧</span>
        </div>
        <div class="footer_2_tips_quan">
          <p>惠</p>
          <span>专属内购 专享折扣</span>
        </div>
        <div class="footer_2_tips_quan">
          <p>快</p>
          <span>多仓直发 全国配送</span>
        </div>
        <div class="footer_2_tips_quan">
          <p>享</p>
          <span>极速响应 品质服务</span>
        </div>
      </div>
      <div class="footer_2_bottom">
        <div class="footer_2_bottom_a">
          <a href="#">关于我们</a>
          <a href="#">礼舍指南</a>
          <a href="#">积分兑换</a>
          <a href="#">关于我们</a>
          <a href="#">关于我们</a>
          <a href="#">关于我们</a>
          <a href="#">关于我们</a>
        </div>
      </div>
      <div class="footer_2_bottom_text">
        <span>食品经营许可证：JY14403050238924</span>
        <span>营业执照 礼舍科技版权所有 统一社会信用代码：91440300071136394Y</span>
      </div>
      <div class="footerimg">
        <img src="../../assets/img/index/govIcon.gif" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "foot"
};
</script>
<style lang="less" scope>
.footer {
  background: rgb(65, 65, 65);
  .footer-box {
    width: 1300px;
    margin: 0 auto;
    position: relative;
  }
  .footer_2_pr {
    width: 1300px;
    margin: 0 auto;
    padding: 30px 0;
    box-sizing: border-box;
    display: flex;
    .footer_2_tips_quan {
      margin-right: 30px;
      p {
        height: 40px;
        width: 40px;
        text-align: center;
        line-height: 34px;
        border-radius: 50%;
        border: 2px solid #fff;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        display: inline-block;
        margin-right: 14px;
        margin-right: 10px;
      }
      span {
        color: #fff;
        font-size: 16px;
      }
    }
  }
  .footer_2_bottom {
    width: 1150px;
    padding-top: 25px;
    border-top: 1px solid #999;
    color: #999;
    font-size: 12px;
    margin-left: 55px;
    .footer_2_bottom_a {
      display: flex;
      justify-content: center;
    }
    .footer_2_bottom_a a {
      height: 16px;
      line-height: 16px;
      padding: 0 15px;
      font-size: 12px;
      color: #999;
      display: inline-block;
      &+a{
      border-left: 1px solid #999;

      }
    }
    
  }
  .footer_2_bottom_text {
    width: 1200px;
    text-align: center;
    padding: 18px 0 35px;
    position: relative;
    span{
      font-size: 12px;
      color: #999;
      margin-left: 30px;
    }
  }
  .footerimg{
    position: absolute;
    right: 100px;
    top: 132px;
    img{
      width: 36px;
      height: 50px;
    }
  }
}
</style>