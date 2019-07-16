<template>
  <b-row style="margin-top: 20px">
    <b-col cols="3">
      <multiselect v-model="searchQuery.cities"
                   :multiple="true"
                   placeholder="Välj stad..."
                   :options="cityOptions">
      </multiselect>
    </b-col>
    <b-col cols="3">
      <multiselect v-model="searchQuery.categories"
                   :multiple="true"
                   placeholder="Välj kategorier..."
                   :options="menuCategories">
      </multiselect>
    </b-col>
    <b-col cols="3">
      <multiselect v-model="searchQuery.preferences"
                   :multiple="true"
                   placeholder="Välj preferencer..."
                   :options="preferenceOptions">
      </multiselect>
    </b-col>
    <b-col cols="3">
      <multiselect v-model="searchQuery.types"
                   :multiple="true"
                   placeholder="Välj mat typ..."
                   :options="typeOptions">
      </multiselect>
    </b-col>
  </b-row>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({

    data() {
      return {
        searchQuery: {
          query: '',
          categories: [],
          preferences: [],
          types: [],
          cities: []
        },
        query: '',
        searchResult: [],
        cityOptions: ['Stockholm', 'Göteborg', 'Örebro', 'Lund']
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
      },

      menuCategories(): any {
        return this.$store.getters.menuCategories;
      }

    },


  });
</script>
<style scoped>
</style>
