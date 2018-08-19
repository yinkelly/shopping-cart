<template>
  <v-card>
    <v-card-title>
      <v-container grid-list-xs fill-height class="pa-1">
      <v-layout row wrap>
        <v-flex xs12>
          <h3 class="title">{{item.name}}</h3>
        </v-flex>
        <v-flex xs12>
          <div>{{item.category}}</div>
        </v-flex>
        <v-flex xs12 sm6>
          {{ formatCurrency(item.price) }}
        </v-flex>
        <v-flex xs12 sm6 text-xs-right>
          <div v-if="isAvailable">quantity: {{item.quantity}}</div>
          <div v-else> OUT OF STOCK</div>
        </v-flex>
      </v-layout>
    </v-container>
    </v-card-title>
    <v-card-actions>
      <v-btn
        block
        flat
        color="primary"
        @click="action(item)"
        :disabled="!isAvailable">
        {{actionLabel}}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    item: Object,
    actionLabel: String,
    action: Function
  },
  computed: {
    isAvailable () {
      return this.item.quantity > 0
    }
  }
}
</script>
