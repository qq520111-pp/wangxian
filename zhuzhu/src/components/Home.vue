<template>
  <div class="home">
    <header>
      <h1>忘仙</h1>
    </header>
    <aside>
      <aa></aa>
      <bb></bb>
    </aside>
    <footer>
      <cc></cc>
    </footer>
  </div>
</template>

<script>
import swiper from "@/components/swiper";
import msgList from "@/components/msg-list";
import footer from "@/components/footer";

export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    swiper,
    msgList,
    footer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.home {
  display: flex;
  /* flex-wrap: wrap; */
  height: 100vh;
  flex-direction: column;
}
header {
  width: 100%;
  height: 0.4rem;
  background: black;
  line-height: 0.4rem;
}
header h1 {
  text-align: center;
  font-size: 20px;
  color: #fff;
  font-weight: 400;
  letter-spacing: 10px;
}
aside {
  width: 100%;
  flex: 1;
}
</style>
