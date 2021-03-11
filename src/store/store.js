import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    floatshow:false,//悬浮菜单的显示
  },
  getters:{//实时监听state值的变化
    isShow:function(state){//悬浮菜单
      return state.floatshow
    },
  },
  mutations:{
    changeshow(state){
      state.floatshow=!state.floatshow
    },
    closeshow(state){
      state.floatshow=!state.floatshow
    },
  },
})