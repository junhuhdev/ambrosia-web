<template>
    <h1>Restaurant Details</h1>
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
