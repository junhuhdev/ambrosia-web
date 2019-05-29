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
    </b-container>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'RestaurantDetail',
    data () {
      return {
        restaurant: {},
        errors: []
      };
    },

    props: {
      id: Number
    },

    created () {
      axios.get(`http://localhost:9000/restaurants/${this.id}`)
        .then(response => {
          this.restaurant = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }

  };
</script>

<style scoped>

</style>
