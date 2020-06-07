<template>
  <div class="cartIndex">
    <header class="head">
      <div class="logo">
        <img
          src="https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/uploadFromAdmin/2020-05-27/1590561641_90344.png"
          alt
        />
        <span>购物车</span>
      </div>
      <div class="search">
        <input type="text" placeholder="综合搜索 商品/品牌/店铺" />
        <a href="#">搜索</a>
      </div>
    </header>
    <div class="my-address">
      <div class="address-list">
        <div class="item" v-for="(tab,i) in addressData" :key="i">
          <div class="name-box">
            {{tab.name}}
            <i v-if="i===0" class="icon el-icon-check"></i>
          </div>
          <div class="name">{{tab.name}}</div>
          <div class="addrress">{{tab.area.join("")}}{{tab.address}}</div>
          <div class="phone">{{tab.phone}}</div>
          <div class="edit">
            <a class="table-edit" href="#" @click.prevent="toFirst(i)" v-if="i!==0">设为默认</a>
            <a class="table-edit" href="#" @click.prevent="editAddress(i)">编辑</a>
            <a class="table-edit" href="#" @click.prevent="delAddress(i)" v-if="i!==0">删除</a>
            <a class="table-edit" href="#" v-if="i===0">默认地址不可删除</a>
          </div>
        </div>
      </div>
      <div class="address-menu">
        <div class="menu-left">显示全部地址</div>
        <div class="menu-right" @click="dialogFormVisible = true">+新增收货地址</div>
      </div>
    </div>
    <div class="cart">
      <div class="c-title">
        心意商城
        <span class="cart-num">{{cartData.length}}</span>
      </div>
      <div class="tab-title">
        <div>选择</div>
        <div class="goods">商品</div>
        <div class="goods-info">商品属性</div>
        <div>单价</div>
        <div>数量</div>
        <div>金额</div>
        <div>操作</div>
      </div>
      <div class="cart-box">
        <div class="none-goods" v-show="cartData.length==0">购物车空空如也，快去选点东西吧</div>
        <div class="tab-container" v-for="(item,i) in cartData" :key="i">
          <div class="selectAll">
            <i
              :class="item.selected?'el-icon-success':'el-icon-circle-check'"
              @click="changeSelectedStatus(i)"
            ></i>
          </div>
          <div class="goods-info">
            <img :src="item.cover" />
            <p>{{item.name}}</p>
          </div>
          <div class="goods-attr">{{item.attr}}</div>
          <div class="goods-price">{{item.price}}</div>
          <div class="goods-num">
            <el-input-number size="mini" :min="1" v-model="item.num"></el-input-number>
          </div>
          <div class="all-price">{{parseInt(item.price)*item.num}}</div>
          <div class="del">
            <a href="#" @click.prevent="delCartItem(i)">删除</a>
          </div>
        </div>
      </div>

      <div class="tab-total">
        <div class="total-left selectAll">
          <i @click="selectAllFn" :class="selectedAll?'el-icon-success':'el-icon-circle-check'"></i>
          <span class="selall">全选</span>
          <a href="#" class="del" @click.prevent="delCartData">删除</a>
        </div>
        <div class="total-right">
          <div class="all-num">
            <p>
              已选商品
              <span>{{allNum}}</span>件
            </p>
            <p>
              总价：
              <span>{{allPrice}}</span>
            </p>
          </div>
          <div class="total-btn" @click="gototal">去结算</div>
        </div>
      </div>
    </div>
    <el-dialog title="添加收货地址" :visible.sync="dialogFormVisible">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="收货人" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone" v-model="ruleForm.phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="选择地区" prop="area" v-model="ruleForm.area">
          <el-cascader v-model="ruleForm.area" :options="areaOptions" :props="areaName"></el-cascader>
        </el-form-item>

        <el-form-item label="详细地址" prop="address">
          <el-input type="textarea" v-model="ruleForm.address"></el-input>
        </el-form-item>
        <el-form-item label="设为默认地址" prop="defaultAddressStatus">
          <el-switch v-model="ruleForm.defaultAddressStatus"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import area from "@/lib/area";
export default {
  data() {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      if (!/^1[3456789]\d{9}$/.test(value)) {
        callback(new Error("请输入正确的手机号"));
      } else {
        callback();
      }
    };
    return {
      saveShow: false,
      ruleForm: {
        name: "",
        defaultAddressStatus: true,
        area: [],
        phone: "",
        address: ""
      },
      areaName: {
        value: "name",
        label: "name",
        children: "city"
      },
      areaOptions: [],
      rules: {
        name: [
          { required: true, message: "请填写姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        phone: [{ required: true, validator: checkPhone, trigger: "blur" }],
        address: [
          { required: true, message: "请填写详细地址", trigger: "blur" }
        ],
        area: [
          {
            required: true,
            message: "请填写区域",
            trigger: "blur"
          }
        ]
      },
      formLabelWidth: "120px",
      dialogFormVisible: false,
      // selectedAll: true,
      selectGoodsNum: 0,
      addressData: [
        {
          name: "老刘",
          address: "金沙江路1",
          area: ["上海", "上海", "普陀区"],
          phone: 13188888888
        },
        {
          name: "王小虎",
          address: "金沙江路2",
          area: ["上海", "上海", "普陀区"],
          phone: 13188888888
        }
      ],
      cartData: [
        {
          cover:
            "https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/itemPic/2020-06-03/1591163478_32704.jpg?x-oss-process=png/resize,w_100/quality,q_100/format,jpg",
          name: "果然萌 台湾风味免煮即食烧仙草3盒装",
          attr: "口味：奶茶*1+鲜奶*1+酸奶*1",
          price: "100积分",
          num: 1
        },
        {
          cover:
            "https://lishe-shop-images.oss-cn-shenzhen.aliyuncs.com/itemPic/2020-06-03/1591163478_32704.jpg?x-oss-process=png/resize,w_100/quality,q_100/format,jpg",
          name: "果然萌 台湾风味免煮即食烧仙草3盒装",
          attr: "口味：奶茶*1+鲜奶*1+酸奶*1",
          price: "100积分",
          num: 2
        }
      ]
    };
  },

  created() {
    // 初始化选中状态
    this.init_cart_data();
    // 初始化城市区域
    this.init_area();
  },
  computed: {
    allPrice() {
      let all_price = 0;
      this.cartData.forEach(item => {
        if (item.selected) {
          let price = parseFloat(item.price) * item.num;
          all_price += price;
        }
      });
      return all_price;
    },
    selectedAll() {
      return this.cartData.every(item => item.selected == true);
    },
    allNum() {
      let all_num = 0;
      this.cartData.forEach(item => {
        if (item.selected) {
          all_num += item.num;
        }
      });
      return all_num;
    }
  },
  methods: {
    init_area() {
      // console.log(area.area)
      let newAreaOptions = area.area.map((item, i) => {
        let newCityName = item.city.map((item, i) => {
          let newAreaName = item.area.map(item => {
            return {
              name: item
            };
          });
          return {
            name: item.name,
            city: [...newAreaName]
          };
        });
        return {
          name: item.name,
          city: [...newCityName]
        };
      });
      console.log("newAreaOptions", newAreaOptions);
      this.areaOptions = [...newAreaOptions];
    },
    init_cart_data() {
      this.cartData.map(item => (item.selected = true));
    },
    changeSelectedStatus(i) {
      // console.log(this.cartData[i].selected)
      // this.cartData[i].selected = !this.cartData[i].selected
      // 在 vue 中是无法检测到根据索引值修改的数据变动的
      // 可以这样做
      this.cartData[i]["selected"] = !this.cartData[i]["selected"];
      this.cartData.__ob__.dep.notify();
      // this.$set(this.cartData[i], `selected`, false)
      // console.log(this.cartData)
    },
    selectAllFn() {
      if (this.selectedAll) {
        this.cartData.map(item => (item.selected = false));
      } else {
        this.cartData.map(item => (item.selected = true));
      }
      this.cartData.__ob__.dep.notify();
      // console.log(this.cartData)
    },
    delCartData() {
      this.cartData = [];
    },
    delCartItem(i) {
      this.cartData.splice(i, 1);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // console.log(this.ruleForm);

          let {
            name,
            address,
            area,
            phone,
            defaultAddressStatus
          } = this.ruleForm;
          console.log(area);

          if (defaultAddressStatus) {
            this.addressData.unshift({
              name,
              address: `${area.join("")}${address}`,
              area,
              phone
            });
          } else {
            this.addressData.push({
              name,
              address: `${area.join("")}${address}`,
              area,
              phone
            });
          }

          this.ruleForm = {
            name: "",
            address: "",
            phone: "",
            area: [],
            defaultAddressStatus: true
          };
          this.$message({
            message: "添加成功",
            type: "success",
            duration: 1000
          });
          this.dialogFormVisible = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    delAddress(i) {
      this.addressData.splice(i, 1);
    },
    editAddress(i) {
      // let { name, address, phone, area } = this.addressData[i];
      // this.ruleForm = {
      //   name,
      //   address,
      //   phone,
      //   area,
      //   defaultAddressStatus: true
      // };
      // this.dialogFormVisible = true;
    },
    toFirst(index) {
      if (index != 0) {
        this.addressData.unshift(this.addressData.splice(index, 1)[0]);
      }
    }
  },
  // 去结算
  methods: {
    gototal(){
      this.$router.push("/total")
    }
  },
};
</script>

<style scope lang='less'>
.my-address {
  font-size: 14px;
}
.table-edit + .table-edit {
  margin-left: 10px;
}
.selectAll {
  text-align: left !important;
  i {
    font-size: 25px;
    color: rgb(245, 80, 83);
    vertical-align: middle;
  }
}
.cart-box {
  .none-goods {
    text-align: center;
    margin: 50px 0;
  }
}
.cartIndex {
  width: 1000px;
  margin: 0 auto 100px;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    height: 120px;
    .logo {
      img {
        vertical-align: -13px;
      }
      span {
        font-size: 22px;
        margin-left: 20px;
      }
    }
    .search {
      height: 40px;
      width: 300px;
      overflow: hidden;
      border-radius: 20px;
      border: 2px solid rgb(245, 80, 83);
      input {
        height: 38px;
        width: 230px;
        outline: 0;
        border: 0;
        padding-left: 30px;
        font-size: 13px;
      }
      a {
        display: block;
        background: rgb(245, 80, 83);
        width: 66px;
        height: 38px;
        float: right;
        text-align: center;
        color: #fff;
        line-height: 38px;
      }
    }
  }
  .my-address {
    .address-list {
      border: 1px dashed #ddd;
      padding: 5px 20px;
      .item {
        display: flex;
        font-size: 13px;
        margin: 15px 0;
        &:hover {
          background: rgb(255, 243, 243);
          .edit {
            display: block;
          }
        }
        > div + div {
          padding: 6px 0;
          margin: 0 10px;
        }
        > div {
          &.name-box {
            padding: 6px 0;
            width: 140px;
            position: relative;
            text-align: center;
            border: 1px solid #ff0000;
            overflow: hidden;
            .el-icon-check {
              position: absolute;
              right: -2px;
              bottom: -8px;
              color: #fff;
              background: rgb(245, 80, 83);
              width: 20px;
              height: 20px;
            }
          }
        }
        .edit {
          display: none;
        }
      }
    }
    .address-menu {
      display: flex;
      padding: 20px 0;
      justify-content: space-between;
      font-size: 13px;
    }
  }
  .cart {
    .c-title {
      font-weight: 600;
      font-size: 18px;
      color: rgb(245, 80, 83);
      border-bottom: 1px solid rgb(245, 80, 83);
      width: 100px;
      padding-bottom: 10px;
      .cart-num {
        display: inline-block;
        width: 18px;
        height: 18px;
        text-align: center;
        line-height: 18px;
        background: rgb(245, 80, 83);
        color: #fff;
        font-weight: normal;
        font-size: 14px;
        border-radius: 15px;
      }
    }
    .tab-title {
      display: flex;
      justify-content: space-between;
      background: rgb(252, 252, 252);
      border: 1px solid #ddd;
      padding: 15px 10px;
      > div {
        &:nth-of-type(1) {
          padding-left: 15px;
          text-align: left !important;
        }
        flex: 1;
        text-align: center;
        &.goods {
          width: 250px;
          overflow: hidden;
          flex: none;
        }
      }
    }
    .tab-container {
      display: flex;
      padding-left: 15px;
      border-bottom: 1px solid #ddd;
      > div {
        flex: 1;
        text-align: center;
        font-size: 13px;
        color: #333;
        margin: 20px 0;
      }
      .goods-info {
        width: 250px;
        overflow: hidden;
        display: flex;
        flex: none;
        img {
          width: 80px;
          height: 80px;
        }
      }
      .goods-price {
        color: #000;
      }
      .all-price {
        color: rgb(245, 80, 83);
      }
    }
    .tab-total {
      margin-top: 30px;
      border: 1px solid #ddd;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 10px;
      font-size: 13px;
      span.selall {
        margin-left: 10px;
        margin-right: 30px;
      }
      .total-right {
        display: flex;
        align-items: center;
        .all-num {
          display: flex;
          margin-right: 30px;
          & p + p {
            margin-left: 30px;
          }
          span {
            font-weight: bold;
            color: rgb(245, 80, 83);
            font-size: 16px;
          }
        }
        .total-btn {
          font-weight: bold;
          height: 60px;
          line-height: 60px;
          width: 120px;
          text-align: center;
          font-size: 20px;
          color: #fff;
          cursor: pointer;
          background: rgb(245, 80, 83);
        }
      }
    }
  }
}
</style>