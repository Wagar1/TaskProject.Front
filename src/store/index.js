import Vue from 'vue'
import Vuex from 'vuex'
import admin from './modules/admin.js'
import tasks from './modules/tasks.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    admin,
    tasks
  }
})
