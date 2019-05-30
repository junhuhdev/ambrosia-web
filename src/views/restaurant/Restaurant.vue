<template>
  <b-container>
    <h1>Restaurants available</h1>
    <b-card-group deck v-if="restaurants">
      <b-row>
        <b-col cols="4" v-for="restaurant of restaurants" v-bind:key="restaurant.id">
          <b-link class="custom-card" :to="{name: 'restaurant-detail', params: {id: restaurant.id}}">
            <b-card :title="restaurant.name" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top style="margin-top: 2rem;">
              <b-card-text><b>Description:</b> {{restaurant.shortDescription}}</b-card-text>
              <b-card-text><b>Status:</b> {{restaurant.status}}</b-card-text>
              <div slot="footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </b-card>
          </b-link>
        </b-col>
      </b-row>
    </b-card-group>
  </b-container>
</template>
<script>
 import { Component, Vue } from 'vue-property-decorator';
 import axios from 'axios';

 export default {

  data () {
   return {
    restaurants: [],
    errors: []
   };
  },

  created () {
   axios.get('http://localhost:9000/restaurants')
    .then(response => {
     this.restaurants = response.data;
    })
    .catch(e => {
     this.errors.push(e);
    });
  }

 };
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
