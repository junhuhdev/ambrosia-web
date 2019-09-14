<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="3" v-for="restaurant in restaurants" v-bind:key="restaurant.id">
        <RestaurantCard
            v-bind:title="restaurant.name"
        >
        </RestaurantCard>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
  import Vue from 'vue';
  import RestaurantCard from './RestaurantCard.vue';

  export default Vue.extend({
    components: {
      RestaurantCard
    },

    data: () => ({}),

    computed: {

      restaurants(): any {
        return this.$store.getters.restaurants;
      }
    },

    created() {
      this.$store.dispatch('selectRestaurants');
    },

    methods: {}

  });
</script>
<style scoped>
</style>
