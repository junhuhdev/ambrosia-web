<template>
  <div>
    <vue-bootstrap-typeahead placeholder="Sök restauranger eller maträtter" v-model="query" :data="['McDonald', 'Burger King', 'Mexico']">
      <template slot="append">
        <b-button @click="search" variant="primary">Hitta catering nära dig</b-button>
      </template>
    </vue-bootstrap-typeahead>
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
        query: ''
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
