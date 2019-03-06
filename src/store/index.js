import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import state from './state'
import getters from './getters'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  // 全局变量
  state,
  getters,
  mutations,
  actions,
  modules: { //单独模块

  }
})