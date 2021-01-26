const state = {
  pages: [],
}

const mutations = {
  addPage(state, payload) {
    state.pages.push(payload);
  },
}

const actions = {}

const getters = {}

const PagesStore = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

export default PagesStore
