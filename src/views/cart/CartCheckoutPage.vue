<template>
  <b-container>
    <b-card style="margin-bottom: 60px">
      <h1 style="margin-bottom: 60px">Checkout Area</h1>
      <b-table :items="meals" :fields="fields">
      </b-table>
      <div style="margin-top: 60px">
        <p><b>Leverans:</b> 200 SEK</p>
        <p><b>Moms(12%):</b> {{total * 0.12}} SEK</p>
        <p><b>Moms(25%):</b> {{total * 0.25}} SEK</p>
        <p><b>Total:</b> {{total}} SEK</p>
      </div>
    </b-card>
    <CartCheckoutForm v-bind:meals="meals"/>
  </b-container>
</template>
<script lang="ts">
  import Vue from 'vue';
  import CartCheckoutForm from '@/views/cart/CartCheckoutForm.vue';

  export default Vue.extend({

    components: {
      CartCheckoutForm
    },

    data() {
      return {
        fields: ['quantity', 'name', 'amount', 'amountCy']
      };
    },

    computed: {
      meals() {
        return this.$store.getters.cartItems;
      },

      total() {
        return this.$store.getters.cartTotal;
      },

    }


  });
</script>
<style scoped>
</style>
