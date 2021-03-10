import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import home from '@/components/home'
import customized from "../components/customized.vue"
import effective from "../components/effective.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //name: 'Main',
      component: Main,
      children:[
        {path:'/',component:home},//首页
        {path:'/2',component:customized},//产品定制服务页
        {path:'/3',component:effective},//实效数字运营
    ]
    },
  ]
})
