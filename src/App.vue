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
  import NavbarHeader from '@/components/NavbarHeader.vue';

  export default Vue.extend({
    name: 'App',
    components: {
      NavbarHeader
    },
    data: () => ({
      //
    }),
  });
</script>
