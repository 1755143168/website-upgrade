import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/main.vue'
import home from '@/components/home'
import customized from "../components/customized.vue"
import effective from "../components/effective.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      children:[
        {path:'/1',component:home},//首页
        {path:'/2',component:customized},//产品定制服务页
        {path:'/3',component:effective},//实效数字运营
    ]
    },
  ]
})
