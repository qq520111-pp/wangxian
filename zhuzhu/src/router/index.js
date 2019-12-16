import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import newList from '@/components/newList'
import imgList from '@/components/imgList'
import proList from '@/components/proList'
import gouwu from '@/components/gouWu'
import img from '@/components/img1'
import imgL from '@/components/imgL'
import vueAwesomeSwiper from "vue-awesome-swiper"
import 'swiper/dist/css/swiper.css'
import "@/assets/ii/iconfont.css"


Vue.use(Router)
Vue.use(vueAwesomeSwiper)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/gouwu',
      name: 'gouwu',
      component: gouwu
    },
    {
      path: '/newlist',
      name: 'newList',
      component: newList
    },
    {
      path: '/imglist',
      component: imgList,
      children: [
        { path: "/", name: "imgL", component: imgL },
        { path: "/img1", name: "img1", component: img }
      ]
    },
    {
      path: '/prolist',
      name: 'prolist',
      component: proList
    }
  ]
})
