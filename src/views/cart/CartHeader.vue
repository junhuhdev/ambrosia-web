<template>
  <div class="cart">
    <span class="cart-size" @click="showCart = !showCart">{{cart | cartSize}}</span>
    <i class="fa fa-shopping-cart" @click="showCart = !showCart"></i>
    <div class="cart-items" v-show="showCart">
      <table class="cartTable">
        <tbody>
        <tr class="product" v-for="product in meals">
          <td class="align-left">
            <div class="cartImage" @click="removeCartItem(product)" style="background-size: cover; background-position: center;"><i class="close fa fa-times"></i></div>
          </td>
          <td class="align-center">
            <button @click="quantityChange(product, 'decrement')"><i class="close fa fa-minus"></i></button>
          </td>
          <td class="align-center">{{ meals[$index].quantity }}</td>
          <td class="align-center">
            <button @click="quantityChange(product, 'increment')"><i class="close fa fa-plus"></i></button>
          </td>
          <td class="align-center">{{ product.name }}</td>
          <td>{{ product.price | currency }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    data() {
      return {
        showCart: false
      };
    },

    computed: {
      meals() {
        return this.$store.getters.cartItems;
      },

      total() {
        return this.$store.getters.cartTotal;
      }
    },

    filters: {
      cartSize(cart: any) {
        let cartSize = 0;
        for (let i = 0; i < cart.length; i++) {
          cartSize += cart[i].quantity;
        }
        return cartSize;
      }
    },

    methods: {
      removeCartItem() {
      },

      clearCart() {
      },

      quantityChange() {
      }
    }
  });
</script>
<style scoped>
</style>
