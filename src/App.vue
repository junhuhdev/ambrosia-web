<template>
  <v-app>
    <NavbarHeader/>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
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

  /*body, html {*/
  /*  padding: 0;*/
  /*  margin: 0;*/
  /*  width: 100%;*/
  /*  min-height: 100%*/
  /*}*/

  /*#home-page  body {*/
  /*  background: url("assets/ambrosia-background.jpg") no-repeat center center fixed;*/
  /*  -webkit-background-size: cover;*/
  /*  -moz-background-size: cover;*/
  /*  -o-background-size: cover;*/
  /*  background-size: cover;*/
  /*}*/
</style>
