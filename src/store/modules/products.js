import api from '../../api'

const state = { products: [] }

const getters = {
  products: (state) => {
    return state.products
  }
}

const mutations = {
  setProducts (state, data) {
    state.products = data
  }
}

const actions = {
  fetchProducts ({ commit }) {
    api.products.get()
      .then((response) => {
        commit('setProducts', response)
      })
      .catch((error) => {
        console.error(error);
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
