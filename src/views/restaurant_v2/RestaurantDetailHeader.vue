<template>
  <v-row>
    <v-col cols="7">
      <v-parallax class="elevation-12" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <v-row align="center" justify="center">
          <h1 class="display-2 mb-4">Indian Stories</h1>
        </v-row>
      </v-parallax>
    </v-col>
    <v-col cols="5">
      <v-card>

      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'RestaurantDetailHeader'
  });
</script>
<style scoped>
</style>
