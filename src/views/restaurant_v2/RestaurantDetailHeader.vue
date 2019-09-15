<template>
  <v-row>
    <v-col cols="8">
      <v-parallax class="elevation-12" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <h1 class="text-center display-3 my-8">Matsällskapet</h1>
        <h3 class="text-center title mx-12">I vårt kök är det alltid fräscha, dagsfärska råvaror som styr. Alla rätter, både plockmat, bufféer och à la carte lagas från grunden med mycket kärlek och omsorg. Vi hämtar inspiration till våra menyer och rätter från olika världsdelar och kök. Självklart lagar vi med mycket grönt till de som vill äta vegetariskt eller veganskt.</h3>
      </v-parallax>
    </v-col>
    <v-col cols="4">
      <v-card>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      title: String,
      description: String,
      img: String,

    },

  });
</script>
<style scoped>
</style>
