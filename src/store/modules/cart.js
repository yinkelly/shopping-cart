const state = {
  cartProducts: [],
}

const getters = {
  cartProducts: (state) => {
    return state.cartProducts
  },
  subtotal: (state) => {
    return state.cartProducts.reduce((sum, item) => sum + item.price, 0)
  },
  total: (state, getters, rootState) => {
    const discount = rootState.vouchers.appliedVouchers.reduce((sum, item) => sum + item.amount, 0)
    return getters.subtotal - discount
  },
  cartCount: (state) => {
    return state.cartProducts.length
  }
}

const mutations = {
  addToCart (state, item) {
    state.cartProducts.push(item)
  },
  removeFromCart (state, item) {
    const index = state.cartProducts.findIndex(p => p.name === item.name)
    state.cartProducts.splice(index, 1)
  },
}

const actions = {
  addToCart ({ commit }, item) {
    commit('addToCart', { ...item, quantity: 1 })
    commit('updateProductQuantity', { name: item.name, amount: -1 })
  },
  removeFromCart ({ commit, dispatch }, item) {
    commit('removeFromCart', item)
    commit('updateProductQuantity', { name: item.name, amount: 1 })
    dispatch('checkAppliedVouchers')
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
