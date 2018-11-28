// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import _ from 'lodash'
import './assets/iconfont/iconfont.css' // 引入iconfont
import VueLazyload from 'vue-lazyload' // 图片懒加载
import './assets/style/common.scss'
import './assets/style/base.scss' // 全局基础css样式和cssreset
import VueAwesomeSwiper from 'vue-awesome-swiper' // swiper插件
import 'swiper/dist/css/swiper.css' // swiper依赖样式
import './../static/lib/setFontSize.js' // 动态设置html标签的font-size

Vue.prototype._ = _
Vue.use(VueLazyload)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let path = to.path
  if (path === '/' || path === '/home' || path === '/category' || path === '/car' || path === '/user') {
    store.state.showtab = true
  } else {
    store.state.showtab = false
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
