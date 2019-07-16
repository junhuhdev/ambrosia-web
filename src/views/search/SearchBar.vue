<template>
  <div>
    <b-row>
      <b-col>
        <vue-bootstrap-typeahead placeholder="Sök restauranger eller maträtter"
                                 v-model="query"
                                 :serializer="s => s.header + ' - ' + s.subHeader + ' - ' + s.city"
                                 :minMatchingChars="3"
                                 :data="searchResult">
          <template slot="append">
            <b-button @click="search" variant="primary">Hitta catering nära dig</b-button>
          </template>
        </vue-bootstrap-typeahead>
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
      this.$store.dispatch('selectMealMetadata');
      this.$store.dispatch('selectMenuCategories');
    },

    methods: {
      async search(query: string) {
        const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/searches/search?query=${query}`);
        // const names = response.data.map((res: any) => {
        //   return res.name;
        // });
        this.searchResult = response.data;
      }
    },

    watch: {
      query(newVal, oldVal) {
        if (newVal.length > 3) {
          const debouncedAjaxCall = _.debounce(() => this.search(newVal), 1000, true);
          debouncedAjaxCall();
        }
      }
    },


  });
</script>
<style scoped>
</style>
