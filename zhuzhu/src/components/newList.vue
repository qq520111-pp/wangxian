<template>
  <div class="new-list">
    <div class="n-title">
      <span class="left" @click="f">返回</span>
      <h2 class="right">{{title}}</h2>
    </div>
    <ul class="new">
      <li v-for="(item,ind) in newList" :key="ind">
        <a :href="item.href" target="_blank">{{item.title}}</a>
      </li>
      <li ref="aa">
        <span>正在加载中~~</span>
      </li>
      <li class="di">我也是有底线的~~~~</li>
    </ul>

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
      newList: [],
      title: ""
    };
  },
  created() {
    this.$axios.get("/api/newList").then(d => {
      var dd = d.data.data;
      this.newList = dd;
      this.$refs.aa.style.display = "none";
    });
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
.new {
  text-align: left;
  text-indent: 0.1rem;
}
.new li {
  height: 0.4rem;
  margin: 0.1rem 0;
  line-height: 0.4rem;
  border-bottom: dashed 1px #ddd;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: #fff;
}
.new li.di {
  text-align: center;
  border-bottom: none;
  margin-bottom: 0.7rem;
}
.left {
  float: left;
  font-size: 0.16rem;
}
.right {
  font-weight: 400;
}
</style>
