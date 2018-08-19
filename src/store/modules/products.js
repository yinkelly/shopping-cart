import Vue from 'vue'
import api from '../../api'

const state = {
  allProducts: [],
}

const getters = {
  allProducts: (state) => {
    return state.allProducts
  },
}

const mutations = {
  setProducts (state, data) {
    state.allProducts = data
  },
  updateProductQuantity (state, { name, amount }) {
    const index = state.allProducts.findIndex(p => p.name === name)
    if (index !== -1) {
      const item = state.allProducts[index]
      Vue.set(state.allProducts, index, {
        ...item,
        quantity: item.quantity + amount
      })
    }
  },
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
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
