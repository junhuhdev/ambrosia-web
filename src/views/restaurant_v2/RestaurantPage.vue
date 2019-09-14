<template>
  <v-container>
    <v-card class="mx-auto" max-width="1200">
      <v-toolbar dense flat color="deep-purple accent-4" dark>
        <v-btn icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Valda filter</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <h2 class="title mb-2">Menyer</h2>
            <v-chip-group column multiple>
              <v-chip filter outlined>Lunch</v-chip>
              <v-chip filter outlined>Middag</v-chip>
              <v-chip filter outlined>Frukost</v-chip>
              <v-chip filter outlined>Fika</v-chip>
              <v-chip filter outlined>Plockmat</v-chip>
              <v-chip filter outlined>Julmeny</v-chip>
              <v-chip filter outlined>Tillbehör</v-chip>
              <v-chip filter outlined>Drycker</v-chip>
              <v-chip filter outlined>Food truck</v-chip>
              <v-chip filter outlined>Bar</v-chip>
            </v-chip-group>
          </v-col>
          <v-col cols="6">
            <h2 class="title mb-2">Vad</h2>
            <v-chip-group column multiple>
              <v-chip filter outlined>Sallader</v-chip>
              <v-chip filter outlined>Buffé</v-chip>
              <v-chip filter outlined>Dryck</v-chip>
              <v-chip filter outlined>Wraps</v-chip>
              <v-chip filter outlined>Smörgåsar</v-chip>
              <v-chip filter outlined>Fikabröd</v-chip>
              <v-chip filter outlined>Huvudrätter</v-chip>
              <v-chip filter outlined>Tillbehör</v-chip>
              <v-chip filter outlined>Smårätter</v-chip>
              <v-chip filter outlined>Tårtor</v-chip>
            </v-chip-group>
          </v-col>
          <v-col cols="6">
            <h2 class="title mb-2">Innehåll</h2>
            <v-chip-group column multiple>
              <v-chip filter outlined>Vegetariskt</v-chip>
              <v-chip filter outlined>Vegansk</v-chip>
              <v-chip filter outlined>Glutenfri</v-chip>
              <v-chip filter outlined>Laktosfri</v-chip>
              <v-chip filter outlined>Mjölkproteinfri</v-chip>
            </v-chip-group>
          </v-col>
          <v-col cols="6">
            <h2 class="title mb-2">Hållbart val</h2>
            <v-chip-group column multiple>
              <v-chip filter outlined>Plastfri</v-chip>
            </v-chip-group>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
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
