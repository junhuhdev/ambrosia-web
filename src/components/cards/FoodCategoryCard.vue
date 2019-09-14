<template>
  <v-card class="elevation-12">
    <v-img
        class="white--text"
        height="300px"
        :src="imgSource"
    >
      <v-card-title class="justify-center fill-height">{{title}}</v-card-title>
    </v-img>
  </v-card>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      imgSource: String,
      title: String
    }

  });
</script>
<style scoped>
</style>
