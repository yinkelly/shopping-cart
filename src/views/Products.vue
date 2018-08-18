<template>
  <v-container
    grid-list-lg>
    <v-layout
      row
      wrap>
      <v-flex xs4 v-for="product in products" >
        <product-card
          :item="product" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProductCard from '../components/ProductCard'

export default {
  computed: {
    products () {
      return this.$store.getters.products
    }
  },
  components: { ProductCard }
}
</script>
