<template>
  <div>
    <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="600">
      <v-layout column align-center justify-center>
        <h1 class="display-2 font-weight-thin mb-2">Catering levererad till ditt företag</h1>
        <h4 class="subheading mb-3">Vi har samlat dina bästa lokala cateringkök på en plats</h4>
        <SearchBar class="mt-4"/>
      </v-layout>
      <SearchBar/>
    </v-parallax>
    <v-stepper>
      <v-stepper-header>
        <v-stepper-step step="1">Enter details</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2">Find and select your food</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Order and pay</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="4">Enjoy and eat together</v-stepper-step>
      </v-stepper-header>
    </v-stepper>
    <!--    <div class="search-bar">-->
    <!--      <h1>Catering levererad till ditt företag</h1>-->
    <!--      <h3 style="margin-bottom: 30px">Vi har samlat dina bästa lokala cateringkök på en plats</h3>-->
    <!--      <SearchBar/>-->
    <!--    </div>-->
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import SearchBar from '@/views/search/SearchBar.vue';

  export default Vue.extend({
    components: {
      SearchBar
    },
  });
</script>
<style>
  .search-bar {
    margin-top: 4em;
  }
</style>
