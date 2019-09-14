<template>
  <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-3"
      flat
      hide-no-data
      hide-details
      label="Sök restauranger eller maträtter"
      solo-inverted
  >
  </v-autocomplete>
</template>
<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';

  export default Vue.extend({

    data() {
      return {
        loading: false,
        items: [''],
        pelle: ['', ''],
        search: null,
        select: null
      };
    },

    watch: {
      search(val) {
        val && val !== this.select && this.querySelections(val);
      }
    },

    methods: {
      async querySelections(query: string) {
        this.loading = true;
        const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/searches/search?query=${query}`);
        this.loading = false;
        this.items = ['s', 'dd'];
        this.pelle = response.data;
        // return response.data[0].header;
      }
    }


  });
</script>
<style scoped>
</style>
