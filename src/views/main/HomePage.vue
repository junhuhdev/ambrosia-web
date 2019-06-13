<template>
  <b-container id="home-page">
    <div class="search-bar">
      <h1>Catering levererad till ditt företag</h1>
      <h3 style="margin-bottom: 30px">Vi har samlat dina bästa lokala cateringkök på en plats</h3>
      <SearchBar/>
    </div>
  </b-container>
</template>
<script lang="ts">
  import Vue from 'vue';
  import SearchBar from '@/views/search/SearchBar.vue';

  export default Vue.extend({
    components: {
      SearchBar
    },
  });
</script>
<style >

  .search-bar {
    margin-top: 4em;
  }
</style>
