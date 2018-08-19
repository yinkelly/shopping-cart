<template>
  <v-container
    grid-list-lg>
    <v-layout
      row
      wrap>
      <v-flex xs12>
        <v-alert
          outline
          color="primary"
          :value="true">
          <div class="subheading" v-for="voucher in vouchers">
            {{ voucher.message }}
          </div>
        </v-alert>
      </v-flex>
      <v-flex xs12 sm6 md4 d-flex v-for="product in products" >
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
