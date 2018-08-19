<template>
  <v-container
    grid-list-lg>
    <v-layout
      row
      wrap>
      <v-flex xs12 >
        <ul>
          <li v-for="voucher in vouchers">
            {{ voucher.message }}
          </li>
        </ul>
      </v-flex>
      <v-flex xs12 sm6 md4 v-for="product in products" >
        <product-card
          :item="product"
          :action="addToCart"
          actionLabel="Add to cart" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProductCard from '../components/ProductCard'

export default {
  computed: {
    products () {
      return this.$store.getters.allProducts
    },
    vouchers () {
      return this.$store.getters.allVouchers
    }
  },
  methods: {
    addToCart (item) {
      this.$store.dispatch('addToCart', item)
    }
  },
  components: { ProductCard }
}
</script>
