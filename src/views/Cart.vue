<template>
  <v-container
    grid-list-lg>
    <v-layout
      row
      wrap>
      <v-flex xs12 md8 lg9>
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
      <v-flex xs12 md4 lg3>
        <v-card class="pa-4">
          <h3 class="title">Order summary</h3>
          <summary-table
            :subtotal="subtotal"
            :total="total"
            :discounts="discounts" />
          <input type="text" v-model="voucherCode" />
          <v-btn
            small
            depressed
            class="my-1 mx-0"
            @click="submitVoucher()">
            Apply voucher
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import ProductCard from '../components/ProductCard'
import SummaryTable from '../components/SummaryTable'

export default {
  computed: {
    products () {
      return this.$store.getters.cartProducts
    },
    subtotal () {
      return this.$store.getters.subtotal
    },
    total () {
      return this.$store.getters.total
    },
    discounts () {
      return this.$store.getters.appliedVouchers
    }
  },
  methods: {
    removeFromCart (item) {
      this.$store.dispatch('removeFromCart', item)
    },
    submitVoucher () {
      this.$store.dispatch('submitVoucher', this.voucherCode)
    }
  },
  components: {
    ProductCard,
    SummaryTable
  }
}
</script>

<style scoped>
  input {
    border-style: solid;
    background-color: white;
  }
</style>
