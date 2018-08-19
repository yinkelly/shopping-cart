<template>
  <table>
    <tbody>
      <tr>
        <td>Subtotal</td>
        <td>{{ formatCurrency(subtotal) }}</td>
      </tr>
      <tr v-for="discount in discounts">
        <td>{{discount.code}}</td>
        <td>-{{ formatCurrency(discount.amount) }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Total</td>
        <td>{{ formatCurrency(total) }}</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  props: {
    subtotal: Number,
    total: Number,
    discounts: Array
  }
}
</script>

<style scoped>
  table {
    width: 100%;
    padding: 1em 0em;
  }

  table td:last-child {
    text-align: right;
  }

  table tfoot td {
    font-weight: bold;
  }
</style>
