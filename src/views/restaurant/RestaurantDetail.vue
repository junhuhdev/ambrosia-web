<template>
  <b-container>
    <b-jumbotron>
      <template slot="header">{{restaurant.name}}</template>
      <template slot="lead">{{restaurant.description}}</template>
      <hr class="my-4">
      <p>
        It uses utility classes for typography and spacing to space content out within the larger
        container.
      </p>
      <b-button variant="primary" href="#">Do Something</b-button>
      <b-button variant="success" href="#">Do Something Else</b-button>
    </b-jumbotron>
    <b-row v-for="menu of restaurant.menus" :key="menu.id">
      <h3>{{menu.category}}</h3>
      <b-col cols="4" v-for="meal of menu.meals" v-bind:key="meal.id">
        <b-link class="custom-card" :to="{name: 'restaurant-detail', params: {id: meal.id}}">
          <b-card :title="meal.name" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top style="margin-top: 2rem;">
            <b-card-text><b>Description:</b> {{meal.description}}</b-card-text>
            <div slot="footer">
              <small class="text-muted">Cost: {{meal.amount}} {{meal.amountCy}}</small>
              <b-button @click="addToCart(meal)" variant="primary">Lägg till</b-button>
            </div>
          </b-card>
        </b-link>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import Cart from '@/views/cart/Cart.vue';

  export default Vue.extend({
    name: 'RestaurantDetail',

    props: ['id'],

    computed: {
      restaurant() {
        return this.$store.getters.restaurantDetails;
      }
    },

    created() {
      this.$store.dispatch('getRestaurantDetails', this.id);
    },

    methods: {
      addToCart(meal: any) {
        this.$store.dispatch('addToCart', meal);
      }
    }

  });
</script>
<style scoped>
  li {
    list-style: none;
  }

  a.custom-card,
  a.custom-card:hover {
    color: inherit;
    text-decoration: none;
  }
</style>
