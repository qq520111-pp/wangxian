<template>
  <baidu-map
    :zoom="zoom"
    :center="center"
    class="map"
    @ready="handler"
  ></baidu-map>
</template>

<script>
export default {
  data() {
    return {
      baidumapSwitch: false,
      center: { lng: 114.220941, lat: 22.690015 },
      zoom: 18
    };
  },
  methods: {
    //百度地图初始化（这个一定要！否则地图回加载不出来）
    handler({ BMap, map }) {
      //缩放
      map.enableScrollWheelZoom(true);

      //坐標
      var point = new BMap.Point(114.220941, 22.690015);
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker);

      //改变位置
      // var opts = { offset: new BMap.Size(500, 5) };
      //添加控件--右下角
      map.addControl(new BMap.NavigationControl("BMAP_ANCHOR_BOTTOM_RIGHT"));
    }
  }
};
</script>

<style>
.map {
  width: 100%;
  height: 100vh;
}
</style>