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
        <b-card :title="meal.name" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top style="margin-top: 2rem;">
          <b-card-text><b>Beskrivning:</b> {{meal.description}}</b-card-text>
          <div slot="footer">
            <b-row>
              <b-col cols="8">
                <p>Pris: {{meal.amount}} {{meal.amountCy}}</p>
              </b-col>
              <b-col>
                <b-button @click="addToCart(meal)" variant="primary">Lägg till</b-button>
              </b-col>
            </b-row>
            <b-row v-if="isAdmin">
              <b-col cols="8">
                <b-form-file v-model="image" @change="upload($event.target.files, restaurant)" class="mt-3" plain></b-form-file>
              </b-col>
              <b-col>
                <b-button variant="warning" @click="showEditPage(meal.id)">Edit</b-button>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import Cart from '@/views/cart/Cart.vue';
  import router from '@/router';
  import { Meal } from '@/model/meal';

  export default Vue.extend({
    name: 'RestaurantDetail',

    data() {
      return {
        image: ''
      };
    },

    props: ['id'],

    computed: {
      isAdmin(): any {
        return true;
      },

      restaurant(): any {
        return this.$store.getters.restaurantDetails;
      }
    },

    created() {
      this.$store.dispatch('selectRestaurant', this.id);
    },

    methods: {
      addToCart(meal: any) {
        this.$store.dispatch('addToCart', meal);
      },

      async upload(files: any, meal: Meal) {
        const formData = new FormData();
        formData.append('file', files[0], files[0].name);
        const payload = {
          id: meal.id,
          formData: formData
        };
        await this.$store.dispatch('uploadImageRestaurant', payload);
      },

      showEditPage(mealId: string) {
        router.push({name: 'meal-edit-page', params: {id: mealId}});
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
