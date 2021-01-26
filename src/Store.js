// Store.js
import Vue from 'vue'
import Vuex from 'vuex'
import HomeStore from '@/screen/Home/HomeStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    HomeStore,
  }
})

export default store
