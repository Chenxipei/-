<template>
  <div>
    <div class="brand">
      <div class="left">品牌:</div>
      <div class="conten">
        <ul class="brandone" v-show="!brandshow" >
          <li v-for="(i,j) in mylist.pinlai.lists" :key="j">
            <a href="#">{{i}}</a>
          </li>
        </ul>
        <ul class="brandtwo" v-show="brandshow" >
          <li v-for="(i,j) in mylist.pinlai.list" :key="j">
            <a href="#">{{i}}</a>
          </li>
        </ul>
      </div>
      <div class="right" @click="brand"> 
          <span v-show="!brandshow">更多<i>_</i></span>
          <span v-show="brandshow">更多<i>^</i></span>
      </div>
    </div>
    <div class="navlist" >
      二级分类
    </div>
  </div>
</template>
<script>
export default {
  props: ["mylist"],
  data(){
    return {
        brandshow:false
    }
  },
  methods:{
      brand(){
          this.brandshow=!this.brandshow
      }
  }
};
</script>
<style scoped lang='less'>
.brand {
  display: flex;
  padding: 20px 0;
  .left{
      width: 100px;
   
      padding-right:50px;
  }
  .right{
      width: 70px;  

  }
  .conten {
      flex: 1;
  ;
    ul {
    
      display: flex;
      flex-wrap: wrap;
      li{
          width: 113px;
          text-align: center;
             white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 50px;
            a{
                display: inline-block;
                height: 50px;
                line-height: 50px;
                width: 100%;
                color: #333333;
          border: 1px solid #cccccc;

            }
      }
    }
    .brandtwo{
     height: 200px;
      overflow: auto;
    }
  }
}
</style>