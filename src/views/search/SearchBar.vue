<template>
  <div>
    <vue-bootstrap-typeahead placeholder="Sök restauranger eller maträtter" v-model="searchQuery.query" :data="['McDonald', 'Burger King', 'Mexico']">
      <template slot="append">
        <b-button @click="search" variant="primary">Hitta catering nära dig</b-button>
      </template>
    </vue-bootstrap-typeahead>
    <b-col cols="4">
      <multiselect v-model="searchQuery.preferences"
                   :multiple="true"
                   :options="preferenceOptions">
      </multiselect>
    </b-col>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';
  import Multiselect from 'vue-multiselect';

  export default Vue.extend({
    components: {
      VueBootstrapTypeahead,
      Multiselect
    },

    data() {
      return {
        searchQuery: {
          query: '',
          categories: [],
          preferences: [],
          types: []
        }
      };
    },

    computed: {
      menuOptions(): any {
        return this.$store.getters.menuOptions;
      },

      typeOptions(): any {
        return this.$store.getters.typeOptions;
      },

      preferenceOptions(): any {
        return this.$store.getters.preferenceOptions;
      }

    },

    mounted() {
      this.$store.dispatch('getMealMetadata');
    },

    methods: {
      search() {

      }
    }


  });
</script>
<style scoped>
</style>
