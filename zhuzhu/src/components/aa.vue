<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- 这部分放你要渲染的那些内容 -->
      <swiper-slide v-for="(item,index) in msgList" :key="index">
        <a class="tar" :href="item.href" target="_blank">
          <img :src="item.src" alt />
        </a>
      </swiper-slide>

      <!-- 这是轮播的小圆点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "aa",
  data() {
    return {
      msgList: [
        {
          href: "http://wangxian.sjwyx.com/news/212325.html",
          src:
            "http://www.sjwyx.com/download/game/photos/20150731/2015073111215310765724.jpg"
        },
        {
          href: "http://wangxian.sjwyx.com/news/206918.html",
          src:
            "http://www.sjwyx.com/download/game/photos/20150716/2015071612003460726020.jpg"
        },
        {
          href: "http://wangxian.sjwyx.com/news/206310.html",
          src:
            "http://www.sjwyx.com/download/game/photos/20150714/2015071409344823226027.jpg"
        },
        {
          href: "http://wangxian.sjwyx.com/news/205977.html",
          src:
            "http://www.sjwyx.com/download/game/photos/20150710/2015071015491252781702.jpg"
        }
      ], //模拟的数据
      swiperOption: {
        autoplay: {
          delay: 2000, //1秒切换一次
          stopOnLastSlide: true,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>

<style >
.s {
  height: 100px;
  background: green;
}
.tar img {
  width: 100%;
}
</style>
