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

        <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
        >
            <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>

        <b-jumbotron header="BootstrapVue" lead="Bootstrap 4 Components for Vue.js 2">
            <p>For more information visit website</p>
            <b-button variant="primary" href="#">More Info</b-button>
        </b-jumbotron>
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
