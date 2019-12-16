<template>
  <div class="img1-list">
    <vue-preview class="ii"
      :list="list"
      :thumbImageStyle="{width: '100%', marginTop: '10px'}"
      :previewBoxStyle="{border: '1px solid #eee'}"
      :tapToClose="true"
      @close="closeHandler"
      @destroy="destroyHandler"
    />
  </div>
</template>

<script>
export default {
  name: "img1-list",
  data() {
    return {
      list: [
      ]
    };
  },
  created() {
    this.list.length = 30;
    this.list.fill({
      src:
        "https://img04.sogoucdn.com/app/a/100520093/e7d4cac126941b5a-396dcc73e3007ef8-1d86d5a2296f9415b7faa9269709b04f.jpg",
      h: 600,
      w: 600
    });
  },
  methods: {
    closeHandler() {
      console.log("closeHandler");
    },
    // 完全关闭之后，调用这个函数清理资源
    destroyHandler() {
      console.log("destroyHandler");
    }
  }
};
</script>

<style >
</style>
