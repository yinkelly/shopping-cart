import api from '../../api'

const state = {
  allVouchers: [],
  appliedVouchers: [],
  showVoucherAlert: false
}

const getters = {
  allVouchers: (state) => {
    return state.allVouchers
  },
  appliedVouchers: (state) => {
    return state.appliedVouchers
  },
  showVoucherAlert: (state) => {
    return state.showVoucherAlert
  }
}

const mutations = {
  setVouchers (state, data) {
    state.allVouchers = data
  },
  updateVoucherAlert (state, bool) {
    state.showVoucherAlert = bool
  },
  addVoucher (state, voucher) {
    state.appliedVouchers.push(voucher)
  },
  removeVoucher (state, voucher) {
    const index = state.appliedVouchers.findIndex(v => v.code === voucher.code)
    state.appliedVouchers.splice(index, 1)
  }
}

const actions = {
  fetchVouchers ({ commit }) {
    api.vouchers.get()
      .then((response) => {
        commit('setVouchers', response)
      })
      .catch((error) => {
        console.error(error);
      })
  },
  submitVoucher ({ commit, state, rootState }, code) {
    const voucherApplied = state.appliedVouchers.findIndex(v => v.code === code) > -1
    const voucher = state.allVouchers.find(v => v.code === code)
    if (voucher === undefined || voucherApplied) {
      commit('updateVoucherAlert', true)
    } else {
      const voucherIsValid = voucherValidator(voucher.rules)(rootState.cart.cartProducts)
      if (voucherIsValid) {
        commit('updateVoucherAlert', false)
        commit('addVoucher', voucher)
      } else {
        commit('updateVoucherAlert', true)
      }
    }
  },
  checkAppliedVouchers ({ commit, state, rootState }) {
    state.appliedVouchers.forEach(voucher => {
      if (!voucherValidator(voucher.rules)(rootState.cart.cartProducts)) {
        commit('removeVoucher', voucher)
      }
    })
  }
}

function voucherValidator (rules) {
  return (items) => {
    return Object.entries(rules).reduce((isValid, [rule, value]) => {

      let pass = false

      if (rule === 'minSpend') {
        pass = items.reduce((total, item) => total + item.price, 0) > value
      }

      if (rule === 'includesOneOf') {
        pass = items.reduce((result, item) => {
          return result || value.includes(item.category)
        }, false)
      }

      return isValid && pass

    }, true)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
