<template>
  <div class="from">
    <div class="n-title">
      <span class="left" @click="f">返回</span>
    </div>
    <div>
      <el-form
        :model="ruleForm2"
        status-icon
        :rules="rules2"
        ref="ruleForm2"
        class="demo-ruleForm"
        :label-position="labelPosition"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm2.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="反馈内容" prop="msg">
          <el-input v-model="ruleForm2.msg"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入内容"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (value.length > 8) {
          return alert(new Error("名字不能长于8个字符"));
        }
        callback();
      }
    };
    return {
      ruleForm2: {
        name: "",
        msg: ""
      },
      rules2: {
        name: [{ validator: validatePass, trigger: "blur" }],
        msg: [{ validator: checkAge, trigger: "blur" }]
      },
      labelPosition: "left"
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //验证成功
          this.$axios.post("/api/createData", this.ruleForm2).then(d => {
            //   根据服务器端返回的数据判断成功和失败--重定向到对应位置
            if (d.err) {
              this.$router.go(-1);
            } else {
              alert("用户名存在");
            }
          });
        } else {
          alert("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    f() {
      this.$router.go(-1);
    }
  }
};
</script>

<style >
.n-title {
  height: 0.5rem;
  background: #222;
  color: #fff;
  font-size: 20px;
  line-height: 0.5rem;
  padding: 0 0.1rem;
}
.left {
  float: left;
  font-size: 0.16rem;
}
.right {
  font-weight: 400;
}
</style>