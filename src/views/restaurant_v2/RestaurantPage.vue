<template>
  <v-container>
    <RestaurantFilter></RestaurantFilter>
    <v-row>
      <v-col cols="12" sm="3" v-for="restaurant in restaurants" v-bind:key="restaurant.id">
        <RestaurantCard
            v-bind:title="restaurant.name"
            v-bind:description="restaurant.shortDescription"
        >
        </RestaurantCard>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-pagination
          v-model="page"
          :length="6"
      >
      </v-pagination>
    </div>
  </v-container>
</template>
<script lang="ts">
  import Vue from 'vue';
  import RestaurantCard from './RestaurantCard.vue';
  import RestaurantFilter from '@/views/restaurant_v2/RestaurantFilter.vue';

  export default Vue.extend({
    components: {
      RestaurantCard,
      RestaurantFilter
    },

    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu2: false,
      totalPeopleSelector: ['5-10 personer', '10-20 personer', '20-100 personer', '100-200 personer', '200+'],
      page: 1
    }),

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
