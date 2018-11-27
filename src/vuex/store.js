/**
 * Created by xbw on 2018/8/23.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import detail from './modules/detail'

Vue.use(Vuex)
console.log(detail)
export default new Vuex.Store({
  modules: {
    detail:detail
  }
})
