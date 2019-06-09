<template>
  <div id="app">
    <NavbarHeader/>
    <br>
    <router-view/>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import NavbarHeader from './views/main/NavbarHeader.vue';

  export default Vue.extend({
    components: {
      NavbarHeader
    }
  });
</script>
<style>
  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
