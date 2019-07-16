<template>
  <div>
    <v-toolbar color="white" clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" class="toolbar-title">CATERYOU</router-link>
      </v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="item in items" :key="item.title" :to="item.link">{{item.title}}</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary id="drawer" width="200">
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
  <!--  <b-navbar toggleable="lg" type="dark" variant="info">-->
  <!--    <b-navbar-brand to="/">CaterYou</b-navbar-brand>-->
  <!--    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>-->
  <!--    <b-collapse id="nav-collapse" is-nav>-->
  <!--      <b-navbar-nav>-->
  <!--        <b-nav-item :to="{path: '/login'}">Login</b-nav-item>-->
  <!--        <b-nav-item :to="{path: '/register'}">Register</b-nav-item>-->
  <!--        <b-nav-item :to="{path: '/restaurant'}">Restaurant</b-nav-item>-->
  <!--        <b-nav-item-dropdown text="Admin">-->
  <!--          <b-dropdown-item :to="{path: '/customer'}">Customer</b-dropdown-item>-->
  <!--          <b-dropdown-item :to="{path: '/order'}">Order</b-dropdown-item>-->
  <!--          <b-dropdown-item :to="{path: '/restaurant-register-form'}">Create Restaurant</b-dropdown-item>-->
  <!--          <b-dropdown-item :to="{path: '/menu-register-form'}">Create Menu</b-dropdown-item>-->
  <!--          <b-dropdown-item :to="{path: '/meal-register-form'}">Create Meal</b-dropdown-item>-->
  <!--        </b-nav-item-dropdown>-->
  <!--      </b-navbar-nav>-->
  <!--      &lt;!&ndash; Right aligned nav items &ndash;&gt;-->
  <!--      <b-navbar-nav class="ml-auto">-->
  <!--        <b-nav-item-dropdown right>-->
  <!--          &lt;!&ndash; Using 'button-content' slot &ndash;&gt;-->
  <!--          <template slot="button-content"><em>User</em></template>-->
  <!--          <b-dropdown-item href="#">Profile</b-dropdown-item>-->
  <!--          <b-dropdown-item href="#">Sign Out</b-dropdown-item>-->
  <!--        </b-nav-item-dropdown>-->
  <!--        <CartHeader/>-->
  <!--      </b-navbar-nav>-->
  <!--    </b-collapse>-->
  <!--  </b-navbar>-->
</template>
<script lang="ts">
  import Vue from 'vue';
  import CartHeader from '@/views/cart/CartHeader.vue';

  export default Vue.extend({
    components: {
      CartHeader
    },

    data() {
      return {
        drawer: null,
        items: [
          {title: 'Login', link: '/login', icon: 'home'},
          {title: 'Register', link: '/register', icon: 'home'},
          {title: 'Restaurants', link: '/restaurant', icon: 'home'}
        ]
      };
    }

  });
</script>
<style scoped>
  .toolbar-title {
    color: black;
    text-decoration: none;
  }
</style>
