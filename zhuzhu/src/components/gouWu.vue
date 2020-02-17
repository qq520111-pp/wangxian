<template>
  <div class="gw-list">
    <div class="n-title">
      <span class="left" @click="f">返回</span>
      <h2 class="right">{{title}}</h2>
    </div>
    <ul class="pro">
      <li v-for="(item,ind) in imgList" :key="ind">
        <div class="p-img">
          <img :src="item.src" alt />
        </div>
        <div class="p-right">
          <h3>{{item.title}}</h3>
          <p>
            <span>{{item.yi | aa}}</span>
            <span style="float:right">{{item.num}}件</span>
          </p>
          <p>
            <span>需要支付{{item.num*item.yi}}</span>
            <el-button style="float:right" type="success" size="mini" @click="cc()">立即支付</el-button>
          </p>
        </div>
        <div class="cha" @click="dele(item)">x</div>
      </li>
      <li v-if="!imgList.length">还没有物品加入购物车</li>
    </ul>

    <footer>
      <cc :ccc="imgList"></cc>
    </footer>
  </div>
</template>

<script>
import cc from "@/components/cc";
export default {
  name: "Home",
  data() {
    return {
      imgList: [],
      title: ""
    };
  },
  created() {
    this.title = this.$route.query.title;
    this.imgList = this.$store.state.ll;
  },
  methods: {
    f() {
      this.$router.go(-1);
    },
    cc() {
      //支付方法---没有接口
      alert("咋滴一个模拟的还想支付??");
    },
    dele(item) {
      var boo = confirm("确定删除此商品吗?");
      if (boo) {
        this.$store.commit("deleList", item.i);
        this.imgList = this.$store.state.ll;
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
  .pro li {
    position: relative;
    padding: 0.1rem;
    overflow: hidden;
  }
  .pro li img {
    width: 100%;
    height: 100%;
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
  .cha {
    position: absolute;
    width: 40px;
    height: 40px;
    line-height: 0.4rem;
    font-size: 0.2rem;
    top: 0;
    right: 0;
  }
</style>