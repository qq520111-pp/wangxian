<template>
  <div class="footer">
    <ul>
      <li v-for="(item,ind) in msg" :key="ind" @click="ff(item.r)">
        <i :class="['iconfont','f-block',item.icon]"></i>
        <span class="f-text">{{item.text}}</span>
        <span class="ab" v-if="item.a">{{item.a}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "cc",
  data() {
    return {
      msg: [
        { icon: "icon-yemian-copy-copy", text: "首页", r: "/" },
        { icon: "icon-tianqi", text: "天气", r: "/" },
        { icon: "icon-1", text: "地图", r: "/map" },
        { icon: "icon-gouwu", text: "购物车", r: "/gouwu?title=购物", a: "" },
        { icon: "icon-wode1", text: "个人中心", r: "/" }
      ],
      a: "1"
    };
  },
  methods: {
    ff(a) {
      this.$router.push(a);
    }
  },
  props: ["ss", "ccc"],
  watch: {
    ss() {
      this.msg[3].a = this.ss.length;
    },
    ccc() {
      this.msg[3].a = this.ccc.length;
    }
  },
  created() {
    this.msg[3].a = this.$store.state.ll.length;
  }
};
</script>

<style >
.footer {
  width: 100%;
  height: 0.7rem;
  background: #232;
}
.footer ul {
  display: flex;
  width: 100%;
}
.footer > ul > li {
  position: relative;
  width: 20%;
  color: #fff;
}
.f-block {
  display: block;
  font-size: 20px;
  line-height: 0.4rem;
}
.f-text {
  line-height: 0.2rem;
}
.ab {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 0.2rem;
  height: 0.2rem;
  line-height: 0.2rem;
  border-radius: 50%;
  background: black;
  color: #fff;
}
</style>
