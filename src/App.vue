<template>
  <v-app>
    <NavbarHeader/>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>
<script lang="ts">
  import Vue from 'vue';
  import NavbarHeader from '@/components/NavbarHeader.vue';
  import Footer from '@/components/Footer.vue';

  export default Vue.extend({
    name: 'App',
    components: {
      NavbarHeader,
      Footer
    },
    data: () => ({
      //
    }),
  });
</script>
