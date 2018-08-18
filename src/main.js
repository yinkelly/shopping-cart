import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './views/App.vue'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  store,
  router,
  render (createElement) {
    return createElement(App, {
      props: {
        views: [
          // 'disinformation',
          // 'actors',
          // 'tweets'
        ]
      }
    })
  }
})
