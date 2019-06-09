<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">Ambrosia</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{path: '/login'}">Login</b-nav-item>
        <b-nav-item :to="{path: '/register'}">Register</b-nav-item>
        <b-nav-item :to="{path: '/restaurant'}">Restaurant</b-nav-item>
        <b-nav-item-dropdown text="Admin">
          <b-dropdown-item :to="{path: '/restaurant-register-form'}">Create Restaurant</b-dropdown-item>
          <b-dropdown-item :to="{path: '/menu-register-form'}">Create Menu</b-dropdown-item>
          <b-dropdown-item :to="{path: '/meal-register-form'}">Create Meal</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        <CartHeader/>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script lang="ts">
  import Vue from 'vue';
  import CartHeader from '@/views/cart/CartHeader.vue';

  export default Vue.extend({
    components: {
      CartHeader
    }

  });
</script>
<style scoped>
</style>
