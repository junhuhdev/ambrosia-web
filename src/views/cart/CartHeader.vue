<template>
  <div class="cart">
    <span class="cart-size" @click="showCart = !showCart">{{cart | cartSize}}</span>
    <i class="fa fa-shopping-cart" @click="showCart = !showCart"></i>
    <div class="cart-items" v-show="showCart">
      <table class="cartTable">
        <tbody>
        <tr class="product" v-for="product in cart">
          <td class="align-left">
            <div class="cartImage" @click="removeCartItem(product)" style="background-size: cover; background-position: center;"><i class="close fa fa-times"></i></div>
          </td>
          <td class="align-center">
            <button @click="quantityChange(product, 'decrement')"><i class="close fa fa-minus"></i></button>
          </td>
          <td class="align-center">{{ cart[$index].quantity }}</td>
          <td class="align-center">
            <button @click="quantityChange(product, 'increment')"><i class="close fa fa-plus"></i></button>
          </td>
          <td class="align-center">{{ cart[$index] | customPluralize }}</td>
          <td>{{ product.price | currency }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
 export default {
  data () {
   return {
    showCart: false
   };
  },

  filters: {
   customPluralize: function (cart) {
    let newName;
    if (cart.quantity > 1) {
     if (cart.product === 'Peach') {
      newName = cart.product + 'es';
     } else if (cart.product === 'Puppy') {
      newName = cart.product + 'ies';
      newName = newName.replace('y', '');
     } else {
      newName = cart.product + 's';
     }
     return newName;
    }
    return cart.product;
   },

   cartSize: function (cart) {
    let cartSize = 0;
    for (let i = 0; i < cart.length; i++) {
     cartSize += cart[i].quantity;
    }
    return cartSize;
   }
  },

  methods: {
   removeCartItem () {},

   clearCart () {},

   quantityChange () {}
  }
 };
</script>
<style scoped>
</style>
