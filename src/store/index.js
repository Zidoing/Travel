import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);


export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters: {
    doubleCity(state) {
      return state.city + " " + state.city
    }
  }
})
