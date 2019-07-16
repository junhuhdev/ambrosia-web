<template>
  <b-container>
    <h1>Restaurants available</h1>
    <b-card-group deck v-if="restaurants">
      <b-row>
        <b-col sm="4" v-for="restaurant of restaurants" v-bind:key="restaurant.id">
          <b-card :title="restaurant.name" :img-src="restaurant.imageUrl" img-alt="Image" img-top style="margin-top: 2rem;">
            <b-link class="custom-card" :to="{name: 'restaurant-detail', params: {id: restaurant.id}}">
              <b-card-text><b>Description:</b> {{restaurant.shortDescription}}</b-card-text>
              <b-card-text><b>Status:</b> {{restaurant.status}}</b-card-text>
            </b-link>
            <div slot="footer">
              <div v-if="isAdmin" class="image-upload">
                <b-button variant="warning" @click="showEditPage(restaurant.id)">Edit</b-button>
                <b-form-file v-model="image" @change="upload($event.target.files, restaurant)" class="mt-3" plain></b-form-file>
              </div>
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-card-group>
    <v-card
        :loading="loading"
        class="mx-auto my-5"
        max-width="374"
    >
      <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title>Cafe Badilico</v-card-title>
      <v-card-text>
        <v-layout align-center>
          <v-rating
              :value="4.5"
              color="amber"
              half-increments
              dense
              size="14"
              readonly
          ></v-rating>

          <div class="grey--text ml-3">4.5 (413)</div>
        </v-layout>

        <div class="my-3 subtitle-1 black--text">
          $ • Italian, Cafe
        </div>

        <div>Small plates, salads & sandwiches an inteimate setting with 12 indoor seats plus patio seating.</div>
      </v-card-text>

      <v-divider class="mx-3"></v-divider>

      <v-card-text>
        <div class="title text--primary">Tonight's availability</div>
        <v-chip-group
            v-model="selection"
            active-class="deep-purple accent-4 white--text"
            column
        >
          <v-chip>5:30PM</v-chip>
          <v-chip>7:30PM</v-chip>
          <v-chip>8:00PM</v-chip>
          <v-chip>9:00PM</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn
            color="deep-purple accent-4"
            text
        >
          Reserve
        </v-btn>
      </v-card-actions>
    </v-card>

  </b-container>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import axios from 'axios';
  import router from '@/router';
  import { Restaurant } from '@/model/model';

  export default Vue.extend({

    data() {
      return {
        image: ''
      };
    },

    computed: {
      isAdmin(): any {
        return true;
      },

      restaurants(): any {
        return this.$store.getters.restaurants;
      }
    },

    created() {
      this.$store.dispatch('selectRestaurants');
    },

    methods: {

      async upload(files: any, restaurant: Restaurant) {
        const formData = new FormData();
        formData.append('file', files[0], files[0].name);
        const payload = {
          id: restaurant.id,
          formData: formData
        };
        await this.$store.dispatch('uploadImageRestaurant', payload);
      },

      showEditPage(restaurantId: string) {
        router.push({name: 'restaurant-edit-page', params: {id: restaurantId}});
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
