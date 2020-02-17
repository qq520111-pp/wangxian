<template>
  <div class="phone">
    <div class="n-title">
      <span class="left" @click="f">返回</span>
      <h2 class="right">{{msg}}</h2>
    </div>

    <!-- 渲染列表 -->
    <div class="user-content" v-for="(item,index) in msgList" :key="index">
      <div class="user-feedback" @click="read(item,index)">
        <div class="user-img">
          <img
            src="
            https://img04.sogoucdn.com/app/a/100520093/e7d4cac126941b5a-396dcc73e3007ef8-1d86d5a2296f9415b7faa9269709b04f.jpg"
            alt
          />
          <span>{{item.name}}</span>
          <span class="user-time">{{item.time}}</span>
          <span class="user-time">第{{index+1}}楼</span>
          <span class="user-time">{{item.reader?"已读":"未读"}}</span>
        </div>
        <div class="user-msg">{{item.msg}}</div>
      </div>

      <!-- https://img04.sogoucdn.com/app/a/100520093/e7d4cac126941b5a-396dcc73e3007ef8-1d86d5a2296f9415b7faa9269709b04f.jpg -->
    </div>
    <!-- 提交组件 -->
    <router-link to="fabiao">
      <el-button type="primary" style="margin-top:12px;">发表反馈</el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "反馈中心",
      msgList: []
    };
  },
  methods: {
    f() {
      this.$router.go(-1);
    },
    read(item, index) {
      
      this.$axios
        .post("/api/reader", {
          name: item.name
        })
        .then(d => {
          if (d.data.err) {
            this.$router.go(0);
          }
        });
    }
  },
  created() {
    this.$axios.post("/api/feedback").then(d => {
      this.msgList = d.data;
    });
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
.user-content {
  text-align: left;
}
.user-time {
  margin-left: 10px;
}
.user-feedback {
  box-sizing: border-box;
  background: #fff;
  padding: 12px 20px 0;
  margin-top: 12px;
}
.user-img img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 6px;
}
.user-img span {
  vertical-align: middle;
}
.user-msg {
  padding: 12px 0 12px 10px;
}
</style>