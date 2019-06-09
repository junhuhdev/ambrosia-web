<template>
  <b-container>
    <div class="search-bar">
      <h1>Catering levererad till ditt företag</h1>
      <h3 style="margin-bottom: 30px">Vi har samlat dina bästa lokala cateringkök på en plats</h3>
      <vue-bootstrap-typeahead placeholder="Restaurang, meny, mat..." v-model="query" :data="['McDonald', 'Burger King', 'Mexico']">
        <template slot="append">
          <b-button @click="search" variant="primary">Hitta catering nära dig</b-button>
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
