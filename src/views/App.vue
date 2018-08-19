<template>
  <v-app id="app">
    <v-toolbar
      dark
      app
      fixed
      clipped-left>
      <v-toolbar-title
        class="ml-2 pl-3">
        <span class="hidden-xs-only">D&D</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        small
        flat
        to="/products">
        Products
      </v-btn>
      <v-spacer />
      <v-btn
        icon
        to="/cart">
        <v-badge left>
          <span
            v-if="cartCount"
            slot="badge">
            {{ cartCount }}
          </span>
          <v-icon>shopping_cart</v-icon>
        </v-badge>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  props: {},
  created () {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchVouchers')
  },
  computed: {
    cartCount () {
      return this.$store.getters.cartCount
    }
  }
}
</script>

<style>
</style>
