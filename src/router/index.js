import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import home from '@/components/home'
import customized from "../components/customized.vue"
import effective from "../components/effective.vue"
import internet from "../components/internet.vue"
import brand from "../components/brand.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/1',
      //name: 'Main',
      component: Main,
      children:[
        {path:'/1',component:home},//首页
        {path:'/2',component:customized},//产品定制服务页
        {path:'/3',component:effective},//实效数
        {path:'/4',component:brand},//实效数
        {path:'/5',component:internet},//互联网+
    ]
    },
  ]
})
