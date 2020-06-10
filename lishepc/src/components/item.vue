<template>
  <div class="shoplist">
    <!-- {{list}} -->
    <div @click="togoodDetail(j)" class="item" v-for="(i,j) in list" :key="j">
      <img :src="i.url" alt />
      <div class="details">
        <h3>{{i.score}}积分</h3>
        <div class="title">
          <p>{{i.title}}</p>
        </div>
        <div class="icon">
          <!-- <img src="" alt=""> -->
          {{i.store}}
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  props: ["list"],
  methods:{
    togoodDetail(i){
      // console.log(i)
      this.$router.push({
        path:'/good_detail',
        query:{
          itemld:i
        }
      })
    },
    abc(){
      console.log('hahahah')
    }

  }
};
</script>
<style scoped lang='less'>
.shoplist {
  margin-top: 20px;
  width: 1210px;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  .item:hover {
  
    box-shadow: 0 5px 10px 2px #cccccc;
    top: -1px;
  }
  .item {
    width: 230px;
    margin-right: 12px;
    background: #ffffff;
    text-align: center;
    margin-bottom: 10px;
    border-radius: 10px;
    position: relative;
    transition: 0.5s;
    img {
      width: 150px;
      height: 150px;
      padding: 20px 0;
      //   border: 1px solid #cccccc;
    }
    .details {
      text-align: left;
      padding: 10px 20px;
      h3 {
        color: red;
        font-weight: 400;
        margin-bottom: 20px;
      }
      .title {
        height: 80px;
        font-size: 13px;
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
    

        }
      }
      .icon{
        font-size: 13px;
        color: #7f6666;
        // border: 1px solid pink;
        height: 20px;
        padding-left: 30px;
        background: url(../assets/imgs/icon/zw_shop.png)no-repeat;
        background-size: 16px 15px;
        background-position: 0 1px;
      }
     
    }
  }
}
</style>
