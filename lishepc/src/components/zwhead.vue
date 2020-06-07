<template>
  <div>
    <div class="brand">
      <div class="left">品牌:</div>
      <div class="conten">
        <ul class="brandone" v-show="!brandshow">
          <li v-for="(i,j) in mylist.pinlai.lists" :key="j">
            <a href="#">{{i}}</a>
          </li>
        </ul>
        <ul class="brandtwo" v-show="brandshow">
          <li v-for="(i,j) in mylist.pinlai.list" :key="j">
            <a href="#">{{i}}</a>
          </li>
        </ul>
      </div>
      <div class="right myborder" @click="brandshow=!brandshow">
        <span v-show="!brandshow">
          更多
          <i>_</i>
        </span>
        <span v-show="brandshow">
          更多
          <i>^</i>
        </span>
      </div>
    </div>
    <div class="navlist">
      <div class="left">一级分类:</div>
      <div class="conten">
        <div class="nav-one-item" v-for="(i,j) in mylist.navList" :key="j">
          <div class>
            <div @click="curr=j">
              <a href="#" :class="{active:$store.state.price.classtou.oneclass==j}" @click="setroutone(j)">{{i.title}}</a>
            </div>
          </div>
          <div class="nav-two" v-if="curr==j">
            <div class="nav-two-left">二级分类:</div>
            <div class="nav-two-conten">
              <div class="nav-two-item" v-for="(i,n) in i.list" :key="n">
                <a href="#" :class="{active:$store.state.price.classtou.twoclass==n}"  @click="setlist(j,n)">{{i.name}}</a>
                </div>
            </div>
            <div class="nav-two-right myborder" @click="navtwoshow=!navtwoshow" >
              <span v-show="!navtwoshow">
                更多
                <i>_</i>
              </span>
              <span v-show="navtwoshow">
                更多
                <i>^</i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="right myborder" @click="navoneshow=!navoneshow">
        <span v-show="!navoneshow">
          更多
          <i>_</i>
        </span>
        <span v-show="navoneshow">
          更多
          <i>^</i>
        </span>
      </div>
    </div>
    <div class="shop">
      <div class="shop-left">
        商品排序:
      </div>
      <div class="shop-conten">
          <div class="shop-item"  v-for="(i,j) in  mylist.shop" :key="j">
            <a href="#">{{i}}</a>
          </div>
          <slot name="pricefrom"></slot>
          
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  props: ["mylist"],
  data() {
    return {
      brandshow: false,
      navoneshow:false,
      navtwoshow:false,
      curr: 0,
     

    };
  },
  methods: {
      //设置一级分类路由
   setroutone(i){
   this.$store.state.price.classtou.oneclass=i;
  this.$store.state.price.classtou.twoclass=0;   this.oneacttive=i
  this.twoacttive=0
  //  console.log( this.$store.state.price.classtou.oneclass,this.$store.state.price.classtou.twoclass)

   },
      //设置二级分类路由

   setlist(i,j){
   this.$store.state.price.classtou.oneclass=i;
  this.$store.state.price.classtou.twoclass=j; 
 
  // console.log( this.$store.state.price.classtou.oneclass,this.$store.state.price.classtou.twoclass)
   }
   
  }
};
</script>
<style scoped lang='less'>
.myborder{
  span{
    border: 1px solid #cccccc;
    border-radius: 5px;
    padding: 2px 3px;
  }
  span:hover{
    border: 1px solid red;
   color: red;
  }
}
.active{
  color: red;
}
a{
  color: #333333;
}
.brand {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #cccc;
  .left {
    width: 100px;

    padding-right: 50px;
  }
  .right {
    width: 70px;
  }
  .conten {
    flex: 1;

    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 113px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 50px;
        a {
          display: inline-block;
          height: 50px;
          line-height: 50px;
          width: 100%;
          color: #333333;
          border: 1px solid #cccccc;
        }
      }
    }
    .brandtwo {
      height: 200px;
      overflow: auto;
    }
  }
}
.navlist {
  display: flex;
  height: 118px;
  padding: 20px 0;
  border-bottom: 1px solid #cccc;
  position: relative;

  .left {
    width: 100px;
    padding-right: 40px;
  }
  .right {
    width: 70px;
  }
  .conten {
    flex: 1;
    display: flex;

    .nav-one-item {
      margin-right: 40px;
      .nav-two {
        position: absolute;
        width: 1160px;
        left: 0px;
        top: 60px;
        border-bottom: 1px solid #cccccc;
        border-top: 1px solid #cccccc;
        padding: 20px 0;
        display: flex;
        .nav-two-left {
          width: 100px;
          padding-right: 40px;
        }
        .nav-two-conten {
          flex: 1;
          display: flex;
          .nav-two-item {
            margin-right: 40px;
          }
        }
        .nav-two-right {
          width: 70px;
        }
      }
    }
  }
}
.shop{
   display: flex;
  padding: 20px 0;
  .shop-left {
    width: 100px;
    padding-right: 40px;
  }
  .shop-conten{
    display: flex;
    .price{
      input{
        width: 70px;
        border-radius: 2px;
       
        margin: 0 3px;
        border:1px solid #DBDBDB;
        outline:none; 
      }
      .btn{
        border: 1px solid red;
        border-radius: 2px;
        color: red;
        padding: 0 8px;
        a{
        color: red;
          
        }
        // font-size: 13px;
      }
    }
    .shop-item{
      margin-right: 30px;
    }

  }
}
</style>