<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md6>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Available Foods</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-search" label="Search" single-line hide-details></v-text-field>
        </v-toolbar>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    data: function () {
      return {
        search: '',
      };
    },


  });
</script>
<style scoped>
</style>
