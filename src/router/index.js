import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import home from '@/components/home'
import customized from "../components/customized.vue"
import effective from "../components/effective.vue"
import internet from "../components/internet.vue"
import brand from "../components/brand.vue"
import arttrain from "../components/arttrain.vue"
import vocationaltrain from "../components/vocationaltrain.vue"
import widom from "../components/wisdom.vue"
import humanresources from "../components/humanresources.vue"

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    //name: 'Main',
    component: Main,
    children: [{
        path: '/1',
        component: home
      }, //首页
      {
        path: '/2',
        component: customized
      }, //产品定制服务页
      {
        path: '/3',
        component: effective
      }, //实效数
      {
        path: '/4',
        component: brand
      }, //实效数
      {
        path: '/5',
        component: internet,
        children: [{
          path: '5_1',
          component: (resolve)=>require(['../components/home.vue'],resolve)
        }, {
          path: '5_2',
          component: vocationaltrain
        }, {
          path: '5_3',
          component: widom
        }, {
          path: '5_4',
          component: humanresources
        }]
      }, //互联网+~~~艺培~~职培~~智慧弹簧~~人力资源
    ]
  }, ]
})
