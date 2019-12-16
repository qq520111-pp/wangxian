<template>
  <div class="img-list">
    <div class="n-title">
      <span class="left" @click="f">返回</span>
      <h2 class="right">{{title}}</h2>
    </div>
    <router-view></router-view>
    <footer>
      <cc></cc>
    </footer>
  </div>
</template>

<script>
import cc from "@/components/cc";
export default {
  name: "Home",
  data() {
    return {
      title: ""
    };
  },
  created() {
    this.title = this.$route.query.title;
  },
  methods: {
    f() {
      this.$router.go(-1);
    }
  },
  components: {
    cc
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
.img li a {
  display: block;
  padding: 0.1rem;
}
.img li a > span {
  line-height: 0.4rem;
}
.img li a > img {
  width: 100%;
}
.left {
  float: left;
  font-size: 0.16rem;
}
.right {
  font-weight: 400;
}
.el-pagination {
  margin-bottom: 0.9rem;
}
</style>