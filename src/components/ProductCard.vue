<template>
  <v-card>
    <v-card-title>
      <div>
        <h3 class="title">{{item.name}}</h3>
        <div>{{item.category}}</div>
        <div>£{{item.price}}</div>
        <div>{{item.quantity}}</div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat>Add to cart</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>
