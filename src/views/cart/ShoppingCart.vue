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
  import { Meal } from '@/model/meal';

  export default Vue.extend({
    data() {
      return {
        mealsAdded: []
      };
    },

    computed: {
      meals() {
        return this.$store.getters.cartItems;
      },

      total() {
        return this.$store.getters.cartTotal;
      }

      // ...mapState(['getCartItems'])
    }

    //
    // updated() {
    //   this.meals = this.$store.getters.getCartItems;
    // }

    // methods: {
    //   getMeals() {
    //     return this.$store.getters.getCartItems;
    //   }
    // }

  });
</script>
<style scoped>
</style>
