import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

const state = {
  allProducts: [],
  cartProducts: []
}

const getters = {
  allProducts: (state) => {
    return state.allProducts
  },
  cartProducts: (state) => {
    return state.cartProducts
  }
}

const mutations = {
  setProducts (state, data) {
    state.allProducts = data
  },
  addToCart (state, item) {
    state.cartProducts.push(item)
  },
removeFromCart (state, item) {
    const indexOfItem = state.cartProducts.findIndex(p => p.name === item.name)
    state.cartProducts.splice(indexOfItem, 1)
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
  },
  addToCart ({ commit }, item) {
    console.log(`[store] action - addToCart ${item.name}`)
    commit('addToCart', item)
    // commit('updateProduct', product)
  },
  removeFromCart ({ commit }, item) {
    console.log(`[store] action - removeFromCart ${item.name}`)
    commit('removeFromCart', item)
    // commit('updateProduct', product)
  },
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
