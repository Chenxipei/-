<template>
  <div>
    <div class="brand" :class="{brandbor:!gengdou}">
      <div class="left">{{title}}：</div>
      <div class="right">
        <div class="conten">
          <ul v-if="isshow||!arr2" class="listone" :class="{hasarr:!arr2,noarr:arr2}">
            <li v-for="(item,index) in arr" :key="index">
              <a
                :class="{border:borders,active:$route.query.val===item||(defaultArrActive==index)}"
                @click="getvur()"
              >{{item}}</a>
            </li>
            <slot name="shop"></slot>
          </ul>
          <ul v-else class="listtwo noarr">
            <li v-for="(item,index) in arr2" :key="index">
              <a :class="{border:borders}" @click="getvur(val)">{{item}}</a>
            </li>
          </ul>
        </div>

        <p class @click="fn" v-if="gengdou">
          <span v-if="isshow">
            更多
            <i>^</i>
          </span>
          <span v-else>
            更多
            <i>_</i>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "zwtabbar",
  data() {
    return {
      isshow: "true"
    };
  },
  mounted() {
    console.log(this.$route);
  },
  props: ["title", "arr", "arr2", "borders", "gengdou", "defaultArrActive"],
  methods: {
    fn() {
      console.log();
      this.isshow = !this.isshow;
    },
    getvur() {
      console.log(2);
    }
  }
};
</script>
<style scoped lang='less'>
.brand.brandbor {
  border: 0;
  // background: pink;
}

.brand {
  display: flex;
  border-bottom: 1px solid #cccccc;
  padding: 20px 0;
  .left {
    width: 100px;
  }
  .right {
    flex: 1;
    display: flex;
    .conten {
      width: 1000px;
      .noarr {
        width: 980px;
        display: flex;
        flex-wrap: wrap;

        li {
          list-style: none;
          width: 110px;

          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          a {
            width: 100%;
            color: #393c50;
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .border {
            line-height: 50px;
            height: 50px;
            display: inline-block;

            border: 1px solid #cccccc;
          }

          a:hover {
            color: red;
            border-color: red;
          }
        }
      }
      .hasarr {
        width: 980px;
        display: flex;
        flex-wrap: wrap;
        li {
          list-style: none;
          a {
            padding-right: 50px;
            color: #393c50;
            display: inline-block;
            &.active {
              color: #ff0000;
            }
          }
          .border {
            line-height: 50px;
            height: 50px;
            display: inline-block;

            border: 1px solid #cccccc;
          }

          a:hover {
            color: red;
            border-color: red;
          }
        }
      }
    }

    .listtwo {
      width: 100%;
      height: 200px;
      overflow: auto;
    }
    p {
      width: 60px;
      span {
        display: inline-block;
        padding: 5px;
        border: 1px solid #cccccc;
        border-radius: 5px;
      }
      span:hover {
        color: red;
        border: 1px solid red;
      }
    }
  }
}
</style>