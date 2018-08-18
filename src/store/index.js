import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

const state = {
  allProducts: [],
  cartProducts: [],
  allVouchers: [{
    amount: 5,
    code: 'FIVER',
    message: 'Use voucher code FIVER to get £5 off',
    minSpend: 0,
    includesOneOf: []
  },{
    amount: 10,
    code: 'FUN',
    message: 'Use voucher code FUN to get £10 off when you spend over 50',
    minSpend: 50,
    includesOneOf: []
  },{
    amount: 15,
    code: 'COOL',
    message: 'Use voucher code COOL to get £15 off when you spend over 75 and have bought at least one footwear item',
    minSpend: 75,
    includesOneOf: ["Women's Footwear", "Men's Footwear"]
  }],
  appliedVouchers: [],
  showVoucherAlert: false
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
  },
  total: (state, getters) => {
    const discount = state.appliedVouchers.reduce((sum, item) => sum + item.amount, 0)
    return getters.subtotal - discount
  },
  allVouchers: (state) => {
    return state.allVouchers
  },
  appliedVouchers: (state) => {
    return state.appliedVouchers
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
  updateVoucherAlert (state, bool) {
    state.showVoucherAlert = bool
  },
  addVoucher (state, voucher) {
    state.appliedVouchers.push(voucher)
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
    commit('addToCart', { ...item, quantity: 1})
    commit('updateProductQuantity', { name: item.name, amount: -1 })
  },
  removeFromCart ({ commit }, item) {
    commit('removeFromCart', item)
    commit('updateProductQuantity', { name: item.name, amount: 1 })
  },
  submitVoucher ({ commit, state }, code) {
    const voucher = state.allVouchers.find(v => v.code === code)
    if (voucher === undefined) {
      commit('updateVoucherAlert', true)
    } else {
      // TODO: Check criteria!
      commit('updateVoucherAlert', false)
      commit('addVoucher', voucher)
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
