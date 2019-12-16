<template>
  <div class="msg-list">
    <ul>
      <router-link
        v-for="(item,ind) in msg"
        :key="ind"
        :to="{path:item.path,query:{title:item.text}}"
        tag="li"
      >
        <i :class="['iconfont','block',item.icon]"></i>
        <span>{{item.text}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "bb",
  data() {
    return {
      msg: [
        { text: "新闻资讯", icon: "icon-xinwengonggao", path: "newlist" },
        { text: "图片分享", icon: "icon-tupianfenxiang", path: "imglist" },
        { text: "商品展示", icon: "icon-shangpinzhanshi", path: "prolist" },
        { text: "留言反馈", icon: "icon-liuyanfankui", path: "newlist" },
        { text: "电话联系", icon: "icon-lunkuodasan-", path: "newlist" },
        { text: "短信联系", icon: "icon-duanxinlianxi", path: "newlist" }
      ]
    };
  }
};
</script>

<style >
.msg-list ul {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 0 0.1rem .1rem;
  background: #fff;
}
.msg-list ul li {
  box-sizing: border-box;
  width: 32%;
  margin-top: 2%;
  cursor: pointer;
  padding: 0.1rem 0;box-shadow: 0 0 20px #ddd;
}
.msg-list ul li + li {
  margin-left: 1.3%;
}
.msg-list ul li:nth-child(4) {
  margin-left: 0%;
}

.msg-list > ul > li span {
  font-size: 0.2rem;
}
.block {
  display: block;
  font-size: 0.6rem;
  padding-bottom: 0.05rem;
}
</style>
