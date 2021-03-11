// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入element
// eslint-disable-next-line no-unused-vars
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
//import '../node_modules/swiper/css/swiper.css'
import '../node_modules/swiper/swiper-bundle.css'
//引入drawer-layout
import DrawerLayout from 'vue-drawer-layout'
//导入全局样式
import './assets/css/global.css'
import './assets/css/pc.css'//pc端样式
import './assets/css/mobile.css'//手机端样式
import App from './App'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.use(DrawerLayout)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
