// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from "./store/store.js"
import VuePreview from 'vue2-preview'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: 'hzjNbPMGSMGdwjLh343a5vuRnFoGhnkM'
})

Vue.use(VuePreview)
Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$axios = axios//挂在axios到vue原型

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
