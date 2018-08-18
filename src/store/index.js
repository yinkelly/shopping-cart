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
  },
  subtotal: (state) => {
    return state.cartProducts.reduce((sum, item) => sum + item.price, 0)
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
    const index = state.cartProducts.findIndex(p => p.name === item.name)
    state.cartProducts.splice(index, 1)
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
  addToCart ({ commit }, item) {
    commit('addToCart', { ...item, quantity: 1})
    commit('updateProductQuantity', { name: item.name, amount: -1 })
  },
  removeFromCart ({ commit }, item) {
    commit('removeFromCart', item)
    commit('updateProductQuantity', { name: item.name, amount: 1 })
  },
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
