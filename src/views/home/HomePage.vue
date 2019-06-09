<template>
  <b-container>
    <div class="search-bar">
      <h1 style="margin-bottom: 30px">Vad är jag sugen på?</h1>
      <vue-bootstrap-typeahead placeholder="Restaurang, meny, mat..." v-model="query" :data="['Canada', 'USA', 'Mexico']">
        <template slot="append">
          <b-button @click="search" variant="primary">Sök</b-button>
        </template>
      </vue-bootstrap-typeahead>
    </div>
  </b-container>
</template>
<script lang="ts">
  import Vue from 'vue';
  import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';

  export default Vue.extend({
    components: {VueBootstrapTypeahead},

    data() {
      return {
        query: ''
      };
    },

    methods: {
      search() {

      }
    }
  });
</script>
<style scoped>
  .search-bar {
    margin-top: 4em;
  }
</style>
