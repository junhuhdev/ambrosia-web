<template>
  <div>
    <h2>Cart</h2>
    <ul>
      <li v-for="meal in meals" :key="meal.id">
        {{meal.name}} - {{meal.amount}}{{meal.amountCy}} x {{meal.quantity}}
      </li>
    </ul>
    <p>Total: {{total}}</p>
    <!--    <button @click="checkout(products)">Checkout</button>-->
    <!--    <p v-show="checkoutStatus">Checkout {{checkoutStatus}}</p>-->
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { mapGetters, mapState } from 'vuex';

  export default Vue.extend({

    computed: {
      meals() {
        return this.$store.getters.cartItems;
      },

      total() {
        return this.$store.getters.cartTotal;
      }

    }

  });
</script>
<style scoped>

</style>
