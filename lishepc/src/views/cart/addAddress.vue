<template>
  <div class="add-address">
    <div class="my-address">
      <div class="address-list">
        <div v-if="addressData.length===0" style="text-align:center;margin:10px 0">
          还没有收获地址呢:
          <a style="color:#0000ff" @click.prevent="dialogFormVisible = true">新增收货地址</a>
        </div>

        <div class="item" v-for="(tab,i) in addressData" :key="i">
          <div class="name-box">
            {{tab.name}}
            <i v-if="i===0" class="icon el-icon-check"></i>
          </div>
          <div class="name">{{tab.name}}</div>
          <div class="addrress">{{tab.address}}</div>
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
import { mapGetters } from "vuex";
import { setStore } from "@/lib/store";
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
      dialogFormVisible: false
    };
  },
  created() {
    // 初始化城市区域
    this.init_area();
  },
  computed: {
    ...mapGetters(["addressData"])
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
          this.$message({
            message: "添加成功",
            type: "success",
            duration: 1000
          });
          console.log(this.addressData);
          this.$store.commit("addAddress", this.addressData);
          this.ruleForm = {
            name: "",
            address: "",
            phone: "",
            area: [],
            defaultAddressStatus: true
          };
          this.dialogFormVisible = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    delAddress(i) {
      this.addressData.splice(i, 1);
      setStore({
        name: "addressData",
        content: this.addressData,
        type: ""
      });
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
        setStore({
          name: "addressData",
          content: this.addressData,
          type: ""
        });
      }
    }
  }
};
</script>

<style lang='less' scope>
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
</style>