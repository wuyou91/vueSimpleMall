// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload' // 图片懒加载
import './assets/style/common.scss'
import './assets/style/base.scss' // 全局基础css样式和cssreset
import VueAwesomeSwiper from 'vue-awesome-swiper' // swiper插件
import 'swiper/dist/css/swiper.css' // swiper依赖样式
import './../static/lib/setFontSize.js' // 动态设置html标签的font-size

Vue.use(VueLazyload)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
