<template>
  <ul class="img">
    <li v-for="(item,ind) in imgList" :key="ind">
      <router-link :to="{path:'img1'}">
        <img :src="item.src" alt />
        <span>{{item.title}}</span>
      </router-link>
    </li>
    <li ref="aa">
      <span>正在加载中~~</span>
    </li>
    <el-pagination tag="li" background layout="prev, pager, next" :total="100" @current-change="aa"></el-pagination>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      imgList: []
    };
  },
  created() {
    this.$axios.get("/api/imgList/0").then(d => {
      this.imgList = d.data;

      this.$refs.aa.style.display = "none";
    });
  },
  methods: {
    aa(x) {
      this.$axios.get("/api/imgList/" + x).then(d => {
        this.imgList = d.data;
      });
    }
  }
};
</script>
<style>
</style>