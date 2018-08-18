import PRODUCTS from './products.json'

const products = {
  get () {
    return new Promise((resolve) => {
     resolve(PRODUCTS)
    })
  }
}

export default {
  products
}
