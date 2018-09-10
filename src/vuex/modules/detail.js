/**
 * Created by xbw on 2018/8/23.
 */
const type = 'changeDetail'
const state = {
  userName: '第一次值'
}
const actions = {
  getDetail ({commit}, data) {
    setTimeout(() => {
      commit('changeDetail', data)
    }, 1000)
  }
}
const getters = {
  setDetail (state) {
    console.log(state);
    return state.userName
  }
}
const mutations = {
  [type] (state, res) {
    state.userName = res
    console.log(res)
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
