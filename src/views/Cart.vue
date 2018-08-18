<template>
  <v-container
    grid-list-lg>
    <v-layout
      row
      wrap>
      <v-flex xs9>
        <v-layout
          row
          wrap>
          <v-flex xs12 v-for="product in products">
            <product-card
              :item="product"
              :action="removeFromCart"
              actionLabel="Remove" />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs3>
        <div>
          <label>Subtotal</label>
          {{subtotal}}
        </div>
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
    },
    subtotal () {
      return this.$store.getters.subtotal
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
