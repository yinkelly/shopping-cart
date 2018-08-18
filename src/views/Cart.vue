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
          <div>
            <label>Subtotal</label>
            {{subtotal}}
          </div>
          <div v-for="discount in discounts">
            {{discount.code}}: -{{discount.amount}}
          </div>
          <div>
            <label>Total</label>
            {{total}}
          </div>
        </div>
        <input type="text" v-model="voucherCode" />
        <input type="button" value="Apply voucher" @click="submitVoucher()" />
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
  components: { ProductCard }
}
</script>
