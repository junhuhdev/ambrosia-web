<template>
  <b-container>
    <h1>Restaurants available</h1>
    <b-card-group deck v-if="restaurants">
      <b-row>
        <b-col cols="4" v-for="restaurant of restaurants" v-bind:key="restaurant.id">
          <b-card :title="restaurant.name" :img-src="restaurant.imageUrl" img-alt="Image" img-top style="margin-top: 2rem;">
            <b-link class="custom-card" :to="{name: 'restaurant-detail', params: {id: restaurant.id}}">
              <b-card-text><b>Description:</b> {{restaurant.shortDescription}}</b-card-text>
              <b-card-text><b>Status:</b> {{restaurant.status}}</b-card-text>
            </b-link>
            <div slot="footer">
              <div v-if="isAdmin" class="image-upload">
                <b-form-file v-model="image" @change="upload($event.target.files, restaurant)" class="mt-3" plain></b-form-file>
              </div>
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-card-group>
  </b-container>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import axios from 'axios';
  import { Restaurant } from '@/model/restaurant';

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
      this.$store.dispatch('getAllRestaurants');
    },

    methods: {

      upload(files: any, restaurant: Restaurant) {

        const formData = new FormData();
        formData.append('file', files[0], restaurant.name);
        const payload = {
          id: restaurant.id,
          formData: formData
        };
        this.$store.dispatch('uploadImageRestaurant', payload);

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
