// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入element
// eslint-disable-next-line no-unused-vars
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/css/swiper.css'
//导入全局样式
import './assets/css/global.css'
import './assets/css/pc.css'//pc端样式
import './assets/css/mobile.css'//手机端样式
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
