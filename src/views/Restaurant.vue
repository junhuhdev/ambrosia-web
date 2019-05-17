<template>
    <div>
        <h1>Restaurants available</h1>
        <ul v-if="restaurants">
            <li v-for="restaurant of restaurants">
                <p>name: {{restaurant.name}}</p>
                <p>email: {{restaurant.email}}</p>
                <p>description: {{restaurant.description}}</p>
                <p>status: {{restaurant.status}}</p>
            </li>
        </ul>
    </div>
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
</style>
