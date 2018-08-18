import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products'
import Cart from '../views/Cart'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/products'
    },
    {
      path: '/products',
      component: Products
    },
    {
      path: '/cart',
      component: Cart
    },
  ]
})
