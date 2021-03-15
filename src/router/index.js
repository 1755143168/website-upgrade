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
import news from "../components/news.vue"
import basicLaw from "../components/basicLaw.vue"
import Recruitment from "../components/Recruitment.vue"

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/1',
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
      },
      {
        path: '/5_1',
        component: arttrain //艺培
      },
      {
        path: '/5_2',
        component: vocationaltrain //职培
      },
      {
        path: '/5_4',
        component: widom //智慧弹簧
      },
      {
        path: '/5_3',
        component: humanresources //人力资源
      },
      {
        path: '/7',
        component: news //新闻页
      },
      {
        path: '/8_1',
        component: basicLaw//基本法
      },
      {
        path: '/8_3',
        component: Recruitment//招聘
      },
    ]
  }, ]
})
