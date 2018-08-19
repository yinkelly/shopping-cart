import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './views/App.vue'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.mixin({
  methods: {
    formatCurrency (val) {
      return `£${Number.parseFloat(val).toFixed(2)}`
    }
  }
})

new Vue({
  el: '#app',
  store,
  router,
  render (createElement) {
    return createElement(App)
  }
})
