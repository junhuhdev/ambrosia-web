<template>
  <div>
    <v-app-bar app dense color="pink darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="mr-5">
        <v-toolbar-title>
          <router-link to="/" class="toolbar-title">Cater You</router-link>
        </v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-for="item in items" :key="item.title" :to="item.link">{{item.title}}</v-btn>
      </v-toolbar-items>
      <CartMenu></CartMenu>
    </v-app-bar>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import CartMenu from '@/components/carts/CartMenu.vue';

  export default Vue.extend({
    components: {
      CartMenu
    },

    data: () => ({
      drawer: null,
      items: [
        {title: 'Vårt urval', link: '/meal'},
        {title: 'Beställ catering', link: '/restaurant'},
        {title: 'Bli leverantör', link: '/catering'},
        {title: 'Kontakta oss', link: '/catering'},
      ]
    })
  });
</script>
<style scoped>
  .toolbar-title {
    color: white;
    text-decoration: none;
  }
</style>
