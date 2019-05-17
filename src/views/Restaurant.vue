<template>
    <div>
        <h1>Restaurants available</h1>
    </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator';
  import axios from 'axios';

  export default class Restaurant extends Vue {

    data () {
      return {
        restaurants: []
      };
    }

    created () {
      axios.get('http://localhost:9000/restaurants')
        .then(reponse => {
          this.restaurants = response.data;
        });
    }

  }
</script>

<style scoped>

</style>
