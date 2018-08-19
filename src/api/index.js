import PRODUCTS from './products.json'
import VOUCHERS from './vouchers.json'

const products = {
  get () {
    return new Promise((resolve) => {
     resolve(PRODUCTS)
    })
  }
}

const vouchers = {
  get () {
    return new Promise((resolve) => {
     resolve(VOUCHERS)
    })
  }
}

export default {
  products,
  vouchers
}
