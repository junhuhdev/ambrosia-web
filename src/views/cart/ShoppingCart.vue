<template>
  <div>
    <h2>Cart</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{product.title}} - {{product.price | currency}} x {{product.quantity}}
      </li>
    </ul>
    <p>Total: {{total | currency}}</p>
    <button @click="checkout(products)">Checkout</button>
    <p v-show="checkoutStatus">Checkout {{checkoutStatus}}</p>
  </div>
</template>
<script>
 import { mapGetters, mapState } from 'vuex';

 export default {
  computed: {
   ...mapState({
    checkoutStatus: state => state.cart.checkoutStatus
   }),
   ...mapGetters('cart', {
    products: 'cartProducts',
    total: 'cartTotalPrice'
   })
  },

  methods: {
   checkout (products) {
    this.$store.dispatch('cart/checkout', products);
   }
  }

 };
</script>
<style scoped>
</style>
