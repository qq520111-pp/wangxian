<template>
  <div class="pro-list">
    <div class="p-title">
      <span class="left" @click="f">返回</span>
      <h2 class="right">{{title}}</h2>
    </div>
    <ul class="pro">
      <li v-for="(item,ind) in proList" :key="ind">
        <div class="p-img">
          <img :src="item.src" alt />
        </div>
        <div class="p-right">
          <h3>{{item.title}}</h3>
          <p>
            <span>{{item.yi | aa}}</span>
          </p>
          <p>
            <el-input-number v-model="arr[ind]" :min="0" :max="10" label="描述文字" size="mini"></el-input-number>
            <el-button type="success" size="mini" @click="succ(item.i)">加入购物车</el-button>
          </p>
        </div>
      </li>
      <li ref="aa">
        <span>正在加载中~~</span>
      </li>
    </ul>

    <footer>
      <cc :ss="chi"></cc>
    </footer>
  </div>
</template>

<script>
import cc from "@/components/cc";
export default {
  name: "Home",
  data() {
    return {
      proList: [],
      title: "",
      arr: [],
      value: 0,
      chi: []
    };
  },
  created() {
    this.$axios.get("/api/proList").then(d => {
      this.proList = d.data.data;
      this.arr.length = 100;
      this.arr.fill(0);
      this.$store.commit("getList", d.data.data);
      this.$refs.aa.style.display = "none";
    });
    this.title = this.$route.query.title;
  },
  methods: {
    f() {
      this.$router.go(-1);
    },
    succ(id) {
      if (this.arr[id]) {
        this.$store.commit("filList", {
          num: this.arr[id],
          id,
          yuan: this.proList[id].yi
        });
        this.chi = this.$store.state.ll;
      }
    }
  },
  components: {
    cc
  },
  filters: {
    aa(value) {
      value = "￥" + value + "元";
      return value;
    }
  }
};
</script>

<style >
.p-title {
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
.pro li {
  padding: 0.1rem;
  overflow: hidden;
  background: #fff;
  margin-top: 0.1rem;
}
.pro li img {
  width: 100%;
}
.p-img {
  float: left;
  width: 30%;
  height: 1rem;
  background: #222;
}
.p-right {
  float: right;
  box-sizing: border-box;
  width: 70%;
  height: 1rem;
  text-align: left;
  padding: 0.05rem 0.1rem 0;
}
.p-right h3 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
  font-size: 16px;
}
.p-right p {
  margin-top: 0.1rem;
  color: chartreuse;
}
</style>
