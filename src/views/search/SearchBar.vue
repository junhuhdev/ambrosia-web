<template>
  <div>
    <b-row>
      <b-col>
        <vue-bootstrap-typeahead placeholder="Sök restauranger eller maträtter"
                                 v-model="query"
                                 :minMatchingChars="3"
                                 :data="searchResult">
          <template slot="append">
            <b-button @click="search" variant="primary">Hitta catering nära dig</b-button>
          </template>
        </vue-bootstrap-typeahead>
      </b-col>
    </b-row>
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
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';
  import Multiselect from 'vue-multiselect';
  import axios from 'axios';
  import * as _ from 'underscore';

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

    mounted() {
      this.$store.dispatch('getMealMetadata');
      this.$store.dispatch('getAllMenuCategories');
    },

    methods: {
      async search(query: string) {
        const response = await axios.get(`http://localhost:9000/searches/search?query=${query}`);
        // const names = response.data.map((res: any) => {
        //   return res.name;
        // });
        this.searchResult = response.data;
      }
    },

    watch: {
      query(newVal, oldVal) {
        if (newVal.length > 4) {
          const debouncedAjaxCall = _.debounce(() => this.search(newVal), 1000, true);
          debouncedAjaxCall();
        }
      }
    },


  });
</script>
<style scoped>
</style>
