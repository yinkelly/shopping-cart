<template>
  <v-container
    grid-list-lg>
    <v-layout
      row
      wrap>
      <v-flex xs6 v-for="product in products" >
        <product-card
          :item="product"
          :action="removeFromCart"
          actionLabel="Remove" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProductCard from '../components/ProductCard'

export default {
  computed: {
    products () {
      return this.$store.getters.cartProducts
    }
  },
  methods: {
    removeFromCart (item) {
      this.$store.dispatch('removeFromCart', item)
    }
  },
  components: { ProductCard }
}
</script>
