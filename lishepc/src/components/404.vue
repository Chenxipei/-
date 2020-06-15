<template>
  <div class="no-found">
      <div class="container">
        <img src="@/assets/imgs/404.png" alt="">
        <p>您的页面被外星人接走了。。。</p>
        <el-button type="primary" round @click="$router.replace('/home')">返回首页</el-button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scope lang='less'>
    .no-found{
        background: #fff;
        z-index: 9999;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        .container{
            text-align: center;
            img{
                width: 300px;
            }
            p{
                margin: 15px 0;
                font-size: 20px
            };
        }
    }
</style>