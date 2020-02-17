<template>
  <div class="phone">
    <div class="n-title">
      <span class="left" @click="f">返回</span>
      <h2 class="right">{{msg}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "短信联系组件"
    };
  },
  methods: {
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